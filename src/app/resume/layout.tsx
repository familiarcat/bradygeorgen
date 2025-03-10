

import type { Metadata } from 'next';
import {homePageMeta} from '@/data/data';

export const metadata: Metadata = {
  title: homePageMeta.title,
  description: homePageMeta.description,
};

export default function ResumeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-gray-900">
      {children}
    </div>
  );
}
