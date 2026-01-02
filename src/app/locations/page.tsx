import type { Metadata } from 'next'
import { PageHeader } from '@/components/page-header'
import { PageFooter } from '@/components/page-footer'
import Link from 'next/link'
import { locationsData } from '@/data'

export const metadata: Metadata = {
  title: 'Service Areas Irving TX | Window & Door Installation Locations',
  description: 'Professional window and door installation serving Irving, TX and surrounding areas. We serve the entire DFW metroplex. Call 972-284-7995 for free estimate.',
  keywords: 'window installation Irving TX, door installation DFW, service areas, Irving window replacement',
}

export default function LocationsIndexPage() {
  // Get only city-type locations for the main page
  const cities = locationsData.filter(loc => loc.type === 'city')

  return (
    <div className="min-h-screen bg-white">
      <PageHeader />

      {/* Hero */}
      <section className="py-20 bg-stone-100 pt-32">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 text-center">
          <h1 className="text-heading-serif text-4xl md:text-5xl lg:text-6xl text-charcoal-900 font-light mb-6">
            Service Areas
          </h1>
          <p className="text-charcoal-600 text-xl max-w-2xl mx-auto">
            Professional window and door installation throughout the DFW metroplex
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-12 text-center">
          <h2 className="text-heading-serif text-3xl md:text-4xl text-charcoal-900 font-light mb-8">
            Serving Irving and Beyond
          </h2>
          <p className="text-charcoal-600 text-base leading-relaxed max-w-3xl mx-auto">
            Based in Irving, TX, we proudly serve homeowners throughout the Dallas-Fort Worth metroplex. Our experienced installation teams bring premium window and door solutions to your neighborhood, backed by local expertise and commitment to excellence.
          </p>
        </div>
      </section>

      {/* Locations Grid */}
      <section className="py-20 bg-stone-100">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <h2 className="text-heading-serif text-3xl md:text-4xl text-charcoal-900 font-light text-center mb-16">
            Cities We Serve
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {cities.map((location) => (
              <Link
                key={location.slug}
                href={location.route}
                className="group bg-white p-8 hover:shadow-lg transition-shadow duration-300 text-center"
              >
                <h3 className="text-heading-serif text-2xl text-charcoal-900 font-light group-hover:text-charcoal-600 transition-colors">
                  {location.name}
                </h3>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Local */}
      <section className="py-20 bg-white">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-12">
          <h2 className="text-heading-serif text-3xl md:text-4xl text-charcoal-900 font-light text-center mb-16">
            Why Choose Local Installation
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <h3 className="text-[13px] tracking-[0.15em] uppercase font-medium text-charcoal-900 mb-4">
                Local Expertise
              </h3>
              <p className="text-charcoal-600 text-sm leading-relaxed">
                We understand Texas climate challenges and building requirements.
              </p>
            </div>
            
            <div className="text-center">
              <h3 className="text-[13px] tracking-[0.15em] uppercase font-medium text-charcoal-900 mb-4">
                Fast Response
              </h3>
              <p className="text-charcoal-600 text-sm leading-relaxed">
                Quick consultations, measurements, and installations in your area.
              </p>
            </div>
            
            <div className="text-center">
              <h3 className="text-[13px] tracking-[0.15em] uppercase font-medium text-charcoal-900 mb-4">
                Community Focused
              </h3>
              <p className="text-charcoal-600 text-sm leading-relaxed">
                We&apos;re invested in the communities we serve with quality work.
              </p>
            </div>
            
            <div className="text-center">
              <h3 className="text-[13px] tracking-[0.15em] uppercase font-medium text-charcoal-900 mb-4">
                Ongoing Support
              </h3>
              <p className="text-charcoal-600 text-sm leading-relaxed">
                Local service means we&apos;re here for warranty and support needs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 md:py-32 bg-charcoal-500">
        <div className="max-w-[800px] mx-auto px-6 text-center">
          <h2 className="text-heading-serif text-3xl md:text-4xl text-white font-light mb-6 leading-relaxed">
            Serving your neighborhood
          </h2>
          <p className="text-stone-300 text-base mb-10">
            Get a free consultation for window and door installation in your area.
          </p>
          <a href="/contact" className="btn-white">
            Get in Touch
          </a>
        </div>
      </section>

      <PageFooter />
    </div>
  )
}
