'use client';
// Navbar.tsx — PORT đúng markup/class từ Navbar.astro (topbar/topbar__group dropdown).
// Hover mở qua CSS (layout.css); click toggle cho mobile/touch, giống navbar.js cũ.
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useRef, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { NAV, PART2_TOPICS, isGroup } from '../data/nav';
import LanguageSwitcher from './LanguageSwitcher';

export default function Navbar() {
  const { i18n } = useTranslation();
  const lang = i18n.language === 'en' ? 'en' : 'vi';
  const pathname = usePathname() + '/'; // khớp trailingSlash của href trong nav.ts
  const [openGroup, setOpenGroup] = useState<number | null>(null);
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onDocClick = () => setOpenGroup(null);
    document.addEventListener('click', onDocClick);
    return () => document.removeEventListener('click', onDocClick);
  }, []);

  const isActive = (href: string) => href === pathname || (href === '/part-2-topics/' && PART2_TOPICS.has(pathname));

  return (
    <div className="topbar" ref={rootRef}>
      <Link className="topbar__brand" href="/">
        <span className="topbar__brand-mark">P</span> PMBOK 8
        <small className="topbar__brand-tag">{lang === 'en' ? 'learn PMP · v3' : 'học PMP · v3'}</small>
      </Link>
      <nav className="topbar__nav">
        {NAV.map((item, i) =>
          isGroup(item) ? (
            <div className={'topbar__group' + (openGroup === i ? ' is-open' : '')} key={item.label}>
              <button
                className={
                  'topbar__grouptop' +
                  (item.children.some((c) => isActive(c.href)) ? ' topbar__grouptop--current' : '')
                }
                type="button"
                aria-haspopup="true"
                onClick={(e) => {
                  e.stopPropagation();
                  setOpenGroup((g) => (g === i ? null : i));
                }}
              >
                {lang === 'en' ? item.en : item.label}
                <span className="topbar__caret">▾</span>
              </button>
              <div className="topbar__panel">
                {item.children.map((c) => (
                  <Link
                    className={'topbar__panellink' + (isActive(c.href) ? ' topbar__panellink--current' : '')}
                    href={c.href}
                    key={c.href}
                  >
                    {lang === 'en' ? c.en : c.label}
                  </Link>
                ))}
              </div>
            </div>
          ) : (
            <Link
              className={'topbar__link' + (isActive(item.href) ? ' topbar__link--current' : '')}
              href={item.href}
              key={item.href}
            >
              {lang === 'en' ? item.en : item.label}
            </Link>
          )
        )}
      </nav>
      <LanguageSwitcher />
      <button className="topbar__menu" aria-label="menu" type="button">
        ☰
      </button>
    </div>
  );
}
