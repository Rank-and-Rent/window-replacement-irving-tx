import type { Metadata } from 'next'
import { PageHeader } from '@/components/page-header'
import { PageFooter } from '@/components/page-footer'
import Link from 'next/link'
import { servicesData } from '@/data'

export const metadata: Metadata = {
  title: 'Window Types & Materials Irving TX | Replacement Windows',
  description: 'Explore all window types and materials in Irving, TX. Double-hung, casement, sliding, vinyl, aluminum, Fibrex, fiberglass, wood clad, and wood windows. Professional installation near DFW Airport. Call 972-284-7995.',
  keywords: 'window types Irving TX, window materials, window styles Irving, vinyl windows, aluminum windows, Fibrex windows, fiberglass windows, wood clad windows',
}

export default function WindowsIndexPage() {
  // Define the specific window types to display in order
  const windowServices = [
    {
      slug: 'double-hung-windows',
      name: 'Double-Hung Windows',
      short: 'Classic double-hung windows with top and bottom sashes that slide vertically',
      route: '/windows/double-hung-windows',
      image: '/windows/double-hung-windows-irving-tx.avif',
    },
    {
      slug: 'single-hung-windows',
      name: 'Single-Hung Windows',
      short: 'Traditional windows with a fixed upper sash and movable lower sash',
      route: '/windows/single-hung-windows',
      image: '/windows/single-hung-windows-irving-tx.jpg',
    },
    {
      slug: 'awning-windows',
      name: 'Awning Windows',
      short: 'Top-hinged windows that open outward, ideal for ventilation during rain',
      route: '/windows/awning-windows',
      image: '/windows/awning-windows-irving-tx.avif',
    },
    {
      slug: 'casement-windows',
      name: 'Casement Windows',
      short: 'Side-hinged windows that open outward for maximum ventilation',
      route: '/windows/casement-windows',
      image: '/windows/casement-windows-irving-tx.webp',
    },
    {
      slug: 'sliding-windows',
      name: 'Sliding Windows',
      short: 'Horizontally sliding windows perfect for wide openings',
      route: '/windows/sliding-windows',
      image: '/windows/sliding-windows-irving-tx.webp',
    },
    {
      slug: 'picture-windows',
      name: 'Picture Windows',
      short: 'Large fixed windows that provide unobstructed views and natural light',
      route: '/windows/picture-windows',
      image: '/windows/picture-windows-irving-tx.jpg',
    },
    {
      slug: 'bay-bow-windows',
      name: 'Bay & Bow Windows',
      short: 'Multi-panel windows that project outward, creating additional interior space',
      route: '/windows/bay-bow-windows',
      image: '/windows/bay-bow-windows-irving-tx.jpg',
    },
    {
      slug: 'special-shape-windows',
      name: 'Special Shape Windows',
      short: 'Custom-shaped windows including arched, circular, and geometric designs',
      route: '/windows/special-shape-windows',
      image: '/windows/special-shape-windows-irving-tx.jpg',
    },
  ]
  
  const materialServices = servicesData.filter(s => s.category === 'Materials')

  return (
    <div className="min-h-screen bg-white">
      <PageHeader />

      {/* Hero */}
      <section className="relative min-h-[60vh] flex items-center pt-32">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(/windows/double-hung-windows-irving-tx.webp)',
          }}
        />
        <div className="hero-overlay absolute inset-0" />
        
        <div className="relative z-10 w-full max-w-[1400px] mx-auto px-6 lg:px-12 text-center">
          <h1 className="text-heading-serif text-4xl md:text-5xl lg:text-6xl text-white font-light mb-6 max-w-3xl mx-auto">
            Window Replacement in Irving, TX
          </h1>
          <p className="text-white/90 text-lg md:text-xl max-w-2xl mx-auto mb-8">
            Premium window solutions for Irving&apos;s professional community near DFW Airport and Las Colinas
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
            Professional-Grade Windows for Irving Homes
          </h2>
          <p className="text-charcoal-600 text-base leading-relaxed max-w-3xl mx-auto">
            Irving professionals demand windows that perform as well as they do. Our selection offers exceptional sound dampening for airport proximity, energy efficiency for busy lifestyles, and executive aesthetics that complement Las Colinas' corporate environment.
          </p>
        </div>
      </section>

      {/* Window Styles Grid */}
      <section className="py-20 bg-stone-100">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <h2 className="text-heading-serif text-3xl md:text-4xl text-charcoal-900 font-light text-center mb-16">
            Window Styles
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {windowServices.map((service) => (
              <Link
                key={service.slug}
                href={service.route}
                className="group bg-white overflow-hidden hover:shadow-lg transition-shadow duration-300"
              >
                {service.image && (
                  <div className="aspect-[4/3] overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.name}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                )}
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

      {/* Window Materials Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <h2 className="text-heading-serif text-3xl md:text-4xl text-charcoal-900 font-light text-center mb-16">
            Window Materials
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {materialServices.map((service) => (
              <Link
                key={service.slug}
                href={service.route}
                className="group bg-stone-100 overflow-hidden hover:shadow-lg transition-shadow duration-300"
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
      <section className="py-20 bg-stone-100">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-12">
          <h2 className="text-heading-serif text-3xl md:text-4xl text-charcoal-900 font-light text-center mb-16">
            Why Irving Professionals Choose Us
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <h3 className="text-[13px] tracking-[0.15em] uppercase font-medium text-charcoal-900 mb-4">
                Sound Dampening
              </h3>
              <p className="text-charcoal-600 text-sm leading-relaxed">
                Engineered for airport proximity, our windows reduce aircraft noise significantly.
              </p>
            </div>
            
            <div className="text-center">
              <h3 className="text-[13px] tracking-[0.15em] uppercase font-medium text-charcoal-900 mb-4">
                Professional Installation
              </h3>
              <p className="text-charcoal-600 text-sm leading-relaxed">
                Corporate-grade installation that respects your busy schedule and property.
              </p>
            </div>
            
            <div className="text-center">
              <h3 className="text-[13px] tracking-[0.15em] uppercase font-medium text-charcoal-900 mb-4">
                Energy Efficiency
              </h3>
              <p className="text-charcoal-600 text-sm leading-relaxed">
                Smart energy performance reduces costs for Las Colinas' professional community.
              </p>
            </div>
            
            <div className="text-center">
              <h3 className="text-[13px] tracking-[0.15em] uppercase font-medium text-charcoal-900 mb-4">
                Premium Brands
              </h3>
              <p className="text-charcoal-600 text-sm leading-relaxed">
                Andersen, Pella, JELD-WEN, and Marvin windows for executive quality.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 md:py-32 bg-charcoal-500">
        <div className="max-w-[800px] mx-auto px-6 text-center">
          <h2 className="text-heading-serif text-3xl md:text-4xl text-white font-light mb-6 leading-relaxed">
            Ready to upgrade your Irving windows?
          </h2>
          <p className="text-stone-300 text-base mb-10">
            Get a free consultation and quote for professional window replacement near DFW Airport.
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
