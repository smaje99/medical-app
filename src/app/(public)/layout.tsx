import '../globals.css';

import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

import { Navigation } from './navigation';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Medical App',
  description: 'Medical app',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <Navigation />
        {children}
      </body>
    </html>
  );
}
