'use client';
import Link from 'next/link';
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from './LanguageSwitcher';

export default function Navbar() {
  const { t } = useTranslation();
  return (
    <div className="topbar">
      <Link className="topbar__brand" href="/">
        <span className="topbar__brand-mark">P</span> PMBOK 8
        <small className="topbar__brand-tag">{t('nav.brandTag')}</small>
      </Link>
      <nav className="topbar__nav">
        <Link className="topbar__link" href="/">
          {t('nav.home')}
        </Link>
        <Link className="topbar__link" href="/scope/">
          {t('nav.scope')}
        </Link>
      </nav>
      <LanguageSwitcher />
    </div>
  );
}
