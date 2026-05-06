import type { Metadata } from 'next'
import { PageHeader } from '@/components/page-header'
import { PageFooter } from '@/components/page-footer'

export const metadata: Metadata = {
  title: 'Window Replacement Bedford TX | Premium Installation Services',
  description: 'Window replacement throughout Bedford, TX. Serving Bedford Oaks, Stone Creek, and the mid-Cities. Andersen, Pella & Jeld-Wen windows. Expert service: 972-284-7995',
}

export default function BedfordPage() {
  return (
    <div className="min-h-screen bg-white">
      <PageHeader />

      <section className="relative min-h-[60vh] flex items-center pt-32">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(/locations/window-replacement-bedford-tx-3.jpg)',
          }}
        />
        <div className="hero-overlay absolute inset-0" />

        <div className="relative z-10 w-full max-w-[1400px] mx-auto px-6 lg:px-12">
          <h1 className="text-heading-serif text-4xl md:text-5xl lg:text-6xl text-white font-light mb-6">
            Window Replacement in Bedford, TX
          </h1>
          <p className="text-white/90 text-lg md:text-xl max-w-2xl mb-8">
            Replacement windows for Bedford&apos;s mid-Cities housing stock &mdash; mid-1970s ranches, 1980s split-levels, and the newer infill homes filling out the south side. Energy upgrades, hail-rated glass, and a clean, on-time install.
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
                src="/locations/window-replacement-bedford-tx-3.jpg"
                alt="Bedford window replacement"
                className="w-full aspect-[4/5] object-cover"
              />
            </div>

            <div>
              <h2 className="text-heading-serif text-3xl md:text-4xl text-charcoal-900 font-light mb-6">
                Mid-Cities housing, mid-Cities expectations
              </h2>
              <p className="text-charcoal-600 text-base leading-relaxed mb-6">
                Bedford sits in the heart of the mid-Cities, and the housing reflects that location: practical, well-built mid-1970s and 1980s ranches and split-levels, with later infill from the early 2000s along Cheek-Sparger and Bedford-Euless Road. Most of these homes shipped with single-pane aluminum or first-generation dual-pane vinyl, and after 30 to 50 Texas summers, both have lost their seal integrity. Fogged glass between the panes is the most common signal a homeowner notices, but the bigger problem is usually the air leakage at the perimeter weatherstripping.
              </p>
              <p className="text-charcoal-600 text-base leading-relaxed mb-6">
                We&apos;ve worked the streets between SH-183 and Murphy Drive often enough to know the typical opening sizes by neighborhood. Bedford Oaks tends to have 36x60 double-hung pairs, Stone Creek runs larger sliders along the back elevation, and the older Bellvue blocks have the smaller 30x52 originals you don&apos;t see in newer construction. That experience speeds up measurement and reduces the chance of a custom-size order arriving wrong.
              </p>
              <p className="text-charcoal-600 text-base leading-relaxed">
                We carry Andersen, Pella, JELD-WEN, and Marvin lines, so we don&apos;t default to one product. Most Bedford homeowners land on Andersen 400 Series double-hung or JELD-WEN Premium Vinyl &mdash; the right call depends on resale plans, budget, and how much grille pattern matters.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-stone-100">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-12">
          <h2 className="text-heading-serif text-3xl md:text-4xl text-charcoal-900 font-light text-center mb-12">
            Bedford neighborhoods we serve
          </h2>
          <p className="text-charcoal-600 leading-relaxed mb-10 max-w-3xl mx-auto text-center">
            Bedford&apos;s smaller footprint means we can typically be on-site within a couple of days, and our trucks are usually already in the area working on a project nearby. That proximity matters when a sash needs adjustment or a screen gets a tear during the warranty period.
          </p>
          <div className="grid md:grid-cols-3 gap-6 text-sm">
            <div>
              <h3 className="text-[11px] tracking-[0.2em] uppercase font-medium text-charcoal-900 mb-3">North Bedford</h3>
              <ul className="text-charcoal-600 space-y-1">
                <li>Bedford Oaks</li>
                <li>River Forest</li>
                <li>Shady Brook</li>
                <li>Woodridge</li>
              </ul>
            </div>
            <div>
              <h3 className="text-[11px] tracking-[0.2em] uppercase font-medium text-charcoal-900 mb-3">Central Bedford</h3>
              <ul className="text-charcoal-600 space-y-1">
                <li>Bedford Town Center</li>
                <li>Bellvue</li>
                <li>Summerbrook</li>
                <li>Westwind</li>
              </ul>
            </div>
            <div>
              <h3 className="text-[11px] tracking-[0.2em] uppercase font-medium text-charcoal-900 mb-3">South Bedford</h3>
              <ul className="text-charcoal-600 space-y-1">
                <li>Bedford Lakes</li>
                <li>Stone Creek</li>
                <li>Hurstview edge</li>
                <li>Quail Run</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-12">
          <h2 className="text-heading-serif text-3xl md:text-4xl text-charcoal-900 font-light mb-12">
            Bedford climate and window performance
          </h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-xl font-light text-charcoal-900 mb-4">Energy upgrades that pay back fast</h3>
              <p className="text-charcoal-600 leading-relaxed mb-4">
                The original aluminum frames in many Bedford homes conduct heat directly through the frame itself. Replacing them with insulated vinyl or fiberglass cuts that conductive loss in half, before you even consider the glass upgrade. Add a Low-E366 coating with argon fill and a homeowner typically sees a meaningful reduction on the summer cooling bill within the first month.
              </p>
              <p className="text-charcoal-600 leading-relaxed">
                We&apos;ll model the projected savings with you using your current kWh consumption and Oncor&apos;s residential rate so the payback is grounded in your actual numbers, not a marketing brochure.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-light text-charcoal-900 mb-4">Severe weather considerations</h3>
              <p className="text-charcoal-600 leading-relaxed mb-4">
                Bedford sits in the central hail belt and gets occasional supercells rolling east off the Llano. For most homeowners, comprehensive insurance plus standard Low-E IGUs is the right call. For more exposed elevations &mdash; second-story west-facing rooms, lakefront properties along Bedford Lakes &mdash; laminated impact glass on the most vulnerable openings can pay for itself across one claim cycle.
              </p>
              <p className="text-charcoal-600 leading-relaxed">
                We&apos;ll talk through both options with the actual cost differential so the choice is informed.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-charcoal-500">
        <div className="max-w-[1000px] mx-auto px-6 lg:px-12 text-center">
          <h2 className="text-heading-serif text-3xl md:text-4xl text-white font-light mb-8">
            On-time, full-warranty Bedford installs
          </h2>
          <p className="text-stone-300 text-lg leading-relaxed max-w-2xl mx-auto mb-8">
            We treat scheduled start dates as commitments. Most Bedford whole-home replacements run two to three working days, with floors protected by rosin paper, furniture covered in plastic, and a HEPA vacuum at the end of every shift. The final walkthrough happens with you alongside the lead installer &mdash; every sash demonstrated, every warranty registered before we leave.
          </p>
          <p className="text-stone-300 leading-relaxed max-w-2xl mx-auto">
            The manufacturer warranty plus our craftsmanship guarantee on labor is the standard, not an upsell.
          </p>
        </div>
      </section>

            <section className="py-20 bg-white">
        <div className="max-w-[1100px] mx-auto px-6 lg:px-12">
          <h2 className="text-heading-serif text-3xl md:text-4xl text-charcoal-900 font-light mb-10">Common questions from Bedford homeowners</h2>
          <div className="space-y-8">
            <div>
              <h3 className="text-lg font-medium text-charcoal-900 mb-3">How long does a typical Bedford window replacement take?</h3>
              <p className="text-charcoal-600 leading-relaxed">Most Bedford whole-home projects run two to three working days from demo to final cleanup. A standard double-hung swap takes about 45 minutes per opening once the old unit is out, and we move methodically from elevation to elevation. Larger custom orders with arched or radius geometry add a day or two for ordering and a few additional hours per opening on install. We&apos;ll commit to a start and finish date in writing before you sign anything.</p>
            </div>
            <div>
              <h3 className="text-lg font-medium text-charcoal-900 mb-3">Which window brand is best for my Bedford home?</h3>
              <p className="text-charcoal-600 leading-relaxed">There is no single right answer because Bedford&apos;s mid-Cities ranch and split-level housing stock all push the spec in different directions. Our default recommendation for most Bedford mid-range projects is Andersen 400 Series double-hung or JELD-WEN Premium Vinyl &mdash; both deliver strong thermal performance at fair pricing. For custom-home work, premium remodels, and historic restorations, we step up to Andersen E-Series, Pella Reserve, or Marvin Signature. The right brand depends on your home, your goals, and your budget, and we&apos;ll show you the comparative spec sheets during the consultation rather than pushing one product on every project.</p>
            </div>
            <div>
              <h3 className="text-lg font-medium text-charcoal-900 mb-3">Do energy-efficient windows really lower utility bills in Bedford?</h3>
              <p className="text-charcoal-600 leading-relaxed">Yes, particularly when the existing windows are original aluminum-framed singles or first-generation dual-pane. Replacing those with insulated vinyl or fiberglass frames carrying a Low-E366 coating and argon fill typically delivers a measurable reduction on the next Oncor bill. The biggest gains show up on the south- and west-facing elevations, where the late-afternoon sun load is heaviest. We&apos;ll model the projected savings using your actual kWh history during the consultation rather than quoting a generic brochure number.</p>
            </div>
            <div>
              <h3 className="text-lg font-medium text-charcoal-900 mb-3">What does the warranty cover?</h3>
              <p className="text-charcoal-600 leading-relaxed">Every install includes the manufacturer warranty plus our written craftsmanship guarantee on the labor. The manufacturer warranty &mdash; typically limited lifetime on the IGU and frame, with shorter terms on hardware and finishes &mdash; registers in your name on the day of completion. Our craftsmanship guarantee covers the install workmanship for ten years. If a sash needs adjustment, a screen develops a tear, or weatherstripping fails during that period, we come back at no charge. Bedford Oaks and Stone Creek both have predictable opening sizes, which we coordinate so that warranty registration and ARB documentation are both handled before we start.</p>
            </div>
            <div>
              <h3 className="text-lg font-medium text-charcoal-900 mb-3">Do you provide written, itemized pricing?</h3>
              <p className="text-charcoal-600 leading-relaxed">Always. Every Bedford proposal lists each window with size, configuration, frame material, exterior and interior finish, hardware, screen, and glass package. Installation labor, removal and disposal of the old units, and warranty terms are spelled out separately. There are no broker commissions tucked into the proposal, no surprise change orders, and no hidden line items. You can take the quote, get competitive bids, and decide on your own timeline without a high-pressure follow-up call.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-stone-100">
        <div className="max-w-[800px] mx-auto px-6 text-center">
          <h2 className="text-heading-serif text-3xl md:text-4xl text-charcoal-900 font-light mb-8">
            Transform your Bedford home with premium windows
          </h2>
          <p className="text-charcoal-600 mb-10">
            Schedule your complimentary consultation. We&apos;ll evaluate your Bedford property, recommend optimal window solutions for each elevation, and provide detailed written pricing with no high-pressure pitch.
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
