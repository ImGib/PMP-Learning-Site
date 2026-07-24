# CLAUDE.md

Hướng dẫn cho Claude Code khi làm việc trong repo này. Chi tiết đầy đủ ở `README.md`; ghi chú review nội dung ở `reviews/`.

## Dự án là gì

Site **tự học PMP tiếng Việt** dựa trên **PMBOK Guide 8th Edition (2025)** + slide khóa PMA. Đối tượng: người mới ôn thi PMP. Live: https://imgib.github.io/PMP-Learning-Site/ (GitHub Pages, remote `ImGib/PMP-Learning-Site`).

Nội dung: định nghĩa song ngữ Anh–Việt, công thức thi (EVM, PERT, EMV, CPM/Float, PTA, Little's Law) giải từng bước, flashcard, quiz, mini-quiz tự chấm, từ điển thuật ngữ, Rita Process Chart, game xếp Process Groups.

## Kiến trúc (Astro + TypeScript — static site, KHÔNG framework runtime)

Astro build ra **HTML tĩnh 100%** (không JS framework xuống client). CSS3 (BEM) + JS ES6 Modules dùng lại nguyên. `build.format: 'file'` → xuất `scope.html` (cấu trúc PHẲNG, link tương đối chạy như site tĩnh thường).

- **Trang** — `src/pages/*.astro`. Mỗi trang là wrapper mỏng: import nội dung thân từ `src/content-html/<name>.html` (`?raw`) rồi `<Fragment set:html={content} />`. **Nội dung biên tập nằm ở `src/content-html/`**, KHÔNG ở `.astro`.
  - Trang chủ đề (8 KA) dùng `TopicLayout.astro` (render sidebar/hero/footer TỪ DATA `src/data/site.ts`). Trang khác dùng `PageLayout.astro`.
  - **Tên file/route TIẾNG ANH** (kebab-case): `part-1-foundations`, `part-2-topics`, `part-3-agile`, `part-4-exam-prep`, `principles-pmbok8`, `mock-exam`, `glossary`, `formulas-and-examples`. Chữ HIỂN THỊ vẫn tiếng Việt.
- **Chrome là component** — `BaseLayout.astro` (khối `<head>` DUY NHẤT — thay `head.html`+`sync-head.mjs` cũ), `Navbar.astro` (render lúc build, data ở `src/data/nav.ts`), `TopicLayout.astro`. Sửa 1 nơi, mọi trang cập nhật.
- **CSS** — `public/assets/styles/`, gom bằng `@import` trong `main.css` (base → layout → components). Tokens `:root` ở `base.css`.
  - **BEM**: `block__element--modifier` (vd `.quiz__opt--correct`). State class `is-*` (`.is-active`, `.is-answered`).
  - **Không inline style**: lặp lại → utility class trong `utilities.css`; ẩn/hiện dùng thuộc tính `hidden`. Chỉ inline cho giá trị động (bề rộng bar, màu diagram).
- **JS tương tác** — `public/site.js` (client entry, thay `main.js` cũ): gắn dropdown navbar + gọi `init*` các widget (feature-detect, tự no-op). Import module component ở `public/assets/js/` (`components/`, `data/`, `lib/dom.js`). Navbar/chrome KHÔNG render lại lúc chạy (đã có sẵn từ build → hết FOUC).
- **Base path** — deploy tại `/PMP-Learning-Site/`. Link tài nguyên tuyệt đối PHẢI qua `import.meta.env.BASE_URL` (xem `BaseLayout.astro`); `site.js` import tương đối `./assets/...`. Game standalone `public/pmp-order-game.html` phục vụ verbatim.

## Dev workflow

- **Cài**: `npm install`. **Chạy**: `npm run dev` (hot-reload) · **build**: `npm run build` → `dist/` · **xem thử**: `npm run preview`.
- Dev/preview chạy dưới base → URL dạng `http://localhost:4321/PMP-Learning-Site/scope.html`.
- **Deploy**: push `main` → GitHub Action `.github/workflows/deploy.yml` (withastro/action) tự build + deploy Pages. Không deploy tay.
- **Format**: `.editorconfig` (utf-8, LF, indent 2 space, final newline, trim trailing — trừ `*.md`). Prettier: printWidth 100, singleQuote, trailingComma es5.
- **Commit**: conventional commits (`feat(...)`, `refactor(fe):`, `docs(...)`).
- File nguồn lớn (PDF/slide/zip) ở `docs-src/`; `node_modules/`, `dist/`, `.astro/` — **không commit** (gitignore).

## Định vị nội dung PMBOK 8 (quan trọng khi biên tập)

Cấu trúc thật PMBOK 8 (2025): **6 Principles + 7 Performance Domains** (Governance · Scope · Schedule · **Finance** [đổi từ Cost] · Stakeholders · Resources · Risk) + 5 Focus Areas (tên mới của Process Groups) + quay lại ITTO (40 processes). **Không có domain Quality** (là principle; chỉ còn process "Manage Quality Assurance"). **Procurement = Phụ lục X4**.

Site dùng một số thuật ngữ prep **không có trong văn bản PMBOK 8** nhưng **vẫn đúng cho kỳ thi ECO** (giữ lại, đã disclaimer ở hub `part-2-topics.html`): Rule of Seven, "7 QC tools" (bộ có tên), Secondary/Residual risk, Quality vs Grade, "Control Quality" độc lập, fait accompli/force majeure, NPV/IRR như "project selection framework". → Khi sửa nội dung, giữ định vị **"đúng cho kỳ thi ECO"**, không cứng theo câu chữ PMBOK 8.

## Trạng thái review

- **Đã review kỹ** (`reviews/review-knowledge-areas.md`, ~9.6/10): 8 trang Knowledge Area + `principles-pmbok8.html` (trang neo chuẩn nhất).
- **Chưa review**: `part-1-foundations`, `part-3-agile`, `part-4-exam-prep`, `mock-exam`, `flashcard-quiz`, `glossary`, `formulas-and-examples`, `rita-process-chart`.
