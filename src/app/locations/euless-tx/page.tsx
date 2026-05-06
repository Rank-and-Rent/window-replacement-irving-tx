import type { Metadata } from 'next'
import { PageHeader } from '@/components/page-header'
import { PageFooter } from '@/components/page-footer'

export const metadata: Metadata = {
  title: 'Window Replacement Euless TX | Premium Installation Services',
  description: 'Window replacement in Euless, TX. Serving Bear Creek, Glade, Harwood and the HEB ISD neighborhoods near DFW Airport. Andersen, Pella, JELD-WEN, Marvin. 972-284-7995',
}

export default function EulessPage() {
  return (
    <div className="min-h-screen bg-white">
      <PageHeader />

      <section className="relative min-h-[60vh] flex items-center pt-32">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(/locations/window-replacement-euless-tx-3.jpg)',
          }}
        />
        <div className="hero-overlay absolute inset-0" />

        <div className="relative z-10 w-full max-w-[1400px] mx-auto px-6 lg:px-12">
          <h1 className="text-heading-serif text-4xl md:text-5xl lg:text-6xl text-white font-light mb-6">
            Window Replacement in Euless, TX
          </h1>
          <p className="text-white/90 text-lg md:text-xl max-w-2xl mb-8">
            Replacement windows for Euless homes within sight of DFW Airport. Acoustic glazing for the flight path, energy-efficient frames for hot summers, and an install crew that respects the rest of your house.
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
                src="/locations/window-replacement-euless-tx-3.jpg"
                alt="Euless window replacement"
                className="w-full aspect-[4/5] object-cover"
              />
            </div>

            <div>
              <h2 className="text-heading-serif text-3xl md:text-4xl text-charcoal-900 font-light mb-6">
                Acoustic glass is the conversation in Euless
              </h2>
              <p className="text-charcoal-600 text-base leading-relaxed mb-6">
                Euless sits directly under the western approach pattern for DFW Airport. On any given weekday, residents along Glade Road, Harwood, and the Bear Creek section hear a steady stream of arrivals routing in from the west. The newer mid-Cities homes built between 1995 and 2010 generally shipped with first-generation vinyl that wasn&apos;t spec&apos;d with acoustic glass; the older Welch Estates and Northeastern Hills blocks have aluminum-framed singles that do almost nothing for noise.
              </p>
              <p className="text-charcoal-600 text-base leading-relaxed mb-6">
                We routinely scope laminated acoustic IGUs &mdash; typically a 5mm/0.030 PVB/3mm laminate paired with standard Low-E inboard &mdash; on bedroom and home-office windows along the flight path. The sound transmission class jumps from the high 20s to the mid 30s, and the perceptual change inside the room is immediate and obvious.
              </p>
              <p className="text-charcoal-600 text-base leading-relaxed">
                We don&apos;t spec acoustic on every opening. Bedrooms and offices first; living rooms next; secondary spaces typically run standard Low-E. That keeps the budget reasonable while putting the upgrade where it matters most.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-stone-100">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-12">
          <h2 className="text-heading-serif text-3xl md:text-4xl text-charcoal-900 font-light text-center mb-12">
            Euless neighborhoods we serve
          </h2>
          <p className="text-charcoal-600 leading-relaxed mb-10 max-w-3xl mx-auto text-center">
            We&apos;ve worked the streets between SH-360 and Bedford-Euless Road many times. The HEB ISD blocks tend toward 1980s and 1990s family homes, while the older Bear Creek and Welch Estates sections lean ranch-style with smaller original opening sizes.
          </p>
          <div className="grid md:grid-cols-3 gap-6 text-sm">
            <div>
              <h3 className="text-[11px] tracking-[0.2em] uppercase font-medium text-charcoal-900 mb-3">North Euless</h3>
              <ul className="text-charcoal-600 space-y-1">
                <li>Oakwood Estates</li>
                <li>North Euless Hills</li>
                <li>Bear Creek</li>
                <li>Welch Estates</li>
              </ul>
            </div>
            <div>
              <h3 className="text-[11px] tracking-[0.2em] uppercase font-medium text-charcoal-900 mb-3">Central Euless</h3>
              <ul className="text-charcoal-600 space-y-1">
                <li>Euless Town Center</li>
                <li>Harwood</li>
                <li>Northeastern Hills</li>
                <li>River Oaks</li>
              </ul>
            </div>
            <div>
              <h3 className="text-[11px] tracking-[0.2em] uppercase font-medium text-charcoal-900 mb-3">South Euless</h3>
              <ul className="text-charcoal-600 space-y-1">
                <li>Euless Oaks</li>
                <li>Stone Creek</li>
                <li>Glade</li>
                <li>Westwood</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-12">
          <h2 className="text-heading-serif text-3xl md:text-4xl text-charcoal-900 font-light mb-12">
            Energy and noise priorities for Euless
          </h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-xl font-light text-charcoal-900 mb-4">Heat rejection that holds up</h3>
              <p className="text-charcoal-600 leading-relaxed mb-4">
                The west-facing elevations on most Euless homes get the worst of the late-afternoon sun load. We spec triple-silver Low-E coatings on those orientations to drop solar heat gain coefficient values into the high teens, which translates into a measurably cooler great room and a quieter HVAC compressor through August. North-facing rooms get a different package tuned for higher visible light transmission.
              </p>
              <p className="text-charcoal-600 leading-relaxed">
                Acoustic glass and Low-E coatings stack well together &mdash; you don&apos;t have to choose between sound and energy performance.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-light text-charcoal-900 mb-4">Hail-belt realities</h3>
              <p className="text-charcoal-600 leading-relaxed mb-4">
                Tarrant County catches its share of severe hail. For most homeowners, comprehensive insurance plus standard Low-E IGUs is the practical answer. For more exposed elevations &mdash; second-story west-facing rooms, large great-room windows &mdash; laminated impact glass on the most vulnerable openings can pay for itself across one claim cycle.
              </p>
              <p className="text-charcoal-600 leading-relaxed">
                We&apos;ll talk through both options with the actual cost differential so the decision is informed.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-charcoal-500">
        <div className="max-w-[1000px] mx-auto px-6 lg:px-12 text-center">
          <h2 className="text-heading-serif text-3xl md:text-4xl text-white font-light mb-8">
            Quiet, on-time Euless installations
          </h2>
          <p className="text-stone-300 text-lg leading-relaxed max-w-2xl mx-auto mb-8">
            Most Euless whole-home replacements run two to three working days. Floors get rosin paper, furniture gets covered in 6-mil plastic, dust collection runs on every indoor cut, and a HEPA vacuum closes out each shift. The final walkthrough happens with you alongside the lead installer, every sash demonstrated, every warranty registered.
          </p>
          <p className="text-stone-300 leading-relaxed max-w-2xl mx-auto">
            Manufacturer warranties register in your name on completion. Our written craftsmanship guarantee covers labor for ten years.
          </p>
        </div>
      </section>

            <section className="py-20 bg-white">
        <div className="max-w-[1100px] mx-auto px-6 lg:px-12">
          <h2 className="text-heading-serif text-3xl md:text-4xl text-charcoal-900 font-light mb-10">Common questions from Euless homeowners</h2>
          <div className="space-y-8">
            <div>
              <h3 className="text-lg font-medium text-charcoal-900 mb-3">How long does a typical Euless window replacement take?</h3>
              <p className="text-charcoal-600 leading-relaxed">Most Euless whole-home projects run two to three working days from demo to final cleanup. A standard double-hung swap takes about 45 minutes per opening once the old unit is out, and we move methodically from elevation to elevation. Larger custom orders with arched or radius geometry add a day or two for ordering and a few additional hours per opening on install. We&apos;ll commit to a start and finish date in writing before you sign anything.</p>
            </div>
            <div>
              <h3 className="text-lg font-medium text-charcoal-900 mb-3">Which window brand is best for my Euless home?</h3>
              <p className="text-charcoal-600 leading-relaxed">There is no single right answer because Euless&apos;s position directly under DFW&apos;s western approach all push the spec in different directions. Our default recommendation for most Euless mid-range projects is Andersen 400 Series double-hung or JELD-WEN Premium Vinyl &mdash; both deliver strong thermal performance at fair pricing. For custom-home work, premium remodels, and historic restorations, we step up to Andersen E-Series, Pella Reserve, or Marvin Signature. The right brand depends on your home, your goals, and your budget, and we&apos;ll show you the comparative spec sheets during the consultation rather than pushing one product on every project.</p>
            </div>
            <div>
              <h3 className="text-lg font-medium text-charcoal-900 mb-3">Do energy-efficient windows really lower utility bills in Euless?</h3>
              <p className="text-charcoal-600 leading-relaxed">Yes, particularly when the existing windows are original aluminum-framed singles or first-generation dual-pane. Replacing those with insulated vinyl or fiberglass frames carrying a Low-E366 coating and argon fill typically delivers a measurable reduction on the next Oncor bill. The biggest gains show up on the south- and west-facing elevations, where the late-afternoon sun load is heaviest. We&apos;ll model the projected savings using your actual kWh history during the consultation rather than quoting a generic brochure number.</p>
            </div>
            <div>
              <h3 className="text-lg font-medium text-charcoal-900 mb-3">What does the warranty cover?</h3>
              <p className="text-charcoal-600 leading-relaxed">Every install includes the manufacturer warranty plus our written craftsmanship guarantee on the labor. The manufacturer warranty &mdash; typically limited lifetime on the IGU and frame, with shorter terms on hardware and finishes &mdash; registers in your name on the day of completion. Our craftsmanship guarantee covers the install workmanship for ten years. If a sash needs adjustment, a screen develops a tear, or weatherstripping fails during that period, we come back at no charge. Bedrooms and home offices facing the flight path are the priority for acoustic glass, which we coordinate so that warranty registration and ARB documentation are both handled before we start.</p>
            </div>
            <div>
              <h3 className="text-lg font-medium text-charcoal-900 mb-3">Do you provide written, itemized pricing?</h3>
              <p className="text-charcoal-600 leading-relaxed">Always. Every Euless proposal lists each window with size, configuration, frame material, exterior and interior finish, hardware, screen, and glass package. Installation labor, removal and disposal of the old units, and warranty terms are spelled out separately. There are no broker commissions tucked into the proposal, no surprise change orders, and no hidden line items. You can take the quote, get competitive bids, and decide on your own timeline without a high-pressure follow-up call.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-[1100px] mx-auto px-6 lg:px-12">
          <h2 className="text-heading-serif text-3xl md:text-4xl text-charcoal-900 font-light mb-8">What to expect from a Euless project</h2>
          <p className="text-charcoal-600 leading-relaxed mb-4">Most Euless window-replacement consultations take about an hour. We arrive with sample frames from Andersen, Pella, JELD-WEN, and Marvin, plus glass cutaways, finish samples, and itemized written pricing forms. We measure each opening three times &mdash; width and height at left, center, and right positions &mdash; to catch any rough-opening anomalies before the order goes in. You receive a written quote on the day of the consultation or first thing the next morning.</p>
          <p className="text-charcoal-600 leading-relaxed mb-4">Once the order is placed, custom-fabricated Euless windows typically arrive within three to five weeks. We schedule the install for a date that works for your household, confirm the start the week before, and arrive at the agreed time. The crew is uniformed, background-checked, and consistent &mdash; the same faces every day of the project.</p>
          <p className="text-charcoal-600 leading-relaxed">After the install, the manufacturer warranty registers in your name and our ten-year written craftsmanship guarantee on the labor sits behind it. If a sash needs adjustment, weatherstripping fails, or a screen develops a tear during that period, we come back at no charge. Our trucks are usually already in the Euless area working another project, which makes warranty visits straightforward.</p>
        </div>
      </section>

      <section className="py-24 bg-stone-100">
        <div className="max-w-[800px] mx-auto px-6 text-center">
          <h2 className="text-heading-serif text-3xl md:text-4xl text-charcoal-900 font-light mb-8">
            Transform your Euless home with premium windows
          </h2>
          <p className="text-charcoal-600 mb-10">
            Schedule your complimentary in-home consultation. We&apos;ll evaluate your Euless property, recommend acoustic and energy packages tuned to flight-path orientation, and provide a written, itemized quote.
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
