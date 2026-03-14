import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { routing } from '../../i18n/routing';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

const locales = ['ro', 'en', 'de', 'fr', 'es', 'it'];

const baseUrl = 'https://www.neofort-biz.ro';

export async function generateMetadata({ params }) {
  const { locale } = await params;
  const alternates = {};
  locales.forEach(l => {
    alternates[l] = `${baseUrl}/${l}`;
  });
  return {
    metadataBase: new URL(baseUrl),
    alternates: {
      languages: alternates,
      canonical: `${baseUrl}/${locale}`,
    },
    twitter: { card: 'summary_large_image', site: '@NeofortBIZ' },
    openGraph: {
      siteName: 'Neofort BIZ - Tâmplărie PVC & Aluminiu',
      images: [{ url: 'https://www.neofort-biz.ro/og/Fabrica_Neofort.avif', width: 1200, height: 630, type: 'image/avif' }],
      locale: locale,
    },
    robots: { index: true, follow: true },
  };
}

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({ children, params }) {
  const { locale } = await params;
  if (!locales.includes(locale)) notFound();
  const messages = await getMessages();
  return (
    <html lang={locale}>
      <head>
        {/* hreflang */}
        {locales.map(l => (
          <link key={l} rel="alternate" hrefLang={l} href={`${baseUrl}/${l}`} />
        ))}
        <link rel="alternate" hrefLang="x-default" href={`${baseUrl}/ro`} />

        {/* Viewport */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        {/* Favicon complet */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />

        {/* Theme */}
        <meta name="theme-color" content="#111111" />
        <meta name="msapplication-TileColor" content="#111111" />

        {/* Geo — București, România */}
        <meta name="geo.region" content="RO-B" />
        <meta name="geo.placename" content="București" />
        <meta name="geo.position" content="44.4429398;26.0859381" />
        <meta name="ICBM" content="44.4429398, 26.0859381" />

        {/* Robots global */}
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />

        {/* OG locale:alternate */}
        {locales.filter(l => l !== locale).map(l => (
          <meta key={`og-alt-${l}`} property="og:locale:alternate" content={l} />
        ))}

        {/* Preconnect */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": "https://www.neofort-biz.ro/#organization",
    "name": "Neofort BIZ",
    "alternateName": "NEOFORT PVC & ALUMINUM JOINERY",
    "url": "https://www.neofort-biz.ro",
    "logo": {
      "@type": "ImageObject",
      "url": "https://www.neofort-biz.ro/Neofort.avif",
      "width": 512,
      "height": 512
    },
    "foundingDate": "2003",
    "email": "oferte@neofort-biz.ro",
    "telephone": ["+40215280661", "+40752443435"],
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Strada Theodor Aman 11",
      "addressLocality": "București",
      "addressRegion": "Sector 1",
      "postalCode": "010776",
      "addressCountry": "RO"
    },
    "sameAs": [
      "https://www.facebook.com/neofortconstructii",
      "https://www.linkedin.com/company/neofort-biz",
      "https://x.com/NeofortBIZ"
    ]
  }) }}/>
        <NextIntlClientProvider messages={messages}>
          <Header />
          <main>{children}</main>
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
