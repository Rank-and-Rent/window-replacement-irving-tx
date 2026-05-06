import type { Metadata } from 'next'
import { PageHeader } from '@/components/page-header'
import { PageFooter } from '@/components/page-footer'

export const metadata: Metadata = {
  title: 'Window Replacement Plano TX | Energy Efficient Windows',
  description: 'Plano windows from an Irving-based installer — West Plano corporate-tenant condos, East Plano ranches, Legacy West towers, Old Town historics. Marvin Elevate options.',
}

export default function PlanoPage() {
  return (
    <div className="min-h-screen bg-white">
      <PageHeader />

      <section className="relative min-h-[60vh] flex items-center pt-32">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(/locations/window-replacement-plano-tx-1.jpg)',
          }}
        />
        <div className="hero-overlay absolute inset-0" />

        <div className="relative z-10 w-full max-w-[1400px] mx-auto px-6 lg:px-12">
          <h1 className="text-heading-serif text-4xl md:text-5xl lg:text-6xl text-white font-light mb-6">
            Window Replacement in Plano, TX
          </h1>
          <p className="text-white/90 text-lg md:text-xl max-w-2xl mb-8">
            Replacement windows for Plano&apos;s full housing arc &mdash; the Old Town blocks south of 15th Street, the established 1980s neighborhoods around Schimelpfenig, the West Plano custom homes in Willow Bend and Hunters Glen, and the newer builds north of the Tollway. Premium products, careful installs, transparent pricing.
          </p>
          <a href="/contact" className="btn-white">
            Get Estimate
          </a>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <h2 className="text-heading-serif text-3xl md:text-4xl text-charcoal-900 font-light mb-6">
                Plano homeowners do their research &mdash; we respect that
              </h2>
              <p className="text-charcoal-600 text-base leading-relaxed mb-6">
                Plano homeowners are among the most informed buyers in the metroplex. By the time we meet for a consultation, the homeowner has typically read manufacturer comparisons, watched a few install videos, and pulled spec sheets for two or three product lines. Our job is not to oversell; it&apos;s to confirm what they&apos;ve learned, fill in the gaps, and make the right product recommendation for their specific elevations, orientation, and budget.
              </p>
              <p className="text-charcoal-600 text-base leading-relaxed mb-6">
                Plano&apos;s housing arc spans roughly 50 years. Old Town homes south of 15th Street often retain original wood double-hung that homeowners want to preserve aesthetically while gaining modern thermal performance &mdash; a job for Pella Reserve or Marvin Signature with simulated divided lites. The vast inventory of 1980s and 1990s suburban homes between Park and Spring Creek lean toward Andersen 400 Series or JELD-WEN Premium Vinyl in standard double-hung and casement configurations. Newer Legacy West and West Plano custom homes carry larger contemporary glass packages where Andersen E-Series and Marvin Elevate fit best.
              </p>
              <p className="text-charcoal-600 text-base leading-relaxed">
                We bring sample frames from all four major manufacturers, glass cutaways, and itemized written pricing to every consultation. The process is calm, technical, and respectful of your time.
              </p>
            </div>

            <div>
              <img
                src="/locations/window-replacement-plano-tx-1.jpg"
                alt="Plano TX window replacement"
                className="w-full aspect-[4/5] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-stone-100">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-12">
          <h2 className="text-heading-serif text-3xl md:text-4xl text-charcoal-900 font-light text-center mb-12">
            Plano neighborhoods we serve
          </h2>
          <p className="text-charcoal-600 leading-relaxed mb-10 max-w-3xl mx-auto text-center">
            We&apos;ve worked across all four quadrants of the city. West Plano carries strict architectural review boards, particularly in Willow Bend and Hunters Glen, and we coordinate ARB documentation up front. East Plano and the older Schimelpfenig blocks are typically faster to scope because the original window grids were standard sizes.
          </p>
          <div className="grid md:grid-cols-4 gap-6 text-sm">
            <div>
              <h3 className="text-[11px] tracking-[0.2em] uppercase font-medium text-charcoal-900 mb-3">West Plano</h3>
              <ul className="text-charcoal-600 space-y-1">
                <li>Legacy</li>
                <li>Willow Bend</li>
                <li>Chapel Ridge</li>
                <li>Hunters Glen</li>
              </ul>
            </div>
            <div>
              <h3 className="text-[11px] tracking-[0.2em] uppercase font-medium text-charcoal-900 mb-3">East Plano</h3>
              <ul className="text-charcoal-600 space-y-1">
                <li>Timber Creek</li>
                <li>Stoney Hollow</li>
                <li>Castle Hills</li>
                <li>Preston Meadow</li>
              </ul>
            </div>
            <div>
              <h3 className="text-[11px] tracking-[0.2em] uppercase font-medium text-charcoal-900 mb-3">Central Plano</h3>
              <ul className="text-charcoal-600 space-y-1">
                <li>Schimelpfenig</li>
                <li>Centennial</li>
                <li>Old Town</li>
                <li>Park Forest</li>
              </ul>
            </div>
            <div>
              <h3 className="text-[11px] tracking-[0.2em] uppercase font-medium text-charcoal-900 mb-3">South Plano</h3>
              <ul className="text-charcoal-600 space-y-1">
                <li>Sagebrush</li>
                <li>Parkside</li>
                <li>Meadows</li>
                <li>Oak Point</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-12">
          <h2 className="text-heading-serif text-3xl md:text-4xl text-charcoal-900 font-light mb-12">
            Energy and acoustic priorities for Plano homes
          </h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-xl font-light text-charcoal-900 mb-4">Solar control on west elevations</h3>
              <p className="text-charcoal-600 leading-relaxed mb-4">
                Plano&apos;s mostly flat, open terrain means west-facing elevations get the full late-afternoon sun load from May through September. We spec triple-silver Low-E coatings (Cardinal LoE-366 and equivalents) on those orientations to drop the solar heat gain coefficient into the high teens. North-facing rooms get a different package tuned for higher visible light transmission, since those rooms lose almost no heat to direct sun and benefit more from daylight.
              </p>
              <p className="text-charcoal-600 leading-relaxed">
                The cooling-cost reduction shows up on the next Oncor bill. We&apos;ll model your projected savings using your actual kWh history during the consultation.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-light text-charcoal-900 mb-4">Tollway and Bush Turnpike noise</h3>
              <p className="text-charcoal-600 leading-relaxed mb-4">
                Plano&apos;s major arterials &mdash; Dallas North Tollway, President George Bush Turnpike, Central Expressway, and the BNSF rail line &mdash; create a noise floor that homeowners often don&apos;t consciously register until it goes away. Laminated acoustic IGUs on bedroom and home-office windows facing those corridors can change the perceived sound floor by 8 to 12 decibels, which is more than you&apos;d expect.
              </p>
              <p className="text-charcoal-600 leading-relaxed">
                We don&apos;t spec acoustic glass on every window &mdash; just the ones where it actually pays off. The rest of the house gets standard Low-E.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-charcoal-500">
        <div className="max-w-[1000px] mx-auto px-6 lg:px-12 text-center">
          <h2 className="text-heading-serif text-3xl md:text-4xl text-white font-light mb-8">
            On-time, full-warranty Plano installations
          </h2>
          <p className="text-stone-300 text-lg leading-relaxed max-w-2xl mx-auto mb-8">
            Most Plano whole-home replacements run two to three working days. Floors get rosin paper, furniture gets covered in 6-mil plastic, dust collection runs on every indoor cut, and a HEPA vacuum closes out each shift. The final walkthrough happens with you alongside the lead installer, every sash demonstrated, every warranty registered before we leave the driveway.
          </p>
          <p className="text-stone-300 leading-relaxed max-w-2xl mx-auto">
            Manufacturer warranties register in your name on completion. Our written craftsmanship guarantee covers labor for ten years.
          </p>
        </div>
      </section>

            <section className="py-20 bg-white">
        <div className="max-w-[1100px] mx-auto px-6 lg:px-12">
          <h2 className="text-heading-serif text-3xl md:text-4xl text-charcoal-900 font-light mb-10">Common questions from Plano homeowners</h2>
          <div className="space-y-8">
            <div>
              <h3 className="text-lg font-medium text-charcoal-900 mb-3">How long does a typical Plano window replacement take?</h3>
              <p className="text-charcoal-600 leading-relaxed">Most Plano whole-home projects run two to three working days from demo to final cleanup. A standard double-hung swap takes about 45 minutes per opening once the old unit is out, and we move methodically from elevation to elevation. Larger custom orders with arched or radius geometry add a day or two for ordering and a few additional hours per opening on install. We&apos;ll commit to a start and finish date in writing before you sign anything.</p>
            </div>
            <div>
              <h3 className="text-lg font-medium text-charcoal-900 mb-3">Which window brand is best for my Plano home?</h3>
              <p className="text-charcoal-600 leading-relaxed">There is no single right answer because Plano&apos;s 50-year housing arc and the Tollway and Bush Turnpike noise corridors all push the spec in different directions. Our default recommendation for most Plano mid-range projects is Andersen 400 Series double-hung or JELD-WEN Premium Vinyl &mdash; both deliver strong thermal performance at fair pricing. For custom-home work, premium remodels, and historic restorations, we step up to Andersen E-Series, Pella Reserve, or Marvin Signature. The right brand depends on your home, your goals, and your budget, and we&apos;ll show you the comparative spec sheets during the consultation rather than pushing one product on every project.</p>
            </div>
            <div>
              <h3 className="text-lg font-medium text-charcoal-900 mb-3">Do energy-efficient windows really lower utility bills in Plano?</h3>
              <p className="text-charcoal-600 leading-relaxed">Yes, particularly when the existing windows are original aluminum-framed singles or first-generation dual-pane. Replacing those with insulated vinyl or fiberglass frames carrying a Low-E366 coating and argon fill typically delivers a measurable reduction on the next Oncor bill. The biggest gains show up on the south- and west-facing elevations, where the late-afternoon sun load is heaviest. We&apos;ll model the projected savings using your actual kWh history during the consultation rather than quoting a generic brochure number.</p>
            </div>
            <div>
              <h3 className="text-lg font-medium text-charcoal-900 mb-3">What does the warranty cover?</h3>
              <p className="text-charcoal-600 leading-relaxed">Every install includes the manufacturer warranty plus our written craftsmanship guarantee on the labor. The manufacturer warranty &mdash; typically limited lifetime on the IGU and frame, with shorter terms on hardware and finishes &mdash; registers in your name on the day of completion. Our craftsmanship guarantee covers the install workmanship for ten years. If a sash needs adjustment, a screen develops a tear, or weatherstripping fails during that period, we come back at no charge. Willow Bend and Hunters Glen run strict ARBs with grille and color restrictions, which we coordinate so that warranty registration and ARB documentation are both handled before we start.</p>
            </div>
            <div>
              <h3 className="text-lg font-medium text-charcoal-900 mb-3">Do you provide written, itemized pricing?</h3>
              <p className="text-charcoal-600 leading-relaxed">Always. Every Plano proposal lists each window with size, configuration, frame material, exterior and interior finish, hardware, screen, and glass package. Installation labor, removal and disposal of the old units, and warranty terms are spelled out separately. There are no broker commissions tucked into the proposal, no surprise change orders, and no hidden line items. You can take the quote, get competitive bids, and decide on your own timeline without a high-pressure follow-up call.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-stone-100">
        <div className="max-w-[800px] mx-auto px-6 text-center">
          <h2 className="text-heading-serif text-3xl md:text-4xl text-charcoal-900 font-light mb-8">
            Schedule your Plano consultation
          </h2>
          <p className="text-charcoal-600 mb-10">
            Contact us for a detailed in-home consultation and transparent written pricing. Most Plano consultations are scheduled within 48 hours of your call, and we&apos;ll bring sample frames, glass cutaways, and itemized pricing.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/contact" className="btn-outline-dark">
              Request Consultation
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
