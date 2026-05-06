import type { Metadata } from 'next'
import { PageHeader } from '@/components/page-header'
import { PageFooter } from '@/components/page-footer'

export const metadata: Metadata = {
  title: 'Window Replacement Farmers Branch TX | Premium Installation Services',
  description: 'Farmers Branch windows from a neighbor-Irving crew — Brookhaven ranches, Walnut Creek, Mercer Crossing condos, Old Town historics. Acoustic IGUs for Tollway frontage.',
}

export default function FarmersBranchPage() {
  return (
    <div className="min-h-screen bg-white">
      <PageHeader />

      <section className="relative min-h-[60vh] flex items-center pt-32">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(/locations/window-replacement-farmers-branch-tx-1.jpg)',
          }}
        />
        <div className="hero-overlay absolute inset-0" />

        <div className="relative z-10 w-full max-w-[1400px] mx-auto px-6 lg:px-12">
          <h1 className="text-heading-serif text-4xl md:text-5xl lg:text-6xl text-white font-light mb-6">
            Window Replacement in Farmers Branch, TX
          </h1>
          <p className="text-white/90 text-lg md:text-xl max-w-2xl mb-8">
            Replacement windows for Farmers Branch&apos;s mid-century brick ranches, the established Brookhaven blocks, and the newer Mercer Crossing development. Acoustic glazing for the LBJ corridor and energy upgrades that pay back fast.
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
                src="/locations/window-replacement-farmers-branch-tx-1.jpg"
                alt="Farmers Branch window replacement"
                className="w-full aspect-[4/5] object-cover"
              />
            </div>

            <div>
              <h2 className="text-heading-serif text-3xl md:text-4xl text-charcoal-900 font-light mb-6">
                Mid-century housing meets modern noise
              </h2>
              <p className="text-charcoal-600 text-base leading-relaxed mb-6">
                Farmers Branch is one of the original post-war North Texas suburbs, and a substantial portion of its housing dates to the 1960s and 1970s. The Brookhaven Country Club area, the older blocks south of Valley View Road, and the established Walnut Creek section all carry mid-century brick ranches with original aluminum or steel-frame windows. Many of those have been swapped to first-generation vinyl over the past 25 years, and that vinyl is now reaching the end of its IGU service life.
              </p>
              <p className="text-charcoal-600 text-base leading-relaxed mb-6">
                The newer Mercer Crossing development off Valley View brought a wave of contemporary infill homes with larger glass packages and darker frame finishes. We&apos;ve installed Andersen E-Series and Marvin Modern in those builds where homeowners want the dark bronze or black exterior look without sacrificing thermal performance. For mid-century elevations, we lean on Pella Reserve and Marvin Signature lines that support the slim sightlines and original proportions.
              </p>
              <p className="text-charcoal-600 text-base leading-relaxed">
                We&apos;re an owner-operated team based in Irving, just south on I-35E. Our crews know the typical Farmers Branch opening sizes and the standard tract-construction quirks well.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-stone-100">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-12">
          <h2 className="text-heading-serif text-3xl md:text-4xl text-charcoal-900 font-light text-center mb-12">
            Farmers Branch neighborhoods we serve
          </h2>
          <p className="text-charcoal-600 leading-relaxed mb-10 max-w-3xl mx-auto text-center">
            We&apos;ve worked across the city, from the Brookhaven blocks north of Valley View down to the LBJ frontage near Heritage Park. Each pocket carries its own typical opening sizes and HOA constraints.
          </p>
          <div className="grid md:grid-cols-3 gap-6 text-sm">
            <div>
              <h3 className="text-[11px] tracking-[0.2em] uppercase font-medium text-charcoal-900 mb-3">North Farmers Branch</h3>
              <ul className="text-charcoal-600 space-y-1">
                <li>Brookhaven</li>
                <li>North Creek</li>
                <li>Mercer Crossing</li>
                <li>Walnut Creek</li>
              </ul>
            </div>
            <div>
              <h3 className="text-[11px] tracking-[0.2em] uppercase font-medium text-charcoal-900 mb-3">Central Farmers Branch</h3>
              <ul className="text-charcoal-600 space-y-1">
                <li>Town Center</li>
                <li>Old Town</li>
                <li>Valley View corridor</li>
                <li>Stone Creek</li>
              </ul>
            </div>
            <div>
              <h3 className="text-[11px] tracking-[0.2em] uppercase font-medium text-charcoal-900 mb-3">South Farmers Branch</h3>
              <ul className="text-charcoal-600 space-y-1">
                <li>Trinity Mills</li>
                <li>LBJ Freeway frontage</li>
                <li>Farmers Branch Oaks</li>
                <li>Heritage Park</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-12">
          <h2 className="text-heading-serif text-3xl md:text-4xl text-charcoal-900 font-light mb-12">
            Acoustic glass and Oncor savings
          </h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-xl font-light text-charcoal-900 mb-4">LBJ corridor noise</h3>
              <p className="text-charcoal-600 leading-relaxed mb-4">
                The LBJ Freeway and the Sam Rayburn Tollway both bound Farmers Branch, and homes within a quarter-mile of either corridor live with substantial low-frequency traffic noise. Standard dual-pane glass barely touches it. Laminated acoustic IGUs &mdash; typically a 5mm/0.030 PVB/3mm laminate paired with standard Low-E inboard &mdash; raise the sound transmission class meaningfully.
              </p>
              <p className="text-charcoal-600 leading-relaxed">
                We isolate acoustic upgrades to the bedrooms and home offices facing the corridors. The rest of the house typically runs standard Low-E.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-light text-charcoal-900 mb-4">Energy upgrades that pay back</h3>
              <p className="text-charcoal-600 leading-relaxed mb-4">
                The original aluminum frames on mid-century Farmers Branch homes conduct heat directly through the wall assembly. Replacing those with insulated vinyl or fiberglass cuts conductive loss in half before the glass upgrade adds value. Add a Low-E366 coating with argon fill, and the next Oncor bill reflects the change.
              </p>
              <p className="text-charcoal-600 leading-relaxed">
                We&apos;ll model the projected savings using your actual kWh history during the consultation.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-charcoal-500">
        <div className="max-w-[1000px] mx-auto px-6 lg:px-12 text-center">
          <h2 className="text-heading-serif text-3xl md:text-4xl text-white font-light mb-8">
            Quiet, on-time Farmers Branch installations
          </h2>
          <p className="text-stone-300 text-lg leading-relaxed max-w-2xl mx-auto mb-8">
            Most Farmers Branch whole-home replacements run two to three working days. Floors get rosin paper, furniture covered in 6-mil plastic, dust collection on every indoor cut, HEPA vacuum at the end of each shift. The final walkthrough happens with you alongside the lead installer, every sash demonstrated.
          </p>
          <p className="text-stone-300 leading-relaxed max-w-2xl mx-auto">
            Manufacturer warranties register in your name on completion. Our written craftsmanship guarantee covers labor for ten years.
          </p>
        </div>
      </section>

            <section className="py-20 bg-white">
        <div className="max-w-[1100px] mx-auto px-6 lg:px-12">
          <h2 className="text-heading-serif text-3xl md:text-4xl text-charcoal-900 font-light mb-10">Common questions from Farmers Branch homeowners</h2>
          <div className="space-y-8">
            <div>
              <h3 className="text-lg font-medium text-charcoal-900 mb-3">How long does a typical Farmers Branch window replacement take?</h3>
              <p className="text-charcoal-600 leading-relaxed">Most Farmers Branch whole-home projects run two to three working days from demo to final cleanup. A standard double-hung swap takes about 45 minutes per opening once the old unit is out, and we move methodically from elevation to elevation. Larger custom orders with arched or radius geometry add a day or two for ordering and a few additional hours per opening on install. We&apos;ll commit to a start and finish date in writing before you sign anything.</p>
            </div>
            <div>
              <h3 className="text-lg font-medium text-charcoal-900 mb-3">Which window brand is best for my Farmers Branch home?</h3>
              <p className="text-charcoal-600 leading-relaxed">There is no single right answer because Farmers Branch mid-century housing and the LBJ corridor noise reality all push the spec in different directions. Our default recommendation for most Farmers Branch mid-range projects is Andersen 400 Series double-hung or JELD-WEN Premium Vinyl &mdash; both deliver strong thermal performance at fair pricing. For custom-home work, premium remodels, and historic restorations, we step up to Andersen E-Series, Pella Reserve, or Marvin Signature. The right brand depends on your home, your goals, and your budget, and we&apos;ll show you the comparative spec sheets during the consultation rather than pushing one product on every project.</p>
            </div>
            <div>
              <h3 className="text-lg font-medium text-charcoal-900 mb-3">Do energy-efficient windows really lower utility bills in Farmers Branch?</h3>
              <p className="text-charcoal-600 leading-relaxed">Yes, particularly when the existing windows are original aluminum-framed singles or first-generation dual-pane. Replacing those with insulated vinyl or fiberglass frames carrying a Low-E366 coating and argon fill typically delivers a measurable reduction on the next Oncor bill. The biggest gains show up on the south- and west-facing elevations, where the late-afternoon sun load is heaviest. We&apos;ll model the projected savings using your actual kWh history during the consultation rather than quoting a generic brochure number.</p>
            </div>
            <div>
              <h3 className="text-lg font-medium text-charcoal-900 mb-3">What does the warranty cover?</h3>
              <p className="text-charcoal-600 leading-relaxed">Every install includes the manufacturer warranty plus our written craftsmanship guarantee on the labor. The manufacturer warranty &mdash; typically limited lifetime on the IGU and frame, with shorter terms on hardware and finishes &mdash; registers in your name on the day of completion. Our craftsmanship guarantee covers the install workmanship for ten years. If a sash needs adjustment, a screen develops a tear, or weatherstripping fails during that period, we come back at no charge. Brookhaven and Mercer Crossing both bring unique scoping considerations, which we coordinate so that warranty registration and ARB documentation are both handled before we start.</p>
            </div>
            <div>
              <h3 className="text-lg font-medium text-charcoal-900 mb-3">Do you provide written, itemized pricing?</h3>
              <p className="text-charcoal-600 leading-relaxed">Always. Every Farmers Branch proposal lists each window with size, configuration, frame material, exterior and interior finish, hardware, screen, and glass package. Installation labor, removal and disposal of the old units, and warranty terms are spelled out separately. There are no broker commissions tucked into the proposal, no surprise change orders, and no hidden line items. You can take the quote, get competitive bids, and decide on your own timeline without a high-pressure follow-up call.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-stone-100">
        <div className="max-w-[800px] mx-auto px-6 text-center">
          <h2 className="text-heading-serif text-3xl md:text-4xl text-charcoal-900 font-light mb-8">
            Transform your Farmers Branch home with premium windows
          </h2>
          <p className="text-charcoal-600 mb-10">
            Schedule your complimentary in-home consultation. We&apos;ll evaluate your property, scope acoustic and energy packages tuned to corridor exposure, and provide a written, itemized quote.
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
