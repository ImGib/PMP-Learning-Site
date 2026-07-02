// ===== Flashcards + Quiz data & logic =====

var FLASHCARDS = [
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

var QUIZ = [
  {cat:"Finance", q:"Cuối tháng, dự án có EV = $30,000 và AC = $35,000. Cost Variance (CV) và tình trạng chi phí là gì?",
   opts:["CV = +$5,000, dưới ngân sách","CV = −$5,000, vượt ngân sách","CV = $65,000, đúng ngân sách","Không đủ dữ liệu để tính"],
   correct:1, expl:"CV = EV − AC = 30,000 − 35,000 = −$5,000. Âm nghĩa là VƯỢT ngân sách (over budget)."},

  {cat:"Finance", q:"SPI của dự án = 0.8. Điều này có nghĩa gì?",
   opts:["Dự án đang vượt tiến độ","Dự án đúng tiến độ","Dự án đang chậm tiến độ","Dự án vượt ngân sách"],
   correct:2, expl:"SPI = EV/PV. SPI < 1 nghĩa là giá trị đạt được thấp hơn kế hoạch → CHẬM tiến độ. (SPI liên quan tiến độ, không phải chi phí.)"},

  {cat:"Finance", q:"Một rủi ro ĐÃ ĐƯỢC XÁC ĐỊNH có thể phát sinh chi phí. Bạn nên lập khoản dự phòng nào, và ai kiểm soát nó?",
   opts:["Management Reserve — lãnh đạo kiểm soát","Contingency Reserve — PM kiểm soát","Management Reserve — PM kiểm soát","Không cần dự phòng"],
   correct:1, expl:"Rủi ro ĐÃ BIẾT (known risk) → Contingency Reserve, nằm trong cost baseline, PM dùng được. Management Reserve dành cho rủi ro CHƯA biết và do lãnh đạo kiểm soát."},

  {cat:"Scope", q:"Lập trình viên tự ý thêm một tính năng 'cho đẹp' mà khách hàng không hề yêu cầu. Đây là gì?",
   opts:["Scope Creep","Progressive Elaboration","Gold Plating","Rolling Wave Planning"],
   correct:2, expl:"Team tự thêm tính năng khách KHÔNG yêu cầu = Gold Plating. Scope Creep là phạm vi phình ra không kiểm soát (thường do yêu cầu thay đổi từ nhiều bên)."},

  {cat:"Schedule", q:"Trong sơ đồ mạng, một milestone có duration bằng bao nhiêu?",
   opts:["1 ngày","Bằng activity dài nhất","0 (bằng không)","Tùy loại dự án"],
   correct:2, expl:"Milestone là một MỐC (sự kiện quan trọng), không tiêu tốn thời gian → duration = 0."},

  {cat:"Schedule", q:"Dự án bị chậm. Bạn thêm nhân sự vào các hoạt động trên đường găng để rút ngắn thời gian. Kỹ thuật này là gì và tác dụng phụ?",
   opts:["Fast Tracking — tăng chi phí","Crashing — tăng chi phí","Crashing — tăng rủi ro/rework","Resource Leveling — không đổi gì"],
   correct:1, expl:"Thêm tài nguyên (nhân lực) để rút ngắn = Crashing, hầu như luôn LÀM TĂNG CHI PHÍ. Fast Tracking là làm song song các việc (tăng rủi ro/rework)."},

  {cat:"Schedule", q:"Kỹ thuật tối ưu tài nguyên nào CÓ THỂ làm thay đổi đường găng (critical path)?",
   opts:["Resource Smoothing","Resource Leveling","Fast Tracking","Cả hai đều không đổi"],
   correct:1, expl:"Resource Leveling dùng khi tài nguyên giới hạn/quá tải và THƯỜNG làm đường găng dài ra (thay đổi). Resource Smoothing chỉ điều chỉnh trong phạm vi float nên KHÔNG đổi đường găng."},

  {cat:"Quality", q:"Trên control chart, bạn thấy 7 điểm liên tiếp nằm cùng một phía của đường trung bình dù vẫn trong control limits. Kết luận?",
   opts:["Quy trình bình thường, bỏ qua","Quy trình mất kiểm soát, cần điều tra","Cần nới control limits","Đây là specification limit"],
   correct:1, expl:"Rule of Seven: 7 điểm liên tiếp cùng phía của mean báo hiệu quy trình OUT OF CONTROL (có special/assignable cause), dù vẫn nằm trong control limits."},

  {cat:"Quality", q:"Hoạt động 'đào tạo, chuẩn hóa quy trình để NGĂN lỗi phát sinh' thuộc về?",
   opts:["Quality Control (QC)","Cost of Nonconformance","Quality Assurance (QA)","External failure cost"],
   correct:2, expl:"Ngăn ngừa lỗi ngay trong quy trình, làm đúng cách = Quality Assurance (preventive, process-focused). QC là kiểm tra sản phẩm để phát hiện lỗi (corrective)."},

  {cat:"Risk", q:"Một rủi ro đã được nhận diện trước đây giờ ĐÃ THỰC SỰ XẢY RA. Bây giờ nó được gọi là gì?",
   opts:["Trigger","Issue","Residual risk","Secondary risk"],
   correct:1, expl:"Rủi ro đã xảy ra (uncertainty đã thành certainty) → trở thành Issue, cần xử lý ngay. Trigger chỉ là dấu hiệu cảnh báo rủi ro sắp xảy ra."},

  {cat:"Risk", q:"Rủi ro (threat): xác suất 30%, tác động −$50,000. EMV bằng bao nhiêu?",
   opts:["−$15,000","−$50,000","−$1,500","+$15,000"],
   correct:0, expl:"EMV = Probability × Impact = 0.30 × (−50,000) = −$15,000. Threat mang dấu âm."},

  {cat:"Risk", q:"Bạn mua bảo hiểm để chuyển hậu quả tài chính của một threat sang bên thứ ba. Với một OPPORTUNITY, chiến lược tương đương (đối xứng) là gì?",
   opts:["Exploit","Enhance","Share","Mitigate"],
   correct:2, expl:"Transfer (threat) đối xứng với Share (opportunity) — đều là giao cho bên thứ ba. Cặp còn lại: Avoid↔Exploit, Mitigate↔Enhance."},

  {cat:"People", q:"Hai thành viên trong team xung đột gay gắt về giải pháp kỹ thuật. Theo PMI, PM nên làm gì TRƯỚC TIÊN?",
   opts:["Escalate ngay cho sponsor","Yêu cầu cả hai làm thêm giờ","Gặp cả hai, tìm nguyên nhân gốc và hướng tới giải pháp win-win","Tự chọn giải pháp và ra lệnh (Force)"],
   correct:2, expl:"PMI Mindset: chủ động xử lý, dùng interpersonal skills, tìm ROOT CAUSE, hướng tới Collaborate/Problem-solving (win-win). Escalate và Force là lựa chọn cuối/kém ưu tiên."},

  {cat:"People", q:"Để tạo động lực dài hạn cho team, theo lý thuyết Herzberg, yếu tố nào KHÔNG phải là động lực thực sự?",
   opts:["Sự ghi nhận (recognition)","Tăng lương","Cơ hội phát triển nghề nghiệp","Trách nhiệm lớn hơn"],
   correct:1, expl:"Theo Herzberg, LƯƠNG là 'hygiene factor' — thiếu thì bất mãn nhưng có cũng không tạo động lực bền vững. Motivators thật sự: ghi nhận, phát triển, trách nhiệm."},

  {cat:"Stakeholder", q:"Nhóm dự án có 6 người, bổ sung thêm 2 người. Số kênh giao tiếp TĂNG THÊM là bao nhiêu?",
   opts:["28 kênh","13 kênh","15 kênh","2 kênh"],
   correct:1, expl:"6 người: 6×5/2 = 15. 8 người: 8×7/2 = 28. Tăng thêm = 28 − 15 = 13 kênh. Câu 'tăng thêm' luôn lấy HIỆU."},

  {cat:"Procurement", q:"Yêu cầu công việc còn mơ hồ, khó ước tính chính xác chi phí. Loại hợp đồng nào phù hợp nhất?",
   opts:["Firm Fixed Price (FFP)","Cost Reimbursable (CR)","Không ký hợp đồng","Fixed Price Incentive Fee (FPIF)"],
   correct:1, expl:"Yêu cầu chưa rõ → Cost Reimbursable (buyer chịu rủi ro nhiều hơn nhưng linh hoạt). Fixed Price hợp khi yêu cầu ĐÃ RÕ ràng."},

  {cat:"Agile", q:"Team A có velocity trung bình 25, Team B có 39. Kết luận nào ĐÚNG?",
   opts:["Team B làm việc hiệu quả hơn Team A","Team B nhanh hơn 56%","Không thể so sánh velocity giữa 2 team","Team A cần tăng story point"],
   correct:2, expl:"Story point là đơn vị TƯƠNG ĐỐI, mỗi team tự định nghĩa riêng. Vì vậy KHÔNG được so sánh velocity giữa các team — đây là bẫy rất phổ biến."},

  {cat:"Agile", q:"Điều gì mô tả đúng 'Definition of Done' (DoD)?",
   opts:["Tiêu chí nghiệm thu cho một user story cụ thể","Checklist quy trình áp dụng cho MỌI backlog item, do team thống nhất","Danh sách rủi ro của sprint","Hợp đồng với khách hàng"],
   correct:1, expl:"DoD là checklist quy trình áp cho TẤT CẢ items, do team sở hữu. Acceptance Criteria mới là tiêu chí cho MỘT item cụ thể (góc nhìn user, kiểm bằng test)."},

  {cat:"Manifesto", q:"Theo Agile Manifesto, cặp giá trị nào thể hiện ĐÚNG điều được coi trọng HƠN?",
   opts:["Comprehensive documentation hơn working software","Following a plan hơn responding to change","Working software hơn comprehensive documentation","Contract negotiation hơn customer collaboration"],
   correct:2, expl:"4 giá trị đề cao VẾ TRÁI: Individuals & interactions, Working software, Customer collaboration, Responding to change. Vế phải vẫn có giá trị nhưng ưu tiên thấp hơn."},

  {cat:"Manifesto", q:"Theo 12 nguyên tắc Agile, thước đo tiến độ CHÍNH của dự án là gì?",
   opts:["Số trang tài liệu đã hoàn thành","Working software — sản phẩm chạy được","Số giờ công đã bỏ ra","Phần trăm kế hoạch đã bám đúng"],
   correct:1, expl:"Nguyên tắc #7: 'Working software is the primary measure of progress' — đo bằng sản phẩm dùng được, không phải tài liệu hay giờ công."},

  {cat:"Manifesto", q:"Khách hàng muốn thay đổi yêu cầu ở giai đoạn khá muộn. Theo tinh thần Agile, nhóm nên làm gì?",
   opts:["Từ chối vì đã qua giai đoạn planning","Đón nhận thay đổi và biến nó thành lợi thế cạnh tranh cho khách","Bắt khách ký change request kèm phí phạt trước","Hoãn tất cả thay đổi sang một dự án khác"],
   correct:1, expl:"Nguyên tắc #2: 'Welcome changing requirements, even late in development' — Agile đón nhận thay đổi để tạo lợi thế cho khách."},

  {cat:"Scrum", q:"Trong Scrum, ai đóng vai servant leader — gỡ bỏ trở ngại (impediment) và bảo vệ nhóm, nhưng KHÔNG giao việc?",
   opts:["Product Owner","Scrum Master","Project Sponsor","Functional Manager"],
   correct:1, expl:"Scrum Master là servant leader: gỡ impediment, huấn luyện Scrum, bảo vệ nhóm. KHÔNG phải sếp và KHÔNG giao việc."},

  {cat:"Scrum", q:"Ai chịu trách nhiệm sắp xếp thứ tự ưu tiên Product Backlog để tối đa hóa giá trị sản phẩm?",
   opts:["Scrum Master","Developers","Product Owner","Change Control Board"],
   correct:2, expl:"Product Owner sở hữu &amp; ưu tiên Product Backlog, là 'tiếng nói khách hàng', quyết định LÀM GÌ."},

  {cat:"Scrum", q:"Đâu KHÔNG phải mục đích của Daily Scrum (họp đứng hằng ngày)?",
   opts:["Đồng bộ công việc, hướng tới Sprint Goal","Nêu các impediment đang gặp","Báo cáo tiến độ cho sếp và giải quyết mọi vấn đề kỹ thuật ngay tại chỗ","Giúp nhóm tự điều chỉnh kế hoạch trong ngày"],
   correct:2, expl:"Daily Scrum KHÔNG phải họp báo cáo cho cấp trên, cũng KHÔNG phải họp giải quyết vấn đề chi tiết — vấn đề kỹ thuật bàn riêng sau (~15 phút, do nhóm tự chủ)."},

  {cat:"Scrum", q:"Cuối Sprint có hai sự kiện. Sự kiện nào tập trung cải tiến CÁCH LÀM VIỆC của nhóm (quy trình)?",
   opts:["Sprint Review","Sprint Retrospective","Sprint Planning","Backlog Refinement"],
   correct:1, expl:"Retrospective soi PROCESS (cách làm việc → cải tiến). Sprint Review soi PRODUCT (demo Increment cho stakeholder, điều chỉnh backlog). Nhớ: Review=product, Retro=process."},

  {cat:"Scrum", q:"Một Sprint trong Scrum có đặc điểm nào đúng?",
   opts:["Timeboxed 1–4 tuần, độ dài cố định, là 'hộp chứa' các sự kiện khác","Kéo dài 1–6 tháng, gia hạn nếu chưa xong","Không giới hạn thời gian, xong việc thì kết thúc","Luôn đúng 30 ngày và không thể thay đổi"],
   correct:0, expl:"Sprint là iteration timeboxed 1–4 tuần với độ dài cố định; nếu không kịp thì điều chỉnh scope chứ không kéo dài. Sprint chứa Planning, Daily, Review, Retro."},

  {cat:"Scrum", q:"Cam kết (commitment) gắn với Sprint Backlog là gì?",
   opts:["Product Goal","Definition of Done","Sprint Goal","Definition of Ready"],
   correct:2, expl:"Product Backlog ↔ Product Goal; Sprint Backlog ↔ Sprint Goal; Increment ↔ Definition of Done."}
];

// ---------- render flashcards ----------
(function(){
  var grid = document.getElementById('fcGrid');
  if(!grid) return;
  var LSKEY = 'pmp_flashcards_v1';

  function esc(s){return String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');}
  function loadMine(){ try{ return JSON.parse(localStorage.getItem(LSKEY)||'[]'); }catch(e){ return []; } }
  function saveMine(arr){ try{ localStorage.setItem(LSKEY, JSON.stringify(arr)); }catch(e){} }

  var fileCards = (window.FLASHCARDS||[]).concat(window.MY_FLASHCARDS||[]);
  var data = [];
  function buildDeck(){
    var mine = loadMine().map(function(c){ return {cat:c.cat,term:c.term,en:c.en,vn:c.vn,id:c.id,_mine:true}; });
    data = fileCards.concat(mine);
    return data;
  }

  function render(list){
    grid.innerHTML = '';
    list.forEach(function(c){
      var el = document.createElement('div');
      el.className = 'fc';
      el.innerHTML =
        '<div class="fc-inner">'+
          '<div class="fc-face fc-front">'+
            (c._mine ? '<button class="fc-del" title="Xóa thẻ bạn đã thêm" data-id="'+c.id+'">&times;</button>' : '')+
            '<span class="cat">'+esc(c.cat||'Khác')+(c._mine?' · của bạn':'')+'</span>'+
            '<div class="term">'+esc(c.term)+'</div><div class="hint">Bấm để lật ↩</div></div>'+
          '<div class="fc-face fc-back"><p class="en"><b>EN:</b> '+esc(c.en)+'</p><p class="vn">'+esc(c.vn||'')+'</p></div>'+
        '</div>';
      el.addEventListener('click', function(){ el.classList.toggle('flip'); });
      var del = el.querySelector('.fc-del');
      if(del) del.addEventListener('click', function(ev){
        ev.stopPropagation();
        var id = del.getAttribute('data-id');
        var mine = loadMine().filter(function(c){ return String(c.id)!==String(id); });
        saveMine(mine); refresh();
      });
      grid.appendChild(el);
    });
  }

  function refresh(){ buildDeck(); render(data); updateCounts(); }
  function updateCounts(){
    var count = document.getElementById('fcCount');
    if(count) count.textContent = data.length;
    var mineCount = document.getElementById('fcMineCount');
    if(mineCount) mineCount.textContent = loadMine().length;
  }

  refresh();

  // shuffle (rotate — no Math.random needed)
  var sh = document.getElementById('fcShuffle');
  if(sh) sh.addEventListener('click', function(){
    var n = data.length; if(!n) return;
    var k = (parseInt(sh.dataset.k||'0',10)+5)%n; sh.dataset.k=k;
    data = data.slice(k).concat(data.slice(0,k)); render(data);
  });
  // flip all
  var flipAll = document.getElementById('fcFlip');
  if(flipAll) flipAll.addEventListener('click', function(){
    var open = flipAll.dataset.open==='1';
    document.querySelectorAll('.fc').forEach(function(f){ f.classList.toggle('flip', !open); });
    flipAll.dataset.open = open?'0':'1';
    flipAll.textContent = open ? 'Lật tất cả' : 'Úp tất cả lại';
  });

  // ---- Add-card form (saves to localStorage) ----
  var toggle = document.getElementById('fcAddToggle');
  var panel  = document.getElementById('fcForm');
  if(toggle && panel) toggle.addEventListener('click', function(){
    var open = panel.style.display==='block';
    panel.style.display = open ? 'none' : 'block';
    toggle.textContent = open ? '➕ Thêm thẻ mới' : '✕ Đóng';
  });

  var addBtn = document.getElementById('fcAdd');
  if(addBtn) addBtn.addEventListener('click', function(){
    var term = (document.getElementById('fcInTerm').value||'').trim();
    var en   = (document.getElementById('fcInEn').value||'').trim();
    var vn   = (document.getElementById('fcInVn').value||'').trim();
    var cat  = (document.getElementById('fcInCat').value||'').trim() || 'Khác';
    var msg  = document.getElementById('fcMsg');
    if(!term || !en){
      if(msg){ msg.textContent = 'Cần ít nhất "Mặt trước" và "Định nghĩa EN".'; msg.style.color='var(--bad)'; }
      return;
    }
    var mine = loadMine();
    mine.push({id:Date.now(), cat:cat, term:term, en:en, vn:vn});
    saveMine(mine); refresh();
    document.getElementById('fcInTerm').value='';
    document.getElementById('fcInEn').value='';
    document.getElementById('fcInVn').value='';
    if(msg){ msg.textContent = '✓ Đã thêm! Thẻ nằm ở cuối danh sách và được lưu trong trình duyệt này.'; msg.style.color='var(--ok)'; }
  });

  // ---- Export my cards (to paste into assets/my-cards.js) ----
  var exp = document.getElementById('fcExport');
  var expOut = document.getElementById('fcExportOut');
  if(exp && expOut) exp.addEventListener('click', function(){
    var mine = loadMine();
    if(!mine.length){ expOut.style.display='block'; expOut.value='// Bạn chưa thêm thẻ nào.'; return; }
    var text = mine.map(function(c){
      return '  {cat:'+JSON.stringify(c.cat)+', term:'+JSON.stringify(c.term)+', en:'+JSON.stringify(c.en)+', vn:'+JSON.stringify(c.vn)+'},';
    }).join('\n');
    expOut.style.display='block';
    expOut.value = text;
    expOut.focus(); expOut.select();
  });

  // ---- Clear my cards ----
  var clr = document.getElementById('fcClear');
  if(clr) clr.addEventListener('click', function(){
    if(!loadMine().length) return;
    if(window.confirm('Xóa tất cả thẻ bạn đã thêm trong trình duyệt này?')){
      localStorage.removeItem(LSKEY); refresh();
      if(expOut){ expOut.style.display='none'; expOut.value=''; }
    }
  });
})();

// ---------- render quiz (with category filter) ----------
(function(){
  var list = document.getElementById('quizList');
  if(!list) return;
  var keys = ['A','B','C','D','E'];
  var answered = 0, correctCount = 0, total = 0, currentCat = null;
  function esc(s){return String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');}

  var scoreEl  = document.getElementById('quizScore');
  var progEl   = document.getElementById('quizProg');
  var totalEl  = document.getElementById('quizTotal');
  var doneEl   = document.getElementById('quizDone');
  var filterEl = document.getElementById('quizFilter');

  function update(){
    if(scoreEl) scoreEl.textContent = correctCount + ' / ' + total;
    if(progEl) progEl.style.width = (total ? Math.round(answered/total*100) : 0) + '%';
    if(doneEl){
      if(answered===total && total>0){
        var pct = Math.round(correctCount/total*100);
        var msg = pct>=80 ? 'Xuất sắc! Sẵn sàng cho phần này.' : pct>=65 ? 'Đạt ngưỡng — ôn thêm các câu sai.' : 'Cần ôn lại — xem giải thích từng câu.';
        doneEl.innerHTML = '<div class="big">'+pct+'%</div><p><b>'+correctCount+'/'+total+'</b> câu đúng'+(currentCat?(' · chủ đề <b>'+esc(currentCat)+'</b>'):'')+'. '+msg+'</p><button class="btn primary" id="quizReset">Làm lại</button>';
        doneEl.style.display='block';
        var rb = document.getElementById('quizReset');
        if(rb) rb.addEventListener('click', function(){
          renderQuiz(currentCat);
          var sec=document.getElementById('quiz'); if(sec) sec.scrollIntoView({behavior:'smooth',block:'start'});
        });
      } else { doneEl.style.display='none'; }
    }
  }

  function renderQuiz(cat){
    currentCat = cat || null;
    answered = 0; correctCount = 0;
    var items = QUIZ.filter(function(it){ return !currentCat || it.cat===currentCat; });
    total = items.length;
    if(totalEl) totalEl.textContent = total;
    if(doneEl){ doneEl.style.display='none'; doneEl.innerHTML=''; }
    list.innerHTML = '';
    items.forEach(function(item, qi){
      var q = document.createElement('div');
      q.className = 'q';
      var opts = item.opts.map(function(o,oi){
        return '<div class="opt" data-oi="'+oi+'"><span class="key">'+keys[oi]+'</span>'+esc(o)+'</div>';
      }).join('');
      q.innerHTML =
        '<div class="qhead"><span class="qnum">Câu '+(qi+1)+'</span><span class="qcat">'+esc(item.cat)+'</span></div>'+
        '<div class="qtext">'+esc(item.q)+'</div>'+
        '<div class="opts">'+opts+'</div>'+
        '<div class="expl"><span class="lbl">Giải thích</span>'+item.expl+'</div>';
      list.appendChild(q);
      q.querySelectorAll('.opt').forEach(function(opt){
        opt.addEventListener('click', function(){
          if(q.classList.contains('answered')) return;
          q.classList.add('answered');
          var oi = parseInt(opt.dataset.oi,10), correct = item.correct;
          q.querySelectorAll('.opt').forEach(function(o){ if(parseInt(o.dataset.oi,10)===correct) o.classList.add('correct'); });
          if(oi!==correct) opt.classList.add('wrong'); else correctCount++;
          answered++; update();
        });
      });
    });
    if(filterEl) filterEl.querySelectorAll('button').forEach(function(b){
      b.classList.toggle('primary', (b.getAttribute('data-cat')||'') === (currentCat||''));
    });
    update();
  }

  // build filter buttons (Tất cả + từng chủ đề, kèm số câu)
  if(filterEl){
    var order = [], counts = {};
    QUIZ.forEach(function(it){ if(counts[it.cat]===undefined){ counts[it.cat]=0; order.push(it.cat); } counts[it.cat]++; });
    var html = '<span class="flabel">Lọc theo chủ đề:</span>';
    html += '<button class="btn primary" data-cat="">Tất cả ('+QUIZ.length+')</button>';
    order.forEach(function(c){ html += '<button class="btn" data-cat="'+esc(c)+'">'+esc(c)+' ('+counts[c]+')</button>'; });
    filterEl.innerHTML = html;
    filterEl.querySelectorAll('button').forEach(function(b){
      b.addEventListener('click', function(){ renderQuiz(b.getAttribute('data-cat')); });
    });
  }

  renderQuiz(null);
})();
