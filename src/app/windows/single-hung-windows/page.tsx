import type { Metadata } from 'next'
import { PageHeader } from '@/components/page-header'
import { PageFooter } from '@/components/page-footer'

export const metadata: Metadata = {
  title: 'Single-Hung Windows Irving TX | Affordable Energy-Efficient Replacement',
  description: 'Budget-friendly single-hung window replacement in Irving, TX. Fixed upper sash, operable lower sash. Andersen, Pella & Jeld-Wen quality at accessible prices. Call 972-284-7995',
}

export default function SingleHungWindowsPage() {
  return (
    <div className="min-h-screen bg-white">
      <PageHeader />

      <section className="relative min-h-[60vh] flex items-center pt-32">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(/windows/single-hung-windows-irving-tx.jpg)',
          }}
        />
        <div className="hero-overlay absolute inset-0" />
        
        <div className="relative z-10 w-full max-w-[1400px] mx-auto px-6 lg:px-12">
          <h1 className="text-heading-serif text-4xl md:text-5xl lg:text-6xl text-white font-light mb-6 max-w-3xl">
            Single-Hung Windows in Irving, TX
          </h1>
          <p className="text-white/90 text-lg md:text-xl max-w-2xl mb-8">
            Quality meets value. Single-hung windows deliver exceptional energy performance and classic styling at a price point that makes sense for budget-conscious Irving homeowners.
          </p>
          <a href="/contact" className="btn-white">
            Get Your Quote
          </a>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <h2 className="text-heading-serif text-3xl md:text-4xl text-charcoal-900 font-light mb-6">
                Smart choice for Irving replacement projects
              </h2>
              <p className="text-charcoal-600 text-base leading-relaxed mb-6">
                Single-hung windows represent the most cost-effective way to replace aging windows in Irving homes without compromising quality or energy efficiency. The design is elegantly simple: the bottom sash operates vertically while the top sash remains fixed. This straightforward mechanism reduces moving parts, minimizes maintenance requirements, and lowers manufacturing costs—savings passed directly to you.
              </p>
              <p className="text-charcoal-600 text-base leading-relaxed mb-6">
                Don't mistake "budget-friendly" for "inferior quality." Our Andersen 100 Series, Pella 150 Series, and Jeld-Wen Premium Vinyl single-hung windows meet or exceed Texas energy codes. They feature the same Low-E glass coatings, argon gas fills, and advanced weatherstripping found in pricier double-hung alternatives. The performance difference is negligible; the price difference is substantial.
              </p>
              <p className="text-charcoal-600 text-base leading-relaxed">
                Single-hung windows make particular sense for first-story installations in Irving homes where you'll rarely need to clean exterior glass from inside. Ground-floor windows are easily cleaned from outside using a garden hose and squeegee. Save your budget for second-story double-hung windows where tilt-in cleaning provides genuine convenience.
              </p>
            </div>
            
            <div>
              <img
                src="/windows/single-hung-windows-irving-tx.jpg"
                alt="Single-hung window in Irving home"
                className="w-full aspect-[4/5] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-stone-100">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-12">
          <h2 className="text-heading-serif text-3xl md:text-4xl text-charcoal-900 font-light text-center mb-16">
            When single-hung windows are the right answer
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8">
              <h3 className="text-[13px] tracking-[0.15em] uppercase font-medium text-charcoal-900 mb-4">
                Whole-House Replacement
              </h3>
              <p className="text-charcoal-600 text-sm leading-relaxed">
                Replacing 15 windows costs significantly less with single-hung construction. The thousands saved can fund other home improvements or simply stay in your bank account. Irving homeowners replacing all windows simultaneously realize substantial budget advantages choosing single-hung for most openings.
              </p>
            </div>
            
            <div className="bg-white p-8">
              <h3 className="text-[13px] tracking-[0.15em] uppercase font-medium text-charcoal-900 mb-4">
                Rental Properties
              </h3>
              <p className="text-charcoal-600 text-sm leading-relaxed">
                Irving rental property investors prefer single-hung windows for their durability and low maintenance. Fewer moving parts mean fewer repair calls. Tenants receive energy-efficient, attractive windows; landlords enjoy excellent ROI and minimal ongoing costs. It's a win-win scenario.
              </p>
            </div>
            
            <div className="bg-white p-8">
              <h3 className="text-[13px] tracking-[0.15em] uppercase font-medium text-charcoal-900 mb-4">
                First-Story Installations
              </h3>
              <p className="text-charcoal-600 text-sm leading-relaxed">
                Ground-level windows rarely require inside cleaning access. A spray bottle, squeegee, and five minutes of exterior cleaning maintains crystal-clear glass. Reserve premium double-hung windows for upstairs rooms where tilt-in cleaning delivers real convenience and safety benefits.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-12">
          <h2 className="text-heading-serif text-3xl md:text-4xl text-charcoal-900 font-light mb-12">
            Energy performance that matches Irving's demands
          </h2>
          
          <div className="space-y-6">
              <div>
                <h3 className="text-xl font-light text-charcoal-900 mb-3">Low-E Glass Technology</h3>
                <p className="text-charcoal-600 leading-relaxed">
                  Our single-hung windows feature Low-E4 glass coatings that reflect infrared heat back outdoors during Irving's brutal summers. This microscopic metallic layer is invisible to the eye but dramatically reduces solar heat gain. Your air conditioner runs less frequently, electric bills drop noticeably, and interior comfort improves substantially.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-light text-charcoal-900 mb-3">Argon Gas Insulation</h3>
                <p className="text-charcoal-600 leading-relaxed">
                  The space between dual glass panes is filled with argon gas—denser than air and superior at preventing heat transfer. This inert gas won't leak or degrade over decades of Texas temperature cycling. Argon-filled windows maintain their insulation value year after year without maintenance.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-light text-charcoal-900 mb-3">Warm-Edge Spacers</h3>
                <p className="text-charcoal-600 leading-relaxed">
                  Modern single-hung windows use foam or composite spacers between glass panes instead of old-fashioned aluminum. These "warm-edge" spacers eliminate thermal bridging that allowed heat transfer in previous-generation windows. The result: reduced condensation, improved comfort, and better energy efficiency across Irving's temperature extremes.
                </p>
              </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-charcoal-500">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-12">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-heading-serif text-3xl md:text-4xl text-white font-light mb-6">
              Same premium brands, smarter pricing
            </h2>
            <p className="text-stone-300 leading-relaxed mb-8">
              Your Irving neighbors trust Andersen, Pella, and Jeld-Wen windows for their proven durability and warranty coverage. Single-hung construction delivers these same premium brands at prices that fit real-world budgets. You're not compromising on quality—you're making a smart value decision that prioritizes energy efficiency over seldom-used features.
            </p>
            <p className="text-stone-300 leading-relaxed">
              Our factory-trained installers treat single-hung installations with the same meticulous attention given to premium products. Proper installation determines window performance far more than single-hung versus double-hung design. Count on level installation, complete weatherproofing, and thorough quality verification regardless of which window style you choose.
            </p>
          </div>
        </div>
      </section>

      <section className="py-24 bg-stone-100">
        <div className="max-w-[800px] mx-auto px-6 text-center">
          <h2 className="text-heading-serif text-3xl md:text-4xl text-charcoal-900 font-light mb-8">
            Discover how much you can save with single-hung windows
          </h2>
          <p className="text-charcoal-600 mb-10">
            Request your free estimate today. We'll calculate exact costs for your Irving home and show you the substantial savings single-hung windows deliver without sacrificing quality or performance.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/contact" className="btn-outline-dark">
              Request Free Estimate
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

