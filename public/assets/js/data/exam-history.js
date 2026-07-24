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

// Export current history as a pretty JSON string (for download / backup).
export function exportHistory() {
  return JSON.stringify(loadHistory(), null, 2);
}

// Import from a JSON string. Merges with existing by timestamp (no duplicates),
// keeps newest MAX. Returns { ok, count, total } or { ok:false, error }.
export function importHistory(text, { merge = true } = {}) {
  let arr;
  try {
    arr = JSON.parse(text);
  } catch {
    return { ok: false, error: 'Tệp không phải JSON hợp lệ.' };
  }
  if (!Array.isArray(arr)) return { ok: false, error: 'Dữ liệu phải là một mảng bản ghi.' };
  const valid = arr
    .filter(
      (r) =>
        r && typeof r.ts === 'number' && typeof r.pct === 'number' && typeof r.total === 'number'
    )
    .map((r) => ({
      ts: r.ts,
      cat: typeof r.cat === 'string' ? r.cat : '—',
      total: r.total,
      correct: typeof r.correct === 'number' ? r.correct : 0,
      pct: r.pct,
      time: typeof r.time === 'number' ? r.time : 0,
      passed: typeof r.passed === 'boolean' ? r.passed : r.pct >= 70,
    }));
  if (!valid.length) return { ok: false, error: 'Không tìm thấy bản ghi hợp lệ.' };
  const byTs = new Map();
  [...(merge ? loadHistory() : []), ...valid].forEach((r) => byTs.set(r.ts, r));
  const merged = [...byTs.values()].sort((a, b) => b.ts - a.ts).slice(0, MAX);
  try {
    localStorage.setItem(KEY, JSON.stringify(merged));
  } catch {
    return { ok: false, error: 'Không lưu được (localStorage đầy hoặc bị tắt).' };
  }
  return { ok: true, count: valid.length, total: merged.length };
}
