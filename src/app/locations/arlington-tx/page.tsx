import type { Metadata } from 'next'
import { PageHeader } from '@/components/page-header'
import { PageFooter } from '@/components/page-footer'

export const metadata: Metadata = {
  title: 'Window Replacement Arlington TX | Quality Installation & Service',
  description: 'Window replacement in Arlington, TX. Serving the Entertainment District, Viridian, Lake Arlington, and the AISD neighborhoods. Andersen, Pella, JELD-WEN, Marvin. 972-284-7995',
}

export default function ArlingtonPage() {
  return (
    <div className="min-h-screen bg-white">
      <PageHeader />

      <section className="relative min-h-[60vh] flex items-center pt-32">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(/locations/window-replacement-arlington-tx-3.jpg)',
          }}
        />
        <div className="hero-overlay absolute inset-0" />

        <div className="relative z-10 w-full max-w-[1400px] mx-auto px-6 lg:px-12">
          <h1 className="text-heading-serif text-4xl md:text-5xl lg:text-6xl text-white font-light mb-6">
            Window Replacement in Arlington, TX
          </h1>
          <p className="text-white/90 text-lg md:text-xl max-w-2xl mb-8">
            Replacement windows for Arlington homes &mdash; from Woodland West&apos;s established 1970s neighborhoods to the new master-planned Viridian development, Lake Arlington waterfront, and the high-density residential springing up around the Entertainment District. Factory-trained installation, transparent pricing.
          </p>
          <a href="/contact" className="btn-white">
            Request Estimate
          </a>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <h2 className="text-heading-serif text-3xl md:text-4xl text-charcoal-900 font-light mb-6">
                Arlington&apos;s sprawl spans every housing era
              </h2>
              <p className="text-charcoal-600 text-base leading-relaxed mb-6">
                Arlington is one of the largest cities in Texas by population, and its housing reflects 70+ years of growth. Post-war ranches in Dalworth Park, 1970s and 1980s two-stories in River Oaks, Sherrod Estates, and Woodhaven, mid-1990s family homes in Park Springs and Webb, and the brand-new high-density product around AT&amp;T Stadium and Globe Life Field. Lake Arlington and the Viridian development bring waterfront and master-planned variations to the mix.
              </p>
              <p className="text-charcoal-600 text-base leading-relaxed mb-6">
                Each generation of Arlington homes presents specific window-replacement realities. The 1970s and 1980s housing stock typically still has its original aluminum-framed singles or first-generation dual-pane &mdash; technologies long since outpaced by current Low-E and frame insulation. Modern dual-pane Low-E with argon fill in insulated vinyl frames cuts energy consumption by 40 to 50 percent on those homes, transforming previously uncomfortable rooms into pleasant living spaces year-round.
              </p>
              <p className="text-charcoal-600 text-base leading-relaxed">
                The newer Viridian and Entertainment District product carries larger contemporary glass packages, often with darker frame finishes. We routinely spec Andersen E-Series black-clad and Marvin Modern in those builds, while running Andersen 400 Series or JELD-WEN Premium Vinyl in the more traditional suburban remodels.
              </p>
            </div>

            <div>
              <img
                src="/locations/window-replacement-arlington-tx-3.jpg"
                alt="Arlington TX window installation"
                className="w-full aspect-[4/5] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-stone-100">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-12">
          <h2 className="text-heading-serif text-3xl md:text-4xl text-charcoal-900 font-light mb-12">
            Arlington neighborhoods we serve
          </h2>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div>
              <h3 className="text-[13px] tracking-[0.15em] uppercase font-medium text-charcoal-900 mb-4">
                Central Arlington
              </h3>
              <ul className="text-charcoal-600 text-sm space-y-2">
                <li>Dalworth Park</li>
                <li>Downtown Arlington</li>
                <li>Park Springs</li>
                <li>Woodland West</li>
                <li>Woodhaven</li>
              </ul>
            </div>
            <div>
              <h3 className="text-[13px] tracking-[0.15em] uppercase font-medium text-charcoal-900 mb-4">
                North Arlington
              </h3>
              <ul className="text-charcoal-600 text-sm space-y-2">
                <li>Lake Arlington</li>
                <li>Viridian</li>
                <li>Rush Creek</li>
                <li>Meadow Creek</li>
                <li>Webb</li>
              </ul>
            </div>
            <div>
              <h3 className="text-[13px] tracking-[0.15em] uppercase font-medium text-charcoal-900 mb-4">
                South Arlington
              </h3>
              <ul className="text-charcoal-600 text-sm space-y-2">
                <li>River Oaks</li>
                <li>Sherrod Estates</li>
                <li>Mansfield Highway corridor</li>
                <li>Southeast Arlington</li>
              </ul>
            </div>
          </div>

          <div className="bg-white p-8">
            <h3 className="text-xl font-light text-charcoal-900 mb-4">Entertainment District window services</h3>
            <p className="text-charcoal-600 leading-relaxed">
              The high-density residential development near AT&amp;T Stadium, Globe Life Field, and Six Flags creates unique window needs. Contemporary townhomes, mid-rise condos, and live-work loft product feature extensive glass maximizing natural light in compact spaces. We routinely spec modern aluminum-clad window walls, floor-to-ceiling installations, and noise-reducing laminated acoustic glass that maintains comfort despite proximity to event venues, the Trinity Railway Express, and busy I-30 traffic.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-heading-serif text-3xl md:text-4xl text-charcoal-900 font-light mb-8">
                Energy and acoustic priorities for Arlington
              </h2>
              <p className="text-charcoal-600 leading-relaxed mb-6">
                Arlington&apos;s open prairie terrain provides little natural shade, particularly on the south and east sides of town. Homes there receive full solar exposure during the long summer months when 100-degree afternoons are routine. We recommend dual-pane Low-E windows with argon fill as the minimum specification, with triple-pane consideration for large west-facing openings on Lake Arlington and Viridian custom homes. The additional insulation typically pays for itself within 5 to 7 years through reduced cooling costs.
              </p>
              <p className="text-charcoal-600 leading-relaxed mb-6">
                Beyond energy savings, quality windows dramatically change comfort. The hot spots near old single-pane windows disappear once Low-E coatings reflect infrared radiation back outside. Cold drafts during the occasional Arctic front in January get eliminated by modern weatherstripping and insulated frame chambers. Consistent room-to-room temperatures replace the typical patchwork of comfortable and uncomfortable spaces older homes carry.
              </p>
              <p className="text-charcoal-600 leading-relaxed">
                For homes within a quarter-mile of I-30, US-287, or the Trinity Railway Express, laminated acoustic IGUs on bedroom and home-office windows make a perceptual difference that&apos;s hard to overstate. We isolate that upgrade to the rooms where it pays off and run standard Low-E elsewhere.
              </p>
            </div>

            <div>
              <img
                src="/locations/window-replacement-arlington-tx-3.jpg"
                alt="Energy efficient windows Arlington"
                className="w-full aspect-[3/4] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-charcoal-500">
        <div className="max-w-[1000px] mx-auto px-6 lg:px-12 text-center">
          <h2 className="text-heading-serif text-3xl md:text-4xl text-white font-light mb-8">
            Arlington&apos;s straight-talk window replacement company
          </h2>
          <p className="text-stone-300 text-lg leading-relaxed mb-8 max-w-2xl mx-auto">
            From the initial consultation through final installation, we deliver the transparency and professionalism Arlington homeowners expect. Our factory-trained installers treat your home with respect, run a dust-controlled jobsite, complete a thorough end-of-day cleanup, and ensure the homeowner has tested every sash before we leave the driveway.
          </p>
          <p className="text-stone-300 leading-relaxed max-w-2xl mx-auto">
            We&apos;re not a high-pressure sales operation. We&apos;re window installers who walk you through the options, answer questions honestly, and let you make decisions on your timeline. Manufacturer warranties register in your name on completion. Our written craftsmanship guarantee covers labor for ten years.
          </p>
        </div>
      </section>

            <section className="py-20 bg-white">
        <div className="max-w-[1100px] mx-auto px-6 lg:px-12">
          <h2 className="text-heading-serif text-3xl md:text-4xl text-charcoal-900 font-light mb-10">Common questions from Arlington homeowners</h2>
          <div className="space-y-8">
            <div>
              <h3 className="text-lg font-medium text-charcoal-900 mb-3">How long does a typical Arlington window replacement take?</h3>
              <p className="text-charcoal-600 leading-relaxed">Most Arlington whole-home projects run two to three working days from demo to final cleanup. A standard double-hung swap takes about 45 minutes per opening once the old unit is out, and we move methodically from elevation to elevation. Larger custom orders with arched or radius geometry add a day or two for ordering and a few additional hours per opening on install. We&apos;ll commit to a start and finish date in writing before you sign anything.</p>
            </div>
            <div>
              <h3 className="text-lg font-medium text-charcoal-900 mb-3">Which window brand is best for my Arlington home?</h3>
              <p className="text-charcoal-600 leading-relaxed">There is no single right answer because Arlington&apos;s open-prairie sun load and the entertainment-district acoustic environment all push the spec in different directions. Our default recommendation for most Arlington mid-range projects is Andersen 400 Series double-hung or JELD-WEN Premium Vinyl &mdash; both deliver strong thermal performance at fair pricing. For custom-home work, premium remodels, and historic restorations, we step up to Andersen E-Series, Pella Reserve, or Marvin Signature. The right brand depends on your home, your goals, and your budget, and we&apos;ll show you the comparative spec sheets during the consultation rather than pushing one product on every project.</p>
            </div>
            <div>
              <h3 className="text-lg font-medium text-charcoal-900 mb-3">Do energy-efficient windows really lower utility bills in Arlington?</h3>
              <p className="text-charcoal-600 leading-relaxed">Yes, particularly when the existing windows are original aluminum-framed singles or first-generation dual-pane. Replacing those with insulated vinyl or fiberglass frames carrying a Low-E366 coating and argon fill typically delivers a measurable reduction on the next Oncor bill. The biggest gains show up on the south- and west-facing elevations, where the late-afternoon sun load is heaviest. We&apos;ll model the projected savings using your actual kWh history during the consultation rather than quoting a generic brochure number.</p>
            </div>
            <div>
              <h3 className="text-lg font-medium text-charcoal-900 mb-3">What does the warranty cover?</h3>
              <p className="text-charcoal-600 leading-relaxed">Every install includes the manufacturer warranty plus our written craftsmanship guarantee on the labor. The manufacturer warranty &mdash; typically limited lifetime on the IGU and frame, with shorter terms on hardware and finishes &mdash; registers in your name on the day of completion. Our craftsmanship guarantee covers the install workmanship for ten years. If a sash needs adjustment, a screen develops a tear, or weatherstripping fails during that period, we come back at no charge. Viridian and other newer master-planned communities have strict architectural review, which we coordinate so that warranty registration and ARB documentation are both handled before we start.</p>
            </div>
            <div>
              <h3 className="text-lg font-medium text-charcoal-900 mb-3">Do you provide written, itemized pricing?</h3>
              <p className="text-charcoal-600 leading-relaxed">Always. Every Arlington proposal lists each window with size, configuration, frame material, exterior and interior finish, hardware, screen, and glass package. Installation labor, removal and disposal of the old units, and warranty terms are spelled out separately. There are no broker commissions tucked into the proposal, no surprise change orders, and no hidden line items. You can take the quote, get competitive bids, and decide on your own timeline without a high-pressure follow-up call.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-stone-100">
        <div className="max-w-[800px] mx-auto px-6 text-center">
          <h2 className="text-heading-serif text-3xl md:text-4xl text-charcoal-900 font-light mb-8">
            Schedule your Arlington window consultation
          </h2>
          <p className="text-charcoal-600 mb-10">
            We&apos;ll visit your Arlington home, take field measurements, discuss product options and budget, and provide a written, itemized quote with no high-pressure pitch. Most consultations take 45 to 60 minutes.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/contact" className="btn-outline-dark">
              Book Free Consultation
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
