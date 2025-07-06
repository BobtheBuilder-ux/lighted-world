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
  title: 'LightedWorld - Discover Your True Light',
  description: 'Embark on a transformational journey to uncover your authentic self, maximize your potential, and become all you\'re meant to be.',
  keywords: 'personal transformation, self-discovery, potential maximization, authentic living, personal growth',
  authors: [{ name: 'LightedWorld' }],
  openGraph: {
    title: 'LightedWorld - Discover Your True Light',
    description: 'Embark on a transformational journey to uncover your authentic self, maximize your potential, and become all you\'re meant to be.',
    type: 'website',
    url: 'https://lightedworld.org',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'LightedWorld - Discover Your True Light',
    description: 'Embark on a transformational journey to uncover your authentic self, maximize your potential, and become all you\'re meant to be.',
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