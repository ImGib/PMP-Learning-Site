'use client';
// TopicShell.tsx — PORT đúng markup từ TopicLayout.astro: shell/sidebar/hero/footer
// cho 8 trang chủ đề Phần II. children = nội dung riêng của trang (section).
import Link from 'next/link';
import { useTranslation } from 'react-i18next';
import { TOPICS } from '../data/site';

export default function TopicShell({ page, children }: { page: string; children: React.ReactNode }) {
  const { i18n } = useTranslation();
  const lang = i18n.language === 'en' ? 'en' : 'vi';

  const idx = TOPICS.findIndex((t) => t.id === page);
  const t = TOPICS[idx];
  const prev = idx > 0 ? TOPICS[idx - 1] : null;
  const next = idx < TOPICS.length - 1 ? TOPICS[idx + 1] : null;

  const title = lang === 'en' ? t.titleEn : t.title;
  const blurb = lang === 'en' ? t.blurbEn : t.blurb;

  return (
    <div className="shell" id="top">
      <aside className="sidebar" id="side">
        <Link className="sidebar__back" href="/part-2-topics/">
          {lang === 'en' ? '← Part II · Contents' : '← Phần II · Mục lục'}
        </Link>
        <h4>{lang === 'en' ? '8 knowledge topics' : '8 chủ đề kiến thức'}</h4>
        {TOPICS.map((x) => (
          <Link href={`/${x.id}/`} className={x.id === page ? 'is-active' : ''} key={x.id}>
            <span className="sidebar__num">{x.num}</span>
            {x.short}
          </Link>
        ))}
        <h4>{lang === 'en' ? 'Related' : 'Liên quan'}</h4>
        <Link href="/formulas-and-examples/">
          <span className="sidebar__num">∑</span>
          {lang === 'en' ? 'Formulas & Examples' : 'Công thức & ví dụ'}
        </Link>
        <Link href="/flashcard-quiz/">
          <span className="sidebar__num">?</span>
          {lang === 'en' ? 'Flashcards & Quiz' : 'Flashcard & Quiz'}
        </Link>
      </aside>
      <main>
        <div className="hero" id="topic-hero">
          <span className="hero__eyebrow">
            {lang === 'en'
              ? `Part II · Topic ${t.num}/08 — 8 knowledge topics`
              : `Phần II · Chủ đề ${t.num}/08 — 8 chủ đề kiến thức`}
          </span>
          <h1>{title}</h1>
          <p>{blurb}</p>
        </div>
        <section id={page}>{children}</section>
        <footer id="topic-footer">
          <b>
            {lang === 'en' ? 'Part II' : 'Phần II'} · {title}
          </b>
          {lang === 'en'
            ? ' · Source: PMBOK® Guide 8th Ed. (2025) + PMP slides.'
            : ' · Nguồn: PMBOK® Guide 8th Ed. (2025) + slide PMP.'}
          <br />
          {prev && (
            <Link href={`/${prev.id}/`}>
              ← {lang === 'en' ? prev.titleEn : prev.title}
            </Link>
          )}
          {prev && next && ' · '}
          {next ? (
            <Link href={`/${next.id}/`}>
              {lang === 'en' ? next.titleEn : next.title} →
            </Link>
          ) : (
            <Link href="/part-3-agile/">{lang === 'en' ? 'Part III — Agile →' : 'Phần III — Agile →'}</Link>
          )}
        </footer>
      </main>
    </div>
  );
}
