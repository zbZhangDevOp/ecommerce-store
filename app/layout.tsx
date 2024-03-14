import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

import { ClerkProvider } from '@clerk/nextjs';
import ModalProvider from '@/providers/modal-provider';
import { ToastProvider } from '@/providers/toast-provider';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Admin Dash Board',
  description: 'Admin Dash Board',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // added the clerk provider middlewares

  // The modal provide is rendered when the global state is mounted
  return (
    <ClerkProvider>
      <html lang='en'>
        <body className={inter.className}>
          <ToastProvider />
          <ModalProvider />
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
