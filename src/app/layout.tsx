'use client';

import "@/styles/globals.scss";
import { useEffect } from 'react';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    console.log('Root layout mounted');
  }, []);

  return (
    <html lang="en">
      <head>
        <title>p.bradygeorgen</title>
      </head>
      <body style={{ margin: 0, padding: 0 }}>
        {children}
      </body>
    </html>
  );
}

