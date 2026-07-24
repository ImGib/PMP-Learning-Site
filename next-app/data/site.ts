// data/site.ts — PORT NGUYÊN từ src/data/site.ts (Astro): danh sách 8 chủ đề Phần II.
export interface Topic {
  id: string;
  num: string;
  short: string;
  title: string;
  titleEn: string;
  blurb: string;
  blurbEn: string;
}

export const TOPICS: Topic[] = [
  {
    id: 'scope',
    num: '01',
    short: 'Scope',
    title: 'Scope — Phạm vi',
    titleEn: 'Scope',
    blurb: '"Dự án làm gì & KHÔNG làm gì" — Requirement, WBS, Scope Baseline, kiểm soát thay đổi.',
    blurbEn: '"What the project will and will NOT do" — requirements, WBS, scope baseline, change control.',
  },
  {
    id: 'schedule',
    num: '02',
    short: 'Schedule',
    title: 'Schedule — Tiến độ',
    titleEn: 'Schedule',
    blurb: 'Critical Path (ES/EF/LS/LF/Float), ước lượng PERT, nén lịch (crash/fast-track).',
    blurbEn: 'Critical path (ES/EF/LS/LF/float), PERT estimating, schedule compression (crash/fast-track).',
  },
  {
    id: 'finance',
    num: '03',
    short: 'Finance',
    title: 'Finance — Chi phí & EVM',
    titleEn: 'Finance — Cost & EVM',
    blurb: 'EVM (SV/CV/CPI/SPI/EAC), reserves, Cost Baseline / Project Budget / Funding.',
    blurbEn: 'EVM (SV/CV/CPI/SPI/EAC), reserves, cost baseline / project budget / funding.',
  },
  {
    id: 'quality',
    num: '04',
    short: 'Quality',
    title: 'Quality — Chất lượng',
    titleEn: 'Quality',
    blurb: 'QA vs QC, Cost of Quality, 7 công cụ, quy trình cải tiến (PDCA/DMAIC).',
    blurbEn: 'QA vs QC, cost of quality, the 7 tools, improvement cycles (PDCA/DMAIC).',
  },
  {
    id: 'resource',
    num: '05',
    short: 'Resource',
    title: 'Resource — Nguồn lực & Con người',
    titleEn: 'Resource — People',
    blurb: 'Tuckman, tạo động lực, xung đột, Situational Leadership, RACI.',
    blurbEn: 'Tuckman, motivation, conflict, situational leadership, RACI.',
  },
  {
    id: 'risk',
    num: '06',
    short: 'Risk',
    title: 'Risk — Rủi ro',
    titleEn: 'Risk',
    blurb: 'Quy trình 7 bước, EMV, ứng phó threat/opportunity, reserves.',
    blurbEn: 'The 7-step process, EMV, threat/opportunity responses, reserves.',
  },
  {
    id: 'stakeholder',
    num: '07',
    short: 'Stakeholder & …',
    title: 'Stakeholder & Communication',
    titleEn: 'Stakeholder & Communication',
    blurb: 'Power-Interest, Salience, SEAM, kênh giao tiếp N(N−1)/2.',
    blurbEn: 'Power-Interest, Salience, SEAM, communication channels N(N−1)/2.',
  },
  {
    id: 'procurement',
    num: '08',
    short: 'Procurement',
    title: 'Procurement — Mua sắm',
    titleEn: 'Procurement',
    blurb: 'Loại hợp đồng & ai chịu rủi ro, PTA, RFP/RFQ, agile contracting.',
    blurbEn: 'Contract types & who bears risk, PTA, RFP/RFQ, agile contracting.',
  },
];
