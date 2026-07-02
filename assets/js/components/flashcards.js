// components/flashcards.js — flip-card deck + in-browser add/delete/export
import { esc, qs, qsa } from '../lib/dom.js';
import { FLASHCARDS } from '../data/flashcards.js';
import { MY_FLASHCARDS } from '../data/my-cards.js';
import { loadMine, addMine, removeMine, clearMine, exportMine } from '../data/user-cards.js';

export function initFlashcards() {
  const grid = qs('#fcGrid');
  if (!grid) return;

  const fileCards = FLASHCARDS.concat(MY_FLASHCARDS || []);
  let data = [];

  const build = () => {
    const mine = loadMine().map((c) => ({ ...c, _mine: true }));
    data = fileCards.concat(mine);
    return data;
  };

  const render = (list) => {
    grid.innerHTML = '';
    list.forEach((c) => {
      const card = document.createElement('div');
      card.className = 'flashcard';
      card.innerHTML = `
        <div class="flashcard__inner">
          <div class="flashcard__face flashcard__front">
            ${c._mine ? `<button class="flashcard__del" title="Xóa thẻ bạn đã thêm" data-id="${c.id}">&times;</button>` : ''}
            <span class="flashcard__cat">${esc(c.cat || 'Khác')}${c._mine ? ' · của bạn' : ''}</span>
            <div class="flashcard__term">${esc(c.term)}</div>
            <div class="flashcard__hint">Bấm để lật ↩</div>
          </div>
          <div class="flashcard__face flashcard__back">
            <p class="flashcard__en"><b>EN:</b> ${esc(c.en)}</p>
            <p class="flashcard__vn">${esc(c.vn || '')}</p>
          </div>
        </div>`;
      card.addEventListener('click', () => card.classList.toggle('flashcard--flipped'));
      const del = card.querySelector('.flashcard__del');
      if (del) del.addEventListener('click', (ev) => { ev.stopPropagation(); removeMine(del.dataset.id); refresh(); });
      grid.appendChild(card);
    });
  };

  const counts = () => {
    const c = qs('#fcCount'); if (c) c.textContent = data.length;
    const m = qs('#fcMineCount'); if (m) m.textContent = loadMine().length;
  };

  const refresh = () => { build(); render(data); counts(); };
  refresh();

  const sh = qs('#fcShuffle');
  if (sh) sh.addEventListener('click', () => {
    const n = data.length; if (!n) return;
    const k = (parseInt(sh.dataset.k || '0', 10) + 5) % n; sh.dataset.k = k;
    data = data.slice(k).concat(data.slice(0, k)); render(data);
  });

  const flip = qs('#fcFlip');
  if (flip) flip.addEventListener('click', () => {
    const open = flip.dataset.open === '1';
    qsa('.flashcard').forEach((f) => f.classList.toggle('flashcard--flipped', !open));
    flip.dataset.open = open ? '0' : '1';
    flip.textContent = open ? 'Lật tất cả' : 'Úp tất cả lại';
  });

  const toggle = qs('#fcAddToggle'), panel = qs('#fcForm');
  if (toggle && panel) toggle.addEventListener('click', () => {
    const open = panel.style.display === 'block';
    panel.style.display = open ? 'none' : 'block';
    toggle.textContent = open ? '➕ Thêm thẻ mới' : '✕ Đóng';
  });

  const add = qs('#fcAdd');
  if (add) add.addEventListener('click', () => {
    const term = (qs('#fcInTerm').value || '').trim();
    const en = (qs('#fcInEn').value || '').trim();
    const vn = (qs('#fcInVn').value || '').trim();
    const cat = (qs('#fcInCat').value || '').trim() || 'Khác';
    const msg = qs('#fcMsg');
    if (!term || !en) {
      if (msg) { msg.textContent = 'Cần ít nhất "Mặt trước" và "Định nghĩa EN".'; msg.style.color = 'var(--bad)'; }
      return;
    }
    addMine({ cat, term, en, vn }); refresh();
    qs('#fcInTerm').value = ''; qs('#fcInEn').value = ''; qs('#fcInVn').value = '';
    if (msg) { msg.textContent = '✓ Đã thêm! Thẻ được lưu trong trình duyệt này.'; msg.style.color = 'var(--ok)'; }
  });

  const exp = qs('#fcExport'), expOut = qs('#fcExportOut');
  if (exp && expOut) exp.addEventListener('click', () => {
    const text = exportMine();
    expOut.style.display = 'block';
    expOut.value = text || '// Bạn chưa thêm thẻ nào.';
    if (text) { expOut.focus(); expOut.select(); }
  });

  const clr = qs('#fcClear');
  if (clr) clr.addEventListener('click', () => {
    if (!loadMine().length) return;
    if (window.confirm('Xóa tất cả thẻ bạn đã thêm trong trình duyệt này?')) {
      clearMine(); refresh();
      if (expOut) { expOut.style.display = 'none'; expOut.value = ''; }
    }
  });
}
