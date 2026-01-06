import type { Metadata } from 'next'
import { PageHeader } from '@/components/page-header'
import { PageFooter } from '@/components/page-footer'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Window Materials Irving TX | Vinyl, Aluminum, Fibrex, Fiberglass, Wood',
  description: 'Explore all window materials in Irving, TX. Vinyl, aluminum, Fibrex, fiberglass, wood clad, and wood windows. Professional installation near DFW Airport. Call 972-284-7995.',
  keywords: 'window materials Irving TX, vinyl windows, aluminum windows, Fibrex windows, fiberglass windows, wood clad windows, wood windows',
  alternates: {
    canonical: 'https://replacementwindowsirving.com/materials',
  },
}

export default function MaterialsIndexPage() {
  // Define the specific material types to display in order
  const materialServices = [
    {
      slug: 'vinyl-windows',
      name: 'Vinyl Windows',
      short: 'Low-maintenance vinyl windows with superior energy efficiency',
      route: '/windows/vinyl-windows',
      image: '/window-types/vinyl-irving-tx.jpg',
    },
    {
      slug: 'aluminum-windows',
      name: 'Aluminum Windows',
      short: 'Durable aluminum windows with modern thermal efficiency',
      route: '/windows/aluminum-windows',
      image: '/window-types/aluminum-irving-tx.jpg',
    },
    {
      slug: 'fibrex-windows',
      name: 'Fibrex Windows',
      short: "Andersen's premium composite material with wood-like beauty",
      route: '/windows/fibrex-windows',
      image: '/window-types/fibrex-irving-tx.jpg',
    },
    {
      slug: 'fiberglass-windows',
      name: 'Fiberglass Windows',
      short: 'Ultimate strength and insulation with authentic wood appearance',
      route: '/windows/fiberglass-windows',
      image: '/window-types/fiberglass-irving-tx.jpg',
    },
    {
      slug: 'wood-clad-windows',
      name: 'Wood Clad Windows',
      short: 'Authentic wood interiors with weather-resistant exterior protection',
      route: '/windows/wood-clad-windows',
      image: '/window-types/wood-clad-irving-tx.jpg',
    },
    {
      slug: 'wood-windows',
      name: 'Wood Windows',
      short: 'Traditional wood windows with natural beauty and superior insulation',
      route: '/windows/wood-windows',
      image: '/window-types/wood-irving-tx.jpg',
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      <PageHeader />

      {/* Hero */}
      <section className="relative min-h-[60vh] flex items-center pt-32">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(/window-types/vinyl-irving-tx.jpg)',
          }}
        />
        <div className="hero-overlay absolute inset-0" />
        
        <div className="relative z-10 w-full max-w-[1400px] mx-auto px-6 lg:px-12 text-center">
          <h1 className="text-heading-serif text-4xl md:text-5xl lg:text-6xl text-white font-light mb-6 max-w-3xl mx-auto">
            Window Materials in Irving, TX
          </h1>
          <p className="text-white/90 text-lg md:text-xl max-w-2xl mx-auto mb-8">
            Choose the perfect material for your Irving home&apos;s windows
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
            Premium Window Materials for Every Need
          </h2>
          <p className="text-charcoal-600 text-base leading-relaxed max-w-3xl mx-auto">
            The material you choose for your windows impacts everything from energy efficiency to maintenance requirements. We offer a comprehensive selection of premium window materials, each with unique benefits designed to meet Irving homeowners&apos; diverse needs and preferences.
          </p>
        </div>
      </section>

      {/* Materials Grid */}
      <section className="py-20 bg-stone-100">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <h2 className="text-heading-serif text-3xl md:text-4xl text-charcoal-900 font-light text-center mb-16">
            Window Materials
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {materialServices.map((service) => (
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

      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-12">
          <h2 className="text-heading-serif text-3xl md:text-4xl text-charcoal-900 font-light text-center mb-16">
            Why Material Choice Matters
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <h3 className="text-[13px] tracking-[0.15em] uppercase font-medium text-charcoal-900 mb-4">
                Energy Efficiency
              </h3>
              <p className="text-charcoal-600 text-sm leading-relaxed">
                The right material significantly impacts your home&apos;s insulation and energy costs.
              </p>
            </div>
            
            <div className="text-center">
              <h3 className="text-[13px] tracking-[0.15em] uppercase font-medium text-charcoal-900 mb-4">
                Durability
              </h3>
              <p className="text-charcoal-600 text-sm leading-relaxed">
                Premium materials withstand Irving&apos;s climate extremes for decades.
              </p>
            </div>
            
            <div className="text-center">
              <h3 className="text-[13px] tracking-[0.15em] uppercase font-medium text-charcoal-900 mb-4">
                Maintenance
              </h3>
              <p className="text-charcoal-600 text-sm leading-relaxed">
                Different materials require varying levels of care and upkeep.
              </p>
            </div>
            
            <div className="text-center">
              <h3 className="text-[13px] tracking-[0.15em] uppercase font-medium text-charcoal-900 mb-4">
                Aesthetics
              </h3>
              <p className="text-charcoal-600 text-sm leading-relaxed">
                Each material offers unique visual appeal to match your home&apos;s style.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 md:py-32 bg-charcoal-500">
        <div className="max-w-[800px] mx-auto px-6 text-center">
          <h2 className="text-heading-serif text-3xl md:text-4xl text-white font-light mb-6 leading-relaxed">
            Ready to choose the perfect material for your Irving windows?
          </h2>
          <p className="text-stone-300 text-base mb-10">
            Get expert guidance on selecting the ideal window material for your home.
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
