import type { Metadata } from 'next';
import './globals.css';

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
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
