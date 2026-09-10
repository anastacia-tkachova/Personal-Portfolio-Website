import type { Metadata } from 'next';
import { metadataTranslations } from '@/data/dictionary';
import { Roboto } from 'next/font/google';
import TanStackProvider from '@/app/components/TanStackProvider/TanStackProvider';
import './globals.css';
import Header from '@/app/components/Header/Header';
import Footer from '@/app/components/Footer/Footer';

const baseUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : 'http://localhost:3000';

type Props = {
  children: React.ReactNode;
  modal: React.ReactNode;
  params: Promise<{ lang: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang } = await params;
  const t = metadataTranslations[lang] || metadataTranslations.en;

  return {
    metadataBase: new URL(baseUrl),

    title: t.title,
    description: t.description,
    openGraph: {
      title: t.title,
      description: t.description,
      url: '/',
      type: 'website',
      locale: lang === 'uk' ? 'uk_UA' : 'en_US',
      images: [
        {
          url: '/openGraph.png',
          width: 1200,
          height: 630,
          alt: t.title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: t.title,
      description: t.description,
      images: ['/openGraph.png'],
    },
    alternates: {
      canonical: `/${lang}`,
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

  return (
    <html lang={lang || 'en'}>
      <body className={roboto.variable}>
        <TanStackProvider>
          <Header />

          {children}
          {modal}

          <Footer />
        </TanStackProvider>
      </body>
    </html>
  );
}
