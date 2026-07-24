import { readFileSync } from 'node:fs';
import { join } from 'node:path';
import ScopeClient from './ScopeClient';

// Server Component: đọc nội dung ĐÚNG NGUYÊN VĂN (VI + bản dịch EN theo key) lúc build.
export default function ScopePage() {
  const vi = readFileSync(join(process.cwd(), 'content', 'scope.vi.html'), 'utf8');
  const en = JSON.parse(readFileSync(join(process.cwd(), 'content', 'scope.en.json'), 'utf8'));
  return <ScopeClient vi={vi} en={en} />;
}
