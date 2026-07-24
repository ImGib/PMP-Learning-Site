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

mountMobileNav(); // chèn full site-nav vào sidebar cho mobile drawer
initSidebar();
initFlashcards();
initQuiz();
initMiniQuiz();
initExam();
initGlossary();
initRitaOrderGame(); // no-op nếu không có #ritaGame
