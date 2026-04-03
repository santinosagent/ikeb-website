import type { Metadata } from 'next';
import { Archivo_Black, DM_Sans } from 'next/font/google';
import { routing } from '@/i18n/routing';
import { redirect } from 'next/navigation';

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
  description: 'Il kebab italiano a Pisa. Qualità, tradizione e passione in ogni piatto.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Redirect to Italian locale by default - only for root page
  // This will be handled by the middleware for all routes
  
  return (
    <html lang={routing.defaultLocale}>
      <body className={`${archivoBlack.variable} ${dmSans.variable} font-body`}>
        {children}
      </body>
    </html>
  );
}