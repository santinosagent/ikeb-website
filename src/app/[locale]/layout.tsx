import type { Metadata } from 'next';
import { Archivo_Black, DM_Sans } from 'next/font/google';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { routing } from '@/i18n/routing';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import '../globals.css';

const archivoBlack = Archivo_Black({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-heading',
  display: 'swap',
});

const dmSans = DM_Sans({
  weight: ['400', '500', '700'],
  subsets: ['latin'],
  variable: '--font-body',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'IKEB - Kebab Italiano a Pisa',
  description: 'Il kebab italiano a Pisa. Qualità, tradizione e passione in ogni piatto. Scopri il nostro menu di kebab, piadine e panini artigianali.',
  keywords: 'kebab pisa, kebab italiano pisa, fast food kebab, kebab shop, kebab near me, italian kebab',
  openGraph: {
    title: 'IKEB - Kebab Italiano a Pisa',
    description: 'Il kebab italiano a Pisa. Qualità, tradizione e passione in ogni piatto.',
    type: 'website',
    locale: 'it_IT',
    siteName: 'IKEB Pisa',
  },
};

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!routing.locales.includes(locale as typeof routing.locales[number])) {
    notFound();
  }

  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body className={`${archivoBlack.variable} ${dmSans.variable} font-body`}>
        <NextIntlClientProvider messages={messages}>
          <Header />
          <main>{children}</main>
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}