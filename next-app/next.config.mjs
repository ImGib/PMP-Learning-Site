/** @type {import('next').NextConfig} */
// Static export cho GitHub Pages (/PMP-Learning-Site/). Toggle ngôn ngữ chạy client
// (react-i18next) nên không cần i18n routing của Next.
const isProd = process.env.NODE_ENV === 'production';
const nextConfig = {
  output: 'export',
  basePath: isProd ? '/PMP-Learning-Site' : '',
  images: { unoptimized: true },
  trailingSlash: true,
};
export default nextConfig;
