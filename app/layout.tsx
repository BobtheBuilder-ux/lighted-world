import './globals.css';
import type { Metadata } from 'next';
import { Inter, Poppins } from 'next/font/google';

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const poppins = Poppins({ 
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-poppins',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://lightedworld.org'), // Replace with your actual domain
  title: 'LightedWorld - Discover Your True Light',
  description: 'Empowering individuals to discover their true identity and maximize their potential through transformational guidance and support.',
  openGraph: {
    title: 'LightedWorld - Discover Your True Light',
    description: 'Empowering individuals to discover their true identity and maximize their potential.',
    url: 'https://lightedworld.org',
    siteName: 'LightedWorld',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'LightedWorld - Discover Your True Light',
    description: 'Empowering individuals to discover their true identity and maximize their potential.',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable}`}>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#F4A261" />
      </head>
      <body className={`${inter.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}