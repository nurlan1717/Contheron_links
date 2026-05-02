import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  metadataBase: new URL('https://link.contheron.com'),
  title: {
    default: 'Contheron - Ağıllı İnşaat və Təhlükəsizlik',
    template: '%s | Contheron'
  },
  description: 'İnşaat sahələrində AI əsaslı təhlükəsizlik və monitorinq sistemləri. Qabaqcıl süni intellekt və IoT texnologiyaları ilə tikinti sahələrinin təhlükəsizliyini təmin edən innovativ platforma.',
  keywords: ['İnşaat', 'Construction', 'AI Security', 'Tikinti Təhlükəsizliyi', 'Monitorinq', 'IoT', 'Contheron', 'Süni İntellekt'],
  authors: [{ name: 'Contheron Team' }],
  creator: 'Contheron',
  publisher: 'Contheron',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: [
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon.ico', sizes: 'any' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
    other: [
      {
        rel: 'manifest',
        url: '/site.webmanifest',
      },
    ],
  },
  manifest: '/site.webmanifest',
  openGraph: {
    title: 'Contheron - AI Security & Monitoring',
    description: 'AI əsaslı təhlükəsizlik və monitorinq sistemləri ilə müəssisənizi qoruyun.',
    url: 'https://link.contheron.com',
    siteName: 'Contheron',
    images: [
      {
        url: '/conlogo.jpg',
        width: 1200,
        height: 630,
        alt: 'Contheron Logo Preview',
      },
    ],
    locale: 'az_AZ',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contheron - Link Hub',
    description: 'AI əsaslı təhlükəsizlik və monitorinq sistemləri.',
    creator: '@contheron',
    images: ['/conlogo.jpg'],
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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="az">
      <body className={`${inter.className} bg-zinc-950 text-zinc-50 min-h-screen antialiased selection:bg-amber-500/30 selection:text-amber-200`}>
        {children}
      </body>
    </html>
  );
}
