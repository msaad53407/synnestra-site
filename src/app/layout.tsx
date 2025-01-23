import Footer from '@/components/Footer';
import Header from '@/components/Header';
import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import './globals.css';
import Providers from './Providers';
import React from 'react';
import ProjectModal from '@/components/modals/ProjectModal';
import { metadataConfig } from '@/config';
import { Toaster } from '@/components/ui/toaster';

const poppins = Poppins({ subsets: ['latin'], weight: ['400', '700', '900'] });

export const metadata = metadataConfig satisfies Metadata;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.className} antialiased`}>
        <Header />
        <main className="w-full max-w-screen-2xl mx-auto overflow-hidden">
          <Providers>
            {children}
            <Toaster />
            <ProjectModal />
          </Providers>
        </main>
        <Footer />
      </body>
    </html>
  );
}
