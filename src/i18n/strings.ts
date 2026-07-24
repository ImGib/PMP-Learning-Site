// i18n/strings.ts — TỪ ĐIỂN song ngữ DUY NHẤT (như react-i18next). key → text (cho phép HTML).
// Chuỗi UI ngắn viết thẳng; nội dung DÀI của trang nạp từ content-html/<trang>.<lang>.html.
// Từ điển này vừa dùng render mặc định lúc build (T.astro), vừa xuất ra client (endpoint
// i18n-strings.js) để site.js "apply" khi đổi ngôn ngữ.
import scopeRaw from '../content-html/scope.html?raw';

export type Lang = 'vi' | 'en';
export const DEFAULT_LANG: Lang = 'vi';

// Mỗi trang là MỘT file content-html/<trang>.html chứa cả 2 ngôn ngữ, ngăn bởi mốc
// `<!-- i18n:vi -->` (không bắt buộc) và `<!-- i18n:en -->`. Tách lúc build thành {vi, en}.
function splitBilingual(raw: string): { vi: string; en: string } {
  const parts = raw.split(/<!--\s*i18n:en\s*-->/i);
  const vi = parts[0].replace(/<!--\s*i18n:vi\s*-->/i, '').trim();
  const en = (parts[1] ?? '').trim();
  return { vi, en };
}
const scope = splitBilingual(scopeRaw);

export const STRINGS: Record<Lang, Record<string, string>> = {
  vi: {
    // chrome trang chủ đề
    'topic.back': '← Phần II · Mục lục',
    'topic.topics': '8 chủ đề kiến thức',
    'topic.related': 'Liên quan',
    'rel.formulas': 'Công thức & ví dụ',
    'rel.flashquiz': 'Flashcard & Quiz',
    'topic.partII': 'Phần II',
    'topic.source': ' · Nguồn: PMBOK® Guide 8th Ed. (2025) + slide PMP.',
    'topic.nextAgile': 'Phần III — Agile →',
    // nội dung trang (nạp từ 1 file scope.html, tách theo mốc)
    'scope.body': scope.vi,
  },
  en: {
    'topic.back': '← Part II · Contents',
    'topic.topics': '8 knowledge topics',
    'topic.related': 'Related',
    'rel.formulas': 'Formulas & Examples',
    'rel.flashquiz': 'Flashcards & Quiz',
    'topic.partII': 'Part II',
    'topic.source': ' · Source: PMBOK® Guide 8th Ed. (2025) + PMP slides.',
    'topic.nextAgile': 'Part III — Agile →',
    'scope.body': scope.en,
  },
};

export const t = (lang: Lang, key: string): string =>
  STRINGS[lang][key] ?? STRINGS[DEFAULT_LANG][key] ?? key;
