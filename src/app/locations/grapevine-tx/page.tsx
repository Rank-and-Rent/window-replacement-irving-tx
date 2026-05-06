import type { Metadata } from 'next'
import { PageHeader } from '@/components/page-header'
import { PageFooter } from '@/components/page-footer'

export const metadata: Metadata = {
  title: 'Window Replacement Grapevine TX | Premium Installation Services',
  description: 'Window replacement in Grapevine, TX. Acoustic glazing for the DFW flight path, hail-rated glass, and premium frames for Historic Main Street, Lake Grapevine, and Silver Lake homes. 972-284-7995',
}

export default function GrapevinePage() {
  return (
    <div className="min-h-screen bg-white">
      <PageHeader />

      <section className="relative min-h-[60vh] flex items-center pt-32">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(/locations/window-replacement-grapevine-tx-3.jpg)',
          }}
        />
        <div className="hero-overlay absolute inset-0" />

        <div className="relative z-10 w-full max-w-[1400px] mx-auto px-6 lg:px-12">
          <h1 className="text-heading-serif text-4xl md:text-5xl lg:text-6xl text-white font-light mb-6">
            Window Replacement in Grapevine, TX
          </h1>
          <p className="text-white/90 text-lg md:text-xl max-w-2xl mb-8">
            Replacement windows for Grapevine&apos;s historic Main Street homes, the lakefront builds along Lake Grapevine, and the master-planned communities along the SH-114 corridor. Acoustic glazing, hail-rated glass, and a respectful install in homes that often have stained-glass transoms and original millwork.
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
                src="/locations/window-replacement-grapevine-tx-3.jpg"
                alt="Grapevine window replacement"
                className="w-full aspect-[4/5] object-cover"
              />
            </div>

            <div>
              <h2 className="text-heading-serif text-3xl md:text-4xl text-charcoal-900 font-light mb-6">
                Grapevine&apos;s housing eras need different solutions
              </h2>
              <p className="text-charcoal-600 text-base leading-relaxed mb-6">
                Grapevine&apos;s housing stock spans more than a century. The Heritage District north of Main Street still has original turn-of-the-century homes with double-hung wood windows and original wavy glass that homeowners often want to keep. Around Bear Creek and Heritage Park you&apos;ll find 1980s and 1990s family homes with first-generation vinyl that&apos;s now showing its age. Newer master-planned communities like Silver Lake and Stone Lakes carry larger, contemporary glass packages with more aggressive grille patterns. Each requires a different scoping conversation.
              </p>
              <p className="text-charcoal-600 text-base leading-relaxed mb-6">
                For the older Main Street homes, we frequently spec Pella Reserve wood-clad or Marvin Signature with simulated divided lites that recreate the original muntin pattern while delivering modern thermal performance. For the lakefront blocks along Silver Lake, fiberglass and aluminum-clad lines hold up better in the elevated humidity than vinyl does over a 20-year horizon. The newer SH-114 corridor homes lean toward Andersen 400 Series double-hung or casement combinations.
              </p>
              <p className="text-charcoal-600 text-base leading-relaxed">
                We&apos;ll bring sample frames from all four major manufacturers to your consultation so you can compare profiles against your existing trim and millwork before deciding.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-stone-100">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-12">
          <h2 className="text-heading-serif text-3xl md:text-4xl text-charcoal-900 font-light text-center mb-12">
            Grapevine neighborhoods we serve
          </h2>
          <p className="text-charcoal-600 leading-relaxed mb-10 max-w-3xl mx-auto text-center">
            We&apos;ve worked across the city, from the historic blocks south of College Street to the lakefront builds along Lake Grapevine. Each pocket has its own architectural review constraints and HOA expectations, and we coordinate documentation up front so the install doesn&apos;t get paused mid-project.
          </p>
          <div className="grid md:grid-cols-3 gap-6 text-sm">
            <div>
              <h3 className="text-[11px] tracking-[0.2em] uppercase font-medium text-charcoal-900 mb-3">North Grapevine</h3>
              <ul className="text-charcoal-600 space-y-1">
                <li>Timberline Estates</li>
                <li>Silver Lake</li>
                <li>Shadow Ridge</li>
                <li>Stone Lakes</li>
              </ul>
            </div>
            <div>
              <h3 className="text-[11px] tracking-[0.2em] uppercase font-medium text-charcoal-900 mb-3">Central Grapevine</h3>
              <ul className="text-charcoal-600 space-y-1">
                <li>Historic District</li>
                <li>Main Street area</li>
                <li>Grapevine Heights</li>
                <li>Creekside Estates</li>
              </ul>
            </div>
            <div>
              <h3 className="text-[11px] tracking-[0.2em] uppercase font-medium text-charcoal-900 mb-3">South / Lakefront</h3>
              <ul className="text-charcoal-600 space-y-1">
                <li>Lake Grapevine waterfront</li>
                <li>Silver Lake (south)</li>
                <li>Bear Creek</li>
                <li>Heritage Park</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-12">
          <h2 className="text-heading-serif text-3xl md:text-4xl text-charcoal-900 font-light mb-12">
            Grapevine climate and window performance
          </h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-xl font-light text-charcoal-900 mb-4">Acoustic glazing for the DFW corridor</h3>
              <p className="text-charcoal-600 leading-relaxed mb-4">
                Grapevine sits directly under the eastern approach pattern for DFW Airport, and on most weekdays a steady stream of arrivals routes over the south and west sides of town. Standard dual-pane windows do almost nothing for that low-frequency noise. Laminated acoustic IGUs &mdash; typically 5mm/0.030 PVB/3mm laminated outboard with standard Low-E inboard &mdash; raise the sound transmission class meaningfully and translate into a perceptibly quieter bedroom.
              </p>
              <p className="text-charcoal-600 leading-relaxed">
                We routinely scope acoustic glass on the elevations facing the flight path while running standard Low-E on the protected sides. That keeps the budget reasonable and puts the upgrade where it matters most.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-light text-charcoal-900 mb-4">Lake humidity and frame selection</h3>
              <p className="text-charcoal-600 leading-relaxed mb-4">
                The waterfront neighborhoods around Lake Grapevine and Silver Lake see slightly elevated humidity year-round. Vinyl performs adequately, but fiberglass and aluminum-clad frames typically last longer in those conditions because their expansion coefficient is closer to the glass itself. We lean toward Marvin Elevate fiberglass or Pella Reserve aluminum-clad on lakefront jobs.
              </p>
              <p className="text-charcoal-600 leading-relaxed">
                For inland Grapevine, premium vinyl from Andersen or JELD-WEN delivers strong value and meets ENERGY STAR thresholds for our climate zone.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-charcoal-500">
        <div className="max-w-[1000px] mx-auto px-6 lg:px-12 text-center">
          <h2 className="text-heading-serif text-3xl md:text-4xl text-white font-light mb-8">
            Respectful work in historic and high-end homes
          </h2>
          <p className="text-stone-300 text-lg leading-relaxed max-w-2xl mx-auto mb-8">
            Many Grapevine projects involve original millwork, plaster walls, hardwood floors, and stained-glass transoms or sidelites we need to preserve. Our crews carry rosin paper, 6-mil plastic, corner guards, and HEPA vacuums. We document each opening photographically before demo so transoms and side panels return exactly as they were.
          </p>
          <p className="text-stone-300 leading-relaxed max-w-2xl mx-auto">
            The manufacturer warranty registers in your name on completion, and our written craftsmanship guarantee covers labor for ten years.
          </p>
        </div>
      </section>

            <section className="py-20 bg-white">
        <div className="max-w-[1100px] mx-auto px-6 lg:px-12">
          <h2 className="text-heading-serif text-3xl md:text-4xl text-charcoal-900 font-light mb-10">Common questions from Grapevine homeowners</h2>
          <div className="space-y-8">
            <div>
              <h3 className="text-lg font-medium text-charcoal-900 mb-3">How long does a typical Grapevine window replacement take?</h3>
              <p className="text-charcoal-600 leading-relaxed">Most Grapevine whole-home projects run two to three working days from demo to final cleanup. A standard double-hung swap takes about 45 minutes per opening once the old unit is out, and we move methodically from elevation to elevation. Larger custom orders with arched or radius geometry add a day or two for ordering and a few additional hours per opening on install. We&apos;ll commit to a start and finish date in writing before you sign anything.</p>
            </div>
            <div>
              <h3 className="text-lg font-medium text-charcoal-900 mb-3">Which window brand is best for my Grapevine home?</h3>
              <p className="text-charcoal-600 leading-relaxed">There is no single right answer because Grapevine&apos;s historic Main Street homes and the DFW eastern arrival pattern all push the spec in different directions. Our default recommendation for most Grapevine mid-range projects is Andersen 400 Series double-hung or JELD-WEN Premium Vinyl &mdash; both deliver strong thermal performance at fair pricing. For custom-home work, premium remodels, and historic restorations, we step up to Andersen E-Series, Pella Reserve, or Marvin Signature. The right brand depends on your home, your goals, and your budget, and we&apos;ll show you the comparative spec sheets during the consultation rather than pushing one product on every project.</p>
            </div>
            <div>
              <h3 className="text-lg font-medium text-charcoal-900 mb-3">Do energy-efficient windows really lower utility bills in Grapevine?</h3>
              <p className="text-charcoal-600 leading-relaxed">Yes, particularly when the existing windows are original aluminum-framed singles or first-generation dual-pane. Replacing those with insulated vinyl or fiberglass frames carrying a Low-E366 coating and argon fill typically delivers a measurable reduction on the next Oncor bill. The biggest gains show up on the south- and west-facing elevations, where the late-afternoon sun load is heaviest. We&apos;ll model the projected savings using your actual kWh history during the consultation rather than quoting a generic brochure number.</p>
            </div>
            <div>
              <h3 className="text-lg font-medium text-charcoal-900 mb-3">What does the warranty cover?</h3>
              <p className="text-charcoal-600 leading-relaxed">Every install includes the manufacturer warranty plus our written craftsmanship guarantee on the labor. The manufacturer warranty &mdash; typically limited lifetime on the IGU and frame, with shorter terms on hardware and finishes &mdash; registers in your name on the day of completion. Our craftsmanship guarantee covers the install workmanship for ten years. If a sash needs adjustment, a screen develops a tear, or weatherstripping fails during that period, we come back at no charge. Heritage District homes often require restoration-quality replacements, which we coordinate so that warranty registration and ARB documentation are both handled before we start.</p>
            </div>
            <div>
              <h3 className="text-lg font-medium text-charcoal-900 mb-3">Do you provide written, itemized pricing?</h3>
              <p className="text-charcoal-600 leading-relaxed">Always. Every Grapevine proposal lists each window with size, configuration, frame material, exterior and interior finish, hardware, screen, and glass package. Installation labor, removal and disposal of the old units, and warranty terms are spelled out separately. There are no broker commissions tucked into the proposal, no surprise change orders, and no hidden line items. You can take the quote, get competitive bids, and decide on your own timeline without a high-pressure follow-up call.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-stone-100">
        <div className="max-w-[800px] mx-auto px-6 text-center">
          <h2 className="text-heading-serif text-3xl md:text-4xl text-charcoal-900 font-light mb-8">
            Schedule your Grapevine consultation
          </h2>
          <p className="text-charcoal-600 mb-10">
            We&apos;ll evaluate your Grapevine property, take precise measurements at each opening, recommend frame and glass packages tuned to flight-path orientation and elevation, and provide a written, itemized quote with no high-pressure pitch.
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
