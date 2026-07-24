// data/site.ts — cấu hình dùng chung (data-driven chrome), nay có KIỂU (TypeScript).
// Sửa ở ĐÂY là mọi trang chủ đề Phần II tự cập nhật (sidebar, hero, footer).
export interface Topic {
  id: string;
  num: string;
  short: string;
  title: string;
  blurb: string;
}

export const TOPICS: Topic[] = [
  {
    id: 'scope',
    num: '01',
    short: 'Scope',
    title: 'Scope — Phạm vi',
    blurb: '"Dự án làm gì & KHÔNG làm gì" — Requirement, WBS, Scope Baseline, kiểm soát thay đổi.',
  },
  {
    id: 'schedule',
    num: '02',
    short: 'Schedule',
    title: 'Schedule — Tiến độ',
    blurb: 'Critical Path (ES/EF/LS/LF/Float), ước lượng PERT, nén lịch (crash/fast-track).',
  },
  {
    id: 'finance',
    num: '03',
    short: 'Finance',
    title: 'Finance — Chi phí & EVM',
    blurb: 'EVM (SV/CV/CPI/SPI/EAC), reserves, Cost Baseline / Project Budget / Funding.',
  },
  {
    id: 'quality',
    num: '04',
    short: 'Quality',
    title: 'Quality — Chất lượng',
    blurb: 'QA vs QC, Cost of Quality, 7 công cụ, quy trình cải tiến (PDCA/DMAIC).',
  },
  {
    id: 'resource',
    num: '05',
    short: 'Resource',
    title: 'Resource — Nguồn lực & Con người',
    blurb: 'Tuckman, tạo động lực, xung đột, Situational Leadership, RACI.',
  },
  {
    id: 'risk',
    num: '06',
    short: 'Risk',
    title: 'Risk — Rủi ro',
    blurb: 'Quy trình 7 bước, EMV, ứng phó threat/opportunity, reserves.',
  },
  {
    id: 'stakeholder',
    num: '07',
    short: 'Stakeholder & …',
    title: 'Stakeholder & Communication',
    blurb: 'Power-Interest, Salience, SEAM, kênh giao tiếp N(N−1)/2.',
  },
  {
    id: 'procurement',
    num: '08',
    short: 'Procurement',
    title: 'Procurement — Mua sắm',
    blurb: 'Loại hợp đồng & ai chịu rủi ro, PTA, RFP/RFQ, agile contracting.',
  },
];
