'use client';
// RT — render một chuỗi i18n có thể chứa HTML (bold/italic…) qua thẻ tuỳ chọn.
import { useTranslation } from 'react-i18next';
import type { ElementType } from 'react';

export default function RT({
  k,
  as: Tag = 'span',
  className,
}: {
  k: string;
  as?: ElementType;
  className?: string;
}) {
  const { t } = useTranslation();
  return <Tag className={className} dangerouslySetInnerHTML={{ __html: t(k) }} />;
}
