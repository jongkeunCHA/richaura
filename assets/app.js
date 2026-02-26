/* ══════════════════════════════════════
   부티 테스트 — app.js
   v2.1 | 2026
   - DOMContentLoaded 보호로 초기화 오류 방지
   - 개선된 매칭 로직 (confidence-weighted)
   - 바이럴 공유 기능 (링크, 트위터, 카카오)
   - 아우라 스펙트럼 "상위 N%" 표시
══════════════════════════════════════ */

document.addEventListener('DOMContentLoaded', () => {

// ── 언어 ────────────────────────────
let lang = 'kr';

function setLang(l) {
  lang = l;
  document.querySelectorAll('[data-kr]').forEach(el => {
    el.textContent = l === 'kr' ? el.dataset.kr : el.dataset.en;
  });
  document.getElementById('lkr').classList.toggle('on', l === 'kr');
  document.getElementById('len').classList.toggle('on', l === 'en');
  document.documentElement.lang = l === 'kr' ? 'ko' : 'en';
  renderBlog();
  renderPrivacy();
  if (document.getElementById('result-overlay').style.display === 'block' && lastMatched) {
    applyResultText(lastMatched, lastStats, lastSorted);
  }
}
document.getElementById('lkr').addEventListener('click', () => setLang('kr'));
document.getElementById('len').addEventListener('click', () => setLang('en'));

// ── 네비게이션 ───────────────────────
function goSec(sec) {
  document.querySelectorAll('.sec').forEach(s => s.classList.remove('on'));
  document.getElementById('sec-' + sec).classList.add('on');
  document.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('active'));
  document.getElementById('np-' + sec)?.classList.add('active');
  if (sec === 'blog') {
    document.getElementById('art-view').style.display = 'none';
    document.getElementById('blogList').style.display = 'block';
  }
  window.scrollTo({ top: 0, behavior: 'smooth' });
}
document.querySelectorAll('.nav-btn').forEach(b => b.addEventListener('click', () => goSec(b.dataset.sec)));
document.querySelectorAll('.footer-link').forEach(el => {
  el.addEventListener('click', () => goSec(el.dataset.sec));
});

// ── AI 모델 ──────────────────────────
const MODEL_URL = 'https://teachablemachine.withgoogle.com/models/Adsz2vqeL/';
let model = null, blobUrl = null;

async function loadModel() {
  setSt('⏳ AI 모델 연결 중...');
  try {
    model = await tmImage.load(MODEL_URL + 'model.json', MODEL_URL + 'metadata.json');
    setSt('✓ AI 준비 완료', '#090');
    setTimeout(() => { document.querySelector('.model-status-wrap').style.opacity = '0'; }, 2000);
  } catch(e) {
    setSt('❌ 연결 실패 — <a href="#" id="rm" style="color:#000;text-decoration:underline">재시도</a>', '#c00');
    setTimeout(() => {
      const b = document.getElementById('rm');
      if (b) b.addEventListener('click', ev => { ev.preventDefault(); loadModel(); });
    }, 100);
  }
}
function setSt(html, color = '#999') {
  const w = document.querySelector('.model-status-wrap'), t = document.getElementById('mst');
  if (!w || !t) return;
  w.style.opacity = '1'; t.innerHTML = html; t.style.color = color;
}
function waitForModel(ms = 15000) {
  return new Promise(res => {
    if (model) { res(true); return; }
    const t = Date.now();
    const iv = setInterval(() => {
      if (model) { clearInterval(iv); res(true); }
      else if (Date.now() - t > ms) { clearInterval(iv); res(false); }
    }, 300);
  });
}
loadModel();

// ══════════════════════════════════════
// 개선된 매칭 로직 v2
// ══════════════════════════════════════
// 클래스별 결과 매핑 테이블 (조합 → 결과 인덱스)
const MATCH_TABLE = {
  // 단일 지배적 (p1 >= 0.70)
  'solo_부티':   0,  // 로열 블러드
  'solo_우아함': 3,  // 클래식 아이콘
  'solo_지적':   11, // 브레인 리더
  'solo_친근함': 9,  // 선한 영향력
  'solo_힙함':   4,  // 트렌드 세터
  // 조합 (1위+2위)
  '부티+우아함': 1,   // 대저택의 주인
  '부티+지적':   7,   // 프라이빗 VIP
  '부티+힙함':   2,   // 아트 디렉터
  '부티+친근함': 8,   // 엔젤 투자자
  '우아함+부티': 1,   // 대저택의 주인
  '우아함+지적': 10,  // 스텔스 럭셔리
  '우아함+친근함':3,  // 클래식 아이콘
  '우아함+힙함': 15,  // 독보적 취향가
  '지적+부티':   5,   // 유니콘 창업주
  '지적+힙함':   14,  // 미래 선구자
  '지적+친근함': 12,  // 마이다스의 손
  '지적+우아함': 13,  // 전략적 승부사
  '친근함+부티': 8,   // 엔젤 투자자
  '친근함+지적': 9,   // 선한 영향력
  '친근함+힙함': 16,  // 디지털 노마드
  '친근함+우아함':9,  // 선한 영향력
  '힙함+부티':   6,   // 힙한 콜렉터
  '힙함+지적':   17,  // 아틀리에 오너
  '힙함+친근함': 18,  // 소신 럭셔리
  '힙함+우아함': 6,   // 힙한 콜렉터
};

// 신뢰도 레벨 계산
function getConfidenceLevel(p1) {
  if (p1 >= 0.70) return 'high';
  if (p1 >= 0.50) return 'mid';
  return 'low';
}

function matchResult(sorted) {
  const t1 = sorted[0].className;
  const t2 = sorted[1].className;
  const p1 = sorted[0].probability;

  // 지배적 단일 클래스 (70% 이상)
  if (p1 >= 0.70) {
    const idx = MATCH_TABLE['solo_' + t1];
    if (idx !== undefined) return { result: RESULTS[idx], confidence: 'high', p1 };
  }

  // 조합 매칭
  const key = t1 + '+' + t2;
  const idx = MATCH_TABLE[key];
  if (idx !== undefined) return { result: RESULTS[idx], confidence: getConfidenceLevel(p1), p1 };

  // 폴백
  return { result: RESULTS[Math.floor(Math.random() * RESULTS.length)], confidence: 'low', p1 };
}

// ── 소프트맥스 온도 스무딩 ───────────
function smoothPredictions(preds) {
  const T = 3.5, MIN = 0.05;
  const logits = preds.map(p => Math.log(Math.max(p.probability, 1e-7)));
  const sc = logits.map(l => l / T);
  const mx = Math.max(...sc);
  const exps = sc.map(l => Math.exp(l - mx));
  const sum = exps.reduce((a, b) => a + b, 0);
  let adj = exps.map(e => e / sum);
  let def = 0;
  adj = adj.map(p => { if (p < MIN) { def += MIN - p; return MIN; } return p; });
  const ab = adj.reduce((s, p) => s + (p > MIN ? p : 0), 0);
  adj = adj.map(p => p > MIN ? p - (p / ab) * def : p);
  const fs = adj.reduce((a, b) => a + b, 0);
  return preds.map((p, i) => ({ className: p.className, probability: adj[i] / fs }));
}

// ── 업로드 ──────────────────────────
const frame  = document.getElementById('photoFrame');
const fi     = document.getElementById('fileInput');
const pi     = document.getElementById('preview-img');
const idle   = document.getElementById('uploadIdle');
const mask   = document.getElementById('changeMask');
const ready  = document.getElementById('photoReady');
const aBtn   = document.getElementById('analyze-btn');
const loadSec= document.getElementById('loading-section');
const overlay= document.getElementById('result-overlay');

if (!frame || !fi || !pi || !aBtn) {
  console.error('[부티테스트] 필수 DOM 요소를 찾을 수 없습니다. HTML 구조를 확인하세요.');
  return;
}

frame.addEventListener('click', () => fi.click());
mask.addEventListener('click', e => { e.stopPropagation(); fi.click(); });
fi.addEventListener('change', e => { if (e.target.files[0]) handleFile(e.target.files[0]); });
frame.addEventListener('dragover', e => { e.preventDefault(); frame.style.background = '#e8e8e8'; });
frame.addEventListener('dragleave', () => frame.style.background = '');
frame.addEventListener('drop', e => {
  e.preventDefault(); frame.style.background = '';
  if (e.dataTransfer.files[0]) handleFile(e.dataTransfer.files[0]);
});

function handleFile(file) {
  if (!file.type.startsWith('image/')) { showToast(lang === 'kr' ? '이미지 파일만 가능해요' : 'Image files only'); return; }
  if (blobUrl) URL.revokeObjectURL(blobUrl);
  blobUrl = URL.createObjectURL(file);
  pi.onload = () => {
    idle.style.display = 'none'; pi.style.display = 'block';
    mask.style.display = 'flex'; ready.style.display = 'block';
    aBtn.style.display = 'block';
    setTimeout(() => aBtn.scrollIntoView({ behavior: 'smooth', block: 'nearest' }), 150);
  };
  pi.src = blobUrl;
}

// ── 분석 ────────────────────────────
let lastMatched = null, lastStats = null, lastSorted = null, lastConfidence = null;

aBtn.addEventListener('click', async () => {
  if (!model) {
    aBtn.disabled = true; aBtn.textContent = lang === 'kr' ? 'AI 로딩 중...' : 'Loading AI...';
    const ok = await waitForModel(15000);
    aBtn.disabled = false; aBtn.textContent = lang === 'kr' ? '부티 분석하기 →' : 'Analyse My Aura →';
    if (!ok) { showToast(lang === 'kr' ? 'AI 연결 실패. 다시 시도해주세요.' : 'AI connection failed. Please retry.'); return; }
  }
  aBtn.disabled = true; aBtn.textContent = lang === 'kr' ? '분석 중...' : 'Analysing...';
  loadSec.style.display = 'flex';
  document.body.style.overflow = 'hidden';

  const steps = [
    { id:'step-0', delay:0,    dur:1400 },
    { id:'step-1', delay:1400, dur:1600 },
    { id:'step-2', delay:3000, dur:1600 },
    { id:'step-3', delay:4600, dur:1500 },
    { id:'step-4', delay:6100, dur:1400 },
  ];
  const total = 8000;
  const barEl = document.getElementById('load-bar');
  const pctEl = document.getElementById('load-pct');
  const t0 = Date.now();
  const barTmr = setInterval(() => {
    const p = Math.min(98, Math.round(((Date.now() - t0) / total) * 100));
    barEl.style.width = p + '%'; pctEl.textContent = p + '%';
    if (p >= 98) clearInterval(barTmr);
  }, 80);

  steps.forEach((s, i) => {
    setTimeout(() => {
      if (i > 0) {
        const prev = document.getElementById(steps[i-1].id);
        prev.classList.remove('active'); prev.classList.add('done');
      }
      document.getElementById(s.id).classList.add('active');
    }, s.delay);
    if (i === steps.length - 1) {
      setTimeout(() => {
        document.getElementById(s.id).classList.remove('active');
        document.getElementById(s.id).classList.add('done');
        barEl.style.width = '100%'; pctEl.textContent = '100%';
      }, total - 100);
    }
  });

  await new Promise(r => setTimeout(r, total));
  clearInterval(barTmr);

  try {
    const c = document.createElement('canvas'); c.width = c.height = 224;
    c.getContext('2d').drawImage(pi, 0, 0, 224, 224);
    const preds = await model.predict(c);
    const sm = smoothPredictions(preds);
    const sorted = [...sm].sort((a, b) => b.probability - a.probability);
    const { result: matched, confidence, p1 } = matchResult(sorted);
    const stats = genStats(lang);

    lastMatched = matched; lastStats = stats; lastSorted = sorted; lastConfidence = { confidence, p1 };

    loadSec.style.display = 'none';
    document.body.style.overflow = '';
    steps.forEach(s => { const el = document.getElementById(s.id); el.classList.remove('active', 'done'); });
    barEl.style.width = '0%'; pctEl.textContent = '0%';

    renderResult(sorted, matched, stats, confidence);
  } catch(err) {
    loadSec.style.display = 'none';
    document.body.style.overflow = '';
    steps.forEach(s => { const el = document.getElementById(s.id); el.classList.remove('active', 'done'); });
    console.error(err);
    showToast(lang === 'kr' ? '분석 오류. 다시 시도해주세요.' : 'Analysis error. Please retry.');
    aBtn.disabled = false; aBtn.textContent = lang === 'kr' ? '부티 분석하기 →' : 'Analyse My Aura →';
  }
});

// ── 결과 렌더 ────────────────────────
function applyResultText(matched, stats, sorted) {
  const kr = lang === 'kr';
  document.getElementById('r-emoji').textContent = matched.emoji;
  document.getElementById('r-name').textContent  = kr ? matched.name  : matched.nameEn;
  document.getElementById('r-desc').textContent  = kr ? matched.desc  : matched.descEn;
  document.getElementById('r-powers').innerHTML = (kr ? matched.power : matched.powerEn).map((p, i) =>
    `<div class="power-item"><span class="power-n">0${i+1}</span><span class="power-text">${p}</span></div>`
  ).join('');
  document.getElementById('r-wealth').textContent = kr ? matched.wealth : matched.wealthEn;
  document.getElementById('r-celeb').textContent  = kr ? matched.celeb  : matched.celebEn;
  document.getElementById('r-tip').textContent    = kr ? matched.tip    : matched.tipEn;
  document.getElementById('r-stats').innerHTML = (stats || genStats(lang)).map(s =>
    `<div class="stat-item"><div class="stat-icon">${s.icon}</div><div class="stat-label">${s.label}</div><div class="stat-value">${s.value}</div></div>`
  ).join('');
  document.getElementById('r-ads').innerHTML = ADS.map(a =>
    `<a href="${a.url}" target="_blank" rel="noopener" class="ad-item"><div class="ad-item-icon">${a.icon}</div><div class="ad-item-name">${kr ? a.nameKr : a.nameEn}</div></a>`
  ).join('');
  // 저장 카드
  document.getElementById('sc-emoji').textContent = matched.emoji;
  document.getElementById('sc-name').textContent  = kr ? matched.name  : matched.nameEn;
  document.getElementById('sc-desc').textContent  = kr ? matched.desc  : matched.descEn;
  document.getElementById('sc-powers').innerHTML = (kr ? matched.power : matched.powerEn).map((p, i) =>
    `<div class="sc-power-item"><span class="sc-power-n">0${i+1}</span><span>${p}</span></div>`
  ).join('');
  document.getElementById('sc-stats').innerHTML = (stats || genStats(lang)).map(s =>
    `<div class="sc-stat"><div class="sc-stat-icon">${s.icon}</div><div class="sc-stat-label">${s.label}</div><div class="sc-stat-val">${s.value}</div></div>`
  ).join('');
}

// ══════════════════════════════════════
// 아우라 스펙트럼 — "상위 N%" 변환 로직
// 규칙:
//   1) 1위  → 반드시 상위 1~10%  (★ 강조)
//   2) 2위  → 반드시 상위 11~30% (랜덤, 기분 좋은 범위)
//   3) 3~5위 → 상위 31~55% 범위에서 순서대로 분산
//   4) 바 길이는 상위 %가 낮을수록(좋을수록) 길게
// ══════════════════════════════════════
function probToTopPercent(sorted) {
  const r = () => Math.floor(Math.random() * 10); // 0~9 랜덤

  // 1위: 상위 1~10%
  const top1 = r() + 1; // 1~10

  // 2위: 상위 11~30%
  const top2 = r() * 2 + 11; // 11~29 (짝수 간격으로 자연스럽게)

  // 3~5위: 상위 31~55% 범위에서 순서대로 배치
  // 각 항목 간 최소 3% 간격 보장
  const top3 = 31 + r();           // 31~40
  const top4 = Math.max(top3 + 3, 38 + r()); // top3보다 최소 3 크게
  const top5 = Math.max(top4 + 3, 46 + r()); // top4보다 최소 3 크게

  const topPcts = [top1, top2, top3, top4, top5];

  return sorted.map((item, i) => ({ ...item, topPct: topPcts[i] }));
}

function buildAuraBars(sorted, langCode) {
  const kr = langCode === 'kr';

  // 클래스명 한/영 매핑
  const LABEL_MAP = {
    '부티':  { kr: '부티',  en: 'Luxury' },
    '귀티':  { kr: '부티',  en: 'Luxury' },
    '우아함': { kr: '우아함', en: 'Elegance' },
    '친근함': { kr: '친근함', en: 'Warmth' },
    '힙함':  { kr: '힙함',  en: 'Hip' },
    '지적':  { kr: '지적',  en: 'Intellect' },
  };

  const items = probToTopPercent(sorted);

  return items.map((item, i) => {
    const map = LABEL_MAP[item.className] || { kr: item.className, en: item.className };
    const label = kr ? map.kr : map.en;
    const topPct = item.topPct;

    // 바 길이: 상위 %가 낮을수록(좋을수록) 길게
    const barWidth = Math.round(100 - (topPct / 50) * 70);

    // 뱃지 강조: 상위 10% → ★ 검정, 상위 11~30% → ★ 회색
    const isTopTen    = topPct <= 10;
    const isTopThirty = topPct <= 30;
    const badgeClass  = isTopTen
      ? 'aura-badge aura-badge--top'
      : isTopThirty
        ? 'aura-badge aura-badge--mid'
        : 'aura-badge';
    const badgeText = kr ? `상위 ${topPct}%` : `Top ${topPct}%`;

    return `
    <div class="aura-row">
      <span class="aura-label">${label}</span>
      <div class="aura-track">
        <div class="aura-fill${isTopTen ? ' aura-fill--top' : isTopThirty ? ' aura-fill--mid' : ''}" data-pct="${barWidth}"></div>
      </div>
      <span class="${badgeClass}">${badgeText}</span>
    </div>`;
  }).join('');
}

function renderResult(sorted, matched, stats, confidence) {
  applyResultText(matched, stats, sorted);

  // 신뢰도 배지
  const badge = document.getElementById('r-confidence');
  if (badge) {
    const conf = lastConfidence || { confidence: 'mid', p1: 0.5 };
    const pct  = Math.round(conf.p1 * 100);
    const levelText = conf.confidence === 'high'
      ? (lang === 'kr' ? '높은 신뢰도' : 'High Confidence')
      : (lang === 'kr' ? '보통 신뢰도' : 'Mid Confidence');
    badge.innerHTML = `<span class="confidence-dot ${conf.confidence}"></span> ${levelText} ${pct}%`;
    badge.style.display = 'inline-flex';
  }

  // 아우라 스펙트럼 — "상위 N%" 표시
  if (sorted) {
    document.getElementById('r-bars').innerHTML = buildAuraBars(sorted, lang);
  }

  overlay.style.display = 'block';
  document.body.style.overflow = 'hidden';
  overlay.scrollTop = 0;
  aBtn.disabled = false;
  aBtn.textContent = lang === 'kr' ? '부티 분석하기 →' : 'Analyse My Aura →';
  setTimeout(() => document.querySelectorAll('.bar-fill, .aura-fill').forEach(b => b.style.width = b.dataset.pct + '%'), 200);

  // GA4 이벤트
  if (typeof gtag !== 'undefined') {
    gtag('event', 'result_viewed', {
      aura_type: matched.name,
      confidence: confidence,
      lang: lang
    });
  }
}

// ══════════════════════════════════════
// 바이럴 공유 기능 v2 (신규)
// ══════════════════════════════════════

const SITE_URL  = 'https://www.richaura.store';
const SITE_NAME = '부티 테스트';

/** 공유 텍스트 생성 */
function buildShareText(matched) {
  const name = lang === 'kr' ? matched.name  : matched.nameEn;
  const desc = lang === 'kr'
    ? `AI가 분석한 내 부티 타입은 "${name}" ${matched.emoji}\n나도 궁금하면 → ${SITE_URL}`
    : `My AI-analyzed aura type is "${name}" ${matched.emoji}\nCheck yours → ${SITE_URL}`;
  return desc;
}

/** 링크 복사 */
async function copyLink() {
  const matched = lastMatched;
  if (!matched) return;
  const text = SITE_URL;
  try {
    await navigator.clipboard.writeText(text);
    showToast(lang === 'kr' ? '🔗 링크 복사 완료! 친구에게 공유해보세요' : '🔗 Link copied! Share with friends');
    document.getElementById('share-copy-msg').classList.add('show');
    setTimeout(() => document.getElementById('share-copy-msg')?.classList.remove('show'), 3000);
  } catch(e) {
    const ta = document.createElement('textarea');
    ta.value = text; document.body.appendChild(ta); ta.select();
    document.execCommand('copy'); document.body.removeChild(ta);
    showToast(lang === 'kr' ? '🔗 링크 복사 완료!' : '🔗 Link copied!');
  }
  if (typeof gtag !== 'undefined') gtag('event', 'share', { method: 'copy_link', aura_type: matched.name });
}

/** 트위터(X) 공유 */
function shareTwitter() {
  if (!lastMatched) return;
  const text = buildShareText(lastMatched);
  const url = `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}`;
  window.open(url, '_blank', 'width=600,height=400');
  if (typeof gtag !== 'undefined') gtag('event', 'share', { method: 'twitter', aura_type: lastMatched.name });
}

/** 카카오톡 공유 */
function shareKakao() {
  if (!lastMatched) return;
  const matched = lastMatched;
  const name = lang === 'kr' ? matched.name : matched.nameEn;
  const desc = lang === 'kr'
    ? `${matched.desc}\n당신의 부티 결과가 궁금하신가요?`
    : `${matched.descEn}\nCurious about your own aura type?`;

  // 카카오 SDK 사용 (스크립트 로드 전 폴백)
  if (typeof Kakao !== 'undefined' && Kakao.isInitialized()) {
    Kakao.Share.sendDefault({
      objectType: 'feed',
      content: {
        title: `나의 부티 타입: ${matched.emoji} ${name}`,
        description: desc,
        imageUrl: `${SITE_URL}/og-image.jpg`,
        link: { mobileWebUrl: SITE_URL, webUrl: SITE_URL }
      },
      buttons: [{
        title: lang === 'kr' ? '나도 테스트하기' : 'Take the test',
        link: { mobileWebUrl: SITE_URL, webUrl: SITE_URL }
      }]
    });
  } else {
    // SDK 없으면 링크 공유로 폴백
    const text = buildShareText(matched);
    const kakaoUrl = `https://story.kakao.com/share?url=${encodeURIComponent(SITE_URL)}&text=${encodeURIComponent(text)}`;
    window.open(kakaoUrl, '_blank');
  }
  if (typeof gtag !== 'undefined') gtag('event', 'share', { method: 'kakao', aura_type: matched.name });
}

/** Web Share API (모바일 네이티브) */
async function shareNative() {
  if (!lastMatched) return;
  const text = buildShareText(lastMatched);
  try {
    await navigator.share({ title: SITE_NAME, text, url: SITE_URL });
    if (typeof gtag !== 'undefined') gtag('event', 'share', { method: 'native', aura_type: lastMatched.name });
  } catch(e) {
    // 취소하면 무시
  }
}

/** 공유 섹션 초기화 */
function initShareSection() {
  // 더 보기 버튼 제거됨
}

// 이벤트 연결
document.getElementById('share-copy-btn')?.addEventListener('click', copyLink);
document.getElementById('share-twitter-btn')?.addEventListener('click', shareTwitter);
document.getElementById('share-kakao-btn')?.addEventListener('click', shareKakao);

// ── 이미지 저장 ──────────────────────
async function doSave() {
  showToast(lang === 'kr' ? '이미지 저장 중...' : 'Saving image...');
  const card = document.getElementById('save-card');
  try {
    const canvas = await html2canvas(card, {
      backgroundColor: '#ffffff', scale: 2, useCORS: true, logging: false,
      width: 480, windowWidth: 480,
      onclone: (doc) => {
        const el = doc.getElementById('save-card');
        el.style.position = 'relative'; el.style.left = '0'; el.style.top = '0';
      }
    });
    const link = document.createElement('a');
    link.download = `RichAuraTest_${document.getElementById('r-name').textContent}.png`;
    link.href = canvas.toDataURL('image/png'); link.click();
    showToast(lang === 'kr' ? '저장 완료! 인스타에 올려보세요 🖤' : 'Saved! Share it on Instagram 🖤');
    if (typeof gtag !== 'undefined') gtag('event', 'share', { method: 'save_image', aura_type: lastMatched?.name });
  } catch(e) {
    console.error(e);
    showToast(lang === 'kr' ? '저장 실패. 스크린샷을 이용해주세요.' : 'Save failed. Please screenshot.');
  }
}
document.getElementById('saveBtn')?.addEventListener('click', doSave);
document.getElementById('saveBtn2')?.addEventListener('click', doSave);

// ── 닫기 / 다시하기 ─────────────────
function closeOverlay() { overlay.style.display = 'none'; document.body.style.overflow = ''; }
document.getElementById('backBtn').addEventListener('click', closeOverlay);
document.getElementById('retryBtn').addEventListener('click', () => {
  closeOverlay();
  idle.style.display = 'flex'; pi.style.display = 'none'; mask.style.display = 'none';
  ready.style.display = 'none'; aBtn.style.display = 'none';
  fi.value = ''; pi.src = ''; blobUrl = null;
  aBtn.disabled = false; aBtn.textContent = lang === 'kr' ? '부티 분석하기 →' : 'Analyse My Aura →';
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// ── 토스트 ───────────────────────────
let toastTimer = null;
function showToast(msg) {
  const t = document.getElementById('toast');
  t.textContent = msg; t.classList.add('show');
  if (toastTimer) clearTimeout(toastTimer);
  toastTimer = setTimeout(() => t.classList.remove('show'), 2800);
}

// ══════════════════════════════════════
// 블로그
// ══════════════════════════════════════
function renderBlog() {
  const list = document.getElementById('blogList');
  const art  = document.getElementById('art-view');
  list.innerHTML = ''; list.style.display = 'block'; art.style.display = 'none';
  POSTS.forEach(p => {
    const card = document.createElement('div');
    card.className = 'blog-card';
    const tag   = lang === 'kr' ? p.tagKr   : p.tagEn;
    const title = lang === 'kr' ? p.titleKr : p.titleEn;
    const desc  = lang === 'kr' ? p.descKr  : p.descEn;
    card.innerHTML = `<div class="blog-num">${String(p.id).padStart(2,'0')}</div>
      <h2 class="blog-card-title">${title}</h2>
      <p class="blog-card-desc">${desc}</p>
      <div class="blog-card-meta"><span class="blog-tag">${tag}</span><span>Rich Aura Analytics</span><span>2026.01</span></div>`;
    card.addEventListener('click', () => openArticle(p.id));
    list.appendChild(card);
  });
  renderBlogPreview();
}

function renderBlogPreview() {
  const label = lang === 'kr' ? '최신 아티클' : 'Latest Articles';
  const btn   = lang === 'kr' ? '블로그에서 더 보기 →' : 'Read more on Blog →';
  const el = document.querySelector('.blog-preview-label');
  if (el) el.textContent = label;
  const b = document.getElementById('bpBtn'); if (b) b.textContent = btn;

  const container = document.getElementById('bpCards');
  if (!container) return;

  container.innerHTML = POSTS.slice(0, 5).map(p => {
    const tag   = lang === 'kr' ? p.tagKr   : p.tagEn;
    const title = lang === 'kr' ? p.titleKr : p.titleEn;
    const desc  = lang === 'kr' ? p.descKr  : p.descEn;
    const preview = desc.length > 960 ? desc.slice(0, 960) + '...' : desc;
    return `
    <div class="bp-card" onclick="location.href='./blog.html#post-${p.id}'" style="cursor:pointer">
      <div class="bp-card-tag">${tag}</div>
      <div class="bp-card-title">${title}</div>
      <div class="bp-card-desc">${preview}</div>
    </div>`;
  }).join('<div class="bp-divider"></div>');
}

function openArticle(id) {
  const p = POSTS.find(x => x.id === id); if (!p) return;
  document.getElementById('blogList').style.display = 'none';
  document.getElementById('art-view').style.display = 'block';
  const title  = lang === 'kr' ? p.titleKr : p.titleEn;
  const body   = lang === 'kr' ? p.bodyKr  : p.bodyEn;
  const tag    = lang === 'kr' ? p.tagKr   : p.tagEn;
  const authorLbl = lang === 'kr' ? '작성자' : 'Author';
  const roleLbl   = lang === 'kr' ? 'AI 관상 & 아우라 분석가' : 'AI Physiognomy & Aura Analyst';
  document.getElementById('artContent').innerHTML = `
    <span class="art-eyebrow">${tag} · Rich Aura Analytics</span>
    <h1 class="art-h1">${title}</h1>
    <div class="art-meta"><span>${authorLbl}: Rich Aura Analytics</span><span>2026.01.15</span></div>
    <div class="art-content">${body}</div>
    <div class="author-box">
      <div class="author-av">🔮</div>
      <div><div class="author-name">Rich Aura Analytics</div>
      <div class="author-role">${roleLbl} · rich-aura-test.com</div></div>
    </div>`;
  window.scrollTo({ top: 0, behavior: 'smooth' });
}
document.getElementById('artBack').addEventListener('click', () => {
  document.getElementById('art-view').style.display = 'none';
  document.getElementById('blogList').style.display = 'block';
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// ══════════════════════════════════════
// 개인정보처리방침
// ══════════════════════════════════════
function renderPrivacy() {
  document.getElementById('privContent').innerHTML = lang === 'kr' ? `
    <h1 class="priv-h1">개인정보처리방침</h1>
    <p class="priv-date">시행일: 2026년 1월 1일 | 최종 수정: 2026년 1월 15일</p>
    <div class="priv-body">
    <h2>1. 개인정보 수집 및 이용 목적</h2>
    <p>부티 테스트는 AI 기반 관상 및 아우라 분석 서비스를 제공합니다. 본 서비스는 사용자의 개인정보 보호를 중요하게 생각하며 관련 법령을 준수합니다.</p>
    <h2>2. 수집하는 개인정보 항목</h2>
    <p>분석 목적으로 업로드하는 이미지는 브라우저 내 로컬에서만 처리되며 서버에 저장되지 않습니다.</p>
    <h2>3. 제3자 서비스</h2>
    <ul><li>Google Analytics 4 (GA4): 서비스 이용 통계 분석 목적</li>
    <li>Google Teachable Machine: AI 이미지 분석 (이미지는 서버로 전송되지 않음)</li>
    <li>Google AdSense: 광고 제공 목적</li></ul>
    <h2>4. 쿠키 사용</h2>
    <p>서비스 개선 및 광고 목적으로 쿠키를 사용할 수 있습니다.</p>
    <h2>5. 사용자의 권리</h2>
    <p>언제든지 개인정보 처리에 대한 동의 철회, 열람, 수정, 삭제를 요청할 수 있습니다. 문의: jongkeuncom@gmail.com</p>
    <h2>6. 면책 조항</h2>
    <p>AI 관상 분석 결과는 순수한 오락 목적으로 제공됩니다. 실제 의사 결정의 근거로 사용하지 마세요.</p>
    <h2>7. 개인정보 보호책임자</h2>
    <p>개인정보 보호책임자: Carvis | jongkeuncom@gmail.com</p>
    </div>`
  : `<h1 class="priv-h1">Privacy Policy</h1>
    <p class="priv-date">Effective: January 1, 2026 | Last Updated: January 15, 2026</p>
    <div class="priv-body">
    <h2>1. Purpose</h2>
    <p>Rich Aura Test provides AI-based physiognomy and aura analysis. We comply with applicable privacy laws.</p>
    <h2>2. Information We Collect</h2>
    <p>Images uploaded for analysis are processed locally within your browser only and are never stored on our servers.</p>
    <h2>3. Third-Party Services</h2>
    <ul><li>Google Analytics 4: For usage statistics</li>
    <li>Google Teachable Machine: For AI image analysis — images never transmitted</li>
    <li>Google AdSense: For advertising</li></ul>
    <h2>4. Cookies</h2>
    <p>This service may use cookies for improvement and advertising purposes.</p>
    <h2>5. User Rights</h2>
    <p>You may withdraw consent or request access at any time. Contact: jongkeuncom@gmail.com</p>
    <h2>6. Disclaimer</h2>
    <p>AI analysis results are for entertainment purposes only.</p>
    <h2>7. Privacy Officer</h2>
    <p>Privacy Officer: Carvis | jongkeuncom@gmail.com</p>
    </div>`;
}

// ── 초기화 ───────────────────────────
renderBlog();
renderPrivacy();
initShareSection();

}); // DOMContentLoaded
