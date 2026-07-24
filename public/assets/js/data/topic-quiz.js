// data/topic-quiz.js — mini-quiz câu hỏi theo từng trang chủ đề (keyed by <body data-page>).
// Shape mỗi câu: { q, opts:[...], correct: <index>, expl: <HTML string> }
// q & opts hiển thị dạng text (escaped); expl cho phép HTML (<b>, <i>).
export const TOPIC_QUIZ = {
  scope: [
    {
      q: 'Team tự ý thêm tính năng khách hàng KHÔNG yêu cầu vì "cho xịn hơn". Đây là gì?',
      opts: ['Scope creep', 'Gold plating', 'Progressive elaboration', 'Fast tracking'],
      correct: 1,
      expl: '<b>Gold plating</b> = team tự thêm việc vượt yêu cầu. (Scope creep = phạm vi phình ra không kiểm soát, thường do nhiều bên đẩy vào.) Cả hai đều xấu.',
    },
    {
      q: 'Scope Baseline gồm những thành phần nào?',
      opts: [
        'Scope Statement + WBS + WBS Dictionary',
        'Charter + WBS + Schedule',
        'WBS + Requirements + Budget',
        'Scope Statement + RTM + Gantt',
      ],
      correct: 0,
      expl: '<b>Scope Baseline = Scope Statement + WBS + WBS Dictionary</b>, chỉ đổi qua formal change control.',
    },
    {
      q: 'Phần tử ở cấp thấp nhất của WBS — nơi ước tính được chi phí & thời lượng — gọi là gì?',
      opts: ['Activity', 'Work Package', 'Control Account', 'Milestone'],
      correct: 1,
      expl: '<b>Work Package</b> là phần tử thấp nhất của WBS. Activity (thuộc Schedule) được phân rã TỪ work package ở bước Define Activities.',
    },
    {
      q: 'Deliverable vừa được đội QC kiểm tra đạt yêu cầu (verified). Bước nào tạo ra deliverable "accepted"?',
      opts: ['Control Quality', 'Validate Scope', 'Close Project', 'Define Scope'],
      correct: 1,
      expl: '<b>Validate Scope</b> = khách/sponsor ký nghiệm thu → accepted. Thứ tự: Control Quality (verified) TRƯỚC → Validate Scope (accepted) SAU.',
    },
    {
      q: 'Quản lý phiên bản & đặc tả kỹ thuật của sản phẩm ("sản phẩm gồm gì, trông thế nào") là công việc của?',
      opts: [
        'Change Management',
        'Configuration Management',
        'Requirements Management',
        'Quality Control',
      ],
      correct: 1,
      expl: '<b>Configuration Management</b> quản lý đặc tả/phiên bản sản phẩm. Change Management quản lý QUY TRÌNH xử lý yêu cầu thay đổi (qua CCB). Đề hay đánh tráo 2 khái niệm.',
    },
  ],

  schedule: [
    {
      q: 'Mạng: A(3) → C(6) → D(2); B(4) chạy song song giữa A và D. Đường găng và độ dài dự án?',
      opts: ['A→B→D = 9 ngày', 'A→C→D = 11 ngày', 'A→C→D = 9 ngày', 'A→B→D = 11 ngày'],
      correct: 1,
      expl: 'Đường găng là đường DÀI NHẤT: A→C→D = 3+6+2 = <b>11</b> ngày. Nhánh qua B chỉ 3+4+2 = 9 → B có float = 2.',
    },
    {
      q: 'Một hoạt động nằm trên đường găng (critical path). Total Float của nó bằng bao nhiêu?',
      opts: ['Bằng duration', 'Luôn dương', '0', 'Không xác định'],
      correct: 2,
      expl: 'Trên đường găng <b>Float = 0</b> → trễ là trễ cả dự án.',
    },
    {
      q: 'Cần rút ngắn lịch. Bạn THÊM người vào việc trên đường găng. Kỹ thuật này là gì & tác dụng phụ?',
      opts: [
        'Fast tracking — tăng rủi ro',
        'Crashing — tăng chi phí',
        'Resource leveling — đổi critical path',
        'Smoothing — không đổi gì',
      ],
      correct: 1,
      expl: '<b>Crashing</b> = thêm tài nguyên → <b>tăng chi phí</b>. Fast tracking = làm song song các việc vốn tuần tự → tăng rủi ro/rework.',
    },
    {
      q: 'PERT (Beta): O = 4, M = 6, P = 14. Ước lượng kỳ vọng E = ?',
      opts: ['8', '7', '6', '9'],
      correct: 1,
      expl: 'E = (O + 4M + P) / 6 = (4 + 24 + 14) / 6 = 42/6 = <b>7</b>.',
    },
    {
      q: 'Nhận định nào ĐÚNG về resource leveling vs smoothing?',
      opts: [
        'Cả hai đều không đổi critical path',
        'Leveling có thể đổi critical path; smoothing thì không',
        'Smoothing đổi critical path; leveling thì không',
        'Cả hai đều làm rút ngắn dự án',
      ],
      correct: 1,
      expl: '<b>Leveling</b> (khi tài nguyên quá tải/giới hạn) có thể ĐỔI critical path & kéo dài dự án. <b>Smoothing</b> chỉ điều chỉnh trong phạm vi float → KHÔNG đổi ngày kết thúc.',
    },
  ],

  finance: [
    {
      q: 'Cuối kỳ: EV = $30.000, AC = $35.000. Cost Variance và tình trạng?',
      opts: [
        'CV = +$5.000, dưới ngân sách',
        'CV = −$5.000, vượt ngân sách',
        'CV = $65.000, đúng ngân sách',
        'Thiếu dữ liệu',
      ],
      correct: 1,
      expl: 'CV = EV − AC = 30.000 − 35.000 = <b>−$5.000</b> → âm = VƯỢT ngân sách.',
    },
    {
      q: 'BAC = $100.000, CPI = 0.8. Nếu xu hướng chi phí hiện tại tiếp diễn, EAC = ?',
      opts: ['$80.000', '$100.000', '$125.000', '$120.000'],
      correct: 2,
      expl: 'Xu hướng tiếp diễn → EAC = BAC / CPI = 100.000 / 0.8 = <b>$125.000</b>. Đây là công thức mặc định khi đề không nói gì thêm.',
    },
    {
      q: 'Một rủi ro ĐÃ ĐƯỢC XÁC ĐỊNH có thể phát sinh chi phí. Dùng dự phòng nào, ai kiểm soát?',
      opts: [
        'Management Reserve — lãnh đạo duyệt',
        'Contingency Reserve — PM dùng được',
        'Management Reserve — PM dùng được',
        'Không cần dự phòng',
      ],
      correct: 1,
      expl: 'Rủi ro ĐÃ BIẾT → <b>Contingency Reserve</b>, nằm trong cost baseline, PM dùng. Management Reserve dành cho rủi ro CHƯA biết, ngoài baseline, cần lãnh đạo duyệt.',
    },
    {
      q: 'Chọn giữa 2 dự án: A có NPV = $50.000, B có NPV = $80.000. Nên chọn dự án nào?',
      opts: [
        'A — NPV thấp hơn thì an toàn',
        'B — NPV cao hơn',
        'Không đủ dữ liệu nếu chưa biết chi phí',
        'Chọn dự án có payback ngắn hơn',
      ],
      correct: 1,
      expl: 'NPV càng CAO càng tốt → chọn <b>B</b>. NPV đã trừ vốn & đã chiết khấu, nên không cần trừ chi phí lần nữa.',
    },
    {
      q: 'Gần cuối dự án, SPI ≈ 1.0 nhưng thực tế đang trễ deadline. Nên tin SPI để báo cáo tiến độ?',
      opts: [
        'Có, SPI = 1 nghĩa là đúng tiến độ',
        'Không — cuối dự án SPI luôn tiến về 1; phải nhìn critical path & ngày mốc',
        'Có, vì SPI đo bằng thời gian',
        'Không đủ dữ liệu',
      ],
      correct: 1,
      expl: 'Về cuối, mọi PV dần được "earned" nên <b>SPI luôn → 1 dù trễ</b>. SPI đo bằng TIỀN, không đo thời gian → phải nhìn critical path & milestone.',
    },
  ],

  quality: [
    {
      q: 'Control chart: 7 điểm liên tiếp cùng một phía đường trung bình, dù vẫn trong control limits. Kết luận?',
      opts: [
        'Bình thường, bỏ qua',
        'Out of control — Rule of Seven, cần điều tra (special cause)',
        'Cần nới rộng control limits',
        'Lỗi do đo lường',
      ],
      correct: 1,
      expl: '<b>Rule of Seven</b>: 7 điểm liên tiếp cùng phía mean → có <b>special/assignable cause</b>, phải điều tra dù còn trong control limits.',
    },
    {
      q: 'Khách hàng phát hiện lỗi sau khi nhận sản phẩm (bảo hành, kiện tụng). Đây là loại chi phí nào?',
      opts: [
        'Prevention cost',
        'Appraisal cost',
        'Internal failure cost',
        'External failure cost',
      ],
      correct: 3,
      expl: '<b>External failure</b> = lỗi do KHÁCH phát hiện — đắt & nguy hiểm nhất. Internal failure = lỗi do dự án tự phát hiện (rework/scrap).',
    },
    {
      q: 'Hoạt động "audit độc lập xem team có tuân đúng quy trình chất lượng không" thuộc về?',
      opts: [
        'Quality Control (QC)',
        'Quality Assurance / Manage Quality (QA)',
        'Validate Scope',
        'Control Costs',
      ],
      correct: 1,
      expl: 'Audit quy trình = <b>QA (Manage Quality)</b> — hướng process, phòng ngừa. QC = đo/inspection sản phẩm để bắt lỗi.',
    },
    {
      q: 'Cost of Conformance gồm những loại chi phí nào?',
      opts: [
        'Internal + External failure',
        'Prevention + Appraisal',
        'Prevention + Internal failure',
        'Appraisal + External failure',
      ],
      correct: 1,
      expl: '<b>Conformance = Prevention + Appraisal</b> (chủ động chi để tránh lỗi). Nonconformance = Internal + External failure (bị động trả giá).',
    },
    {
      q: 'Đội dev tự thêm nhiều tính năng "vượt mong đợi" mà khách không yêu cầu. Theo PMI, điều này?',
      opts: [
        'Tốt — làm hài lòng khách',
        'Sai — là gold plating, tốn chi phí & tăng rủi ro',
        'Là scope creep do khách yêu cầu',
        'Là một phần của Kaizen',
      ],
      correct: 1,
      expl: 'Chất lượng = đáp ứng ĐÚNG yêu cầu, không vượt. Tự thêm tính năng = <b>gold plating</b> → sai theo PMI.',
    },
  ],

  resource: [
    {
      q: 'Team mới lập đang va chạm gay gắt về cách làm & quyền lực, năng suất thấp. Đây là giai đoạn Tuckman nào?',
      opts: ['Forming', 'Storming', 'Norming', 'Performing'],
      correct: 1,
      expl: '<b>Storming</b> = xung đột cao nhất, năng suất thấp. PM cần coaching/hòa giải, kiên nhẫn — đừng hoảng, đây là giai đoạn tự nhiên.',
    },
    {
      q: 'Hai thành viên mâu thuẫn kỹ thuật. Cách xử lý xung đột PMI ưu tiên NHẤT?',
      opts: [
        'Compromise (mỗi bên nhường một ít)',
        'Collaborate / Problem-solve',
        'Force (PM quyết thay)',
        'Withdraw (hoãn lại)',
      ],
      correct: 1,
      expl: '<b>Collaborate/Problem-solve = Win-Win</b>, PMI ưu tiên. Đừng nhầm Compromise là tốt nhất — nó là Lose-Lose.',
    },
    {
      q: 'Nhân viên phàn nàn lương thấp. Theo Herzberg, tăng lương sẽ?',
      opts: [
        'Tạo động lực lâu dài',
        'Chỉ giảm bất mãn — lương là hygiene factor, không tạo động lực thật',
        'Không ảnh hưởng gì',
        'Là motivator mạnh nhất',
      ],
      correct: 1,
      expl: 'Lương là <b>hygiene factor</b>: thiếu thì bất mãn, có cũng không "sướng thêm". Muốn tạo động lực thật phải dùng motivator (ghi nhận, trách nhiệm, phát triển). Đáp án "tăng lương" thường là bẫy.',
    },
    {
      q: 'Trong ma trận RACI, mỗi công việc (hàng) được có bao nhiêu chữ A (Accountable)?',
      opts: ['Đúng 1', 'Ít nhất 2', 'Bao nhiêu cũng được', '0 hoặc 1'],
      correct: 0,
      expl: 'Mỗi task <b>đúng MỘT chữ A</b> (một người chịu trách nhiệm cuối). Có thể nhiều R (người làm).',
    },
    {
      q: 'Team bị chặn bởi một rào cản ngoài tầm họ. Một servant leader nên làm gì?',
      opts: [
        'Ra lệnh & giám sát chặt từng người',
        'Tập trung gỡ rào cản & tạo điều kiện cho team tự xử lý',
        'Chờ team tự giải quyết, không can thiệp',
        'Báo cáo lên sếp và chờ chỉ đạo',
      ],
      correct: 1,
      expl: '<b>Servant leadership</b> = phục vụ team trước: gỡ impediment, tạo môi trường, trao quyền. Đáp án "ra lệnh/micromanage" thường SAI.',
    },
  ],

  risk: [
    {
      q: 'Một rủi ro vượt thẩm quyền & phạm vi của PM để xử lý. Chiến lược ứng phó phù hợp?',
      opts: ['Mitigate', 'Transfer', 'Escalate', 'Accept'],
      correct: 2,
      expl: '<b>Escalate</b> khi rủi ro ngoài thẩm quyền/scope PM. Sau đó team không xử lý tiếp nhưng vẫn ghi trong register; owner cấp cao hơn chịu trách nhiệm.',
    },
    {
      q: 'Threat: xác suất 20%, tác động −$10.000. Expected Monetary Value (EMV) = ?',
      opts: ['−$2.000', '+$2.000', '−$10.000', '−$50.000'],
      correct: 0,
      expl: 'EMV = P × I = 0.2 × (−$10.000) = <b>−$2.000</b>. Threat mang impact ÂM (tổn thất).',
    },
    {
      q: 'Sau khi triển khai một response, một rủi ro MỚI phát sinh trực tiếp từ chính response đó. Gọi là?',
      opts: ['Residual risk', 'Secondary risk', 'Overall risk', 'Trigger'],
      correct: 1,
      expl: '<b>Secondary risk</b> = rủi ro mới sinh ra TỪ một response. (Residual risk = rủi ro CÒN LẠI sau khi đã xử lý.)',
    },
    {
      q: 'Với threat dùng "Avoid". Chiến lược ĐỐI XỨNG cho một opportunity là gì?',
      opts: ['Share', 'Enhance', 'Exploit', 'Accept'],
      correct: 2,
      expl: 'Cặp triệt để: <b>Avoid ↔ Exploit</b> (đưa xác suất về 0% hoặc ~100%). Transfer↔Share, Mitigate↔Enhance.',
    },
    {
      q: 'Bạn lập sẵn một contingency plan & contingency reserve để dùng nếu rủi ro xảy ra. Đây là?',
      opts: [
        'Passive acceptance',
        'Active acceptance',
        'Mitigation',
        'Avoidance',
      ],
      correct: 1,
      expl: '<b>Active acceptance</b> = chuẩn bị sẵn contingency plan + reserve. Passive acceptance = không làm gì trước, xử lý khi xảy ra.',
    },
  ],

  stakeholder: [
    {
      q: 'Dự án đang có 5 người. Sếp thêm 1 người nữa. Số kênh giao tiếp TĂNG THÊM bao nhiêu?',
      opts: ['1', '5', '15', '6'],
      correct: 1,
      expl: 'N(N−1)/2: 5 người = 10 kênh; 6 người = 15 kênh → thêm <b>5</b>. Nhớ lấy HIỆU, đừng lấy 15.',
    },
    {
      q: 'Một stakeholder có QUYỀN LỰC cao nhưng MỨC QUAN TÂM thấp. Chiến lược trên Power-Interest Grid?',
      opts: ['Manage Closely', 'Keep Satisfied', 'Keep Informed', 'Monitor'],
      correct: 1,
      expl: 'Quyền cao / quan tâm thấp → <b>Keep Satisfied</b>. Quyền cao + quan tâm cao mới là Manage Closely.',
    },
    {
      q: 'Salience Model phân loại stakeholder theo BA thuộc tính nào?',
      opts: [
        'Power · Interest · Attitude',
        'Power · Legitimacy · Urgency',
        'Power · Influence · Impact',
        'Interest · Urgency · Proximity',
      ],
      correct: 1,
      expl: '<b>Salience = Power · Legitimacy · Urgency</b> (3 vòng tròn P.L.U.). Khác Power-Interest Grid chỉ 2 trục.',
    },
    {
      q: 'Phương thức giao tiếp nào HIỆU QUẢ nhất vì có phản hồi hai chiều tức thì?',
      opts: ['Push (email)', 'Pull (portal)', 'Interactive (họp/gọi)', 'Báo cáo văn bản'],
      correct: 2,
      expl: '<b>Interactive</b> (họp, gọi điện) hai chiều real-time, có feedback → hiệu quả nhất. Push đảm bảo đã gửi nhưng không chắc đã hiểu.',
    },
    {
      q: 'Theo quy tắc Mehrabian (7-38-55) trong giao tiếp cảm xúc face-to-face, ngôn ngữ cơ thể chiếm bao nhiêu?',
      opts: ['7%', '38%', '55%', '93%'],
      correct: 2,
      expl: '7% từ ngữ · 38% giọng điệu · <b>55% ngôn ngữ cơ thể</b> → nonverbal ~55%, nên gặp trực tiếp truyền đạt hiệu quả nhất.',
    },
  ],

  procurement: [
    {
      q: 'Yêu cầu công việc CHƯA rõ ràng, khó ước lượng chính xác. Loại hợp đồng phù hợp nhất?',
      opts: [
        'Firm Fixed Price (FFP)',
        'Cost Reimbursable (CR)',
        'Fixed Price Incentive Fee (FPIF)',
        'FP-EPA',
      ],
      correct: 1,
      expl: 'Yêu cầu mờ → <b>Cost Reimbursable</b> (buyer gánh rủi ro chi phí). Rõ → Fixed Price. Gấp/chưa có SOW → T&M.',
    },
    {
      q: 'Loại hợp đồng nào khiến SELLER chịu rủi ro chi phí CAO NHẤT?',
      opts: ['CPFF', 'CPPC', 'FFP (Firm Fixed Price)', 'T&M'],
      correct: 2,
      expl: '<b>FFP</b>: giá cố định, seller gánh mọi phát sinh → seller chịu rủi ro cao nhất. Ngược lại CPPC → buyer chịu cao nhất.',
    },
    {
      q: 'Trong hợp đồng CPPC (Cost Plus Percentage of Cost), vì sao buyer chịu rủi ro cao nhất?',
      opts: [
        'Vì giá cố định không đổi được',
        'Vì seller càng chi nhiều càng lời nhiều',
        'Vì seller phải gánh mọi phát sinh',
        'Vì không có phí (fee)',
      ],
      correct: 1,
      expl: 'CPPC = cost + % của cost → <b>seller càng chi càng lời</b>, không có động lực tiết kiệm → buyer rủi ro cao nhất (loại ít dùng).',
    },
    {
      q: 'Đối tác tuyên bố "điều khoản này đã chốt rồi, không thể thay đổi" để ép bạn trong đàm phán. Đây là chiêu?',
      opts: ['Fait accompli', 'Force majeure', 'Fair and reasonable', 'Good faith'],
      correct: 0,
      expl: '<b>Fait accompli</b> = "việc đã rồi" — chiêu đàm phán tuyên bố vấn đề đã quyết. Cần nhận diện để không bị ép.',
    },
    {
      q: 'Loại Procurement SOW nào chỉ rõ CHÍNH XÁC seller phải làm gì (khiến BUYER gánh rủi ro thiết kế)?',
      opts: ['Performance SOW', 'Functional SOW', 'Design SOW', 'Master Service Agreement'],
      correct: 2,
      expl: '<b>Design SOW</b> = nói chính xác phải làm thế nào → buyer chịu rủi ro thiết kế. Performance (nêu kết quả) & Functional (nêu đặc tính) đẩy nhiều rủi ro sang seller.',
    },
  ],
};
