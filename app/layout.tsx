import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Zoras Haarstudio - Ihr Friseur am Sendlinger Tor, München',
  description: 'Professionelle Friseurdienstleistungen in München, Sendlinger Tor. Haarschnitt, Färben, Styling und mehr. Vereinbaren Sie jetzt Ihren Termin!',
  openGraph: {
    title: 'Zoras Haarstudio - Ihr Friseur am Sendlinger Tor, München',
    description: 'Professionelle Friseurdienstleistungen in München, Sendlinger Tor. Haarschnitt, Färben, Styling und mehr.',
    type: 'website',
    locale: 'de_DE',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="de">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
