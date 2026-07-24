// site.js — client entry cho bản Astro (thay assets/js/main.js).
// KHÁC main.js ở chỗ: navbar + chrome đã render sẵn lúc build, nên KHÔNG gọi
// renderNavbar() / renderTopicChrome() nữa. Chỉ lo phần TƯƠNG TÁC.
// Mọi init* đều feature-detect → tự no-op nếu trang không có widget tương ứng.
import { mountMobileNav } from './assets/js/components/navbar.js';
import { initSidebar } from './assets/js/components/sidebar.js';
import { initFlashcards } from './assets/js/components/flashcards.js';
import { initQuiz } from './assets/js/components/quiz.js';
import { initMiniQuiz } from './assets/js/components/mini-quiz.js';
import { initExam } from './assets/js/components/exam.js';
import { initGlossary } from './assets/js/components/glossary.js';
import { initRitaOrderGame } from './assets/js/components/rita-order-game.js';
import { STRINGS } from './i18n-strings.js';

// Dropdown navbar (server-rendered): click-to-toggle. Click ra ngoài thì đóng.
// (Hover mở qua CSS như cũ.)
const groups = Array.from(document.querySelectorAll('.topbar__group'));
groups.forEach((g) => {
  const top = g.querySelector('.topbar__grouptop');
  if (!top) return;
  top.addEventListener('click', (e) => {
    e.stopPropagation();
    const open = g.classList.contains('is-open');
    groups.forEach((x) => x.classList.remove('is-open'));
    if (!open) g.classList.add('is-open');
  });
});
document.addEventListener('click', () => groups.forEach((g) => g.classList.remove('is-open')));

// Chuyển ngôn ngữ VI/EN theo mô hình từ điển (như react-i18next):
// apply STRINGS[lang] vào các phần tử [data-i18n] / [data-i18n-vi|en].
// (Phần tử data-l cũ — mobile drawer, gloss — vẫn do CSS xử lý theo <html data-lang>.)
const langBtns = Array.from(document.querySelectorAll('.topbar__langbtn'));
function applyLang(lang) {
  if (lang !== 'vi' && lang !== 'en') lang = 'vi';
  document.documentElement.dataset.lang = lang;
  const dict = STRINGS[lang] || {};
  document.querySelectorAll('[data-i18n]').forEach((el) => {
    const v = dict[el.dataset.i18n];
    if (v != null) el.innerHTML = v;
  });
  document.querySelectorAll('[data-i18n-vi]').forEach((el) => {
    el.innerHTML = lang === 'en' ? el.dataset.i18nEn : el.dataset.i18nVi;
  });
  langBtns.forEach((b) => b.classList.toggle('is-active', b.dataset.langSet === lang));
}
langBtns.forEach((b) =>
  b.addEventListener('click', () => {
    const l = b.dataset.langSet;
    try {
      localStorage.setItem('pmp-lang', l);
    } catch (e) {}
    applyLang(l);
  })
);
applyLang(document.documentElement.dataset.lang || 'vi');

mountMobileNav(); // chèn full site-nav vào sidebar cho mobile drawer
initSidebar();
initFlashcards();
initQuiz();
initMiniQuiz();
initExam();
initGlossary();
initRitaOrderGame(); // no-op nếu không có #ritaGame
