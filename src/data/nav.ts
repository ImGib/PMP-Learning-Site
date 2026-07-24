// data/nav.ts — cấu hình navbar (song ngữ VI/EN). label = tiếng Việt, en = tiếng Anh.
export interface NavLeaf {
  href: string;
  label: string;
  en: string;
}
export interface NavGroup {
  label: string;
  en: string;
  children: NavLeaf[];
}
export type NavItem = NavLeaf | NavGroup;

export const NAV: NavItem[] = [
  { href: 'index.html', label: 'Trang chủ', en: 'Home' },
  {
    label: 'Học',
    en: 'Learn',
    children: [
      { href: 'principles-pmbok8.html', label: 'Nguyên lý PMBOK 8', en: 'PMBOK 8 Principles' },
      { href: 'part-1-foundations.html', label: 'I · Nền tảng', en: 'I · Foundations' },
      { href: 'part-2-topics.html', label: 'II · 8 Chủ đề', en: 'II · 8 Topics' },
      { href: 'part-3-agile.html', label: 'III · Agile & Adaptive', en: 'III · Agile & Adaptive' },
    ],
  },
  {
    label: 'Ôn thi',
    en: 'Exam Prep',
    children: [
      { href: 'part-4-exam-prep.html', label: 'IV · Chiến lược & Ethics', en: 'IV · Strategy & Ethics' },
      { href: 'mock-exam.html', label: 'Đề thi thử', en: 'Mock Exam' },
      { href: 'flashcard-quiz.html', label: 'Flashcard & Quiz', en: 'Flashcards & Quiz' },
      { href: 'rita-order-game.html', label: 'Game · Rita Process Chart', en: 'Game · Rita Process Chart' },
    ],
  },
  {
    label: 'Tra cứu',
    en: 'Reference',
    children: [
      { href: 'formulas-and-examples.html', label: 'Công thức & ví dụ', en: 'Formulas & Examples' },
      { href: 'glossary.html', label: 'Thuật ngữ (glossary)', en: 'Glossary' },
      { href: 'rita-process-chart.html', label: '49 Process Chart', en: '49 Process Chart' },
    ],
  },
];

// Các trang chủ đề Phần II nằm ở gốc; mục "II · 8 Chủ đề" vẫn active trên chúng.
export const PART2_TOPICS = new Set([
  'scope.html',
  'schedule.html',
  'finance.html',
  'quality.html',
  'resource.html',
  'risk.html',
  'stakeholder.html',
  'procurement.html',
]);

export const isGroup = (item: NavItem): item is NavGroup => 'children' in item;
