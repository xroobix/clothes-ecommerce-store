import Footer from '@/components/footer';
import Navbar from '@/components/navbar';
import type { Metadata } from 'next';
import { Urbanist } from 'next/font/google';
import './globals.css';
import ModalProvider from '@/providers/modal-provider';
import ToastProvider from '@/providers/toast-provider';

const font = Urbanist({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Clothing store',
  description:
    'Clothing store made in React with Next.js, TypeScript, TailwindCSS, Prisma, MySQL',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={font.className}>
        <ModalProvider />
        <ToastProvider />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
