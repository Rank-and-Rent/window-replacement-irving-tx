import type { Metadata } from 'next'
import { PageHeader } from '@/components/page-header'
import { PageFooter } from '@/components/page-footer'

export const metadata: Metadata = {
  title: 'Window Replacement Plano TX | Energy Efficient Windows',
  description: 'Window replacement in Plano, TX. Serving West Plano, East Plano & Legacy. Premium Andersen, Pella & Jeld-Wen dealer. Call 972-284-7995',
}

export default function PlanoPage() {
  return (
    <div className="min-h-screen bg-white">
      <PageHeader />

      <section className="relative min-h-[60vh] flex items-center pt-32">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=1920&q=80)',
          }}
        />
        <div className="hero-overlay absolute inset-0" />
        
        <div className="relative z-10 w-full max-w-[1400px] mx-auto px-6 lg:px-12">
          <h1 className="text-heading-serif text-4xl md:text-5xl lg:text-6xl text-white font-light mb-6">
            Window Replacement in Plano, TX
          </h1>
          <p className="text-white/90 text-lg md:text-xl max-w-2xl mb-8">
            Serving all Plano neighborhoods with premium windows. From historic homes in Old Town to modern developments in West Plano—quality installation guaranteed.
          </p>
          <a href="/contact" className="btn-white">
            Get Estimate
          </a>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <h2 className="text-heading-serif text-3xl md:text-4xl text-charcoal-900 font-light mb-6">
                Plano's window replacement experts
              </h2>
              <p className="text-charcoal-600 text-base leading-relaxed mb-6">
                Plano's reputation for excellence extends to its housing stock—from well-maintained homes in established neighborhoods like Schimelpfenig and Centennial to contemporary masterpieces in Willow Bend and Legacy. This quality-conscious community demands window replacements that match the care Plano homeowners invest in their properties. We deliver that standard through premium products and meticulous installation practices.
              </p>
              <p className="text-charcoal-600 text-base leading-relaxed mb-6">
                The city's explosive growth since the 1970s created distinct architectural periods visible across Plano's landscape. Ranch homes from the 70s-80s now need window replacement as original installations fail after 40+ years. Modern Low-E glass and insulated frames reduce energy consumption by 35-45% compared to those original single-pane units—transforming energy bills while eliminating drafts and hot spots.
              </p>
              <p className="text-charcoal-600 text-base leading-relaxed">
                Plano's educated, tech-savvy homeowners research thoroughly before making renovation decisions. They appreciate that we specify windows based on specific requirements rather than pushing one-size-fits-all solutions. North-facing windows in tree shade receive different glass recommendations than south exposures receiving full Texas sun. This customized approach optimizes performance for your exact conditions.
              </p>
            </div>
            
            <div>
              <img
                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1000&q=80"
                alt="Plano TX window replacement"
                className="w-full aspect-[4/5] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-stone-100">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-12">
          <h2 className="text-heading-serif text-3xl md:text-4xl text-charcoal-900 font-light text-center mb-16">
            Plano neighborhoods we serve
          </h2>
          
          <div className="grid md:grid-cols-4 gap-6 text-sm">
            <div>
              <h3 className="text-[11px] tracking-[0.2em] uppercase font-medium text-charcoal-900 mb-3">West Plano</h3>
              <ul className="text-charcoal-600 space-y-1">
                <li>Legacy</li>
                <li>Willow Bend</li>
                <li>Chapel Ridge</li>
                <li>Hunters Glen</li>
              </ul>
            </div>
            <div>
              <h3 className="text-[11px] tracking-[0.2em] uppercase font-medium text-charcoal-900 mb-3">East Plano</h3>
              <ul className="text-charcoal-600 space-y-1">
                <li>Timber Creek</li>
                <li>Stoney Hollow</li>
                <li>Castle Hills</li>
                <li>Preston Meadow</li>
              </ul>
            </div>
            <div>
              <h3 className="text-[11px] tracking-[0.2em] uppercase font-medium text-charcoal-900 mb-3">Central Plano</h3>
              <ul className="text-charcoal-600 space-y-1">
                <li>Schimelpfenig</li>
                <li>Centennial</li>
                <li>Old Town</li>
                <li>Park Forest</li>
              </ul>
            </div>
            <div>
              <h3 className="text-[11px] tracking-[0.2em] uppercase font-medium text-charcoal-900 mb-3">South Plano</h3>
              <ul className="text-charcoal-600 space-y-1">
                <li>Sagebrush</li>
                <li>Parkside</li>
                <li>Meadows</li>
                <li>Oak Point</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-12">
          <h2 className="text-heading-serif text-3xl md:text-4xl text-charcoal-900 font-light mb-12">
            Energy efficiency for Plano homes
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-xl font-light text-charcoal-900 mb-4">Combat Texas Heat</h3>
              <p className="text-charcoal-600 leading-relaxed mb-4">
                Plano's northern Collin County location doesn't escape Texas summer brutality—100°F+ days remain common June through September. Windows represent your home's thermal weak point where solar heat pours in despite air conditioning running constantly. Low-E4 solar control glass reflects 70% of infrared heat before it enters, dramatically reducing cooling loads and electricity costs.
              </p>
              <p className="text-charcoal-600 leading-relaxed">
                Dual-pane argon-filled windows meet minimum Texas energy codes, but triple-pane construction provides superior performance worth consideration for large south and west exposures. The additional insulation layer pays dividends through Plano's hot summers and surprisingly cold winter snaps when Arctic fronts push temperatures below freezing.
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-light text-charcoal-900 mb-4">Noise Reduction Benefits</h3>
              <p className="text-charcoal-600 leading-relaxed mb-4">
                Plano's proximity to Dallas North Tollway, President George Bush Turnpike, and Central Expressway means traffic noise affects even neighborhoods miles from actual highways. Laminated acoustic glass reduces exterior noise transmission by 30-40%—transforming sleep quality and overall home tranquility. This upgrade proves particularly valuable for Plano homes near major thoroughfares or DART rail lines.
              </p>
              <p className="text-charcoal-600 leading-relaxed">
                Investment in sound-reducing windows pays dividends beyond comfort. Plano's strong real estate market values quiet homes, making acoustic windows a selling point that enhances property values when you eventually move. It's both immediate quality-of-life improvement and smart long-term financial decision.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-stone-100">
        <div className="max-w-[800px] mx-auto px-6 text-center">
          <h2 className="text-heading-serif text-3xl md:text-4xl text-charcoal-900 font-light mb-8">
            Schedule your Plano consultation
          </h2>
          <p className="text-charcoal-600 mb-10">
            Contact us for a detailed consultation and transparent pricing. We'll measure your windows, discuss options, and provide accurate quotes with no sales pressure.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/contact" className="btn-outline-dark">
              Request Consultation
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

