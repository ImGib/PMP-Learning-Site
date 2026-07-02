// data/flashcards.js — flashcard deck (extracted)
export const FLASHCARDS = [
  {cat:"Nền tảng", term:"Project", en:"A temporary endeavor undertaken to create a unique product, service, or result.", vn:"Nỗ lực TẠM THỜI tạo ra kết quả ĐỘC NHẤT. Nhớ: T.U (Temporary + Unique)."},
  {cat:"Nền tảng", term:"Program", en:"A group of related projects managed in a coordinated way to obtain benefits not available from managing them individually.", vn:"Nhóm dự án LIÊN QUAN → đạt lợi ích cộng hưởng."},
  {cat:"Nền tảng", term:"Portfolio", en:"A collection of projects, programs, and operations managed as a group to achieve strategic objectives.", vn:"Tập hợp (có thể KHÔNG liên quan) gắn với CHIẾN LƯỢC tổ chức."},
  {cat:"Nền tảng", term:"EEF vs OPA", en:"EEF = Enterprise Environmental Factors (conditions not under the team's control). OPA = Organizational Process Assets (templates, processes, knowledge the team can use & update).", vn:"EEF = 'thời tiết' (không đổi được); OPA = 'hộp đồ nghề công ty'."},
  {cat:"Nền tảng", term:"Project Charter", en:"The document issued by the sponsor that formally authorizes the project and gives the PM authority.", vn:"Giấy khai sinh dự án, do SPONSOR ký (không phải PM)."},
  {cat:"Nền tảng", term:"PMO — Supportive / Controlling / Directive", en:"Supportive (low control, provides templates), Controlling (moderate, requires compliance), Directive (high, manages projects directly).", vn:"Hỗ trợ → Kiểm soát → Chỉ đạo (quyền tăng dần)."},

  {cat:"Scope", term:"Scope Creep vs Gold Plating", en:"Scope Creep = uncontrolled expansion of scope. Gold Plating = the team adding features the customer did NOT request.", vn:"Creep = phình do nhiều bên đẩy vào; Gold Plating = TEAM tự thêm."},
  {cat:"Scope", term:"Work Package", en:"The lowest-level component of the WBS; the point at which cost and duration can be estimated and managed.", vn:"Phần tử THẤP NHẤT của WBS. Quy tắc 8/80 giờ."},
  {cat:"Scope", term:"Scope Baseline", en:"The approved Scope Statement + WBS + WBS Dictionary.", vn:"3 thành phần: Scope Statement + WBS + WBS Dictionary."},
  {cat:"Scope", term:"Verified vs Accepted deliverable", en:"Verified = checked for correctness via Control Quality. Accepted = formally signed off by customer via Validate Scope.", vn:"Verified = QC nội bộ 'đúng chưa'; Accepted = khách 'ký nhận'."},

  {cat:"Schedule", term:"Critical Path", en:"The longest path through the network diagram; it determines the shortest possible project duration. Float on it = 0.", vn:"Đường DÀI NHẤT = thời gian NGẮN NHẤT của dự án."},
  {cat:"Schedule", term:"Total Float", en:"The amount of time an activity can be delayed without delaying the project finish date. TF = LS − ES = LF − EF.", vn:"Thời gian được trễ mà không trễ cả dự án."},
  {cat:"Schedule", term:"Crashing vs Fast Tracking", en:"Crashing = add resources to shorten duration (increases cost). Fast Tracking = do sequential activities in parallel (increases risk/rework).", vn:"Crash = đổ tiền (Cost↑); Fast Track = làm chồng (Risk↑)."},
  {cat:"Schedule", term:"Lead vs Lag", en:"Lead = a successor can start earlier / overlap the predecessor. Lag = waiting time inserted before a successor.", vn:"Lead = bắt đầu sớm/chồng lấn; Lag = thời gian chờ."},

  {cat:"Finance", term:"EV / PV / AC", en:"EV = value of work actually completed. PV = value of work planned. AC = actual cost spent.", vn:"EV = việc đã làm; PV = việc đã lên kế hoạch; AC = tiền đã chi."},
  {cat:"Finance", term:"CPI / SPI", en:"CPI = EV/AC (cost efficiency). SPI = EV/PV (schedule efficiency). >1 good, <1 bad.", vn:"CPI cost, SPI schedule; EV luôn ở tử số."},
  {cat:"Finance", term:"Contingency vs Management Reserve", en:"Contingency = for known risks, inside the cost baseline, PM controls it. Management = for unknown risks, outside the baseline, senior management controls it.", vn:"Contingency cho cái BIẾT (PM tiêu); Management cho cái KHÔNG biết (sếp giữ)."},
  {cat:"Finance", term:"EAC (default)", en:"Estimate at Completion when current variances are typical: EAC = BAC / CPI.", vn:"Dự báo tổng chi phí khi 'cứ đà này': BAC/CPI."},

  {cat:"Quality", term:"QA vs QC", en:"Quality Assurance = process-focused, preventive, doing things the right way. Quality Control = product-focused, corrective, inspecting results.", vn:"QA = quy trình/phòng ngừa; QC = sản phẩm/bắt lỗi."},
  {cat:"Quality", term:"Quality vs Grade", en:"Quality = degree to which requirements are met. Grade = category of technical features. Low quality is always a problem; low grade may be acceptable.", vn:"Chất lượng thấp = lỗi; hạng thấp = có thể chấp nhận."},
  {cat:"Quality", term:"Cost of Quality (COQ)", en:"Conformance = Prevention + Appraisal. Nonconformance = Internal failure + External failure.", vn:"PAIE: Prevention, Appraisal | Internal, External failure."},
  {cat:"Quality", term:"Rule of Seven", en:"Seven consecutive points on one side of the mean on a control chart signal an out-of-control process, even within control limits.", vn:"7 điểm liên tiếp cùng phía → mất kiểm soát (dù trong control limits)."},

  {cat:"Resource", term:"Tuckman's Ladder", en:"Forming → Storming → Norming → Performing → Adjourning.", vn:"Xung đột cao nhất ở Storming; năng suất cao nhất ở Performing."},
  {cat:"Resource", term:"Herzberg — Hygiene vs Motivator", en:"Hygiene factors (salary, conditions) prevent dissatisfaction but do not motivate. Motivators (recognition, growth) create satisfaction.", vn:"Lương là HYGIENE (không tạo động lực)."},
  {cat:"Resource", term:"RACI", en:"Responsible (does the work), Accountable (ultimately answerable — only ONE per task), Consult, Inform.", vn:"Mỗi task chỉ 1 chữ A (Accountable)."},

  {cat:"Risk", term:"Risk vs Issue", en:"Risk = an uncertain future event (probability > 0% and < 100%). Issue = a risk that has already occurred.", vn:"Risk = tương lai/chưa xảy ra; Issue = đã xảy ra."},
  {cat:"Risk", term:"EMV", en:"Expected Monetary Value = Probability × Impact. Threats negative, opportunities positive.", vn:"EMV = Xác suất × Tác động."},
  {cat:"Risk", term:"Secondary vs Residual risk", en:"Secondary risk = a new risk created BY implementing a response. Residual risk = the risk that REMAINS after a response.", vn:"Secondary = SINH ra từ response; Residual = CÒN lại sau response."},
  {cat:"Risk", term:"Threat & Opportunity strategies", en:"Threats: Avoid, Transfer, Mitigate, Escalate, Accept. Opportunities: Exploit, Share, Enhance, Escalate, Accept.", vn:"Avoid↔Exploit, Transfer↔Share, Mitigate↔Enhance."},

  {cat:"Stakeholder", term:"Communication Channels", en:"Number of channels = N(N−1)/2, where N is the number of participants.", vn:"N(N−1)/2. 'Thêm bao nhiêu' → lấy HIỆU."},
  {cat:"Stakeholder", term:"5 Engagement levels", en:"Unaware → Resistant → Neutral → Supportive → Leading.", vn:"SEAM đo mức hiện tại (C) tới mong muốn (D)."},
  {cat:"Stakeholder", term:"Conflict — Collaborate vs Compromise", en:"Collaborate/Problem-solve = win-win (best). Compromise = lose-lose (each side gives up something).", vn:"Compromise KHÔNG phải win-win; Collaborate mới là win-win."},

  {cat:"Procurement", term:"Fixed Price vs Cost Reimbursable", en:"Fixed Price = seller bears most risk (clear requirements). Cost Reimbursable = buyer bears more risk (unclear requirements).", vn:"Rõ→Fixed (seller gánh); Mờ→Cost (buyer gánh)."},
  {cat:"Procurement", term:"PTA", en:"Point of Total Assumption (FPIF only) = the cost above which the seller bears 100% of overruns.", vn:"Chỉ FPIF. PTA = (Ceiling−Target Price)/Buyer share + Target Cost."},

  {cat:"Agile", term:"Definition of Done vs Acceptance Criteria", en:"DoD = process checklist applied to ALL items (team-owned). Acceptance Criteria = conditions for ONE specific item (user-focused, test-verified).", vn:"DoD cho MỌI item; Acceptance Criteria cho MỘT item."},
  {cat:"Agile", term:"Velocity", en:"The number of story points a team completes per iteration; used to forecast. Never compare across teams.", vn:"Points/iteration. KHÔNG so sánh giữa 2 team."},
  {cat:"Agile", term:"Little's Law", en:"Cycle Time = WIP / Throughput. Reduce cycle time by lowering WIP or raising throughput.", vn:"Cycle Time = WIP / Throughput."},
  {cat:"Agile", term:"Timeboxing", en:"A fixed, short period of time; if work is not finished, you adjust scope (never extend the time).", vn:"Hết giờ thì ĐIỀU CHỈNH SCOPE, không kéo dài thời gian."},

  {cat:"Agile", term:"Agile Manifesto — 4 Values", en:"Individuals & interactions over processes and tools; Working software over comprehensive documentation; Customer collaboration over contract negotiation; Responding to change over following a plan.", vn:"Đề cao vế trái (vế phải vẫn có giá trị, chỉ ưu tiên thấp hơn): Người–Sản phẩm–Khách–Thay đổi."},
  {cat:"Agile", term:"Working software is the primary measure of progress", en:"Agile principle #7: progress is measured by usable, working product — not by documents or hours spent.", vn:"Thước đo tiến độ chính = sản phẩm chạy được, KHÔNG phải % tài liệu."},
  {cat:"Scrum", term:"Scrum 3-5-3", en:"3 accountabilities (Product Owner, Scrum Master, Developers); 5 events (Sprint, Sprint Planning, Daily Scrum, Sprint Review, Sprint Retrospective); 3 artifacts (Product Backlog, Sprint Backlog, Increment).", vn:"Ba vai – Năm họp – Ba sản phẩm."},
  {cat:"Scrum", term:"Product Owner vs Scrum Master", en:"Product Owner maximizes product value by ordering the Product Backlog (decides WHAT). Scrum Master is a servant leader who removes impediments and coaches the team (does NOT assign work).", vn:"PO quyết định LÀM GÌ; SM phục vụ & gỡ vướng (không phải sếp)."},
  {cat:"Scrum", term:"Sprint Review vs Retrospective", en:"Sprint Review inspects the PRODUCT (demo the Increment, adapt the backlog with stakeholders). Retrospective inspects the PROCESS (how the team works, then improves).", vn:"Review = sản phẩm; Retro = cách làm việc."},
  {cat:"Scrum", term:"Sprint", en:"A timeboxed iteration of 1–4 weeks that produces a 'Done', usable Increment; it is the container for all other Scrum events.", vn:"Chu kỳ cố định 1–4 tuần, tạo ra Increment dùng được."}
];
