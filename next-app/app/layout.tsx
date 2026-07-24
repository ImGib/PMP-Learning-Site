import type { Metadata } from 'next';
import I18nProvider from '../components/I18nProvider';
import Navbar from '../components/Navbar';
import { basePath } from '../lib/basePath';

export const metadata: Metadata = {
  title: 'Học PMP với PMBOK 8',
  description: 'Site tự học PMP song ngữ Anh–Việt dựa trên PMBOK Guide 8th Edition.',
};

// RootLayout — PORT đúng head/CSS/font từ BaseLayout.astro (site gốc). Không viết CSS mới:
// nạp nguyên public/assets/styles/main.css (đã copy verbatim từ site) + đúng font Google.
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="vi">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Newsreader:ital,opsz,wght@0,6..72,400;0,6..72,500;0,6..72,600;1,6..72,400&family=JetBrains+Mono:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
        <link rel="stylesheet" href={`${basePath}/assets/styles/main.css`} />
      </head>
      <body>
        <I18nProvider>
          <Navbar />
          {children}
        </I18nProvider>
      </body>
    </html>
  );
}
