// components/navbar.js — shared top navigation (rendered at runtime → no duplication)
// Grouped into dropdowns to avoid a sprawling single row.
const NAV = [
  { href: 'index.html', label: 'Trang chủ' },
  {
    label: 'Học',
    children: [
      { href: 'nguyen-ly-pmbok8.html', label: 'Nguyên lý PMBOK 8' },
      { href: 'phan-1-nen-tang.html', label: 'I · Nền tảng' },
      { href: 'phan-2-chu-de.html', label: 'II · 8 Chủ đề' },
      { href: 'phan-3-agile.html', label: 'III · Agile & Adaptive' },
    ],
  },
  {
    label: 'Ôn thi',
    children: [
      { href: 'phan-4-on-thi.html', label: 'IV · Chiến lược & Ethics' },
      { href: 'de-thi-thu.html', label: 'Đề thi thử' },
      { href: 'flashcard-quiz.html', label: 'Flashcard & Quiz' },
    ],
  },
  {
    label: 'Tra cứu',
    children: [
      { href: 'cong-thuc-va-vi-du.html', label: 'Công thức & ví dụ' },
      { href: 'thuat-ngu.html', label: 'Thuật ngữ (glossary)' },
      { href: 'rita-process-chart.html', label: '49 Process Chart' },
    ],
  },
];

// Per-topic pages of Phần II live at the root; the "II · 8 Chủ đề" item stays active on them.
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

export function renderNavbar(mount) {
  const current = location.pathname.split('/').pop() || 'index.html';
  const isActive = (href) =>
    href === current || (href === 'phan-2-chu-de.html' && PART2_TOPICS.has(current));

  const nav = NAV.map((item) => {
    if (!item.children) {
      const cur = isActive(item.href) ? ' topbar__link--current' : '';
      return `<a class="topbar__link${cur}" href="${item.href}">${item.label}</a>`;
    }
    const anyCur = item.children.some((c) => isActive(c.href));
    const kids = item.children
      .map((c) => {
        const cur = isActive(c.href) ? ' topbar__panellink--current' : '';
        return `<a class="topbar__panellink${cur}" href="${c.href}">${c.label}</a>`;
      })
      .join('');
    return `<div class="topbar__group">
        <button class="topbar__grouptop${anyCur ? ' topbar__grouptop--current' : ''}" type="button" aria-haspopup="true">${item.label}<span class="topbar__caret">▾</span></button>
        <div class="topbar__panel">${kids}</div>
      </div>`;
  }).join('');

  mount.className = 'topbar';
  mount.innerHTML = `
    <a class="topbar__brand" href="index.html">
      <span class="topbar__brand-mark">P</span> PMBOK 8
      <small class="topbar__brand-tag">học PMP · v3</small>
    </a>
    <nav class="topbar__nav">${nav}</nav>
    <button class="topbar__menu" id="menuBtn" aria-label="menu">☰</button>`;

  // Click-to-toggle dropdowns (hover also opens them via CSS). Outside-click closes.
  const groups = Array.from(mount.querySelectorAll('.topbar__group'));
  groups.forEach((g) => {
    g.querySelector('.topbar__grouptop').addEventListener('click', (e) => {
      e.stopPropagation();
      const open = g.classList.contains('is-open');
      groups.forEach((x) => x.classList.remove('is-open'));
      if (!open) g.classList.add('is-open');
    });
  });
  document.addEventListener('click', () => groups.forEach((g) => g.classList.remove('is-open')));
}
