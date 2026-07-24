import './globals.css';
import type { Metadata } from 'next';
import I18nProvider from '../components/I18nProvider';
import Navbar from '../components/Navbar';

export const metadata: Metadata = {
  title: 'Học PMP với PMBOK 8',
  description: 'Site tự học PMP song ngữ Anh–Việt dựa trên PMBOK Guide 8th Edition.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="vi">
      <body>
        <I18nProvider>
          <Navbar />
          <main className="main">{children}</main>
        </I18nProvider>
      </body>
    </html>
  );
}
