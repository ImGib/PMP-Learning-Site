// main.js — single entry point (ES module). Mounts shared chrome + feature-detects page widgets.
import { renderNavbar } from './components/navbar.js';
import { renderTopicChrome } from './components/topic-chrome.js';
import { initSidebar } from './components/sidebar.js';
import { initFlashcards } from './components/flashcards.js';
import { initQuiz } from './components/quiz.js';
import { initExam } from './components/exam.js';
import { initGlossary } from './components/glossary.js';

const navMount = document.getElementById('site-navbar');
if (navMount) renderNavbar(navMount);

renderTopicChrome(); // fills sidebar/hero/footer on Phần II topic pages (data-driven)
initSidebar(); // no-op if there is no .sidebar
initFlashcards(); // no-op if there is no #fcGrid
initQuiz(); // no-op if there is no #quizList
initExam(); // no-op if there is no #exam-root
initGlossary(); // no-op if there is no #glossSearch
