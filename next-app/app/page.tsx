import { readFileSync } from 'node:fs';
import { join } from 'node:path';

// Trang chủ — render ĐÚNG NGUYÊN VĂN content-html/index.html (shell/sidebar/hero/sections/footer
// gốc). Chưa song ngữ (ưu tiên khớp UI/UX trước); toggle VI/EN sẽ thêm sau như trang Scope.
export default function Home() {
  const html = readFileSync(join(process.cwd(), 'content', 'index.vi.html'), 'utf8');
  return <div dangerouslySetInnerHTML={{ __html: html }} />;
}
