// data/exam-history.js — persist mock-exam results in localStorage to track progress.
const KEY = 'pmp_exam_history_v1';
const MAX = 60;

export function loadHistory() {
  try {
    const v = JSON.parse(localStorage.getItem(KEY));
    return Array.isArray(v) ? v : [];
  } catch {
    return [];
  }
}

// rec: { ts, cat, correct, total, pct, time, passed }. Newest first.
export function addHistory(rec) {
  const h = loadHistory();
  h.unshift(rec);
  const trimmed = h.slice(0, MAX);
  try {
    localStorage.setItem(KEY, JSON.stringify(trimmed));
  } catch {
    /* storage full / disabled — ignore */
  }
  return trimmed;
}

export function clearHistory() {
  try {
    localStorage.removeItem(KEY);
  } catch {
    /* ignore */
  }
}
