import type { Metadata } from 'next'
import { PageHeader } from '@/components/page-header'
import { PageFooter } from '@/components/page-footer'

export const metadata: Metadata = {
  title: 'Window Replacement DeSoto TX | Premium Installation Services',
  description: 'DeSoto windows from an Irving-based crew — Eagle Ford ranches, Western Hills, the older blocks east of I-35. Hail-rated laminated glass, written-quote pricing.',
}

export default function DeSotoPage() {
  return (
    <div className="min-h-screen bg-white">
      <PageHeader />

      <section className="relative min-h-[60vh] flex items-center pt-32">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(/locations/window-replacement-desoto-tx.jpg)',
          }}
        />
        <div className="hero-overlay absolute inset-0" />

        <div className="relative z-10 w-full max-w-[1400px] mx-auto px-6 lg:px-12">
          <h1 className="text-heading-serif text-4xl md:text-5xl lg:text-6xl text-white font-light mb-6">
            Window Replacement in DeSoto, TX
          </h1>
          <p className="text-white/90 text-lg md:text-xl max-w-2xl mb-8">
            Replacement windows for DeSoto homes large and small&mdash;from established brick ranches near DeSoto Town Center to the newer brick-and-stone two-stories filling out the north side. Energy efficiency, hail-rated glass, and a clean install you can feel inside the house.
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
                src="/locations/window-replacement-desoto-tx.jpg"
                alt="DeSoto window replacement"
                className="w-full aspect-[4/5] object-cover"
              />
            </div>

            <div>
              <h2 className="text-heading-serif text-3xl md:text-4xl text-charcoal-900 font-light mb-6">
                Window expertise tuned to DeSoto&apos;s housing stock
              </h2>
              <p className="text-charcoal-600 text-base leading-relaxed mb-6">
                DeSoto&apos;s residential character runs from solid 1970s and 1980s brick ranches in Cedar Grove and Wintergreen up to large two-story builds in Amber Creek and DeSoto Estates. The middle of the city, around Town Center and Hampton Road, holds a mix of mid-century starters and 1990s family homes. We see the same recurring issues across most of these eras: failed insulated glass seals, painted-shut wood windows, and the original aluminum sliders that conduct heat like a frying pan in August.
              </p>
              <p className="text-charcoal-600 text-base leading-relaxed mb-6">
                What works in DeSoto isn&apos;t a generic vinyl package. The southern Dallas County wind exposure, the longer afternoon sun on west-facing elevations, and the hail risk that&apos;s climbing every storm season all push us toward specific glass and frame combinations. We&apos;ll walk through your home, take field measurements, and explain why a particular Low-E coating or laminated unit makes sense for your specific orientation.
              </p>
              <p className="text-charcoal-600 text-base leading-relaxed">
                We&apos;re a small, owner-operated team based in Irving, which means the person who quotes your project is the same person who runs the install. There&apos;s no salesperson handing you off to a subcontracted crew. That continuity is part of why so many of our DeSoto referrals come from neighbors who saw the truck two doors down.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-stone-100">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-12">
          <h2 className="text-heading-serif text-3xl md:text-4xl text-charcoal-900 font-light text-center mb-12">
            DeSoto neighborhoods we serve
          </h2>
          <p className="text-charcoal-600 leading-relaxed mb-10 max-w-3xl mx-auto text-center">
            We&apos;ve worked across every quadrant of the city. North DeSoto homes tend to need bigger glass packages with grilles between the glass to match the brick traditional architecture. The older central neighborhoods often want to preserve the original window grid pattern, so we lean on Andersen 400 Series or Marvin Elevate for authentic muntin spacing.
          </p>
          <div className="grid md:grid-cols-3 gap-6 text-sm">
            <div>
              <h3 className="text-[11px] tracking-[0.2em] uppercase font-medium text-charcoal-900 mb-3">North DeSoto</h3>
              <ul className="text-charcoal-600 space-y-1">
                <li>DeSoto Estates</li>
                <li>Amber Creek</li>
                <li>Wintergreen</li>
                <li>Cedar Grove</li>
              </ul>
            </div>
            <div>
              <h3 className="text-[11px] tracking-[0.2em] uppercase font-medium text-charcoal-900 mb-3">Central DeSoto</h3>
              <ul className="text-charcoal-600 space-y-1">
                <li>DeSoto Town Center</li>
                <li>Elma</li>
                <li>Keystone</li>
                <li>Westwood</li>
              </ul>
            </div>
            <div>
              <h3 className="text-[11px] tracking-[0.2em] uppercase font-medium text-charcoal-900 mb-3">South DeSoto</h3>
              <ul className="text-charcoal-600 space-y-1">
                <li>Lakeview</li>
                <li>Pecan Ridge</li>
                <li>Pleasant Run</li>
                <li>Trailwood</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-12">
          <h2 className="text-heading-serif text-3xl md:text-4xl text-charcoal-900 font-light mb-12">
            DeSoto climate and window performance
          </h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-xl font-light text-charcoal-900 mb-4">Heat rejection that holds up</h3>
              <p className="text-charcoal-600 leading-relaxed mb-4">
                DeSoto&apos;s southern exposure means longer afternoon sun than the northern suburbs. West-facing elevations, especially in the Cedar Grove and Pecan Ridge sections, take a real beating from June through September. We specify triple-silver Low-E coatings on those orientations to drop the solar heat gain coefficient into the high teens, which translates into measurably cooler rooms and a quieter HVAC compressor through the worst of summer.
              </p>
              <p className="text-charcoal-600 leading-relaxed">
                Lighter, north-facing rooms get a different package: a Low-E coating tuned for visible light transmission rather than maximum solar rejection, so those rooms keep their daylight even after the upgrade.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-light text-charcoal-900 mb-4">Hail-season decisions</h3>
              <p className="text-charcoal-600 leading-relaxed mb-4">
                Southern Dallas County saw multiple severe hail events in the last few years. Most homeowners insure against the next one rather than glaze for it, but for exposed lakefront properties or homes with steep west-facing rooflines, we&apos;ll discuss laminated impact glass on the most vulnerable elevations. The pricing isn&apos;t crazy when you isolate it to two or three openings, and the deductible savings during a hail loss often pay for the upgrade.
              </p>
              <p className="text-charcoal-600 leading-relaxed">
                Premium brands like Andersen, Pella, JELD-WEN, and Marvin all offer impact-rated configurations. We&apos;ll show you the comparison spec sheets so the decision is informed rather than reflexive.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-charcoal-500">
        <div className="max-w-[1000px] mx-auto px-6 lg:px-12 text-center">
          <h2 className="text-heading-serif text-3xl md:text-4xl text-white font-light mb-8">
            DeSoto&apos;s straightforward window replacement company
          </h2>
          <p className="text-stone-300 text-lg leading-relaxed max-w-2xl mx-auto mb-8">
            We bring sample frames, glass cutaways, and itemized written pricing to every consultation. You&apos;ll see the difference between a builder-grade vinyl and an Andersen 400 Series double-hung in your hand, in your light, before you sign anything. Our DeSoto installations come with both the manufacturer warranty and our written craftsmanship guarantee on the labor.
          </p>
          <p className="text-stone-300 leading-relaxed max-w-2xl mx-auto">
            Most whole-home DeSoto projects run two to three working days, with floors protected by rosin paper, furniture draped in plastic, and a HEPA vacuum at the end of every shift. The final walkthrough happens with you alongside the lead installer, every sash demonstrated, every warranty registered before we leave the driveway.
          </p>
        </div>
      </section>

            <section className="py-20 bg-white">
        <div className="max-w-[1100px] mx-auto px-6 lg:px-12">
          <h2 className="text-heading-serif text-3xl md:text-4xl text-charcoal-900 font-light mb-10">Common questions from DeSoto homeowners</h2>
          <div className="space-y-8">
            <div>
              <h3 className="text-lg font-medium text-charcoal-900 mb-3">How long does a typical DeSoto window replacement take?</h3>
              <p className="text-charcoal-600 leading-relaxed">Most DeSoto whole-home projects run two to three working days from demo to final cleanup. A standard double-hung swap takes about 45 minutes per opening once the old unit is out, and we move methodically from elevation to elevation. Larger custom orders with arched or radius geometry add a day or two for ordering and a few additional hours per opening on install. We&apos;ll commit to a start and finish date in writing before you sign anything.</p>
            </div>
            <div>
              <h3 className="text-lg font-medium text-charcoal-900 mb-3">Which window brand is best for my DeSoto home?</h3>
              <p className="text-charcoal-600 leading-relaxed">There is no single right answer because DeSoto&apos;s southern Dallas County exposure and afternoon sun loads all push the spec in different directions. Our default recommendation for most DeSoto mid-range projects is Andersen 400 Series double-hung or JELD-WEN Premium Vinyl &mdash; both deliver strong thermal performance at fair pricing. For custom-home work, premium remodels, and historic restorations, we step up to Andersen E-Series, Pella Reserve, or Marvin Signature. The right brand depends on your home, your goals, and your budget, and we&apos;ll show you the comparative spec sheets during the consultation rather than pushing one product on every project.</p>
            </div>
            <div>
              <h3 className="text-lg font-medium text-charcoal-900 mb-3">Do energy-efficient windows really lower utility bills in DeSoto?</h3>
              <p className="text-charcoal-600 leading-relaxed">Yes, particularly when the existing windows are original aluminum-framed singles or first-generation dual-pane. Replacing those with insulated vinyl or fiberglass frames carrying a Low-E366 coating and argon fill typically delivers a measurable reduction on the next Oncor bill. The biggest gains show up on the south- and west-facing elevations, where the late-afternoon sun load is heaviest. We&apos;ll model the projected savings using your actual kWh history during the consultation rather than quoting a generic brochure number.</p>
            </div>
            <div>
              <h3 className="text-lg font-medium text-charcoal-900 mb-3">What does the warranty cover?</h3>
              <p className="text-charcoal-600 leading-relaxed">Every install includes the manufacturer warranty plus our written craftsmanship guarantee on the labor. The manufacturer warranty &mdash; typically limited lifetime on the IGU and frame, with shorter terms on hardware and finishes &mdash; registers in your name on the day of completion. Our craftsmanship guarantee covers the install workmanship for ten years. If a sash needs adjustment, a screen develops a tear, or weatherstripping fails during that period, we come back at no charge. Cedar Grove and Pecan Ridge both face significant west-facing solar loads, which we coordinate so that warranty registration and ARB documentation are both handled before we start.</p>
            </div>
            <div>
              <h3 className="text-lg font-medium text-charcoal-900 mb-3">Do you provide written, itemized pricing?</h3>
              <p className="text-charcoal-600 leading-relaxed">Always. Every DeSoto proposal lists each window with size, configuration, frame material, exterior and interior finish, hardware, screen, and glass package. Installation labor, removal and disposal of the old units, and warranty terms are spelled out separately. There are no broker commissions tucked into the proposal, no surprise change orders, and no hidden line items. You can take the quote, get competitive bids, and decide on your own timeline without a high-pressure follow-up call.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-stone-100">
        <div className="max-w-[800px] mx-auto px-6 text-center">
          <h2 className="text-heading-serif text-3xl md:text-4xl text-charcoal-900 font-light mb-8">
            Transform your DeSoto home with premium windows
          </h2>
          <p className="text-charcoal-600 mb-10">
            Schedule your complimentary consultation. We&apos;ll evaluate your DeSoto property, recommend optimal window solutions for each elevation, and provide detailed pricing with no high-pressure pitch.
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
