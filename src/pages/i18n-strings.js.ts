// Xuất TỪ ĐIỂN i18n thành module JS tĩnh cho client: /i18n-strings.js
// site.js import file này rồi "apply" khi đổi ngôn ngữ. Một nguồn duy nhất (strings.ts).
import type { APIRoute } from 'astro';
import { STRINGS } from '../i18n/strings';

export const GET: APIRoute = () =>
  new Response(`export const STRINGS = ${JSON.stringify(STRINGS)};\n`, {
    headers: { 'Content-Type': 'text/javascript; charset=utf-8' },
  });
