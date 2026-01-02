import type { Metadata } from 'next'
import { PageHeader } from '@/components/page-header'
import { PageFooter } from '@/components/page-footer'
import Link from 'next/link'
import { servicesData } from '@/data'

export const metadata: Metadata = {
  title: 'Window Replacement Irving TX | All Window Types',
  description: 'Professional window replacement in Irving, TX. Double-hung, casement, awning, sliding, picture, bay & bow windows and more from Andersen, Pella, JELD-WEN. Call 972-284-7995.',
  keywords: 'window replacement Irving TX, window installation, Andersen windows, Pella windows, energy efficient windows Irving',
}

export default function WindowsIndexPage() {
  const windowServices = servicesData.filter(s => s.category === 'Windows')

  return (
    <div className="min-h-screen bg-white">
      <PageHeader />

      {/* Hero */}
      <section className="relative min-h-[60vh] flex items-center pt-32">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(/windows/double-hung-windows-irving-tx.avif)',
          }}
        />
        <div className="hero-overlay absolute inset-0" />
        
        <div className="relative z-10 w-full max-w-[1400px] mx-auto px-6 lg:px-12 text-center">
          <h1 className="text-heading-serif text-4xl md:text-5xl lg:text-6xl text-white font-light mb-6 max-w-3xl mx-auto">
            Professional Window Replacement in Irving, TX
          </h1>
          <p className="text-white/90 text-lg md:text-xl max-w-2xl mx-auto mb-8">
            Energy-efficient windows from Andersen, Pella, and JELD-WEN for your home
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
            Upgrade Your Home with Premium Windows
          </h2>
          <p className="text-charcoal-600 text-base leading-relaxed max-w-3xl mx-auto">
            New windows transform your Irving home&apos;s comfort, appearance, and energy efficiency. From classic double-hung windows to expansive picture windows, we install premium window products that reduce energy costs, enhance curb appeal, and improve your quality of life for decades.
          </p>
        </div>
      </section>

      {/* Window Types Grid */}
      <section className="py-20 bg-stone-100">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <h2 className="text-heading-serif text-3xl md:text-4xl text-charcoal-900 font-light text-center mb-16">
            Window Types We Install
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {windowServices.map((service) => (
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
            Why Irving Homeowners Choose Us
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <h3 className="text-[13px] tracking-[0.15em] uppercase font-medium text-charcoal-900 mb-4">
                Premium Brands
              </h3>
              <p className="text-charcoal-600 text-sm leading-relaxed">
                We install windows from Andersen, Pella, and JELD-WEN - trusted names in quality and performance.
              </p>
            </div>
            
            <div className="text-center">
              <h3 className="text-[13px] tracking-[0.15em] uppercase font-medium text-charcoal-900 mb-4">
                Expert Installation
              </h3>
              <p className="text-charcoal-600 text-sm leading-relaxed">
                Our certified installers ensure proper fit and weatherproofing for optimal performance.
              </p>
            </div>
            
            <div className="text-center">
              <h3 className="text-[13px] tracking-[0.15em] uppercase font-medium text-charcoal-900 mb-4">
                Energy Savings
              </h3>
              <p className="text-charcoal-600 text-sm leading-relaxed">
                Modern windows significantly reduce cooling costs in Irving&apos;s hot Texas summers.
              </p>
            </div>
            
            <div className="text-center">
              <h3 className="text-[13px] tracking-[0.15em] uppercase font-medium text-charcoal-900 mb-4">
                Lifetime Warranties
              </h3>
              <p className="text-charcoal-600 text-sm leading-relaxed">
                Many products include lifetime limited warranties plus our workmanship guarantee.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 md:py-32 bg-charcoal-500">
        <div className="max-w-[800px] mx-auto px-6 text-center">
          <h2 className="text-heading-serif text-3xl md:text-4xl text-white font-light mb-6 leading-relaxed">
            Ready to replace your windows in Irving?
          </h2>
          <p className="text-stone-300 text-base mb-10">
            Get a free consultation and quote for your window replacement project.
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
