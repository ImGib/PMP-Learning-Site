// components/topic-chrome.js — render sidebar + hero + footer of a Phần II topic page
// entirely from data (TOPICS) based on <body data-page="...">. No hardcoded chrome in HTML.
import { TOPICS } from '../data/site.js';

export function renderTopicChrome() {
  const page = document.body.dataset.page;
  if (!page) return;
  const idx = TOPICS.findIndex((t) => t.id === page);
  if (idx < 0) return;
  const t = TOPICS[idx];

  const side = document.getElementById('side');
  if (side) {
    const links = TOPICS.map(
      (x) =>
        `<a href="${x.id}.html"${x.id === page ? ' class="is-active"' : ''}><span class="sidebar__num">${x.num}</span>${x.short}</a>`
    ).join('');
    side.innerHTML = `<a class="sidebar__back" href="phan-2-chu-de.html">← Phần II · Mục lục</a>
       <h4>8 chủ đề kiến thức</h4>${links}
       <h4>Liên quan</h4>
       <a href="cong-thuc-va-vi-du.html"><span class="sidebar__num">∑</span>Công thức & ví dụ</a>
       <a href="flashcard-quiz.html"><span class="sidebar__num">?</span>Flashcard & Quiz</a>`;
  }

  const hero = document.getElementById('topic-hero');
  if (hero) {
    hero.innerHTML = `<span class="hero__eyebrow">Phần II · Chủ đề ${t.num}/08 — 8 Performance Domains</span>
       <h1>${t.title}</h1><p>${t.blurb}</p>`;
  }

  const foot = document.getElementById('topic-footer');
  if (foot) {
    const prev = idx > 0 ? TOPICS[idx - 1] : null;
    const next = idx < TOPICS.length - 1 ? TOPICS[idx + 1] : null;
    const nav = [
      prev ? `<a href="${prev.id}.html">← ${prev.title}</a>` : '',
      next
        ? `<a href="${next.id}.html">${next.title} →</a>`
        : `<a href="phan-3-agile.html">Phần III — Agile →</a>`,
    ]
      .filter(Boolean)
      .join(' · ');
    foot.innerHTML = `<b>Phần II · ${t.title}</b> · Nguồn: PMBOK® Guide 8th Ed. (2025) + slide PMP.<br>${nav}`;
  }
}
