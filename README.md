# 📘 Học PMP với PMBOK 8

Bộ tài liệu **tự học PMP** (Project Management Professional) dành cho **người mới bắt đầu**, tổng hợp lại từ **PMBOK® Guide – 8th Edition (2025)** và bộ slide khóa PMP. Trình bày bằng **tiếng Việt** kèm **định nghĩa tiếng Anh chuẩn thi**, có flashcard và quiz tương tác để tự kiểm tra.

### 🔗 Xem online

**https://imgib.github.io/PMP-Learning-Site/**

> Mở được trên mọi thiết bị, không cần cài đặt hay đăng nhập.

---

## ✨ Tính năng

- 📖 **7 trang nội dung** đi từ khái niệm gốc → thuật ngữ → công thức → **mẹo ghi nhớ**
- 🇬🇧 **Định nghĩa tiếng Anh** (hộp `EN`) cho mọi thuật ngữ quan trọng — vì kỳ thi PMP bằng tiếng Anh
- 🧮 **Ví dụ tính toán giải từng bước**: EVM, PERT, EMV, Critical Path, Communication Channels, Little's Law, PTA
- 🃏 **Flashcard** lật thẻ (song ngữ Anh–Việt) — học chủ động
- ✅ **Quiz trắc nghiệm** tình huống, tự chấm điểm kèm giải thích ngay
- 🔍 **Từ điển thuật ngữ** song ngữ có ô tìm kiếm
- 📱 Giao diện **sạch, responsive**, đọc tốt trên điện thoại

---

## 🗂️ Cấu trúc

| Trang | Nội dung |
|---|---|
| `index.html` | Trang chủ — giới thiệu, lộ trình học, bản đồ tài liệu |
| `phan-1-nen-tang.html` | **Phần I · Nền tảng** — Dự án/Value/Stakeholder, Portfolio–Program–Project, Development Approaches, Vòng đời & Phase Gate, EEF/OPA, PMO, Governance |
| `phan-2-chu-de.html` | **Phần II · Mục lục** 8 chủ đề (mỗi chủ đề là 1 trang riêng) |
| `scope/schedule/finance/quality/resource/risk/stakeholder/procurement.html` | 8 trang chủ đề tách riêng của Phần II (ngắn, tải nhanh) |
| `phan-3-agile.html` | **Phần III · Agile & Adaptive** — Value-driven Delivery, Adaptive Planning |
| `phan-4-on-thi.html` | **Phần IV · Ôn thi** — Cấu trúc đề, PMI Mindset, chiến lược làm bài |
| `cong-thuc-va-vi-du.html` | **Công thức & ví dụ** giải từng bước |
| `flashcard-quiz.html` | **Flashcard & Quiz** tương tác |
| `thuat-ngu.html` | **Từ điển thuật ngữ** song ngữ Anh–Việt |
| `rita-process-chart.html` | **Rita Process Chart** — 49 process |

---

## 🏗️ Kiến trúc (Component-Based · BEM · ES6 Modules)

Tách bạch **cấu trúc (HTML) · giao diện (CSS/BEM) · logic (JS module)**:

```
assets/
├── partials/head.html      # NGUỒN DUY NHẤT của khối <head> chung (preconnect/fonts/main.css)
├── styles/                 # Giao diện — CSS chia theo component, gom bằng @import, đặt tên BEM
│   ├── main.css            #   entry (@import base → layout → components)
│   ├── base.css            #   design tokens (:root), reset, atom (btn, jargon)
│   ├── layout.css          #   .topbar / .shell / .sidebar / .hero / .section / footer
│   ├── callout.css         #   .callout--note / --warn / --ok / --tip / --en
│   ├── content.css         #   .card / .features / .tbl / .formula / .principle …
│   ├── diagram.css         #   .fig / .d-* / .pchart / .gchip …
│   ├── flashcard.css       #   .flashcard__* (BEM)
│   ├── quiz.css            #   .quiz__* (BEM)
│   ├── glossary.css        #   .glossary__* (BEM)
│   └── utilities.css       #   utility dùng chung (.link-accent, .text-hint) — thay inline style
└── js/                     # Logic — ES6 Modules (import/export), không biến toàn cục
    ├── main.js             #   entry (type="module"): mount chrome + feature-detect widget
    ├── lib/dom.js          #   helper DOM dùng chung (esc, qs, qsa, el)
    ├── components/         #   navbar · sidebar · flashcards · quiz · glossary
    └── data/               #   flashcards · quiz · user-cards (localStorage) · my-cards
```

- **Component dùng chung:** thanh điều hướng (`navbar.js`) được **render lúc chạy** vào `<div id="site-navbar">` trên mọi trang → hết trùng lặp markup.
- **BEM:** `block__element--modifier` (vd `.quiz__opt--correct`, `.flashcard--flipped`, `.callout--warn`); state class dùng `is-*` (`.is-active`, `.is-answered`).
- **Không inline style:** style lặp lại → utility class trong `utilities.css`; ẩn/hiện dùng thuộc tính `hidden`. Chỉ để inline cho **giá trị động** (bề rộng thanh bar theo dữ liệu, màu riêng của từng diagram).
- **ES6 Modules:** mỗi trang chỉ nạp `main.js`; nó `import` các component/data cần dùng và tự bỏ qua nếu trang không có widget tương ứng.
- **`<head>` một nguồn (không build):** phần `<head>` chung (preconnect/fonts/`main.css`) **không** JS-inject được vì sẽ gây FOUC. Thay vào đó sửa `assets/partials/head.html` rồi chạy `node scripts/sync-head.mjs` — script "dán" nội dung vào giữa cặp marker `<!-- shared-head:start … end -->` ở cả 19 trang. `<title>` vẫn nằm riêng từng trang. HTML xuất ra vẫn tĩnh 100%, GitHub Pages không đổi.

---

## 💻 Chạy tại máy (local)

> ⚠️ Vì dùng **ES6 Modules**, KHÔNG mở trực tiếp bằng double-click (`file://`) — trình duyệt chặn module. Hãy chạy qua một server tĩnh:

```bash
python -m http.server 8000      # rồi mở http://localhost:8000
# hoặc:  npx serve .
```

Trên **GitHub Pages** thì chạy bình thường (đã là HTTPS). Không có bước build.

---

## 📚 Nội dung bao phủ

**15 chủ đề** theo khung PMBOK 8 & Exam Content Outline (ECO):

- **3 domain thi:** People (42%) · Process (50%) · Business Environment (8%)
- **Predictive & Agile/Hybrid** (~50/50 như đề thi thật)
- Đầy đủ công thức trọng tâm: **EVM** (SV, CV, SPI, CPI, EAC, ETC, VAC, TCPI), **PERT**, **EMV**, **CPM/Float**, **PTA**, **Little's Law**

---

## ⚙️ Công nghệ

- HTML5 + CSS3 (**BEM**) + JavaScript **ES6 Modules** thuần (vanilla), **không framework, không build**
- Kiến trúc **Component-Based**: chrome dùng chung render runtime; CSS/JS chia theo component
- Font: Newsreader + JetBrains Mono (Google Fonts)
- Triển khai qua **GitHub Pages** (miễn phí)

---

## 📄 Nguồn & Lưu ý

- Tổng hợp từ **PMBOK® Guide – 8th Edition (2025)** và slide khóa PMP (PMA Việt Nam).
- Các con số trong ví dụ mang tính **minh họa để luyện phương pháp**; khi thi luôn đối chiếu **ECO** và tài liệu PMI chính thức.
- **PMP®**, **PMBOK®** và **PMI®** là nhãn hiệu đã đăng ký của **Project Management Institute, Inc.** Tài liệu này chỉ phục vụ **học tập cá nhân**, không liên kết hay được PMI bảo trợ.
- File nguồn (PDF, slide) dung lượng lớn nằm trong **`docs-src/`** — giữ trên máy, **không đưa lên repo** (xem `.gitignore`). Ghi chú rà soát nội dung ở **`reviews/`**.

---

<p align="center"><i>Chúc bạn ôn thi hiệu quả và thi đậu PMP! 🎯</i></p>
