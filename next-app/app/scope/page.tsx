'use client';
import Link from 'next/link';
import { useTranslation } from 'react-i18next';
import RT from '../../components/RT';

// Trang chủ đề Scope (thí điểm). Text dịch được lấy qua react-i18next; định nghĩa
// tiếng Anh dùng chung để tĩnh trong JSX. Đây là khuôn để nhân ra các trang khác.
export default function ScopePage() {
  const { t } = useTranslation();
  return (
    <div>
      <div className="hero">
        <span className="hero__eyebrow">{t('topic.eyebrow')}</span>
        <h1>{t('scope.title')}</h1>
        <p>{t('scope.blurb')}</p>
      </div>

      <section>
        <RT k="scope.desc" as="p" className="section__desc" />

        <h3>{t('scope.h_ps')}</h3>
        <div className="callout callout--en">
          <span className="callout__label">EN</span> <RT k="scope.def_proj" />{' '}
          <RT k="scope.gloss_proj" className="vn-gloss" />
        </div>
        <div className="callout callout--en">
          <span className="callout__label">EN</span> <RT k="scope.def_prod" />{' '}
          <RT k="scope.gloss_prod" className="vn-gloss" />
        </div>

        <h3>{t('scope.h_enemies')}</h3>
        <div className="features">
          <div className="feature">
            <b>{t('scope.f_creep_t')}</b>
            <RT k="scope.f_creep" />
          </div>
          <div className="feature">
            <b>{t('scope.f_gold_t')}</b>
            <RT k="scope.f_gold" />
          </div>
        </div>
        <div className="callout callout--tip">
          <span className="callout__label">{t('scope.tip_lbl')}</span> <RT k="scope.tip" />
        </div>
      </section>

      <p>
        <Link href="/">← {t('nav.home')}</Link>
      </p>
    </div>
  );
}
