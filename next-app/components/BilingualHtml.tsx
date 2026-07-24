'use client';
// BilingualHtml — render khối HTML tiếng Việt (đầy đủ, đúng markup gốc). Khi ngôn ngữ = 'en',
// tráo innerHTML của từng phần tử [data-i18n="key"] sang bản EN tương ứng (từ `en` map);
// khi về 'vi', khôi phục nguyên bản. Dùng cho nội dung dài (bài học) đã có sẵn HTML gốc.
import { useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';

export default function BilingualHtml({ vi, en }: { vi: string; en: Record<string, string> }) {
  const ref = useRef<HTMLDivElement>(null);
  const { i18n } = useTranslation();

  useEffect(() => {
    const root = ref.current;
    if (!root) return;
    if (i18n.language === 'en') {
      root.querySelectorAll<HTMLElement>('[data-i18n]').forEach((el) => {
        const key = el.getAttribute('data-i18n');
        if (key && en[key] != null) el.innerHTML = en[key];
      });
    } else {
      root.innerHTML = vi; // khôi phục nguyên bản tiếng Việt
    }
  }, [i18n.language, en, vi]);

  return <div dangerouslySetInnerHTML={{ __html: vi }} ref={ref} />;
}
