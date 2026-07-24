// i18n/strings.ts — TỪ ĐIỂN song ngữ DUY NHẤT (như react-i18next). key → text (cho phép HTML).
// Chuỗi UI ngắn viết thẳng; nội dung DÀI của trang nạp từ content-html/<trang>.<lang>.html.
// Từ điển này vừa dùng render mặc định lúc build (T.astro), vừa xuất ra client (endpoint
// i18n-strings.js) để site.js "apply" khi đổi ngôn ngữ.
import scopeVi from '../content-html/scope.vi.html?raw';
import scopeEn from '../content-html/scope.en.html?raw';

export type Lang = 'vi' | 'en';
export const DEFAULT_LANG: Lang = 'vi';

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
    // nội dung trang (nạp từ file .vi.html)
    'scope.body': scopeVi,
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
    'scope.body': scopeEn,
  },
};

export const t = (lang: Lang, key: string): string =>
  STRINGS[lang][key] ?? STRINGS[DEFAULT_LANG][key] ?? key;
