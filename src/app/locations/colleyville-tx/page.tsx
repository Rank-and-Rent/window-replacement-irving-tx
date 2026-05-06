import type { Metadata } from 'next'
import { PageHeader } from '@/components/page-header'
import { PageFooter } from '@/components/page-footer'

export const metadata: Metadata = {
  title: 'Window Replacement Colleyville TX | Premium Installation Services',
  description: 'Colleyville windows from an Irving-based crew — Colleyville Estates, Heritage, Stonegate customs between Hwy 121 and Glade Road. Marvin Signature, registered warranty.',
}

export default function ColleyvillePage() {
  return (
    <div className="min-h-screen bg-white">
      <PageHeader />

      <section className="relative min-h-[60vh] flex items-center pt-32">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(/locations/window-replacement-colleyville-tx.jpg)',
          }}
        />
        <div className="hero-overlay absolute inset-0" />

        <div className="relative z-10 w-full max-w-[1400px] mx-auto px-6 lg:px-12">
          <h1 className="text-heading-serif text-4xl md:text-5xl lg:text-6xl text-white font-light mb-6">
            Window Replacement in Colleyville, TX
          </h1>
          <p className="text-white/90 text-lg md:text-xl max-w-2xl mb-8">
            Replacement windows for Colleyville&apos;s large-lot custom homes &mdash; the half-acre and one-acre estates of Colleyville Estates, Heritage, and Stonegate, plus the lakefront builds along Grapevine Lake. Premium aluminum-clad and fiberglass frames, careful ARB documentation.
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
                src="/locations/window-replacement-colleyville-tx.jpg"
                alt="Colleyville window replacement"
                className="w-full aspect-[4/5] object-cover"
              />
            </div>

            <div>
              <h2 className="text-heading-serif text-3xl md:text-4xl text-charcoal-900 font-light mb-6">
                Colleyville custom homes deserve premium specs
              </h2>
              <p className="text-charcoal-600 text-base leading-relaxed mb-6">
                Colleyville&apos;s housing skews custom-built and large &mdash; many properties on a half-acre or full acre, with significant brick-and-stone facades, two-story foyers, oversized arched master-suite windows, and grilles patterned to match elaborate exterior trim. Builder-grade vinyl rarely fits this market. Most original windows on these homes were Pella, Andersen, or Marvin wood-clad units, and the right replacement is usually one of those same lines in the current generation.
              </p>
              <p className="text-charcoal-600 text-base leading-relaxed mb-6">
                We commonly spec Pella Reserve, Marvin Signature, or Andersen E-Series for Colleyville projects. These lines support the radius geometry, custom sizes, factory-finished interior wood species, and the simulated-divided-lite muntin patterns that make the elevation read correctly. The cost differential vs. builder-grade is real but justified when you consider resale and the depreciation hit a poorly matched window package would cause.
              </p>
              <p className="text-charcoal-600 text-base leading-relaxed">
                We&apos;re comfortable preparing ARB submittals for Colleyville HOAs &mdash; manufacturer specifications, exterior finish samples, grille drawings, and shop drawings as needed.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-stone-100">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-12">
          <h2 className="text-heading-serif text-3xl md:text-4xl text-charcoal-900 font-light text-center mb-12">
            Colleyville neighborhoods we serve
          </h2>
          <p className="text-charcoal-600 leading-relaxed mb-10 max-w-3xl mx-auto text-center">
            Colleyville&apos;s neighborhoods are nearly all HOA-governed with active architectural review boards. We coordinate ARB submittals up front so the install never gets paused mid-project.
          </p>
          <div className="grid md:grid-cols-3 gap-6 text-sm">
            <div>
              <h3 className="text-[11px] tracking-[0.2em] uppercase font-medium text-charcoal-900 mb-3">North Colleyville</h3>
              <ul className="text-charcoal-600 space-y-1">
                <li>Colleyville Estates</li>
                <li>Heritage</li>
                <li>Stonegate</li>
                <li>Timberline</li>
              </ul>
            </div>
            <div>
              <h3 className="text-[11px] tracking-[0.2em] uppercase font-medium text-charcoal-900 mb-3">Central Colleyville</h3>
              <ul className="text-charcoal-600 space-y-1">
                <li>Town Center</li>
                <li>Old Town</li>
                <li>Colleyville Oaks</li>
                <li>Prairie View</li>
              </ul>
            </div>
            <div>
              <h3 className="text-[11px] tracking-[0.2em] uppercase font-medium text-charcoal-900 mb-3">South / Lakefront</h3>
              <ul className="text-charcoal-600 space-y-1">
                <li>Taylors Landing</li>
                <li>Grapevine Lake waterfront</li>
                <li>South Colleyville</li>
                <li>Lake View</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-12">
          <h2 className="text-heading-serif text-3xl md:text-4xl text-charcoal-900 font-light mb-12">
            Performance considerations for Colleyville custom homes
          </h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-xl font-light text-charcoal-900 mb-4">Big-glass solar control</h3>
              <p className="text-charcoal-600 leading-relaxed mb-4">
                Colleyville homes typically have more glass than the metroplex average &mdash; that&apos;s the upside on a 105-degree August afternoon and the downside on the cooling bill. We spec triple-silver Low-E coatings on south and west elevations to drop solar heat gain coefficient values into the high teens. The cooling-cost reduction shows up on the next utility bill.
              </p>
              <p className="text-charcoal-600 leading-relaxed">
                North-facing and tree-shaded rooms get a different package tuned for higher visible light transmission, since those rooms benefit more from daylight than from heat rejection.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-light text-charcoal-900 mb-4">Hail glass on high-value homes</h3>
              <p className="text-charcoal-600 leading-relaxed mb-4">
                Colleyville has been on the wrong end of multiple severe hail events. The dollar-loss math on a 5,000-square-foot home with extensive glass shifts the impact-glass calculus &mdash; the deductible savings across one or two claim cycles often pay for the upgrade. We isolate impact glazing to the most exposed elevations rather than the whole house.
              </p>
              <p className="text-charcoal-600 leading-relaxed">
                Andersen, Pella, JELD-WEN, and Marvin all offer impact-rated configurations in their premium product lines.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-charcoal-500">
        <div className="max-w-[1000px] mx-auto px-6 lg:px-12 text-center">
          <h2 className="text-heading-serif text-3xl md:text-4xl text-white font-light mb-8">
            White-glove installation in custom homes
          </h2>
          <p className="text-stone-300 text-lg leading-relaxed max-w-2xl mx-auto mb-8">
            We treat Colleyville homes the way the homeowner expects: rosin paper on every floor surface, 6-mil plastic on furniture and built-ins, corner guards on every hallway, dust collection on indoor cuts, end-of-day HEPA vacuum, and a final walkthrough that doesn&apos;t end until every sash has been tested. The crew is uniformed, background-checked, and the same faces every day.
          </p>
          <p className="text-stone-300 leading-relaxed max-w-2xl mx-auto">
            Manufacturer warranties register in your name on completion. Our written craftsmanship guarantee covers labor for ten years.
          </p>
        </div>
      </section>

            <section className="py-20 bg-white">
        <div className="max-w-[1100px] mx-auto px-6 lg:px-12">
          <h2 className="text-heading-serif text-3xl md:text-4xl text-charcoal-900 font-light mb-10">Common questions from Colleyville homeowners</h2>
          <div className="space-y-8">
            <div>
              <h3 className="text-lg font-medium text-charcoal-900 mb-3">How long does a typical Colleyville window replacement take?</h3>
              <p className="text-charcoal-600 leading-relaxed">Most Colleyville whole-home projects run two to three working days from demo to final cleanup. A standard double-hung swap takes about 45 minutes per opening once the old unit is out, and we move methodically from elevation to elevation. Larger custom orders with arched or radius geometry add a day or two for ordering and a few additional hours per opening on install. We&apos;ll commit to a start and finish date in writing before you sign anything.</p>
            </div>
            <div>
              <h3 className="text-lg font-medium text-charcoal-900 mb-3">Which window brand is best for my Colleyville home?</h3>
              <p className="text-charcoal-600 leading-relaxed">There is no single right answer because Colleyville custom homes and the half-acre and full-acre lot constraints all push the spec in different directions. Our default recommendation for most Colleyville mid-range projects is Andersen 400 Series double-hung or JELD-WEN Premium Vinyl &mdash; both deliver strong thermal performance at fair pricing. For custom-home work, premium remodels, and historic restorations, we step up to Andersen E-Series, Pella Reserve, or Marvin Signature. The right brand depends on your home, your goals, and your budget, and we&apos;ll show you the comparative spec sheets during the consultation rather than pushing one product on every project.</p>
            </div>
            <div>
              <h3 className="text-lg font-medium text-charcoal-900 mb-3">Do energy-efficient windows really lower utility bills in Colleyville?</h3>
              <p className="text-charcoal-600 leading-relaxed">Yes, particularly when the existing windows are original aluminum-framed singles or first-generation dual-pane. Replacing those with insulated vinyl or fiberglass frames carrying a Low-E366 coating and argon fill typically delivers a measurable reduction on the next Oncor bill. The biggest gains show up on the south- and west-facing elevations, where the late-afternoon sun load is heaviest. We&apos;ll model the projected savings using your actual kWh history during the consultation rather than quoting a generic brochure number.</p>
            </div>
            <div>
              <h3 className="text-lg font-medium text-charcoal-900 mb-3">What does the warranty cover?</h3>
              <p className="text-charcoal-600 leading-relaxed">Every install includes the manufacturer warranty plus our written craftsmanship guarantee on the labor. The manufacturer warranty &mdash; typically limited lifetime on the IGU and frame, with shorter terms on hardware and finishes &mdash; registers in your name on the day of completion. Our craftsmanship guarantee covers the install workmanship for ten years. If a sash needs adjustment, a screen develops a tear, or weatherstripping fails during that period, we come back at no charge. Colleyville ARBs require complete spec sheets and exterior finish samples, which we coordinate so that warranty registration and ARB documentation are both handled before we start.</p>
            </div>
            <div>
              <h3 className="text-lg font-medium text-charcoal-900 mb-3">Do you provide written, itemized pricing?</h3>
              <p className="text-charcoal-600 leading-relaxed">Always. Every Colleyville proposal lists each window with size, configuration, frame material, exterior and interior finish, hardware, screen, and glass package. Installation labor, removal and disposal of the old units, and warranty terms are spelled out separately. There are no broker commissions tucked into the proposal, no surprise change orders, and no hidden line items. You can take the quote, get competitive bids, and decide on your own timeline without a high-pressure follow-up call.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-[1100px] mx-auto px-6 lg:px-12">
          <h2 className="text-heading-serif text-3xl md:text-4xl text-charcoal-900 font-light mb-8">What to expect from a Colleyville project</h2>
          <p className="text-charcoal-600 leading-relaxed mb-4">Most Colleyville window-replacement consultations take about an hour. We arrive with sample frames from Andersen, Pella, JELD-WEN, and Marvin, plus glass cutaways, finish samples, and itemized written pricing forms. We measure each opening three times &mdash; width and height at left, center, and right positions &mdash; to catch any rough-opening anomalies before the order goes in. You receive a written quote on the day of the consultation or first thing the next morning.</p>
          <p className="text-charcoal-600 leading-relaxed mb-4">Once the order is placed, custom-fabricated Colleyville windows typically arrive within three to five weeks. We schedule the install for a date that works for your household, confirm the start the week before, and arrive at the agreed time. The crew is uniformed, background-checked, and consistent &mdash; the same faces every day of the project.</p>
          <p className="text-charcoal-600 leading-relaxed">After the install, the manufacturer warranty registers in your name and our ten-year written craftsmanship guarantee on the labor sits behind it. If a sash needs adjustment, weatherstripping fails, or a screen develops a tear during that period, we come back at no charge. Our trucks are usually already in the Colleyville area working another project, which makes warranty visits straightforward.</p>
        </div>
      </section>

      <section className="py-24 bg-stone-100">
        <div className="max-w-[800px] mx-auto px-6 text-center">
          <h2 className="text-heading-serif text-3xl md:text-4xl text-charcoal-900 font-light mb-8">
            Schedule your Colleyville consultation
          </h2>
          <p className="text-charcoal-600 mb-10">
            We&apos;ll evaluate your Colleyville home, prepare ARB-ready submittal documentation, and provide a written, itemized quote with no high-pressure pitch. Most consultations take about an hour.
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
