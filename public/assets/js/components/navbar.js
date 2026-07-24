// components/navbar.js — chỉ còn mountMobileNav (navbar desktop do Navbar.astro render lúc build).
// Chèn full site-nav vào đầu sidebar cho mobile drawer (☰). Song ngữ VI/EN (data-l).
const NAV = [
  { href: 'index.html', label: 'Trang chủ', en: 'Home' },
  {
    label: 'Học',
    en: 'Learn',
    children: [
      { href: 'principles-pmbok8.html', label: 'Nguyên lý PMBOK 8', en: 'PMBOK 8 Principles' },
      { href: 'part-1-foundations.html', label: 'I · Nền tảng', en: 'I · Foundations' },
      { href: 'part-2-topics.html', label: 'II · 8 Chủ đề', en: 'II · 8 Topics' },
      { href: 'part-3-agile.html', label: 'III · Agile & Adaptive', en: 'III · Agile & Adaptive' },
    ],
  },
  {
    label: 'Ôn thi',
    en: 'Exam Prep',
    children: [
      { href: 'part-4-exam-prep.html', label: 'IV · Chiến lược & Ethics', en: 'IV · Strategy & Ethics' },
      { href: 'mock-exam.html', label: 'Đề thi thử', en: 'Mock Exam' },
      { href: 'flashcard-quiz.html', label: 'Flashcard & Quiz', en: 'Flashcards & Quiz' },
      { href: 'rita-order-game.html', label: 'Game · Rita Process Chart', en: 'Game · Rita Process Chart' },
    ],
  },
  {
    label: 'Tra cứu',
    en: 'Reference',
    children: [
      { href: 'formulas-and-examples.html', label: 'Công thức & ví dụ', en: 'Formulas & Examples' },
      { href: 'glossary.html', label: 'Thuật ngữ (glossary)', en: 'Glossary' },
      { href: 'rita-process-chart.html', label: '49 Process Chart', en: '49 Process Chart' },
    ],
  },
];

const PART2_TOPICS = new Set([
  'scope.html',
  'schedule.html',
  'finance.html',
  'quality.html',
  'resource.html',
  'risk.html',
  'stakeholder.html',
  'procurement.html',
]);

const pageOf = () => location.pathname.split('/').pop() || 'index.html';
const isActive = (href, current) =>
  href === current || (href === 'part-2-topics.html' && PART2_TOPICS.has(current));

// nhãn song ngữ VI/EN
const bi = (vi, en) => `<span data-l="vi">${vi}</span><span data-l="en">${en}</span>`;

export function mountMobileNav() {
  const side = document.querySelector('.sidebar');
  if (!side || side.querySelector('.sidebar__sitenav')) return;
  const current = pageOf();
  const link = (href, label, en) =>
    `<a href="${href}"${isActive(href, current) ? ' class="is-active"' : ''}>${bi(label, en)}</a>`;
  const section = (title, en, items) =>
    `<h4>${bi(title, en)}</h4>` + items.map((i) => link(i.href, i.label, i.en)).join('');

  let html = `<h4>${bi('Điều hướng', 'Navigation')}</h4>${link('index.html', 'Trang chủ', 'Home')}`;
  NAV.forEach((item) => {
    if (item.children) html += section(item.label, item.en, item.children);
  });

  const wrap = document.createElement('div');
  wrap.className = 'sidebar__sitenav';
  wrap.innerHTML = html;
  side.prepend(wrap);
}
