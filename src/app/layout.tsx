import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  metadataBase: new URL('https://replacementwindowsirving.com'),
  title: {
    default: 'Replacement Windows Irving TX | Andersen, Pella & Jeld-Wen Dealer',
    template: '%s | Replacement Windows of Irving',
  },
  description: 'Premier window replacement services in Irving, TX. Authorized dealer for Andersen, Pella & Jeld-Wen windows. Expert installation of double-hung, casement, bay, bow & specialty windows. Free estimates. Call 972-284-7995.',
  keywords: [
    'window replacement Irving TX',
    'replacement windows Irving',
    'Andersen windows Irving',
    'Pella windows Irving TX',
    'Jeld-Wen windows Texas',
    'double hung windows Irving',
    'casement windows Irving TX',
    'bay windows installation',
    'bow windows Irving',
    'window installation Irving Texas',
    'energy efficient windows Irving',
    'vinyl windows Irving TX',
    'window contractor Irving',
  ],
  authors: [{ name: 'Replacement Windows of Irving' }],
  creator: 'Replacement Windows of Irving',
  publisher: 'Replacement Windows of Irving',
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
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://replacementwindowsirving.com',
    siteName: 'Replacement Windows of Irving',
    title: 'Replacement Windows Irving TX | Andersen, Pella & Jeld-Wen Dealer',
    description: 'Premier window replacement services in Irving, TX. Authorized dealer for Andersen, Pella & Jeld-Wen windows. Expert installation of double-hung, casement, bay, bow & specialty windows.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Replacement Windows of Irving - Premium Window Installation',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Replacement Windows Irving TX | Andersen, Pella & Jeld-Wen Dealer',
    description: 'Premier window replacement services in Irving, TX. Expert installation of Andersen, Pella & Jeld-Wen windows.',
    images: ['/og-image.jpg'],
  },
  alternates: {
    canonical: 'https://replacementwindowsirving.com',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta name="theme-color" content="#515151" />
        <meta name="geo.region" content="US-TX" />
        <meta name="geo.placename" content="Irving" />
        <meta name="geo.position" content="32.8140;-96.9489" />
        <meta name="ICBM" content="32.8140, -96.9489" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'LocalBusiness',
              name: 'Replacement Windows of Irving',
              description: 'Premier window replacement services in Irving, TX. Authorized dealer for Andersen, Pella & Jeld-Wen windows.',
              url: 'https://replacementwindowsirving.com',
              telephone: '+1-972-284-7995',
              address: {
                '@type': 'PostalAddress',
                streetAddress: '909 Hidden Ridge Dr #180',
                addressLocality: 'Irving',
                addressRegion: 'TX',
                postalCode: '75038',
                addressCountry: 'US',
              },
              geo: {
                '@type': 'GeoCoordinates',
                latitude: 32.8140,
                longitude: -96.9489,
              },
              areaServed: {
                '@type': 'City',
                name: 'Irving',
                containedInPlace: {
                  '@type': 'State',
                  name: 'Texas',
                },
              },
              serviceType: [
                'Window Replacement',
                'Window Installation',
                'Double-Hung Windows',
                'Single-Hung Windows',
                'Casement Windows',
                'Bay Windows',
                'Bow Windows',
                'Awning Windows',
                'Sliding Windows',
                'Picture Windows',
                'Specialty Shape Windows',
              ],
              brand: [
                { '@type': 'Brand', name: 'Andersen' },
                { '@type': 'Brand', name: 'Pella' },
                { '@type': 'Brand', name: 'Jeld-Wen' },
              ],
              openingHoursSpecification: [
                {
                  '@type': 'OpeningHoursSpecification',
                  dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
                  opens: '08:00',
                  closes: '18:00',
                },
                {
                  '@type': 'OpeningHoursSpecification',
                  dayOfWeek: 'Saturday',
                  opens: '09:00',
                  closes: '14:00',
                },
              ],
              priceRange: '$$',
              image: 'https://replacementwindowsirving.com/og-image.jpg',
              sameAs: [],
            }),
          }}
        />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  )
}
