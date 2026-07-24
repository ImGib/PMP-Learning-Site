// data/nav.ts — cấu hình navbar (đưa từ components/navbar.js sang, thêm KIỂU).
export interface NavLeaf {
  href: string;
  label: string;
}
export interface NavGroup {
  label: string;
  children: NavLeaf[];
}
export type NavItem = NavLeaf | NavGroup;

export const NAV: NavItem[] = [
  { href: 'index.html', label: 'Trang chủ' },
  {
    label: 'Học',
    children: [
      { href: 'principles-pmbok8.html', label: 'Nguyên lý PMBOK 8' },
      { href: 'part-1-foundations.html', label: 'I · Nền tảng' },
      { href: 'part-2-topics.html', label: 'II · 8 Chủ đề' },
      { href: 'part-3-agile.html', label: 'III · Agile & Adaptive' },
    ],
  },
  {
    label: 'Ôn thi',
    children: [
      { href: 'part-4-exam-prep.html', label: 'IV · Chiến lược & Ethics' },
      { href: 'mock-exam.html', label: 'Đề thi thử' },
      { href: 'flashcard-quiz.html', label: 'Flashcard & Quiz' },
      { href: 'pmp-order-game.html', label: 'Game · Xếp Process Groups' },
    ],
  },
  {
    label: 'Tra cứu',
    children: [
      { href: 'formulas-and-examples.html', label: 'Công thức & ví dụ' },
      { href: 'glossary.html', label: 'Thuật ngữ (glossary)' },
      { href: 'rita-process-chart.html', label: '49 Process Chart' },
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
