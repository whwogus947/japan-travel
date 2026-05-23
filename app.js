/* ── helpers ── */
const $ = id => document.getElementById(id);

const DAY_LABELS = ['일','월','화','수','목','금','토'];

function parseDate(str) {
  const [y,m,d] = str.split('-').map(Number);
  return new Date(y, m-1, d);
}

function toMinutes(timeStr) {
  if (!timeStr) return null;
  const [h,m] = timeStr.split(':').map(Number);
  return h * 60 + m;
}

function formatDateKo(dateStr) {
  const d = parseDate(dateStr);
  return `6월 ${d.getDate()}일 (${DAY_LABELS[d.getDay()]})`;
}

function nowMinutes() {
  const n = new Date();
  return n.getHours() * 60 + n.getMinutes();
}

function getKSTNow() {
  const now = new Date();
  const utc = now.getTime() + now.getTimezoneOffset() * 60000;
  return new Date(utc + 9 * 3600000);
}

function todayStr() {
  const n = getKSTNow();
  return `${n.getFullYear()}-${String(n.getMonth()+1).padStart(2,'0')}-${String(n.getDate()).padStart(2,'0')}`;
}

/* ── state ── */
let activeDay = 0;
let modalOpen = false;

/* ── init ── */
window.addEventListener('load', () => {
  setTimeout(() => {
    $('splash').style.display = 'none';
    $('app').classList.remove('hidden');
    $('app').classList.add('visible');
    init();
  }, 2100);
});

function init() {
  buildTabs();
  updateCountdown();
  setInterval(updateCountdown, 60000);

  const today = todayStr();
  const todayIdx = TRIP.days.findIndex(d => d.date === today);
  activeDay = todayIdx >= 0 ? todayIdx : 0;

  renderDay(activeDay);
  setActiveTab(activeDay);
  updateNowBanner();
}

/* ── countdown ── */
function updateCountdown() {
  const now = getKSTNow();
  const start = parseDate(TRIP.startDate);
  const diff = Math.ceil((start - now) / 86400000);
  const el = $('header-countdown');
  if (!el) return;
  const today = todayStr();
  if (today >= TRIP.startDate && today <= TRIP.days[TRIP.days.length-1].date) {
    const dayIdx = TRIP.days.findIndex(d => d.date === today);
    el.textContent = dayIdx >= 0 ? `여행 ${dayIdx+1}일차 진행 중` : '여행 중 ✈️';
  } else if (diff > 0) {
    el.textContent = `여행까지 D-${diff}`;
  } else {
    el.textContent = '여행 완료 🎉';
  }
}

/* ── tabs ── */
function buildTabs() {
  const container = $('day-tabs');
  const today = todayStr();
  TRIP.days.forEach((day, i) => {
    const isToday = day.date === today;
    const d = parseDate(day.date);
    const btn = document.createElement('button');
    btn.className = 'tab' + (isToday ? ' today' : '');
    btn.dataset.idx = i;
    btn.innerHTML = `
      <span class="tab-emoji">${day.emoji}</span>
      <span class="tab-day">${day.day}일차</span>
      <span class="tab-date">${d.getMonth()+1}/${d.getDate()}${isToday ? ' 🔴' : ''}</span>
    `;
    btn.addEventListener('click', () => {
      activeDay = i;
      setActiveTab(i);
      renderDay(i);
    });
    container.appendChild(btn);
  });
}

function setActiveTab(idx) {
  document.querySelectorAll('.tab').forEach((t, i) => {
    t.classList.toggle('active', i === idx);
  });
  const tabs = document.querySelectorAll('.tab');
  if (tabs[idx]) tabs[idx].scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
}

/* ── now banner ── */
function updateNowBanner() {
  const today = todayStr();
  const dayData = TRIP.days.find(d => d.date === today);
  const banner = $('now-banner');
  const nowTxt = $('now-text');
  if (!dayData) { banner.classList.add('hidden'); return; }

  const nowMin = nowMinutes();
  let current = null;
  for (let i = 0; i < dayData.items.length; i++) {
    const item = dayData.items[i];
    const start = toMinutes(item.time);
    const end = item.endTime ? toMinutes(item.endTime) : (toMinutes(dayData.items[i+1]?.time) || start + 60);
    if (nowMin >= start && nowMin < end) { current = item; break; }
  }
  if (current) {
    banner.classList.remove('hidden');
    nowTxt.textContent = `${current.icon} ${current.title}`;
  } else {
    banner.classList.add('hidden');
  }
}

/* ── render day ── */
function renderDay(idx) {
  const day = TRIP.days[idx];
  const content = $('content');
  content.innerHTML = '';

  const today = todayStr();
  const isToday = day.date === today;
  const nowMin = isToday ? nowMinutes() : -1;

  // Day header card
  const d = parseDate(day.date);
  const hCard = document.createElement('div');
  hCard.className = 'day-header-card';
  hCard.style.background = `linear-gradient(135deg, ${day.color}22, ${day.color}10)`;
  hCard.style.borderLeft = `3px solid ${day.color}`;
  hCard.innerHTML = `
    <div class="dhc-emoji">${day.emoji}</div>
    <div class="dhc-day">${day.day}일차</div>
    <div class="dhc-label">${day.label}</div>
    <div class="dhc-date">${formatDateKo(day.date)}</div>
  `;
  content.appendChild(hCard);

  // Progress bar (only for today)
  if (isToday) {
    const items = day.items;
    const firstMin = toMinutes(items[0].time);
    const lastMin = toMinutes(items[items.length-1].time);
    const pct = Math.min(100, Math.max(0, ((nowMin - firstMin) / (lastMin - firstMin)) * 100));
    const done = items.filter(it => {
      const end = it.endTime ? toMinutes(it.endTime) : toMinutes(it.time) + 60;
      return nowMin >= end;
    }).length;
    const prog = document.createElement('div');
    prog.className = 'day-progress';
    prog.innerHTML = `
      <div class="progress-track"><div class="progress-fill" style="width:${pct.toFixed(1)}%"></div></div>
      <div class="progress-label">${done}/${items.length}</div>
    `;
    content.appendChild(prog);
  }

  // Timeline
  const tl = document.createElement('div');
  tl.className = 'timeline';

  day.items.forEach(item => {
    const startMin = toMinutes(item.time);
    const endMin = item.endTime ? toMinutes(item.endTime) : startMin + 60;
    const isNow = isToday && nowMin >= startMin && nowMin < endMin;
    const isPast = isToday && nowMin >= endMin;
    const hasInfo = !!item.info;
    const hasMap = !!item.mapUrl;
    const isClickable = hasInfo || hasMap;

    const row = document.createElement('div');
    row.className = `tl-item${isNow ? ' now-item' : ''}${isPast ? ' past-item' : ''}`;

    const tagMap = {
      transport: '이동', food: '식사', hotel: '숙소', tour: '관광', activity: '액티비티'
    };

    row.innerHTML = `
      <div class="tl-time-col"><span class="tl-time">${item.time}</span></div>
      <div class="tl-dot-col">
        <div class="tl-dot" style="background:${isNow ? 'var(--now-color)' : day.color}; border-color: var(--bg);"></div>
      </div>
      <div class="tl-card${hasInfo ? ' tl-has-info' : ''}">
        ${isNow ? '<div class="now-label-inline">● 진행 중</div>' : ''}
        <div class="tl-card-top">
          <span class="tl-icon">${item.icon}</span>
          <div class="tl-info">
            <div class="tl-title">${item.title}</div>
            ${item.detail ? `<div class="tl-detail">${item.detail}</div>` : ''}
          </div>
          ${hasInfo ? '<span class="tl-arrow">›</span>' : (hasMap ? '<span class="tl-map-icon">📍</span>' : '')}
        </div>
        <div class="tl-tags">
          <span class="tl-tag tag-${item.category}">${tagMap[item.category]||item.category}</span>
          ${hasMap ? '<span class="tl-tag tag-map">지도</span>' : ''}
        </div>
      </div>
    `;

    if (isClickable) {
      row.style.cursor = 'pointer';
      row.addEventListener('click', () => {
        if (hasInfo) {
          openModal(item, day);
        } else if (hasMap) {
          window.open(item.mapUrl, '_blank', 'noopener');
        }
      });
    }

    tl.appendChild(row);
  });

  content.appendChild(tl);

  // Scroll to now
  if (isToday) setTimeout(scrollToNow, 100);
}

/* ── scroll to now ── */
function scrollToNow() {
  const nowEl = document.querySelector('.now-item');
  if (nowEl) {
    const y = nowEl.getBoundingClientRect().top + window.scrollY - 140;
    window.scrollTo({ top: y, behavior: 'smooth' });
  }
}

/* ── modal ── */
function openModal(item, day) {
  const overlay = $('modal-overlay');
  const body = $('modal-body');

  let infoHtml = '';
  if (item.info) {
    infoHtml = `
      <div class="modal-section">
        <div class="modal-section-label">${item.info.label}</div>
        <ul class="modal-info-list">
          ${item.info.items.map(i => `<li>${i}</li>`).join('')}
        </ul>
      </div>
    `;
  }

  const endTimeHtml = item.endTime ? ` → ${item.endTime}` : '';

  const mapBtnHtml = item.mapUrl
    ? `<a class="modal-map-btn" href="${item.mapUrl}" target="_blank" rel="noopener">
        <span>📍</span> Google Maps에서 찾기
      </a>`
    : '';

  body.innerHTML = `
    <div class="modal-handle"></div>
    <div class="modal-icon">${item.icon}</div>
    <div class="modal-time">${item.time}${endTimeHtml}</div>
    <div class="modal-title">${item.title}</div>
    ${item.detail ? `<div class="modal-detail">${item.detail}</div>` : ''}
    ${infoHtml}
    ${mapBtnHtml}
  `;

  overlay.classList.remove('hidden');
  document.body.style.overflow = 'hidden';
  modalOpen = true;
}

function closeModal() {
  $('modal-overlay').classList.add('hidden');
  document.body.style.overflow = '';
  modalOpen = false;
}

// swipe down to close modal
let touchStartY = 0;
$('modal').addEventListener('touchstart', e => { touchStartY = e.touches[0].clientY; }, { passive: true });
$('modal').addEventListener('touchmove', e => {
  const dy = e.touches[0].clientY - touchStartY;
  if (dy > 80) closeModal();
}, { passive: true });

// keyboard
document.addEventListener('keydown', e => { if (e.key === 'Escape' && modalOpen) closeModal(); });
