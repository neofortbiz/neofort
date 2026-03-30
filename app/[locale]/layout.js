import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { Barlow, Barlow_Condensed } from 'next/font/google';
import { routing } from '../../i18n/routing';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import CookieBanner from '../../components/CookieBanner';
import Script from 'next/script';

const locales = ['ro', 'en', 'de', 'fr', 'es', 'it'];
const baseUrl = 'https://www.neofort-biz.ro';

// next/font: self-hosted, zero layout shift, nu blochează render
const barlow = Barlow({
  subsets: ['latin', 'latin-ext'],
  weight: ['300', '400', '500'],
  display: 'swap',
  variable: '--font-barlow',
  preload: true,
});

const barlowCondensed = Barlow_Condensed({
  subsets: ['latin', 'latin-ext'],
  weight: ['300', '400', '500', '600'],
  display: 'swap',
  variable: '--font-barlow-condensed',
  preload: true,
});

export async function generateMetadata({ params }) {
  const { locale } = await params;
  const alternates = {};
  locales.forEach(l => { alternates[l] = `${baseUrl}/${l}`; });
  return {
    metadataBase: new URL(baseUrl),
    alternates: { languages: alternates, canonical: `${baseUrl}/${locale}` },
    twitter: { card: 'summary_large_image', site: '@NeofortBIZ' },
    openGraph: {
      siteName: 'Neofort BIZ - Tâmplărie PVC & Aluminiu',
      images: [
        { url: 'https://www.neofort-biz.ro/og-neofort.jpg', width: 1200, height: 630, type: 'image/jpeg' },
        { url: 'https://www.neofort-biz.ro/og/Fabrica_Neofort.avif', width: 1200, height: 630, type: 'image/avif' },
      ],
      locale: locale,
    },
    robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1, 'max-video-preview': -1 } },
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
    <html lang={locale} className={`${barlow.variable} ${barlowCondensed.variable}`}>
      <head>
        {/* Preload imagini LCP hero homepage */}
        <link rel="preload" as="image" href="/hero-pvc.avif" type="image/avif" fetchpriority="high" />
        {/* Preconnect Google Analytics - reduce latenta cu ~150ms */}
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
        <link rel="preconnect" href="https://www.google-analytics.com" />
        <link rel="dns-prefetch" href="https://www.google-analytics.com" />

        {/* Viewport */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
        {/* AI Crawler hints */}
        <meta name="googlebot" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta name="bingbot" content="index, follow" />

        {/* Theme */}
        <meta name="msvalidate.01" content="46272C3D9771E6B139582E10CB5031A3" />
        <meta name="theme-color" content="#111111" />
        <meta name="msapplication-TileColor" content="#111111" />

        {/* Geo */}
        <meta name="geo.region" content="RO-B" />
        <meta name="geo.placename" content="București" />
        <meta name="geo.position" content="44.4429398;26.0859381" />
        <meta name="ICBM" content="44.4429398, 26.0859381" />

        {/* OG locale:alternate */}
        {locales.filter(l => l !== locale).map(l => (
          <meta key={`og-alt-${l}`} property="og:locale:alternate" content={l} />
        ))}
      </head>
      <body>
        <NextIntlClientProvider messages={messages}>
          <Header />
          <main>{children}</main>
          <Footer />
          <CookieBanner locale={locale} />
        </NextIntlClientProvider>
        {/* Google Analytics 4 — G-20PR5SV2XC — Consent Mode v2 */}
        <Script id="ga4" strategy="lazyOnload" src="https://www.googletagmanager.com/gtag/js?id=G-20PR5SV2XC" />
        <Script id="ga4-init" strategy="lazyOnload">{`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          window.gtag = gtag;
          gtag('consent', 'default', {
            analytics_storage: 'denied',
            ad_storage: 'denied',
            ad_user_data: 'denied',
            ad_personalization: 'denied',
          });
          gtag('js', new Date());
          gtag('config', 'G-20PR5SV2XC', { anonymize_ip: true });
          try {
            if (localStorage.getItem('cookie_ok') === '1') {
              gtag('consent', 'update', { analytics_storage: 'granted' });
            }
          } catch(e) {}
        `}</Script>
      </body>
    </html>
  );
}
