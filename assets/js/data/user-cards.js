// data/user-cards.js — persistence of flashcards the user adds in the browser (localStorage)
const LSKEY = 'pmp_flashcards_v1';

export function loadMine() {
  try { return JSON.parse(localStorage.getItem(LSKEY) || '[]'); }
  catch { return []; }
}
export function saveMine(arr) {
  try { localStorage.setItem(LSKEY, JSON.stringify(arr)); } catch { /* quota / disabled */ }
}
export function addMine(card) {
  const arr = loadMine();
  arr.push({ ...card, id: Date.now() });
  saveMine(arr);
  return arr;
}
export function removeMine(id) {
  const arr = loadMine().filter((c) => String(c.id) !== String(id));
  saveMine(arr);
  return arr;
}
export function clearMine() {
  try { localStorage.removeItem(LSKEY); } catch { /* ignore */ }
}
export function exportMine() {
  return loadMine()
    .map((c) => `  {cat:${JSON.stringify(c.cat)}, term:${JSON.stringify(c.term)}, en:${JSON.stringify(c.en)}, vn:${JSON.stringify(c.vn)}},`)
    .join('\n');
}
