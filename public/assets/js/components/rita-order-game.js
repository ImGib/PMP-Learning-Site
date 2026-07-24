// components/rita-order-game.js — game KÉO-THẢ: phân loại 91 bước vào đúng Process Group
// và đúng THỨ TỰ trong nhóm (theo Rita's Process Chart). Feature-detect #ritaGame → no-op.
// 2 chế độ: 'study' (Học tập — gợi ý sai nhóm ngay + xem đáp án) và 'test' (như thi thật).
// Kéo-thả bằng Pointer Events (chạy cả chuột & cảm ứng); kéo từ tay cầm ⋮⋮.
import { esc, qs, qsa } from '../lib/dom.js';
import { RITA_ORDER } from '../data/rita-order.js';

const GROUPS = ['init', 'plan', 'exec', 'mc', 'close'];
const MODE_HINT = {
  study:
    'Study mode: cards in the WRONG group turn red instantly; View answer is allowed. Hit Check to also grade the order. <span class="vn-gloss">(Học: thẻ sai nhóm đỏ ngay, được xem đáp án.)</span>',
  test: 'Test mode: no hints, no answer key — place everything, then Submit for your score, like the real exam. <span class="vn-gloss">(Test: không gợi ý, nộp bài mới ra điểm.)</span>',
};

export function initRitaOrderGame() {
  const root = qs('#ritaGame');
  if (!root) return;

  const poolEl = qs('#dzPool', root);
  const bannerEl = qs('#ogBanner', root);
  const scoreEl = qs('#ogScore', root);
  const poolCountEl = qs('#ogPoolCount', root);
  const modesEl = qs('#ogModes', root);
  const modeHintEl = qs('#ogModeHint', root);
  const shuffleBtn = qs('#ogShuffle', root);
  const checkBtn = qs('#ogCheck', root);
  const viewBtn = qs('#ogView', root);
  const foldBtn = qs('#ogFold', root);
  const listOf = (key) => qs(`.dz-list[data-droplist="${key}"]`, root);

  // state
  let place = emptyPlace();
  let mode = 'study'; // 'study' | 'test'
  let viewing = false;
  let saved = null;
  let drag = null;

  function emptyPlace() {
    const p = { pool: [] };
    GROUPS.forEach((g) => (p[g] = []));
    return p;
  }
  const allIds = () => GROUPS.flatMap((g) => RITA_ORDER[g].items.map((_, i) => `${g}:${i}`));
  const parse = (id) => {
    const k = id.lastIndexOf(':');
    return { g: id.slice(0, k), i: Number(id.slice(k + 1)) };
  };
  const textOf = (id) => {
    const { g, i } = parse(id);
    return RITA_ORDER[g].items[i];
  };
  const shuffle = (arr) => {
    const a = arr.slice();
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  };
  const TOTAL = allIds().length;

  function makeCard(id, zone, pos) {
    const el = document.createElement('div');
    el.className = 'dz-card';
    el.dataset.id = id;
    const posHtml = zone ? `<span class="dz-card__pos">${pos + 1}</span>` : '';
    el.innerHTML = `<span class="dz-card__grip" aria-hidden="true">⋮⋮</span>${posHtml}<span class="dz-card__txt">${esc(textOf(id))}</span>`;
    if (!viewing) attachDrag(el);
    return el;
  }

  function render() {
    poolEl.innerHTML = '';
    place.pool.forEach((id) => poolEl.appendChild(makeCard(id, null)));
    GROUPS.forEach((g) => {
      const z = listOf(g);
      z.innerHTML = '';
      place[g].forEach((id, pos) => z.appendChild(makeCard(id, g, pos)));
    });
    updateCounts();
    liveHint();
  }

  function updateCounts() {
    poolCountEl.textContent = `${place.pool.length} cards`;
    GROUPS.forEach((g) => {
      const c = qs(`.dz-zone__count[data-count="${g}"]`, root);
      if (c) c.textContent = `${place[g].length} cards`;
    });
  }

  // Học tập: tô đỏ ngay các thẻ đang nằm SAI nhóm (không tiết lộ lỗi thứ tự).
  function liveHint() {
    if (mode !== 'study' || viewing) return;
    GROUPS.forEach((g) => {
      place[g].forEach((id) => {
        if (parse(id).g !== g) {
          const el = qs(`.dz-list[data-droplist="${g}"] .dz-card[data-id="${id}"]`, root);
          if (el) el.classList.add('is-wrong');
        }
      });
    });
  }

  function clearMarks() {
    qsa('.dz-card', root).forEach((c) => c.classList.remove('is-correct', 'is-wrong'));
  }
  function clearBanner() {
    bannerEl.className = 'order-game__banner';
    bannerEl.textContent = '';
    scoreEl.textContent = '';
    clearMarks();
  }

  function removeId(id) {
    for (const key of Object.keys(place)) {
      const idx = place[key].indexOf(id);
      if (idx >= 0) {
        place[key].splice(idx, 1);
        return;
      }
    }
  }

  // ----- Kéo-thả (Pointer Events) -----
  function attachDrag(el) {
    const grip = el.querySelector('.dz-card__grip');
    grip.addEventListener('pointerdown', (e) => {
      if (e.button && e.button !== 0) return;
      e.preventDefault();
      const id = el.dataset.id;
      const sx = e.clientX;
      const sy = e.clientY;
      let started = false;
      const mv = (ev) => {
        if (!started) {
          if (Math.hypot(ev.clientX - sx, ev.clientY - sy) < 5) return;
          started = true;
          beginDrag(id, el, ev);
        }
        moveDrag(ev);
      };
      const up = (ev) => {
        document.removeEventListener('pointermove', mv);
        document.removeEventListener('pointerup', up);
        if (started) endDrag(ev);
      };
      document.addEventListener('pointermove', mv);
      document.addEventListener('pointerup', up);
    });
  }

  function beginDrag(id, el, ev) {
    const r = el.getBoundingClientRect();
    const ghost = el.cloneNode(true);
    ghost.classList.add('dz-ghost');
    ghost.classList.remove('is-dragging');
    ghost.style.width = r.width + 'px';
    ghost.style.left = r.left + 'px';
    ghost.style.top = r.top + 'px';
    document.body.appendChild(ghost);
    el.classList.add('is-dragging');
    document.body.classList.add('dz-dragging');
    drag = { id, ghost, offX: ev.clientX - r.left, offY: ev.clientY - r.top };
  }

  // Tìm ô đích dưới con trỏ. Vùng đã THU GỌN (list ẩn) → nhận drop qua thân vùng.
  function resolveAt(x, y) {
    drag.ghost.style.display = 'none';
    const under = document.elementFromPoint(x, y);
    drag.ghost.style.display = '';
    if (!under) return null;
    const list = under.closest('.dz-list[data-droplist]');
    if (list) return { list };
    const zone = under.closest('.dz-zone.is-collapsed');
    if (zone) return { list: qs('.dz-list', zone), zone };
    return null;
  }

  function clearHighlight() {
    qsa('.is-dragover', root).forEach((n) => n.classList.remove('is-dragover'));
  }

  function moveDrag(ev) {
    drag.ghost.style.left = ev.clientX - drag.offX + 'px';
    drag.ghost.style.top = ev.clientY - drag.offY + 'px';
    clearHighlight();
    const t = resolveAt(ev.clientX, ev.clientY);
    if (t) (t.zone || t.list).classList.add('is-dragover');
  }

  function computeIndex(list, y, dragId) {
    const cards = qsa('.dz-card', list).filter((c) => c.dataset.id !== dragId);
    for (let k = 0; k < cards.length; k++) {
      const r = cards[k].getBoundingClientRect();
      if (y < r.top + r.height / 2) return k;
    }
    return cards.length;
  }

  function endDrag(ev) {
    const t = resolveAt(ev.clientX, ev.clientY);
    drag.ghost.remove();
    clearHighlight();
    qsa('.dz-card.is-dragging', root).forEach((c) => c.classList.remove('is-dragging'));
    if (t) {
      const key = t.list.dataset.droplist;
      const index = computeIndex(t.list, ev.clientY, drag.id); // vùng gọn (ẩn) → nối cuối
      if (t.zone) t.zone.classList.remove('is-collapsed'); // mở vùng khi thả vào
      removeId(drag.id);
      place[key].splice(index, 0, drag.id);
      clearBanner();
      render();
    }
    document.body.classList.remove('dz-dragging');
    drag = null;
  }

  // ----- Chế độ -----
  function setMode(m) {
    if (viewing) toggleView(); // thoát xem đáp án TRƯỚC khi đổi chế độ (guard test)
    mode = m;
    qsa('.order-game__mode', modesEl).forEach((b) => b.classList.toggle('is-active', b.dataset.mode === m));
    viewBtn.hidden = m === 'test';
    checkBtn.textContent = m === 'test' ? '📝 Submit' : '✓ Check';
    modeHintEl.innerHTML = MODE_HINT[m];
    clearBanner();
    liveHint();
  }

  // ----- Nút chức năng -----
  function reset() {
    viewing = false;
    saved = null;
    setViewBtn(false);
    place = emptyPlace();
    place.pool = shuffle(allIds());
    render();
    clearBanner();
  }

  function checkOrder() {
    if (viewing) return;
    clearMarks();
    let correct = 0;
    GROUPS.forEach((g) => {
      place[g].forEach((id, pos) => {
        const { g: cg, i: ci } = parse(id);
        const el = qs(`.dz-list[data-droplist="${g}"] .dz-card[data-id="${id}"]`, root);
        if (!el) return;
        if (cg === g && ci === pos) {
          el.classList.add('is-correct');
          correct++;
        } else {
          el.classList.add('is-wrong');
        }
      });
    });
    scoreEl.textContent = `${correct} / ${TOTAL} correct`;
    const perfect = correct === TOTAL;
    const left = place.pool.length;
    bannerEl.className = 'order-game__banner is-show ' + (perfect ? 'is-ok' : 'is-bad');
    if (perfect) {
      bannerEl.innerHTML =
        '✅ Perfect! Every step is in the right group and order. <span class="vn-gloss">(Hoàn hảo — đúng hết!)</span>';
    } else {
      const head = mode === 'test' ? '📝 Submitted — ' : '❌ Not yet — ';
      bannerEl.textContent =
        head + `${correct}/${TOTAL} correct` + (left ? `, ${left} still in the Bank.` : ' (wrong cards in red).');
    }
  }

  function setViewBtn(on) {
    viewBtn.textContent = on ? '↩ Back to my order' : '👁 View answer';
    viewBtn.classList.toggle('is-active-view', on);
    shuffleBtn.disabled = on;
    checkBtn.disabled = on;
    modesEl.classList.toggle('is-disabled', on);
  }

  function toggleView() {
    if (mode === 'test') return; // test: không xem đáp án
    if (!viewing) {
      saved = { pool: place.pool.slice() };
      GROUPS.forEach((g) => (saved[g] = place[g].slice()));
      viewing = true;
      setViewBtn(true);
      place = emptyPlace();
      GROUPS.forEach((g) => (place[g] = RITA_ORDER[g].items.map((_, i) => `${g}:${i}`)));
      render();
      bannerEl.className = 'order-game__banner is-show is-info';
      bannerEl.innerHTML =
        '📖 Showing the correct Rita order (read-only). <span class="vn-gloss">(Đang xem đáp án.)</span>';
      scoreEl.textContent = '';
    } else {
      viewing = false;
      place = saved;
      setViewBtn(false);
      render();
      clearBanner();
    }
  }

  modesEl.addEventListener('click', (e) => {
    const btn = e.target.closest('.order-game__mode');
    if (btn && !viewing) setMode(btn.dataset.mode);
  });
  // Thu gọn/mở từng vùng (bấm vào header)
  qsa('.dz-zone__head', root).forEach((h) =>
    h.addEventListener('click', () => h.closest('.dz-zone').classList.toggle('is-collapsed'))
  );
  // Thu gọn / mở tất cả
  foldBtn.addEventListener('click', () => {
    const zones = qsa('.dz-zone', root);
    const anyOpen = zones.some((z) => !z.classList.contains('is-collapsed'));
    zones.forEach((z) => z.classList.toggle('is-collapsed', anyOpen));
    foldBtn.textContent = anyOpen ? '🗂 Expand zones' : '🗂 Collapse zones';
  });

  shuffleBtn.addEventListener('click', reset);
  checkBtn.addEventListener('click', checkOrder);
  viewBtn.addEventListener('click', toggleView);

  reset();
  setMode('study');
}
