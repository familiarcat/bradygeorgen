import '@/styles/globals.scss';
import { type ReactNode } from 'react';

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="en" className="overflow-x-hidden">
      <body className="overflow-x-hidden scrollbar-hide">{children}</body>
    </html>
  );
}

