import type { Metadata } from 'next'
import { PageHeader } from '@/components/page-header'
import { PageFooter } from '@/components/page-footer'

export const metadata: Metadata = {
  title: 'Window Replacement Duncanville TX | Premium Installation Services',
  description: 'Duncanville windows from an Irving-based installer — Cedar Ridge, Greenbriar, Whispering Hills, Duncanville ISD blocks. Energy Star vinyl matched to mid-century stock.',
}

export default function DuncanvillePage() {
  return (
    <div className="min-h-screen bg-white">
      <PageHeader />

      <section className="relative min-h-[60vh] flex items-center pt-32">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(/locations/window-replacement-duncanville-tx.jpg)',
          }}
        />
        <div className="hero-overlay absolute inset-0" />

        <div className="relative z-10 w-full max-w-[1400px] mx-auto px-6 lg:px-12">
          <h1 className="text-heading-serif text-4xl md:text-5xl lg:text-6xl text-white font-light mb-6">
            Window Replacement in Duncanville, TX
          </h1>
          <p className="text-white/90 text-lg md:text-xl max-w-2xl mb-8">
            Replacement windows for Duncanville&apos;s southern Dallas County housing &mdash; long-established mid-1970s and 1980s neighborhoods, plus the newer infill homes filling out the cul-de-sac sections off Camp Wisdom Road. Energy upgrades, hail-rated glass, and itemized pricing.
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
                src="/locations/window-replacement-duncanville-tx.jpg"
                alt="Duncanville window replacement"
                className="w-full aspect-[4/5] object-cover"
              />
            </div>

            <div>
              <h2 className="text-heading-serif text-3xl md:text-4xl text-charcoal-900 font-light mb-6">
                Duncanville&apos;s established housing, modern thermal expectations
              </h2>
              <p className="text-charcoal-600 text-base leading-relaxed mb-6">
                Duncanville is one of the more established cities in southern Dallas County, with a housing arc that runs heavy on solid mid-1970s and 1980s brick ranches and split-levels. Many of those homes are now owned by second- or third-generation families and are still on their original aluminum-framed glazing. Cedar Ridge and Greenbriar carry the typical pattern; Whispering Hills and Liberty hold larger family homes with bigger glass packages.
              </p>
              <p className="text-charcoal-600 text-base leading-relaxed mb-6">
                The bigger problem in most of these homes is not the glass itself &mdash; it&apos;s the failed perimeter weatherstripping and the conductive heat loss through the original aluminum frames. Replacing with insulated vinyl from Andersen 400 Series or JELD-WEN Premium Vinyl typically delivers a measurable reduction on the next Oncor bill, often more than the homeowner expects.
              </p>
              <p className="text-charcoal-600 text-base leading-relaxed">
                We&apos;re an owner-operated team based in Irving, with crews that know the typical Duncanville opening sizes by neighborhood. The same person who quotes the project runs the install.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-stone-100">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-12">
          <h2 className="text-heading-serif text-3xl md:text-4xl text-charcoal-900 font-light text-center mb-12">
            Duncanville neighborhoods we serve
          </h2>
          <p className="text-charcoal-600 leading-relaxed mb-10 max-w-3xl mx-auto text-center">
            We&apos;ve worked across the city, from the older blocks near Big Stone Lodge to the newer cul-de-sacs off Camp Wisdom. Our trucks are usually already in the area, which matters when an adjustment or warranty visit comes up.
          </p>
          <div className="grid md:grid-cols-3 gap-6 text-sm">
            <div>
              <h3 className="text-[11px] tracking-[0.2em] uppercase font-medium text-charcoal-900 mb-3">North Duncanville</h3>
              <ul className="text-charcoal-600 space-y-1">
                <li>Duncanville Estates</li>
                <li>North Creek</li>
                <li>Red River</li>
                <li>River Oaks</li>
              </ul>
            </div>
            <div>
              <h3 className="text-[11px] tracking-[0.2em] uppercase font-medium text-charcoal-900 mb-3">Central Duncanville</h3>
              <ul className="text-charcoal-600 space-y-1">
                <li>Town Center</li>
                <li>Cedar Ridge</li>
                <li>Greenbriar</li>
                <li>Woodhaven</li>
              </ul>
            </div>
            <div>
              <h3 className="text-[11px] tracking-[0.2em] uppercase font-medium text-charcoal-900 mb-3">South Duncanville</h3>
              <ul className="text-charcoal-600 space-y-1">
                <li>Duncanville Farms</li>
                <li>Liberty</li>
                <li>Summit</li>
                <li>Whispering Hills</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-12">
          <h2 className="text-heading-serif text-3xl md:text-4xl text-charcoal-900 font-light mb-12">
            Climate and performance considerations
          </h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-xl font-light text-charcoal-900 mb-4">Heat rejection that works</h3>
              <p className="text-charcoal-600 leading-relaxed mb-4">
                The west-facing elevations on most Duncanville homes get the worst of the late-afternoon sun. We spec triple-silver Low-E coatings on those orientations to drop the solar heat gain coefficient into the high teens. North-facing rooms get a different package tuned for higher visible light transmission.
              </p>
              <p className="text-charcoal-600 leading-relaxed">
                The cooling-cost reduction shows up on the next utility bill. We&apos;ll model the math during the consultation.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-light text-charcoal-900 mb-4">Severe-weather decisions</h3>
              <p className="text-charcoal-600 leading-relaxed mb-4">
                Southern Dallas County has caught multiple severe hail events in recent years. For most homeowners, comprehensive insurance plus standard Low-E IGUs is the right call. For more exposed elevations &mdash; second-story west-facing rooms, larger great-room windows &mdash; laminated impact glass on the most vulnerable openings can pay for itself across one claim cycle.
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
            Practical, full-warranty Duncanville installs
          </h2>
          <p className="text-stone-300 text-lg leading-relaxed max-w-2xl mx-auto mb-8">
            Most Duncanville whole-home replacements run two to three working days. Floors get rosin paper, furniture covered in 6-mil plastic, dust collection on every indoor cut, HEPA vacuum at the end of each shift. The final walkthrough happens with you alongside the lead installer, every sash demonstrated, every warranty registered before we leave.
          </p>
          <p className="text-stone-300 leading-relaxed max-w-2xl mx-auto">
            Manufacturer warranties register in your name on completion. Our written craftsmanship guarantee covers labor for ten years.
          </p>
        </div>
      </section>

            <section className="py-20 bg-white">
        <div className="max-w-[1100px] mx-auto px-6 lg:px-12">
          <h2 className="text-heading-serif text-3xl md:text-4xl text-charcoal-900 font-light mb-10">Common questions from Duncanville homeowners</h2>
          <div className="space-y-8">
            <div>
              <h3 className="text-lg font-medium text-charcoal-900 mb-3">How long does a typical Duncanville window replacement take?</h3>
              <p className="text-charcoal-600 leading-relaxed">Most Duncanville whole-home projects run two to three working days from demo to final cleanup. A standard double-hung swap takes about 45 minutes per opening once the old unit is out, and we move methodically from elevation to elevation. Larger custom orders with arched or radius geometry add a day or two for ordering and a few additional hours per opening on install. We&apos;ll commit to a start and finish date in writing before you sign anything.</p>
            </div>
            <div>
              <h3 className="text-lg font-medium text-charcoal-900 mb-3">Which window brand is best for my Duncanville home?</h3>
              <p className="text-charcoal-600 leading-relaxed">There is no single right answer because Duncanville&apos;s established 1970s and 1980s housing stock all push the spec in different directions. Our default recommendation for most Duncanville mid-range projects is Andersen 400 Series double-hung or JELD-WEN Premium Vinyl &mdash; both deliver strong thermal performance at fair pricing. For custom-home work, premium remodels, and historic restorations, we step up to Andersen E-Series, Pella Reserve, or Marvin Signature. The right brand depends on your home, your goals, and your budget, and we&apos;ll show you the comparative spec sheets during the consultation rather than pushing one product on every project.</p>
            </div>
            <div>
              <h3 className="text-lg font-medium text-charcoal-900 mb-3">Do energy-efficient windows really lower utility bills in Duncanville?</h3>
              <p className="text-charcoal-600 leading-relaxed">Yes, particularly when the existing windows are original aluminum-framed singles or first-generation dual-pane. Replacing those with insulated vinyl or fiberglass frames carrying a Low-E366 coating and argon fill typically delivers a measurable reduction on the next Oncor bill. The biggest gains show up on the south- and west-facing elevations, where the late-afternoon sun load is heaviest. We&apos;ll model the projected savings using your actual kWh history during the consultation rather than quoting a generic brochure number.</p>
            </div>
            <div>
              <h3 className="text-lg font-medium text-charcoal-900 mb-3">What does the warranty cover?</h3>
              <p className="text-charcoal-600 leading-relaxed">Every install includes the manufacturer warranty plus our written craftsmanship guarantee on the labor. The manufacturer warranty &mdash; typically limited lifetime on the IGU and frame, with shorter terms on hardware and finishes &mdash; registers in your name on the day of completion. Our craftsmanship guarantee covers the install workmanship for ten years. If a sash needs adjustment, a screen develops a tear, or weatherstripping fails during that period, we come back at no charge. Cedar Ridge and Greenbriar carry typical opening sizes throughout, which we coordinate so that warranty registration and ARB documentation are both handled before we start.</p>
            </div>
            <div>
              <h3 className="text-lg font-medium text-charcoal-900 mb-3">Do you provide written, itemized pricing?</h3>
              <p className="text-charcoal-600 leading-relaxed">Always. Every Duncanville proposal lists each window with size, configuration, frame material, exterior and interior finish, hardware, screen, and glass package. Installation labor, removal and disposal of the old units, and warranty terms are spelled out separately. There are no broker commissions tucked into the proposal, no surprise change orders, and no hidden line items. You can take the quote, get competitive bids, and decide on your own timeline without a high-pressure follow-up call.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-[1100px] mx-auto px-6 lg:px-12">
          <h2 className="text-heading-serif text-3xl md:text-4xl text-charcoal-900 font-light mb-8">What to expect from a Duncanville project</h2>
          <p className="text-charcoal-600 leading-relaxed mb-4">Most Duncanville window-replacement consultations take about an hour. We arrive with sample frames from Andersen, Pella, JELD-WEN, and Marvin, plus glass cutaways, finish samples, and itemized written pricing forms. We measure each opening three times &mdash; width and height at left, center, and right positions &mdash; to catch any rough-opening anomalies before the order goes in. You receive a written quote on the day of the consultation or first thing the next morning.</p>
          <p className="text-charcoal-600 leading-relaxed mb-4">Once the order is placed, custom-fabricated Duncanville windows typically arrive within three to five weeks. We schedule the install for a date that works for your household, confirm the start the week before, and arrive at the agreed time. The crew is uniformed, background-checked, and consistent &mdash; the same faces every day of the project.</p>
          <p className="text-charcoal-600 leading-relaxed">After the install, the manufacturer warranty registers in your name and our ten-year written craftsmanship guarantee on the labor sits behind it. If a sash needs adjustment, weatherstripping fails, or a screen develops a tear during that period, we come back at no charge. Our trucks are usually already in the Duncanville area working another project, which makes warranty visits straightforward.</p>
        </div>
      </section>

      <section className="py-24 bg-stone-100">
        <div className="max-w-[800px] mx-auto px-6 text-center">
          <h2 className="text-heading-serif text-3xl md:text-4xl text-charcoal-900 font-light mb-8">
            Transform your Duncanville home with premium windows
          </h2>
          <p className="text-charcoal-600 mb-10">
            Schedule your complimentary in-home consultation. We&apos;ll evaluate your Duncanville property, recommend the right frame and glass package per elevation, and provide a written, itemized quote.
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
