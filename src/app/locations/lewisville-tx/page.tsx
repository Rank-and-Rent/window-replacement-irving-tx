import type { Metadata } from 'next'
import { PageHeader } from '@/components/page-header'
import { PageFooter } from '@/components/page-footer'

export const metadata: Metadata = {
  title: 'Window Replacement Lewisville TX | Premium Installation Services',
  description: 'Window replacement in Lewisville, TX. Serving Castle Hills, Vista Ridge, Hidden Cove and the Lewisville Lake area. Andersen, Pella, JELD-WEN, Marvin. 972-284-7995',
}

export default function LewisvillePage() {
  return (
    <div className="min-h-screen bg-white">
      <PageHeader />

      <section className="relative min-h-[60vh] flex items-center pt-32">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(/locations/window-replacement-lewisville-tx-1.jpg)',
          }}
        />
        <div className="hero-overlay absolute inset-0" />

        <div className="relative z-10 w-full max-w-[1400px] mx-auto px-6 lg:px-12">
          <h1 className="text-heading-serif text-4xl md:text-5xl lg:text-6xl text-white font-light mb-6">
            Window Replacement in Lewisville, TX
          </h1>
          <p className="text-white/90 text-lg md:text-xl max-w-2xl mb-8">
            Replacement windows for Lewisville&apos;s lake-influenced housing &mdash; the older blocks south of FM 3040, the master-planned Castle Hills development, and the Hidden Cove waterfront homes along Lewisville Lake. Frames that handle humidity, glass that handles sun, and an install that respects your home.
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
                src="/locations/window-replacement-lewisville-tx-1.jpg"
                alt="Lewisville window replacement"
                className="w-full aspect-[4/5] object-cover"
              />
            </div>

            <div>
              <h2 className="text-heading-serif text-3xl md:text-4xl text-charcoal-900 font-light mb-6">
                Lake-influenced housing requires careful frame selection
              </h2>
              <p className="text-charcoal-600 text-base leading-relaxed mb-6">
                Lewisville Lake shapes the housing pattern across most of the city. The older 1970s and 1980s neighborhoods south of FM 3040 have weathered 40+ Texas summers with their original aluminum-framed sliders, and the seal failures are nearly universal at this point. The Castle Hills master plan along the Sam Rayburn Tollway brought a wave of late-1990s and 2000s family homes with first-generation vinyl that&apos;s now reaching the end of its IGU service life. Hidden Cove and the Lake Dallas waterfront sections carry larger custom homes with bigger glass packages and more aggressive grille patterns.
              </p>
              <p className="text-charcoal-600 text-base leading-relaxed mb-6">
                For lakefront properties, we lean toward fiberglass or aluminum-clad frames over vinyl. The expansion coefficient on those materials better matches the glass itself, which keeps perimeter seals intact through the elevated humidity around the lake. Marvin Elevate fiberglass and Pella Reserve aluminum-clad both perform well over a 20-year horizon in lakefront conditions. For inland Lewisville, premium vinyl from Andersen 400 or JELD-WEN Premium Vinyl delivers strong value and meets ENERGY STAR thresholds.
              </p>
              <p className="text-charcoal-600 text-base leading-relaxed">
                We&apos;re based in Irving, a quick run up I-35E to most of Lewisville. Our trucks are usually already in the area, which matters when an adjustment or warranty visit is needed.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-stone-100">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-12">
          <h2 className="text-heading-serif text-3xl md:text-4xl text-charcoal-900 font-light text-center mb-12">
            Lewisville neighborhoods we serve
          </h2>
          <p className="text-charcoal-600 leading-relaxed mb-10 max-w-3xl mx-auto text-center">
            We&apos;ve worked in every quadrant of Lewisville. Castle Hills and Vista Ridge both have active architectural review boards with frame-color and grille-pattern restrictions, and we coordinate ARB submittals up front so the install never gets paused mid-project.
          </p>
          <div className="grid md:grid-cols-3 gap-6 text-sm">
            <div>
              <h3 className="text-[11px] tracking-[0.2em] uppercase font-medium text-charcoal-900 mb-3">North Lewisville</h3>
              <ul className="text-charcoal-600 space-y-1">
                <li>Castle Hills</li>
                <li>Lewisville Lakes</li>
                <li>Timber Creek</li>
                <li>Valley Ridge</li>
              </ul>
            </div>
            <div>
              <h3 className="text-[11px] tracking-[0.2em] uppercase font-medium text-charcoal-900 mb-3">Central Lewisville</h3>
              <ul className="text-charcoal-600 space-y-1">
                <li>Old Town</li>
                <li>Lewisville Square</li>
                <li>Heritage</li>
                <li>Town Center</li>
              </ul>
            </div>
            <div>
              <h3 className="text-[11px] tracking-[0.2em] uppercase font-medium text-charcoal-900 mb-3">South / Lake</h3>
              <ul className="text-charcoal-600 space-y-1">
                <li>Hidden Cove</li>
                <li>Lake Dallas</li>
                <li>Vista Ridge</li>
                <li>Indian Creek</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-12">
          <h2 className="text-heading-serif text-3xl md:text-4xl text-charcoal-900 font-light mb-12">
            Performance considerations in Lewisville
          </h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-xl font-light text-charcoal-900 mb-4">Sun reflection off the lake</h3>
              <p className="text-charcoal-600 leading-relaxed mb-4">
                Lakefront homes get a double dose of solar heat &mdash; direct sun plus the reflected glare off the water. That changes the glass spec. We typically recommend Cardinal LoE-340 or LoE-366 with argon fill on the lake-facing elevations to drop both visible-light reflection and total solar heat gain. The result: cooler great rooms in August and a noticeable reduction on the cooling bill.
              </p>
              <p className="text-charcoal-600 leading-relaxed">
                For homes set back from the water, standard dual-silver Low-E coatings deliver strong performance at a lower price point.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-light text-charcoal-900 mb-4">I-35E and Tollway noise</h3>
              <p className="text-charcoal-600 leading-relaxed mb-4">
                Lewisville sits at a busy crossroads &mdash; I-35E, the Sam Rayburn Tollway, and the BNSF rail corridor all funnel through. Bedroom and home-office windows on the elevations facing those corridors benefit from laminated acoustic glass. Standard dual-pane glass barely touches that low-frequency noise; the laminated interlayer raises the sound transmission class meaningfully.
              </p>
              <p className="text-charcoal-600 leading-relaxed">
                We isolate acoustic upgrades to the rooms where it pays off, which keeps the budget reasonable.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-charcoal-500">
        <div className="max-w-[1000px] mx-auto px-6 lg:px-12 text-center">
          <h2 className="text-heading-serif text-3xl md:text-4xl text-white font-light mb-8">
            Lewisville installations done right the first time
          </h2>
          <p className="text-stone-300 text-lg leading-relaxed max-w-2xl mx-auto mb-8">
            Most Lewisville whole-home replacements run two to three working days. Floors get rosin paper, furniture gets covered in 6-mil plastic, dust collection runs on every indoor cut, and a HEPA vacuum closes out each shift. The final walkthrough happens with you alongside the lead installer, every sash demonstrated.
          </p>
          <p className="text-stone-300 leading-relaxed max-w-2xl mx-auto">
            Manufacturer warranties register in your name on completion. Our written craftsmanship guarantee covers labor for ten years.
          </p>
        </div>
      </section>

            <section className="py-20 bg-white">
        <div className="max-w-[1100px] mx-auto px-6 lg:px-12">
          <h2 className="text-heading-serif text-3xl md:text-4xl text-charcoal-900 font-light mb-10">Common questions from Lewisville homeowners</h2>
          <div className="space-y-8">
            <div>
              <h3 className="text-lg font-medium text-charcoal-900 mb-3">How long does a typical Lewisville window replacement take?</h3>
              <p className="text-charcoal-600 leading-relaxed">Most Lewisville whole-home projects run two to three working days from demo to final cleanup. A standard double-hung swap takes about 45 minutes per opening once the old unit is out, and we move methodically from elevation to elevation. Larger custom orders with arched or radius geometry add a day or two for ordering and a few additional hours per opening on install. We&apos;ll commit to a start and finish date in writing before you sign anything.</p>
            </div>
            <div>
              <h3 className="text-lg font-medium text-charcoal-900 mb-3">Which window brand is best for my Lewisville home?</h3>
              <p className="text-charcoal-600 leading-relaxed">There is no single right answer because Lewisville Lake humidity and the I-35E plus Tollway noise corridor all push the spec in different directions. Our default recommendation for most Lewisville mid-range projects is Andersen 400 Series double-hung or JELD-WEN Premium Vinyl &mdash; both deliver strong thermal performance at fair pricing. For custom-home work, premium remodels, and historic restorations, we step up to Andersen E-Series, Pella Reserve, or Marvin Signature. The right brand depends on your home, your goals, and your budget, and we&apos;ll show you the comparative spec sheets during the consultation rather than pushing one product on every project.</p>
            </div>
            <div>
              <h3 className="text-lg font-medium text-charcoal-900 mb-3">Do energy-efficient windows really lower utility bills in Lewisville?</h3>
              <p className="text-charcoal-600 leading-relaxed">Yes, particularly when the existing windows are original aluminum-framed singles or first-generation dual-pane. Replacing those with insulated vinyl or fiberglass frames carrying a Low-E366 coating and argon fill typically delivers a measurable reduction on the next Oncor bill. The biggest gains show up on the south- and west-facing elevations, where the late-afternoon sun load is heaviest. We&apos;ll model the projected savings using your actual kWh history during the consultation rather than quoting a generic brochure number.</p>
            </div>
            <div>
              <h3 className="text-lg font-medium text-charcoal-900 mb-3">What does the warranty cover?</h3>
              <p className="text-charcoal-600 leading-relaxed">Every install includes the manufacturer warranty plus our written craftsmanship guarantee on the labor. The manufacturer warranty &mdash; typically limited lifetime on the IGU and frame, with shorter terms on hardware and finishes &mdash; registers in your name on the day of completion. Our craftsmanship guarantee covers the install workmanship for ten years. If a sash needs adjustment, a screen develops a tear, or weatherstripping fails during that period, we come back at no charge. Castle Hills and Vista Ridge run active architectural review boards, which we coordinate so that warranty registration and ARB documentation are both handled before we start.</p>
            </div>
            <div>
              <h3 className="text-lg font-medium text-charcoal-900 mb-3">Do you provide written, itemized pricing?</h3>
              <p className="text-charcoal-600 leading-relaxed">Always. Every Lewisville proposal lists each window with size, configuration, frame material, exterior and interior finish, hardware, screen, and glass package. Installation labor, removal and disposal of the old units, and warranty terms are spelled out separately. There are no broker commissions tucked into the proposal, no surprise change orders, and no hidden line items. You can take the quote, get competitive bids, and decide on your own timeline without a high-pressure follow-up call.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-stone-100">
        <div className="max-w-[800px] mx-auto px-6 text-center">
          <h2 className="text-heading-serif text-3xl md:text-4xl text-charcoal-900 font-light mb-8">
            Transform your Lewisville home with premium windows
          </h2>
          <p className="text-charcoal-600 mb-10">
            Schedule your complimentary in-home consultation. We&apos;ll evaluate your Lewisville property, recommend frame and glass packages tuned to your elevations and lake exposure, and provide a written, itemized quote with no high-pressure pitch.
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
