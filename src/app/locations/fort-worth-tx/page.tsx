import type { Metadata } from 'next'
import { PageHeader } from '@/components/page-header'
import { PageFooter } from '@/components/page-footer'

export const metadata: Metadata = {
  title: 'Window Replacement Fort Worth TX | Andersen, Pella & Jeld-Wen Dealer',
  description: 'Fort Worth windows from an Irving-based crew — Fairmount craftsman, Tanglewood, Westover Hills estates, Walsh Ranch, Clearfork. Period-correct sashes, registered warranty.',
}

export default function FortWorthPage() {
  return (
    <div className="min-h-screen bg-white">
      <PageHeader />

      <section className="relative min-h-[60vh] flex items-center pt-32">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(/locations/window-replacement-fort-worth-tx-3.jpg)',
          }}
        />
        <div className="hero-overlay absolute inset-0" />

        <div className="relative z-10 w-full max-w-[1400px] mx-auto px-6 lg:px-12">
          <h1 className="text-heading-serif text-4xl md:text-5xl lg:text-6xl text-white font-light mb-6">
            Window Replacement in Fort Worth, TX
          </h1>
          <p className="text-white/90 text-lg md:text-xl max-w-2xl mb-8">
            Replacement windows for Fort Worth&apos;s extraordinary range of housing &mdash; from Fairmount&apos;s 1910s craftsman bungalows to Westover Hills estates, Tanglewood mid-century, and the brand-new builds in Walsh Ranch and Clearfork. Custom shop drawings, premium frames, careful crews.
          </p>
          <a href="/contact" className="btn-white">
            Get Free Estimate
          </a>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <h2 className="text-heading-serif text-3xl md:text-4xl text-charcoal-900 font-light mb-6">
                Fort Worth&apos;s housing range demands range from us
              </h2>
              <p className="text-charcoal-600 text-base leading-relaxed mb-6">
                Few cities in Texas match Fort Worth&apos;s housing diversity. Fairmount and Ryan Place still carry early-1900s craftsman, Prairie, and Tudor homes with original wood double-hung that homeowners want preserved aesthetically. Westover Hills holds large-lot estates with significant brick-and-stone facades and oversized custom openings. Tanglewood, Ridglea Hills, and Berkeley Place run heavy on solid mid-century brick traditional with original steel and aluminum casements. The newer Walsh Ranch and Clearfork developments carry contemporary glass packages with darker frame finishes.
              </p>
              <p className="text-charcoal-600 text-base leading-relaxed mb-6">
                One product line cannot serve all of that. We carry Andersen, Pella, JELD-WEN, and Marvin so we can match the right product to the right house. Pella Reserve and Marvin Signature handle the historic and conservation-district work; Andersen E-Series and Marvin Modern fit the contemporary builds; Andersen 400 Series and JELD-WEN Premium Vinyl handle the typical 1980s and 1990s suburban remodel.
              </p>
              <p className="text-charcoal-600 text-base leading-relaxed">
                We&apos;re comfortable preparing the design-review documentation Fort Worth&apos;s historic and conservation districts require, including manufacturer cut sheets, simulated divided lite specs, and exterior finish samples.
              </p>
            </div>

            <div>
              <img
                src="/locations/window-replacement-fort-worth-tx-3.jpg"
                alt="Fort Worth home window replacement"
                className="w-full aspect-[4/5] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-stone-100">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-12">
          <h2 className="text-heading-serif text-3xl md:text-4xl text-charcoal-900 font-light text-center mb-12">
            Neighborhoods we serve in Fort Worth
          </h2>
          <p className="text-charcoal-600 leading-relaxed mb-10 max-w-3xl mx-auto text-center">
            We&apos;ve worked across Tarrant County, from the inner-loop historic districts to the master-planned communities pushing west toward Aledo. Each pocket has its own typical opening sizes, design-review constraints, and product expectations.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-[13px] tracking-[0.15em] uppercase font-medium text-charcoal-900 mb-4">
                Historic districts
              </h3>
              <ul className="text-charcoal-600 text-sm space-y-2">
                <li>Fairmount</li>
                <li>Berkeley Place</li>
                <li>Ryan Place</li>
                <li>Mistletoe Heights</li>
                <li>Bluebonnet Hills</li>
                <li>Monticello</li>
              </ul>
            </div>
            <div>
              <h3 className="text-[13px] tracking-[0.15em] uppercase font-medium text-charcoal-900 mb-4">
                Established communities
              </h3>
              <ul className="text-charcoal-600 text-sm space-y-2">
                <li>Ridglea Hills</li>
                <li>Tanglewood</li>
                <li>Westover Hills</li>
                <li>Meadowbrook</li>
                <li>Como</li>
                <li>Riverside</li>
              </ul>
            </div>
            <div>
              <h3 className="text-[13px] tracking-[0.15em] uppercase font-medium text-charcoal-900 mb-4">
                Growing areas
              </h3>
              <ul className="text-charcoal-600 text-sm space-y-2">
                <li>Walsh Ranch</li>
                <li>Chisholm Trail Ranch</li>
                <li>Clearfork</li>
                <li>Alliance</li>
                <li>Fossil Creek</li>
                <li>Far North Fort Worth</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-12">
          <h2 className="text-heading-serif text-3xl md:text-4xl text-charcoal-900 font-light mb-12">
            Climate, conservation, and craftsmanship
          </h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-xl font-light text-charcoal-900 mb-4">Conservation-district experience</h3>
              <p className="text-charcoal-600 leading-relaxed mb-4">
                Fairmount, Ryan Place, and Mistletoe Heights all have active local design review. Replacement windows in those districts must respect original muntin patterns, sightlines, and exterior profiles. We routinely spec Pella Reserve and Marvin Signature with simulated divided lites that recreate the original 6-over-6 or 8-over-8 grid while delivering modern thermal performance.
              </p>
              <p className="text-charcoal-600 leading-relaxed">
                We pull historic photos, prepare design-review submittals, and coordinate with the city as needed.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-light text-charcoal-900 mb-4">Heat, hail, and big west elevations</h3>
              <p className="text-charcoal-600 leading-relaxed mb-4">
                Fort Worth&apos;s open western terrain creates particularly aggressive west-facing solar loads on the Walsh Ranch, Clearfork, and Aledo-edge homes. We spec triple-silver Low-E coatings on those orientations to drop solar heat gain coefficient values into the high teens. Hail risk is real in Tarrant County, and we&apos;ll talk through laminated impact glass on the most vulnerable elevations of larger homes where the deductible math justifies the upgrade.
              </p>
              <p className="text-charcoal-600 leading-relaxed">
                North-facing rooms get a different package tuned for higher visible light transmission, since those rooms benefit more from daylight than from heat rejection.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-charcoal-500">
        <div className="max-w-[1000px] mx-auto px-6 lg:px-12 text-center">
          <h2 className="text-heading-serif text-3xl md:text-4xl text-white font-light mb-8">
            Fort Worth installs that respect the home
          </h2>
          <p className="text-stone-300 text-lg leading-relaxed mb-8 max-w-2xl mx-auto">
            Whether the project is a Fairmount craftsman with original plaster or a brand-new Walsh Ranch contemporary, our installers run a clean, dust-controlled, on-time job. Floors get rosin paper, furniture covered in 6-mil plastic, dust collection on every indoor cut, HEPA vacuum at the end of each shift. The final walkthrough happens with you alongside the lead installer.
          </p>
          <p className="text-stone-300 leading-relaxed max-w-2xl mx-auto">
            Manufacturer warranties register in your name on completion. Our written craftsmanship guarantee covers labor for ten years.
          </p>
        </div>
      </section>

            <section className="py-20 bg-white">
        <div className="max-w-[1100px] mx-auto px-6 lg:px-12">
          <h2 className="text-heading-serif text-3xl md:text-4xl text-charcoal-900 font-light mb-10">Common questions from Fort Worth homeowners</h2>
          <div className="space-y-8">
            <div>
              <h3 className="text-lg font-medium text-charcoal-900 mb-3">How long does a typical Fort Worth window replacement take?</h3>
              <p className="text-charcoal-600 leading-relaxed">Most Fort Worth whole-home projects run two to three working days from demo to final cleanup. A standard double-hung swap takes about 45 minutes per opening once the old unit is out, and we move methodically from elevation to elevation. Larger custom orders with arched or radius geometry add a day or two for ordering and a few additional hours per opening on install. We&apos;ll commit to a start and finish date in writing before you sign anything.</p>
            </div>
            <div>
              <h3 className="text-lg font-medium text-charcoal-900 mb-3">Which window brand is best for my Fort Worth home?</h3>
              <p className="text-charcoal-600 leading-relaxed">There is no single right answer because Fort Worth&apos;s 130-year housing arc, from Fairmount craftsman to Walsh Ranch contemporary all push the spec in different directions. Our default recommendation for most Fort Worth mid-range projects is Andersen 400 Series double-hung or JELD-WEN Premium Vinyl &mdash; both deliver strong thermal performance at fair pricing. For custom-home work, premium remodels, and historic restorations, we step up to Andersen E-Series, Pella Reserve, or Marvin Signature. The right brand depends on your home, your goals, and your budget, and we&apos;ll show you the comparative spec sheets during the consultation rather than pushing one product on every project.</p>
            </div>
            <div>
              <h3 className="text-lg font-medium text-charcoal-900 mb-3">Do energy-efficient windows really lower utility bills in Fort Worth?</h3>
              <p className="text-charcoal-600 leading-relaxed">Yes, particularly when the existing windows are original aluminum-framed singles or first-generation dual-pane. Replacing those with insulated vinyl or fiberglass frames carrying a Low-E366 coating and argon fill typically delivers a measurable reduction on the next Oncor bill. The biggest gains show up on the south- and west-facing elevations, where the late-afternoon sun load is heaviest. We&apos;ll model the projected savings using your actual kWh history during the consultation rather than quoting a generic brochure number.</p>
            </div>
            <div>
              <h3 className="text-lg font-medium text-charcoal-900 mb-3">What does the warranty cover?</h3>
              <p className="text-charcoal-600 leading-relaxed">Every install includes the manufacturer warranty plus our written craftsmanship guarantee on the labor. The manufacturer warranty &mdash; typically limited lifetime on the IGU and frame, with shorter terms on hardware and finishes &mdash; registers in your name on the day of completion. Our craftsmanship guarantee covers the install workmanship for ten years. If a sash needs adjustment, a screen develops a tear, or weatherstripping fails during that period, we come back at no charge. Conservation districts require simulated divided lite documentation, which we coordinate so that warranty registration and ARB documentation are both handled before we start.</p>
            </div>
            <div>
              <h3 className="text-lg font-medium text-charcoal-900 mb-3">Do you provide written, itemized pricing?</h3>
              <p className="text-charcoal-600 leading-relaxed">Always. Every Fort Worth proposal lists each window with size, configuration, frame material, exterior and interior finish, hardware, screen, and glass package. Installation labor, removal and disposal of the old units, and warranty terms are spelled out separately. There are no broker commissions tucked into the proposal, no surprise change orders, and no hidden line items. You can take the quote, get competitive bids, and decide on your own timeline without a high-pressure follow-up call.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-stone-100">
        <div className="max-w-[800px] mx-auto px-6 text-center">
          <h2 className="text-heading-serif text-3xl md:text-4xl text-charcoal-900 font-light mb-8">
            Schedule your Fort Worth window consultation
          </h2>
          <p className="text-charcoal-600 mb-10">
            We&apos;ll evaluate your Fort Worth property, prepare design-review documentation if your district requires it, and provide a written, itemized quote with no high-pressure pitch. Most consultations take about an hour.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/contact" className="btn-outline-dark">
              Book Free Consultation
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
