import type { Metadata } from 'next'
import { PageHeader } from '@/components/page-header'
import { PageFooter } from '@/components/page-footer'

export const metadata: Metadata = {
  title: 'Window Replacement Carrollton TX | Premium Installation Services',
  description: 'Carrollton windows from an Irving-based crew — Old Downtown historics, Vista Ridge, Indian Creek, CFB ISD blocks. SRP-3 IGUs sized to the local rough-opening era.',
}

export default function CarrolltonPage() {
  return (
    <div className="min-h-screen bg-white">
      <PageHeader />

      <section className="relative min-h-[60vh] flex items-center pt-32">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(/locations/window-replacement-carrollton-tx-1.jpg)',
          }}
        />
        <div className="hero-overlay absolute inset-0" />

        <div className="relative z-10 w-full max-w-[1400px] mx-auto px-6 lg:px-12">
          <h1 className="text-heading-serif text-4xl md:text-5xl lg:text-6xl text-white font-light mb-6">
            Window Replacement in Carrollton, TX
          </h1>
          <p className="text-white/90 text-lg md:text-xl max-w-2xl mb-8">
            Replacement windows for Carrollton&apos;s mix of 1970s ranches, 1990s family homes, and the newer infill builds in Vista Ridge and Towne Lake. Energy upgrades that pay back fast and a clean install that respects the rest of the house.
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
                src="/locations/window-replacement-carrollton-tx-1.jpg"
                alt="Carrollton window replacement"
                className="w-full aspect-[4/5] object-cover"
              />
            </div>

            <div>
              <h2 className="text-heading-serif text-3xl md:text-4xl text-charcoal-900 font-light mb-6">
                Three eras of Carrollton homes, one careful spec process
              </h2>
              <p className="text-charcoal-600 text-base leading-relaxed mb-6">
                Carrollton spans roughly 50 years of construction, and the windows tell the story. The Old Downtown grid south of Belt Line and the older 1970s ranches near Indian Creek typically have original aluminum-framed single panes &mdash; great looking when they were new, terrible at insulating, and now leaking conditioned air at every weatherstrip. The middle band along Trinity Mills and Frankford runs heavy on 1990s vinyl casement and double-hung that&apos;s now hitting the end of its IGU service life. The newer Vista Ridge and Towne Lake builds have larger glass packages, sometimes with arched transoms in the master suite.
              </p>
              <p className="text-charcoal-600 text-base leading-relaxed mb-6">
                One product line cannot serve all three. We carry Andersen, Pella, JELD-WEN, and Marvin so we can match the right product to the right house. For most Carrollton ranch and split-level homes, the answer is Andersen 400 Series or JELD-WEN Premium Vinyl in a 2x4 wall configuration. For the newer two-story homes with bigger glass, we step up to Andersen A-Series wood-clad or Pella Lifestyle.
              </p>
              <p className="text-charcoal-600 text-base leading-relaxed">
                We&apos;re an owner-operated team based in Irving, a short drive on I-35E or the President George Bush Turnpike to most of Carrollton. The same person who quotes your project runs the install &mdash; no salesperson handing you off to a subcontracted crew.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-stone-100">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-12">
          <h2 className="text-heading-serif text-3xl md:text-4xl text-charcoal-900 font-light text-center mb-12">
            Carrollton neighborhoods we serve
          </h2>
          <p className="text-charcoal-600 leading-relaxed mb-10 max-w-3xl mx-auto text-center">
            We&apos;ve worked on every side of Carrollton, from the Old Downtown blocks to the newer builds north of the Bush. Different parts of the city carry different HOA constraints, and we coordinate ARB documentation up front when needed.
          </p>
          <div className="grid md:grid-cols-3 gap-6 text-sm">
            <div>
              <h3 className="text-[11px] tracking-[0.2em] uppercase font-medium text-charcoal-900 mb-3">North Carrollton</h3>
              <ul className="text-charcoal-600 space-y-1">
                <li>Carrollton Lakes</li>
                <li>Ross Estates</li>
                <li>Vista Ridge</li>
                <li>Towne Lake</li>
              </ul>
            </div>
            <div>
              <h3 className="text-[11px] tracking-[0.2em] uppercase font-medium text-charcoal-900 mb-3">Central Carrollton</h3>
              <ul className="text-charcoal-600 space-y-1">
                <li>Old Downtown</li>
                <li>Carrollton Farms</li>
                <li>Trinity Mills corridor</li>
                <li>Town Center</li>
              </ul>
            </div>
            <div>
              <h3 className="text-[11px] tracking-[0.2em] uppercase font-medium text-charcoal-900 mb-3">South Carrollton</h3>
              <ul className="text-charcoal-600 space-y-1">
                <li>Indian Creek</li>
                <li>Carrollton Ranch</li>
                <li>Oak Creek</li>
                <li>Stone Creek</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-12">
          <h2 className="text-heading-serif text-3xl md:text-4xl text-charcoal-900 font-light mb-12">
            Carrollton climate and window performance
          </h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-xl font-light text-charcoal-900 mb-4">Energy upgrades on Oncor rates</h3>
              <p className="text-charcoal-600 leading-relaxed mb-4">
                The original aluminum-framed windows in older Carrollton homes are essentially heat highways &mdash; the frame conducts directly through the wall assembly. Replacing those with insulated vinyl or fiberglass cuts the conductive loss in half before the glass upgrade even matters. Add a Low-E366 coating with argon fill and homeowners typically see a measurable reduction on the next Oncor bill.
              </p>
              <p className="text-charcoal-600 leading-relaxed">
                We&apos;ll model your projected savings using your actual kWh history rather than a generic brochure number, so the payback math is grounded in your house.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-light text-charcoal-900 mb-4">DFW arrival noise on the west side</h3>
              <p className="text-charcoal-600 leading-relaxed mb-4">
                Western Carrollton, particularly along Hebron and the Sam Rayburn Tollway corridor, sits within the eastern DFW arrival pattern on certain wind days. For bedroom and home-office windows on those elevations, laminated acoustic IGUs are a worthwhile upgrade. Standard dual-pane glass does very little for low-frequency aircraft noise; the laminated interlayer changes the perceived sound floor noticeably.
              </p>
              <p className="text-charcoal-600 leading-relaxed">
                We&apos;ll talk through where the upgrade makes sense and where standard Low-E is fine.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-charcoal-500">
        <div className="max-w-[1000px] mx-auto px-6 lg:px-12 text-center">
          <h2 className="text-heading-serif text-3xl md:text-4xl text-white font-light mb-8">
            Carrollton&apos;s straight-talk window replacement company
          </h2>
          <p className="text-stone-300 text-lg leading-relaxed max-w-2xl mx-auto mb-8">
            We bring sample frames, glass cutaways, and itemized written pricing to every consultation. You see the difference between a Low-E366 coating and a builder-grade dual-pane in your hand under your light, before you sign anything. The proposal lists every window with size, configuration, finish, hardware, screen, and glass package.
          </p>
          <p className="text-stone-300 leading-relaxed max-w-2xl mx-auto">
            Each install includes the manufacturer warranty plus our ten-year written craftsmanship guarantee on the labor.
          </p>
        </div>
      </section>

            <section className="py-20 bg-white">
        <div className="max-w-[1100px] mx-auto px-6 lg:px-12">
          <h2 className="text-heading-serif text-3xl md:text-4xl text-charcoal-900 font-light mb-10">Common questions from Carrollton homeowners</h2>
          <div className="space-y-8">
            <div>
              <h3 className="text-lg font-medium text-charcoal-900 mb-3">How long does a typical Carrollton window replacement take?</h3>
              <p className="text-charcoal-600 leading-relaxed">Most Carrollton whole-home projects run two to three working days from demo to final cleanup. A standard double-hung swap takes about 45 minutes per opening once the old unit is out, and we move methodically from elevation to elevation. Larger custom orders with arched or radius geometry add a day or two for ordering and a few additional hours per opening on install. We&apos;ll commit to a start and finish date in writing before you sign anything.</p>
            </div>
            <div>
              <h3 className="text-lg font-medium text-charcoal-900 mb-3">Which window brand is best for my Carrollton home?</h3>
              <p className="text-charcoal-600 leading-relaxed">There is no single right answer because Carrollton&apos;s three eras of housing &mdash; Old Downtown, Trinity Mills, and Vista Ridge all push the spec in different directions. Our default recommendation for most Carrollton mid-range projects is Andersen 400 Series double-hung or JELD-WEN Premium Vinyl &mdash; both deliver strong thermal performance at fair pricing. For custom-home work, premium remodels, and historic restorations, we step up to Andersen E-Series, Pella Reserve, or Marvin Signature. The right brand depends on your home, your goals, and your budget, and we&apos;ll show you the comparative spec sheets during the consultation rather than pushing one product on every project.</p>
            </div>
            <div>
              <h3 className="text-lg font-medium text-charcoal-900 mb-3">Do energy-efficient windows really lower utility bills in Carrollton?</h3>
              <p className="text-charcoal-600 leading-relaxed">Yes, particularly when the existing windows are original aluminum-framed singles or first-generation dual-pane. Replacing those with insulated vinyl or fiberglass frames carrying a Low-E366 coating and argon fill typically delivers a measurable reduction on the next Oncor bill. The biggest gains show up on the south- and west-facing elevations, where the late-afternoon sun load is heaviest. We&apos;ll model the projected savings using your actual kWh history during the consultation rather than quoting a generic brochure number.</p>
            </div>
            <div>
              <h3 className="text-lg font-medium text-charcoal-900 mb-3">What does the warranty cover?</h3>
              <p className="text-charcoal-600 leading-relaxed">Every install includes the manufacturer warranty plus our written craftsmanship guarantee on the labor. The manufacturer warranty &mdash; typically limited lifetime on the IGU and frame, with shorter terms on hardware and finishes &mdash; registers in your name on the day of completion. Our craftsmanship guarantee covers the install workmanship for ten years. If a sash needs adjustment, a screen develops a tear, or weatherstripping fails during that period, we come back at no charge. Vista Ridge HOAs maintain frame color and grille pattern restrictions, which we coordinate so that warranty registration and ARB documentation are both handled before we start.</p>
            </div>
            <div>
              <h3 className="text-lg font-medium text-charcoal-900 mb-3">Do you provide written, itemized pricing?</h3>
              <p className="text-charcoal-600 leading-relaxed">Always. Every Carrollton proposal lists each window with size, configuration, frame material, exterior and interior finish, hardware, screen, and glass package. Installation labor, removal and disposal of the old units, and warranty terms are spelled out separately. There are no broker commissions tucked into the proposal, no surprise change orders, and no hidden line items. You can take the quote, get competitive bids, and decide on your own timeline without a high-pressure follow-up call.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-stone-100">
        <div className="max-w-[800px] mx-auto px-6 text-center">
          <h2 className="text-heading-serif text-3xl md:text-4xl text-charcoal-900 font-light mb-8">
            Transform your Carrollton home with premium windows
          </h2>
          <p className="text-charcoal-600 mb-10">
            Schedule your complimentary consultation. We&apos;ll evaluate your property, recommend optimal window solutions per elevation, and provide detailed pricing with no high-pressure pitch.
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
