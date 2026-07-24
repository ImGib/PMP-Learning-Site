# CLAUDE.md

Hướng dẫn cho Claude Code khi làm việc trong repo này. Chi tiết đầy đủ ở `README.md`; ghi chú review nội dung ở `reviews/`.

## Dự án là gì

Site **tự học PMP tiếng Việt** dựa trên **PMBOK Guide 8th Edition (2025)** + slide khóa PMA. Đối tượng: người mới ôn thi PMP. Live: https://imgib.github.io/PMP-Learning-Site/ (GitHub Pages, remote `ImGib/PMP-Learning-Site`).

Nội dung: định nghĩa song ngữ Anh–Việt, công thức thi (EVM, PERT, EMV, CPM/Float, PTA, Little's Law) giải từng bước, flashcard, quiz, mini-quiz tự chấm, từ điển thuật ngữ, Rita Process Chart. Trang HTML nằm ở gốc repo.

## Kiến trúc (buildless — KHÔNG framework, KHÔNG build step)

Vanilla HTML5 + CSS3 (BEM) + JS ES6 Modules. HTML xuất ra tĩnh 100%.

- **CSS** — `assets/styles/`, gom bằng `@import` trong `main.css` (base → layout → components). Tokens `:root` ở `base.css`.
  - **BEM**: `block__element--modifier` (vd `.quiz__opt--correct`, `.callout--warn`). State class dùng `is-*` (`.is-active`, `.is-answered`).
  - **Không inline style**: style lặp lại → utility class trong `utilities.css`; ẩn/hiện dùng thuộc tính `hidden`. Chỉ inline cho giá trị động (bề rộng bar, màu riêng diagram).
- **JS** — `assets/js/`, mỗi trang chỉ nạp `main.js` (`type="module"`). Nó import mọi component/data và **tự no-op** nếu trang không có widget (feature-detect qua element). Không biến toàn cục.
  - `components/`: navbar, sidebar, topic-chrome, flashcards, quiz, mini-quiz, exam, glossary. `data/`: flashcards, quiz, topic-quiz, exam-history, site, my-cards, user-cards (localStorage). `lib/dom.js`: helper esc/qs/qsa/el.
  - Navbar render lúc chạy vào `<div id="site-navbar">`. Trang Phần II data-driven qua `renderTopicChrome()` đọc `<body data-page>`.

### ⚠️ Khối `<head>` chung — sửa đúng chỗ

Nguồn DUY NHẤT ở `assets/partials/head.html`. **KHÔNG sửa tay** khối head trong từng file HTML. Sửa xong chạy:

```bash
node scripts/sync-head.mjs   # dán vào giữa marker <!-- shared-head:start ... end --> ở mọi trang; idempotent
```

`<title>` vẫn riêng từng trang. (Không JS-inject `<head>` được vì gây FOUC → mới cần script này.)

## Dev workflow

- **Không có `package.json`.** Dùng Node trực tiếp cho script rời. Không có test runner cài sẵn.
- **Chạy local**: vì ES6 Modules, KHÔNG mở `file://`. Dùng static server: `python -m http.server 8000` hoặc `npx serve .`.
- **Format**: `.editorconfig` (utf-8, LF, indent 2 space, final newline, trim trailing — trừ `*.md`). Prettier: printWidth 100, singleQuote, trailingComma es5.
- **Commit**: conventional commits (`feat(mini-quiz):`, `refactor(fe):`, `docs(reviews):`).
- File nguồn lớn (PDF/slide/zip) ở `docs-src/` — giữ trên máy, **không commit** (gitignore).

## Định vị nội dung PMBOK 8 (quan trọng khi biên tập)

Cấu trúc thật PMBOK 8 (2025): **6 Principles + 7 Performance Domains** (Governance · Scope · Schedule · **Finance** [đổi từ Cost] · Stakeholders · Resources · Risk) + 5 Focus Areas (tên mới của Process Groups) + quay lại ITTO (40 processes). **Không có domain Quality** (là principle; chỉ còn process "Manage Quality Assurance"). **Procurement = Phụ lục X4**.

Site dùng một số thuật ngữ prep **không có trong văn bản PMBOK 8** nhưng **vẫn đúng cho kỳ thi ECO** (giữ lại, đã disclaimer ở hub `phan-2-chu-de.html`): Rule of Seven, "7 QC tools" (bộ có tên), Secondary/Residual risk, Quality vs Grade, "Control Quality" độc lập, fait accompli/force majeure, NPV/IRR như "project selection framework". → Khi sửa nội dung, giữ định vị **"đúng cho kỳ thi ECO"**, không cứng theo câu chữ PMBOK 8.

## Trạng thái review

- **Đã review kỹ** (`reviews/review-knowledge-areas.md`, ~9.6/10): 8 trang Knowledge Area + `nguyen-ly-pmbok8.html` (trang neo chuẩn nhất).
- **Chưa review**: `phan-1-nen-tang`, `phan-3-agile`, `phan-4-on-thi`, `de-thi-thu`, `flashcard-quiz`, `thuat-ngu`, `cong-thuc-va-vi-du`, `rita-process-chart`.
