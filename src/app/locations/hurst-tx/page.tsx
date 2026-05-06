import type { Metadata } from 'next'
import { PageHeader } from '@/components/page-header'
import { PageFooter } from '@/components/page-footer'

export const metadata: Metadata = {
  title: 'Window Replacement Hurst TX | Premium Installation Services',
  description: 'Window replacement in Hurst, TX. Serving Hurst Hills, River Trails, the Bellvue blocks and the HEB ISD neighborhoods. Andersen, Pella, JELD-WEN, Marvin. 972-284-7995',
}

export default function HurstPage() {
  return (
    <div className="min-h-screen bg-white">
      <PageHeader />

      <section className="relative min-h-[60vh] flex items-center pt-32">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(/locations/window-replacement-hurst-tx-3.jpg)',
          }}
        />
        <div className="hero-overlay absolute inset-0" />

        <div className="relative z-10 w-full max-w-[1400px] mx-auto px-6 lg:px-12">
          <h1 className="text-heading-serif text-4xl md:text-5xl lg:text-6xl text-white font-light mb-6">
            Window Replacement in Hurst, TX
          </h1>
          <p className="text-white/90 text-lg md:text-xl max-w-2xl mb-8">
            Replacement windows for Hurst&apos;s mid-Cities housing &mdash; established 1970s and 1980s ranches, the River Trails section near Lake Worth, and the newer family homes filling out the HEB ISD blocks. Acoustic glazing for the SH-183 corridor and energy upgrades that pay back fast.
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
                src="/locations/window-replacement-hurst-tx-3.jpg"
                alt="Hurst window replacement"
                className="w-full aspect-[4/5] object-cover"
              />
            </div>

            <div>
              <h2 className="text-heading-serif text-3xl md:text-4xl text-charcoal-900 font-light mb-6">
                Mid-Cities housing, mid-Cities prices, premium results
              </h2>
              <p className="text-charcoal-600 text-base leading-relaxed mb-6">
                Hurst sits in the practical heart of the mid-Cities, with a housing arc that runs heavy on solid 1970s and 1980s brick ranches and split-levels. Many of those homes carry their original aluminum-framed glazing &mdash; great-looking when new, conducting heat directly through the wall assembly today. The Bellvue and Stonewood blocks lean toward 30 to 40-year-old vinyl that is now reaching the end of its IGU service life.
              </p>
              <p className="text-charcoal-600 text-base leading-relaxed mb-6">
                Most Hurst whole-home replacements land in Andersen 400 Series double-hung or JELD-WEN Premium Vinyl, both at the value-to-performance sweet spot for this housing stock. River Trails and Hurst Hills sometimes step up to Andersen A-Series wood-clad in the great room while running vinyl elsewhere &mdash; a hybrid approach that delivers premium feel where it&apos;s noticed and value where it&apos;s not.
              </p>
              <p className="text-charcoal-600 text-base leading-relaxed">
                We&apos;re a small, owner-operated team based in Irving. The same person who quotes the project runs the install &mdash; no salesperson handing you off to a subcontracted crew.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-stone-100">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-12">
          <h2 className="text-heading-serif text-3xl md:text-4xl text-charcoal-900 font-light text-center mb-12">
            Hurst neighborhoods we serve
          </h2>
          <p className="text-charcoal-600 leading-relaxed mb-10 max-w-3xl mx-auto text-center">
            We&apos;ve worked across the city, from the Hurst Hills section north of SH-183 to the older blocks south of Pipeline Road. Our crews know the typical opening sizes by neighborhood, which speeds up measurement.
          </p>
          <div className="grid md:grid-cols-3 gap-6 text-sm">
            <div>
              <h3 className="text-[11px] tracking-[0.2em] uppercase font-medium text-charcoal-900 mb-3">North Hurst</h3>
              <ul className="text-charcoal-600 space-y-1">
                <li>Hurst Hills</li>
                <li>River Trails</li>
                <li>Shady Oaks</li>
                <li>Woodcrest</li>
              </ul>
            </div>
            <div>
              <h3 className="text-[11px] tracking-[0.2em] uppercase font-medium text-charcoal-900 mb-3">Central Hurst</h3>
              <ul className="text-charcoal-600 space-y-1">
                <li>Town Center</li>
                <li>Bellvue</li>
                <li>Stonewood</li>
                <li>West Hurst</li>
              </ul>
            </div>
            <div>
              <h3 className="text-[11px] tracking-[0.2em] uppercase font-medium text-charcoal-900 mb-3">South Hurst</h3>
              <ul className="text-charcoal-600 space-y-1">
                <li>Hurstview</li>
                <li>Pipeline corridor</li>
                <li>Lakeside</li>
                <li>Oak Crest</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-12">
          <h2 className="text-heading-serif text-3xl md:text-4xl text-charcoal-900 font-light mb-12">
            Performance considerations for Hurst
          </h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-xl font-light text-charcoal-900 mb-4">SH-183 acoustic glass</h3>
              <p className="text-charcoal-600 leading-relaxed mb-4">
                SH-183 cuts through the middle of Hurst, and homes within a quarter-mile of the corridor live with substantial low-frequency traffic noise. Standard dual-pane glass barely affects it. Laminated acoustic IGUs &mdash; typically 5mm/0.030 PVB/3mm laminate paired with standard Low-E inboard &mdash; raise the sound transmission class meaningfully.
              </p>
              <p className="text-charcoal-600 leading-relaxed">
                We isolate acoustic upgrades to the bedrooms and home offices facing the highway. The rest of the house typically runs standard Low-E.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-light text-charcoal-900 mb-4">Energy upgrades that show up</h3>
              <p className="text-charcoal-600 leading-relaxed mb-4">
                The original aluminum frames in older Hurst homes act as heat highways. Replacing them with insulated vinyl or fiberglass cuts conductive loss in half before the glass upgrade adds value. Add a Low-E366 coating with argon fill, and the next utility bill reflects the change.
              </p>
              <p className="text-charcoal-600 leading-relaxed">
                We&apos;ll model the projected savings using your actual kWh history during the consultation, not a generic brochure number.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-charcoal-500">
        <div className="max-w-[1000px] mx-auto px-6 lg:px-12 text-center">
          <h2 className="text-heading-serif text-3xl md:text-4xl text-white font-light mb-8">
            On-time, full-warranty Hurst installations
          </h2>
          <p className="text-stone-300 text-lg leading-relaxed max-w-2xl mx-auto mb-8">
            Most Hurst whole-home replacements run two to three working days. Floors get rosin paper, furniture covered in 6-mil plastic, dust collection on every indoor cut, HEPA vacuum at the end of each shift. The final walkthrough happens with you alongside the lead installer.
          </p>
          <p className="text-stone-300 leading-relaxed max-w-2xl mx-auto">
            Manufacturer warranties register in your name on completion. Our written craftsmanship guarantee covers labor for ten years.
          </p>
        </div>
      </section>

            <section className="py-20 bg-white">
        <div className="max-w-[1100px] mx-auto px-6 lg:px-12">
          <h2 className="text-heading-serif text-3xl md:text-4xl text-charcoal-900 font-light mb-10">Common questions from Hurst homeowners</h2>
          <div className="space-y-8">
            <div>
              <h3 className="text-lg font-medium text-charcoal-900 mb-3">How long does a typical Hurst window replacement take?</h3>
              <p className="text-charcoal-600 leading-relaxed">Most Hurst whole-home projects run two to three working days from demo to final cleanup. A standard double-hung swap takes about 45 minutes per opening once the old unit is out, and we move methodically from elevation to elevation. Larger custom orders with arched or radius geometry add a day or two for ordering and a few additional hours per opening on install. We&apos;ll commit to a start and finish date in writing before you sign anything.</p>
            </div>
            <div>
              <h3 className="text-lg font-medium text-charcoal-900 mb-3">Which window brand is best for my Hurst home?</h3>
              <p className="text-charcoal-600 leading-relaxed">There is no single right answer because Hurst&apos;s mid-Cities ranches and the SH-183 noise corridor all push the spec in different directions. Our default recommendation for most Hurst mid-range projects is Andersen 400 Series double-hung or JELD-WEN Premium Vinyl &mdash; both deliver strong thermal performance at fair pricing. For custom-home work, premium remodels, and historic restorations, we step up to Andersen E-Series, Pella Reserve, or Marvin Signature. The right brand depends on your home, your goals, and your budget, and we&apos;ll show you the comparative spec sheets during the consultation rather than pushing one product on every project.</p>
            </div>
            <div>
              <h3 className="text-lg font-medium text-charcoal-900 mb-3">Do energy-efficient windows really lower utility bills in Hurst?</h3>
              <p className="text-charcoal-600 leading-relaxed">Yes, particularly when the existing windows are original aluminum-framed singles or first-generation dual-pane. Replacing those with insulated vinyl or fiberglass frames carrying a Low-E366 coating and argon fill typically delivers a measurable reduction on the next Oncor bill. The biggest gains show up on the south- and west-facing elevations, where the late-afternoon sun load is heaviest. We&apos;ll model the projected savings using your actual kWh history during the consultation rather than quoting a generic brochure number.</p>
            </div>
            <div>
              <h3 className="text-lg font-medium text-charcoal-900 mb-3">What does the warranty cover?</h3>
              <p className="text-charcoal-600 leading-relaxed">Every install includes the manufacturer warranty plus our written craftsmanship guarantee on the labor. The manufacturer warranty &mdash; typically limited lifetime on the IGU and frame, with shorter terms on hardware and finishes &mdash; registers in your name on the day of completion. Our craftsmanship guarantee covers the install workmanship for ten years. If a sash needs adjustment, a screen develops a tear, or weatherstripping fails during that period, we come back at no charge. Hurst Hills and River Trails carry typical mid-Cities opening sizes, which we coordinate so that warranty registration and ARB documentation are both handled before we start.</p>
            </div>
            <div>
              <h3 className="text-lg font-medium text-charcoal-900 mb-3">Do you provide written, itemized pricing?</h3>
              <p className="text-charcoal-600 leading-relaxed">Always. Every Hurst proposal lists each window with size, configuration, frame material, exterior and interior finish, hardware, screen, and glass package. Installation labor, removal and disposal of the old units, and warranty terms are spelled out separately. There are no broker commissions tucked into the proposal, no surprise change orders, and no hidden line items. You can take the quote, get competitive bids, and decide on your own timeline without a high-pressure follow-up call.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-[1100px] mx-auto px-6 lg:px-12">
          <h2 className="text-heading-serif text-3xl md:text-4xl text-charcoal-900 font-light mb-8">What to expect from a Hurst project</h2>
          <p className="text-charcoal-600 leading-relaxed mb-4">Most Hurst window-replacement consultations take about an hour. We arrive with sample frames from Andersen, Pella, JELD-WEN, and Marvin, plus glass cutaways, finish samples, and itemized written pricing forms. We measure each opening three times &mdash; width and height at left, center, and right positions &mdash; to catch any rough-opening anomalies before the order goes in. You receive a written quote on the day of the consultation or first thing the next morning.</p>
          <p className="text-charcoal-600 leading-relaxed mb-4">Once the order is placed, custom-fabricated Hurst windows typically arrive within three to five weeks. We schedule the install for a date that works for your household, confirm the start the week before, and arrive at the agreed time. The crew is uniformed, background-checked, and consistent &mdash; the same faces every day of the project.</p>
          <p className="text-charcoal-600 leading-relaxed">After the install, the manufacturer warranty registers in your name and our ten-year written craftsmanship guarantee on the labor sits behind it. If a sash needs adjustment, weatherstripping fails, or a screen develops a tear during that period, we come back at no charge. Our trucks are usually already in the Hurst area working another project, which makes warranty visits straightforward.</p>
        </div>
      </section>

      <section className="py-24 bg-stone-100">
        <div className="max-w-[800px] mx-auto px-6 text-center">
          <h2 className="text-heading-serif text-3xl md:text-4xl text-charcoal-900 font-light mb-8">
            Transform your Hurst home with premium windows
          </h2>
          <p className="text-charcoal-600 mb-10">
            Schedule your complimentary in-home consultation. We&apos;ll evaluate your property, recommend frame and glass packages tuned to corridor exposure and elevation, and provide a written, itemized quote with no high-pressure pitch.
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
