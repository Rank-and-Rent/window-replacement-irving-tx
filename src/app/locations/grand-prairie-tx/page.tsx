import type { Metadata } from 'next'
import { PageHeader } from '@/components/page-header'
import { PageFooter } from '@/components/page-footer'

export const metadata: Metadata = {
  title: 'Window Replacement Grand Prairie TX | Quality Installation',
  description: 'Grand Prairie windows from a neighbor-Irving crew — Joe Pool Lake waterfronts, Dalworth Park, the SH-360 corridor. Hail-rated impact glass for spring storm season.',
}

export default function GrandPrairiePage() {
  return (
    <div className="min-h-screen bg-white">
      <PageHeader />

      <section className="relative min-h-[60vh] flex items-center pt-32">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(/locations/window-replacement-grand-prairie-tx-2.jpg)',
          }}
        />
        <div className="hero-overlay absolute inset-0" />

        <div className="relative z-10 w-full max-w-[1400px] mx-auto px-6 lg:px-12">
          <h1 className="text-heading-serif text-4xl md:text-5xl lg:text-6xl text-white font-light mb-6">
            Window Replacement in Grand Prairie, TX
          </h1>
          <p className="text-white/90 text-lg md:text-xl max-w-2xl mb-8">
            Professional window installation for Grand Prairie homes&mdash;from Joe Pool Lake waterfront to the established neighborhoods west of SH-360. Energy-efficient solutions tailored to North Texas heat and the wind that blows in across the prairie.
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
                src="/locations/window-replacement-grand-prairie-tx-2.jpg"
                alt="Grand Prairie window replacement"
                className="w-full aspect-[4/5] object-cover"
              />
            </div>

            <div>
              <h2 className="text-heading-serif text-3xl md:text-4xl text-charcoal-900 font-light mb-6">
                Built for Grand Prairie&apos;s mix of housing
              </h2>
              <p className="text-charcoal-600 text-base leading-relaxed mb-6">
                Grand Prairie sprawls across two counties and three distinct eras of construction. North of I-30 you&apos;ll find post-war ranches in Dalworth Park and Carrier Parkway, generally 1,200 to 1,800 square feet with original aluminum sliders that have long since failed their seals. The middle band along Pioneer Parkway leans toward 1980s and 1990s two-stories, where the windows are usually first-generation vinyl that has yellowed and grown brittle in the Texas sun. South of I-20, around Joe Pool Lake and Lake Ridge, the homes are newer, larger, and shaped by lake views that demand bigger glass packages.
              </p>
              <p className="text-charcoal-600 text-base leading-relaxed mb-6">
                Our experience across all three eras means we don&apos;t default to one solution. The right product for a 1965 ranch off Belt Line is rarely the right product for a five-bedroom on Lake Ridge Parkway. We bring sample frames and glass cutaways to every consultation so you can see the difference between a builder-grade vinyl and an Andersen 400 Series double-hung in your hand, in your light, beside your existing trim.
              </p>
              <p className="text-charcoal-600 text-base leading-relaxed">
                We&apos;re based at 909 Hidden Ridge Drive in Irving, a straight shot down SH-161 to most Grand Prairie neighborhoods. That proximity matters when a glass pane gets shipped damaged or a sash needs adjustment six months later: our trucks are already in the area most weeks.
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
          <p className="text-charcoal-600 leading-relaxed max-w-3xl mb-10">
            We&apos;ve installed windows from the Mountain Creek bluffs to the older blocks east of SH-161. Each pocket of the city has its own quirks: HOA architectural review boards in Lake Ridge, deed-restricted exterior color requirements in Mira Lagos, and the wind-load considerations every contractor learns the first time they replace windows on a hill above Joe Pool.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-[13px] tracking-[0.15em] uppercase font-medium text-charcoal-900 mb-4">
                North Grand Prairie
              </h3>
              <ul className="text-charcoal-600 text-sm space-y-2">
                <li>Dalworth Park</li>
                <li>Grand Peninsula</li>
                <li>Carrier Parkway</li>
                <li>Westchester</li>
              </ul>
            </div>
            <div>
              <h3 className="text-[13px] tracking-[0.15em] uppercase font-medium text-charcoal-900 mb-4">
                Joe Pool Lake area
              </h3>
              <ul className="text-charcoal-600 text-sm space-y-2">
                <li>Lynn Creek</li>
                <li>Riverside Estates</li>
                <li>Lake Ridge</li>
                <li>Mira Lagos</li>
              </ul>
            </div>
            <div>
              <h3 className="text-[13px] tracking-[0.15em] uppercase font-medium text-charcoal-900 mb-4">
                Southwest areas
              </h3>
              <ul className="text-charcoal-600 text-sm space-y-2">
                <li>Mountain Creek</li>
                <li>Pleasant Run</li>
                <li>South Grand Prairie</li>
                <li>Westchester Estates</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-12">
          <h2 className="text-heading-serif text-3xl md:text-4xl text-charcoal-900 font-light mb-8 text-center">
            What makes a Grand Prairie window project different
          </h2>
          <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            <div>
              <h3 className="text-xl font-light text-charcoal-900 mb-4">Wind, sun, and lake humidity</h3>
              <p className="text-charcoal-600 leading-relaxed">
                Grand Prairie&apos;s open terrain means stronger sustained winds than more sheltered metroplex suburbs. We pay particular attention to fastener schedules and flashing details on west-facing elevations, where wind-driven rain can find any gap in a hurry. Lakefront properties around Joe Pool also see slightly higher humidity than inland Grand Prairie, so we lean toward fiberglass or composite frames that don&apos;t expand and contract the way vinyl does in a swinging dewpoint.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-light text-charcoal-900 mb-4">Manufacturer-trained installers</h3>
              <p className="text-charcoal-600 leading-relaxed">
                Our installers complete factory training programs for Andersen, Pella, JELD-WEN, and Marvin. That matters because each manufacturer has slightly different requirements for shimming, foam type, sealant compatibility, and flashing tape. A vinyl JELD-WEN Premium installed using Andersen 400 Series technique looks fine for two summers, then starts leaking. We don&apos;t cross those wires.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-stone-100">
        <div className="max-w-[1000px] mx-auto px-6 lg:px-12">
          <h2 className="text-heading-serif text-3xl md:text-4xl text-charcoal-900 font-light mb-10">Brands and styles popular in Grand Prairie</h2>
          <p className="text-charcoal-600 leading-relaxed mb-4">
            Most Grand Prairie homeowners choose between vinyl double-hung and vinyl sliding configurations for the bedrooms, with a picture or casement combination in the great room. We&apos;ll specify Pella 250 Series or Andersen 100 Series in vinyl when budget is the priority, stepping up to Andersen 400 Series double-hung for homes where resale appearance and operability matter most.
          </p>
          <p className="text-charcoal-600 leading-relaxed mb-4">
            Lakefront properties along Lake Ridge and Lynn Creek often warrant Marvin Elevate fiberglass or Pella Reserve wood-clad, since those product lines hold their seal integrity better in fluctuating humidity. We&apos;ll run the energy-cost math with you so you can see the actual payback rather than relying on a sales pitch.
          </p>
          <p className="text-charcoal-600 leading-relaxed">
            Whatever brand and material you choose, you&apos;ll get factory-direct pricing because we install in volume across the metroplex. There are no broker commissions tucked into the proposal, and the manufacturer warranty registers in your name on the day of the final walkthrough.
          </p>
        </div>
      </section>

            <section className="py-20 bg-white">
        <div className="max-w-[1100px] mx-auto px-6 lg:px-12">
          <h2 className="text-heading-serif text-3xl md:text-4xl text-charcoal-900 font-light mb-10">Common questions from Grand Prairie homeowners</h2>
          <div className="space-y-8">
            <div>
              <h3 className="text-lg font-medium text-charcoal-900 mb-3">How long does a typical Grand Prairie window replacement take?</h3>
              <p className="text-charcoal-600 leading-relaxed">Most Grand Prairie whole-home projects run two to three working days from demo to final cleanup. A standard double-hung swap takes about 45 minutes per opening once the old unit is out, and we move methodically from elevation to elevation. Larger custom orders with arched or radius geometry add a day or two for ordering and a few additional hours per opening on install. We&apos;ll commit to a start and finish date in writing before you sign anything.</p>
            </div>
            <div>
              <h3 className="text-lg font-medium text-charcoal-900 mb-3">Which window brand is best for my Grand Prairie home?</h3>
              <p className="text-charcoal-600 leading-relaxed">There is no single right answer because Grand Prairie&apos;s open-prairie wind exposure and the Joe Pool Lake humidity profile all push the spec in different directions. Our default recommendation for most Grand Prairie mid-range projects is Andersen 400 Series double-hung or JELD-WEN Premium Vinyl &mdash; both deliver strong thermal performance at fair pricing. For custom-home work, premium remodels, and historic restorations, we step up to Andersen E-Series, Pella Reserve, or Marvin Signature. The right brand depends on your home, your goals, and your budget, and we&apos;ll show you the comparative spec sheets during the consultation rather than pushing one product on every project.</p>
            </div>
            <div>
              <h3 className="text-lg font-medium text-charcoal-900 mb-3">Do energy-efficient windows really lower utility bills in Grand Prairie?</h3>
              <p className="text-charcoal-600 leading-relaxed">Yes, particularly when the existing windows are original aluminum-framed singles or first-generation dual-pane. Replacing those with insulated vinyl or fiberglass frames carrying a Low-E366 coating and argon fill typically delivers a measurable reduction on the next Oncor bill. The biggest gains show up on the south- and west-facing elevations, where the late-afternoon sun load is heaviest. We&apos;ll model the projected savings using your actual kWh history during the consultation rather than quoting a generic brochure number.</p>
            </div>
            <div>
              <h3 className="text-lg font-medium text-charcoal-900 mb-3">What does the warranty cover?</h3>
              <p className="text-charcoal-600 leading-relaxed">Every install includes the manufacturer warranty plus our written craftsmanship guarantee on the labor. The manufacturer warranty &mdash; typically limited lifetime on the IGU and frame, with shorter terms on hardware and finishes &mdash; registers in your name on the day of completion. Our craftsmanship guarantee covers the install workmanship for ten years. If a sash needs adjustment, a screen develops a tear, or weatherstripping fails during that period, we come back at no charge. Lake Ridge and Mira Lagos HOAs maintain deed-restricted exterior color requirements, which we coordinate so that warranty registration and ARB documentation are both handled before we start.</p>
            </div>
            <div>
              <h3 className="text-lg font-medium text-charcoal-900 mb-3">Do you provide written, itemized pricing?</h3>
              <p className="text-charcoal-600 leading-relaxed">Always. Every Grand Prairie proposal lists each window with size, configuration, frame material, exterior and interior finish, hardware, screen, and glass package. Installation labor, removal and disposal of the old units, and warranty terms are spelled out separately. There are no broker commissions tucked into the proposal, no surprise change orders, and no hidden line items. You can take the quote, get competitive bids, and decide on your own timeline without a high-pressure follow-up call.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-[800px] mx-auto px-6 text-center">
          <h2 className="text-heading-serif text-3xl md:text-4xl text-charcoal-900 font-light mb-8">
            Get your Grand Prairie window estimate
          </h2>
          <p className="text-charcoal-600 mb-10">
            Contact us for a free in-home consultation and a written, itemized quote. Most Grand Prairie estimates are completed within 48 hours of your initial call, and the consultation itself takes about an hour with no high-pressure pitch at the end.
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
