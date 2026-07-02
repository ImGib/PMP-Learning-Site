// data/quiz.js — quiz question bank (extracted)
export const QUIZ = [
  {
    cat: 'Finance',
    q: 'Cuối tháng, dự án có EV = $30,000 và AC = $35,000. Cost Variance (CV) và tình trạng chi phí là gì?',
    opts: [
      'CV = +$5,000, dưới ngân sách',
      'CV = −$5,000, vượt ngân sách',
      'CV = $65,000, đúng ngân sách',
      'Không đủ dữ liệu để tính',
    ],
    correct: 1,
    expl: 'CV = EV − AC = 30,000 − 35,000 = −$5,000. Âm nghĩa là VƯỢT ngân sách (over budget).',
  },

  {
    cat: 'Finance',
    q: 'SPI của dự án = 0.8. Điều này có nghĩa gì?',
    opts: [
      'Dự án đang vượt tiến độ',
      'Dự án đúng tiến độ',
      'Dự án đang chậm tiến độ',
      'Dự án vượt ngân sách',
    ],
    correct: 2,
    expl: 'SPI = EV/PV. SPI < 1 nghĩa là giá trị đạt được thấp hơn kế hoạch → CHẬM tiến độ. (SPI liên quan tiến độ, không phải chi phí.)',
  },

  {
    cat: 'Finance',
    q: 'Một rủi ro ĐÃ ĐƯỢC XÁC ĐỊNH có thể phát sinh chi phí. Bạn nên lập khoản dự phòng nào, và ai kiểm soát nó?',
    opts: [
      'Management Reserve — lãnh đạo kiểm soát',
      'Contingency Reserve — PM kiểm soát',
      'Management Reserve — PM kiểm soát',
      'Không cần dự phòng',
    ],
    correct: 1,
    expl: 'Rủi ro ĐÃ BIẾT (known risk) → Contingency Reserve, nằm trong cost baseline, PM dùng được. Management Reserve dành cho rủi ro CHƯA biết và do lãnh đạo kiểm soát.',
  },

  {
    cat: 'Scope',
    q: "Lập trình viên tự ý thêm một tính năng 'cho đẹp' mà khách hàng không hề yêu cầu. Đây là gì?",
    opts: ['Scope Creep', 'Progressive Elaboration', 'Gold Plating', 'Rolling Wave Planning'],
    correct: 2,
    expl: 'Team tự thêm tính năng khách KHÔNG yêu cầu = Gold Plating. Scope Creep là phạm vi phình ra không kiểm soát (thường do yêu cầu thay đổi từ nhiều bên).',
  },

  {
    cat: 'Schedule',
    q: 'Trong sơ đồ mạng, một milestone có duration bằng bao nhiêu?',
    opts: ['1 ngày', 'Bằng activity dài nhất', '0 (bằng không)', 'Tùy loại dự án'],
    correct: 2,
    expl: 'Milestone là một MỐC (sự kiện quan trọng), không tiêu tốn thời gian → duration = 0.',
  },

  {
    cat: 'Schedule',
    q: 'Dự án bị chậm. Bạn thêm nhân sự vào các hoạt động trên đường găng để rút ngắn thời gian. Kỹ thuật này là gì và tác dụng phụ?',
    opts: [
      'Fast Tracking — tăng chi phí',
      'Crashing — tăng chi phí',
      'Crashing — tăng rủi ro/rework',
      'Resource Leveling — không đổi gì',
    ],
    correct: 1,
    expl: 'Thêm tài nguyên (nhân lực) để rút ngắn = Crashing, hầu như luôn LÀM TĂNG CHI PHÍ. Fast Tracking là làm song song các việc (tăng rủi ro/rework).',
  },

  {
    cat: 'Schedule',
    q: 'Kỹ thuật tối ưu tài nguyên nào CÓ THỂ làm thay đổi đường găng (critical path)?',
    opts: ['Resource Smoothing', 'Resource Leveling', 'Fast Tracking', 'Cả hai đều không đổi'],
    correct: 1,
    expl: 'Resource Leveling dùng khi tài nguyên giới hạn/quá tải và THƯỜNG làm đường găng dài ra (thay đổi). Resource Smoothing chỉ điều chỉnh trong phạm vi float nên KHÔNG đổi đường găng.',
  },

  {
    cat: 'Quality',
    q: 'Trên control chart, bạn thấy 7 điểm liên tiếp nằm cùng một phía của đường trung bình dù vẫn trong control limits. Kết luận?',
    opts: [
      'Quy trình bình thường, bỏ qua',
      'Quy trình mất kiểm soát, cần điều tra',
      'Cần nới control limits',
      'Đây là specification limit',
    ],
    correct: 1,
    expl: 'Rule of Seven: 7 điểm liên tiếp cùng phía của mean báo hiệu quy trình OUT OF CONTROL (có special/assignable cause), dù vẫn nằm trong control limits.',
  },

  {
    cat: 'Quality',
    q: "Hoạt động 'đào tạo, chuẩn hóa quy trình để NGĂN lỗi phát sinh' thuộc về?",
    opts: [
      'Quality Control (QC)',
      'Cost of Nonconformance',
      'Quality Assurance (QA)',
      'External failure cost',
    ],
    correct: 2,
    expl: 'Ngăn ngừa lỗi ngay trong quy trình, làm đúng cách = Quality Assurance (preventive, process-focused). QC là kiểm tra sản phẩm để phát hiện lỗi (corrective).',
  },

  {
    cat: 'Risk',
    q: 'Một rủi ro đã được nhận diện trước đây giờ ĐÃ THỰC SỰ XẢY RA. Bây giờ nó được gọi là gì?',
    opts: ['Trigger', 'Issue', 'Residual risk', 'Secondary risk'],
    correct: 1,
    expl: 'Rủi ro đã xảy ra (uncertainty đã thành certainty) → trở thành Issue, cần xử lý ngay. Trigger chỉ là dấu hiệu cảnh báo rủi ro sắp xảy ra.',
  },

  {
    cat: 'Risk',
    q: 'Rủi ro (threat): xác suất 30%, tác động −$50,000. EMV bằng bao nhiêu?',
    opts: ['−$15,000', '−$50,000', '−$1,500', '+$15,000'],
    correct: 0,
    expl: 'EMV = Probability × Impact = 0.30 × (−50,000) = −$15,000. Threat mang dấu âm.',
  },

  {
    cat: 'Risk',
    q: 'Bạn mua bảo hiểm để chuyển hậu quả tài chính của một threat sang bên thứ ba. Với một OPPORTUNITY, chiến lược tương đương (đối xứng) là gì?',
    opts: ['Exploit', 'Enhance', 'Share', 'Mitigate'],
    correct: 2,
    expl: 'Transfer (threat) đối xứng với Share (opportunity) — đều là giao cho bên thứ ba. Cặp còn lại: Avoid↔Exploit, Mitigate↔Enhance.',
  },

  {
    cat: 'People',
    q: 'Hai thành viên trong team xung đột gay gắt về giải pháp kỹ thuật. Theo PMI, PM nên làm gì TRƯỚC TIÊN?',
    opts: [
      'Escalate ngay cho sponsor',
      'Yêu cầu cả hai làm thêm giờ',
      'Gặp cả hai, tìm nguyên nhân gốc và hướng tới giải pháp win-win',
      'Tự chọn giải pháp và ra lệnh (Force)',
    ],
    correct: 2,
    expl: 'PMI Mindset: chủ động xử lý, dùng interpersonal skills, tìm ROOT CAUSE, hướng tới Collaborate/Problem-solving (win-win). Escalate và Force là lựa chọn cuối/kém ưu tiên.',
  },

  {
    cat: 'People',
    q: 'Để tạo động lực dài hạn cho team, theo lý thuyết Herzberg, yếu tố nào KHÔNG phải là động lực thực sự?',
    opts: [
      'Sự ghi nhận (recognition)',
      'Tăng lương',
      'Cơ hội phát triển nghề nghiệp',
      'Trách nhiệm lớn hơn',
    ],
    correct: 1,
    expl: "Theo Herzberg, LƯƠNG là 'hygiene factor' — thiếu thì bất mãn nhưng có cũng không tạo động lực bền vững. Motivators thật sự: ghi nhận, phát triển, trách nhiệm.",
  },

  {
    cat: 'Stakeholder',
    q: 'Nhóm dự án có 6 người, bổ sung thêm 2 người. Số kênh giao tiếp TĂNG THÊM là bao nhiêu?',
    opts: ['28 kênh', '13 kênh', '15 kênh', '2 kênh'],
    correct: 1,
    expl: "6 người: 6×5/2 = 15. 8 người: 8×7/2 = 28. Tăng thêm = 28 − 15 = 13 kênh. Câu 'tăng thêm' luôn lấy HIỆU.",
  },

  {
    cat: 'Procurement',
    q: 'Yêu cầu công việc còn mơ hồ, khó ước tính chính xác chi phí. Loại hợp đồng nào phù hợp nhất?',
    opts: [
      'Firm Fixed Price (FFP)',
      'Cost Reimbursable (CR)',
      'Không ký hợp đồng',
      'Fixed Price Incentive Fee (FPIF)',
    ],
    correct: 1,
    expl: 'Yêu cầu chưa rõ → Cost Reimbursable (buyer chịu rủi ro nhiều hơn nhưng linh hoạt). Fixed Price hợp khi yêu cầu ĐÃ RÕ ràng.',
  },

  {
    cat: 'Agile',
    q: 'Team A có velocity trung bình 25, Team B có 39. Kết luận nào ĐÚNG?',
    opts: [
      'Team B làm việc hiệu quả hơn Team A',
      'Team B nhanh hơn 56%',
      'Không thể so sánh velocity giữa 2 team',
      'Team A cần tăng story point',
    ],
    correct: 2,
    expl: 'Story point là đơn vị TƯƠNG ĐỐI, mỗi team tự định nghĩa riêng. Vì vậy KHÔNG được so sánh velocity giữa các team — đây là bẫy rất phổ biến.',
  },

  {
    cat: 'Agile',
    q: "Điều gì mô tả đúng 'Definition of Done' (DoD)?",
    opts: [
      'Tiêu chí nghiệm thu cho một user story cụ thể',
      'Checklist quy trình áp dụng cho MỌI backlog item, do team thống nhất',
      'Danh sách rủi ro của sprint',
      'Hợp đồng với khách hàng',
    ],
    correct: 1,
    expl: 'DoD là checklist quy trình áp cho TẤT CẢ items, do team sở hữu. Acceptance Criteria mới là tiêu chí cho MỘT item cụ thể (góc nhìn user, kiểm bằng test).',
  },

  {
    cat: 'Manifesto',
    q: 'Theo Agile Manifesto, cặp giá trị nào thể hiện ĐÚNG điều được coi trọng HƠN?',
    opts: [
      'Comprehensive documentation hơn working software',
      'Following a plan hơn responding to change',
      'Working software hơn comprehensive documentation',
      'Contract negotiation hơn customer collaboration',
    ],
    correct: 2,
    expl: '4 giá trị đề cao VẾ TRÁI: Individuals & interactions, Working software, Customer collaboration, Responding to change. Vế phải vẫn có giá trị nhưng ưu tiên thấp hơn.',
  },

  {
    cat: 'Manifesto',
    q: 'Theo 12 nguyên tắc Agile, thước đo tiến độ CHÍNH của dự án là gì?',
    opts: [
      'Số trang tài liệu đã hoàn thành',
      'Working software — sản phẩm chạy được',
      'Số giờ công đã bỏ ra',
      'Phần trăm kế hoạch đã bám đúng',
    ],
    correct: 1,
    expl: "Nguyên tắc #7: 'Working software is the primary measure of progress' — đo bằng sản phẩm dùng được, không phải tài liệu hay giờ công.",
  },

  {
    cat: 'Manifesto',
    q: 'Khách hàng muốn thay đổi yêu cầu ở giai đoạn khá muộn. Theo tinh thần Agile, nhóm nên làm gì?',
    opts: [
      'Từ chối vì đã qua giai đoạn planning',
      'Đón nhận thay đổi và biến nó thành lợi thế cạnh tranh cho khách',
      'Bắt khách ký change request kèm phí phạt trước',
      'Hoãn tất cả thay đổi sang một dự án khác',
    ],
    correct: 1,
    expl: "Nguyên tắc #2: 'Welcome changing requirements, even late in development' — Agile đón nhận thay đổi để tạo lợi thế cho khách.",
  },

  {
    cat: 'Scrum',
    q: 'Trong Scrum, ai đóng vai servant leader — gỡ bỏ trở ngại (impediment) và bảo vệ nhóm, nhưng KHÔNG giao việc?',
    opts: ['Product Owner', 'Scrum Master', 'Project Sponsor', 'Functional Manager'],
    correct: 1,
    expl: 'Scrum Master là servant leader: gỡ impediment, huấn luyện Scrum, bảo vệ nhóm. KHÔNG phải sếp và KHÔNG giao việc.',
  },

  {
    cat: 'Scrum',
    q: 'Ai chịu trách nhiệm sắp xếp thứ tự ưu tiên Product Backlog để tối đa hóa giá trị sản phẩm?',
    opts: ['Scrum Master', 'Developers', 'Product Owner', 'Change Control Board'],
    correct: 2,
    expl: "Product Owner sở hữu &amp; ưu tiên Product Backlog, là 'tiếng nói khách hàng', quyết định LÀM GÌ.",
  },

  {
    cat: 'Scrum',
    q: 'Đâu KHÔNG phải mục đích của Daily Scrum (họp đứng hằng ngày)?',
    opts: [
      'Đồng bộ công việc, hướng tới Sprint Goal',
      'Nêu các impediment đang gặp',
      'Báo cáo tiến độ cho sếp và giải quyết mọi vấn đề kỹ thuật ngay tại chỗ',
      'Giúp nhóm tự điều chỉnh kế hoạch trong ngày',
    ],
    correct: 2,
    expl: 'Daily Scrum KHÔNG phải họp báo cáo cho cấp trên, cũng KHÔNG phải họp giải quyết vấn đề chi tiết — vấn đề kỹ thuật bàn riêng sau (~15 phút, do nhóm tự chủ).',
  },

  {
    cat: 'Scrum',
    q: 'Cuối Sprint có hai sự kiện. Sự kiện nào tập trung cải tiến CÁCH LÀM VIỆC của nhóm (quy trình)?',
    opts: ['Sprint Review', 'Sprint Retrospective', 'Sprint Planning', 'Backlog Refinement'],
    correct: 1,
    expl: 'Retrospective soi PROCESS (cách làm việc → cải tiến). Sprint Review soi PRODUCT (demo Increment cho stakeholder, điều chỉnh backlog). Nhớ: Review=product, Retro=process.',
  },

  {
    cat: 'Scrum',
    q: 'Một Sprint trong Scrum có đặc điểm nào đúng?',
    opts: [
      "Timeboxed 1–4 tuần, độ dài cố định, là 'hộp chứa' các sự kiện khác",
      'Kéo dài 1–6 tháng, gia hạn nếu chưa xong',
      'Không giới hạn thời gian, xong việc thì kết thúc',
      'Luôn đúng 30 ngày và không thể thay đổi',
    ],
    correct: 0,
    expl: 'Sprint là iteration timeboxed 1–4 tuần với độ dài cố định; nếu không kịp thì điều chỉnh scope chứ không kéo dài. Sprint chứa Planning, Daily, Review, Retro.',
  },

  {
    cat: 'Scrum',
    q: 'Cam kết (commitment) gắn với Sprint Backlog là gì?',
    opts: ['Product Goal', 'Definition of Done', 'Sprint Goal', 'Definition of Ready'],
    correct: 2,
    expl: 'Product Backlog ↔ Product Goal; Sprint Backlog ↔ Sprint Goal; Increment ↔ Definition of Done.',
  },
  {
    cat: 'Finance',
    q: 'Cuối tuần 2: kế hoạch xong 2 giai đoạn ($500/giai đoạn), thực tế xong 3 giai đoạn, đã chi $1700. EV bằng bao nhiêu?',
    opts: ['$1000', '$1500', '$1700', '$2000'],
    correct: 1,
    expl: 'EV = giá trị (theo kế hoạch) của công việc ĐÃ HOÀN THÀNH = 3 × 500 = 1500. PV=1000 (2 giai đoạn), AC=1700.',
  },
  {
    cat: 'Finance',
    q: 'Với EV=1500, PV=1000, AC=1700: SV và CV là bao nhiêu?',
    opts: ['SV=+500, CV=-200', 'SV=-200, CV=+500', 'SV=+500, CV=+200', 'SV=-500, CV=-200'],
    correct: 0,
    expl: 'SV=EV-PV=1500-1000=+500 (nhanh hơn). CV=EV-AC=1500-1700=-200 (vượt chi).',
  },
  {
    cat: 'Finance',
    q: 'Dự án BAC=$100k, EV=$40k, AC=$50k, sai lệch được cho là điển hình. EAC bằng bao nhiêu?',
    opts: ['$110k', '$125k', '$90k', '$100k'],
    correct: 1,
    expl: 'Sai lệch điển hình: EAC=BAC/CPI. CPI=EV/AC=40/50=0.8. EAC=100/0.8=125k.',
  },
  {
    cat: 'Finance',
    q: 'Loại dự phòng nào cho rủi ro CHƯA BIẾT và nằm NGOÀI cost baseline?',
    opts: ['Contingency reserve', 'Management reserve', 'Cost baseline', 'Control account'],
    correct: 1,
    expl: 'Management reserve = unknown-unknowns, ngoài baseline, cần approval để đưa vào. Contingency = known risks, trong baseline.',
  },
  {
    cat: 'Finance',
    q: 'Ước tính ROM ở giai đoạn khởi tạo thường có khoảng nào?',
    opts: ['-5% đến +10%', '-10% đến +25%', '-25% đến +75%', '0% đến +100%'],
    correct: 2,
    expl: 'ROM: -25% đến +75%. Definitive: -5/+10. Chi tiết dần khi dự án tiến triển.',
  },
  {
    cat: 'Risk',
    q: 'Cược: rút được lá cơ thắng $200, ngược lại mất $100. EMV bằng bao nhiêu?',
    opts: ['+$50', '-$25', '+$25', '-$75'],
    correct: 1,
    expl: 'Cơ: 0.25 × 200 = +50; khác: 0.75 × (-100) = -75; EMV = 50-75 = -25. Kỳ vọng âm → không nên chơi.',
  },
  {
    cat: 'Risk',
    q: 'Một rủi ro nằm ngoài phạm vi dự án và vượt thẩm quyền PM. Phản ứng tốt nhất?',
    opts: ['Mitigate', 'Accept', 'Escalate', 'Transfer'],
    correct: 2,
    expl: 'Escalate khi vượt quyền PM / ngoài scope. Sau escalate team không theo dõi tiếp (chỉ ghi nhận).',
  },
  {
    cat: 'Risk',
    q: 'Mua bảo hiểm để phòng một threat là chiến lược nào?',
    opts: ['Avoid', 'Mitigate', 'Transfer', 'Accept'],
    correct: 2,
    expl: 'Transfer = chuyển impact + ownership cho bên thứ ba (bảo hiểm, bảo hành, fixed-price). Không loại bỏ risk, chỉ chuyển gánh nặng.',
  },
  {
    cat: 'Risk',
    q: 'Một rủi ro MỚI phát sinh trực tiếp TỪ việc thực thi một response được gọi là?',
    opts: ['Residual risk', 'Secondary risk', 'Fallback risk', 'Overall risk'],
    correct: 1,
    expl: 'Secondary risk = do response sinh ra. Residual = còn lại sau khi xử lý.',
  },
  {
    cat: 'Risk',
    q: 'Chiến lược nào làm một CƠ HỘI chắc chắn xảy ra (xác suất ~100%)?',
    opts: ['Enhance', 'Share', 'Exploit', 'Accept'],
    correct: 2,
    expl: 'Exploit = đảm bảo cơ hội chắc chắn xảy ra. Enhance chỉ tăng xác suất/impact; Share hợp tác bên khác.',
  },
  {
    cat: 'Risk',
    q: 'Process nào mô hình hóa tác động rủi ro tổng hợp bằng mô phỏng Monte Carlo?',
    opts: [
      'Identify Risks',
      'Perform Qualitative Risk Analysis',
      'Perform Quantitative Risk Analysis',
      'Plan Risk Responses',
    ],
    correct: 2,
    expl: 'Monte Carlo / EMV / decision tree / sensitivity thuộc Quantitative. Qualitative chỉ là P-I matrix chủ quan.',
  },
  {
    cat: 'Risk',
    q: 'Process nào diễn ra ĐẦU TIÊN trong quản lý rủi ro?',
    opts: [
      'Plan Risk Responses',
      'Perform Qualitative Risk Analysis',
      'Plan Risk Management',
      'Monitor Risks',
    ],
    correct: 2,
    expl: 'Thứ tự: Plan Risk Management → Identify → Qualitative → Quantitative → Plan Responses → Implement → Monitor.',
  },
  {
    cat: 'Schedule',
    q: 'Đường găng A-B-C = 14 ngày; đường A-D-C = 12 ngày. Total float của activity D là?',
    opts: ['0 ngày', '2 ngày', '12 ngày', '14 ngày'],
    correct: 1,
    expl: 'Float = đường găng - đường có D = 14-12 = 2. Activity trên đường găng có float 0.',
  },
  {
    cat: 'Schedule',
    q: 'Cho O=10, M=20, P=60 ngày, ước lượng Beta (PERT) là?',
    opts: ['30', '25', '22', '20'],
    correct: 1,
    expl: 'Beta E=(O+4M+P)/6=(10+80+60)/6=150/6=25. (Triangular sẽ là (10+20+60)/3=30).',
  },
  {
    cat: 'Schedule',
    q: 'Làm song song các việc tuần tự trên đường găng để nén lịch là?',
    opts: ['Crashing', 'Fast tracking', 'Resource leveling', 'Resource smoothing'],
    correct: 1,
    expl: 'Fast tracking = làm song song, tăng rủi ro/rework, không tăng chi phí trực tiếp. Crashing = thêm nguồn lực, tăng chi phí.',
  },
  {
    cat: 'Schedule',
    q: 'Kỹ thuật tối ưu nguồn lực nào CÓ THỂ đổi đường găng và ngày kết thúc?',
    opts: ['Resource smoothing', 'Resource leveling', 'Fast tracking', 'Bottom-up estimating'],
    correct: 1,
    expl: 'Leveling có thể đổi đường găng / trễ ngày kết thúc. Smoothing chỉ trong float, không đổi.',
  },
  {
    cat: 'Schedule',
    q: 'Free float chỉ xuất hiện khi...',
    opts: [
      'Activity nằm trên đường găng',
      'Hai hoặc nhiều activity chung một successor',
      'Dự án có float âm',
      'Activity có duration bằng 0',
    ],
    correct: 1,
    expl: 'Free float = trễ không trễ early start của successor; chỉ xuất hiện khi nhiều activity chung một successor.',
  },
  {
    cat: 'Schedule',
    q: 'Milestone nên được gán duration bằng bao nhiêu?',
    opts: ['1 ngày', 'Bằng 0', 'Bằng work package', 'Tùy nguồn lực'],
    correct: 1,
    expl: 'Milestone = một thời điểm, duration = 0. Đánh dấu hoàn thành deliverable/sự kiện quan trọng.',
  },
  {
    cat: 'Schedule',
    q: 'Kỹ thuật ước lượng nào thường CHÍNH XÁC NHẤT nhưng tốn thời gian nhất?',
    opts: ['Analogous', 'Parametric', 'Bottom-up', 'Expert judgment'],
    correct: 2,
    expl: 'Bottom-up chi tiết nhất → chính xác nhất nhưng tốn thời gian/chi phí. Analogous (top-down) nhanh nhưng kém chính xác.',
  },
  {
    cat: 'Quality',
    q: 'Control chart có 7 điểm liên tiếp dưới đường trung bình, đều trong control limits. Điều này cho thấy?',
    opts: [
      'Process ổn định',
      'Process ngoài kiểm soát (rule of seven)',
      'Đã vượt specification limits',
      'Dữ liệu không hợp lệ',
    ],
    correct: 1,
    expl: 'Rule of seven: 7 điểm liên tiếp cùng phía trung bình = out of control dù vẫn trong control limit → cần điều tra (assignable cause).',
  },
  {
    cat: 'Quality',
    q: 'Rework và phế phẩm do đội dự án phát hiện là loại chi phí chất lượng nào?',
    opts: [
      'Prevention costs',
      'Appraisal costs',
      'Internal failure costs',
      'External failure costs',
    ],
    correct: 2,
    expl: 'Lỗi tìm thấy bởi DỰ ÁN (trước giao) = internal failure. Lỗi tìm thấy bởi KHÁCH HÀNG = external (warranty, mất khách).',
  },
  {
    cat: 'Quality',
    q: 'Ai đặt ra specification limits trên control chart?',
    opts: [
      'Đội dự án dựa trên năng lực process',
      'Khách hàng / yêu cầu hợp đồng',
      'QA auditor',
      'Sponsor dựa trên khẩu vị rủi ro',
    ],
    correct: 1,
    expl: 'Spec limits từ khách hàng/hợp đồng. Control limits từ chính process (voice of the process), thường +/-3 sigma.',
  },
  {
    cat: 'Quality',
    q: 'Control Quality tạo ra output nào?',
    opts: ['Accepted deliverables', 'Verified deliverables', 'Sản phẩm cuối', 'Change log'],
    correct: 1,
    expl: 'QC → verified deliverables (kiểm tra nội bộ). Validate Scope → accepted deliverables (khách hàng nghiệm thu chính thức).',
  },
  {
    cat: 'Quality',
    q: 'Process nào mang tính phòng ngừa, hướng process và trải suốt vòng đời?',
    opts: ['Control Quality', 'Manage Quality (QA)', 'Validate Scope', 'Inspection'],
    correct: 1,
    expl: 'QA/Manage Quality = phòng ngừa, hướng process, cả vòng đời. QC = corrective, hướng product, phần testing.',
  },
  {
    cat: 'Quality',
    q: 'Xe Toyota rẻ hơn Rolls Royce nhưng ít lỗi. Theo PMBOK, Toyota có...',
    opts: [
      'Chất lượng thấp, hạng thấp',
      'Chất lượng cao, hạng thấp',
      'Chất lượng thấp, hạng cao',
      'Chất lượng cao, hạng cao',
    ],
    correct: 1,
    expl: 'Ít lỗi = chất lượng cao; ít tính năng/hạng thấp hơn = low grade. Low quality luôn là vấn đề, low grade thì không.',
  },
  {
    cat: 'Quality',
    q: 'Công cụ nào theo nguyên lý 80/20 để ưu tiên nhóm nguyên nhân trọng yếu?',
    opts: ['Histogram', 'Pareto chart', 'Scatter diagram', 'Control chart'],
    correct: 1,
    expl: "Pareto = 80% vấn đề từ 20% nguyên nhân; tách 'critical few'. Fishbone tìm root cause chứ không xếp hạng.",
  },
  {
    cat: 'Procurement',
    q: 'Loại hợp đồng nào đặt RỦI RO CHI PHÍ nhiều nhất lên seller?',
    opts: ['CPFF', 'T&M', 'FFP', 'CPIF'],
    correct: 2,
    expl: 'FFP: giá cố định, seller gánh mọi chi phí vượt → rủi ro seller cao nhất. CPFF: buyer hoàn chi phí → rủi ro buyer cao.',
  },
  {
    cat: 'Stakeholder',
    q: 'Mô hình phân loại stakeholder theo power, urgency và legitimacy là?',
    opts: ['Power/Interest grid', 'Salience model', 'RACI chart', 'Stakeholder cube'],
    correct: 1,
    expl: 'Salience model = Power + Urgency + Legitimacy (3 chiều). Power/Interest grid chỉ 2 chiều.',
  },
  {
    cat: 'Resource',
    q: 'Theo Herzberg, yếu tố nào KHÔNG tạo động lực bền vững (chỉ là hygiene)?',
    opts: ['Sự ghi nhận', 'Lương & điều kiện làm việc', 'Cơ hội phát triển', 'Trách nhiệm'],
    correct: 1,
    expl: 'Lương, điều kiện làm việc là hygiene — thiếu thì bất mãn, có cũng không tạo động lực bền. Motivator: ghi nhận, phát triển, trách nhiệm.',
  },
  {
    cat: 'Agile',
    q: "Checklist áp dụng cho MỌI hạng mục, phải đạt trước khi increment 'done' là?",
    opts: ['Acceptance criteria', 'Definition of Done', 'Product backlog', 'Sprint goal'],
    correct: 1,
    expl: 'DoD = tiêu chuẩn chung mọi story (đã test, review, tích hợp). Acceptance criteria = điều kiện riêng từng story.',
  },
];
