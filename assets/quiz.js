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
  {cat:"Agile", term:"Timeboxing", en:"A fixed, short period of time; if work is not finished, you adjust scope (never extend the time).", vn:"Hết giờ thì ĐIỀU CHỈNH SCOPE, không kéo dài thời gian."}
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
   correct:1, expl:"DoD là checklist quy trình áp cho TẤT CẢ items, do team sở hữu. Acceptance Criteria mới là tiêu chí cho MỘT item cụ thể (góc nhìn user, kiểm bằng test)."}
];

// ---------- render flashcards ----------
(function(){
  var grid = document.getElementById('fcGrid');
  if(!grid) return;
  var data = FLASHCARDS.slice();

  function esc(s){return String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');}
  function render(list){
    grid.innerHTML = '';
    list.forEach(function(c){
      var el = document.createElement('div');
      el.className = 'fc';
      el.innerHTML =
        '<div class="fc-inner">'+
          '<div class="fc-face fc-front"><span class="cat">'+esc(c.cat)+'</span>'+
            '<div class="term">'+esc(c.term)+'</div><div class="hint">Bấm để lật ↩</div></div>'+
          '<div class="fc-face fc-back"><p class="en"><b>EN:</b> '+esc(c.en)+'</p><p class="vn">'+esc(c.vn)+'</p></div>'+
        '</div>';
      el.addEventListener('click', function(){ el.classList.toggle('flip'); });
      grid.appendChild(el);
    });
  }
  function shuffle(a){ for(var i=a.length-1;i>0;i--){ var j=(i*7+3)%(i+1); var t=a[i];a[i]=a[j];a[j]=t; } return a; }
  render(data);

  var count = document.getElementById('fcCount');
  if(count) count.textContent = data.length;
  var sh = document.getElementById('fcShuffle');
  if(sh) sh.addEventListener('click', function(){
    // rotate-based shuffle so output stays deterministic-free of Math.random
    var n = data.length, k = (parseInt(sh.dataset.k||'0',10)+5)%n; sh.dataset.k=k;
    data = data.slice(k).concat(data.slice(0,k)); render(data);
  });
  var flipAll = document.getElementById('fcFlip');
  if(flipAll) flipAll.addEventListener('click', function(){
    var open = flipAll.dataset.open==='1';
    document.querySelectorAll('.fc').forEach(function(f){ f.classList.toggle('flip', !open); });
    flipAll.dataset.open = open?'0':'1';
    flipAll.textContent = open ? 'Lật tất cả' : 'Úp tất cả lại';
  });
  var cats = {}; FLASHCARDS.forEach(function(c){cats[c.cat]=(cats[c.cat]||0)+1;});
})();

// ---------- render quiz ----------
(function(){
  var list = document.getElementById('quizList');
  if(!list) return;
  var answered = 0, correctCount = 0, total = QUIZ.length;
  var keys = ['A','B','C','D','E'];
  function esc(s){return String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');}

  var scoreEl = document.getElementById('quizScore');
  var progEl = document.getElementById('quizProg');
  var totalEl = document.getElementById('quizTotal');
  if(totalEl) totalEl.textContent = total;

  function update(){
    if(scoreEl) scoreEl.textContent = correctCount + ' / ' + total;
    if(progEl) progEl.style.width = Math.round(answered/total*100) + '%';
    if(answered===total){
      var done = document.getElementById('quizDone');
      if(done){
        var pct = Math.round(correctCount/total*100);
        var msg = pct>=80 ? 'Xuất sắc! Sẵn sàng cho phần này.' : pct>=65 ? 'Đạt ngưỡng — ôn thêm các câu sai.' : 'Cần ôn lại — xem giải thích từng câu.';
        done.innerHTML = '<div class="big">'+pct+'%</div><p><b>'+correctCount+'/'+total+'</b> câu đúng. '+msg+'</p><button class="btn primary" id="quizReset">Làm lại</button>';
        done.style.display='block';
        document.getElementById('quizReset').addEventListener('click', function(){ location.reload(); });
      }
    }
  }

  QUIZ.forEach(function(item, qi){
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
        var oi = parseInt(opt.dataset.oi,10);
        var correct = item.correct;
        q.querySelectorAll('.opt').forEach(function(o){
          var idx = parseInt(o.dataset.oi,10);
          if(idx===correct) o.classList.add('correct');
        });
        if(oi!==correct) opt.classList.add('wrong');
        else correctCount++;
        answered++;
        update();
      });
    });
  });
  update();
})();
