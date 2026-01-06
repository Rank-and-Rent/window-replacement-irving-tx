import type { Metadata } from 'next'
import { Analytics } from '@vercel/analytics/react'
import './globals.css'
import { StickyCTA } from '@/components/sticky-cta'

export const metadata: Metadata = {
  metadataBase: new URL('https://replacementwindowsirving.com'),
  title: {
    default: 'Replacement Windows Irving TX | Andersen, Pella & Jeld-Wen Dealer',
    template: '%s | Replacement Windows of Irving',
  },
  description: 'Premier window replacement services in Irving, TX. Andersen, Pella & Jeld-Wen windows. Expert installation of double-hung, casement, bay, bow & specialty windows. Free estimates. Call 972-284-7995.',
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
    title: 'Best Window Replacement in Irving, TX',
    description: 'Premier window replacement services in Irving, TX. Andersen, Pella & Jeld-Wen windows. Expert installation of double-hung, casement, bay, bow & specialty windows.',
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
        <link rel="icon" href="/favicon/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon/favicon-16x16.png" sizes="16x16" type="image/png" />
        <link rel="icon" href="/favicon/favicon-32x32.png" sizes="32x32" type="image/png" />
        <link rel="apple-touch-icon" href="/favicon/apple-touch-icon.png" />
        <link rel="manifest" href="/favicon/site.webmanifest" />
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
              '@type': 'HomeAndConstructionBusiness',
              '@id': 'https://replacementwindowsirving.com/#organization',
              name: 'Replacement Windows of Irving',
              alternateName: 'Irving Window Replacement',
              description: 'Premier window replacement services in Irving, TX. Andersen, Pella & Jeld-Wen windows.',
              url: 'https://replacementwindowsirving.com',
              telephone: '+1-972-284-7995',
              email: 'info@replacementwindowsirving.com',
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
              areaServed: [
                { '@type': 'City', name: 'Irving', containedInPlace: { '@type': 'State', name: 'Texas' } },
                { '@type': 'City', name: 'Las Colinas' },
                { '@type': 'City', name: 'Coppell' },
                { '@type': 'City', name: 'Grapevine' },
                { '@type': 'City', name: 'Carrollton' },
                { '@type': 'City', name: 'Farmers Branch' },
                { '@type': 'City', name: 'Grand Prairie' },
              ],
              knowsAbout: [
                'Window Replacement',
                'Window Installation',
                'Energy Efficient Windows',
                'Double-Hung Windows',
                'Casement Windows',
                'Bay Windows',
                'Bow Windows',
              ],
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
              currenciesAccepted: 'USD',
              paymentAccepted: 'Cash, Credit Card, Financing',
              image: 'https://replacementwindowsirving.com/og-image.jpg',
              logo: 'https://replacementwindowsirving.com/logo.png',
              slogan: 'Premium Window Replacement for Irving Homes',
              foundingDate: '2010',
              aggregateRating: {
                '@type': 'AggregateRating',
                ratingValue: '4.9',
                reviewCount: '143',
                bestRating: '5',
                worstRating: '1',
              },
              sameAs: [],
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'WebSite',
              '@id': 'https://replacementwindowsirving.com/#website',
              name: 'Replacement Windows of Irving',
              url: 'https://replacementwindowsirving.com',
              publisher: { '@id': 'https://replacementwindowsirving.com/#organization' },
              potentialAction: {
                '@type': 'SearchAction',
                target: {
                  '@type': 'EntryPoint',
                  urlTemplate: 'https://replacementwindowsirving.com/search?q={search_term_string}',
                },
                'query-input': 'required name=search_term_string',
              },
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Organization',
              '@id': 'https://replacementwindowsirving.com/#org',
              name: 'Replacement Windows of Irving',
              url: 'https://replacementwindowsirving.com',
              logo: 'https://replacementwindowsirving.com/logo.png',
              contactPoint: {
                '@type': 'ContactPoint',
                telephone: '+1-972-284-7995',
                contactType: 'customer service',
                areaServed: 'US',
                availableLanguage: ['English', 'Spanish'],
              },
            }),
          }}
        />
      </head>
      <body className="antialiased">
        {children}
        <StickyCTA />
        <Analytics />
      </body>
    </html>
  )
}
