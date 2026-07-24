'use client';
import TopicShell from '../../components/TopicShell';
import BilingualHtml from '../../components/BilingualHtml';

export default function ScopeClient({ vi, en }: { vi: string; en: Record<string, string> }) {
  return (
    <TopicShell page="scope">
      <BilingualHtml vi={vi} en={en} />
    </TopicShell>
  );
}
