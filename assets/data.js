/* ══════════════════════════════════════
   부티 테스트 — data.js
   결과 데이터 + 블로그 데이터
   v2.0 | 2026
══════════════════════════════════════ */

// ── RESULT TYPES (19가지) ──────────────
const RESULTS = [
  { name:'로열 블러드', nameEn:'Royal Blood', emoji:'👑',
    desc:'편의점 삼각김밥도 스테이크처럼 보일 상! 전생에 최소 성주였을 확률 200%.',
    descEn:'Even convenience store snacks look fine dining in your hands. At least a feudal lord in a past life.',
    power:['타고난 존재감으로 방에 들어서는 순간 분위기를 장악해요','말 한마디에 사람들이 자연스럽게 따라오는 리더십','어떤 옷을 입어도 내가 명품이 되는 착장 능력'],
    powerEn:['Natural presence that commands the room the moment you enter','Leadership that people naturally follow with every word','Whatever you wear, you become the luxury'],
    wealth:'💰 이번 달 안에 뜻밖의 기회가 노크해요. 거절하지 마세요.',
    wealthEn:'💰 Unexpected opportunity is knocking this month. Don\'t refuse.',
    celeb:'정용진 회장, 이부진 대표와 비슷한 오너 에너지',
    celebEn:'Owner energy similar to top corporate heirs and billionaires',
    tip:'오늘 어깨를 5cm만 더 펴보세요. 당신의 기운이 주변을 압도해요.',
    tipEn:'Straighten your shoulders 5cm today. Your energy will overwhelm.' },

  { name:'대저택의 주인', nameEn:'Manor Lord', emoji:'🏛️',
    desc:'여유로운 바이브에서 느껴지는 찐부자의 향기! 당신이 머무는 곳은 어디든 갤러리가 돼요.',
    descEn:'The scent of true wealth radiates from your relaxed vibe. Wherever you stay becomes a gallery.',
    power:['공간을 세련되게 채우는 인테리어 감각이 DNA에 내장됨','서두르지 않아도 좋은 것들이 자연스럽게 따라오는 여유','비싼 걸 안 사도 비싸 보이는 스텔스 럭셔리 마스터'],
    powerEn:['Interior design sensibility hardwired into your DNA','Good things follow naturally without rushing','Stealth luxury master — looks expensive without spending much'],
    wealth:'💰 3개월 내 부동산·투자 관련 좋은 소식이 들려와요.',
    wealthEn:'💰 Good real estate or investment news within 3 months.',
    celeb:'나영석 PD, 손예진의 여유로운 럭셔리 에너지',
    celebEn:'Relaxed luxury energy of top directors and A-list stars',
    tip:'주변 공간을 정리해보세요. 깔끔한 환경이 당신의 부티를 10배 끌어올려요.',
    tipEn:'Declutter your space. A clean environment elevates your aura 10x.' },

  { name:'아트 디렉터', nameEn:'Art Director', emoji:'🎨',
    desc:'안목이 곧 돈이 되는 심미안 만렙 자산가!',
    descEn:'Your eye for beauty is literally money — maximum aesthetic level.',
    power:['남들보다 6개월 먼저 트렌드를 알아채는 미래 시각','뭘 봐도 더 예쁘게 만들고 싶은 미적 본능','취향이 곧 커리어가 되고 돈이 되는 희귀한 관상'],
    powerEn:['Spot trends 6 months before everyone else','Instinct to make everything more beautiful','Rare gift where taste becomes career and income'],
    wealth:'💰 창의적인 프로젝트에서 뜻밖의 수익이 생겨요.',
    wealthEn:'💰 Unexpected income from creative projects.',
    celeb:'장원영, 버질 아블로의 심미안 에너지',
    celebEn:'Aesthetic energy of style icons and fashion directors',
    tip:'지금 마음에 드는 것들을 사진으로 모아보세요. 당신의 취향이 곧 자산이에요.',
    tipEn:'Collect photos of things you love. Your taste is your asset.' },

  { name:'클래식 아이콘', nameEn:'Classic Icon', emoji:'🕰️',
    desc:'유행은 변해도 당신의 기품은 영원하니까! 시간이 갈수록 가치가 폭등할 빈티지 와인상.',
    descEn:'Trends change, but your elegance is eternal. Your value compounds like vintage wine.',
    power:['10년 후에 봐도 촌스럽지 않을 타임리스 스타일','처음엔 조용하지만 알수록 빠져드는 깊이 있는 매력','나이 들수록 더 빛나는 발효형 인간'],
    powerEn:['Timeless style that won\'t date in 10 years','Quiet at first, irresistible the more you know them','Gets better with age — the fermentation type'],
    wealth:'💰 꾸준히 쌓아온 것들이 복리로 돌아오는 시기가 왔어요.',
    wealthEn:'💰 Everything you\'ve steadily built is now compounding back.',
    celeb:'이영애, 박찬욱 감독의 타임리스 클래식 에너지',
    celebEn:'Timeless energy of legendary directors and actresses',
    tip:'지금 하는 일을 묵묵히 계속하세요. 복리 인간이라 나중에 폭발해요.',
    tipEn:'Keep doing what you\'re doing. The compound interest explodes later.' },

  { name:'트렌드 세터', nameEn:'Trend Setter', emoji:'⚡',
    desc:'돈을 부르는 화제성, 폼 미쳐버린 주인공 관상!',
    descEn:'Magnetic attention that attracts money. You\'re the main character.',
    power:['내가 쓰면 유행이 되는 패션 선구자 기질','SNS에 올리면 저절로 퍼지는 콘텐츠 감각','어딜 가든 가장 눈에 띄는 주인공 포스'],
    powerEn:['Fashion pioneer — things become trends when you wear them','Content sense that spreads naturally when posted','Always the most eye-catching person everywhere'],
    wealth:'💰 SNS나 콘텐츠 관련 수익 기회가 가까이에 있어요.',
    wealthEn:'💰 SNS and content-related income opportunities are nearby.',
    celeb:'지디, 제니의 트렌드 리딩 에너지',
    celebEn:'Trend-leading energy of global K-pop icons',
    tip:'지금 입고 싶은 옷을 입으세요. 당신의 선택이 트렌드가 됩니다.',
    tipEn:'Wear what you want to wear. Your choice becomes the trend.' },

  { name:'유니콘 창업주', nameEn:'Unicorn Founder', emoji:'🦄',
    desc:'뇌가 섹시해서 통장 잔고가 가만있질 못할 상!',
    descEn:'Your brain is so attractive the bank account can\'t stay still.',
    power:['문제를 보면 솔루션이 자동으로 떠오르는 창업가 두뇌','사람을 끌어모으는 비전 제시 능력','실패해도 더 크게 돌아오는 회복탄력성 MAX'],
    powerEn:['Entrepreneur brain that auto-generates solutions','Vision-casting ability that attracts people','Maximum resilience — comes back bigger after every failure'],
    wealth:'💰 지금 머릿속 아이디어를 실행하면 대박 날 수 있어요.',
    wealthEn:'💰 Executing the idea in your head right now could be massive.',
    celeb:'일론 머스크의 창업가 DNA',
    celebEn:'Founder DNA of legendary tech entrepreneurs',
    tip:'오늘 머릿속 아이디어 하나를 종이에 적어보세요. 그게 시작이에요.',
    tipEn:'Write one idea from your head today. That\'s the beginning.' },

  { name:'힙한 콜렉터', nameEn:'Hip Collector', emoji:'🔮',
    desc:'취향으로 세상을 압도하는 플렉스 왕!',
    descEn:'Flex king who overwhelms the world with impeccable taste.',
    power:['남들이 모를 때 알아보는 희귀한 안목','수집하는 것마다 나중에 가치가 오르는 황금 손','독특한 취향이 강력한 아이덴티티가 되는 타입'],
    powerEn:['Rare discernment that sees value before anyone else','Golden hand — everything you collect appreciates','Unique taste that becomes a powerful identity'],
    wealth:'💰 오래 갖고 있던 무언가의 가치가 폭등할 조짐이 보여요.',
    wealthEn:'💰 Something you\'ve held long is about to skyrocket in value.',
    celeb:'박재범의 힙한 컬렉터 에너지',
    celebEn:'Hip collector energy of leading culture curators',
    tip:'지금 관심 있는 것에 깊이 파고들어 보세요. 그 집착이 자산이 돼요.',
    tipEn:'Dive deep into what interests you. That obsession becomes an asset.' },

  { name:'프라이빗 VIP', nameEn:'Private VIP', emoji:'🎫',
    desc:'어디서나 프리패스 가능한 귀한 집 포스!',
    descEn:'VIP pass energy wherever you go — born with nobility.',
    power:['가만히 있어도 좋은 사람들이 알아서 모여드는 인복','처음 만나는 사람도 오래된 친구처럼 편안하게 만드는 능력','어딜 가도 VIP 대우를 받는 타고난 부티'],
    powerEn:['Good people naturally gather around you','Makes first meetings feel like old friendships','Receives VIP treatment naturally everywhere'],
    wealth:'💰 귀인이 나타나 예상치 못한 기회를 연결해줄 거예요.',
    wealthEn:'💰 A key person will appear and connect you to an unexpected opportunity.',
    celeb:'박서준의 자연스러운 VIP 에너지',
    celebEn:'Natural VIP energy of beloved A-list stars',
    tip:'오늘 주변 사람에게 먼저 연락해보세요. 황금 인맥이 될 수 있어요.',
    tipEn:'Reach out to someone first today. That connection could turn golden.' },

  { name:'엔젤 투자자', nameEn:'Angel Investor', emoji:'😇',
    desc:'돈과 인복이 쌍으로 터진 상!',
    descEn:'Wealth and relationship luck exploding simultaneously.',
    power:['사람의 가능성을 한눈에 알아보는 투자 안목','주변을 성장시키는 에너지가 결국 나에게 돌아오는 순환','믿고 베팅하면 반드시 결과가 나오는 판단력'],
    powerEn:['Investment insight that sees human potential at a glance','Energy that grows others cycles back to you','Judgment that produces results when you trust and bet'],
    wealth:'💰 누군가를 도왔던 일이 뜻밖의 방식으로 돌아올 때가 됐어요.',
    wealthEn:'💰 Something you did to help someone is returning in an unexpected way.',
    celeb:'워런 버핏, 손정의의 투자자 DNA',
    celebEn:'Investor DNA of legendary global figures',
    tip:'오늘 주변의 작은 부탁을 들어주세요. 그 씨앗이 나중에 열매가 돼요.',
    tipEn:'Grant a small request today. That seed becomes fruit later.' },

  { name:'선한 영향력', nameEn:'Positive Influence', emoji:'✨',
    desc:'마음까지 부유한 자산가! 존경과 부를 동시에 거머쥘 육각형 관상!',
    descEn:'Wealthy in spirit too. A perfect hexagonal face that commands both respect and wealth.',
    power:['존경받으면서도 친근한 완벽한 밸런스의 소유자','내가 행복하면 주변도 자동으로 행복해지는 전파력','돈도 명예도 인복도 다 잡는 육각형 인간'],
    powerEn:['Perfect balance of being respected and approachable','When you\'re happy, everyone around you becomes happy automatically','Hexagonal human — wealth, honor, and relationships all captured'],
    wealth:'💰 진심을 다해 한 일들이 조만간 눈에 보이는 결과로 돌아와요.',
    wealthEn:'💰 Things done with sincerity will return as visible results soon.',
    celeb:'유재석의 선한 영향력 에너지',
    celebEn:'Positive influence energy of beloved national figures',
    tip:'오늘 한 사람을 진심으로 칭찬해보세요. 그 에너지가 당신께 돌아와요.',
    tipEn:'Sincerely praise one person today. That energy returns to you.' },

  { name:'스텔스 럭셔리', nameEn:'Stealth Luxury', emoji:'🌙',
    desc:'아는 사람만 아는 진짜 품격! 로고 없이도 세상을 압도하는 무음의 부티.',
    descEn:'Elegance only connoisseurs recognize. Overpowering the world silently — no logos needed.',
    power:['보여주지 않아도 저절로 느껴지는 진짜 클래스','소재와 디테일에서 차이를 만드는 안목','조용한 자신감이 모든 공간을 압도하는 힘'],
    powerEn:['True class that\'s felt without showing','Discernment that makes the difference through materials and details','Quiet confidence that overwhelms every room'],
    wealth:'💰 숨겨둔 실력이 드디어 빛을 발하는 타이밍이 다가와요.',
    wealthEn:'💰 The timing for your hidden abilities to shine is approaching.',
    celeb:'하정우의 조용한 스텔스 럭셔리 에너지',
    celebEn:'Quiet stealth luxury energy of respected industry figures',
    tip:'지금 하는 조용한 준비들을 멈추지 마세요. 곧 그 결실이 보여요.',
    tipEn:'Don\'t stop the quiet preparations. The results will show soon.' },

  { name:'브레인 리더', nameEn:'Brain Leader', emoji:'🧠',
    desc:'지적 섹시함의 정점! 그 명석한 두뇌로 자수성가의 역사를 새로 쓰겠군요.',
    descEn:'Peak intellectual appeal. That brilliant brain will rewrite self-made history.',
    power:['남들이 한 번 볼 때 세 번 보이는 통찰력','어떤 분야든 빠르게 핵심을 파악하는 학습 능력','머리로 번 돈이 제일 오래 남는다는 걸 아는 사람'],
    powerEn:['Insight that sees three layers when others see one','Grasps the core of any field rapidly','Knows money earned with the brain lasts the longest'],
    wealth:'💰 지식과 정보가 직접적인 수익으로 연결되는 시기가 왔어요.',
    wealthEn:'💰 The time when knowledge connects directly to income has come.',
    celeb:'지적 리더십 에너지',
    celebEn:'Intellectual leadership energy of pioneering thinkers',
    tip:'오늘 관심 분야 글 하나를 깊이 읽어보세요. 그 지식이 미래를 바꿔요.',
    tipEn:'Read one deep piece in your field today. That knowledge changes your future.' },

  { name:'마이다스의 손', nameEn:'Midas Touch', emoji:'✋',
    desc:'만지는 것마다 황금으로 변하는 사기캐 관상!',
    descEn:'Everything you touch turns to gold — a cheat-code character.',
    power:['투자하면 오르고 시작하면 잘 되는 황금 손','돈 냄새를 먼저 맡는 초감각적 비즈니스 직관','실패해도 그 경험이 다음 성공의 발판이 되는 타입'],
    powerEn:['Golden hand — investments rise, ventures succeed','Supersensory business intuition that smells money first','Even failures become launching pads for next success'],
    wealth:'💰 지금 관심 가는 투자나 사업 기회를 좀 더 들여다보세요.',
    wealthEn:'💰 Look more closely at the investment opportunity catching your interest now.',
    celeb:'일론머스크급 황금 비즈니스 감각',
    celebEn:'Golden business sense of legendary startup founders',
    tip:'오늘 관심 있는 사업 아이디어를 메모해두세요. 타이밍이 오고 있어요.',
    tipEn:'Note down your business idea today. The timing is coming.' },

  { name:'전략적 승부사', nameEn:'Strategic Winner', emoji:'♟️',
    desc:'실패를 모르는 확신의 승리자 관상!',
    descEn:'A winner\'s face that knows no failure. Only upward.',
    power:['3수 앞을 내다보는 장기적 사고','감정 없이 냉철하게 판단하는 전략가 기질','이기는 게임만 골라서 하는 승부사 DNA'],
    powerEn:['Long-term thinking that sees 3 moves ahead','Strategist temperament that judges coldly without emotion','Competitive DNA that only plays winnable games'],
    wealth:'💰 신중하게 준비해온 계획이 성과를 낼 시점이 가까워요.',
    wealthEn:'💰 The plan you\'ve carefully prepared is close to delivering results.',
    celeb:'손흥민의 전략적 승부사 DNA',
    celebEn:'Strategic competitive DNA of world-class performers',
    tip:'지금 가장 중요한 목표 하나에만 집중해보세요. 선택과 집중이 무기예요.',
    tipEn:'Focus on only the most important goal right now. Selection is your weapon.' },

  { name:'미래 선구자', nameEn:'Future Pioneer', emoji:'🚀',
    desc:'시대를 앞서가는 혜안!',
    descEn:'Vision that precedes the era. A true pioneer.',
    power:['아직 아무도 모를 때 미래를 먼저 보는 선견지명','AI·기술·변화에 자연스럽게 적응하는 미래형 인간','트렌드를 따라가는 게 아니라 만들어가는 타입'],
    powerEn:['Foresight that sees the future before anyone knows','Future-type human that naturally adapts to AI and change','Doesn\'t follow trends — creates them'],
    wealth:'💰 새로운 기술이나 플랫폼에서 기회가 생겨요. 늦지 않았어요.',
    wealthEn:'💰 Opportunities emerging in new technologies. It\'s not too late.',
    celeb:'샘 올트만, 김봉진(배민)의 선구자 비전',
    celebEn:'Pioneer vision of AI and tech visionaries',
    tip:'오늘 AI 툴 하나를 새로 써보세요. 미래를 먼저 경험하는 사람이 이겨요.',
    tipEn:'Try one new AI tool today. Those who experience the future first win.' },

  { name:'독보적 취향가', nameEn:'Unique Taste', emoji:'💫',
    desc:'뻔한 건 거부하는 예술적 럭셔리!',
    descEn:'Artistic luxury that refuses the obvious. Original to the core.',
    power:['비슷한 것 중에서 딱 다른 걸 골라내는 취향 레이더','나만의 색깔이 너무 강해서 오히려 무기가 되는 타입','남들이 이해 못 해도 결국 내가 맞았음이 증명되는 관상'],
    powerEn:['Taste radar that picks exactly the different one among similars','Own color so strong it becomes a weapon','Proven right even when others don\'t understand at first'],
    wealth:'💰 독창적인 아이디어가 시장에서 인정받을 타이밍이에요.',
    wealthEn:'💰 Timing for your original ideas to be recognized by the market.',
    celeb:'봉준호 감독의 독보적 예술가 에너지',
    celebEn:'Unmatched artist energy of award-winning visionaries',
    tip:'오늘 남의 눈치 조금 덜 보세요. 당신만의 길이 정답이에요.',
    tipEn:'Care a little less about others\' opinions today. Your own path is right.' },

  { name:'디지털 노마드', nameEn:'Digital Nomad', emoji:'🌍',
    desc:'지구 반대편에서도 달러 찍어낼 프로 일탈러!',
    descEn:'Prints dollars from the other side of the globe.',
    power:['어디서든 일하고 어디서든 버는 장소 초월 능력자','경험 자체가 자산이 되는 삶의 방식 보유','자유와 돈을 동시에 잡는 희귀한 라이프스타일'],
    powerEn:['Location-transcendent ability — works and earns from anywhere','Lifestyle where experience itself becomes the asset','Rare lifestyle that captures both freedom and money'],
    wealth:'💰 온라인에서 새로운 수익 경로가 열릴 조짐이 보여요.',
    wealthEn:'💰 Signs of a new income channel opening online.',
    celeb:'자유로운 디지털 크리에이터의 노마드 에너지',
    celebEn:'Nomadic energy of leading digital creators',
    tip:'오늘 하고 싶었던 여행 계획을 세워보세요. 움직이는 사람에게 기회가 와요.',
    tipEn:'Plan a trip you\'ve wanted today. Opportunities come to those who move.' },

  { name:'아틀리에 오너', nameEn:'Atelier Owner', emoji:'🎭',
    desc:'창조적 에너지가 갓벽한 예술적 부티!',
    descEn:'Godlike creative energy with an artistic aura.',
    power:['평범한 일상을 특별한 작품으로 만드는 창조력','만드는 것 자체가 즐겁고 그게 돈이 되는 희귀한 재능','감성과 수익을 동시에 잡는 아티스트 비즈니스 마인드'],
    powerEn:['Creative power that turns ordinary daily life into special works','Rare talent where creating itself is joyful and profitable','Artist business mind that captures both emotion and revenue'],
    wealth:'💰 만들어놓은 결과물이 수익으로 연결되는 전환점이에요.',
    wealthEn:'💰 The turning point where your creations connect to revenue.',
    celeb:'이하늬의 아티스트 비즈니스 에너지',
    celebEn:'Artist business energy of multi-talented creative powerhouses',
    tip:'오늘 뭔가 하나 만들어보세요. 글이든 그림이든 영상이든. 그게 자산이에요.',
    tipEn:'Make something today — writing, art, or video. That\'s your asset.' },

  { name:'소신 럭셔리', nameEn:'Conviction Luxury', emoji:'🏆',
    desc:'중심이 확고한 나만의 제국 건설자!',
    descEn:'Empire builder with an unshakeable center.',
    power:['흔들리지 않는 자기 중심이 가장 강력한 무기','남들이 뭐라 해도 내 길을 가는 뚝심','자존감이 높으니까 진짜 좋은 것만 끌어당기는 인력'],
    powerEn:['Unshakeable self-center is the most powerful weapon','Persistence to walk your path no matter what others say','High self-esteem attracts only genuinely good things'],
    wealth:'💰 스스로를 믿고 밀어붙이면 지금이 가장 좋은 타이밍이에요.',
    wealthEn:'💰 If you believe in yourself and push forward, now is the best timing.',
    celeb:'오프라 윈프리의 소신 있는 제국 건설 에너지',
    celebEn:'Conviction empire-building energy of legendary self-made icons',
    tip:'거울 보면서 자신에게 "나 잘 하고 있어"라고 말해보세요.',
    tipEn:'Tell yourself in the mirror: "I\'m doing great."' },
];

// ── 랜덤 스탯 데이터 ─────────────────
const VL  = ['약 120억 원','약 340억 원','약 720억 원','약 550억 원','약 980억 원'];
const RL  = ['상위 0.1% 레어리티','전설의 황금 관상','상위 0.05% 사기캐','신화 등급 DNA','전설급 부티'];
const LL  = [
  '아아 샷 추가 ☕', '실크 넥타이 👔', '어깨 펴고 걷기 🚶', '골드 카드 지갑 💳',
  '향수 한 스프레이 🌸', '캐시미어 머플러 🧣', '로즈골드 볼펜 🖊️', '아이보리 린넨 셔츠 👕',
  '프리미엄 노트 한 권 📓', '화이트 장미 한 송이 🌹', '오트밀 라떼 한 잔 🥛', '클래식 손목시계 ⌚',
  '실버 귀걸이 💎', '베이지 캔버스 토트백 👜', '무광 블랙 명함 케이스 🖤', '레몬 향초 한 자루 🕯️',
  '미니멀 골드 팔찌 ✨', '고급 다크초콜릿 한 조각 🍫', '청포도 한 송이 🍇', '베스트셀러 소설 한 권 📚'
];
const WL  = ['폭발 직전 🌋','맑음 뒤 입금 ☀️','흐림 뒤 횡재 🌦️','번개같은 기회 ⚡','무지개 대박 🌈'];
const VLE = ['~$87M','~$240M','~$510M','~$380M','~$720M'];
const RLE = ['Top 0.1% Rarity','Legendary Golden Face','Top 0.05% Cheat Code','Mythic Grade DNA','Legendary Aura'];
const LLE = [
  'Extra espresso shot ☕', 'Silk tie 👔', 'Walk tall & proud 🚶', 'Gold card wallet 💳',
  'One spritz of perfume 🌸', 'Cashmere scarf 🧣', 'Rose gold pen 🖊️', 'Ivory linen shirt 👕',
  'Premium notebook 📓', 'One white rose 🌹', 'Oat milk latte 🥛', 'Classic wristwatch ⌚',
  'Silver earrings 💎', 'Beige canvas tote 👜', 'Matte black card case 🖤', 'Lemon scented candle 🕯️',
  'Minimal gold bracelet ✨', 'Fine dark chocolate 🍫', 'White grapes 🍇', 'NYT bestseller 📚'
];
const WLE = ['About to explode 🌋','Sunny then deposit ☀️','Cloudy then windfall 🌦️','Lightning opportunity ⚡','Rainbow jackpot 🌈'];

function rnd(a){ return a[Math.floor(Math.random() * a.length)]; }

function genStats(langCode) {
  return langCode === 'kr'
    ? [
        { icon:'💰', label:'관상 가치',  value:rnd(VL) },
        { icon:'💎', label:'희귀도',     value:rnd(RL) },
        { icon:'🍀', label:'오늘의 행운템', value:rnd(LL) },
        { icon:'⛅', label:'재물운 날씨', value:rnd(WL) }
      ]
    : [
        { icon:'💰', label:'Aura Value',  value:rnd(VLE) },
        { icon:'💎', label:'Rarity',      value:rnd(RLE) },
        { icon:'🍀', label:'Lucky Item',  value:rnd(LLE) },
        { icon:'⛅', label:'Wealth Weather', value:rnd(WLE) }
      ];
}

// ── 광고 아이템 ──────────────────────
const ADS = [
  { icon:'🌸', nameKr:'향수',      nameEn:'Perfume',      url:'https://link.coupang.com/a/dRe8xT' },
  { icon:'🤲', nameKr:'핸드크림',  nameEn:'Hand Cream',   url:'https://link.coupang.com/a/dRfbi9' },
  { icon:'🧴', nameKr:'바디클렌저', nameEn:'Body Cleanser', url:'https://link.coupang.com/a/dRfbi9' },
];

// ── 블로그 포스트 (애드센스 승인용 — 각 1,500자 이상) ────────────────────
const POSTS = [
  { id:1, tagKr:'관상학', tagEn:'Physiognomy',
    titleKr:'부자 관상의 특징 — 성공한 사람들의 얼굴에는 무엇이 있나?',
    titleEn:'Characteristics of a Wealthy Face — What Successful People\'s Faces Reveal',
    descKr:'눈빛의 깊이, 이마의 형태, 코의 기운까지. 동서양 관상학이 공통으로 지목하는 부자 관상의 핵심 특징을 심층 분석합니다.',
    descEn:'From the depth of the gaze to forehead shape and nose energy — key wealthy-face features identified by Eastern and Western physiognomy.',
    bodyKr:`
<h2>관상학이란 무엇인가?</h2>
<p>관상학(觀相學)은 인간의 얼굴 생김새와 성격, 운명, 사회적 성취 사이의 관계를 연구하는 동아시아의 전통 학문입니다. 수천 년의 역사를 지닌 이 학문은 단순한 미신이 아니라, 오랜 관찰과 경험을 바탕으로 체계화된 지식 체계입니다. 중국에서는 약 3,000년 전부터 기록된 문헌이 존재하며, 한국과 일본에서도 오랫동안 중요한 삶의 지침으로 활용되어 왔습니다.</p>
<p>현대 심리학과 신경과학의 발전으로 인해 관상학의 일부 원리는 과학적으로도 뒷받침되고 있습니다. 예를 들어 프린스턴 대학의 연구에 따르면, 사람들은 타인의 얼굴을 0.1초만 봐도 신뢰도와 능력에 대한 판단을 내린다고 합니다. 오랜 세월 동안 인류가 축적해온 관상학적 직관은 이러한 인간의 본능과 맥을 같이 합니다.</p>

<h2>이마 — 재물이 들어오는 문</h2>
<p>관상학에서 이마는 '관록궁(官祿宮)'으로 사회적 지위와 초년운을 관장합니다. 재물운이 강한 이마는 넓고 깨끗하며 좌우 대칭이 균형 잡힌 형태입니다. 이마가 넓고 둥글며 결점이 없는 경우, 사회적으로 두각을 나타내고 재물이 자연스럽게 따르는 상으로 봅니다.</p>
<p>반대로 이마에 세로 주름이 많거나 좁고 눌린 형태는 초년에 고생이 많고 사회적 진출이 늦어진다고 봅니다. 현대적 관점에서 이마가 넓은 사람은 실제로 더 차분하고 사려 깊은 인상을 주어 사회적 신뢰를 얻기 쉽다는 연구 결과도 있습니다. 이마 관리에 있어 가장 중요한 것은 헤어스타일로 이마를 과도하게 가리지 않는 것입니다. 이마를 드러내는 것이 더 당당하고 신뢰감 있는 인상을 만듭니다.</p>

<h2>눈빛 — 내면의 의지와 총명함</h2>
<p>눈은 관상에서 가장 중요한 부위 중 하나로, '정신이 머무는 곳'이라고 불립니다. 부자 관상의 눈빛 핵심은 '광채(光彩)'입니다. 맑고 생기 있으며 초점이 흔들리지 않는 눈빛은 강한 의지와 목표 의식을 나타냅니다.</p>
<p>성공한 기업인, 리더, 자산가들의 공통점 중 하나는 예외 없이 강하고 또렷한 눈빛을 가지고 있다는 점입니다. 이는 단순히 타고나는 것이 아니라, 오랜 시간 목표를 향해 집중하고 노력해온 결과물이기도 합니다. 관상학에서는 눈이 가늘고 길며 위 아래 쌍꺼풀이 자연스러운 형태를 이상적으로 봅니다. 눈빛을 개선하는 가장 좋은 방법은 충분한 수면, 규칙적인 운동, 그리고 명확한 목표를 갖는 것입니다.</p>

<h2>코 — 재물궁의 핵심</h2>
<p>코는 관상학에서 '재물궁(財物宮)'으로 불리는 가장 직접적인 재물운의 상징입니다. 코끝이 둥글고 풍성한 형태, 콧날이 적당히 높으며 콧방울이 넓지도 좁지도 않은 균형 잡힌 코가 이상적입니다. 코끝이 아래로 처지지 않고 적당히 들려 있으면 재물이 새지 않는다고 봅니다.</p>
<p>반면 코끝이 날카롭거나 너무 높으면 돈에 지나치게 집착하여 주변과 갈등을 빚을 수 있다고 합니다. 콧구멍이 지나치게 크게 보이는 경우는 재물이 잘 모이지 않는 상으로 해석합니다. 물론 이러한 해석은 절대적인 기준이 아니라 하나의 참고 지표로 활용해야 합니다.</p>

<h2>인중과 턱 — 만년운의 상징</h2>
<p>인중(人中)은 코와 입술 사이의 홈을 말합니다. 인중이 길고 뚜렷하며 위에서 아래로 갈수록 넓어지는 형태는 자손운이 좋고 만년이 풍요롭다고 봅니다. 턱은 관상학에서 '지각(地閣)'으로 말년운과 부하운을 나타냅니다. 턱이 둥글고 넓으며 적당히 발달한 형태는 안정적인 말년과 좋은 인간관계를 의미합니다.</p>

<h2>결론 — 관상은 바뀐다</h2>
<p>"심상이 관상을 만든다"는 관상학의 핵심 가르침처럼, 내면의 생각과 태도가 장기적으로 얼굴을 변화시킵니다. 긍정적인 마음가짐, 꾸준한 노력, 건강한 생활 습관은 실제로 얼굴의 인상을 밝고 생기 있게 만듭니다. 관상학을 통해 자신을 돌아보고 더 나은 방향으로 성장하는 계기로 삼는 것이 가장 현명한 활용법입니다.</p>
    `,
    bodyEn:`
<h2>What Is Physiognomy?</h2>
<p>Physiognomy is the traditional East Asian discipline studying the relationship between facial features, character, destiny, and social achievement. With a documented history spanning over 3,000 years in China, this field represents a systematic knowledge base built through long observation and accumulated experience — not mere superstition.</p>
<p>Modern psychology and neuroscience have begun to validate some physiognomic principles. Princeton University researchers demonstrated that people make judgments about trustworthiness and competence from just 100 milliseconds of facial exposure, aligning with intuitions humans have refined over millennia.</p>

<h2>The Forehead — Gateway to Fortune</h2>
<p>The forehead governs social status and early-life fortune. An ideal forehead for wealth is broad, smooth, and symmetrically balanced. A wide, rounded, unblemished forehead indicates natural social prominence and effortless financial attraction.</p>
<p>Conversely, narrow or heavily lined foreheads suggest delayed social breakthrough. Contemporary research supports this: people with prominent foreheads are perceived as more thoughtful and trustworthy, social advantages that translate to opportunity.</p>

<h2>The Eyes — Inner Resolve</h2>
<p>Eyes are called "where the spirit dwells" — the single most important feature in physiognomy. The key quality for wealth is luminosity: clear, vibrant, unwavering eyes signal strong will and purpose.</p>
<p>Without exception, successful entrepreneurs and leaders possess focused, penetrating gazes — a quality cultivated through years of goal-oriented effort as much as inherited. Improving eye quality begins with adequate sleep, regular exercise, and the clarity that comes from having defined goals.</p>

<h2>The Nose — The Wealth Palace</h2>
<p>The nose is literally designated the "Wealth Palace" in physiognomy. Ideal characteristics include a rounded, full tip, a moderately elevated bridge, and balanced nostrils — neither too wide nor too narrow.</p>

<h2>Conclusion — Your Face Can Change</h2>
<p>"The mind creates the face" remains physiognomy's core teaching. Positive thinking, sustained effort, and healthy habits genuinely brighten and vitalize facial appearance over time. Physiognomy is most wisely used as a catalyst for self-reflection and growth, not fixed destiny.</p>
    ` },

  { id:2, tagKr:'라이프스타일', tagEn:'Lifestyle',
    titleKr:'올드머니 아우라의 본질 — 진짜 부티는 어디서 오는가?',
    titleEn:'The Essence of Old Money Aura — Where Does True Luxury Come From?',
    descKr:'트렌드를 초월하는 올드머니 미학의 핵심 원칙과, 진정한 부티가 만들어지는 과정을 심층 분석합니다.',
    descEn:'A deep dive into Old Money aesthetics that transcend trends, and how genuine nobility of bearing is truly cultivated.',
    bodyKr:`
<h2>올드머니 트렌드의 부상</h2>
<p>2020년대 중반 전 세계를 강타한 가장 강력한 문화 트렌드 중 하나는 단연 '올드머니(Old Money)' 미학입니다. 틱톡과 인스타그램을 중심으로 빠르게 확산된 이 트렌드는 단순한 패션 스타일을 넘어, 하나의 삶의 철학으로 자리잡았습니다. 로고로 가득 찬 '뉴머니' 스타일과 극명하게 대비되는 올드머니 미학은, 조용하고 절제되어 있으며 시간의 검증을 받은 클래식함이 특징입니다.</p>
<p>올드머니 스타일의 핵심은 과시하지 않는 것입니다. 진정한 부유함은 브랜드 로고를 드러낼 필요가 없습니다. 대신 최상급 소재, 완벽한 재단, 그리고 시대를 초월하는 디자인이 그 자리를 대신합니다. 이는 단순히 옷차림의 문제가 아니라 가치관과 철학의 문제이기도 합니다.</p>

<h2>절제의 미학 — Less is More</h2>
<p>올드머니의 첫 번째 원칙은 "Less is More"입니다. 진정한 부는 과시할 필요가 없습니다. 로고를 드러내지 않는 브랜드, 절제된 색상 팔레트(베이지, 아이보리, 네이비, 그레이, 카멜), 최상급 소재의 단순한 의류가 핵심입니다.</p>
<p>올드머니 색상 팔레트에서 원색은 거의 등장하지 않습니다. 대신 자연에서 따온 은은한 뉴트럴 톤이 주를 이룹니다. 아이보리 린넨 셔츠, 카멜 색 캐시미어 코트, 다크 네이비 블레이저 — 이런 아이템들은 10년이 지나도 촌스럽지 않습니다. 이것이 바로 올드머니 스타일의 핵심 가치, 지속 가능성입니다.</p>

<h2>차분한 자신감과 태도</h2>
<p>올드머니 사람들은 자신을 증명하려 하지 않습니다. 이 차분한 자신감은 목소리 톤, 몸짓, 눈 맞춤 방식에서 드러납니다. 빠르게 말하거나 큰 소리로 웃지 않으며, 항상 여유롭고 안정된 태도를 유지합니다.</p>
<p>이들은 대화에서도 자신의 재산이나 지위를 언급하지 않습니다. 대신 교양 있는 주제, 예술, 역사, 문화에 대한 깊은 이해를 바탕으로 대화합니다. 이러한 지적 깊이가 올드머니 아우라의 가장 중요한 요소 중 하나입니다.</p>

<h2>교육과 교양 — 지식이 만드는 품격</h2>
<p>올드머니 미학의 또 다른 핵심은 교육과 교양입니다. 독서 습관, 예술에 대한 이해, 다양한 언어에 대한 기초 지식, 예절에 대한 깊은 이해가 올드머니 라이프스타일의 기반이 됩니다. 이는 단순히 있어 보이기 위한 것이 아니라, 삶을 더 풍요롭게 만드는 진정한 투자입니다.</p>

<h2>올드머니 라이프스타일을 실천하는 방법</h2>
<p>올드머니 라이프스타일은 엄청난 재산 없이도 충분히 실천할 수 있습니다. 첫째, 많이 사지 말고 좋은 것을 하나 사세요. 둘째, 독서와 문화 생활에 시간을 투자하세요. 셋째, 말과 행동을 절제하는 연습을 하세요. 넷째, 자세와 걸음걸이를 바로잡으세요. 다섯째, 주변 공간을 깔끔하고 정돈되게 유지하세요. 이 다섯 가지 실천만으로도 당신의 아우라는 눈에 띄게 달라질 것입니다.</p>
    `,
    bodyEn:`
<h2>The Rise of Old Money</h2>
<p>Among the most powerful cultural forces of the mid-2020s is the Old Money aesthetic — spreading rapidly through TikTok and Instagram to become not just a fashion style, but a life philosophy. In sharp contrast to logo-heavy "new money" style, Old Money is characterized by quiet restraint, understated confidence, and timeless classicism.</p>

<h2>The Aesthetic of Restraint</h2>
<p>"Less is More" is Old Money's cardinal rule. True wealth has nothing to prove. Non-logo brands, a restrained neutral palette (beige, ivory, navy, grey, camel), and quality basics in premium materials define the look. These items don't age — they mature, which is precisely the point.</p>

<h2>Quiet Confidence</h2>
<p>Old Money individuals don't need to prove themselves. This quiet confidence manifests in measured voice tone, controlled gestures, and steady eye contact. They don't speak loudly or laugh raucously. They maintain a consistently relaxed, stable demeanor.</p>

<h2>Education and Cultivation</h2>
<p>A reading habit, understanding of art, basic fluency in multiple subjects, and deep understanding of etiquette form the foundation of the Old Money lifestyle. This is genuine investment in a richer life, not performance.</p>

<h2>Practicing Old Money Without a Trust Fund</h2>
<p>This lifestyle is fully accessible without inherited wealth: buy less but better; invest time in reading and culture; practice restraint in speech and action; correct your posture; keep your space immaculate. These five practices alone will visibly transform your aura.</p>
    ` },

  { id:3, tagKr:'AI 과학', tagEn:'AI Science',
    titleKr:'AI 관상학의 과학적 근거 — 인공지능은 얼굴을 어떻게 읽는가?',
    titleEn:'The Science Behind AI Physiognomy — How Does AI Read a Face?',
    descKr:'딥러닝과 컴퓨터 비전이 얼굴 특징을 분석하는 원리와, AI 관상의 과학적 가능성과 한계를 심층적으로 알아봅니다.',
    descEn:'How deep learning and computer vision analyze facial features, and the scientific possibilities and limits of AI physiognomy.',
    bodyKr:`
<h2>컴퓨터 비전이란 무엇인가?</h2>
<p>컴퓨터 비전(Computer Vision)은 컴퓨터가 디지털 이미지나 동영상에서 의미 있는 정보를 추출하고 이해하는 인공지능의 한 분야입니다. 인간이 눈으로 세상을 보고 이해하는 것처럼, 컴퓨터도 이미지 데이터를 처리하여 물체를 인식하고 분류할 수 있게 하는 기술입니다.</p>
<p>컴퓨터 비전의 핵심 기술인 합성곱 신경망(CNN, Convolutional Neural Network)은 수백만 개의 이미지를 학습하여 패턴을 인식하는 방법을 스스로 터득합니다. 처음에는 선과 색상 같은 단순한 특징을 인식하다가, 점점 더 복잡한 패턴 — 눈의 형태, 코의 구조, 얼굴 전체의 윤곽 — 까지 인식할 수 있게 됩니다.</p>

<h2>딥러닝과 얼굴 인식의 원리</h2>
<p>얼굴 인식 AI는 크게 두 단계로 작동합니다. 첫 번째는 얼굴 감지(Face Detection)로, 이미지에서 얼굴이 있는 영역을 찾아내는 과정입니다. 두 번째는 특징 추출(Feature Extraction)로, 감지된 얼굴에서 눈 간격, 코의 높이, 턱선의 형태 등 수십에서 수백 가지 특징값을 추출하는 과정입니다.</p>
<p>현대의 얼굴 인식 AI는 빛의 조건, 각도, 나이의 변화에도 불구하고 같은 사람을 높은 정확도로 인식할 수 있습니다. 스마트폰의 얼굴 인식 잠금 해제 기능이 이 기술의 대표적인 응용 사례입니다.</p>

<h2>Google Teachable Machine과 부티 테스트</h2>
<p>부티 테스트는 Google의 Teachable Machine 플랫폼을 기반으로 합니다. Teachable Machine은 구글이 제공하는 머신러닝 도구로, 전문적인 코딩 지식 없이도 이미지, 소리, 자세 등을 인식하는 AI 모델을 만들 수 있게 해줍니다.</p>
<p>부티 테스트의 AI 모델은 다양한 아우라 타입의 이미지 데이터를 학습하여, 업로드된 사진에서 시각적 특징들을 분석하고 부티, 힙함, 친근함, 우아함, 지적임 등 카테고리별 확률값을 출력합니다. 중요한 점은 업로드된 이미지가 서버에 저장되지 않고 브라우저 내에서만 처리된다는 것입니다.</p>

<h2>AI 관상 분석의 가능성</h2>
<p>최근 연구들은 AI가 얼굴 이미지에서 다양한 정보를 추출할 수 있음을 보여줍니다. 일부 연구에서는 AI가 얼굴 사진만으로 특정 건강 지표, 나이, 감정 상태 등을 예측할 수 있다고 합니다. 스탠퍼드 대학의 한 연구는 AI가 얼굴 사진으로 특정 성향을 예측할 수 있다는 논문을 발표해 큰 화제를 모으기도 했습니다.</p>

<h2>과학적 한계와 올바른 활용법</h2>
<p>그러나 AI 관상 분석에는 분명한 한계가 있습니다. 현재의 AI 기술로는 얼굴 이미지에서 개인의 성격이나 운명을 정확하게 예측하는 것은 불가능합니다. 또한 AI는 학습 데이터의 편향을 그대로 반영할 수 있어, 특정 인종이나 집단에 대한 편향된 결과를 낼 수 있다는 문제도 있습니다.</p>
<p>부티 테스트는 과학적 진단 도구가 아닌, 재미와 자기 성찰을 위한 엔터테인먼트 서비스입니다. AI가 분석한 결과를 하나의 재미있는 관점으로 받아들이고, 자신을 돌아보는 계기로 활용하는 것이 가장 현명한 방법입니다.</p>
    `,
    bodyEn:`
<h2>What Is Computer Vision?</h2>
<p>Computer Vision is the AI discipline enabling computers to extract and understand meaningful information from digital images and video — essentially teaching machines to see as humans do.</p>

<h2>Deep Learning and Facial Recognition</h2>
<p>Face recognition AI works in two stages: Face Detection locates face regions within an image; Feature Extraction derives dozens to hundreds of characteristic values — eye spacing, nose height, jawline contour — from the detected face. Modern systems maintain high accuracy across varying lighting, angles, and age.</p>

<h2>Google Teachable Machine and Rich Aura Test</h2>
<p>Rich Aura Test is built on Google's Teachable Machine platform — a machine learning tool enabling non-programmers to create image, sound, and pose recognition models. The AI model analyzes uploaded photos for visual characteristics and outputs probability scores across aura categories. Critically, uploaded images are processed entirely within the browser and never stored on any server.</p>

<h2>Scientific Limits and Proper Use</h2>
<p>Current AI cannot accurately predict personality or destiny from facial images, and models can reflect biases from training data. Rich Aura Test is an entertainment service for fun and self-reflection, not a diagnostic tool. Treat results as an interesting perspective and a catalyst for self-exploration.</p>
    ` },

  { id:4, tagKr:'문화', tagEn:'Culture',
    titleKr:'현대적 "부티"의 정의 — 타고나는 것인가, 만들어지는 것인가?',
    titleEn:'Defining Modern Nobility — Is Aura Innate or Cultivated?',
    descKr:'SNS 시대에 새롭게 정의되는 부티의 개념과, 누구나 갈고닦을 수 있는 부티의 요소들을 탐구합니다.',
    descEn:'The newly defined concept of noble bearing in the social media age and the elements anyone can systematically cultivate.',
    bodyKr:`
<h2>부티란 무엇인가?</h2>
<p>'부티'는 최근 한국 사회에서 매우 광범위하게 사용되기 시작한 표현입니다. 사전적 정의는 '부유층에서 느껴지는 특유의 분위기나 기품'이지만, 실제로는 훨씬 복합적인 개념입니다. 부티는 태도·언어·취향·몸가짐의 총합으로 만들어지는 전반적인 인상입니다. 부유한 집안 출신임을 의미하는 것이 절대로 아닙니다.</p>
<p>사회학적 관점에서 부티는 프랑스 사회학자 피에르 부르디외가 말한 '아비투스(Habitus)'와 유사한 개념입니다. 아비투스란 개인이 사회화 과정에서 내면화한 성향, 취향, 행동 양식의 총체입니다. 부르디외는 이것이 계급적 배경과 깊게 연관되어 있다고 주장했지만, 현대 사회에서는 의식적인 노력으로도 충분히 습득 가능하다는 시각이 더 설득력을 얻고 있습니다.</p>

<h2>타고나는 부티 vs. 만들어지는 부티</h2>
<p>부티가 완전히 타고나는 것인가, 아니면 노력으로 만들어지는 것인가에 대한 논쟁은 오랫동안 지속되어 왔습니다. 실제로는 둘 다입니다. 어릴 때부터 문화적으로 풍요로운 환경에서 자란 사람들은 자연스럽게 세련된 취향과 태도를 습득하게 됩니다. 그러나 이것이 후천적으로 불가능하다는 의미는 절대 아닙니다.</p>
<p>심리학 연구들은 인간의 행동과 태도가 의식적인 노력과 반복을 통해 충분히 변화할 수 있음을 보여줍니다. 습관 형성에 관한 연구에 따르면, 새로운 행동이 자동화되기까지는 평균 66일이 필요합니다. 즉, 두 달 남짓한 시간의 꾸준한 노력으로도 당신의 일상적인 행동 패턴을 근본적으로 바꿀 수 있다는 것입니다.</p>

<h2>부티를 키우는 5가지 핵심 습관</h2>
<p>첫째, 말의 속도를 늦추세요. 바쁘고 불안한 사람일수록 빠르게 말합니다. 여유 있고 천천히, 하지만 명확하게 말하는 습관은 당신의 존재감을 크게 높입니다. 둘째, 독서 습관을 들이세요. 폭넓은 독서는 대화의 깊이를 더하고 세상을 바라보는 시야를 넓혀줍니다. 셋째, 자세와 걸음걸이에 집중하세요. 등을 펴고 어깨를 자연스럽게 내린 자세, 너무 빠르지도 느리지도 않은 걸음걸이는 자신감 있는 인상을 만듭니다. 넷째, 경청하는 능력을 기르세요. 부티 있는 사람들은 말을 많이 하지 않습니다. 오히려 상대방의 이야기에 집중하고 적절한 질문을 던집니다. 다섯째, 감사와 겸손의 태도를 일상화하세요.</p>

<h2>SNS 시대의 부티 — 진짜와 가짜를 구별하는 법</h2>
<p>SNS의 발달로 '인스타그래머블'한 부티가 넘쳐나는 시대가 되었습니다. 그러나 진짜 부티와 가짜 부티는 분명한 차이가 있습니다. 진짜 부티는 오프라인에서도, 카메라 앞이 아닌 상황에서도 일관되게 드러납니다. 진정한 부티를 갖춘 사람은 자신을 드러내려 하지 않으며, 어떤 상황에서도 자연스럽고 여유로운 태도를 유지합니다.</p>

<h2>결론</h2>
<p>부티는 타고나는 것이기도 하고, 만들어지는 것이기도 합니다. 환경의 영향을 부정할 수는 없지만, 의식적인 노력으로 충분히 성장할 수 있습니다. 중요한 것은 남을 따라 하는 것이 아니라 자신만의 진정성 있는 아우라를 만들어가는 것입니다.</p>
    `,
    bodyEn:`
<h2>What Is Noble Bearing?</h2>
<p>Noble bearing — "buti" in Korean — is a complex compound impression created by the totality of attitude, language, taste, and comportment. It has nothing to do with family wealth. Sociologically, it resembles Pierre Bourdieu's concept of "habitus": the internalized dispositions, tastes, and behavioral patterns developed through socialization.</p>

<h2>Nature vs. Nurture</h2>
<p>The answer is both. Those raised in culturally rich environments acquire refined tastes and demeanor naturally. But this doesn't make it inaccessible to others. Habit research shows new behaviors typically automatize after about 66 days of consistent practice — two months to fundamentally reshape your behavioral patterns.</p>

<h2>Five Core Habits</h2>
<p>Slow your speech; hurried people speak fast — measured, clear delivery projects enormous presence. Read widely; depth of reading enriches conversation. Focus on posture; a straight back and natural gait broadcast confidence. Develop listening; people with true nobility speak less and listen more. Cultivate gratitude and humility as daily practices.</p>

<h2>Conclusion</h2>
<p>Noble bearing is both inherited and built. What matters is not mimicking others but cultivating a genuine, consistent aura that is authentically yours.</p>
    ` },

  { id:5, tagKr:'심리학', tagEn:'Psychology',
    titleKr:'인상과 운명의 상관관계 — 심리학이 밝히는 첫인상의 과학',
    titleEn:'Impression and Destiny — The Psychology and Science of First Impressions',
    descKr:'첫 0.1초에 결정되는 인상의 심리학적 메커니즘과, 인상이 실제 삶의 기회에 미치는 영향을 심층 분석합니다.',
    descEn:'The psychological mechanisms behind impressions formed in 0.1 seconds, and their profound impact on real-life opportunities.',
    bodyKr:`
<h2>첫인상의 신경과학</h2>
<p>프린스턴 대학교의 알렉산더 토도로프 교수 연구팀은 사람들이 상대방의 얼굴을 단 100밀리초 보는 것만으로 신뢰도, 능력, 친근감에 대한 판단을 내린다는 것을 발견했습니다. 더 놀라운 사실은, 시간이 더 주어지더라도 이 초기 판단이 크게 바뀌지 않는다는 점입니다. 즉, 첫인상은 0.1초 만에 형성되고, 한 번 형성된 인상은 좀처럼 바뀌지 않습니다.</p>
<p>이러한 빠른 판단은 인류의 진화 과정에서 형성된 생존 본능과 관련이 있습니다. 낯선 사람을 만났을 때 그 사람이 위협인지 아닌지를 빠르게 판단하는 능력은 생존에 매우 유리했습니다. 현대 사회에서도 우리의 뇌는 여전히 이 원시적인 판단 시스템을 사용합니다.</p>

<h2>메러비안 법칙 — 인상을 구성하는 요소들</h2>
<p>앨버트 메러비안 UCLA 교수의 연구에 따르면, 상대방에 대한 인상을 형성할 때 비언어적 신호(표정, 자세, 몸짓)가 약 55%, 목소리 톤이 약 38%, 실제 언어 내용이 약 7%를 차지합니다. 이 수치가 절대적인 것은 아니지만, 우리의 인상에서 비언어적 요소가 얼마나 큰 비중을 차지하는지를 잘 보여줍니다.</p>
<p>즉, 아무리 좋은 말을 해도 표정이 굳어 있거나 자세가 구부정하다면, 상대방은 부정적인 인상을 받을 수 있습니다. 반대로 따뜻한 미소, 열린 자세, 안정된 눈 맞춤은 말의 내용과 무관하게 긍정적인 인상을 만들어냅니다.</p>

<h2>후광 효과 — 첫인상이 모든 판단에 미치는 영향</h2>
<p>심리학에서 '후광 효과(Halo Effect)'란 첫인상이 이후의 모든 판단에 영향을 미치는 현상을 말합니다. 매력적이고 호감 가는 외모의 사람은 능력도 높고, 친절하며, 신뢰할 수 있다고 판단되는 경향이 있습니다. 이는 취업 면접, 영업, 대인 관계 등 삶의 모든 영역에서 영향을 미칩니다.</p>

<h2>인상이 실제 삶의 기회에 미치는 영향</h2>
<p>연구에 따르면 외모 인상이 좋은 사람들은 취업 면접에서 더 좋은 평가를 받고, 법원에서 더 관대한 판결을 받으며, 선거에서 더 많은 표를 얻는 경향이 있습니다. 이는 외모지상주의를 옹호하는 것이 아니라, 인상 관리가 현실적으로 얼마나 중요한지를 보여주는 것입니다.</p>

<h2>첫인상을 개선하는 실천적 방법</h2>
<p>첫째, 미소를 연습하세요. 진심 어린 미소는 가장 강력한 인상 도구입니다. 둘째, 악수를 연습하세요. 적당히 단단하고 따뜻한 악수는 신뢰감을 줍니다. 셋째, 눈 맞춤 능력을 키우세요. 상대방의 눈을 자연스럽게 바라보는 것이 중요합니다. 넷째, 이름을 기억하고 사용하세요. 상대방의 이름을 부르는 것은 강한 호감을 만들어냅니다. 다섯째, 경청하는 자세를 갖추세요. 상대방의 이야기에 진심으로 집중하는 것이 최고의 인상을 만듭니다.</p>
    `,
    bodyEn:`
<h2>The Neuroscience of First Impressions</h2>
<p>Princeton's Alexander Todorov found that people make judgments about trustworthiness, competence, and likability from just 100 milliseconds of facial exposure — and that additional time changes these initial judgments very little. This rapid assessment is an evolved survival mechanism; our brains still run this ancient system in modern social contexts.</p>

<h2>The Mehrabian Rule</h2>
<p>UCLA's Albert Mehrabian found that non-verbal signals (expression, posture, gesture) account for approximately 55% of impression formation, vocal tone 38%, and actual verbal content only 7%. Even the most articulate words can be undermined by closed posture or a tense expression — conversely, a warm smile and open body language create positive impressions independent of content.</p>

<h2>The Halo Effect</h2>
<p>The Halo Effect describes how a positive first impression influences all subsequent judgments. Attractive, likable-seeming people are systematically perceived as more competent, kinder, and more trustworthy — effects measurable in job interviews, courtrooms, and elections.</p>

<h2>Practical Methods for Improving First Impressions</h2>
<p>Practice a genuine smile; rehearse a firm, warm handshake; develop natural, comfortable eye contact; remember and use names; and above all, develop authentic listening — full attention to others creates the strongest possible impression.</p>
    ` },

  { id:6, tagKr:'비즈니스', tagEn:'Business',
    titleKr:'성공한 CEO들의 관상 분석 — 리더의 얼굴에는 무엇이 있나?',
    titleEn:'Analyzing Successful CEO Faces — What Do Leaders\' Faces Reveal?',
    descKr:'세계적인 비즈니스 리더들의 공통적인 외모 특징과, 리더십이 외모에 반영되는 방식을 심층 분석합니다.',
    descEn:'Common physical and behavioral characteristics of global business leaders, and how leadership is reflected in appearance over time.',
    bodyKr:`
<h2>리더의 얼굴은 다를까?</h2>
<p>세계적인 CEO들의 사진을 분석해보면 놀랍도록 공통적인 특징들이 발견됩니다. 물론 이들의 외모는 각기 다르지만, 관상학적 관점에서 그리고 비언어적 커뮤니케이션의 관점에서 뚜렷한 공통점을 발견할 수 있습니다. 강한 눈빛, 자신감 있는 자세, 또렷하고 낮은 목소리, 여유 있는 미소가 그것입니다.</p>
<p>켈로그 경영대학원의 연구에 따르면, 사람들은 CEO의 얼굴 사진만 보고도 그 회사의 성과를 예측하는 경향이 있습니다. 얼굴에서 느껴지는 유능함, 지배력, 성숙함이 회사의 실제 성과와 상관관계를 보인다는 것입니다. 물론 이는 절대적인 법칙이 아니지만, 외모와 리더십 사이에 유의미한 관계가 존재함을 시사합니다.</p>

<h2>성공한 리더들의 공통적인 관상적 특징</h2>
<p>관상학적 관점에서 성공한 리더들에게서 공통적으로 발견되는 특징들이 있습니다. 첫째, 강하고 또렷한 눈빛입니다. 목표에 대한 확신과 의지가 눈빛에 나타납니다. 둘째, 넓고 안정적인 이마입니다. 사고의 폭과 깊이를 상징합니다. 셋째, 단단하고 균형 잡힌 턱선입니다. 의지력과 결단력을 나타냅니다. 넷째, 적당히 발달한 코입니다. 현실 감각과 재물운을 의미합니다. 다섯째, 자연스럽고 여유로운 표정 관리입니다. 어떤 상황에서도 당황하지 않는 침착함을 보여줍니다.</p>

<h2>성공이 얼굴을 바꾼다</h2>
<p>많은 CEO들의 성공 이전과 이후 사진을 비교하면 상당한 변화가 관찰됩니다. 단순히 나이가 들어서가 아니라, 수십 년에 걸친 강한 정신력과 집중력의 훈련이 얼굴에 새겨지는 것입니다. 눈빛이 더 강해지고, 표정이 더 여유로워지며, 전반적인 인상이 더 신뢰감 있게 변합니다. "심상이 관상을 만든다"는 원리를 실제로 지지하는 증거입니다.</p>

<h2>리더십 아우라를 만드는 실천 전략</h2>
<p>리더십 아우라는 직위나 권한에서 오는 것이 아닙니다. 오히려 다음과 같은 일상적 실천에서 형성됩니다. 결정을 빠르고 명확하게 내리는 습관을 기르세요. 약속을 반드시 지키는 신뢰성을 쌓으세요. 어떤 상황에서도 침착함을 유지하는 연습을 하세요. 경청하고 공감하는 능력을 개발하세요. 비전을 명확하게 제시하는 커뮤니케이션 능력을 키우세요.</p>

<h2>결론 — 리더십은 얼굴에 새겨진다</h2>
<p>관상학의 오랜 가르침은 현대 심리학과 신경과학의 연구를 통해 점점 더 뒷받침되고 있습니다. 성공한 리더들의 얼굴에서 느껴지는 아우라는 수십 년의 노력과 성장의 결과물입니다. 당신도 지금부터 리더십 아우라를 만들어가는 여정을 시작할 수 있습니다.</p>
    `,
    bodyEn:`
<h2>Do Leaders Look Different?</h2>
<p>Analyzing world-class CEOs reveals consistently shared characteristics: strong eye contact, confident posture, clear resonant voices, and a relaxed smile. Kellogg School of Management research found people can predict company performance from CEO facial photos alone — perceived competence, dominance, and maturity correlate with actual company outcomes.</p>

<h2>Common Physiognomic Traits of Successful Leaders</h2>
<p>Strong, focused eyes signaling conviction; a wide, stable forehead indicating depth of thought; a firm, balanced jawline conveying willpower; a well-developed nose indicating practical acumen; and natural, composed expression management in all circumstances.</p>

<h2>Success Changes the Face</h2>
<p>Comparing pre- and post-success photos of major executives reveals substantial transformation — not merely aging, but decades of mental fortitude and focused effort inscribed in the face itself. Eyes become stronger; expressions more relaxed; the overall impression more trustworthy. Strong evidence for physiognomy's core claim: "The mind creates the face."</p>

<h2>Building Leadership Aura</h2>
<p>Leadership aura doesn't come from title or authority. It's built through: decisive, clear decision-making habits; ironclad reliability; composure under pressure; genuine empathy and listening; and the ability to communicate vision clearly.</p>
    ` },

  { id:7, tagKr:'관상 팁', tagEn:'Aura Tips',
    titleKr:'눈썹으로 보는 재물운 — 관상학이 말하는 눈썹의 비밀',
    titleEn:'Wealth Luck and Eyebrows — The Secret Language of Eyebrows in Physiognomy',
    descKr:'관상에서 재물운의 바로미터로 여겨지는 눈썹의 형태별 의미와 눈썹 관리의 실용적 가이드를 알아봅니다.',
    descEn:'What each eyebrow shape means for wealth luck in physiognomy, and a practical guide to eyebrow management.',
    bodyKr:`
<h2>눈썹은 왜 중요한가?</h2>
<p>관상학에서 눈썹은 '보수궁(保壽宮)'이라 하여 수명과 중년 이후의 재물운을 관장합니다. 또한 눈썹은 형제운과 인간관계도 나타냅니다. 눈썹은 얼굴의 표정을 가장 강하게 결정짓는 부위 중 하나이기도 합니다. 같은 얼굴이라도 눈썹 모양에 따라 인상이 전혀 달라 보일 수 있습니다.</p>
<p>현대 뷰티 산업에서도 눈썹의 중요성은 매우 강조됩니다. 메이크업 전문가들은 눈썹이 얼굴의 전체적인 균형과 인상을 결정짓는 가장 중요한 요소라고 말합니다. 관상학의 직관과 현대 미학의 관점이 눈썹의 중요성에서 일치하는 것입니다.</p>

<h2>재물운을 높이는 눈썹의 형태</h2>
<p>가장 이상적인 눈썹은 '신월미(新月眉)'로, 초승달처럼 자연스럽게 곡선을 그리는 형태입니다. 눈썹의 시작 부분이 두껍고 끝으로 갈수록 자연스럽게 가늘어지며, 눈썹이 눈보다 약간 길게 뻗어 있는 형태입니다. 이 눈썹은 온화한 성품과 좋은 인간관계, 그리고 꾸준한 재물운을 상징합니다.</p>
<p>'와잠미(臥蠶眉)'는 누에가 잠자는 모양처럼 두툼하고 풍성한 눈썹으로, 강한 생명력과 왕성한 재물운을 의미합니다. 반면 눈썹이 지나치게 짧거나, 눈썹 사이가 너무 붙어 있거나, 눈썹이 위로 치솟는 형태는 관상학적으로 좋지 않은 신호로 해석합니다.</p>

<h2>눈썹 관리의 실용 가이드</h2>
<p>관상학적으로 이상적인 눈썹을 만들기 위한 실용적인 팁을 알아보겠습니다. 첫째, 눈썹을 과도하게 뽑지 마세요. 자연스러운 눈썹이 인위적으로 다듬은 눈썹보다 대부분의 경우 더 자연스럽고 호감 가는 인상을 만듭니다. 둘째, 눈썹 사이의 간격을 적절하게 유지하세요. 너무 붙으면 예민하고 날카로운 인상을 줄 수 있습니다. 셋째, 눈썹의 아치 형태를 자연스럽게 살리세요. 지나치게 각진 눈썹은 강하고 공격적인 인상을 줍니다. 넷째, 눈썹이 눈보다 약간 길게 유지되도록 하세요.</p>

<h2>눈썹과 감정 표현</h2>
<p>눈썹은 감정 표현에서 가장 중요한 역할을 합니다. 놀람, 기쁨, 슬픔, 분노 등 다양한 감정이 눈썹의 움직임을 통해 전달됩니다. 평소에 눈썹을 찡그리는 습관이 있다면 의식적으로 교정하는 것이 좋습니다. 인상이 굳어 보이는 경우 눈썹 사이의 긴장을 풀어주는 것만으로도 훨씬 부드럽고 친근한 인상이 될 수 있습니다.</p>

<h2>결론</h2>
<p>눈썹은 관상학에서 중요한 의미를 가지며, 현대 미학과 심리학에서도 얼굴 인상에 가장 큰 영향을 미치는 요소 중 하나로 인정받고 있습니다. 자신의 눈썹을 잘 관리하고, 자연스러운 형태를 살리는 것이 더 나은 인상과 아우라를 만드는 첫걸음이 될 수 있습니다.</p>
    `,
    bodyEn:`
<h2>Why Eyebrows Matter</h2>
<p>In physiognomy, eyebrows govern mid-to-late life wealth luck, sibling relationships, and interpersonal bonds. They are also among the most powerful determinants of overall facial expression — the same face looks entirely different depending on eyebrow shape. Modern beauty experts agree: eyebrows are the single most important feature for overall facial balance and impression.</p>

<h2>Wealth-Enhancing Eyebrow Shapes</h2>
<p>The "New Moon Brow" is most auspicious: a natural crescent curve, thick at the inner corner tapering naturally outward, extending slightly beyond the eye. It signifies gentle character, good relationships, and steady wealth. The "Sleeping Silkworm Brow" — thick and full — indicates strong vitality and robust fortune. Overly short, closely set, or sharply upward-angled brows signal less favorable readings.</p>

<h2>Practical Eyebrow Management Guide</h2>
<p>Don't over-pluck — natural brows almost always create a more likable impression. Maintain appropriate spacing between brows. Preserve the natural arch. Keep brows extending slightly beyond the outer eye corner.</p>

<h2>Eyebrows and Emotional Expression</h2>
<p>Eyebrows are the primary vehicle for emotional expression. If you habitually furrow your brows, consciously correcting this habit can dramatically soften your overall impression. Simply releasing tension between the brows can make you appear far more approachable and warm.</p>
    ` },

  { id:8, tagKr:'스타일링', tagEn:'Styling',
    titleKr:'부티 나는 스타일링 가이드 — 지금 당장 실천할 수 있는 아우라 업그레이드',
    titleEn:'The Definitive Aura Styling Guide — Upgrades You Can Implement Today',
    descKr:'예산에 관계없이 지금 바로 실천할 수 있는 부티 업그레이드 스타일링 팁과 아이템 가이드를 총정리합니다.',
    descEn:'A comprehensive styling and item guide for aura upgrades you can implement regardless of budget, starting right now.',
    bodyKr:`
<h2>부티는 가격이 아니라 조화에서 나온다</h2>
<p>많은 사람들이 부티 있어 보이려면 비싼 명품이 필요하다고 생각합니다. 그러나 진짜 부티는 가격이 아닌 조화, 적절한 핏, 그리고 자신감에서 나옵니다. 10만 원짜리 옷도 자신의 체형에 완벽하게 맞고 전체적인 코디가 어울린다면 고급스럽게 보입니다. 반대로 수백만 원짜리 명품도 핏이 맞지 않으면 어색해 보일 수 있습니다.</p>
<p>패션 전문가들은 오히려 저렴한 기본 아이템들을 잘 조합하는 능력이 진정한 스타일링 실력이라고 말합니다. 좋은 소재의 화이트 셔츠, 잘 맞는 블랙 팬츠, 깔끔한 가죽 슈즈만 있어도 어느 자리에서든 품격 있는 인상을 줄 수 있습니다.</p>

<h2>캡슐 워드로브의 원칙</h2>
<p>캡슐 워드로브(Capsule Wardrobe)란 최소한의 아이템으로 최대한의 코디를 만들어내는 개념입니다. 부티 있는 캡슐 워드로브의 핵심 아이템은 다음과 같습니다. 첫째, 좋은 소재의 화이트 셔츠 또는 블라우스. 둘째, 잘 맞는 블랙 또는 네이비 팬츠. 셋째, 베이지 또는 카멜 색 트렌치코트. 넷째, 캐시미어 또는 고급 울 소재의 니트. 다섯째, 깔끔하고 심플한 디자인의 가죽 신발. 이 다섯 가지만 갖추어도 대부분의 상황에 품격 있게 대응할 수 있습니다.</p>

<h2>색상 팔레트 선택의 중요성</h2>
<p>색상 선택은 스타일링에서 매우 중요합니다. 부티 있는 스타일을 위해서는 뉴트럴 톤(아이보리, 베이지, 그레이, 네이비, 블랙, 화이트, 카멜)을 기본으로 삼고, 한두 가지 액센트 색상을 포인트로 사용하는 것이 좋습니다. 전체적으로 3가지 이하의 색상으로 코디를 구성하면 정돈되고 세련된 인상을 줍니다.</p>

<h2>핏의 중요성 — 수선의 가치</h2>
<p>스타일링에서 핏보다 중요한 것은 없습니다. 저렴한 옷이라도 수선을 통해 몸에 딱 맞게 만들면 훨씬 고급스러워 보입니다. 특히 어깨 라인, 소매 길이, 바지 기장은 전체적인 인상에 가장 큰 영향을 미칩니다. 옷을 구매할 때 수선비를 예산에 포함시키는 것을 권장합니다.</p>

<h2>자세와 걸음걸이 — 스타일링의 완성</h2>
<p>아무리 좋은 옷을 입어도 자세가 구부정하다면 부티 있어 보이지 않습니다. 등을 펴고 어깨를 자연스럽게 뒤로 당기며 걷는 것만으로 어떤 옷이든 훨씬 세련되어 보입니다. 걸음걸이는 너무 빠르지도, 너무 느리지도 않게 여유 있고 자신 있게 걷는 것이 중요합니다. 좋은 자세는 옷보다 더 강한 인상을 남깁니다.</p>

<h2>향수 — 보이지 않는 스타일</h2>
<p>향수는 시각으로 인지할 수 없지만 강력한 인상을 남기는 스타일링 요소입니다. 은은하고 고급스러운 향수를 사용하는 것은 부티 있는 인상을 완성하는 마지막 요소입니다. 너무 강한 향수는 오히려 역효과를 냅니다. 자신의 체취와 잘 어울리는 향수를 찾아 은은하게 뿌리는 것이 중요합니다.</p>
    `,
    bodyEn:`
<h2>Luxury Comes from Harmony, Not Price</h2>
<p>True luxury emanates from harmony, appropriate fit, and confidence — not price tags. A $100 outfit worn with perfect coordination and fit looks better than a poorly-fitted designer piece. Fashion experts consistently argue that skill in combining affordable basics is the truest measure of style.</p>

<h2>The Capsule Wardrobe</h2>
<p>A quality white shirt or blouse; well-fitted black or navy trousers; a beige or camel trench coat; cashmere or fine wool knit; and clean, simple leather shoes. These five items, well-chosen, provide dignified solutions for virtually any occasion.</p>

<h2>Color Palette</h2>
<p>Build from neutral tones (ivory, beige, grey, navy, black, white, camel) and add one or two accent colors as highlights. Limiting any outfit to three colors or fewer creates a polished, composed impression.</p>

<h2>Fit — The Value of Tailoring</h2>
<p>Nothing in styling matters more than fit. Even inexpensive clothing, properly tailored, looks expensive. Shoulder line, sleeve length, and trouser break have the greatest impact. Budget for alterations when buying clothes.</p>

<h2>Posture — The Completion of Style</h2>
<p>No outfit overcomes poor posture. A straight back, naturally pulled-back shoulders, and a measured, confident gait transform any clothing into something more refined. Good posture leaves a stronger impression than any garment.</p>
    ` },

  { id:9, tagKr:'아우라', tagEn:'Aura',
    titleKr:'말투와 아우라의 힘 — 당신의 언어가 운명을 만든다',
    titleEn:'The Power of Speech and Aura — Your Language Creates Your Destiny',
    descKr:'언어 습관과 말투가 개인의 아우라와 삶의 기회에 미치는 심오한 영향을 탐구하고, 실천 가이드를 제공합니다.',
    descEn:'Exploring the profound impact of language habits and speech patterns on personal aura and life opportunities, with practical guidance.',
    bodyKr:`
<h2>언어는 현실을 만든다</h2>
<p>언어학자 벤자민 리 워프와 에드워드 사피어가 제안한 '사피어-워프 가설'에 따르면, 우리가 사용하는 언어는 단순히 생각을 표현하는 수단이 아니라 생각 자체를 형성하는 틀입니다. 긍정적인 언어를 사용하는 사람은 긍정적인 방향으로 현실을 인식하고, 부정적인 언어를 사용하는 사람은 부정적인 방향으로 현실을 인식하게 됩니다.</p>
<p>동아시아의 전통적인 사상에서도 언어의 힘은 매우 중요하게 다루어집니다. 말은 에너지를 가지고 있으며, 우리가 내뱉는 말이 실제 현실을 만들어나간다는 믿음은 수천 년의 전통을 가지고 있습니다. 관상학에서도 입술과 입의 형태가 말운(言運)을 나타낸다고 봅니다.</p>

<h2>목소리 톤과 속도의 중요성</h2>
<p>낮고 안정된 목소리는 신뢰감과 권위감을 주는 경향이 있습니다. 연구에 따르면 낮은 목소리의 CEO들이 더 높은 연봉을 받고 더 오래 재직하는 경향이 있다고 합니다. 스티브 잡스, 오바마 전 대통령, 워런 버핏 등 영향력 있는 인물들의 공통점 중 하나는 낮고 차분한 목소리입니다.</p>
<p>말의 속도도 중요합니다. 적당히 느린 속도로 명확하게 말하는 것이 빠르게 중얼거리는 것보다 훨씬 강한 인상을 줍니다. 빠르게 말하는 것은 불안함이나 자신감 부족으로 해석될 수 있습니다. 반면 여유 있게 천천히 말하는 것은 상대방에 대한 배려와 자신감을 동시에 보여줍니다.</p>

<h2>언어 습관 바꾸기 — 실천 가이드</h2>
<p>부티 있는 언어 습관을 만들기 위한 실천 가이드를 알아보겠습니다. 첫째, 불평과 험담을 줄이세요. 다른 사람이나 상황에 대한 지속적인 불평은 부정적인 에너지를 만들고 당신의 이미지를 해칩니다. 둘째, "좋아요", "대박", "완전" 같은 과도한 유행어 사용을 줄이세요. 셋째, 확실하지 않은 것에 대해 자신 있게 말하는 것보다 "잘 모르겠습니다, 확인해 보겠습니다"라고 말하는 것이 더 신뢰감을 줍니다. 넷째, 칭찬에 인색하지 마세요. 진심 어린 칭찬은 상대방의 마음을 열고 좋은 관계를 만듭니다. 다섯째, 말 끝을 흐리지 마세요. 문장을 명확하게 끝내는 습관이 자신감 있는 인상을 만듭니다.</p>

<h2>침묵의 힘</h2>
<p>부티 있는 사람들의 또 다른 공통점은 침묵을 두려워하지 않는다는 것입니다. 모든 빈 시간을 말로 채우려 하지 않고, 필요할 때 적절한 침묵을 유지할 수 있는 능력은 자신감과 여유의 표시입니다. "말이 많으면 실수가 많다"는 동양의 지혜처럼, 적게 말하고 깊이 있게 말하는 것이 훨씬 강한 인상을 남깁니다.</p>

<h2>결론 — 언어로 운명을 바꾸다</h2>
<p>당신이 매일 사용하는 언어와 말투는 단순한 의사소통 도구가 아닙니다. 그것은 당신의 아우라를 만들고, 인간관계를 결정하며, 나아가 삶의 기회를 만들어냅니다. 오늘부터 당신이 사용하는 언어에 주의를 기울이고, 더 긍정적이고 품격 있는 언어 습관을 만들어가는 여정을 시작하세요.</p>
    `,
    bodyEn:`
<h2>Language Creates Reality</h2>
<p>The Sapir-Whorf Hypothesis proposes that language doesn't merely express thought — it constitutes thought itself. Positive language users perceive reality positively; negative language users, negatively. East Asian traditions have emphasized the power of words for millennia: speech carries energy and actively shapes material reality.</p>

<h2>Voice Tone and Pace</h2>
<p>Lower, stable voices project trustworthiness and authority. Research shows lower-voiced CEOs earn higher salaries and serve longer tenures. Steve Jobs, Barack Obama, Warren Buffett — all share characteristically low, measured delivery. Speaking too fast signals anxiety or insecurity; measured, unhurried speech demonstrates both confidence and respect for the listener.</p>

<h2>Language Habit Change — A Practical Guide</h2>
<p>Reduce complaining and gossip; limit excessive filler words; "I'm not sure — I'll check and confirm" builds more trust than confident wrongness; be generous with sincere compliments; complete sentences clearly without trailing off. Each of these alone creates a measurably stronger, more trustworthy impression.</p>

<h2>The Power of Silence</h2>
<p>People of genuine presence don't fear silence. The ability to maintain comfortable silence when appropriate is a signal of confidence and ease. "Speak little, speak deep" — Eastern wisdom that translates directly to powerful impression management.</p>
    ` },

  { id:10, tagKr:'풍수', tagEn:'Feng Shui',
    titleKr:'재물운을 높이는 풍수 인테리어 — 공간이 운을 바꾼다',
    titleEn:'Feng Shui Interior Design for Wealth — Your Space Changes Your Fortune',
    descKr:'동양 풍수학의 현대적 적용으로 재물운과 아우라를 높이는 인테리어 원칙과 구체적 실천법을 총정리합니다.',
    descEn:'A comprehensive guide to modern Feng Shui application — interior principles and concrete practices for enhancing wealth luck and aura.',
    bodyKr:`
<h2>풍수란 무엇인가?</h2>
<p>풍수(風水)는 '바람과 물'을 의미하는 중국 전통 철학으로, 자연의 에너지인 '기(氣)'의 흐름을 활용하여 인간의 삶을 개선하는 것을 목표로 합니다. 약 4,000년의 역사를 가진 풍수는 단순한 미신을 넘어, 자연과 인간의 상호작용에 대한 깊은 통찰을 담고 있습니다.</p>
<p>현대에는 풍수의 원리가 환경 심리학(Environmental Psychology)과 접목되어 새롭게 해석되고 있습니다. 환경 심리학 연구들은 우리가 생활하는 공간의 배치, 색상, 빛, 소리가 기분, 생산성, 창의력, 심지어 건강에까지 영향을 미친다는 것을 보여줍니다. 풍수의 핵심 원리인 '좋은 기의 흐름'은 현대적으로 해석하면 '긍정적인 환경 에너지'와 같은 개념입니다.</p>

<h2>재물운을 높이는 핵심 풍수 원칙</h2>
<p>재물운을 높이는 가장 기본적인 풍수 원칙은 '기(氣)의 원활한 흐름'입니다. 불필요한 물건, 오래된 물건, 사용하지 않는 물건은 기의 흐름을 막습니다. 미니멀리즘이 단순한 트렌드가 아니라 풍수학적으로도 의미 있는 이유입니다. 현관은 항상 깨끗하고 밝게 유지해야 합니다. 현관은 기가 집 안으로 들어오는 입구이기 때문입니다.</p>
<p>풍수에서 재물을 상징하는 방위는 동남쪽입니다. 집이나 사무실의 동남쪽 공간을 깨끗하게 유지하고, 이 공간에 식물을 두거나 밝은 조명을 설치하면 재물운이 좋아진다고 합니다. 물은 풍수에서 재물의 상징입니다. 아쿠아리움, 분수, 또는 물을 담은 그릇을 동남쪽에 두는 것이 재물운에 도움이 된다고 봅니다.</p>

<h2>방별 풍수 인테리어 가이드</h2>
<p>침실에서는 침대를 문에서 보이는 위치에 두되, 문과 일직선이 되지 않도록 하세요. 문과 일직선이 되는 위치는 '사살(死煞)'이라 하여 좋지 않다고 봅니다. 거울이 침대를 직접 비추지 않도록 하세요. 거실은 소파를 벽을 등지도록 배치하여 안정감을 주고, 날카로운 모서리가 소파나 자주 앉는 자리를 향하지 않도록 하세요. 서재나 작업 공간에서는 책상이 문을 바라보는 방향으로 배치하는 것이 이상적입니다. 등 뒤에 문이 있으면 불안함을 느끼고 집중력이 떨어질 수 있습니다.</p>

<h2>식물 풍수 — 살아있는 에너지</h2>
<p>풍수에서 식물은 긍정적인 기를 생성하고 공간에 생명 에너지를 불어넣는 역할을 합니다. 재물운을 높이는 대표적인 식물로는 금전수(크라술라), 행운목, 대나무 등이 있습니다. 단, 죽어가는 식물이나 관리가 잘 안 된 식물은 오히려 부정적인 기를 만들 수 있으므로 주의가 필요합니다.</p>

<h2>색상과 풍수</h2>
<p>색상은 풍수에서 특별한 의미를 가집니다. 빨간색은 행운과 번영을 상징하며, 현관문이나 재물 방위에 포인트로 사용하면 좋습니다. 초록색은 성장과 번영을 나타내며, 목 기운이 강한 동쪽과 잘 어울립니다. 금색과 노란색은 재물과 번영을 상징합니다. 흰색과 회색은 금 기운을 나타내며 서쪽과 어울립니다.</p>

<h2>결론 — 공간이 아우라를 만든다</h2>
<p>우리가 매일 생활하는 공간은 단순한 물리적 환경이 아닙니다. 공간의 에너지는 우리의 기분과 생각에 영향을 미치고, 나아가 우리가 내리는 결정과 만들어내는 결과에도 영향을 줍니다. 풍수의 원리를 일상에 적용하여 더 긍정적인 에너지가 흐르는 공간을 만드는 것은, 결국 더 나은 아우라와 운을 만들어가는 여정의 시작입니다.</p>
    `,
    bodyEn:`
<h2>What Is Feng Shui?</h2>
<p>Feng Shui (風水) — "wind and water" — is a 4,000-year-old Chinese philosophy harnessing the flow of "Chi" (natural energy) to improve human life. Today it intersects productively with Environmental Psychology: research confirms that spatial arrangement, color, light, and sound measurably affect mood, productivity, creativity, and health.</p>

<h2>Core Wealth Principles</h2>
<p>Smooth Chi flow is fundamental. Clutter, broken objects, and unused items obstruct Chi — minimalism has Feng Shui roots. The entrance must stay clean and bright; it's where Chi enters. The southeast direction symbolizes wealth: keep this area clean, add plants or bright lighting. Water features in the southeast are traditionally wealth-enhancing.</p>

<h2>Room-by-Room Guide</h2>
<p>Bedroom: position the bed where the door is visible but not in direct line with it. Avoid mirrors directly facing the bed. Living room: position sofas against walls for stability; avoid sharp corners pointing at seating. Study: face the door from your desk — having your back to a door creates subconscious unease and reduces focus.</p>

<h2>Plants and Color</h2>
<p>Plants generate positive Chi and living energy. Wealth-associated plants include jade plant, lucky bamboo, and money tree. Dying or neglected plants generate negative Chi. Red symbolizes luck and prosperity; green, growth; gold and yellow, wealth; white and grey correspond to metal energy in the west.</p>

<h2>Conclusion</h2>
<p>Our daily living spaces are not merely physical environments — their energy influences our mood, thinking, decisions, and ultimately our outcomes. Applying Feng Shui principles is a practical path to creating spaces that support better aura, better decisions, and better fortune.</p>
    ` },
];
