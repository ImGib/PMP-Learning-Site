// i18n/ui.ts — từ điển chuỗi UI/chrome dùng chung (song ngữ). Component gọi theo key.
// Chuỗi nội dung DÀI của từng trang KHÔNG để ở đây — chúng nằm ở content-html/<trang>.{vi,en}.html.
type Dict = Record<string, string>;

export const UI: { vi: Dict; en: Dict } = {
  vi: {
    topicBack: '← Phần II · Mục lục',
    topics: '8 chủ đề kiến thức',
    related: 'Liên quan',
    relFormulas: 'Công thức & ví dụ',
    relFlashquiz: 'Flashcard & Quiz',
    partII: 'Phần II',
    source: ' · Nguồn: PMBOK® Guide 8th Ed. (2025) + slide PMP.',
    nextAgile: 'Phần III — Agile →',
  },
  en: {
    topicBack: '← Part II · Contents',
    topics: '8 knowledge topics',
    related: 'Related',
    relFormulas: 'Formulas & Examples',
    relFlashquiz: 'Flashcards & Quiz',
    partII: 'Part II',
    source: ' · Source: PMBOK® Guide 8th Ed. (2025) + PMP slides.',
    nextAgile: 'Part III — Agile →',
  },
};

export const t = (lang: 'vi' | 'en', key: string): string => UI[lang][key] ?? key;
