import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import CookieBanner from '@/components/CookieBanner';
import ClientInit from '@/components/ClientInit';

const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800', '900'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'CELLARIS — Izolații din Fibre de Celuloză | București · Prahova · Ilfov',
  description:
    'Producător și montator de izolații premium din fibre de celuloză reciclată. Eficiență energetică superioară, certificat nZEB. Solicită ofertă gratuită.',
  metadataBase: new URL('https://cellaris.ro'),
  alternates: { canonical: '/' },
  openGraph: {
    title: 'CELLARIS — Izolații Premium din Fibre de Celuloză',
    description: 'Izolații ecologice din celuloză reciclată. Producție proprie, montaj certificat, garanție 25 ani.',
    type: 'website',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ro" className={inter.className}>
      <head>
        <meta name="theme-color" content="#102018" />
        <link rel="manifest" href="/manifest.json" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'LocalBusiness',
              name: 'CELLARIS',
              description: 'Producător și montator de izolații premium din fibre de celuloză reciclată.',
              telephone: '+40-721-000-000',
              email: 'contact@cellaris.ro',
              url: 'https://cellaris.ro',
              address: { '@type': 'PostalAddress', addressLocality: 'București', addressCountry: 'RO' },
            }),
          }}
        />
      </head>
      <body>
        <div className="reading-progress" id="readingProgress" />
        <Nav />
        {children}
        <Footer />
        <CookieBanner />
        <ClientInit />
      </body>
    </html>
  );
}
