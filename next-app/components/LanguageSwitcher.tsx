'use client';
import { useTranslation } from 'react-i18next';

export default function LanguageSwitcher() {
  const { i18n } = useTranslation();
  const set = (l: 'vi' | 'en') => {
    i18n.changeLanguage(l);
    try {
      localStorage.setItem('pmp-lang', l);
    } catch {}
  };
  const cur = i18n.language;
  return (
    <div className="topbar__lang" role="group" aria-label="Language / Ngôn ngữ">
      <button className={'topbar__langbtn' + (cur === 'vi' ? ' is-active' : '')} onClick={() => set('vi')} type="button">
        VI
      </button>
      <button className={'topbar__langbtn' + (cur === 'en' ? ' is-active' : '')} onClick={() => set('en')} type="button">
        EN
      </button>
    </div>
  );
}
