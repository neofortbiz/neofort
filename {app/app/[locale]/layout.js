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
    openGraph: {
      siteName: 'Neofort BIZ - Tâmplărie PVC & Aluminiu',
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
        {locales.map(l => (
          <link key={l} rel="alternate" hrefLang={l} href={`${baseUrl}/${l}`} />
        ))}
        <link rel="alternate" hrefLang="x-default" href={`${baseUrl}/ro`} />
      </head>
      <body>
        <NextIntlClientProvider messages={messages}>
          <Header />
          <main>{children}</main>
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
