import type { Metadata } from 'next'
import { PageHeader } from '@/components/page-header'
import { PageFooter } from '@/components/page-footer'

export const metadata: Metadata = {
  title: 'Window Replacement North Richland Hills TX | Premium Installation Services',
  description: 'North Richland Hills windows from an Irving-based crew — Smithfield, Holiday Glen, Birdville ISD blocks, mid-Cities corridor. Energy Star vinyl, factory-trained install.',
}

export default function NorthRichlandHillsPage() {
  return (
    <div className="min-h-screen bg-white">
      <PageHeader />

      <section className="relative min-h-[60vh] flex items-center pt-32">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(/locations/window-replacement-north-richland-hills-tx.jpg)',
          }}
        />
        <div className="hero-overlay absolute inset-0" />

        <div className="relative z-10 w-full max-w-[1400px] mx-auto px-6 lg:px-12">
          <h1 className="text-heading-serif text-4xl md:text-5xl lg:text-6xl text-white font-light mb-6">
            Window Replacement in North Richland Hills, TX
          </h1>
          <p className="text-white/90 text-lg md:text-xl max-w-2xl mb-8">
            Replacement windows for North Richland Hills&apos; mid-Cities housing &mdash; the older Smithfield blocks, the 1980s ranches around Holiday Glen, and the newer infill in Birdville ISD. Energy upgrades, hail-rated glass, and an install you can feel.
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
                src="/locations/window-replacement-north-richland-hills-tx.jpg"
                alt="North Richland Hills window replacement"
                className="w-full aspect-[4/5] object-cover"
              />
            </div>

            <div>
              <h2 className="text-heading-serif text-3xl md:text-4xl text-charcoal-900 font-light mb-6">
                Mid-Cities housing, modern thermal expectations
              </h2>
              <p className="text-charcoal-600 text-base leading-relaxed mb-6">
                North Richland Hills sits in the geographic middle of the metroplex, and the housing reflects the typical mid-Cities pattern: solid 1970s and 1980s brick ranches and split-levels, with infill from the late 1990s and 2000s along Smithfield and the SH-26 corridor. The original aluminum-framed glazing in those older homes is now well past its service life &mdash; conducting heat, leaking air at the perimeter weatherstripping, and fogging at every IGU. The first-generation vinyl in the 1990s blocks is also showing its age.
              </p>
              <p className="text-charcoal-600 text-base leading-relaxed mb-6">
                Most NRH whole-home replacements land in Andersen 400 Series double-hung or JELD-WEN Premium Vinyl casement, both at the value-to-performance sweet spot for this housing stock. Homeowners with bigger remodel budgets often step up to Andersen A-Series wood-clad or Pella Lifestyle for the great room and master suite while running vinyl elsewhere &mdash; a hybrid approach that delivers premium feel where it&apos;s noticed and value where it&apos;s not.
              </p>
              <p className="text-charcoal-600 text-base leading-relaxed">
                We&apos;re an owner-operated team based in Irving, with crews that know the typical NRH opening sizes and the standard subfloor and stud-bay quirks of mid-Cities tract construction.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-stone-100">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-12">
          <h2 className="text-heading-serif text-3xl md:text-4xl text-charcoal-900 font-light text-center mb-12">
            North Richland Hills neighborhoods we serve
          </h2>
          <p className="text-charcoal-600 leading-relaxed mb-10 max-w-3xl mx-auto text-center">
            We&apos;ve worked across the city, from the newer Smithfield blocks to the older Belle Grove cul-de-sacs near the Birdville ISD schools. Each pocket carries its own typical opening sizes, and our installers know what to expect.
          </p>
          <div className="grid md:grid-cols-3 gap-6 text-sm">
            <div>
              <h3 className="text-[11px] tracking-[0.2em] uppercase font-medium text-charcoal-900 mb-3">North NRH</h3>
              <ul className="text-charcoal-600 space-y-1">
                <li>Smithfield</li>
                <li>Holiday Glen</li>
                <li>North Hills</li>
                <li>Richland Woods</li>
              </ul>
            </div>
            <div>
              <h3 className="text-[11px] tracking-[0.2em] uppercase font-medium text-charcoal-900 mb-3">Central NRH</h3>
              <ul className="text-charcoal-600 space-y-1">
                <li>Town Center</li>
                <li>Ridglea Hills</li>
                <li>Valley Ridge</li>
                <li>Crestwood</li>
              </ul>
            </div>
            <div>
              <h3 className="text-[11px] tracking-[0.2em] uppercase font-medium text-charcoal-900 mb-3">South NRH</h3>
              <ul className="text-charcoal-600 space-y-1">
                <li>Richland Hills edge</li>
                <li>Belle Grove</li>
                <li>Birdville ISD area</li>
                <li>West Hurst border</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-12">
          <h2 className="text-heading-serif text-3xl md:text-4xl text-charcoal-900 font-light mb-12">
            Climate and severe-weather considerations
          </h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-xl font-light text-charcoal-900 mb-4">Energy upgrades that pay back</h3>
              <p className="text-charcoal-600 leading-relaxed mb-4">
                The original aluminum frames in many NRH homes are essentially heat highways. Replacing them with insulated vinyl or fiberglass cuts conductive loss in half before the glass upgrade adds value. Add a Low-E366 coating with argon fill, and the next utility bill reflects the change. The payback typically runs 5 to 7 years on a whole-home replacement, faster on the most exposed elevations.
              </p>
              <p className="text-charcoal-600 leading-relaxed">
                We&apos;ll model the projected savings using your actual kWh history rather than a generic brochure number.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-light text-charcoal-900 mb-4">Hail and the impact-glass question</h3>
              <p className="text-charcoal-600 leading-relaxed mb-4">
                NRH sits in the central hail belt and has caught its share of storms over the last decade. For most homeowners, comprehensive insurance plus standard Low-E IGUs is the right call. For more exposed elevations &mdash; second-story west-facing rooms, large great-room walls of glass &mdash; laminated impact glass on the most vulnerable openings can pay for itself across a single claim cycle.
              </p>
              <p className="text-charcoal-600 leading-relaxed">
                We&apos;ll run the comparative numbers with you so the choice is informed rather than reflexive.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-charcoal-500">
        <div className="max-w-[1000px] mx-auto px-6 lg:px-12 text-center">
          <h2 className="text-heading-serif text-3xl md:text-4xl text-white font-light mb-8">
            On-time, full-warranty NRH installations
          </h2>
          <p className="text-stone-300 text-lg leading-relaxed max-w-2xl mx-auto mb-8">
            Most NRH whole-home replacements run two to three working days. Floors get rosin paper, furniture gets covered in 6-mil plastic, dust collection runs on every indoor cut, and a HEPA vacuum closes out each shift. The final walkthrough happens with you alongside the lead installer, every sash demonstrated, every warranty registered before we leave.
          </p>
          <p className="text-stone-300 leading-relaxed max-w-2xl mx-auto">
            Manufacturer warranties register in your name on completion. Our written craftsmanship guarantee covers labor for ten years.
          </p>
        </div>
      </section>

            <section className="py-20 bg-white">
        <div className="max-w-[1100px] mx-auto px-6 lg:px-12">
          <h2 className="text-heading-serif text-3xl md:text-4xl text-charcoal-900 font-light mb-10">Common questions from North Richland Hills homeowners</h2>
          <div className="space-y-8">
            <div>
              <h3 className="text-lg font-medium text-charcoal-900 mb-3">How long does a typical North Richland Hills window replacement take?</h3>
              <p className="text-charcoal-600 leading-relaxed">Most North Richland Hills whole-home projects run two to three working days from demo to final cleanup. A standard double-hung swap takes about 45 minutes per opening once the old unit is out, and we move methodically from elevation to elevation. Larger custom orders with arched or radius geometry add a day or two for ordering and a few additional hours per opening on install. We&apos;ll commit to a start and finish date in writing before you sign anything.</p>
            </div>
            <div>
              <h3 className="text-lg font-medium text-charcoal-900 mb-3">Which window brand is best for my North Richland Hills home?</h3>
              <p className="text-charcoal-600 leading-relaxed">There is no single right answer because NRH mid-Cities housing and the Birdville ISD neighborhood pattern all push the spec in different directions. Our default recommendation for most North Richland Hills mid-range projects is Andersen 400 Series double-hung or JELD-WEN Premium Vinyl &mdash; both deliver strong thermal performance at fair pricing. For custom-home work, premium remodels, and historic restorations, we step up to Andersen E-Series, Pella Reserve, or Marvin Signature. The right brand depends on your home, your goals, and your budget, and we&apos;ll show you the comparative spec sheets during the consultation rather than pushing one product on every project.</p>
            </div>
            <div>
              <h3 className="text-lg font-medium text-charcoal-900 mb-3">Do energy-efficient windows really lower utility bills in North Richland Hills?</h3>
              <p className="text-charcoal-600 leading-relaxed">Yes, particularly when the existing windows are original aluminum-framed singles or first-generation dual-pane. Replacing those with insulated vinyl or fiberglass frames carrying a Low-E366 coating and argon fill typically delivers a measurable reduction on the next Oncor bill. The biggest gains show up on the south- and west-facing elevations, where the late-afternoon sun load is heaviest. We&apos;ll model the projected savings using your actual kWh history during the consultation rather than quoting a generic brochure number.</p>
            </div>
            <div>
              <h3 className="text-lg font-medium text-charcoal-900 mb-3">What does the warranty cover?</h3>
              <p className="text-charcoal-600 leading-relaxed">Every install includes the manufacturer warranty plus our written craftsmanship guarantee on the labor. The manufacturer warranty &mdash; typically limited lifetime on the IGU and frame, with shorter terms on hardware and finishes &mdash; registers in your name on the day of completion. Our craftsmanship guarantee covers the install workmanship for ten years. If a sash needs adjustment, a screen develops a tear, or weatherstripping fails during that period, we come back at no charge. Smithfield and Holiday Glen run typical 1980s opening sizes, which we coordinate so that warranty registration and ARB documentation are both handled before we start.</p>
            </div>
            <div>
              <h3 className="text-lg font-medium text-charcoal-900 mb-3">Do you provide written, itemized pricing?</h3>
              <p className="text-charcoal-600 leading-relaxed">Always. Every North Richland Hills proposal lists each window with size, configuration, frame material, exterior and interior finish, hardware, screen, and glass package. Installation labor, removal and disposal of the old units, and warranty terms are spelled out separately. There are no broker commissions tucked into the proposal, no surprise change orders, and no hidden line items. You can take the quote, get competitive bids, and decide on your own timeline without a high-pressure follow-up call.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-stone-100">
        <div className="max-w-[800px] mx-auto px-6 text-center">
          <h2 className="text-heading-serif text-3xl md:text-4xl text-charcoal-900 font-light mb-8">
            Transform your North Richland Hills home with premium windows
          </h2>
          <p className="text-charcoal-600 mb-10">
            Schedule your complimentary consultation. We&apos;ll evaluate your NRH property, recommend the right frame and glass package per elevation, and provide a written, itemized quote with no high-pressure pitch.
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
