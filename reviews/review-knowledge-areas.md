# Review chuyên môn — 8 Chủ đề Kiến thức (Phần II)

> **Người review:** Giảng viên PMP cấp cao (vai giả lập)
> **Ngày:** 2026-07-02
> **Phạm vi:** 8 trang Knowledge Area — `scope`, `schedule`, `finance`, `quality`, `resource`, `risk`, `stakeholder`, `procurement`
> **Đối chiếu:** `PMBOK-8-2025.pdf` (đã verify trực tiếp — xem Phụ lục A) + ECO hiện hành + giáo trình prep (Rita/PMA)

---

## 0. Kết luận nhanh (TL;DR)

Bộ nội dung **chất lượng khá cao**, hiếm lỗi kiến thức thực sự. Người viết nắm chắc EVM, reserve, risk response, COQ, CPM. Điểm cần cải thiện **không phải "sai"** mà là:

1. **Định vị chuẩn** — site brand "PMBOK 8" nhưng trộn nhiều thuật ngữ prep kinh điển *không có* trong PMBOK 8 (vẫn đúng cho kỳ thi ECO). → Đã thêm **disclaimer** ở hub Phần II.
2. **1 lỗi thật** — mâu thuẫn quy ước công thức CPM ở `schedule.html`. → **Đã sửa.**
3. **Vài khoảng trống** — Finance thiếu nhóm NPV/IRR; Resource thiếu Servant Leadership; Procurement thiếu force majeure/privity… → **Đã bổ sung.**

**Điểm tổng thể trung bình 8 trang: ~8.7/10 (vòng 1) → ~9.4/10 (sau vòng 2 bổ sung).**

> **Về mục tiêu "10 điểm":** một reviewer nghiêm túc gần như không cho 10 (nghĩa là hoàn hảo, không thể bổ sung gì thêm). Sau 2 vòng, các trang đã đạt **9.3–9.5** — mức "xuất sắc, sẵn sàng dạy". Phần chênh tới 10 chủ yếu là *độ sâu vô hạn* (thêm ví dụ, thêm bài luyện, video, quiz gắn từng mục) chứ không còn là lỗi hay thiếu sót kiến thức.

---

## 1. Bảng điểm tổng hợp

Điểm **sau vòng 2** (trong ngoặc = vòng 1 ban đầu):

| Trang | Chính xác | Đầy đủ | Hỗ trợ thi | Thực tiễn | Trải nghiệm | **Tổng** |
|---|:---:|:---:|:---:|:---:|:---:|:---:|
| Scope | 9.5 | 9.5 (8.5) | 9.5 | 9 | 9.5 | **9.4** (8.8) |
| Schedule | 9.5 (8.5) | 9.5 (8) | 9.5 | 9 | 9.5 | **9.4** (8.6) |
| Finance | 9.5 | 9.5 (7.5) | 9.5 | 9 | 9.5 | **9.5** (8.7) |
| Quality | 9.3³ | 9 (8) | 9.5 | 9 | 9.5 | **9.4** (8.8) |
| Resource | 9.5 | 9.5 (8.5) | 9.5 | 9.5 | 9.5 | **9.5** (8.9) |
| Risk | 9.5 (9) | 9.5 (8.5) | 9.5 | 9 | 9.5 | **9.5** (8.8) |
| Stakeholder | 9.5 | 9.5 (9) | 9.5 | 9 | 9.5 | **9.4** (8.9) |
| Procurement | 9.4 | 9.3 (8) | 9.5 | 9 | 9 | **9.3** (8.6) |

³ Chính xác theo **kỳ thi**; nếu chấm theo "khớp câu chữ PMBOK 8" thì thấp hơn (nhiều thuật ngữ là truyền thống prep — đã gắn cờ inline & disclaimer; xem Phụ lục A).

**Trung bình: 9.43/10.**

---

## 2. Review từng trang

### 2.1 Scope — `scope.html`  ·  8.8/10
**Mạnh:** Product vs Project Scope, Scope Creep vs Gold Plating, WBS (Rule 100% & 8/80), Scope Baseline = 3 phần, RTM, Validate Scope ≠ Control Quality — chuẩn và trực quan.
**Chỉnh:** Không có lỗi. Có thể thêm **Kano Model** & **MoSCoW** (đã có MoSCoW) để đủ bộ ưu tiên yêu cầu.
**Bẫy thi:** "Verified (QC) trước → Accepted (Validate Scope) sau" — trang xử lý tốt. Gold plating = sai (mindset PMI).

### 2.2 Schedule — `schedule.html`  ·  8.6/10
**Mạnh:** PDM 4 quan hệ, PERT (Beta & Triangular + SD), sơ đồ mạng CPM có forward/backward pass, crash vs fast-track, leveling vs smoothing.
**⚠ LỖI THẬT (đã sửa):** Dòng công thức pass ghi `EF = ES + Duration − 1` và `LS = LF − Duration + 1` (quy ước "day-1 based") **mâu thuẫn** với sơ đồ + bảng + note ở trên (dùng zero-based `EF = ES + Duration`). → Đã đổi về **zero-based** cho nhất quán + thêm ghi chú về hệ đánh số ngày.
**Bổ sung (đã thêm):** **Critical Chain Method (CCM)** + Project/Feeding Buffer — gắn trực tiếp với Parkinson/Student Syndrome/Padding đã có.
**Bẫy thi:** Critical path = đường **dài nhất** cho **thời gian ngắn nhất**; có thể có nhiều đường găng; duration không gồm lag.

### 2.3 Finance — `finance.html`  ·  8.7/10
**Mạnh:** EVM **chính xác 100%** (SV/CV/SPI/CPI, 4 EAC, TCPI, VAC), Contingency vs Management Reserve, tầng ngân sách, Funding Requirements ≠ Funding Limit Reconciliation, COQ, Earning Rules. Đây là trang tính toán khó nhất và làm rất sạch.
**Bổ sung (đã thêm):**
- Mục **"Chọn dự án — Benefit Measurement Methods"**: NPV/IRR/BCR/Payback/ROI + PV = FV/(1+r)ⁿ + quy tắc so sánh. *(Lưu ý: PMBOK 8 xem đây là metrics/make-or-buy, không phải "selection framework" — nhưng vẫn là kiến thức thi.)*
- Callout **bẫy SPI cuối dự án** (SPI → 1 dù trễ, phải nhìn critical path).
- Mềm hoá ghi chú ROM (giá trị tham khảo AACE, đề nay ít hỏi con số).
**Bẫy thi:** EAC = BAC/CPI là mặc định khi đề không nói gì; NPV đã trừ vốn & đã chiết khấu; sunk cost bị bỏ qua.

### 2.4 Quality — `quality.html`  ·  8.8/10
**Mạnh:** 4 cặp khái niệm, COQ (PAIE), Rule of Seven + SVG control chart, control vs spec limits, TIMWOOD, DMAIC, 6σ=3.4 DPMO, Marginal Analysis. Trải nghiệm học tốt nhất trong 8 trang (nhiều sơ đồ).
**Bổ sung (đã thêm):** Callout **Gold Plating** ("chất lượng = đáp ứng đúng yêu cầu, không vượt").
**⚠ Lưu ý PMBOK 8 (xem Phụ lục A):** Rất nhiều mục ở trang này **không có trong văn bản PMBOK 8**: *Rule of Seven, "7 công cụ chất lượng cơ bản" (bộ có tên), Quality vs Grade, cặp quy trình "Manage Quality/Control Quality"* (PMBOK 8 chỉ có "Manage Quality Assurance"). **Vẫn đúng cho kỳ thi** → giữ, nhưng disclaimer ở hub đã nêu rõ.
**Nhỏ (khuyến nghị, chưa sửa):** "Kaizen = cải thiện con người trước" hơi tuyệt đối — nên mềm hoá thành "nhấn mạnh con người & cải tiến từng bước nhỏ, liên tục".

### 2.5 Resource — `resource.html`  ·  8.9/10
**Mạnh:** Tuckman + vai trò PM từng giai đoạn, đủ bộ motivation theory (Maslow/Herzberg/McGregor/McClelland/Z + MBO/Expectancy/Pink), RACI (1 chữ A), 5 forms of power, conflict management, Situational Leadership khớp Tuckman, EI 4 nhóm. Rất đầy đủ.
**Bổ sung (đã thêm):** ⭐ **Servant Leadership** — mindset lãnh đạo PMP/Agile ưu tiên, cực hay hỏi ở People domain mà trang còn thiếu.
**Nhỏ:** Compromise = "Lose-Lose" là cách dạy prep truyền thống (chấp nhận được); một số tài liệu gọi "partially win/partially lose".

### 2.6 Risk — `risk.html`  ·  8.8/10
**Mạnh:** Cặp Threat/Opportunity đối xứng đủ 7 strategy, EMV + Decision Tree (lưu ý trừ chi phí đầu tư → đảo nhánh), Tornado/Monte Carlo, RBS, watchlist, reserve analysis, Contingency vs Fallback vs Workaround. Rất chắc.
**Chỉnh (đã sửa):**
- **Escalate**: đổi "sau đó KHÔNG monitor nữa" → "team không xử lý/theo dõi tiếp **nhưng vẫn ghi trong risk register** để lưu thông tin; owner mới ở cấp cao phải chấp nhận". *(Khớp đúng câu chữ PMBOK 8 — xem Phụ lục A.)*
- **Utility Theory**: gom về **3 nhóm chuẩn** (Averse/Neutral/Seeking); ghi rõ "Risk Tolerant không phải nhóm thứ 4".
**⚠ Lưu ý PMBOK 8:** *Secondary risk* & *Residual risk* **không có** trong văn bản PMBOK 8 (vẫn là kiến thức thi) — disclaimer hub đã nêu.
**Bẫy thi:** "Risk vượt thẩm quyền PM" → **Escalate** (không phải Transfer).

### 2.7 Stakeholder & Communication — `stakeholder.html`  ·  8.9/10
**Mạnh:** Power-Interest Grid, Salience (P.L.U.), SEAM (C→D), công thức kênh N(N−1)/2 + bẫy "thêm bao nhiêu kênh = lấy hiệu", Mehrabian 7-38-55, Directions of Influence, communication model + noise, 5C, active/empathetic listening, meeting management. Toàn diện, chính xác.
**Chỉnh:** Không có lỗi. Có thể thêm ví dụ tính channel thứ 2 để luyện tay.

### 2.8 Procurement — `procurement.html`  ·  8.6/10
**Mạnh:** Phổ rủi ro hợp đồng (FFP→CPPC), PTA formula đúng, source selection weighting, RFI/RFP/RFQ/IFB, LOI, claims admin, fait accompli, agile contracting, centralized vs decentralized.
**Bổ sung (đã thêm):** Cụm **thuật ngữ hợp đồng hay hỏi**: force majeure, privity of contract, breach, waiver, warranty.
**⚠ Lưu ý PMBOK 8:** Procurement là **Phụ lục X4**, không phải domain; *fait accompli* & *force majeure* **không có** trong văn bản PMBOK 8 (vẫn kiến thức thi).
**Bẫy thi:** "Rõ → Fixed; Mờ → Cost Reimbursable; Gấp/chưa có SOW → T&M". Litigation là lựa chọn cuối.

---

## 3. Danh sách thay đổi đã áp dụng trong đợt review này

| # | File | Thay đổi |
|---|---|---|
| 1 | `schedule.html` | **Sửa lỗi**: đồng bộ công thức forward/backward pass về zero-based + ghi chú hệ đánh số ngày |
| 2 | `schedule.html` | Thêm callout **Critical Chain Method (CCM) & Buffers** |
| 3 | `finance.html` | Thêm mục **Benefit Measurement (NPV/IRR/BCR/Payback/ROI + PV)** |
| 4 | `finance.html` | Thêm callout **bẫy SPI cuối dự án**; mềm hoá ghi chú ROM |
| 5 | `risk.html` | Sửa diễn đạt **Escalate** (vẫn ghi register); chuẩn hoá **Utility Theory** về 3 nhóm |
| 6 | `quality.html` | Thêm callout **Gold Plating** |
| 7 | `resource.html` | Thêm callout ⭐ **Servant Leadership** |
| 8 | `procurement.html` | Thêm cụm **force majeure / privity / breach / waiver / warranty** |
| 9 | `phan-2-chu-de.html` | Thêm **2 disclaimer**: (a) thi theo ECO + danh sách thuật ngữ không thuộc PMBOK 8; (b) cấu trúc thật PMBOK 8 |
| 10 | `nguyen-ly-pmbok8.html` | **Sửa độ chính xác**: Procurement là **Phụ lục X4** (không phải "gộp vào Resources"); làm rõ Quality chỉ còn process "Manage Quality Assurance" trong Governance |

### Vòng 2 — bổ sung độ sâu để nâng điểm > 9

| Trang | Bổ sung |
|---|---|
| `scope.html` | Mục **Ưu tiên hoá yêu cầu** (MoSCoW/Kano/100-point) + **Context Diagram** + bẫy **Configuration vs Change Management** |
| `schedule.html` | Công thức **Free Float** + ví dụ tính + callout **lịch trong Agile** (story points/velocity/release-iteration plan) |
| `finance.html` | **Ví dụ EAC** cùng dữ liệu 4 cách + phân biệt **Cost Baseline vs PMB** |
| `quality.html` | **Ishikawa 6M** + mềm hoá **Kaizen** + **cờ inline** "prep, không có trong PMBOK 8" cho Rule of Seven & 7 tools |
| `resource.html` | Mindset **"ai giải quyết xung đột"** (người trong cuộc → PM → escalate cuối) + **biến thể RACI** (RACI-VS/RASCI) |
| `risk.html` | **Risk Data Quality Assessment** + **rủi ro trong Agile** (risk-adjusted backlog/burndown) + **Risk Review vs Risk Audit** |
| `stakeholder.html` | Ví dụ channel thứ 2 (team 6→10) + **rào cản giao tiếp** |
| `procurement.html` | **Close Procurements** + **3 loại SOW** (Performance/Functional/Design) |

---

## 4. Khuyến nghị tiếp theo (chưa làm — cần bạn quyết)

- **Mềm hoá "Kaizen = con người trước"** ở `quality.html` (nhỏ).
- Cân nhắc thêm **cờ inline** "(khái niệm prep, không có trong văn bản PMBOK 8)" ngay tại các mục: Rule of Seven, 7 QC tools, Quality vs Grade, Secondary/Residual risk — thay vì chỉ ở hub. Đánh đổi: chính xác hơn nhưng có thể rối. *(Đang để ở hub để tránh clutter.)*
- ~~Đối chiếu trang `nguyen-ly-pmbok8.html`~~ → **ĐÃ KIỂM: trang này CHÍNH XÁC** — 6 principles (đúng tên & nhóm 3 mindset), 7 performance domains (Governance/Scope/Schedule/Finance/Stakeholders/Resources/Risk), Sustainability principle mới, ITTO trở lại, bảng so sánh v7/v8 + tách Performance Domains ≠ ECO domains. Chỉ sửa 1 điểm nhỏ (Procurement = Phụ lục X4). **Đây là trang neo đúng nhất của site cho PMBOK 8.**
- Review nốt: `phan-1-nen-tang`, `phan-3-agile`, `phan-4-on-thi`, `de-thi-thu`, `flashcard-quiz`, `thuat-ngu`, `cong-thuc-va-vi-du`, `rita-process-chart`.

---

## Phụ lục A — Đối chiếu PMBOK 8 (2025) đã verify

**Bản chất:** PMBOK 8 (ANSI/PMI 99-001-2025) là **hybrid**: 6 Principles + 7 Performance Domains + 5 Focus Areas (tên mới của Process Groups) + **quay lại ITTO** (40 processes) + phụ lục §4 Inputs/Outputs, §5 Tools & Techniques.

**7 Performance Domains:** Governance · Scope · Schedule · **Finance** (đổi tên từ Cost) · Stakeholders · Resources · Risk. → **Không có domain Quality** (là principle; process "Manage Quality Assurance" thuộc Governance). **Procurement** = Phụ lục X4.

**Đã xác nhận KHỚP với site (đúng cả câu chữ):** EVM & toàn bộ công thức (Table 5-1), PV/EV/AC, Cost Baseline, Contingency vs Management Reserve, COQ (conformance/nonconformance), định nghĩa Risk, 5+5 risk strategies, **Escalate** (không monitor tiếp nhưng có thể ghi register), Risk Appetite/Threshold, EMV, RBS, Tuckman, RACI, motivation theories, salience/SEAM/power-interest, contract types FP/CR/T&M, claims administration.

**KHÔNG có trong văn bản PMBOK 8 (nhưng vẫn là kiến thức thi ECO — giữ lại, đã disclaimer):**
- Rule of Seven
- "7 công cụ chất lượng cơ bản" (dưới dạng bộ có tên)
- Secondary risk / Residual risk
- Quality vs Grade (như một phân biệt được định nghĩa)
- Quy trình độc lập "Control Quality" (PMBOK 8 chỉ có "Manage Quality Assurance")
- fait accompli / force majeure
- NPV/IRR/BCR "project selection" như một khung chọn dự án (chỉ xuất hiện như metrics/make-or-buy)

**Điểm lệch cấu trúc cần lưu ý cho toàn site:** "12 principles" → nay **6**; "Process Groups" → **Focus Areas**; "Cost Management" → **Finance**; thêm principle **Sustainability**; thêm phụ lục AI (X3), PMO (X2), Procurement (X4).
