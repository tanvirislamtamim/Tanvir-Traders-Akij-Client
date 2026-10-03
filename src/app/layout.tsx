import type { Metadata, Viewport } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import QueryProvider from '@/providers/QueryProvider';
import { AuthProvider } from '@/context/AuthContext';
import { Toaster } from 'react-hot-toast';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://tanvirtraders.com';

export const viewport: Viewport = {
  themeColor: '#f97316',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Tanvir Traders | Akij Bakers Dealership Management',
    template: '%s | Tanvir Traders',
  },
  description:
    'তানভীর ট্রেডার্স — আকিজ বেকার্স (ফ্যান্টাস্টিক) অনুমোদিত ডিলারশিপ ও পরিবেশক। দৈনিক বিক্রয়, স্টক ইনওয়ার্ড, প্রোডাক্ট প্রাইসিং এবং স্বয়ংক্রিয় মাসিক ব্যবসায়িক প্রতিবেদন ব্যবস্থাপনা।',
  applicationName: 'Tanvir Traders',
  authors: [{ name: 'Tanvir Traders', url: siteUrl }],
  generator: 'Next.js',
  keywords: [
    'Tanvir Traders',
    'তানভীর ট্রেডার্স',
    'Akij Bakers Dealership',
    'Akij Fantastic',
    'আকিজ বেকার্স',
    'আকিজ ফ্যান্টাস্টিক',
    'Bakers Distribution Bangladesh',
    'Daily Sales Management',
    'Stock Inward Entry',
    'Inventory Management',
    'ডিলারশিপ হিসাব',
    'বিক্রয় ব্যবস্থাপনা',
    'স্টক ম্যানেজমেন্ট',
    'FMCG Distributor Bangladesh',
  ],
  creator: 'Tanvir Traders',
  publisher: 'Tanvir Traders',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: '/',
  },
  icons: {
    icon: [
      { url: '/icon.svg', type: 'image/svg+xml' },
      { url: '/favicon.ico', sizes: '32x32' },
      { url: '/icon-192.png', sizes: '192x192', type: 'image/png' },
      { url: '/icon-512.png', sizes: '512x512', type: 'image/png' },
    ],
    shortcut: '/favicon.ico',
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
  },
  manifest: '/manifest.webmanifest',
  openGraph: {
    type: 'website',
    locale: 'bn_BD',
    alternateLocale: ['en_US'],
    url: siteUrl,
    siteName: 'Tanvir Traders — Akij Bakers Dealership',
    title: 'Tanvir Traders | Akij Bakers Dealership Management',
    description:
      'তানভীর ট্রেডার্স — আকিজ বেকার্স (ফ্যান্টাস্টিক) অনুমোদিত পরিবেশক ও ডিলারশিপ। দৈনিক বিক্রয়, স্টক গ্রহণ, ইনভেন্টরি ও বিস্তারিত প্রতিবেদন ব্যবস্থাপনা।',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Tanvir Traders - Akij Bakers Dealership & Distribution',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Tanvir Traders | Akij Bakers Dealership Management',
    description:
      'তানভীর ট্রেডার্স — আকিজ বেকার্স অনুমোদিত ডিলারশিপ ও বিক্রয় ব্যবস্থাপনা প্ল্যাটফর্ম',
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  category: 'business',
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebSite',
      '@id': `${siteUrl}/#website`,
      url: siteUrl,
      name: 'Tanvir Traders',
      alternateName: 'তানভীর ট্রেডার্স',
      description: 'Akij Bakers (Fantastic) Authorized Dealership & Sales Inventory Management',
      inLanguage: ['bn-BD', 'en-US'],
    },
    {
      '@type': 'Organization',
      '@id': `${siteUrl}/#organization`,
      name: 'Tanvir Traders',
      alternateName: 'তানভীর ট্রেডার্স',
      url: siteUrl,
      logo: {
        '@type': 'ImageObject',
        url: `${siteUrl}/icon-512.png`,
        width: 512,
        height: 512,
      },
      image: `${siteUrl}/og-image.png`,
      brand: {
        '@type': 'Brand',
        name: 'Akij Bakers — Fantastic',
      },
      contactPoint: {
        '@type': 'ContactPoint',
        contactType: 'sales & distribution',
        availableLanguage: ['Bengali', 'English'],
      },
    },
    {
      '@type': ['LocalBusiness', 'WholesaleStore'],
      '@id': `${siteUrl}/#business`,
      name: 'Tanvir Traders - Akij Bakers Dealership',
      image: `${siteUrl}/og-image.png`,
      priceRange: '৳৳',
      currenciesAccepted: 'BDT',
      paymentAccepted: 'Cash, Bank Transfer, Mobile Banking',
      address: {
        '@type': 'PostalAddress',
        addressCountry: 'BD',
      },
      description: 'Authorized dealer and distribution distributor of Akij Bakers Fantastic brand products in Bangladesh.',
    },
    {
      '@type': 'WebApplication',
      '@id': `${siteUrl}/#webapp`,
      name: 'Tanvir Traders Dealership Management Portal',
      applicationCategory: 'BusinessApplication',
      operatingSystem: 'All modern browsers',
      browserRequirements: 'Requires JavaScript. Requires HTML5.',
      offers: {
        '@type': 'Offer',
        price: '0',
        priceCurrency: 'BDT',
      },
    },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="bn" className={inter.variable}>
      <head>
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        <link rel="icon" href="/favicon.ico" sizes="32x32" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" sizes="180x180" />
        <link rel="manifest" href="/manifest.webmanifest" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body style={{ background: 'var(--bg)', color: 'var(--text)', minHeight: '100vh' }}>
        <QueryProvider>
          <AuthProvider>
            {children}
          </AuthProvider>
          <Toaster
            position="top-center"
            toastOptions={{
              style: {
                background: '#fff',
                color: '#0f172a',
                border: '1px solid #e2e8f0',
                fontSize: '13px',
                fontWeight: '500',
                borderRadius: '10px',
                boxShadow: '0 4px 12px rgba(0,0,0,0.10)',
              },
              success: { iconTheme: { primary: '#f97316', secondary: '#fff' } },
              error:   { iconTheme: { primary: '#ef4444', secondary: '#fff' } },
            }}
          />
        </QueryProvider>
      </body>
    </html>
  );
}
