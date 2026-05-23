/* ── helpers ── */
const $ = id => document.getElementById(id);

const DAY_LABELS = ['일','월','화','수','목','금','토'];

// Chiikawa character mascots for each day
const DAY_MASCOTS = ['🐾', '🌸', '⭐', '🍡', '✈️'];

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
  }, 2200);
});

function init() {
  // Set chiikawa images once loaded
  const splashImg = document.getElementById('splash-img');
  if (splashImg && window.CHIIKAWA_IMGS) splashImg.src = CHIIKAWA_IMGS.img2;

  const headerImg = document.getElementById('header-mascot-img');
  if (headerImg && window.CHIIKAWA_IMGS) headerImg.src = CHIIKAWA_IMGS.img2;

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
    el.textContent = dayIdx >= 0 ? `✦ 여행 ${dayIdx+1}일차 진행 중 ✦` : '여행 중 ✈️';
  } else if (diff > 0) {
    el.textContent = `두근두근 D-${diff} ♡`;
  } else {
    el.textContent = '소중한 추억 🎉 여행 완료!';
  }
}

/* ── tabs ── */
// Chiikawa images per tab: cycle through img1(pink/angry), img2(green/happy), img3(trio)
// We'll use img1 for odd days, img2 for even, img3 for last day
const TAB_IMGS = [
  { src: () => CHIIKAWA_IMGS?.img2, label: '치이카와' },
  { src: () => CHIIKAWA_IMGS?.img1, label: '치이카와' },
  { src: () => CHIIKAWA_IMGS?.img2, label: '치이카와' },
  { src: () => CHIIKAWA_IMGS?.img1, label: '치이카와' },
  { src: () => CHIIKAWA_IMGS?.img3, label: '치이카와' },
];

function buildTabs() {
  const container = $('day-tabs');
  const today = todayStr();
  TRIP.days.forEach((day, i) => {
    const isToday = day.date === today;
    const d = parseDate(day.date);
    const btn = document.createElement('button');
    btn.className = 'tab' + (isToday ? ' today' : '');
    btn.dataset.idx = i;

    const tabImg = TAB_IMGS[i % TAB_IMGS.length];
    btn.innerHTML = `
      <img class="tab-chiikawa-img" src="" alt="${tabImg.label}" />
      <span class="tab-day">${day.day}일차</span>
      <span class="tab-date">${d.getMonth()+1}/${d.getDate()}${isToday ? ' 🔴' : ''}</span>
    `;
    // Set src after insert (CHIIKAWA_IMGS may load after)
    const imgEl = btn.querySelector('.tab-chiikawa-img');
    const setSrc = () => { if (window.CHIIKAWA_IMGS) imgEl.src = tabImg.src(); };
    setSrc();
    setTimeout(setSrc, 300);

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
    // Add chiikawa img to banner if not there
    const inner = banner.querySelector('.now-banner-inner');
    if (inner && !inner.querySelector('.now-banner-chiikawa') && window.CHIIKAWA_IMGS) {
      const img = document.createElement('img');
      img.src = CHIIKAWA_IMGS.img2;
      img.className = 'now-banner-chiikawa';
      img.alt = '';
      inner.appendChild(img);
    }
  } else {
    banner.classList.add('hidden');
  }
}

/* ── day header gradients (chiikawa pastel palette) ── */
const DAY_GRADIENTS = [
  'linear-gradient(135deg, #b8d4f8 0%, #c8a8f0 100%)',  // blue-lilac
  'linear-gradient(135deg, #a8e0c8 0%, #90c0f0 100%)',  // mint-blue
  'linear-gradient(135deg, #f8c8d4 0%, #e8a8e0 100%)',  // pink-lavender
  'linear-gradient(135deg, #f8e0a0 0%, #f0c8b0 100%)',  // cream-peach
  'linear-gradient(135deg, #d4c0f8 0%, #f8a8c8 100%)',  // violet-pink
];

// Which chiikawa img to use in day header
const DAY_HEADER_IMGS = [
  () => CHIIKAWA_IMGS?.img2,  // day1
  () => CHIIKAWA_IMGS?.img1,  // day2
  () => CHIIKAWA_IMGS?.img3,  // day3
  () => CHIIKAWA_IMGS?.img1,  // day4
  () => CHIIKAWA_IMGS?.img3,  // day5
];

/* ── chiikawa category icons ── */
const CAT_DECORATIONS = {
  transport: '🚃',
  food: '🍡',
  hotel: '🏠',
  tour: '🎀',
  activity: '⭐'
};

/* ── render day ── */
function renderDay(idx) {
  const day = TRIP.days[idx];
  const content = $('content');
  content.innerHTML = '';

  const today = todayStr();
  const isToday = day.date === today;
  const nowMin = isToday ? nowMinutes() : -1;

  // Day header card
  const hCard = document.createElement('div');
  hCard.className = 'day-header-card';
  hCard.style.background = DAY_GRADIENTS[idx % DAY_GRADIENTS.length];
  hCard.style.color = '#fff';

  const headerImgSrc = DAY_HEADER_IMGS[idx % DAY_HEADER_IMGS.length]?.() || '';

  hCard.innerHTML = `
    <div class="dhc-emoji">${day.emoji}</div>
    <div class="dhc-day">✦ ${day.day}일차 ✦</div>
    <div class="dhc-label">${day.label}</div>
    <div class="dhc-date">${formatDateKo(day.date)}</div>
    <img class="dhc-chiikawa" src="${headerImgSrc}" alt="치이카와" />
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
    const progressImgSrc = window.CHIIKAWA_IMGS?.img2 || '';
    prog.innerHTML = `
      <img src="${progressImgSrc}" class="progress-chibi" alt="" style="width:22px;height:22px;object-fit:contain;" />
      <div class="progress-track"><div class="progress-fill" style="width:${pct.toFixed(1)}%"></div></div>
      <div class="progress-label">${done}/${items.length}</div>
    `;
    content.appendChild(prog);
  }

  // Timeline
  const tl = document.createElement('div');
  tl.className = 'timeline';

  // Insert chiikawa divider every ~4 items
  const dividerImg1 = window.CHIIKAWA_IMGS?.img1 || '';
  const dividerImg2 = window.CHIIKAWA_IMGS?.img2 || '';

  day.items.forEach((item, itemIdx) => {
    // Insert cute divider every 4 items (not at start)
    if (itemIdx > 0 && itemIdx % 4 === 0) {
      const div = document.createElement('div');
      div.className = 'tl-chiikawa-divider';
      const dSrc = itemIdx % 8 === 0 ? dividerImg1 : dividerImg2;
      div.innerHTML = `<img src="${dSrc}" alt="" />`;
      tl.appendChild(div);
    }

    const startMin = toMinutes(item.time);
    const endMin = item.endTime ? toMinutes(item.endTime) : startMin + 60;
    const isNow = isToday && nowMin >= startMin && nowMin < endMin;
    const isPast = isToday && nowMin >= endMin;
    const hasInfo = !!item.info;
    const hasMap = !!item.mapUrl;
    const isClickable = hasInfo || hasMap;

    const row = document.createElement('div');
    row.className = `tl-item${isNow ? ' now-item' : ''}${isPast ? ' past-item' : ''}`;
    row.dataset.cat = item.category;

    const tagMap = {
      transport: '이동', food: '맛있는 것', hotel: '숙소', tour: '관광', activity: '액티비티'
    };

    const dotColors = {
      transport: '#90c0f0',
      food: '#90d0a8',
      hotel: '#f5e090',
      tour: '#c8a8f0',
      activity: '#f0b870'
    };
    const dotColor = isNow ? '#f07090' : (dotColors[item.category] || '#c8a8f0');

    row.innerHTML = `
      <div class="tl-time-col"><span class="tl-time">${item.time}</span></div>
      <div class="tl-dot-col">
        <div class="tl-dot" style="background:${dotColor}; border-color: var(--bg);"></div>
      </div>
      <div class="tl-card${hasInfo ? ' tl-has-info' : ''}">
        ${isNow ? '<div class="now-label-inline">진행 중</div>' : ''}
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
          ${hasMap ? '<span class="tl-tag tag-map">📍 지도</span>' : ''}
        </div>
      </div>
    `;

    if (isClickable) {
      row.style.cursor = 'pointer';
      row.addEventListener('click', () => {
        if (item.category === 'hotel' && item.mapUrl) {
          window.open(item.mapUrl, '_blank', 'noopener');
        } else if (hasInfo) {
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
        <span>📍</span> Google Maps에서 찾기 ✦
      </a>`
    : '';

  const chiikawaTail = window.CHIIKAWA_IMGS
    ? `<div style="text-align:center;margin-top:18px;opacity:0.5;">
        <img src="${CHIIKAWA_IMGS.img2}" alt="" style="width:44px;height:44px;object-fit:contain;" />
       </div>`
    : '';

  body.innerHTML = `
    <div class="modal-handle"></div>
    <div class="modal-icon">${item.icon}</div>
    <div class="modal-time">${item.time}${endTimeHtml}</div>
    <div class="modal-title">${item.title}</div>
    ${item.detail ? `<div class="modal-detail">${item.detail}</div>` : ''}
    ${infoHtml}
    ${mapBtnHtml}
    ${chiikawaTail}
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
