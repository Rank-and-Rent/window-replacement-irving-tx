import type { Metadata } from 'next'
import { PageHeader } from '@/components/page-header'
import { PageFooter } from '@/components/page-footer'

export const metadata: Metadata = {
  title: 'Window Replacement Southlake TX | Premium Installation Services',
  description: 'Southlake windows from an Irving-based crew — Carroll ISD luxury customs around Town Square, Stone Lakes, Timberlake. Marvin Signature, DFW north-runway acoustic glass.',
}

export default function SouthlakePage() {
  return (
    <div className="min-h-screen bg-white">
      <PageHeader />

      <section className="relative min-h-[60vh] flex items-center pt-32">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(/locations/window-replacement-southlake-tx-2.jpg)',
          }}
        />
        <div className="hero-overlay absolute inset-0" />

        <div className="relative z-10 w-full max-w-[1400px] mx-auto px-6 lg:px-12">
          <h1 className="text-heading-serif text-4xl md:text-5xl lg:text-6xl text-white font-light mb-6">
            Window Replacement in Southlake, TX
          </h1>
          <p className="text-white/90 text-lg md:text-xl max-w-2xl mb-8">
            Replacement windows for Southlake&apos;s large-lot luxury homes. Premium aluminum-clad and fiberglass frames, custom radius and arch openings, and a careful install crew that understands the standard expected on this side of SH-114.
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
                src="/locations/window-replacement-southlake-tx-2.jpg"
                alt="Southlake window replacement"
                className="w-full aspect-[4/5] object-cover"
              />
            </div>

            <div>
              <h2 className="text-heading-serif text-3xl md:text-4xl text-charcoal-900 font-light mb-6">
                Southlake homes are not standard-spec projects
              </h2>
              <p className="text-charcoal-600 text-base leading-relaxed mb-6">
                Southlake&apos;s housing skews unusually high in size, finish quality, and exterior detail. The communities around Carroll ISD &mdash; Stone Lakes, Timberlake, Lake Carroll, Woodlake &mdash; commonly feature 4,500 to 8,000 square feet, two-story foyers with circular transoms, oversized arched master-suite windows, and front-elevation grilles patterned to match elaborate stone trim. Builder-grade vinyl is rarely the right answer here. Most of these homes were originally glazed with Pella, Andersen, or Marvin wood-clad, and the right replacement is usually one of those same lines in current generation.
              </p>
              <p className="text-charcoal-600 text-base leading-relaxed mb-6">
                We commonly spec Pella Reserve, Marvin Signature, or Andersen E-Series for Southlake projects. These lines support the radius geometry, custom sizes, factory finishes, and the simulated-divided-lite muntin patterns that make a Southlake elevation read correctly. The cost differential vs. builder-grade is real but justified when you consider resale value and the depreciation hit a poorly matched window package would create.
              </p>
              <p className="text-charcoal-600 text-base leading-relaxed">
                The first conversation is always with the homeowner about what the existing windows are, what original drawings exist, and what the architectural review board will approve. We come prepared with shop drawings and manufacturer cut sheets.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-stone-100">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-12">
          <h2 className="text-heading-serif text-3xl md:text-4xl text-charcoal-900 font-light text-center mb-12">
            Southlake neighborhoods we serve
          </h2>
          <p className="text-charcoal-600 leading-relaxed mb-10 max-w-3xl mx-auto text-center">
            Southlake&apos;s neighborhoods are nearly all HOA-governed with active architectural review boards. We coordinate ARB submittals up front, including manufacturer specifications, exterior finish samples, and grille drawings, so the install never gets paused mid-project.
          </p>
          <div className="grid md:grid-cols-3 gap-6 text-sm">
            <div>
              <h3 className="text-[11px] tracking-[0.2em] uppercase font-medium text-charcoal-900 mb-3">North Southlake</h3>
              <ul className="text-charcoal-600 space-y-1">
                <li>Town Square</li>
                <li>Carroll High School area</li>
                <li>Stone Lakes</li>
                <li>Timberlake</li>
              </ul>
            </div>
            <div>
              <h3 className="text-[11px] tracking-[0.2em] uppercase font-medium text-charcoal-900 mb-3">Central Southlake</h3>
              <ul className="text-charcoal-600 space-y-1">
                <li>Town Center</li>
                <li>White Chapel</li>
                <li>Johnson</li>
                <li>Southlake Oaks</li>
              </ul>
            </div>
            <div>
              <h3 className="text-[11px] tracking-[0.2em] uppercase font-medium text-charcoal-900 mb-3">South Southlake</h3>
              <ul className="text-charcoal-600 space-y-1">
                <li>Lake Carroll</li>
                <li>Lakeview</li>
                <li>Holloway</li>
                <li>Woodlake</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-12">
          <h2 className="text-heading-serif text-3xl md:text-4xl text-charcoal-900 font-light mb-12">
            Performance considerations for Southlake homes
          </h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-xl font-light text-charcoal-900 mb-4">Acoustic glazing for SH-114 and DFW</h3>
              <p className="text-charcoal-600 leading-relaxed mb-4">
                Southlake sits between the SH-114 corridor and the eastern DFW arrival pattern. Bedroom and home-office orientations facing either source benefit from laminated acoustic IGUs. We routinely scope acoustic glass on those specific elevations while running standard Low-E on the protected sides &mdash; the typical home doesn&apos;t need acoustic on every window, just on the ones where noise actually drives perceived comfort.
              </p>
              <p className="text-charcoal-600 leading-relaxed">
                The upgrade typically pays off the first weekend you can leave bedroom windows closed and not hear the highway.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-light text-charcoal-900 mb-4">Hail glass for high-value homes</h3>
              <p className="text-charcoal-600 leading-relaxed mb-4">
                Southlake has been on the wrong end of multiple severe hail events in the last decade. The dollar-loss math on a 6,000-square-foot home with extensive glass changes the impact-glass calculus &mdash; the deductible savings across one or two claim cycles often pay for the upgrade. We can isolate impact glazing to the most exposed elevations rather than the whole house.
              </p>
              <p className="text-charcoal-600 leading-relaxed">
                Andersen, Pella, JELD-WEN, and Marvin all offer impact-rated configurations in their premium product lines. We&apos;ll show you the spec sheets and the cost differential.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-charcoal-500">
        <div className="max-w-[1000px] mx-auto px-6 lg:px-12 text-center">
          <h2 className="text-heading-serif text-3xl md:text-4xl text-white font-light mb-8">
            White-glove installation in expensive homes
          </h2>
          <p className="text-stone-300 text-lg leading-relaxed max-w-2xl mx-auto mb-8">
            We treat Southlake homes the way the homeowner expects: rosin paper on every floor surface, 6-mil plastic on furniture and built-ins, corner guards on every hallway, dust collection on indoor cuts, end-of-day HEPA vacuum, and a final walkthrough that doesn&apos;t end until the homeowner has tested every sash. The crew is uniformed, background-checked, and the same faces every day of the project.
          </p>
          <p className="text-stone-300 leading-relaxed max-w-2xl mx-auto">
            Manufacturer warranties register in your name on completion. Our written craftsmanship guarantee covers labor for ten years.
          </p>
        </div>
      </section>

            <section className="py-20 bg-white">
        <div className="max-w-[1100px] mx-auto px-6 lg:px-12">
          <h2 className="text-heading-serif text-3xl md:text-4xl text-charcoal-900 font-light mb-10">Common questions from Southlake homeowners</h2>
          <div className="space-y-8">
            <div>
              <h3 className="text-lg font-medium text-charcoal-900 mb-3">How long does a typical Southlake window replacement take?</h3>
              <p className="text-charcoal-600 leading-relaxed">Most Southlake whole-home projects run two to three working days from demo to final cleanup. A standard double-hung swap takes about 45 minutes per opening once the old unit is out, and we move methodically from elevation to elevation. Larger custom orders with arched or radius geometry add a day or two for ordering and a few additional hours per opening on install. We&apos;ll commit to a start and finish date in writing before you sign anything.</p>
            </div>
            <div>
              <h3 className="text-lg font-medium text-charcoal-900 mb-3">Which window brand is best for my Southlake home?</h3>
              <p className="text-charcoal-600 leading-relaxed">There is no single right answer because Southlake&apos;s large-lot luxury homes and the Carroll ISD ARB expectations all push the spec in different directions. Our default recommendation for most Southlake mid-range projects is Andersen 400 Series double-hung or JELD-WEN Premium Vinyl &mdash; both deliver strong thermal performance at fair pricing. For custom-home work, premium remodels, and historic restorations, we step up to Andersen E-Series, Pella Reserve, or Marvin Signature. The right brand depends on your home, your goals, and your budget, and we&apos;ll show you the comparative spec sheets during the consultation rather than pushing one product on every project.</p>
            </div>
            <div>
              <h3 className="text-lg font-medium text-charcoal-900 mb-3">Do energy-efficient windows really lower utility bills in Southlake?</h3>
              <p className="text-charcoal-600 leading-relaxed">Yes, particularly when the existing windows are original aluminum-framed singles or first-generation dual-pane. Replacing those with insulated vinyl or fiberglass frames carrying a Low-E366 coating and argon fill typically delivers a measurable reduction on the next Oncor bill. The biggest gains show up on the south- and west-facing elevations, where the late-afternoon sun load is heaviest. We&apos;ll model the projected savings using your actual kWh history during the consultation rather than quoting a generic brochure number.</p>
            </div>
            <div>
              <h3 className="text-lg font-medium text-charcoal-900 mb-3">What does the warranty cover?</h3>
              <p className="text-charcoal-600 leading-relaxed">Every install includes the manufacturer warranty plus our written craftsmanship guarantee on the labor. The manufacturer warranty &mdash; typically limited lifetime on the IGU and frame, with shorter terms on hardware and finishes &mdash; registers in your name on the day of completion. Our craftsmanship guarantee covers the install workmanship for ten years. If a sash needs adjustment, a screen develops a tear, or weatherstripping fails during that period, we come back at no charge. Stone Lakes and Timberlake both require comprehensive ARB submittals, which we coordinate so that warranty registration and ARB documentation are both handled before we start.</p>
            </div>
            <div>
              <h3 className="text-lg font-medium text-charcoal-900 mb-3">Do you provide written, itemized pricing?</h3>
              <p className="text-charcoal-600 leading-relaxed">Always. Every Southlake proposal lists each window with size, configuration, frame material, exterior and interior finish, hardware, screen, and glass package. Installation labor, removal and disposal of the old units, and warranty terms are spelled out separately. There are no broker commissions tucked into the proposal, no surprise change orders, and no hidden line items. You can take the quote, get competitive bids, and decide on your own timeline without a high-pressure follow-up call.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-stone-100">
        <div className="max-w-[800px] mx-auto px-6 text-center">
          <h2 className="text-heading-serif text-3xl md:text-4xl text-charcoal-900 font-light mb-8">
            Schedule your Southlake consultation
          </h2>
          <p className="text-charcoal-600 mb-10">
            We&apos;ll evaluate your Southlake home, take field measurements, prepare ARB-ready submittal documentation, and provide a written, itemized quote with no high-pressure pitch. Most consultations take about an hour.
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
