// data/quiz.js — quiz question bank (extracted)
export const QUIZ = [
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
