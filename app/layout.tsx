import type { Metadata } from 'next';
import { JetBrains_Mono, Syne } from 'next/font/google';
import { Analytics } from '@vercel/analytics/next';
import './globals.css';

const syne = Syne({
  subsets: ['latin'],
  weight: ['400', '600', '700', '800'],
  variable: '--font-sans',
  display: 'swap',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['300', '400', '500', '700'],
  variable: '--font-mono',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Sami Ahvenniemi — Software Engineer',
  description: 'Full stack software engineer specializing in React, TypeScript and Node.js.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${syne.variable} ${jetbrainsMono.variable}`}>
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
