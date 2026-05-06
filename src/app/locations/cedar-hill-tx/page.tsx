import type { Metadata } from 'next'
import { PageHeader } from '@/components/page-header'
import { PageFooter } from '@/components/page-footer'

export const metadata: Metadata = {
  title: 'Window Replacement Cedar Hill TX | Premium Installation Services',
  description: 'Window replacement in Cedar Hill, TX. Serving Highland Hills, Lake Ridge, Cypress Lake and the Cedar Hill ISD neighborhoods south of Joe Pool. Andersen, Pella, JELD-WEN, Marvin. 972-284-7995',
}

export default function CedarHillPage() {
  return (
    <div className="min-h-screen bg-white">
      <PageHeader />

      <section className="relative min-h-[60vh] flex items-center pt-32">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(/locations/window-replacement-cedar-hill-tx.jpg)',
          }}
        />
        <div className="hero-overlay absolute inset-0" />

        <div className="relative z-10 w-full max-w-[1400px] mx-auto px-6 lg:px-12">
          <h1 className="text-heading-serif text-4xl md:text-5xl lg:text-6xl text-white font-light mb-6">
            Window Replacement in Cedar Hill, TX
          </h1>
          <p className="text-white/90 text-lg md:text-xl max-w-2xl mb-8">
            Replacement windows for Cedar Hill&apos;s hill-country housing south of Joe Pool Lake. Lake-view glass packages, hail-rated impact glass, and frames that handle the sustained western wind that sweeps the bluffs.
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
                src="/locations/window-replacement-cedar-hill-tx.jpg"
                alt="Cedar Hill window replacement"
                className="w-full aspect-[4/5] object-cover"
              />
            </div>

            <div>
              <h2 className="text-heading-serif text-3xl md:text-4xl text-charcoal-900 font-light mb-6">
                Cedar Hill&apos;s topography drives the spec
              </h2>
              <p className="text-charcoal-600 text-base leading-relaxed mb-6">
                Cedar Hill is one of the few places in the metroplex with real elevation change &mdash; the bluffs above Joe Pool Lake create exposure conditions you don&apos;t see in flatter suburbs. Sustained western wind, longer afternoon sun loads on lake-facing elevations, and reflected glare off the water all factor into the right window spec. Lake Ridge and Cypress Lake homes especially benefit from upgraded glass packages tuned for those conditions.
              </p>
              <p className="text-charcoal-600 text-base leading-relaxed mb-6">
                The housing arc runs from established 1980s ranches around Highland Hills to newer custom homes in the Lake Ridge master plan and the bluff-top Belmont section. Most original windows are hitting the end of their service life now. We commonly spec Marvin Elevate fiberglass or Pella Reserve aluminum-clad on lakefront jobs, since those frames hold their seal integrity better in the elevated humidity. Inland Cedar Hill runs Andersen 400 Series or JELD-WEN Premium Vinyl.
              </p>
              <p className="text-charcoal-600 text-base leading-relaxed">
                We pay particular attention to fastener schedules and flashing details on west-facing elevations &mdash; the wind pressures up here are higher than the metroplex average, and a marginal install will leak.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-stone-100">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-12">
          <h2 className="text-heading-serif text-3xl md:text-4xl text-charcoal-900 font-light text-center mb-12">
            Cedar Hill neighborhoods we serve
          </h2>
          <p className="text-charcoal-600 leading-relaxed mb-10 max-w-3xl mx-auto text-center">
            We&apos;ve worked across the city, from the bluffs above Joe Pool to the older blocks north of US-67. Lake Ridge has an active architectural review board with deed restrictions on frame color and grille pattern, and we coordinate ARB submittals up front.
          </p>
          <div className="grid md:grid-cols-3 gap-6 text-sm">
            <div>
              <h3 className="text-[11px] tracking-[0.2em] uppercase font-medium text-charcoal-900 mb-3">North Cedar Hill</h3>
              <ul className="text-charcoal-600 space-y-1">
                <li>Cedar Hill Estates</li>
                <li>Highland Hills</li>
                <li>Lake Ridge</li>
                <li>North Cedar Hill</li>
              </ul>
            </div>
            <div>
              <h3 className="text-[11px] tracking-[0.2em] uppercase font-medium text-charcoal-900 mb-3">Central Cedar Hill</h3>
              <ul className="text-charcoal-600 space-y-1">
                <li>Town Center</li>
                <li>Dalrock</li>
                <li>Four Seasons</li>
                <li>Kingswood</li>
              </ul>
            </div>
            <div>
              <h3 className="text-[11px] tracking-[0.2em] uppercase font-medium text-charcoal-900 mb-3">South Cedar Hill</h3>
              <ul className="text-charcoal-600 space-y-1">
                <li>Belmont</li>
                <li>Cypress Lake</li>
                <li>Lakeview</li>
                <li>Wintergreen</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-12">
          <h2 className="text-heading-serif text-3xl md:text-4xl text-charcoal-900 font-light mb-12">
            Lake exposure, wind loads, and hail
          </h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-xl font-light text-charcoal-900 mb-4">Lake-facing solar control</h3>
              <p className="text-charcoal-600 leading-relaxed mb-4">
                Lake-facing elevations get a double dose of solar heat &mdash; direct sun plus the reflected glare off Joe Pool. We typically recommend Cardinal LoE-340 or LoE-366 with argon fill on those elevations to drop both visible-light reflection and total solar heat gain. Cooler great rooms in August, lower cooling bills.
              </p>
              <p className="text-charcoal-600 leading-relaxed">
                Inland and tree-shaded rooms get a different package tuned for daylight rather than maximum heat rejection.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-light text-charcoal-900 mb-4">Wind, hail, and impact glass</h3>
              <p className="text-charcoal-600 leading-relaxed mb-4">
                The bluff exposure means higher sustained wind pressures than typical metroplex installs see. Combined with the hail risk southern Dallas County carries, the case for laminated impact glass on the most exposed elevations is stronger here than in most suburbs. Andersen, Pella, JELD-WEN, and Marvin all offer impact-rated configurations.
              </p>
              <p className="text-charcoal-600 leading-relaxed">
                We&apos;ll run the comparative cost numbers and the projected insurance-deductible savings during the consultation.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-charcoal-500">
        <div className="max-w-[1000px] mx-auto px-6 lg:px-12 text-center">
          <h2 className="text-heading-serif text-3xl md:text-4xl text-white font-light mb-8">
            Wind-load-aware Cedar Hill installations
          </h2>
          <p className="text-stone-300 text-lg leading-relaxed max-w-2xl mx-auto mb-8">
            Our Cedar Hill installs use upgraded fastener schedules, full perimeter flashing tape, and high-grade sealants designed for sustained wind exposure. Floors get rosin paper, furniture covered in plastic, dust collection on indoor cuts, HEPA vacuum at the end of each shift. The final walkthrough happens with you alongside the lead installer.
          </p>
          <p className="text-stone-300 leading-relaxed max-w-2xl mx-auto">
            Manufacturer warranties register in your name on completion. Our written craftsmanship guarantee covers labor for ten years.
          </p>
        </div>
      </section>

            <section className="py-20 bg-white">
        <div className="max-w-[1100px] mx-auto px-6 lg:px-12">
          <h2 className="text-heading-serif text-3xl md:text-4xl text-charcoal-900 font-light mb-10">Common questions from Cedar Hill homeowners</h2>
          <div className="space-y-8">
            <div>
              <h3 className="text-lg font-medium text-charcoal-900 mb-3">How long does a typical Cedar Hill window replacement take?</h3>
              <p className="text-charcoal-600 leading-relaxed">Most Cedar Hill whole-home projects run two to three working days from demo to final cleanup. A standard double-hung swap takes about 45 minutes per opening once the old unit is out, and we move methodically from elevation to elevation. Larger custom orders with arched or radius geometry add a day or two for ordering and a few additional hours per opening on install. We&apos;ll commit to a start and finish date in writing before you sign anything.</p>
            </div>
            <div>
              <h3 className="text-lg font-medium text-charcoal-900 mb-3">Which window brand is best for my Cedar Hill home?</h3>
              <p className="text-charcoal-600 leading-relaxed">There is no single right answer because Cedar Hill&apos;s bluff topography, lake exposure, and elevated wind loads all push the spec in different directions. Our default recommendation for most Cedar Hill mid-range projects is Andersen 400 Series double-hung or JELD-WEN Premium Vinyl &mdash; both deliver strong thermal performance at fair pricing. For custom-home work, premium remodels, and historic restorations, we step up to Andersen E-Series, Pella Reserve, or Marvin Signature. The right brand depends on your home, your goals, and your budget, and we&apos;ll show you the comparative spec sheets during the consultation rather than pushing one product on every project.</p>
            </div>
            <div>
              <h3 className="text-lg font-medium text-charcoal-900 mb-3">Do energy-efficient windows really lower utility bills in Cedar Hill?</h3>
              <p className="text-charcoal-600 leading-relaxed">Yes, particularly when the existing windows are original aluminum-framed singles or first-generation dual-pane. Replacing those with insulated vinyl or fiberglass frames carrying a Low-E366 coating and argon fill typically delivers a measurable reduction on the next Oncor bill. The biggest gains show up on the south- and west-facing elevations, where the late-afternoon sun load is heaviest. We&apos;ll model the projected savings using your actual kWh history during the consultation rather than quoting a generic brochure number.</p>
            </div>
            <div>
              <h3 className="text-lg font-medium text-charcoal-900 mb-3">What does the warranty cover?</h3>
              <p className="text-charcoal-600 leading-relaxed">Every install includes the manufacturer warranty plus our written craftsmanship guarantee on the labor. The manufacturer warranty &mdash; typically limited lifetime on the IGU and frame, with shorter terms on hardware and finishes &mdash; registers in your name on the day of completion. Our craftsmanship guarantee covers the install workmanship for ten years. If a sash needs adjustment, a screen develops a tear, or weatherstripping fails during that period, we come back at no charge. Lake Ridge ARB requires submittal documentation up front, which we coordinate so that warranty registration and ARB documentation are both handled before we start.</p>
            </div>
            <div>
              <h3 className="text-lg font-medium text-charcoal-900 mb-3">Do you provide written, itemized pricing?</h3>
              <p className="text-charcoal-600 leading-relaxed">Always. Every Cedar Hill proposal lists each window with size, configuration, frame material, exterior and interior finish, hardware, screen, and glass package. Installation labor, removal and disposal of the old units, and warranty terms are spelled out separately. There are no broker commissions tucked into the proposal, no surprise change orders, and no hidden line items. You can take the quote, get competitive bids, and decide on your own timeline without a high-pressure follow-up call.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-stone-100">
        <div className="max-w-[800px] mx-auto px-6 text-center">
          <h2 className="text-heading-serif text-3xl md:text-4xl text-charcoal-900 font-light mb-8">
            Transform your Cedar Hill home with premium windows
          </h2>
          <p className="text-charcoal-600 mb-10">
            Schedule your complimentary in-home consultation. We&apos;ll evaluate your property&apos;s exposure, recommend frame and glass packages tuned to lake or inland orientation, and provide a written, itemized quote.
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
