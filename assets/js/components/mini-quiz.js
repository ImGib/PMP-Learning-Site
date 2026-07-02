// components/mini-quiz.js — per-topic self-scoring "quick check" mounted on Phần II topic pages.
// Looks for #miniQuiz and pulls questions from TOPIC_QUIZ keyed by <body data-page>. No-op otherwise.
import { esc, qs } from '../lib/dom.js';
import { TOPIC_QUIZ } from '../data/topic-quiz.js';

export function initMiniQuiz() {
  const mount = qs('#miniQuiz');
  if (!mount) return;
  const page = document.body.dataset.page;
  const items = page && TOPIC_QUIZ[page];
  if (!items || !items.length) return;

  const keys = ['A', 'B', 'C', 'D', 'E'];

  mount.innerHTML = `
    <h3>⚡ Kiểm tra nhanh — ${items.length} câu</h3>
    <p class="section__desc">Tự chấm: bấm vào đáp án để xem đúng/sai + giải thích ngay. Làm hết để nhận điểm.</p>
    <div class="quiz__bar" style="position:static;top:auto">
      <span class="quiz__score" id="mqScore">0 / ${items.length}</span>
      <div class="quiz__prog"><i id="mqProg"></i></div>
    </div>
    <div id="mqList"></div>
    <div class="quiz__done" id="mqDone" style="display:none"></div>`;

  const list = qs('#mqList', mount);
  const scoreEl = qs('#mqScore', mount);
  const progEl = qs('#mqProg', mount);
  const doneEl = qs('#mqDone', mount);
  const total = items.length;
  let answered = 0;
  let correct = 0;

  function update() {
    scoreEl.textContent = `${correct} / ${total}`;
    progEl.style.width = Math.round((answered / total) * 100) + '%';
    if (answered !== total) {
      doneEl.style.display = 'none';
      return;
    }
    const pct = Math.round((correct / total) * 100);
    const msg =
      pct >= 80
        ? 'Xuất sắc! Bạn nắm chắc phần này.'
        : pct >= 60
          ? 'Khá — ôn lại các câu sai là ổn.'
          : 'Cần ôn lại — đọc kỹ giải thích từng câu.';
    doneEl.innerHTML = `<div class="quiz__result">${pct}%</div><p><b>${correct}/${total}</b> câu đúng. ${msg}</p><button class="btn btn--primary" id="mqReset">Làm lại</button>`;
    doneEl.style.display = 'block';
    qs('#mqReset', doneEl).addEventListener('click', () => {
      render();
      mount.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  }

  function render() {
    answered = 0;
    correct = 0;
    list.innerHTML = '';
    doneEl.style.display = 'none';
    doneEl.innerHTML = '';

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
        <div class="quiz__head"><span class="quiz__num">Câu ${qi + 1}</span></div>
        <div class="quiz__text">${esc(item.q)}</div>
        <div class="quiz__opts">${opts}</div>
        <div class="quiz__expl"><span class="quiz__expl-label">Giải thích</span>${item.expl}</div>`;
      list.appendChild(q);

      q.querySelectorAll('.quiz__opt').forEach((opt) => {
        opt.addEventListener('click', () => {
          if (q.classList.contains('is-answered')) return;
          q.classList.add('is-answered');
          const oi = parseInt(opt.dataset.oi, 10);
          const cor = item.correct;
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
    update();
  }

  render();
}
