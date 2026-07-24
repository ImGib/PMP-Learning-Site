import { defineConfig } from 'astro/config';

// Output HTML tĩnh 100% (giống site cũ). Không framework.
// build.format: 'file' → xuất `scope.html` (KHÔNG phải `scope/index.html`)
// giữ cấu trúc PHẲNG → mọi link tương đối "schedule.html" chạy như bản cũ.
// site + base: deploy GitHub Pages tại https://imgib.github.io/PMP-Learning-Site/
// (mọi link tài nguyên tuyệt đối phải qua import.meta.env.BASE_URL — xem BaseLayout/site.js).
export default defineConfig({
  site: 'https://imgib.github.io',
  base: '/PMP-Learning-Site',
  build: { format: 'file' },
});
