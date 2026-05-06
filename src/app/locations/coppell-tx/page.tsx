import type { Metadata } from 'next'
import { PageHeader } from '@/components/page-header'
import { PageFooter } from '@/components/page-footer'

export const metadata: Metadata = {
  title: 'Window Replacement Coppell TX | Premium Installation Services',
  description: 'Window replacement in Coppell, TX. Serving Old Town, City Place, Country Club Estates and the Coppell ISD neighborhoods. Acoustic glass for the DFW corridor. 972-284-7995',
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
            Replacement windows for Coppell&apos;s Coppell ISD neighborhoods, the Old Town blocks south of Sandy Lake, and the newer custom homes along Cottonwood Valley. Acoustic glazing for DFW noise, hail-rated glass, and a careful, on-time install.
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
                Coppell&apos;s mix of suburban polish and DFW proximity
              </h2>
              <p className="text-charcoal-600 text-base leading-relaxed mb-6">
                Coppell sits in a unique position on the metroplex map &mdash; immediately west of DFW Airport, with the runway approach pattern routing in from the west and over much of the city on most days. The housing reflects a suburban, family-oriented town built up primarily in the late 1980s through the early 2000s. Country Club Estates, Village at NorthRidge, and the Cottonwood Valley sections carry larger custom homes; Old Town Coppell south of Sandy Lake holds older 1970s ranches and 1980s split-levels with smaller original opening sizes.
              </p>
              <p className="text-charcoal-600 text-base leading-relaxed mb-6">
                The acoustic glass conversation is real here. Western Coppell, particularly along Coppell Road and the SH-121 corridor, sees substantial aircraft noise. We routinely scope laminated acoustic IGUs on bedroom and home-office windows facing the flight path, with standard Low-E elsewhere. The perceptual change is immediate and obvious.
              </p>
              <p className="text-charcoal-600 text-base leading-relaxed">
                We&apos;re based in Irving, just across SH-121, with crews that know the typical Coppell opening sizes by neighborhood and the practical limits of working in the tighter Old Town blocks.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-stone-100">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-12">
          <h2 className="text-heading-serif text-3xl md:text-4xl text-charcoal-900 font-light text-center mb-12">
            Coppell neighborhoods we serve
          </h2>
          <p className="text-charcoal-600 leading-relaxed mb-10 max-w-3xl mx-auto text-center">
            We&apos;ve worked the streets across the entire city. Country Club Estates and Cottonwood Valley both carry active architectural review boards with frame color and grille pattern restrictions, and we coordinate ARB submittals up front.
          </p>
          <div className="grid md:grid-cols-3 gap-6 text-sm">
            <div>
              <h3 className="text-[11px] tracking-[0.2em] uppercase font-medium text-charcoal-900 mb-3">North Coppell</h3>
              <ul className="text-charcoal-600 space-y-1">
                <li>City Place</li>
                <li>North Lake</li>
                <li>Cottonwood Valley</li>
                <li>Hackberry Creek edge</li>
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
                <li>Sandy Lake area</li>
                <li>Belt Line corridor</li>
                <li>Riverchase</li>
                <li>Coppell Greens</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-12">
          <h2 className="text-heading-serif text-3xl md:text-4xl text-charcoal-900 font-light mb-12">
            DFW noise, Texas heat, hail risk
          </h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-xl font-light text-charcoal-900 mb-4">Acoustic glass for the western flight path</h3>
              <p className="text-charcoal-600 leading-relaxed mb-4">
                Western Coppell sits under one of DFW&apos;s busiest approach corridors. Standard dual-pane glass barely touches that low-frequency aircraft noise. Laminated acoustic IGUs &mdash; typically 5mm/0.030 PVB/3mm laminate paired with standard Low-E &mdash; raise the sound transmission class from the high 20s to the mid 30s. The change inside the room is perceptually significant.
              </p>
              <p className="text-charcoal-600 leading-relaxed">
                Bedrooms and home offices facing the flight path are where we focus the acoustic upgrade. Living rooms and kitchens typically run standard Low-E unless the homeowner specifies otherwise.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-light text-charcoal-900 mb-4">Hail-belt and impact glass</h3>
              <p className="text-charcoal-600 leading-relaxed mb-4">
                North Texas catches its share of severe hail. For most homeowners, comprehensive insurance plus standard Low-E IGUs is the right call. For more exposed elevations &mdash; second-story west-facing rooms, large great-room walls of glass &mdash; laminated impact glass on the most vulnerable openings can pay for itself across one claim cycle.
              </p>
              <p className="text-charcoal-600 leading-relaxed">
                We&apos;ll show you the comparative spec sheets and cost differential during the consultation.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-charcoal-500">
        <div className="max-w-[1000px] mx-auto px-6 lg:px-12 text-center">
          <h2 className="text-heading-serif text-3xl md:text-4xl text-white font-light mb-8">
            Quiet, on-time Coppell installations
          </h2>
          <p className="text-stone-300 text-lg leading-relaxed max-w-2xl mx-auto mb-8">
            Most Coppell whole-home replacements run two to three working days. Floors get rosin paper, furniture covered in 6-mil plastic, dust collection on every indoor cut, HEPA vacuum at the end of each shift. The final walkthrough happens with you alongside the lead installer, every sash demonstrated, every warranty registered before we leave.
          </p>
          <p className="text-stone-300 leading-relaxed max-w-2xl mx-auto">
            Manufacturer warranties register in your name on completion. Our written craftsmanship guarantee covers labor for ten years.
          </p>
        </div>
      </section>

            <section className="py-20 bg-white">
        <div className="max-w-[1100px] mx-auto px-6 lg:px-12">
          <h2 className="text-heading-serif text-3xl md:text-4xl text-charcoal-900 font-light mb-10">Common questions from Coppell homeowners</h2>
          <div className="space-y-8">
            <div>
              <h3 className="text-lg font-medium text-charcoal-900 mb-3">How long does a typical Coppell window replacement take?</h3>
              <p className="text-charcoal-600 leading-relaxed">Most Coppell whole-home projects run two to three working days from demo to final cleanup. A standard double-hung swap takes about 45 minutes per opening once the old unit is out, and we move methodically from elevation to elevation. Larger custom orders with arched or radius geometry add a day or two for ordering and a few additional hours per opening on install. We&apos;ll commit to a start and finish date in writing before you sign anything.</p>
            </div>
            <div>
              <h3 className="text-lg font-medium text-charcoal-900 mb-3">Which window brand is best for my Coppell home?</h3>
              <p className="text-charcoal-600 leading-relaxed">There is no single right answer because Coppell&apos;s position under DFW&apos;s western approach pattern all push the spec in different directions. Our default recommendation for most Coppell mid-range projects is Andersen 400 Series double-hung or JELD-WEN Premium Vinyl &mdash; both deliver strong thermal performance at fair pricing. For custom-home work, premium remodels, and historic restorations, we step up to Andersen E-Series, Pella Reserve, or Marvin Signature. The right brand depends on your home, your goals, and your budget, and we&apos;ll show you the comparative spec sheets during the consultation rather than pushing one product on every project.</p>
            </div>
            <div>
              <h3 className="text-lg font-medium text-charcoal-900 mb-3">Do energy-efficient windows really lower utility bills in Coppell?</h3>
              <p className="text-charcoal-600 leading-relaxed">Yes, particularly when the existing windows are original aluminum-framed singles or first-generation dual-pane. Replacing those with insulated vinyl or fiberglass frames carrying a Low-E366 coating and argon fill typically delivers a measurable reduction on the next Oncor bill. The biggest gains show up on the south- and west-facing elevations, where the late-afternoon sun load is heaviest. We&apos;ll model the projected savings using your actual kWh history during the consultation rather than quoting a generic brochure number.</p>
            </div>
            <div>
              <h3 className="text-lg font-medium text-charcoal-900 mb-3">What does the warranty cover?</h3>
              <p className="text-charcoal-600 leading-relaxed">Every install includes the manufacturer warranty plus our written craftsmanship guarantee on the labor. The manufacturer warranty &mdash; typically limited lifetime on the IGU and frame, with shorter terms on hardware and finishes &mdash; registers in your name on the day of completion. Our craftsmanship guarantee covers the install workmanship for ten years. If a sash needs adjustment, a screen develops a tear, or weatherstripping fails during that period, we come back at no charge. Country Club Estates and Cottonwood Valley both run active HOA review, which we coordinate so that warranty registration and ARB documentation are both handled before we start.</p>
            </div>
            <div>
              <h3 className="text-lg font-medium text-charcoal-900 mb-3">Do you provide written, itemized pricing?</h3>
              <p className="text-charcoal-600 leading-relaxed">Always. Every Coppell proposal lists each window with size, configuration, frame material, exterior and interior finish, hardware, screen, and glass package. Installation labor, removal and disposal of the old units, and warranty terms are spelled out separately. There are no broker commissions tucked into the proposal, no surprise change orders, and no hidden line items. You can take the quote, get competitive bids, and decide on your own timeline without a high-pressure follow-up call.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-stone-100">
        <div className="max-w-[800px] mx-auto px-6 text-center">
          <h2 className="text-heading-serif text-3xl md:text-4xl text-charcoal-900 font-light mb-8">
            Schedule your Coppell consultation
          </h2>
          <p className="text-charcoal-600 mb-10">
            We&apos;ll evaluate your Coppell home, scope acoustic and energy packages tuned to flight-path orientation and elevation, prepare ARB submittals if needed, and provide a written, itemized quote with no high-pressure pitch.
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
