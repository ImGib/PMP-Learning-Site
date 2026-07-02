#!/usr/bin/env node
/**
 * sync-head.mjs — đồng bộ khối <head> dùng chung ra mọi trang HTML ở gốc.
 *
 * Vì dự án BUILDLESS (không thể JS-inject <head> mà không gây FOUC font/CSS),
 * ta giữ 1 NGUỒN DUY NHẤT ở assets/partials/head.html rồi "dán" nó vào giữa
 * cặp marker <!-- shared-head:start --> … <!-- shared-head:end --> trong từng
 * file .html. HTML xuất ra vẫn tĩnh hoàn toàn — GitHub Pages không đổi gì.
 *
 * Dùng: sửa assets/partials/head.html → chạy `node scripts/sync-head.mjs`.
 * Lần chạy đầu tự migrate: nhận diện khối head cũ (chưa có marker) và bọc marker.
 * Idempotent: chạy lại khi không có thay đổi sẽ không sửa file nào.
 */
import { readFileSync, writeFileSync, readdirSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');

const START =
  '<!-- shared-head:start — TỰ SINH, đừng sửa tay. Nguồn: assets/partials/head.html · cập nhật: node scripts/sync-head.mjs -->';
const END = '<!-- shared-head:end -->';

const partial = readFileSync(join(root, 'assets/partials/head.html'), 'utf8').trim();

// Khối đã có marker (các lần chạy sau)
const markerRe = /<!-- shared-head:start[\s\S]*?<!-- shared-head:end -->/;
// Khối head cũ chưa có marker (lần chạy đầu — tự migrate)
const legacyRe =
  /<link rel="preconnect" href="https:\/\/fonts\.googleapis\.com">[\s\S]*?<link rel="stylesheet" href="assets\/styles\/main\.css">/;

const files = readdirSync(root).filter((f) => f.endsWith('.html'));
let changed = 0;

for (const f of files) {
  const path = join(root, f);
  const html = readFileSync(path, 'utf8');
  const nl = html.includes('\r\n') ? '\r\n' : '\n';
  const block = `${START}${nl}${partial.split(/\r?\n/).join(nl)}${nl}${END}`;

  let next;
  if (markerRe.test(html)) next = html.replace(markerRe, block);
  else if (legacyRe.test(html)) next = html.replace(legacyRe, block);
  else {
    console.warn(`⚠ bỏ qua ${f}: không tìm thấy khối <head> dùng chung`);
    continue;
  }

  if (next !== html) {
    writeFileSync(path, next);
    changed++;
    console.log(`✓ ${f}`);
  }
}

console.log(`\nĐồng bộ ${changed}/${files.length} trang HTML.`);
