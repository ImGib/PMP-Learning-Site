// components/exam.js — "Đề thi thử": random mixed questions, timed, scored, with review.
// Reuses the QUIZ bank. No-op if there is no #exam-root on the page.
import { esc, qs } from '../lib/dom.js';
import { QUIZ } from '../data/quiz.js';
import {
  loadHistory,
  addHistory,
  clearHistory,
  exportHistory,
  importHistory,
} from '../data/exam-history.js';

const PER_Q_SECONDS = 75; // ~1.25 phút/câu (gần tỉ lệ thật 230 phút / 180 câu)
const PASS = 0.7; // ngưỡng luyện tập (không phải điểm chính thức của PMI)
const KEYS = ['A', 'B', 'C', 'D', 'E', 'F'];

let root = null;
let state = null;
let timerId = null;

export function initExam() {
  root = document.getElementById('exam-root');
  if (!root) return;
  renderSetup();
}

const cats = () => [...new Set(QUIZ.map((q) => q.cat))].sort((a, b) => a.localeCompare(b, 'vi'));

function shuffle(arr) {
  const a = arr.slice();
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function fmt(sec) {
  const m = Math.floor(sec / 60);
  const s = sec % 60;
  return `${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`;
}

/* ---------- setup ---------- */
function renderSetup() {
  if (timerId) clearInterval(timerId);
  const total = QUIZ.length;
  const catOpts = cats()
    .map((c) => `<option value="${esc(c)}">${esc(c)}</option>`)
    .join('');
  root.innerHTML = `
    <div class="exam__setup">
      <h3 class="exam__setup-title">Tạo đề thi thử</h3>
      <p class="exam__setup-desc">Hệ thống chọn ngẫu nhiên &amp; trộn câu hỏi + đáp án, tính giờ (~1,25 phút/câu) rồi chấm điểm. Ngân hàng hiện có <b>${total}</b> câu.</p>
      <div class="exam__fields">
        <label class="exam__field"><span>Số câu</span>
          <select id="examCount">
            <option value="30">30 câu (~38 phút)</option>
            <option value="50" selected>50 câu (~63 phút)</option>
            <option value="90">90 câu (~113 phút)</option>
            <option value="0">Tất cả ${total} câu</option>
          </select>
        </label>
        <label class="exam__field"><span>Chủ đề</span>
          <select id="examCat"><option value="">Tất cả chủ đề (trộn)</option>${catOpts}</select>
        </label>
      </div>
      <button class="btn btn--primary" id="examStart">Bắt đầu làm bài →</button>
      <div class="exam__io">
        <button class="btn exam__io-btn" id="examExport" type="button">⬇ Xuất JSON</button>
        <button class="btn exam__io-btn" id="examImportBtn" type="button">⬆ Nhập JSON</button>
        <input type="file" id="examImport" accept="application/json,.json" hidden />
      </div>
    </div>
    ${renderHistory()}`;
  qs('#examStart', root).addEventListener('click', () => {
    const count = parseInt(qs('#examCount', root).value, 10);
    const cat = qs('#examCat', root).value;
    startExam(count, cat);
  });
  const clr = qs('#examClear', root);
  if (clr)
    clr.addEventListener('click', () => {
      if (confirm('Xóa toàn bộ lịch sử điểm đề thi thử?')) {
        clearHistory();
        renderSetup();
      }
    });

  qs('#examExport', root).addEventListener('click', () => {
    if (!loadHistory().length) {
      alert('Chưa có lịch sử để xuất.');
      return;
    }
    const blob = new Blob([exportHistory()], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'pmp-exam-history.json';
    a.click();
    URL.revokeObjectURL(url);
  });

  const impInput = qs('#examImport', root);
  qs('#examImportBtn', root).addEventListener('click', () => impInput.click());
  impInput.addEventListener('change', () => {
    const file = impInput.files && impInput.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => {
      const res = importHistory(String(reader.result));
      if (res.ok) {
        alert(`Đã nhập ${res.count} bản ghi (tổng cộng ${res.total} lần lưu).`);
        renderSetup();
      } else {
        alert('Nhập thất bại: ' + res.error);
      }
    };
    reader.readAsText(file);
  });
}

function renderHistory() {
  const h = loadHistory();
  if (!h.length) return '';
  const pcts = h.map((r) => r.pct);
  const best = Math.max(...pcts);
  const avg = Math.round(pcts.reduce((a, b) => a + b, 0) / pcts.length);
  const last = h[0].pct;
  const trend = h
    .slice(0, 14)
    .reverse()
    .map(
      (r) =>
        `<span class="exam__bar ${r.passed ? 'is-pass' : 'is-fail'}" style="height:${Math.max(6, r.pct)}%" title="${r.pct}% · ${esc(r.cat)}"></span>`
    )
    .join('');
  const rows = h
    .map((r) => {
      const d = new Date(r.ts);
      const ds = `${d.getDate()}/${d.getMonth() + 1} ${String(d.getHours()).padStart(2, '0')}:${String(d.getMinutes()).padStart(2, '0')}`;
      return `<tr><td>${ds}</td><td>${esc(r.cat)}</td><td>${r.correct}/${r.total}</td><td><b class="${r.passed ? 'exam__pct--pass' : 'exam__pct--fail'}">${r.pct}%</b></td><td>${fmt(r.time)}</td></tr>`;
    })
    .join('');
  return `
    <div class="exam__history">
      <div class="exam__history-head">
        <h3>Lịch sử &amp; tiến bộ</h3>
        <button class="btn exam__clear" id="examClear" type="button">Xóa lịch sử</button>
      </div>
      <div class="exam__stats">
        <div class="exam__stat"><b>${h.length}</b><span>lần làm</span></div>
        <div class="exam__stat"><b>${best}%</b><span>cao nhất</span></div>
        <div class="exam__stat"><b>${avg}%</b><span>trung bình</span></div>
        <div class="exam__stat"><b>${last}%</b><span>gần nhất</span></div>
      </div>
      <div class="exam__trend" title="Điểm các lần gần đây (cũ → mới)">${trend}</div>
      <div class="tbl-wrap"><table class="tbl">
        <thead><tr><th>Thời điểm</th><th>Chủ đề</th><th>Đúng</th><th>Điểm</th><th>Thời gian</th></tr></thead>
        <tbody>${rows}</tbody>
      </table></div>
    </div>`;
}

/* ---------- run ---------- */
function startExam(count, cat) {
  const pool = cat ? QUIZ.filter((q) => q.cat === cat) : QUIZ;
  const n = count === 0 ? pool.length : Math.min(count, pool.length);
  const picked = shuffle(pool).slice(0, n);
  const questions = picked.map((q) => {
    const opts = shuffle(q.opts.map((t, i) => ({ t, ok: i === q.correct })));
    return {
      cat: q.cat,
      q: q.q,
      expl: q.expl,
      opts: opts.map((o) => o.t),
      correct: opts.findIndex((o) => o.ok),
    };
  });
  state = {
    questions,
    answers: new Array(n).fill(null),
    remaining: n * PER_Q_SECONDS,
    submitted: false,
    cat: cat || 'Tất cả',
  };
  renderRunning();
  timerId = setInterval(tick, 1000);
}

function tick() {
  if (!state || state.submitted) return;
  state.remaining -= 1;
  const t = qs('#examTimer', root);
  if (t) {
    t.textContent = fmt(Math.max(0, state.remaining));
    t.classList.toggle('exam__timer--warn', state.remaining <= 300);
  }
  if (state.remaining <= 0) submitExam();
}

function answeredCount() {
  return state.answers.filter((a) => a !== null).length;
}

function renderRunning() {
  const qs_ = state.questions
    .map(
      (item, qi) => `
      <div class="exam__q" id="exq-${qi}">
        <div class="exam__qhead"><span class="exam__qnum">Câu ${qi + 1}</span><span class="exam__qcat">${esc(item.cat)}</span></div>
        <div class="exam__qtext">${esc(item.q)}</div>
        <div class="exam__opts">
          ${item.opts
            .map(
              (o, oi) =>
                `<div class="exam__opt" data-qi="${qi}" data-oi="${oi}"><span class="exam__key">${KEYS[oi]}</span>${esc(o)}</div>`
            )
            .join('')}
        </div>
      </div>`
    )
    .join('');
  root.innerHTML = `
    <div class="exam__bar">
      <span class="exam__timer" id="examTimer">${fmt(state.remaining)}</span>
      <span class="exam__progress"><b id="examAnswered">0</b> / ${state.questions.length} đã trả lời</span>
      <button class="btn btn--primary" id="examSubmit">Nộp bài</button>
    </div>
    <div class="exam__list" id="examList">${qs_}</div>
    <div class="exam__foot"><button class="btn btn--primary" id="examSubmit2">Nộp bài &amp; xem kết quả</button></div>`;

  const list = qs('#examList', root);
  list.addEventListener('click', (e) => {
    const opt = e.target.closest('.exam__opt');
    if (!opt || state.submitted) return;
    const qi = +opt.dataset.qi;
    const oi = +opt.dataset.oi;
    state.answers[qi] = oi;
    qsAll(`.exam__opt[data-qi="${qi}"]`).forEach((n) => n.classList.remove('is-selected'));
    opt.classList.add('is-selected');
    qs('#examAnswered', root).textContent = answeredCount();
  });
  qs('#examSubmit', root).addEventListener('click', confirmSubmit);
  qs('#examSubmit2', root).addEventListener('click', confirmSubmit);
  window.scrollTo({ top: 0 });
}

function qsAll(sel) {
  return Array.from(root.querySelectorAll(sel));
}

function confirmSubmit() {
  const left = state.questions.length - answeredCount();
  if (left > 0 && !confirm(`Còn ${left} câu chưa trả lời. Nộp bài luôn?`)) return;
  submitExam();
}

/* ---------- results ---------- */
function submitExam() {
  if (state.submitted) return;
  state.submitted = true;
  if (timerId) clearInterval(timerId);
  const total = state.questions.length;
  let correct = 0;
  state.questions.forEach((item, qi) => {
    if (state.answers[qi] === item.correct) correct++;
  });
  const pct = Math.round((correct / total) * 100);
  const passed = correct / total >= PASS;
  const timeUsed = total * PER_Q_SECONDS - Math.max(0, state.remaining);
  addHistory({ ts: Date.now(), cat: state.cat, correct, total, pct, time: timeUsed, passed });

  const review = state.questions
    .map((item, qi) => {
      const chosen = state.answers[qi];
      const optsHtml = item.opts
        .map((o, oi) => {
          let cls = 'exam__opt exam__opt--review';
          if (oi === item.correct) cls += ' is-correct';
          else if (oi === chosen) cls += ' is-wrong';
          const tag =
            oi === item.correct
              ? ' <span class="exam__tag exam__tag--ok">Đáp án đúng</span>'
              : oi === chosen
                ? ' <span class="exam__tag exam__tag--bad">Bạn chọn</span>'
                : '';
          return `<div class="${cls}"><span class="exam__key">${KEYS[oi]}</span>${esc(o)}${tag}</div>`;
        })
        .join('');
      const mark = chosen === item.correct ? '✓' : chosen === null ? '—' : '✗';
      const markCls = chosen === item.correct ? 'is-correct' : 'is-wrong';
      return `
      <div class="exam__q">
        <div class="exam__qhead"><span class="exam__qnum">Câu ${qi + 1} <span class="exam__mark ${markCls}">${mark}</span></span><span class="exam__qcat">${esc(item.cat)}</span></div>
        <div class="exam__qtext">${esc(item.q)}</div>
        <div class="exam__opts">${optsHtml}</div>
        <div class="exam__expl"><span class="exam__expl-label">Giải thích</span>${item.expl}</div>
      </div>`;
    })
    .join('');

  root.innerHTML = `
    <div class="exam__result exam__result--${passed ? 'pass' : 'fail'}">
      <div class="exam__score">${pct}%</div>
      <p><b>${correct}/${total}</b> câu đúng · thời gian dùng <b>${fmt(timeUsed)}</b> · ${
        passed
          ? 'Đạt ngưỡng luyện tập (≥70%) 🎉'
          : 'Chưa đạt ngưỡng luyện tập 70% — ôn thêm các câu sai bên dưới.'
      }</p>
      <button class="btn btn--primary" id="examAgain">Làm đề mới</button>
    </div>
    <div class="exam__reviewhead">Xem lại &amp; giải thích</div>
    <div class="exam__list">${review}</div>
    <div class="exam__foot"><button class="btn btn--primary" id="examAgain2">Làm đề mới</button></div>`;
  qs('#examAgain', root).addEventListener('click', renderSetup);
  qs('#examAgain2', root).addEventListener('click', renderSetup);
  window.scrollTo({ top: 0 });
}
