import type { Metadata } from 'next'
import { PageHeader } from '@/components/page-header'
import { PageFooter } from '@/components/page-footer'
import Link from 'next/link'
import { servicesData } from '@/data'

export const metadata: Metadata = {
  title: 'Door Installation Irving TX | Entry, Patio, French & More',
  description: 'Professional door installation in Irving, TX. Entry doors, patio doors, French doors, sliding glass doors, storm doors and custom doors from Andersen, Pella, JELD-WEN, Marvin. Call 972-284-7995.',
  keywords: 'door installation Irving TX, entry doors, patio doors, French doors, door replacement Irving',
}

export default function DoorsIndexPage() {
  const doorServices = servicesData.filter(s => s.category === 'Doors')

  return (
    <div className="min-h-screen bg-white">
      <PageHeader />

      {/* Hero */}
      <section className="relative min-h-[60vh] flex items-center pt-32">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(/doors/entry-doors-irving-tx.jpg)',
          }}
        />
        <div className="hero-overlay absolute inset-0" />
        
        <div className="relative z-10 w-full max-w-[1400px] mx-auto px-6 lg:px-12 text-center">
          <h1 className="text-heading-serif text-4xl md:text-5xl lg:text-6xl text-white font-light mb-6 max-w-3xl mx-auto">
            Professional Door Installation in Irving, TX
          </h1>
          <p className="text-white/90 text-lg md:text-xl max-w-2xl mx-auto mb-8">
            Enhance your home with premium doors from Andersen, Pella, JELD-WEN, and Marvin
          </p>
          <a href="/contact" className="btn-white">
            Request Free Estimate
          </a>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-12 text-center">
          <h2 className="text-heading-serif text-3xl md:text-4xl text-charcoal-900 font-light mb-8">
            Transform Your Home with Quality Doors
          </h2>
          <p className="text-charcoal-600 text-base leading-relaxed max-w-3xl mx-auto">
            The right door makes all the difference in your Irving home. Whether you&apos;re looking to enhance curb appeal with a stunning entry door, create seamless indoor-outdoor living with patio doors, or add security and energy efficiency, we offer professional installation of premium doors from the industry&apos;s leading manufacturers.
          </p>
        </div>
      </section>

      {/* Door Services Grid */}
      <section className="py-20 bg-stone-100">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <h2 className="text-heading-serif text-3xl md:text-4xl text-charcoal-900 font-light text-center mb-16">
            Our Door Services
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {doorServices.map((service) => (
              <Link
                key={service.slug}
                href={service.route}
                className="group bg-white overflow-hidden hover:shadow-lg transition-shadow duration-300"
              >
                <div className="p-8">
                  <h3 className="text-[13px] tracking-[0.15em] uppercase font-medium text-charcoal-900 mb-4 group-hover:text-charcoal-600 transition-colors">
                    {service.name}
                  </h3>
                  <p className="text-charcoal-600 text-sm leading-relaxed">
                    {service.short}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-12">
          <h2 className="text-heading-serif text-3xl md:text-4xl text-charcoal-900 font-light text-center mb-16">
            Why Choose Us for Door Installation in Irving
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <h3 className="text-[13px] tracking-[0.15em] uppercase font-medium text-charcoal-900 mb-4">
                Premium Brands
              </h3>
              <p className="text-charcoal-600 text-sm leading-relaxed">
                We install doors from Andersen, Pella, JELD-WEN, and Marvin - the industry&apos;s most trusted manufacturers.
              </p>
            </div>
            
            <div className="text-center">
              <h3 className="text-[13px] tracking-[0.15em] uppercase font-medium text-charcoal-900 mb-4">
                Expert Installation
              </h3>
              <p className="text-charcoal-600 text-sm leading-relaxed">
                Our certified installers ensure proper fit, function, and weatherproofing for lasting performance.
              </p>
            </div>
            
            <div className="text-center">
              <h3 className="text-[13px] tracking-[0.15em] uppercase font-medium text-charcoal-900 mb-4">
                Energy Efficiency
              </h3>
              <p className="text-charcoal-600 text-sm leading-relaxed">
                Modern doors reduce energy costs with superior insulation and weatherstripping.
              </p>
            </div>
            
            <div className="text-center">
              <h3 className="text-[13px] tracking-[0.15em] uppercase font-medium text-charcoal-900 mb-4">
                Comprehensive Warranties
              </h3>
              <p className="text-charcoal-600 text-sm leading-relaxed">
                All installations include manufacturer warranties plus our workmanship guarantee.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 md:py-32 bg-charcoal-500">
        <div className="max-w-[800px] mx-auto px-6 text-center">
          <h2 className="text-heading-serif text-3xl md:text-4xl text-white font-light mb-6 leading-relaxed">
            Ready to upgrade your doors in Irving?
          </h2>
          <p className="text-stone-300 text-base mb-10">
            Get a free consultation and quote for your door installation project.
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
