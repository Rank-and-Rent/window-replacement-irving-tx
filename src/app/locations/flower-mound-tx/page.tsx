import type { Metadata } from 'next'
import { PageHeader } from '@/components/page-header'
import { PageFooter } from '@/components/page-footer'

export const metadata: Metadata = {
  title: 'Window Replacement Flower Mound TX | Premium Installation Services',
  description: 'Window replacement throughout Flower Mound, TX. Serving Bridlewood, Wellington, the Lakeside developments and all Flower Mound neighborhoods. Andersen, Pella & Jeld-Wen. 972-284-7995',
}

export default function FlowerMoundPage() {
  return (
    <div className="min-h-screen bg-white">
      <PageHeader />

      <section className="relative min-h-[60vh] flex items-center pt-32">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(/locations/window-replacement-flower-mound-tx-1.webp)',
          }}
        />
        <div className="hero-overlay absolute inset-0" />

        <div className="relative z-10 w-full max-w-[1400px] mx-auto px-6 lg:px-12">
          <h1 className="text-heading-serif text-4xl md:text-5xl lg:text-6xl text-white font-light mb-6">
            Window Replacement in Flower Mound, TX
          </h1>
          <p className="text-white/90 text-lg md:text-xl max-w-2xl mb-8">
            Replacement windows for Flower Mound&apos;s sweeping custom homes, master-planned developments, and lakeside builds. Premium frames, hail-rated glass, and an installation crew that respects expensive interior finishes.
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
                src="/locations/window-replacement-flower-mound-tx-1.webp"
                alt="Flower Mound window replacement"
                className="w-full aspect-[4/5] object-cover"
              />
            </div>

            <div>
              <h2 className="text-heading-serif text-3xl md:text-4xl text-charcoal-900 font-light mb-6">
                Flower Mound homes deserve premium window specifications
              </h2>
              <p className="text-charcoal-600 text-base leading-relaxed mb-6">
                Flower Mound&apos;s housing skews larger and newer than most of the metroplex. The communities along FM 2499 &mdash; Bridlewood, Wellington, Stone Creek &mdash; were built in the late 1990s and 2000s with substantial brick-and-stone elevations, two-story foyers with arched transoms, and oversized master suites that often have full window walls overlooking the back yard. Many of those original windows are now hitting the 20-year mark with failed seals, fogged IGUs, and weatherstripping that&apos;s lost its memory.
              </p>
              <p className="text-charcoal-600 text-base leading-relaxed mb-6">
                Around Lake Grapevine and the Lakeside DFW master plan, you&apos;ll find newer custom homes with even larger glass packages, often using black or bronze aluminum-clad frames for a contemporary look. Bridges Park and the Old Town section closer to Long Prairie Road run a different mix &mdash; older 1970s and 1980s ranch and contemporary builds where the window grids are smaller and the energy upgrade pays back even faster.
              </p>
              <p className="text-charcoal-600 text-base leading-relaxed">
                Whatever your housing era, we measure for the existing rough opening, document any structural surprises before we cut foam, and produce an itemized written quote that includes glass package, hardware finish, screen type, and a labor warranty. No surprises in week two.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-stone-100">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-12">
          <h2 className="text-heading-serif text-3xl md:text-4xl text-charcoal-900 font-light text-center mb-12">
            Flower Mound neighborhoods we serve
          </h2>
          <p className="text-charcoal-600 leading-relaxed mb-10 max-w-3xl mx-auto text-center">
            Flower Mound&apos;s strict architectural review boards drive most of our scoping decisions. Bridlewood and Wellington both have deed restrictions that govern exterior frame color and grille pattern; we coordinate that documentation up front so the install never gets paused by an HOA notice halfway through.
          </p>
          <div className="grid md:grid-cols-3 gap-6 text-sm">
            <div>
              <h3 className="text-[11px] tracking-[0.2em] uppercase font-medium text-charcoal-900 mb-3">North Flower Mound</h3>
              <ul className="text-charcoal-600 space-y-1">
                <li>Bridlewood</li>
                <li>Wellington</li>
                <li>The Highlands at Flower Mound</li>
                <li>Stone Creek</li>
              </ul>
            </div>
            <div>
              <h3 className="text-[11px] tracking-[0.2em] uppercase font-medium text-charcoal-900 mb-3">Central Flower Mound</h3>
              <ul className="text-charcoal-600 space-y-1">
                <li>Old Town</li>
                <li>Bridges Park</li>
                <li>Shadow Ridge</li>
                <li>Heritage Glen</li>
              </ul>
            </div>
            <div>
              <h3 className="text-[11px] tracking-[0.2em] uppercase font-medium text-charcoal-900 mb-3">South / Lakeside</h3>
              <ul className="text-charcoal-600 space-y-1">
                <li>Lakeside DFW</li>
                <li>Lake Forest</li>
                <li>Copper Canyon edge</li>
                <li>Prairie View</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-12">
          <h2 className="text-heading-serif text-3xl md:text-4xl text-charcoal-900 font-light mb-12">
            Climate, hail, and the case for premium glazing
          </h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-xl font-light text-charcoal-900 mb-4">North Texas heat on big elevations</h3>
              <p className="text-charcoal-600 leading-relaxed mb-4">
                Flower Mound&apos;s typical home has more glass than the metroplex average. That&apos;s the upside of those big two-story windows and rear-of-house openings &mdash; and the downside on a 105-degree August afternoon. We specify Low-E366 or equivalent triple-silver coatings on the south and west elevations to drop solar heat gain into the high teens, then tune the north and east packages for higher visible light transmission so those rooms keep their daylight.
              </p>
              <p className="text-charcoal-600 leading-relaxed">
                For homeowners on Oncor&apos;s residential rate, the cooling-cost reduction from a properly specified Low-E package is measurable on the next utility bill.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-light text-charcoal-900 mb-4">Hail-belt realities</h3>
              <p className="text-charcoal-600 leading-relaxed mb-4">
                Flower Mound has been on the wrong end of multiple severe hail events. Most homeowners insure rather than glaze for impact, but the recent claim history is pushing more clients toward laminated glass on the west-facing rear elevations where dollar-loss after a hailstorm is highest. We can isolate the impact-rated upgrade to two or three openings rather than the whole house, which keeps the budget reasonable.
              </p>
              <p className="text-charcoal-600 leading-relaxed">
                We&apos;ll show you the comparative spec sheets for Andersen, Pella, JELD-WEN, and Marvin impact options so the decision is informed rather than reflexive.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-charcoal-500">
        <div className="max-w-[1000px] mx-auto px-6 lg:px-12 text-center">
          <h2 className="text-heading-serif text-3xl md:text-4xl text-white font-light mb-8">
            Respectful installations in expensive homes
          </h2>
          <p className="text-stone-300 text-lg leading-relaxed max-w-2xl mx-auto mb-8">
            Flower Mound interiors often feature stained millwork, hand-finished plaster, hardwood floors, and built-in cabinetry. Our crews carry rosin paper, 6-mil plastic for furniture, corner guards for hallway corners, and HEPA vacuums for end-of-day cleanup. We schedule cuts outside whenever weather allows, run dust collection on indoor cuts, and walk the homeowner through every elevation at completion.
          </p>
          <p className="text-stone-300 leading-relaxed max-w-2xl mx-auto">
            The manufacturer warranty registers in your name on completion, and our craftsmanship guarantee covers the install labor for ten years.
          </p>
        </div>
      </section>

            <section className="py-20 bg-white">
        <div className="max-w-[1100px] mx-auto px-6 lg:px-12">
          <h2 className="text-heading-serif text-3xl md:text-4xl text-charcoal-900 font-light mb-10">Common questions from Flower Mound homeowners</h2>
          <div className="space-y-8">
            <div>
              <h3 className="text-lg font-medium text-charcoal-900 mb-3">How long does a typical Flower Mound window replacement take?</h3>
              <p className="text-charcoal-600 leading-relaxed">Most Flower Mound whole-home projects run two to three working days from demo to final cleanup. A standard double-hung swap takes about 45 minutes per opening once the old unit is out, and we move methodically from elevation to elevation. Larger custom orders with arched or radius geometry add a day or two for ordering and a few additional hours per opening on install. We&apos;ll commit to a start and finish date in writing before you sign anything.</p>
            </div>
            <div>
              <h3 className="text-lg font-medium text-charcoal-900 mb-3">Which window brand is best for my Flower Mound home?</h3>
              <p className="text-charcoal-600 leading-relaxed">There is no single right answer because Flower Mound&apos;s large-lot custom homes and the Bridlewood and Wellington architectural review all push the spec in different directions. Our default recommendation for most Flower Mound mid-range projects is Andersen 400 Series double-hung or JELD-WEN Premium Vinyl &mdash; both deliver strong thermal performance at fair pricing. For custom-home work, premium remodels, and historic restorations, we step up to Andersen E-Series, Pella Reserve, or Marvin Signature. The right brand depends on your home, your goals, and your budget, and we&apos;ll show you the comparative spec sheets during the consultation rather than pushing one product on every project.</p>
            </div>
            <div>
              <h3 className="text-lg font-medium text-charcoal-900 mb-3">Do energy-efficient windows really lower utility bills in Flower Mound?</h3>
              <p className="text-charcoal-600 leading-relaxed">Yes, particularly when the existing windows are original aluminum-framed singles or first-generation dual-pane. Replacing those with insulated vinyl or fiberglass frames carrying a Low-E366 coating and argon fill typically delivers a measurable reduction on the next Oncor bill. The biggest gains show up on the south- and west-facing elevations, where the late-afternoon sun load is heaviest. We&apos;ll model the projected savings using your actual kWh history during the consultation rather than quoting a generic brochure number.</p>
            </div>
            <div>
              <h3 className="text-lg font-medium text-charcoal-900 mb-3">What does the warranty cover?</h3>
              <p className="text-charcoal-600 leading-relaxed">Every install includes the manufacturer warranty plus our written craftsmanship guarantee on the labor. The manufacturer warranty &mdash; typically limited lifetime on the IGU and frame, with shorter terms on hardware and finishes &mdash; registers in your name on the day of completion. Our craftsmanship guarantee covers the install workmanship for ten years. If a sash needs adjustment, a screen develops a tear, or weatherstripping fails during that period, we come back at no charge. Most ARB submittals here need exterior color samples, which we coordinate so that warranty registration and ARB documentation are both handled before we start.</p>
            </div>
            <div>
              <h3 className="text-lg font-medium text-charcoal-900 mb-3">Do you provide written, itemized pricing?</h3>
              <p className="text-charcoal-600 leading-relaxed">Always. Every Flower Mound proposal lists each window with size, configuration, frame material, exterior and interior finish, hardware, screen, and glass package. Installation labor, removal and disposal of the old units, and warranty terms are spelled out separately. There are no broker commissions tucked into the proposal, no surprise change orders, and no hidden line items. You can take the quote, get competitive bids, and decide on your own timeline without a high-pressure follow-up call.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-stone-100">
        <div className="max-w-[800px] mx-auto px-6 text-center">
          <h2 className="text-heading-serif text-3xl md:text-4xl text-charcoal-900 font-light mb-8">
            Schedule your Flower Mound consultation
          </h2>
          <p className="text-charcoal-600 mb-10">
            We&apos;ll evaluate your Flower Mound home, document each opening, recommend the right frame, glass, and hardware package per elevation, and provide detailed written pricing with no high-pressure pitch.
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
