// lib/basePath.ts — PHẢI khớp basePath trong next.config.mjs.
// <link>/<script> tới public/ KHÔNG tự được Next prefix basePath, nên mọi asset
// tuyệt đối (CSS, ảnh tĩnh ngoài <Image>) phải tự thêm tiền tố này.
export const basePath = process.env.NODE_ENV === 'production' ? '/PMP-Learning-Site' : '';
