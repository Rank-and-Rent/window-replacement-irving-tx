import type { Metadata } from 'next'
import { PageHeader } from '@/components/page-header'
import { PageFooter } from '@/components/page-footer'

export const metadata: Metadata = {
  title: 'Window Replacement Addison TX | Premium Installation Services',
  description: 'Addison window replacement from an Irving-based crew — Addison Circle mid-rises, Bent Tree estates, the Tollway corporate-tenant condos. Acoustic IGUs for Addison Airport.',
}

export default function AddisonPage() {
  return (
    <div className="min-h-screen bg-white">
      <PageHeader />

      <section className="relative min-h-[60vh] flex items-center pt-32">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(/locations/window-replacement-addison-tx-1.webp)',
          }}
        />
        <div className="hero-overlay absolute inset-0" />

        <div className="relative z-10 w-full max-w-[1400px] mx-auto px-6 lg:px-12">
          <h1 className="text-heading-serif text-4xl md:text-5xl lg:text-6xl text-white font-light mb-6">
            Window Replacement in Addison, TX
          </h1>
          <p className="text-white/90 text-lg md:text-xl max-w-2xl mb-8">
            Replacement windows for Addison&apos;s mix of upscale townhomes, mid-rise condos, and Bent Tree custom homes. Acoustic glazing for the airport corridor, premium frames that match high-end interior trim, and a quiet, careful install.
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
                src="/locations/window-replacement-addison-tx-1.webp"
                alt="Addison window replacement"
                className="w-full aspect-[4/5] object-cover"
              />
            </div>

            <div>
              <h2 className="text-heading-serif text-3xl md:text-4xl text-charcoal-900 font-light mb-6">
                Addison&apos;s housing mix demands a careful spec
              </h2>
              <p className="text-charcoal-600 text-base leading-relaxed mb-6">
                Addison packs a lot of housing variety into 4.4 square miles. Addison Circle is a contemporary urban village with mid-rise condos, brownstones, and live-work lofts that often want clean-line aluminum or fiberglass frames. Bent Tree and Waterford swing toward traditional and Mediterranean custom homes with arched, radius, and trapezoidal openings that need specialty manufacturers. The townhomes around Arapaho and the mid-century blocks near Quorum bring yet another set of constraints, particularly when an HOA dictates exterior frame color.
              </p>
              <p className="text-charcoal-600 text-base leading-relaxed mb-6">
                We&apos;ve installed in all three of those Addison housing pockets, and the takeaway is that one product line cannot cover the city. Our preference is to bring sample frames from Andersen, Pella, JELD-WEN, and Marvin to the consultation so the homeowner can compare profiles, sightlines, and finishes against existing trim and millwork. The decision changes when you can hold the frame in your hand under your own dining-room light.
              </p>
              <p className="text-charcoal-600 text-base leading-relaxed">
                Addison Airport sits in the middle of town, and aircraft traffic is part of life here. We&apos;ll talk through laminated acoustic IGUs that cut perceived noise meaningfully on bedroom and home-office elevations. The upgrade pays off the first weekend you can leave the windows closed and not hear the runway.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-stone-100">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-12">
          <h2 className="text-heading-serif text-3xl md:text-4xl text-charcoal-900 font-light text-center mb-12">
            Addison neighborhoods we serve
          </h2>
          <p className="text-charcoal-600 leading-relaxed mb-10 max-w-3xl mx-auto text-center">
            Addison&apos;s small footprint means we know nearly every block. The challenges differ between an Addison Circle stack-flat condo with shared exterior assembly responsibilities and a freestanding Bent Tree custom on a half-acre lot, and our scoping reflects that.
          </p>
          <div className="grid md:grid-cols-3 gap-6 text-sm">
            <div>
              <h3 className="text-[11px] tracking-[0.2em] uppercase font-medium text-charcoal-900 mb-3">North Addison</h3>
              <ul className="text-charcoal-600 space-y-1">
                <li>Addison Circle</li>
                <li>Midway Meadows</li>
                <li>Bent Tree</li>
                <li>Waterford</li>
              </ul>
            </div>
            <div>
              <h3 className="text-[11px] tracking-[0.2em] uppercase font-medium text-charcoal-900 mb-3">Central Addison</h3>
              <ul className="text-charcoal-600 space-y-1">
                <li>Addison Town Center</li>
                <li>Arapaho Village</li>
                <li>Town North</li>
                <li>Villas of Addison</li>
              </ul>
            </div>
            <div>
              <h3 className="text-[11px] tracking-[0.2em] uppercase font-medium text-charcoal-900 mb-3">South Addison</h3>
              <ul className="text-charcoal-600 space-y-1">
                <li>White Rock Creek</li>
                <li>Addison Airport area</li>
                <li>Quorum Oaks</li>
                <li>Festival</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-12">
          <h2 className="text-heading-serif text-3xl md:text-4xl text-charcoal-900 font-light mb-12">
            Performance considerations for Addison properties
          </h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-xl font-light text-charcoal-900 mb-4">Acoustic priorities near the airport</h3>
              <p className="text-charcoal-600 leading-relaxed mb-4">
                Addison Airport handles general aviation traffic at all hours, and runway 15 routes a steady stream of departures over the residential blocks south and west of the field. We specify laminated acoustic glass &mdash; typically a 5mm/0.030 PVB/3mm laminate paired with standard Low-E inboard &mdash; on bedroom and home-office windows along that flight path. Sound transmission class (STC) values jump from the high 20s to the mid 30s, which translates into a perceptibly quieter interior.
              </p>
              <p className="text-charcoal-600 leading-relaxed">
                Bedroom installs along Beltway, Quorum, and the Tollway corridor benefit too. The Tollway noise floor is real even three blocks back, and acoustic glazing changes how the room feels.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-light text-charcoal-900 mb-4">Premium frames for premium homes</h3>
              <p className="text-charcoal-600 leading-relaxed mb-4">
                Bent Tree and Waterford homes generally have stained interior trim and detailed millwork. Builder-grade vinyl looks wrong against that backdrop. Pella Reserve wood-clad and Marvin Signature carry the interior species and stain options that align with high-end interiors. For Addison Circle&apos;s contemporary palette, Andersen E-Series aluminum-clad lets us match dark exterior frames to a flush, modern profile.
              </p>
              <p className="text-charcoal-600 leading-relaxed">
                JELD-WEN Premium Vinyl handles the value end of the spectrum without giving up energy performance, and we use it freely in the Festival and Arapaho Village townhomes when budget is the priority.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-charcoal-500">
        <div className="max-w-[1000px] mx-auto px-6 lg:px-12 text-center">
          <h2 className="text-heading-serif text-3xl md:text-4xl text-white font-light mb-8">
            Quiet, careful Addison installations
          </h2>
          <p className="text-stone-300 text-lg leading-relaxed max-w-2xl mx-auto mb-8">
            Condos and townhomes in Addison Circle and the Villas of Addison have shared walls and tight access, so we plan staging carefully, coordinate with HOA management, and protect common areas with floor coverings and corner guards. For freestanding Bent Tree and Waterford homes, we run a fully self-contained jobsite with portable bathroom, dust-controlled cuts, and end-of-day HEPA vacuuming.
          </p>
          <p className="text-stone-300 leading-relaxed max-w-2xl mx-auto">
            Each install includes the manufacturer warranty plus our written craftsmanship guarantee on the labor. We register the warranty in your name on the day of the final walkthrough so you don&apos;t have to chase paperwork later.
          </p>
        </div>
      </section>

            <section className="py-20 bg-white">
        <div className="max-w-[1100px] mx-auto px-6 lg:px-12">
          <h2 className="text-heading-serif text-3xl md:text-4xl text-charcoal-900 font-light mb-10">Common questions from Addison homeowners</h2>
          <div className="space-y-8">
            <div>
              <h3 className="text-lg font-medium text-charcoal-900 mb-3">How long does a typical Addison window replacement take?</h3>
              <p className="text-charcoal-600 leading-relaxed">Most Addison whole-home projects run two to three working days from demo to final cleanup. A standard double-hung swap takes about 45 minutes per opening once the old unit is out, and we move methodically from elevation to elevation. Larger custom orders with arched or radius geometry add a day or two for ordering and a few additional hours per opening on install. We&apos;ll commit to a start and finish date in writing before you sign anything.</p>
            </div>
            <div>
              <h3 className="text-lg font-medium text-charcoal-900 mb-3">Which window brand is best for my Addison home?</h3>
              <p className="text-charcoal-600 leading-relaxed">There is no single right answer because Addison&apos;s urban-village footprint and Addison Airport proximity push us toward acoustic and aluminum-clad packages all push the spec in different directions. Our default recommendation for most Addison mid-range projects is Andersen 400 Series double-hung or JELD-WEN Premium Vinyl &mdash; both deliver strong thermal performance at fair pricing. For custom-home work, premium remodels, and historic restorations, we step up to Andersen E-Series, Pella Reserve, or Marvin Signature. The right brand depends on your home, your goals, and your budget, and we&apos;ll show you the comparative spec sheets during the consultation rather than pushing one product on every project.</p>
            </div>
            <div>
              <h3 className="text-lg font-medium text-charcoal-900 mb-3">Do energy-efficient windows really lower utility bills in Addison?</h3>
              <p className="text-charcoal-600 leading-relaxed">Yes, particularly when the existing windows are original aluminum-framed singles or first-generation dual-pane. Replacing those with insulated vinyl or fiberglass frames carrying a Low-E366 coating and argon fill typically delivers a measurable reduction on the next Oncor bill. The biggest gains show up on the south- and west-facing elevations, where the late-afternoon sun load is heaviest. We&apos;ll model the projected savings using your actual kWh history during the consultation rather than quoting a generic brochure number.</p>
            </div>
            <div>
              <h3 className="text-lg font-medium text-charcoal-900 mb-3">What does the warranty cover?</h3>
              <p className="text-charcoal-600 leading-relaxed">Every install includes the manufacturer warranty plus our written craftsmanship guarantee on the labor. The manufacturer warranty &mdash; typically limited lifetime on the IGU and frame, with shorter terms on hardware and finishes &mdash; registers in your name on the day of completion. Our craftsmanship guarantee covers the install workmanship for ten years. If a sash needs adjustment, a screen develops a tear, or weatherstripping fails during that period, we come back at no charge. Addison Circle condo and townhome HOAs require coordinated exterior work, which we coordinate so that warranty registration and ARB documentation are both handled before we start.</p>
            </div>
            <div>
              <h3 className="text-lg font-medium text-charcoal-900 mb-3">Do you provide written, itemized pricing?</h3>
              <p className="text-charcoal-600 leading-relaxed">Always. Every Addison proposal lists each window with size, configuration, frame material, exterior and interior finish, hardware, screen, and glass package. Installation labor, removal and disposal of the old units, and warranty terms are spelled out separately. There are no broker commissions tucked into the proposal, no surprise change orders, and no hidden line items. You can take the quote, get competitive bids, and decide on your own timeline without a high-pressure follow-up call.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-stone-100">
        <div className="max-w-[800px] mx-auto px-6 text-center">
          <h2 className="text-heading-serif text-3xl md:text-4xl text-charcoal-900 font-light mb-8">
            Schedule your Addison consultation
          </h2>
          <p className="text-charcoal-600 mb-10">
            We&apos;ll come to your Addison home or condo, take field measurements, discuss the right frame and glass package for your elevations and acoustic priorities, and provide a written, itemized quote. No high-pressure pitch &mdash; just options and clear pricing.
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
