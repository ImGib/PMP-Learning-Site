// data/nav.ts — cấu hình navbar, PORT NGUYÊN từ src/data/nav.ts (Astro). href là route Next
// (folder-based, có trailing slash vì next.config có trailingSlash:true).
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
  { href: '/', label: 'Trang chủ', en: 'Home' },
  {
    label: 'Học',
    en: 'Learn',
    children: [
      { href: '/principles-pmbok8/', label: 'Nguyên lý PMBOK 8', en: 'PMBOK 8 Principles' },
      { href: '/part-1-foundations/', label: 'I · Nền tảng', en: 'I · Foundations' },
      { href: '/part-2-topics/', label: 'II · 8 Chủ đề', en: 'II · 8 Topics' },
      { href: '/part-3-agile/', label: 'III · Agile & Adaptive', en: 'III · Agile & Adaptive' },
    ],
  },
  {
    label: 'Ôn thi',
    en: 'Exam Prep',
    children: [
      { href: '/part-4-exam-prep/', label: 'IV · Chiến lược & Ethics', en: 'IV · Strategy & Ethics' },
      { href: '/mock-exam/', label: 'Đề thi thử', en: 'Mock Exam' },
      { href: '/flashcard-quiz/', label: 'Flashcard & Quiz', en: 'Flashcards & Quiz' },
      { href: '/rita-order-game/', label: 'Game · Rita Process Chart', en: 'Game · Rita Process Chart' },
    ],
  },
  {
    label: 'Tra cứu',
    en: 'Reference',
    children: [
      { href: '/formulas-and-examples/', label: 'Công thức & ví dụ', en: 'Formulas & Examples' },
      { href: '/glossary/', label: 'Thuật ngữ (glossary)', en: 'Glossary' },
      { href: '/rita-process-chart/', label: '49 Process Chart', en: '49 Process Chart' },
    ],
  },
];

export const PART2_TOPICS = new Set([
  '/scope/',
  '/schedule/',
  '/finance/',
  '/quality/',
  '/resource/',
  '/risk/',
  '/stakeholder/',
  '/procurement/',
]);

export const isGroup = (item: NavItem): item is NavGroup => 'children' in item;
