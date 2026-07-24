// components/rita-order-game.js — game xếp thứ tự Rita's Process Chart.
// Feature-detect #ritaGame → tự no-op nếu trang không có. Dùng class BEM + token chung.
import { esc, qs, qsa } from '../lib/dom.js';
import { RITA_ORDER } from '../data/rita-order.js';

// Màu nhóm hiện tại → gán vào biến scoped --og-accent (KHÔNG đụng --accent toàn cục).
const GROUP_ACCENT = {
  init: 'var(--flag)',
  plan: 'var(--accent)',
  exec: 'var(--gate)',
  mc: 'var(--tip)',
  close: 'var(--sub)',
};

export function initRitaOrderGame() {
  const root = qs('#ritaGame');
  if (!root) return;

  const listEl = qs('#ogList', root);
  const bannerEl = qs('#ogBanner', root);
  const scoreEl = qs('#ogScore', root);
  const noteEl = qs('#ogNote', root);
  const tabsEl = qs('#ogTabs', root);
  const shuffleBtn = qs('#ogShuffle', root);
  const checkBtn = qs('#ogCheck', root);
  const viewBtn = qs('#ogView', root);

  let currentGroup = 'init';
  let order = []; // mảng id, index = vị trí hiển thị
  let viewingAnswer = false;
  let savedOrder = null;

  const shuffle = (arr) => {
    const a = arr.slice();
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  };

  function clearBanner() {
    bannerEl.className = 'order-game__banner';
    bannerEl.textContent = '';
    scoreEl.textContent = '';
    qsa('.order-game__card', listEl).forEach((c) => c.classList.remove('is-correct', 'is-wrong'));
  }

  function render() {
    const cfg = RITA_ORDER[currentGroup];
    const locked = viewingAnswer;
    listEl.innerHTML = '';
    order.forEach((id, i) => {
      const card = document.createElement('div');
      card.className = 'order-game__card' + (locked ? ' is-locked' : '');
      card.dataset.id = id;
      if (locked) {
        card.innerHTML = `<span class="order-game__poslabel">${i + 1}</span>
          <span class="order-game__txt">${esc(cfg.items[id])}</span>`;
      } else {
        card.innerHTML = `
          <input type="number" class="order-game__pos" min="1" max="${order.length}" value="${i + 1}" inputmode="numeric" aria-label="Vị trí">
          <span class="order-game__steps">
            <button class="ogUp" title="Lên" ${i === 0 ? 'disabled' : ''}>▲</button>
            <button class="ogDown" title="Xuống" ${i === order.length - 1 ? 'disabled' : ''}>▼</button>
          </span>
          <span class="order-game__txt">${esc(cfg.items[id])}</span>`;
      }
      listEl.appendChild(card);
    });
    if (!locked) attachHandlers();
  }

  function move(id, delta) {
    const idx = order.indexOf(id);
    const to = idx + delta;
    if (to < 0 || to >= order.length) return;
    [order[to], order[idx]] = [order[idx], order[to]];
    clearBanner();
    render();
  }

  function onPosChange(e) {
    const card = e.target.closest('.order-game__card');
    const id = Number(card.dataset.id);
    const n = order.length;
    let newPos = parseInt(e.target.value, 10);
    if (isNaN(newPos)) {
      render();
      return;
    }
    newPos = Math.min(Math.max(newPos, 1), n);
    const oldIndex = order.indexOf(id);
    order.splice(oldIndex, 1);
    order.splice(newPos - 1, 0, id);
    clearBanner();
    render();
    const movedCard = listEl.children[newPos - 1];
    if (movedCard) movedCard.querySelector('.order-game__pos')?.focus();
  }

  function attachHandlers() {
    qsa('.order-game__pos', listEl).forEach((inp) => {
      inp.addEventListener('focus', (e) => e.target.select());
      inp.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
          e.preventDefault();
          e.target.blur();
        }
      });
      inp.addEventListener('change', onPosChange);
    });
    qsa('.ogUp', listEl).forEach((b) =>
      b.addEventListener('click', (e) => move(Number(e.target.closest('.order-game__card').dataset.id), -1))
    );
    qsa('.ogDown', listEl).forEach((b) =>
      b.addEventListener('click', (e) => move(Number(e.target.closest('.order-game__card').dataset.id), 1))
    );
  }

  function newRound() {
    viewingAnswer = false;
    savedOrder = null;
    viewBtn.textContent = '👁 Xem đáp án';
    viewBtn.classList.remove('is-active-view');
    shuffleBtn.disabled = false;
    checkBtn.disabled = false;
    order = shuffle(RITA_ORDER[currentGroup].items.map((_, i) => i));
    render();
    clearBanner();
  }

  function setGroup(g) {
    currentGroup = g;
    const cfg = RITA_ORDER[g];
    qsa('.order-game__tab', tabsEl).forEach((t) => t.classList.toggle('is-active', t.dataset.g === g));
    root.style.setProperty('--og-accent', GROUP_ACCENT[g]);
    noteEl.textContent = cfg.note;
    newRound();
  }

  function checkOrder() {
    if (viewingAnswer) return;
    const cards = [...listEl.children];
    let correct = 0;
    cards.forEach((card, i) => {
      const id = Number(card.dataset.id);
      card.classList.remove('is-correct', 'is-wrong');
      if (id === i) {
        card.classList.add('is-correct');
        correct++;
      } else {
        card.classList.add('is-wrong');
      }
    });
    const total = cards.length;
    scoreEl.textContent = `${correct} / ${total} đúng`;
    const perfect = correct === total;
    bannerEl.className = 'order-game__banner is-show ' + (perfect ? 'is-ok' : 'is-bad');
    bannerEl.textContent = perfect
      ? '✅ Hoàn hảo! Thứ tự đã chính xác.'
      : `❌ Chưa đúng — còn ${total - correct} bước sai vị trí (tô đỏ).`;
  }

  function toggleView() {
    const cfg = RITA_ORDER[currentGroup];
    if (!viewingAnswer) {
      savedOrder = order.slice();
      viewingAnswer = true;
      order = cfg.items.map((_, i) => i);
      viewBtn.textContent = '↩ Về bài của tôi';
      viewBtn.classList.add('is-active-view');
      shuffleBtn.disabled = true;
      checkBtn.disabled = true;
      render();
      bannerEl.className = 'order-game__banner is-show is-info';
      bannerEl.textContent = '📖 Đang xem thứ tự đúng (chỉ đọc).';
      scoreEl.textContent = '';
    } else {
      viewingAnswer = false;
      order = savedOrder;
      viewBtn.textContent = '👁 Xem đáp án';
      viewBtn.classList.remove('is-active-view');
      shuffleBtn.disabled = false;
      checkBtn.disabled = false;
      render();
      clearBanner();
    }
  }

  shuffleBtn.addEventListener('click', newRound);
  checkBtn.addEventListener('click', checkOrder);
  viewBtn.addEventListener('click', toggleView);
  tabsEl.addEventListener('click', (e) => {
    const btn = e.target.closest('.order-game__tab');
    if (btn) setGroup(btn.dataset.g);
  });

  setGroup('init');
}
