import type { Metadata } from 'next'
import { PageHeader } from '@/components/page-header'
import { PageFooter } from '@/components/page-footer'

export const metadata: Metadata = {
  title: 'Window Replacement Grand Prairie TX | Quality Installation',
  description: 'Window replacement in Grand Prairie, TX. Serving Joe Pool Lake to Dalworth Park. Andersen, Pella & Jeld-Wen windows. Free estimates: 972-284-7995',
}

export default function GrandPrairiePage() {
  return (
    <div className="min-h-screen bg-white">
      <PageHeader />

      <section className="relative min-h-[60vh] flex items-center pt-32">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1600210492493-0946911123ea?w=1920&q=80)',
          }}
        />
        <div className="hero-overlay absolute inset-0" />
        
        <div className="relative z-10 w-full max-w-[1400px] mx-auto px-6 lg:px-12">
          <h1 className="text-heading-serif text-4xl md:text-5xl lg:text-6xl text-white font-light mb-6">
            Window Replacement in Grand Prairie, TX
          </h1>
          <p className="text-white/90 text-lg md:text-xl max-w-2xl mb-8">
            Professional window installation for Grand Prairie homes—from lakefront properties to established neighborhoods. Energy-efficient solutions for Texas living.
          </p>
          <a href="/contact" className="btn-white">
            Get Free Quote
          </a>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <img
                src="https://images.unsplash.com/photo-1600573472550-8090b5e0745e?w=1000&q=80"
                alt="Grand Prairie window replacement"
                className="w-full aspect-[4/5] object-cover"
              />
            </div>
            
            <div>
              <h2 className="text-heading-serif text-3xl md:text-4xl text-charcoal-900 font-light mb-6">
                Serving Grand Prairie since 2008
              </h2>
              <p className="text-charcoal-600 text-base leading-relaxed mb-6">
                Grand Prairie's position between Dallas and Fort Worth makes it a vibrant residential hub with diverse housing—from waterfront homes along Joe Pool Lake to family neighborhoods near Lone Star Park. We've replaced windows throughout Grand Prairie, understanding how lakefront humidity affects window performance and how open prairie exposures demand superior wind resistance and energy efficiency.
              </p>
              <p className="text-charcoal-600 text-base leading-relaxed mb-6">
                The city's growth through the 1970s-90s means many Grand Prairie homes now need window replacement as original installations reach end-of-life. Those single-pane aluminum windows leak air, allow excessive heat gain, and cost hundreds annually in wasted energy. Modern vinyl or fiberglass replacements with Low-E glass cut cooling costs by 25-35% while dramatically improving comfort.
              </p>
              <p className="text-charcoal-600 text-base leading-relaxed">
                Joe Pool Lake properties face unique window challenges from humidity and sun reflection off water. We recommend enhanced weatherstripping and moisture-resistant frames that withstand lakefront conditions. Proper installation prevents the condensation and rot issues that plague inferior window jobs in high-humidity environments.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-stone-100">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-12">
          <h2 className="text-heading-serif text-3xl md:text-4xl text-charcoal-900 font-light mb-12">
            Grand Prairie neighborhoods
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-[13px] tracking-[0.15em] uppercase font-medium text-charcoal-900 mb-4">
                North Grand Prairie
              </h3>
              <ul className="text-charcoal-600 text-sm space-y-2">
                <li>Dalworth Park</li>
                <li>Grand Peninsula</li>
                <li>Carrier Parkway</li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-[13px] tracking-[0.15em] uppercase font-medium text-charcoal-900 mb-4">
                Joe Pool Lake Area
              </h3>
              <ul className="text-charcoal-600 text-sm space-y-2">
                <li>Lynn Creek</li>
                <li>Riverside Estates</li>
                <li>Lake Ridge</li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-[13px] tracking-[0.15em] uppercase font-medium text-charcoal-900 mb-4">
                Southwest Areas
              </h3>
              <ul className="text-charcoal-600 text-sm space-y-2">
                <li>Mountain Creek</li>
                <li>Pleasant Run</li>
                <li>South Grand Prairie</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-12">
          <h2 className="text-heading-serif text-3xl md:text-4xl text-charcoal-900 font-light mb-8 text-center">
            Why choose us for Grand Prairie window replacement
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            <div>
              <h3 className="text-xl font-light text-charcoal-900 mb-4">Factory-Trained Installers</h3>
              <p className="text-charcoal-600 leading-relaxed">
                Our installation teams complete manufacturer certification programs ensuring they understand proper installation techniques for Andersen, Pella, and Jeld-Wen products. This training prevents the common errors—improper shimming, inadequate sealing, misalignment—that compromise window performance and void warranties.
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-light text-charcoal-900 mb-4">Comprehensive Warranties</h3>
              <p className="text-charcoal-600 leading-relaxed">
                Every window installation includes full manufacturer product warranties plus our workmanship guarantee. If installation issues arise, we return promptly to make things right at no cost. This dual warranty protection gives Grand Prairie homeowners complete peace of mind about their investment.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-stone-100">
        <div className="max-w-[800px] mx-auto px-6 text-center">
          <h2 className="text-heading-serif text-3xl md:text-4xl text-charcoal-900 font-light mb-8">
            Get your Grand Prairie window estimate
          </h2>
          <p className="text-charcoal-600 mb-10">
            Contact us for a free consultation and detailed quote. Most Grand Prairie estimates completed within 48 hours of initial contact.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/contact" className="btn-outline-dark">
              Request Estimate
            </a>
            <a href="tel:972-284-7995" className="btn-dark">
              Call 972-284-7995
            </a>
          </div>
        </div>
      </section>

      <PageFooter />
    </div>
  )
}

