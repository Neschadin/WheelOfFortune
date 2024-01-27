import { ReactNode, Suspense } from 'react';
import { inter, roboto, luckiest } from './fonts';

import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} ${roboto.variable} ${luckiest.variable}`}
      >
        <Suspense fallback={<div>Loading...</div>}>
          {children}
        </Suspense>
      </body>
    </html>
  );
}
