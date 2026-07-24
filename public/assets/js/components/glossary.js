// components/glossary.js — live search filter for the bilingual glossary
import { qs, qsa } from '../lib/dom.js';

export function initGlossary() {
  const input = qs('#glossSearch');
  if (!input) return;

  const hint = qs('#glossHint');
  const noRes = qs('#noResult');
  const items = qsa('.glossary__item');
  const sections = qsa('section');

  if (hint) hint.textContent = `${items.length} thuật ngữ. Rê chuột / bấm để đọc.`;

  input.addEventListener('input', () => {
    const q = input.value.trim().toLowerCase();
    let shown = 0;
    items.forEach((g) => {
      const hit = q === '' || g.textContent.toLowerCase().indexOf(q) >= 0;
      g.style.display = hit ? '' : 'none';
      if (hit) shown++;
    });
    sections.forEach((s) => {
      const cells = qsa('.glossary__item', s);
      if (!cells.length) return;
      const any = cells.some((g) => g.style.display !== 'none');
      s.style.display = any ? '' : 'none';
    });
    if (noRes) noRes.style.display = shown === 0 ? 'block' : 'none';
    if (hint) hint.textContent = `${shown} / ${items.length} thuật ngữ khớp.`;
  });
}
