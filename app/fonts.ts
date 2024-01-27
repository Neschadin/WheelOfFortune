import { Inter, Roboto, Luckiest_Guy } from 'next/font/google';

export const inter = Inter({
  subsets: ['latin', 'cyrillic'],
  display: 'swap',
});

export const roboto = Roboto({
  subsets: ['latin', 'cyrillic'],
  weight: '400',
  variable: '--font-roboto',
  display: 'swap',
});

export const luckiest = Luckiest_Guy({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-luckiest',
  display: 'swap',
});
