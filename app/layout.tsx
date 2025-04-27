import './globals.css';

import { Geist, Geist_Mono } from 'next/font/google';
import QueryClientWrapper from './components/providers/QueryClientWrapper';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-primary/10`}
      >
        <QueryClientWrapper>{children}</QueryClientWrapper>
      </body>
    </html>
  );
}
