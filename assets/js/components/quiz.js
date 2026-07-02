// components/quiz.js — self-scoring quiz with per-topic filter
import { esc, qs } from '../lib/dom.js';
import { QUIZ } from '../data/quiz.js';

export function initQuiz() {
  const list = qs('#quizList');
  if (!list) return;

  const keys = ['A', 'B', 'C', 'D', 'E'];
  let answered = 0,
    correct = 0,
    total = 0,
    cat = null;
  const scoreEl = qs('#quizScore'),
    progEl = qs('#quizProg'),
    totalEl = qs('#quizTotal'),
    doneEl = qs('#quizDone'),
    filterEl = qs('#quizFilter');

  function update() {
    if (scoreEl) scoreEl.textContent = `${correct} / ${total}`;
    if (progEl) progEl.style.width = (total ? Math.round((answered / total) * 100) : 0) + '%';
    if (!doneEl) return;
    if (answered === total && total > 0) {
      const pct = Math.round((correct / total) * 100);
      const msg =
        pct >= 80
          ? 'Xuất sắc! Sẵn sàng cho phần này.'
          : pct >= 65
            ? 'Đạt ngưỡng — ôn thêm các câu sai.'
            : 'Cần ôn lại — xem giải thích từng câu.';
      doneEl.innerHTML = `<div class="quiz__result">${pct}%</div><p><b>${correct}/${total}</b> câu đúng${cat ? ` · chủ đề <b>${esc(cat)}</b>` : ''}. ${msg}</p><button class="btn btn--primary" id="quizReset">Làm lại</button>`;
      doneEl.style.display = 'block';
      const rb = qs('#quizReset');
      if (rb)
        rb.addEventListener('click', () => {
          render(cat);
          const s = qs('#quiz');
          if (s) s.scrollIntoView({ behavior: 'smooth', block: 'start' });
        });
    } else {
      doneEl.style.display = 'none';
    }
  }

  function render(c) {
    cat = c || null;
    answered = 0;
    correct = 0;
    const items = QUIZ.filter((it) => !cat || it.cat === cat);
    total = items.length;
    if (totalEl) totalEl.textContent = total;
    if (doneEl) {
      doneEl.style.display = 'none';
      doneEl.innerHTML = '';
    }
    list.innerHTML = '';

    items.forEach((item, qi) => {
      const q = document.createElement('div');
      q.className = 'quiz__item';
      const opts = item.opts
        .map(
          (o, oi) =>
            `<div class="quiz__opt" data-oi="${oi}"><span class="quiz__key">${keys[oi]}</span>${esc(o)}</div>`
        )
        .join('');
      q.innerHTML = `
        <div class="quiz__head"><span class="quiz__num">Câu ${qi + 1}</span><span class="quiz__cat">${esc(item.cat)}</span></div>
        <div class="quiz__text">${esc(item.q)}</div>
        <div class="quiz__opts">${opts}</div>
        <div class="quiz__expl"><span class="quiz__expl-label">Giải thích</span>${item.expl}</div>`;
      list.appendChild(q);

      q.querySelectorAll('.quiz__opt').forEach((opt) => {
        opt.addEventListener('click', () => {
          if (q.classList.contains('is-answered')) return;
          q.classList.add('is-answered');
          const oi = parseInt(opt.dataset.oi, 10),
            cor = item.correct;
          q.querySelectorAll('.quiz__opt').forEach((o) => {
            if (parseInt(o.dataset.oi, 10) === cor) o.classList.add('quiz__opt--correct');
          });
          if (oi !== cor) opt.classList.add('quiz__opt--wrong');
          else correct++;
          answered++;
          update();
        });
      });
    });

    if (filterEl)
      filterEl
        .querySelectorAll('button')
        .forEach((b) =>
          b.classList.toggle('btn--primary', (b.getAttribute('data-cat') || '') === (cat || ''))
        );
    update();
  }

  if (filterEl) {
    const order = [],
      cnt = {};
    QUIZ.forEach((it) => {
      if (cnt[it.cat] === undefined) {
        cnt[it.cat] = 0;
        order.push(it.cat);
      }
      cnt[it.cat]++;
    });
    let html = `<span class="quiz__filter-label">Lọc theo chủ đề:</span><button class="btn btn--primary" data-cat="">Tất cả (${QUIZ.length})</button>`;
    order.forEach((c) => {
      html += `<button class="btn" data-cat="${esc(c)}">${esc(c)} (${cnt[c]})</button>`;
    });
    filterEl.innerHTML = html;
    filterEl
      .querySelectorAll('button')
      .forEach((b) => b.addEventListener('click', () => render(b.getAttribute('data-cat'))));
  }

  render(null);
}
