import type { Metadata } from 'next'
import { PageHeader } from '@/components/page-header'
import { PageFooter } from '@/components/page-footer'

export const metadata: Metadata = {
  title: 'Window Replacement Coppell TX | Premium Installation Services',
  description: 'Professional window replacement throughout Coppell, TX. Serving all Coppell neighborhoods. Andersen, Pella & Jeld-Wen authorized dealer. Expert service: 972-284-7995',
}

export default function CoppellPage() {
  return (
    <div className="min-h-screen bg-white">
      <PageHeader />

      <section className="relative min-h-[60vh] flex items-center pt-32">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(/locations/window-replacement-coppell-tx-1.jpg)',
          }}
        />
        <div className="hero-overlay absolute inset-0" />

        <div className="relative z-10 w-full max-w-[1400px] mx-auto px-6 lg:px-12">
          <h1 className="text-heading-serif text-4xl md:text-5xl lg:text-6xl text-white font-light mb-6">
            Window Replacement in Coppell, TX
          </h1>
          <p className="text-white/90 text-lg md:text-xl max-w-2xl mb-8">
            Serving Coppell with premium replacement windows. From historic homes to modern developments, we deliver quality installations backed by manufacturer warranties.
          </p>
          <a href="/contact" className="btn-white">
            Get Quote
          </a>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <img
                src="/locations/window-replacement-coppell-tx-1.jpg"
                alt="Coppell window replacement"
                className="w-full aspect-[4/5] object-cover"
              />
            </div>

            <div>
              <h2 className="text-heading-serif text-3xl md:text-4xl text-charcoal-900 font-light mb-6">
                Window expertise for Coppell's communities
              </h2>
              <p className="text-charcoal-600 text-base leading-relaxed mb-6">
                Coppell's residential landscape features both established neighborhoods and newer master-planned communities. From the historic charm of Old Town Coppell to the modern amenities of Coppell City Place, we understand the architectural diversity that makes each home unique. Our experienced team brings specialized knowledge for Coppell's building styles and homeowner preferences.
              </p>
              <p className="text-charcoal-600 text-base leading-relaxed mb-6">
                The city's location creates specific climate considerations. Coppell's proximity to DFW Airport and major highways means many homes benefit from enhanced sound control. We also address the unique solar exposure patterns that affect homes in this area, ensuring optimal energy efficiency and comfort.
              </p>
              <p className="text-charcoal-600 text-base leading-relaxed">
                As a locally-based company, we take pride in serving our Coppell neighbors. Our transparent pricing, professional installations, and comprehensive warranties have made us the trusted choice for window replacement throughout Coppell's communities.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-stone-100">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-12">
          <h2 className="text-heading-serif text-3xl md:text-4xl text-charcoal-900 font-light text-center mb-16">
            Coppell neighborhoods we serve
          </h2>

          <div className="grid md:grid-cols-3 gap-6 text-sm">
            <div>
              <h3 className="text-[11px] tracking-[0.2em] uppercase font-medium text-charcoal-900 mb-3">North Coppell</h3>
              <ul className="text-charcoal-600 space-y-1">
                <li>Coppell City Place</li>
                <li>North Lake</li>
                <li>Cottonwood Valley</li>
                <li>Hackberry Creek</li>
              </ul>
            </div>
            <div>
              <h3 className="text-[11px] tracking-[0.2em] uppercase font-medium text-charcoal-900 mb-3">Central Coppell</h3>
              <ul className="text-charcoal-600 space-y-1">
                <li>Old Town Coppell</li>
                <li>Country Club Estates</li>
                <li>Village at NorthRidge</li>
                <li>Coppell Oaks</li>
              </ul>
            </div>
            <div>
              <h3 className="text-[11px] tracking-[0.2em] uppercase font-medium text-charcoal-900 mb-3">South Coppell</h3>
              <ul className="text-charcoal-600 space-y-1">
                <li>Southlake</li>
                <li>Grapevine</li>
                <li>Lewisville</li>
                <li>North Richland Hills</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-12">
          <h2 className="text-heading-serif text-3xl md:text-4xl text-charcoal-900 font-light mb-12">
            Coppell climate and window performance
          </h2>

          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-xl font-light text-charcoal-900 mb-4">Sound Control Solutions</h3>
              <p className="text-charcoal-600 leading-relaxed mb-4">
                Coppell's location near DFW Airport and major highways creates unique noise challenges for many homeowners. Aircraft approach patterns and traffic noise can significantly impact quality of life. We specialize in acoustic window solutions that dramatically reduce exterior noise transmission, creating peaceful indoor environments despite Coppell's proximity to transportation corridors.
              </p>
              <p className="text-charcoal-600 leading-relaxed">
                Laminated glass windows reduce exterior noise by 30-40% compared to standard insulated glass. This upgrade proves particularly valuable for Coppell homes near flight paths or busy roadways, transforming sleep quality and overall comfort. Many Coppell homeowners report barely noticing overhead flights after window replacement.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-light text-charcoal-900 mb-4">Energy Efficiency Focus</h3>
              <p className="text-charcoal-600 leading-relaxed mb-4">
                Texas climate extremes demand windows that perform in both scorching summers and occasional winter chills. Coppell homes benefit from advanced Low-E glass technology that maximizes natural light while minimizing heat transfer. This creates comfortable living spaces with reduced energy costs year-round.
              </p>
              <p className="text-charcoal-600 leading-relaxed">
                Our window specifications account for Coppell's specific solar exposure patterns and weather patterns. Whether your home faces prevailing winds or direct afternoon sun, we recommend solutions that optimize comfort, energy efficiency, and long-term performance. Quality window replacement pays dividends in both comfort and utility bill savings.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-charcoal-500">
        <div className="max-w-[1000px] mx-auto px-6 lg:px-12 text-center">
          <h2 className="text-heading-serif text-3xl md:text-4xl text-white font-light mb-8">
            Coppell's trusted window replacement experts
          </h2>
          <p className="text-stone-300 text-lg leading-relaxed max-w-2xl mx-auto">
            Whether you're updating an established Coppell home or outfitting a new construction project, we bring the specialized expertise your project demands. Factory-trained installers, transparent pricing, and unwavering commitment to quality define every installation we complete in Coppell.
          </p>
        </div>
      </section>

      <section className="py-24 bg-stone-100">
        <div className="max-w-[800px] mx-auto px-6 text-center">
          <h2 className="text-heading-serif text-3xl md:text-4xl text-charcoal-900 font-light mb-8">
            Transform your Coppell home with premium windows
          </h2>
          <p className="text-charcoal-600 mb-10">
            Schedule your complimentary consultation. We'll evaluate your Coppell property, recommend optimal window solutions, and provide detailed pricing with no sales pressure.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/contact" className="btn-outline-dark">
              Book Consultation
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