// components/rita-order-game.js — game KÉO-THẢ: phân loại 91 bước vào đúng Process Group
// và đúng THỨ TỰ trong nhóm (theo Rita's Process Chart). Feature-detect #ritaGame → no-op.
// Kéo-thả bằng Pointer Events (chạy cả chuột & cảm ứng); kéo từ tay cầm ⋮⋮.
import { esc, qs, qsa } from '../lib/dom.js';
import { RITA_ORDER } from '../data/rita-order.js';

const GROUPS = ['init', 'plan', 'exec', 'mc', 'close'];

export function initRitaOrderGame() {
  const root = qs('#ritaGame');
  if (!root) return;

  const poolEl = qs('#dzPool', root);
  const bannerEl = qs('#ogBanner', root);
  const scoreEl = qs('#ogScore', root);
  const poolCountEl = qs('#ogPoolCount', root);
  const shuffleBtn = qs('#ogShuffle', root);
  const checkBtn = qs('#ogCheck', root);
  const viewBtn = qs('#ogView', root);
  const listOf = (key) => qs(`.dz-list[data-droplist="${key}"]`, root);

  // state: mỗi "ô chứa" (pool + 5 nhóm) là mảng id "group:index" theo thứ tự hiển thị
  let place = emptyPlace();
  let viewing = false;
  let saved = null;
  let drag = null; // { id, ghost, offX, offY }

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
  }

  function updateCounts() {
    poolCountEl.textContent = `${place.pool.length} thẻ`;
    GROUPS.forEach((g) => {
      const c = qs(`.dz-zone__count[data-count="${g}"]`, root);
      if (c) c.textContent = `${place[g].length} thẻ`;
    });
  }

  function clearBanner() {
    bannerEl.className = 'order-game__banner';
    bannerEl.textContent = '';
    scoreEl.textContent = '';
    qsa('.dz-card', root).forEach((c) => c.classList.remove('is-correct', 'is-wrong'));
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

  function targetListAt(x, y) {
    drag.ghost.style.display = 'none';
    const under = document.elementFromPoint(x, y);
    drag.ghost.style.display = '';
    return under && under.closest('[data-droplist]');
  }

  function clearHighlight() {
    qsa('.is-dragover', root).forEach((n) => n.classList.remove('is-dragover'));
  }

  function moveDrag(ev) {
    drag.ghost.style.left = ev.clientX - drag.offX + 'px';
    drag.ghost.style.top = ev.clientY - drag.offY + 'px';
    clearHighlight();
    const list = targetListAt(ev.clientX, ev.clientY);
    if (list) list.classList.add('is-dragover');
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
    const list = targetListAt(ev.clientX, ev.clientY);
    drag.ghost.remove();
    clearHighlight();
    qsa('.dz-card.is-dragging', root).forEach((c) => c.classList.remove('is-dragging'));
    if (list) {
      const key = list.dataset.droplist;
      const index = computeIndex(list, ev.clientY, drag.id);
      removeId(drag.id);
      place[key].splice(index, 0, drag.id);
      clearBanner();
      render();
    }
    document.body.classList.remove('dz-dragging');
    drag = null;
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
    scoreEl.textContent = `${correct} / ${TOTAL} đúng`;
    const perfect = correct === TOTAL;
    const left = place.pool.length;
    bannerEl.className = 'order-game__banner is-show ' + (perfect ? 'is-ok' : 'is-bad');
    bannerEl.textContent = perfect
      ? '✅ Hoàn hảo! Mọi bước đúng nhóm và đúng thứ tự.'
      : `❌ Chưa đúng — ${correct}/${TOTAL} đúng vị trí` +
        (left ? `, còn ${left} thẻ chưa xếp.` : ' (các thẻ sai tô đỏ).');
  }

  function setViewBtn(on) {
    viewBtn.textContent = on ? '↩ Về bài của tôi' : '👁 Xem đáp án';
    viewBtn.classList.toggle('is-active-view', on);
    shuffleBtn.disabled = on;
    checkBtn.disabled = on;
  }

  function toggleView() {
    if (!viewing) {
      saved = { pool: place.pool.slice() };
      GROUPS.forEach((g) => (saved[g] = place[g].slice()));
      viewing = true;
      setViewBtn(true);
      place = emptyPlace();
      GROUPS.forEach((g) => (place[g] = RITA_ORDER[g].items.map((_, i) => `${g}:${i}`)));
      render();
      bannerEl.className = 'order-game__banner is-show is-info';
      bannerEl.textContent = '📖 Đang xem thứ tự đúng theo Rita (chỉ đọc).';
      scoreEl.textContent = '';
    } else {
      viewing = false;
      place = saved;
      setViewBtn(false);
      render();
      clearBanner();
    }
  }

  shuffleBtn.addEventListener('click', reset);
  checkBtn.addEventListener('click', checkOrder);
  viewBtn.addEventListener('click', toggleView);

  reset();
}
