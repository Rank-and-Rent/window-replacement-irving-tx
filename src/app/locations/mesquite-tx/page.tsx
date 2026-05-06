import type { Metadata } from 'next'
import { PageHeader } from '@/components/page-header'
import { PageFooter } from '@/components/page-footer'

export const metadata: Metadata = {
  title: 'Window Replacement Mesquite TX | Premium Installation Services',
  description: 'Window replacement in Mesquite, TX. Serving Casa Linda, Northridge, the Pleasant Valley blocks, and the older neighborhoods near Town East Mall. Andersen, Pella, JELD-WEN, Marvin. 972-284-7995',
}

export default function MesquitePage() {
  return (
    <div className="min-h-screen bg-white">
      <PageHeader />

      <section className="relative min-h-[60vh] flex items-center pt-32">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(/locations/window-replacement-mesquite-tx.jpg)',
          }}
        />
        <div className="hero-overlay absolute inset-0" />

        <div className="relative z-10 w-full max-w-[1400px] mx-auto px-6 lg:px-12">
          <h1 className="text-heading-serif text-4xl md:text-5xl lg:text-6xl text-white font-light mb-6">
            Window Replacement in Mesquite, TX
          </h1>
          <p className="text-white/90 text-lg md:text-xl max-w-2xl mb-8">
            Replacement windows for Mesquite&apos;s eastern Dallas County housing stock &mdash; older 1960s and 1970s ranches, 1980s split-levels, and the newer family homes that fill out the north side near Lake Ray Hubbard. Energy upgrades that show up on the next bill.
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
                src="/locations/window-replacement-mesquite-tx.jpg"
                alt="Mesquite window replacement"
                className="w-full aspect-[4/5] object-cover"
              />
            </div>

            <div>
              <h2 className="text-heading-serif text-3xl md:text-4xl text-charcoal-900 font-light mb-6">
                Mesquite homes deserve straight-talk window pricing
              </h2>
              <p className="text-charcoal-600 text-base leading-relaxed mb-6">
                Mesquite&apos;s housing arc covers the typical eastern Dallas County pattern: 1960s and 1970s brick ranches near Town East Boulevard, 1980s and early 1990s split-levels and two-stories around Pleasant Valley and Northridge, and newer infill family homes north of I-30 near the Lake Ray Hubbard frontage. The original glazing on most of those homes is now well past its service life &mdash; aluminum-framed singles in the 1960s blocks, first-generation vinyl in the 1990s.
              </p>
              <p className="text-charcoal-600 text-base leading-relaxed mb-6">
                Most Mesquite whole-home replacements land in Andersen 400 Series or JELD-WEN Premium Vinyl in standard double-hung and casement configurations &mdash; the value-to-performance sweet spot for this housing market. We&apos;ll bring sample frames to the consultation so the homeowner can compare profiles, sightlines, and finishes against existing trim before deciding.
              </p>
              <p className="text-charcoal-600 text-base leading-relaxed">
                Pricing is itemized and written. Every window is listed by size, configuration, finish, hardware, screen, and glass package. There are no broker commissions tucked in. The manufacturer warranty registers in your name on the day of completion.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-stone-100">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-12">
          <h2 className="text-heading-serif text-3xl md:text-4xl text-charcoal-900 font-light text-center mb-12">
            Mesquite neighborhoods we serve
          </h2>
          <p className="text-charcoal-600 leading-relaxed mb-10 max-w-3xl mx-auto text-center">
            We&apos;ve worked across the city, from the older Skyline blocks down to the lakefront sections near Lake Ray Hubbard. The crews know the typical opening sizes by neighborhood, which speeds up the measurement process.
          </p>
          <div className="grid md:grid-cols-3 gap-6 text-sm">
            <div>
              <h3 className="text-[11px] tracking-[0.2em] uppercase font-medium text-charcoal-900 mb-3">North Mesquite</h3>
              <ul className="text-charcoal-600 space-y-1">
                <li>Mesquite Estates</li>
                <li>Broadmoor</li>
                <li>Casa Linda</li>
                <li>Northridge</li>
              </ul>
            </div>
            <div>
              <h3 className="text-[11px] tracking-[0.2em] uppercase font-medium text-charcoal-900 mb-3">Central Mesquite</h3>
              <ul className="text-charcoal-600 space-y-1">
                <li>Town Center</li>
                <li>Downtown Mesquite</li>
                <li>Skyline</li>
                <li>Town East corridor</li>
              </ul>
            </div>
            <div>
              <h3 className="text-[11px] tracking-[0.2em] uppercase font-medium text-charcoal-900 mb-3">South Mesquite</h3>
              <ul className="text-charcoal-600 space-y-1">
                <li>Lakeview</li>
                <li>Pleasant Valley</li>
                <li>Ridgewood</li>
                <li>Sunnybrook</li>
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
              <h3 className="text-xl font-light text-charcoal-900 mb-4">Energy upgrades on Oncor rates</h3>
              <p className="text-charcoal-600 leading-relaxed mb-4">
                The original aluminum frames in older Mesquite homes act as heat highways. Replacing them with insulated vinyl or fiberglass cuts conductive loss in half before the glass upgrade adds value. Add a Low-E366 coating with argon fill, and the next utility bill reflects the change.
              </p>
              <p className="text-charcoal-600 leading-relaxed">
                We&apos;ll model your projected savings using your actual kWh history. The payback typically runs 5 to 7 years on a whole-home replacement, faster on the most exposed elevations.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-light text-charcoal-900 mb-4">Hail and lake humidity</h3>
              <p className="text-charcoal-600 leading-relaxed mb-4">
                Eastern Dallas County catches hail more often than the western suburbs, with the storms rolling in off the prairie. For lakefront properties along the Lake Ray Hubbard side of town, the elevated humidity also pushes us toward fiberglass or aluminum-clad frames over vinyl, since their expansion coefficient is closer to the glass itself.
              </p>
              <p className="text-charcoal-600 leading-relaxed">
                We&apos;ll talk through the impact-glass options for your most exposed elevations during the consultation.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-charcoal-500">
        <div className="max-w-[1000px] mx-auto px-6 lg:px-12 text-center">
          <h2 className="text-heading-serif text-3xl md:text-4xl text-white font-light mb-8">
            On-time, full-warranty Mesquite installations
          </h2>
          <p className="text-stone-300 text-lg leading-relaxed max-w-2xl mx-auto mb-8">
            Most Mesquite whole-home replacements run two to three working days. Floors get rosin paper, furniture covered in 6-mil plastic, dust collection on every indoor cut, HEPA vacuum at the end of each shift. The final walkthrough happens with you alongside the lead installer.
          </p>
          <p className="text-stone-300 leading-relaxed max-w-2xl mx-auto">
            Manufacturer warranties register in your name on completion. Our written craftsmanship guarantee covers labor for ten years.
          </p>
        </div>
      </section>

            <section className="py-20 bg-white">
        <div className="max-w-[1100px] mx-auto px-6 lg:px-12">
          <h2 className="text-heading-serif text-3xl md:text-4xl text-charcoal-900 font-light mb-10">Common questions from Mesquite homeowners</h2>
          <div className="space-y-8">
            <div>
              <h3 className="text-lg font-medium text-charcoal-900 mb-3">How long does a typical Mesquite window replacement take?</h3>
              <p className="text-charcoal-600 leading-relaxed">Most Mesquite whole-home projects run two to three working days from demo to final cleanup. A standard double-hung swap takes about 45 minutes per opening once the old unit is out, and we move methodically from elevation to elevation. Larger custom orders with arched or radius geometry add a day or two for ordering and a few additional hours per opening on install. We&apos;ll commit to a start and finish date in writing before you sign anything.</p>
            </div>
            <div>
              <h3 className="text-lg font-medium text-charcoal-900 mb-3">Which window brand is best for my Mesquite home?</h3>
              <p className="text-charcoal-600 leading-relaxed">There is no single right answer because Mesquite&apos;s eastern Dallas County housing and the Lake Ray Hubbard frontage all push the spec in different directions. Our default recommendation for most Mesquite mid-range projects is Andersen 400 Series double-hung or JELD-WEN Premium Vinyl &mdash; both deliver strong thermal performance at fair pricing. For custom-home work, premium remodels, and historic restorations, we step up to Andersen E-Series, Pella Reserve, or Marvin Signature. The right brand depends on your home, your goals, and your budget, and we&apos;ll show you the comparative spec sheets during the consultation rather than pushing one product on every project.</p>
            </div>
            <div>
              <h3 className="text-lg font-medium text-charcoal-900 mb-3">Do energy-efficient windows really lower utility bills in Mesquite?</h3>
              <p className="text-charcoal-600 leading-relaxed">Yes, particularly when the existing windows are original aluminum-framed singles or first-generation dual-pane. Replacing those with insulated vinyl or fiberglass frames carrying a Low-E366 coating and argon fill typically delivers a measurable reduction on the next Oncor bill. The biggest gains show up on the south- and west-facing elevations, where the late-afternoon sun load is heaviest. We&apos;ll model the projected savings using your actual kWh history during the consultation rather than quoting a generic brochure number.</p>
            </div>
            <div>
              <h3 className="text-lg font-medium text-charcoal-900 mb-3">What does the warranty cover?</h3>
              <p className="text-charcoal-600 leading-relaxed">Every install includes the manufacturer warranty plus our written craftsmanship guarantee on the labor. The manufacturer warranty &mdash; typically limited lifetime on the IGU and frame, with shorter terms on hardware and finishes &mdash; registers in your name on the day of completion. Our craftsmanship guarantee covers the install workmanship for ten years. If a sash needs adjustment, a screen develops a tear, or weatherstripping fails during that period, we come back at no charge. Casa Linda and Northridge carry predictable mid-1970s opening sizes, which we coordinate so that warranty registration and ARB documentation are both handled before we start.</p>
            </div>
            <div>
              <h3 className="text-lg font-medium text-charcoal-900 mb-3">Do you provide written, itemized pricing?</h3>
              <p className="text-charcoal-600 leading-relaxed">Always. Every Mesquite proposal lists each window with size, configuration, frame material, exterior and interior finish, hardware, screen, and glass package. Installation labor, removal and disposal of the old units, and warranty terms are spelled out separately. There are no broker commissions tucked into the proposal, no surprise change orders, and no hidden line items. You can take the quote, get competitive bids, and decide on your own timeline without a high-pressure follow-up call.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-[1100px] mx-auto px-6 lg:px-12">
          <h2 className="text-heading-serif text-3xl md:text-4xl text-charcoal-900 font-light mb-8">What to expect from a Mesquite project</h2>
          <p className="text-charcoal-600 leading-relaxed mb-4">Most Mesquite window-replacement consultations take about an hour. We arrive with sample frames from Andersen, Pella, JELD-WEN, and Marvin, plus glass cutaways, finish samples, and itemized written pricing forms. We measure each opening three times &mdash; width and height at left, center, and right positions &mdash; to catch any rough-opening anomalies before the order goes in. You receive a written quote on the day of the consultation or first thing the next morning.</p>
          <p className="text-charcoal-600 leading-relaxed mb-4">Once the order is placed, custom-fabricated Mesquite windows typically arrive within three to five weeks. We schedule the install for a date that works for your household, confirm the start the week before, and arrive at the agreed time. The crew is uniformed, background-checked, and consistent &mdash; the same faces every day of the project.</p>
          <p className="text-charcoal-600 leading-relaxed">After the install, the manufacturer warranty registers in your name and our ten-year written craftsmanship guarantee on the labor sits behind it. If a sash needs adjustment, weatherstripping fails, or a screen develops a tear during that period, we come back at no charge. Our trucks are usually already in the Mesquite area working another project, which makes warranty visits straightforward.</p>
        </div>
      </section>

      <section className="py-24 bg-stone-100">
        <div className="max-w-[800px] mx-auto px-6 text-center">
          <h2 className="text-heading-serif text-3xl md:text-4xl text-charcoal-900 font-light mb-8">
            Transform your Mesquite home with premium windows
          </h2>
          <p className="text-charcoal-600 mb-10">
            Schedule your complimentary in-home consultation. We&apos;ll evaluate your property, recommend the right frame and glass package per elevation, and provide a written, itemized quote with no high-pressure pitch.
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
