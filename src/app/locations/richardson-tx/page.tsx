import type { Metadata } from 'next'
import { PageHeader } from '@/components/page-header'
import { PageFooter } from '@/components/page-footer'

export const metadata: Metadata = {
  title: 'Window Replacement Richardson TX | Premium Installation Services',
  description: 'Richardson windows from an Irving-based crew — Richardson Heights, Cottonwood Creek, Hamilton Park, Telecom Corridor corporate condos. Acoustic IGUs, registered warranty.',
}

export default function RichardsonPage() {
  return (
    <div className="min-h-screen bg-white">
      <PageHeader />

      <section className="relative min-h-[60vh] flex items-center pt-32">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(/locations/window-replacement-richardson-tx-1.jpg)',
          }}
        />
        <div className="hero-overlay absolute inset-0" />

        <div className="relative z-10 w-full max-w-[1400px] mx-auto px-6 lg:px-12">
          <h1 className="text-heading-serif text-4xl md:text-5xl lg:text-6xl text-white font-light mb-6">
            Window Replacement in Richardson, TX
          </h1>
          <p className="text-white/90 text-lg md:text-xl max-w-2xl mb-8">
            Replacement windows for Richardson&apos;s mid-century brick ranches in Hamilton Park and Buckingham, the 1980s split-levels around Spring Park, and the contemporary builds along the Telecom Corridor. Energy upgrades, acoustic glass for US-75 noise, and a careful install crew.
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
                src="/locations/window-replacement-richardson-tx-1.jpg"
                alt="Richardson window replacement"
                className="w-full aspect-[4/5] object-cover"
              />
            </div>

            <div>
              <h2 className="text-heading-serif text-3xl md:text-4xl text-charcoal-900 font-light mb-6">
                Richardson&apos;s mid-century stock and the windows it deserves
              </h2>
              <p className="text-charcoal-600 text-base leading-relaxed mb-6">
                Richardson&apos;s housing arc starts in the 1950s and runs through to the present. The original mid-century neighborhoods &mdash; Hamilton Park, Cottonwood Creek, Buckingham &mdash; carry a distinctive low-slung brick-ranch aesthetic with horizontal window bands and original aluminum or steel-frame casements. Many of those have been modified over decades, but the proportional sightlines still matter when we choose a replacement product. Pella Reserve, Marvin Signature, and Andersen E-Series casement lines support the slim sightlines mid-century elevations need.
              </p>
              <p className="text-charcoal-600 text-base leading-relaxed mb-6">
                The 1970s and 1980s expansion north of Belt Line Road brought the more typical suburban two-story with double-hung pairs and aluminum-clad picture windows in the great room. Those homes are mostly on their original glazing, which means failed seals, fogged IGUs, and air leakage at every weatherstrip. Standard Andersen 400 Series or JELD-WEN Premium Vinyl in matching configurations is usually the right move there.
              </p>
              <p className="text-charcoal-600 text-base leading-relaxed">
                The newer Telecom Corridor builds carry larger contemporary glass with darker frame finishes. Andersen E-Series black-clad and Marvin Elevate dark bronze get specified often.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-stone-100">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-12">
          <h2 className="text-heading-serif text-3xl md:text-4xl text-charcoal-900 font-light text-center mb-12">
            Richardson neighborhoods we serve
          </h2>
          <p className="text-charcoal-600 leading-relaxed mb-10 max-w-3xl mx-auto text-center">
            Richardson&apos;s neighborhood character varies sharply &mdash; the mid-century pocket near Hamilton Park needs different scoping than the newer Telecom Corridor blocks. We adjust our scoping conversation accordingly.
          </p>
          <div className="grid md:grid-cols-3 gap-6 text-sm">
            <div>
              <h3 className="text-[11px] tracking-[0.2em] uppercase font-medium text-charcoal-900 mb-3">North Richardson</h3>
              <ul className="text-charcoal-600 space-y-1">
                <li>Richardson Heights</li>
                <li>Spring Park</li>
                <li>Greenville Avenue corridor</li>
                <li>Northrich</li>
              </ul>
            </div>
            <div>
              <h3 className="text-[11px] tracking-[0.2em] uppercase font-medium text-charcoal-900 mb-3">Central Richardson</h3>
              <ul className="text-charcoal-600 space-y-1">
                <li>Cottonwood Creek</li>
                <li>Breckenridge Park</li>
                <li>Dartmouth</li>
                <li>Town Center</li>
              </ul>
            </div>
            <div>
              <h3 className="text-[11px] tracking-[0.2em] uppercase font-medium text-charcoal-900 mb-3">South Richardson</h3>
              <ul className="text-charcoal-600 space-y-1">
                <li>Buckingham</li>
                <li>Prairie Creek</li>
                <li>Hamilton Park</li>
                <li>College Park</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-12">
          <h2 className="text-heading-serif text-3xl md:text-4xl text-charcoal-900 font-light mb-12">
            Richardson climate and acoustic considerations
          </h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-xl font-light text-charcoal-900 mb-4">Energy upgrades on Oncor rates</h3>
              <p className="text-charcoal-600 leading-relaxed mb-4">
                The original aluminum and steel frames in mid-century Richardson homes conduct heat directly through the wall assembly. Replacing those with insulated vinyl or fiberglass cuts conductive loss substantially before the glass upgrade adds value. Add a Low-E366 coating with argon fill, and the next Oncor bill typically reflects the change.
              </p>
              <p className="text-charcoal-600 leading-relaxed">
                We&apos;ll model your projected savings using your actual kWh history rather than a generic brochure number.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-light text-charcoal-900 mb-4">US-75 and DART noise</h3>
              <p className="text-charcoal-600 leading-relaxed mb-4">
                Richardson sits along the US-75 spine and is bisected by the DART Red Line. Bedroom and home-office windows on those exposed elevations benefit meaningfully from laminated acoustic glass. We&apos;ve installed laminated upgrades on dozens of homes facing the highway and DART tracks, and the homeowner feedback is consistent: the sleep environment improves immediately.
              </p>
              <p className="text-charcoal-600 leading-relaxed">
                We don&apos;t spec acoustic on every window &mdash; just where the noise actually drives perceived comfort.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-charcoal-500">
        <div className="max-w-[1000px] mx-auto px-6 lg:px-12 text-center">
          <h2 className="text-heading-serif text-3xl md:text-4xl text-white font-light mb-8">
            Mid-century proportions, modern performance
          </h2>
          <p className="text-stone-300 text-lg leading-relaxed max-w-2xl mx-auto mb-8">
            We treat mid-century elevations with the proportional care they deserve. That means narrow sightlines, simulated divided lites where appropriate, and frame finishes that read correctly against original brick. For the more typical 1980s suburban stock, we focus on practical thermal performance and clean aesthetics. Either way, the install is methodical: rosin paper on floors, plastic on furniture, HEPA vacuum at the end of each day.
          </p>
          <p className="text-stone-300 leading-relaxed max-w-2xl mx-auto">
            Manufacturer warranties register in your name on completion. Our written craftsmanship guarantee covers labor for ten years.
          </p>
        </div>
      </section>

            <section className="py-20 bg-white">
        <div className="max-w-[1100px] mx-auto px-6 lg:px-12">
          <h2 className="text-heading-serif text-3xl md:text-4xl text-charcoal-900 font-light mb-10">Common questions from Richardson homeowners</h2>
          <div className="space-y-8">
            <div>
              <h3 className="text-lg font-medium text-charcoal-900 mb-3">How long does a typical Richardson window replacement take?</h3>
              <p className="text-charcoal-600 leading-relaxed">Most Richardson whole-home projects run two to three working days from demo to final cleanup. A standard double-hung swap takes about 45 minutes per opening once the old unit is out, and we move methodically from elevation to elevation. Larger custom orders with arched or radius geometry add a day or two for ordering and a few additional hours per opening on install. We&apos;ll commit to a start and finish date in writing before you sign anything.</p>
            </div>
            <div>
              <h3 className="text-lg font-medium text-charcoal-900 mb-3">Which window brand is best for my Richardson home?</h3>
              <p className="text-charcoal-600 leading-relaxed">There is no single right answer because Richardson&apos;s mid-century ranch stock and the US-75 plus DART noise reality all push the spec in different directions. Our default recommendation for most Richardson mid-range projects is Andersen 400 Series double-hung or JELD-WEN Premium Vinyl &mdash; both deliver strong thermal performance at fair pricing. For custom-home work, premium remodels, and historic restorations, we step up to Andersen E-Series, Pella Reserve, or Marvin Signature. The right brand depends on your home, your goals, and your budget, and we&apos;ll show you the comparative spec sheets during the consultation rather than pushing one product on every project.</p>
            </div>
            <div>
              <h3 className="text-lg font-medium text-charcoal-900 mb-3">Do energy-efficient windows really lower utility bills in Richardson?</h3>
              <p className="text-charcoal-600 leading-relaxed">Yes, particularly when the existing windows are original aluminum-framed singles or first-generation dual-pane. Replacing those with insulated vinyl or fiberglass frames carrying a Low-E366 coating and argon fill typically delivers a measurable reduction on the next Oncor bill. The biggest gains show up on the south- and west-facing elevations, where the late-afternoon sun load is heaviest. We&apos;ll model the projected savings using your actual kWh history during the consultation rather than quoting a generic brochure number.</p>
            </div>
            <div>
              <h3 className="text-lg font-medium text-charcoal-900 mb-3">What does the warranty cover?</h3>
              <p className="text-charcoal-600 leading-relaxed">Every install includes the manufacturer warranty plus our written craftsmanship guarantee on the labor. The manufacturer warranty &mdash; typically limited lifetime on the IGU and frame, with shorter terms on hardware and finishes &mdash; registers in your name on the day of completion. Our craftsmanship guarantee covers the install workmanship for ten years. If a sash needs adjustment, a screen develops a tear, or weatherstripping fails during that period, we come back at no charge. Hamilton Park and Cottonwood Creek hold true mid-century proportional details, which we coordinate so that warranty registration and ARB documentation are both handled before we start.</p>
            </div>
            <div>
              <h3 className="text-lg font-medium text-charcoal-900 mb-3">Do you provide written, itemized pricing?</h3>
              <p className="text-charcoal-600 leading-relaxed">Always. Every Richardson proposal lists each window with size, configuration, frame material, exterior and interior finish, hardware, screen, and glass package. Installation labor, removal and disposal of the old units, and warranty terms are spelled out separately. There are no broker commissions tucked into the proposal, no surprise change orders, and no hidden line items. You can take the quote, get competitive bids, and decide on your own timeline without a high-pressure follow-up call.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-stone-100">
        <div className="max-w-[800px] mx-auto px-6 text-center">
          <h2 className="text-heading-serif text-3xl md:text-4xl text-charcoal-900 font-light mb-8">
            Transform your Richardson home with premium windows
          </h2>
          <p className="text-charcoal-600 mb-10">
            Schedule your complimentary in-home consultation. We&apos;ll evaluate your Richardson property, recommend products tuned to era and elevation, and provide a written, itemized quote with no high-pressure pitch.
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
