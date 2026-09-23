import type { Metadata } from 'next';
import { Roboto } from 'next/font/google';
import TanStackProvider from '@/app/components/TanStackProvider/TanStackProvider';
import './globals.css';
import Header from '@/app/components/Header/Header';
import Footer from '@/app/components/Footer/Footer';
import { Language } from '@/types/project';
import { getDictionary } from '@/lib/i18n/getDictionary';
import { cookies } from 'next/headers';

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://example.com';

type Props = {
  children: React.ReactNode;
  modal: React.ReactNode;
  params: Promise<{ lang: string }>;
};

export async function generateMetadata(): Promise<Metadata> {
  const cookieStore = await cookies();
  const savedLang = cookieStore.get('NEXT_LOCALE')?.value;

  const lang: Language = savedLang === 'ua' ? 'ua' : 'en';
  const dict = await getDictionary(lang);

  return {
    metadataBase: new URL(baseUrl),

    title: dict.metadataTranslations.title,
    description: dict.metadataTranslations.description,
    openGraph: {
      title: dict.metadataTranslations.title,
      description: dict.metadataTranslations.description,
      url: '/',
      type: 'website',
      locale: lang === 'ua' ? 'uk_UA' : 'en_US',
      images: [
        {
          url: '/openGraph.png',
          width: 1200,
          height: 630,
          alt: dict.metadataTranslations.title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: dict.metadataTranslations.title,
      description: dict.metadataTranslations.description,
      images: ['/openGraph.png'],
    },
    alternates: {
      canonical: `/`,
      languages: {
        en: '/en',
        uk: '/uk',
      },
    },
  };
}

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-roboto',
  display: 'swap',
});

export default async function RootLayout({ children, modal, params }: Props) {
  const { lang } = await params;
  const dict = await getDictionary(lang as Language);

  return (
    <html lang={lang || 'en'}>
      <body className={roboto.variable} suppressHydrationWarning>
        <TanStackProvider>
          <Header lang={lang as Language} />

          {children}
          {modal}

          <Footer lang={lang as Language} dict={dict} />
        </TanStackProvider>
      </body>
    </html>
  );
}
