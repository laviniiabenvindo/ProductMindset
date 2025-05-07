import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import './globals.css';

const poppins = Poppins({
  subsets: ['latin'],
  weight: '400'
});

export const metadata: Metadata = {
  title: 'Product Mindset',
};

interface LayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: LayoutProps) {
  return (
    <html lang="pt-BR">
      <head>
        <link rel="icon" href="/product_mindset_logo.png" />
      </head>
      <body className={poppins.className}>
        {children}
      </body>
    </html>
  );
}