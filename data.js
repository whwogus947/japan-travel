const TRIP = {
  title: "쪼햄이 & 소정이의 오사카·교토 여행",
  startDate: "2026-06-09",
  days: [
    {
      day: 1,
      date: "2026-06-09",
      label: "오사카 첫날",
      emoji: "✈️",
      color: "#4A90D9",
      items: [
        {
          time: "10:55", endTime: "12:20",
          category: "transport",
          icon: "✈️",
          title: "일본 도착 · 입국심사",
          detail: "간사이 국제공항 도착 후 입국심사 및 짐 수령",
          mapUrl: "https://maps.google.com/maps?q=간사이+국제공항",
          info: {
            label: "이동 정보",
            items: [
              "입국심사 + 짐 수령 약 1시간 20~30분 소요",
              "공항 → 난바: 난카이 라피트 약 34분 (1,490엔)",
              "라피트 사전 예약 권장 — 짐 많을 때 좌석 편함"
            ]
          }
        },
        {
          time: "12:30", endTime: "13:30",
          category: "food",
          icon: "🍴",
          title: "점심 · 고기로바타 솥밥집",
          detail: "일본 전통 솥밥 & 로바타야키",
          mapUrl: "https://maps.google.com/maps?q=고기로바타+솥밥+오사카+난바",
          info: {
            label: "식당 정보",
            items: [
              "위치: 오사카 난바 근처",
              "추천 메뉴: 솥밥 정식",
              "웨이팅 있을 수 있으니 도착 후 바로 이동"
            ]
          }
        },
        {
          time: "13:30", endTime: "14:30",
          category: "hotel",
          icon: "🏨",
          title: "숙소 이동 · 체크인",
          detail: "숙소 체크인 & 짐 정리",
          mapUrl: "https://maps.google.com/maps?q=난바+오사카+호텔",
          info: {
            label: "이동 정보",
            items: [
              "식당 → 숙소: 도보 또는 지하철 5~10분",
              "짐 정리 후 가벼운 복장으로 환복 권장"
            ]
          }
        },
        {
          time: "14:30", endTime: "17:30",
          category: "tour",
          icon: "🛍️",
          title: "덴덴타운 · 난바파크스 · 도톤보리",
          detail: "가챠가챠의 숲 포함 자유 구경",
          mapUrl: "https://maps.google.com/maps?q=도톤보리+오사카",
          info: {
            label: "관광 정보",
            items: [
              "덴덴타운: 일본 전자·서브컬처 거리 (숙소에서 도보 가능)",
              "도톤보리: 글리코상 간판 포토스팟",
              "가챠가챠의 숲: 다양한 캡슐 자판기 집결지",
              "난바파크스: 쇼핑몰, 옥상 정원"
            ]
          }
        },
        {
          time: "17:30", endTime: "18:00",
          category: "transport",
          icon: "🚃",
          title: "소라니와 온천 이동",
          detail: "지하철 이동",
          mapUrl: "https://maps.google.com/maps?q=空庭温泉+OSAKA+BAY+TOWER",
          info: {
            label: "이동 정보",
            items: [
              "오사카 메트로 중앙선 → 벤텐초역 하차",
              "벤텐초역 서쪽 개찰구 2A 출구에서 바로",
              "소요시간 약 25~30분"
            ]
          }
        },
        {
          time: "18:00", endTime: "19:30",
          category: "activity",
          icon: "♨️",
          title: "소라니와 온천",
          detail: "오사카베이타워 온천 테마파크",
          mapUrl: "https://maps.google.com/maps?q=空庭温泉+OSAKA+BAY+TOWER",
          info: {
            label: "온천 정보",
            items: [
              "운영: 11:00~23:00 (마지막 입장 21:00)",
              "유카타 대여 가능, 9종류 목욕탕",
              "문신 패치 최대 5개 허용 (공식 홈페이지 확인)",
              "사전 티켓 구매 시 할인"
            ]
          }
        },
        {
          time: "19:30", endTime: "20:30",
          category: "activity",
          icon: "♨️",
          title: "소라니와 개인탕",
          detail: "프라이빗 노천탕",
          mapUrl: "https://maps.google.com/maps?q=空庭温泉+OSAKA+BAY+TOWER",
          info: {
            label: "예약 필수",
            items: [
              "⚠️ 사전 예약 필수 — 공식 홈페이지에서 예약",
              "1~4인용 싱글실 / 4~6인용 특별실 선택",
              "추가 요금 발생"
            ]
          }
        },
        {
          time: "20:45", endTime: "21:30",
          category: "transport",
          icon: "🚃",
          title: "온천 → 숙소 복귀",
          detail: "이동 후 이자카야 출발",
          mapUrl: "https://maps.google.com/maps?q=난바+오사카",
          info: {
            label: "이동 정보",
            items: [
              "벤텐초역 → 난바 방면 오사카 메트로",
              "탈의 + 이동 준비 15분 확보",
              "약 25~30분 소요"
            ]
          }
        },
        {
          time: "21:30", endTime: "23:00",
          category: "food",
          icon: "🍢",
          title: "스미야키 이자카야 (예약)",
          detail: "숯불구이 이자카야 저녁",
          mapUrl: "https://maps.google.com/maps?q=스미야키+이자카야+오사카+난바",
          info: {
            label: "식당 정보",
            items: [
              "예약 완료 — 시간 엄수",
              "⚠️ 수정: 온천 일정 고려해 21:30으로 조정",
              "이자카야가 숙소 바로 근처라면 22:00 유지 가능"
            ]
          }
        },
        {
          time: "23:00", endTime: "24:00",
          category: "hotel",
          icon: "🏨",
          title: "숙소 복귀",
          detail: "",
          mapUrl: "https://maps.google.com/maps?q=난바+오사카",
          info: null
        }
      ]
    },
    {
      day: 2,
      date: "2026-06-10",
      label: "오사카 둘째날",
      emoji: "🛍️",
      color: "#5BA85A",
      items: [
        {
          time: "09:10", endTime: "09:50",
          category: "transport",
          icon: "🚃",
          title: "무기토멘스케로 출발",
          detail: "지하철 약 35~40분",
          mapUrl: "https://maps.google.com/maps?q=麦と麺助+大阪+梅田",
          info: {
            label: "이동 정보",
            items: [
              "오사카 메트로 미도스지선 → 우메다역",
              "또는 난바역 → 우메다역 직통",
              "약 35~40분 소요"
            ]
          }
        },
        {
          time: "09:50", endTime: "12:00",
          category: "food",
          icon: "🍜",
          title: "무기토멘스케 웨이팅 & 식사",
          detail: "우동 맛집",
          mapUrl: "https://maps.google.com/maps?q=麦と麺助+大阪+梅田",
          info: {
            label: "식당 정보",
            items: [
              "위치: 우메다 근처",
              "인기 맛집 — 웨이팅 1~2시간 예상",
              "이른 방문 필수, 줄 서는 시간도 여행의 일부!"
            ]
          }
        },
        {
          time: "12:30", endTime: "15:30",
          category: "tour",
          icon: "🛍️",
          title: "우메다 쇼핑",
          detail: "한큐백화점 · 루쿠아 · 그랜드프론트",
          mapUrl: "https://maps.google.com/maps?q=우메다+한큐백화점+오사카",
          info: {
            label: "쇼핑 정보",
            items: [
              "한큐백화점: 지하 식품관 추천",
              "루쿠아: 패션·잡화 트렌드 집결",
              "그랜드프론트 오사카: 지하 1층 식품·디저트 맛집 多",
              "세 곳 모두 우메다역 도보권"
            ]
          }
        },
        {
          time: "15:30", endTime: "17:30",
          category: "activity",
          icon: "☕",
          title: "우메다 자유시간 · 카페",
          detail: "휴식",
          mapUrl: "https://maps.google.com/maps?q=그랜드프론트+오사카+우메다",
          info: {
            label: "추천 카페",
            items: [
              "% Arabica 우메다점 (커피 명소)",
              "루쿠아 내 카페도 뷰 좋음",
              "그랜드프론트 북관 지하 디저트 카페"
            ]
          }
        },
        {
          time: "18:00", endTime: "18:30",
          category: "transport",
          icon: "🚃",
          title: "야키니쿠 고리짱 이동",
          detail: "",
          mapUrl: "https://maps.google.com/maps?q=야키니쿠+고리짱+오사카",
          info: {
            label: "이동 정보",
            items: [
              "우메다 → 식당: 도보 또는 택시",
              "위치 사전 확인 후 이동"
            ]
          }
        },
        {
          time: "18:30", endTime: "20:00",
          category: "food",
          icon: "🥩",
          title: "저녁 · 야키니쿠 고리짱",
          detail: "와규 야키니쿠",
          mapUrl: "https://maps.google.com/maps?q=야키니쿠+고리짱+오사카",
          info: {
            label: "식당 정보",
            items: [
              "예약 여부 사전 확인 권장",
              "와규 야키니쿠 전문점",
              "위치: 우메다 근처"
            ]
          }
        },
        {
          time: "20:00", endTime: "21:00",
          category: "tour",
          icon: "🎡",
          title: "햅파이브 관람차 & 우메다 야경",
          detail: "",
          mapUrl: "https://maps.google.com/maps?q=헵파이브+관람차+오사카+우메다",
          info: {
            label: "관광 정보",
            items: [
              "햅파이브 관람차: 야간 조명 예쁨",
              "우메다 스카이빌딩 공중정원 (별도 입장료) 선택 가능",
              "야경 감상 최적 시간"
            ]
          }
        },
        {
          time: "21:00", endTime: "21:40",
          category: "transport",
          icon: "🚃",
          title: "숙소 복귀",
          detail: "",
          mapUrl: "https://maps.google.com/maps?q=난바+오사카",
          info: null
        },
        {
          time: "22:00", endTime: "23:30",
          category: "tour",
          icon: "🌃",
          title: "선택 일정 · 신세카이 밤산책",
          detail: "숙소 ↔ 신세카이 도보 15~20분",
          mapUrl: "https://maps.google.com/maps?q=신세카이+츠텐카쿠+오사카",
          info: {
            label: "관광 정보",
            items: [
              "츠텐카쿠 야경 (유료 전망대)",
              "쿠시카츠 거리: 꼬치 야식",
              "편의점 야식도 OK",
              "숙소에서 도보 15~20분"
            ]
          }
        },
        {
          time: "23:30", endTime: "24:00",
          category: "hotel",
          icon: "🏨",
          title: "숙소 복귀",
          detail: "",
          mapUrl: "https://maps.google.com/maps?q=난바+오사카",
          info: null
        }
      ]
    },
    {
      day: 3,
      date: "2026-06-11",
      label: "교토 첫날",
      emoji: "🏯",
      color: "#C4763A",
      items: [
        {
          time: "10:00", endTime: "11:00",
          category: "transport",
          icon: "🚃",
          title: "오사카 → 교토 이동",
          detail: "JR 신쾌속 약 50~60분",
          mapUrl: "https://maps.google.com/maps?q=교토역",
          info: {
            label: "이동 정보",
            items: [
              "오사카역 → 교토역: JR 신쾌속 약 50~60분",
              "요금: 약 570엔 (IC카드 사용 가능)",
              "ICOCA 또는 Suica 사용 편리",
              "짐은 숙소에 먼저 맡기거나 코인로커 활용"
            ]
          }
        },
        {
          time: "11:00", endTime: "12:00",
          category: "food",
          icon: "🍣",
          title: "점심 · 교토 센료 초밥 오마카세",
          detail: "교토역 도보 1분",
          mapUrl: "https://maps.google.com/maps?q=京都+千両+寿司+京都駅",
          info: {
            label: "식당 정보",
            items: [
              "⚠️ 사전 예약 강력 권장",
              "교토역 바로 앞 — 도보 1분",
              "오마카세 세트 주료(7점) / 고젠 센료(9점+튀김)",
              "일본 전통 목공 인테리어, 카운터석·개인실"
            ]
          }
        },
        {
          time: "12:00", endTime: "12:30",
          category: "hotel",
          icon: "🏨",
          title: "교토 숙소 체크인 & 짐 정리",
          detail: "",
          mapUrl: "https://maps.google.com/maps?q=교토역+호텔",
          info: null
        },
        {
          time: "12:30", endTime: "13:30",
          category: "transport",
          icon: "🚌",
          title: "오하라 이동",
          detail: "버스 약 1시간",
          mapUrl: "https://maps.google.com/maps?q=大原+京都",
          info: {
            label: "이동 정보",
            items: [
              "교토역 버스터미널 C3승강장 → 17번 버스",
              "오하라(大原) 하차, 약 60분 소요",
              "요금: 약 580엔",
              "IC카드 사용 가능"
            ]
          }
        },
        {
          time: "13:30", endTime: "15:20",
          category: "tour",
          icon: "🏯",
          title: "산젠인 관광",
          detail: "교토 오하라의 천년 고찰",
          mapUrl: "https://maps.google.com/maps?q=三千院+大原+京都",
          info: {
            label: "관광 정보",
            items: [
              "입장료: 700엔",
              "이끼 정원과 오왕래불 유명",
              "소요시간 약 1시간~1시간 30분"
            ]
          }
        },
        {
          time: "15:20", endTime: "15:40",
          category: "tour",
          icon: "🏯",
          title: "호센인 관광",
          detail: "오하라 소재 정원 절",
          mapUrl: "https://maps.google.com/maps?q=宝泉院+大原+京都",
          info: {
            label: "관광 정보",
            items: [
              "입장료: 800엔 (말차·과자 포함)",
              "수령 700년 이상 오엽송 명물",
              "산젠인에서 도보 5분"
            ]
          }
        },
        {
          time: "15:40", endTime: "16:10",
          category: "tour",
          icon: "🚶",
          title: "오하라 거리 산책",
          detail: "",
          mapUrl: "https://maps.google.com/maps?q=大原+京都",
          info: {
            label: "추천",
            items: [
              "오하라 채소·절임 특산품 가게 구경",
              "현지 두부 아이스크림 추천",
              "조용하고 시골스러운 분위기"
            ]
          }
        },
        {
          time: "16:10", endTime: "17:10",
          category: "transport",
          icon: "🚌",
          title: "오하라 → 교토 시내 복귀",
          detail: "버스/JR 약 40분",
          mapUrl: "https://maps.google.com/maps?q=교토역",
          info: {
            label: "이동 정보",
            items: [
              "오하라 버스정류장 → 교토역 또는 가와라마치",
              "17번 버스 탑승, 약 40~60분",
              "혼잡 시간대 주의"
            ]
          }
        },
        {
          time: "17:10", endTime: "18:40",
          category: "activity",
          icon: "🌅",
          title: "가모강 일몰 감상",
          detail: "",
          mapUrl: "https://maps.google.com/maps?q=鴨川+京都",
          info: {
            label: "장소 정보",
            items: [
              "가모강 강변 — 교토 시민의 일상 공간",
              "강변 계단에 앉아 일몰 감상",
              "근처 편의점에서 음료 사서 즐기기 추천"
            ]
          }
        },
        {
          time: "18:40", endTime: "19:40",
          category: "food",
          icon: "🍳",
          title: "저녁 · 카메쨩",
          detail: "오코노미야끼 · 야끼소바",
          mapUrl: "https://maps.google.com/maps?q=かめちゃん+お好み焼き+京都",
          info: {
            label: "식당 정보",
            items: [
              "위치: 교토 시내",
              "오코노미야끼·야끼소바 전문점",
              "예약 여부 사전 확인"
            ]
          }
        },
        {
          time: "19:40", endTime: "20:40",
          category: "tour",
          icon: "🛍️",
          title: "쇼핑 · 신쿄고쿠 · 테라마치 · SOU·SOU",
          detail: "",
          mapUrl: "https://maps.google.com/maps?q=新京極+寺町+京都",
          info: {
            label: "쇼핑 정보",
            items: [
              "신쿄고쿠: 기념품·과자·잡화 거리",
              "테라마치: 앤틱·문구·전통잡화",
              "SOU·SOU: 일본 전통 패턴 의류·소품 브랜드",
              "카메쨩에서 도보 5분 이내"
            ]
          }
        },
        {
          time: "20:40", endTime: "21:10",
          category: "activity",
          icon: "🛒",
          title: "마트 장보기",
          detail: "Gyōmu Super Shijo Teramachi",
          mapUrl: "https://maps.google.com/maps?q=業務スーパー+四条寺町+京都",
          info: {
            label: "마트 정보",
            items: [
              "業務スーパー (업무용 슈퍼) — 저렴한 식재료",
              "음료·간식·컵라면 등 숙소용 쇼핑",
              "테라마치 쇼핑 후 바로 들르기 좋음"
            ]
          }
        },
        {
          time: "21:10", endTime: "21:30",
          category: "hotel",
          icon: "🏨",
          title: "숙소 복귀",
          detail: "",
          mapUrl: "https://maps.google.com/maps?q=난바+오사카",
          info: null
        }
      ]
    },
    {
      day: 4,
      date: "2026-06-12",
      label: "교토 둘째날",
      emoji: "🌅",
      color: "#7B5EA7",
      items: [
        {
          time: "07:00", endTime: "07:40",
          category: "transport",
          icon: "🚌",
          title: "청수사 출발 이동",
          detail: "버스/도보 약 35~45분",
          mapUrl: "https://maps.google.com/maps?q=清水寺+京都",
          info: {
            label: "이동 정보",
            items: [
              "교토역 → 기요미즈미치: 버스 206번",
              "약 15~20분, 청수사까지 도보 10분",
              "🌅 개방: 06:00 — 이른 방문으로 인파 최소화"
            ]
          }
        },
        {
          time: "07:40", endTime: "09:30",
          category: "tour",
          icon: "🏯",
          title: "청수사 & 산넨자카 · 니넨자카",
          detail: "세계문화유산",
          mapUrl: "https://maps.google.com/maps?q=清水寺+産寧坂+京都",
          info: {
            label: "관광 정보",
            items: [
              "입장료: 400엔",
              "개방: 06:00~18:00",
              "기요미즈 무대: 높이 13m 목조 테라스",
              "산넨자카·니넨자카: 에도시대 돌계단 거리",
              "아침 7시대 방문 시 관광객 거의 없음 — 최고!"
            ]
          }
        },
        {
          time: "09:30", endTime: "10:10",
          category: "transport",
          icon: "🚍",
          title: "숙소 복귀",
          detail: "버스 약 35~40분",
          mapUrl: "https://maps.google.com/maps?q=난바+오사카",
          info: {
            label: "이동 정보",
            items: [
              "기요미즈미치 정류장 → 숙소 방면",
              "버스 또는 도보+지하철"
            ]
          }
        },
        {
          time: "10:10", endTime: "11:00",
          category: "hotel",
          icon: "🏨",
          title: "숙소 휴식 및 준비",
          detail: "",
          mapUrl: "https://maps.google.com/maps?q=교토역+호텔",
          info: null
        },
        {
          time: "11:00", endTime: "12:20",
          category: "transport",
          icon: "🚃",
          title: "오미하치만 출발",
          detail: "JR + 버스 약 1시간 20분",
          mapUrl: "https://maps.google.com/maps?q=近江八幡駅+滋賀",
          info: {
            label: "⚠️ 정각 출발 필수",
            items: [
              "교토역 → JR 비와코선 → 오미하치만역",
              "오미하치만역 → 버스 약 10분",
              "총 약 1시간 20분 소요",
              "⚠️ 11:00 정각 출발해야 점심 시간 맞음"
            ]
          }
        },
        {
          time: "12:20", endTime: "13:20",
          category: "food",
          icon: "🐟",
          title: "점심 · 26 Otowacho 장어덮밥",
          detail: "히쓰마부시 장어덮밥",
          mapUrl: "https://maps.google.com/maps?q=26+Otowacho+近江八幡+うなぎ",
          info: {
            label: "식당 정보",
            items: [
              "위치: 오미하치만 하치만보리 근처",
              "사전 예약 권장",
              "장어덮밥 (히쓰마부시) 전문"
            ]
          }
        },
        {
          time: "13:20", endTime: "14:50",
          category: "tour",
          icon: "🏯",
          title: "하치만보리 관광",
          detail: "오미하치만 수로 & 전통 거리",
          mapUrl: "https://maps.google.com/maps?q=八幡堀+近江八幡",
          info: {
            label: "관광 정보",
            items: [
              "에도시대 상인 마을 분위기",
              "뱃놀이 (야카타부네) 체험 가능 — 약 1,600엔",
              "일본 드라마 촬영지로도 유명"
            ]
          }
        },
        {
          time: "14:50", endTime: "15:20",
          category: "activity",
          icon: "🍰",
          title: "라코리나 근江八幡 방문",
          detail: "버터샌드·카스텔라로 유명한 클럽하리에",
          mapUrl: "https://maps.google.com/maps?q=ラコリーナ近江八幡",
          info: {
            label: "카페 정보",
            items: [
              "클럽하리에 본점 — 바움쿠헨·버터샌드 유명",
              "잔디 지붕 건물 포토스팟",
              "하치만보리에서 버스 또는 도보 15분",
              "기념품 구매하기 좋음"
            ]
          }
        },
        {
          time: "15:30", endTime: "16:50",
          category: "transport",
          icon: "🚃",
          title: "오미하치만 → 교토 숙소 복귀",
          detail: "JR 약 1시간 20분",
          mapUrl: "https://maps.google.com/maps?q=교토역",
          info: {
            label: "이동 정보",
            items: [
              "오미하치만역 → JR 비와코선 → 교토역",
              "약 1시간 20분 소요"
            ]
          }
        },
        {
          time: "16:50", endTime: "18:00",
          category: "hotel",
          icon: "🏨",
          title: "숙소 휴식",
          detail: "",
          mapUrl: "https://maps.google.com/maps?q=교토역+호텔",
          info: null
        },
        {
          time: "18:00", endTime: "19:30",
          category: "food",
          icon: "🍖",
          title: "저녁 · 텐요우 야마시나",
          detail: "파 우설 (파 혀밑살)",
          mapUrl: "https://maps.google.com/maps?q=天葉+山科+京都+牛タン",
          info: {
            label: "식당 정보",
            items: [
              "위치: 교토 야마시나 지역",
              "파 우설(파 혀밑살) 전문 — 희귀 부위",
              "사전 예약 필수 수준의 인기 맛집"
            ]
          }
        }
      ]
    },
    {
      day: 5,
      date: "2026-06-13",
      label: "교토 셋째날 & 귀국",
      emoji: "🛫",
      color: "#E08C3A",
      items: [
        {
          time: "09:30", endTime: "10:50",
          category: "tour",
          icon: "☕",
          title: "교토 마지막 일정 / 카페",
          detail: "못했던 것 마무리",
          mapUrl: "https://maps.google.com/maps?q=후시미이나리+교토",
          info: {
            label: "추천",
            items: [
              "후시미 이나리 (이른 아침 추천)",
              "아라시야마 대나무숲",
              "긴카쿠지 (은각사)",
              "또는 카페에서 여유로운 마무리"
            ]
          }
        },
        {
          time: "10:50", endTime: "12:00",
          category: "transport",
          icon: "🚃",
          title: "교토 → 오사카 출발",
          detail: "JR 신쾌속 약 50~60분",
          mapUrl: "https://maps.google.com/maps?q=오사카역",
          info: {
            label: "이동 정보",
            items: [
              "교토역 → 오사카역: JR 신쾌속",
              "약 50~60분 소요, 570엔",
              "⚠️ 10:50 출발로 쿠사카 커리 여유 확보"
            ]
          }
        },
        {
          time: "12:00", endTime: "13:00",
          category: "food",
          icon: "🍛",
          title: "점심 · 쿠사카 커리",
          detail: "오사카 난바 커리 맛집",
          mapUrl: "https://maps.google.com/maps?q=草花+カレー+難波+大阪",
          info: {
            label: "식당 정보",
            items: [
              "위치: 난바 근처",
              "일본식 스파이스 커리",
              "웨이팅 있을 수 있음 — 도착 후 바로 이동"
            ]
          }
        },
        {
          time: "13:00", endTime: "15:30",
          category: "tour",
          icon: "🛍️",
          title: "신사이바시 / 난바 마지막 쇼핑",
          detail: "돈키호테 · 드럭스토어 · 못했던 것",
          mapUrl: "https://maps.google.com/maps?q=신사이바시+돈키호테+오사카",
          info: {
            label: "쇼핑 정보",
            items: [
              "돈키호테 난바점: 24시간, 기념품·과자·화장품",
              "마츠모토키요시 / 코코카라파인: 드럭스토어",
              "신사이바시스지 상점가",
              "⚠️ 15:30 엄수 — 이후 공항 이동 시작"
            ]
          }
        },
        {
          time: "15:30", endTime: "16:00",
          category: "transport",
          icon: "🚃",
          title: "난카이 난바역 이동",
          detail: "",
          mapUrl: "https://maps.google.com/maps?q=난카이+난바역+오사카",
          info: {
            label: "이동",
            items: [
              "쇼핑 마감 후 바로 난카이 난바역으로",
              "캐리어 있으면 이동 시간 여유있게"
            ]
          }
        },
        {
          time: "16:00", endTime: "16:40",
          category: "transport",
          icon: "🚍",
          title: "공항으로 출발",
          detail: "라피트 약 34분 / 리무진버스 약 60분",
          mapUrl: "https://maps.google.com/maps?q=간사이+국제공항",
          info: {
            label: "공항 이동",
            items: [
              "난카이 라피트 (특급): 난바 → 간사이공항 약 34분, 1,490엔",
              "공항급행: 약 45분, 970엔 (저렴하지만 혼잡)",
              "리무진버스: OCAT(JR난바) → 공항 약 60분",
              "짐 많으면 라피트 강력 추천"
            ]
          }
        },
        {
          time: "16:40", endTime: "18:55",
          category: "transport",
          icon: "✈️",
          title: "공항 도착 · 출국 준비",
          detail: "출국 수속 · 보안검색 · 탑승 대기",
          mapUrl: "https://maps.google.com/maps?q=간사이+국제공항",
          info: {
            label: "출국 안내",
            items: [
              "탑승 약 2시간 15분 전 도착 — 여유 있음",
              "면세 환급 (소비세 환급) 신청 가능",
              "출국 심사 후 면세점 쇼핑 가능",
              "탑승구 미리 확인"
            ]
          }
        },
        {
          time: "18:55", endTime: null,
          category: "transport",
          icon: "✈️",
          title: "비행기 탑승 · 귀국",
          detail: "",
          mapUrl: null,
          info: null
        }
      ]
    }
  ]
};
