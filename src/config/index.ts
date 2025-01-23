import { Metadata } from 'next';

const url = 'https://synnestra.com';

export const metadataConfig: Metadata = {
  title: {
    default: 'Synnestra - Your way to success',
    template: '%s | Synnestra',
  },
  description:
    'Synnestra: Innovating the future of software development. Discover our cutting-edge solutions and services.',
  twitter: {
    card: 'summary_large_image',
    title: 'Synnestra',
    description:
      'Synnestra: Innovating the future of software development. Discover our cutting-edge solutions and services.',
    images: ['/twitter-image.png'],
  },
  openGraph: {
    title: 'Synnestra',
    description:
      'Synnestra: Innovating the future of software development. Discover our cutting-edge solutions and services.',
    url,
    siteName: 'Synnestra',
    images: ['/twitter-image.png'],
    locale: 'en_US',
    type: 'website',
  },
  metadataBase: new URL(url),
  applicationName: 'Synnestra',
  keywords: [
    'Synnestra',
    'software',
    'technology',
    'innovation',
    'development',
    'web development',
    'mobile development',
    'artificial intelligence',
    'machine learning',
    'data science',
    'ecommerce',
    'corporate compliance',
    'software company',
    'synnestra',
    'synnestra software',
    'synnestra technology',
    'synnestra innovation',
    'synnestra development',
    'synnestra web development',
    'synnestra mobile development',
    'synnestra artificial intelligence',
    'synnestra machine learning',
    'synnestra data science',
    'synnestra ecommerce',
    'synnestra corporate compliance',
    'synnestra software company',
  ],
  creator: 'Synnestra Team',
  authors: [{ name: 'Synnestra Team', url: 'https://synnestra.com' }],
  abstract:
    'Synnestra: Innovating the future of software development. Discover our cutting-edge solutions and services.',
  category: 'Software Company',
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
  appleWebApp: {
    title: 'Synnestra',
    statusBarStyle: 'default',
  },
};
