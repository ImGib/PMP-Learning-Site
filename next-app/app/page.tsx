'use client';
import Link from 'next/link';
import { useTranslation } from 'react-i18next';

export default function Home() {
  const { t } = useTranslation();
  return (
    <div className="hero">
      <span className="hero__eyebrow">PMBOK 8 · Next.js + react-i18next</span>
      <h1>PMBOK 8 — {t('nav.home')}</h1>
      <p>
        Bản dựng Next.js (React + TS). Bấm <b>VI / EN</b> trên navbar để đổi ngôn ngữ (react-i18next).
      </p>
      <p>
        <Link className="btn btn--primary" href="/scope/">
          → {t('nav.scope')}
        </Link>
      </p>
    </div>
  );
}
