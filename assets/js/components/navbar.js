// components/navbar.js — shared top navigation (rendered at runtime → no duplication)
const LINKS = [
  { href: 'index.html',              label: 'Bắt đầu' },
  { href: 'phan-1-nen-tang.html',    label: 'I · Nền tảng' },
  { href: 'phan-2-chu-de.html',      label: 'II · Chủ đề' },
  { href: 'phan-3-agile.html',       label: 'III · Agile' },
  { href: 'phan-4-on-thi.html',      label: 'IV · Ôn thi' },
  { href: 'cong-thuc-va-vi-du.html', label: 'Công thức' },
  { href: 'thuat-ngu.html',          label: 'Thuật ngữ' },
  { href: 'rita-process-chart.html', label: 'Process Chart' },
  { href: 'flashcard-quiz.html',     label: 'Flashcard & Quiz', cta: true },
];

export function renderNavbar(mount) {
  const current = (location.pathname.split('/').pop() || 'index.html');
  const links = LINKS.map((l) => {
    const cls = ['topbar__link'];
    if (l.cta) cls.push('topbar__link--cta');
    if (l.href === current) cls.push('topbar__link--current');
    return `<a class="${cls.join(' ')}" href="${l.href}">${l.label}</a>`;
  }).join('');

  mount.className = 'topbar';
  mount.innerHTML = `
    <a class="topbar__brand" href="index.html">
      <span class="topbar__brand-mark">P</span> PMBOK 8
      <small class="topbar__brand-tag">học PMP · v3</small>
    </a>
    <nav class="topbar__nav">${links}</nav>
    <button class="topbar__menu" id="menuBtn" aria-label="menu">☰</button>`;
}
