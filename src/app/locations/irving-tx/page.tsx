import type { Metadata } from 'next'
import { PageHeader } from '@/components/page-header'
import { PageFooter } from '@/components/page-footer'

export const metadata: Metadata = {
  title: 'Window Replacement Irving TX | Local Expert Installation',
  description: 'Irving window replacement built for the Las Colinas mid-rise market, DFW flightpath noise, and the Cottonwood Valley estate stock. Laminated acoustic glass, free quote.',
}

export default function IrvingPage() {
  return (
    <div className="min-h-screen bg-white">
      <PageHeader />

      <section className="relative min-h-[60vh] flex items-center pt-32">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(/locations/window-replacement-south-irving-tx.jpg)',
          }}
        />
        <div className="hero-overlay absolute inset-0" />

        <div className="relative z-10 w-full max-w-[1400px] mx-auto px-6 lg:px-12">
          <h1 className="text-heading-serif text-4xl md:text-5xl lg:text-6xl text-white font-light mb-6 font-light">
            Window Replacement in Irving, TX
          </h1>
          <p className="text-white/90 text-lg md:text-xl max-w-2xl mb-8">
            Your local Irving window experts. Proudly serving Las Colinas, Valley Ranch, Hackberry Creek, Cottonwood Valley, Plymouth Park, and every Irving neighborhood with premium Andersen, Pella, JELD-WEN, and Marvin windows since day one.
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
                Irving&apos;s most trusted window replacement company
              </h2>
              <p className="text-charcoal-600 text-base leading-relaxed mb-6">
                Based right here in Irving at 909 Hidden Ridge Drive, we&apos;re not a distant contractor traveling from across DFW &mdash; we&apos;re your neighbors. That local presence translates into faster response times, intimate knowledge of Irving&apos;s neighborhoods and building styles, and a genuine investment in our reputation throughout the community. When you choose Replacement Windows of Irving, you&apos;re supporting a local business that calls this city home.
              </p>
              <p className="text-charcoal-600 text-base leading-relaxed mb-6">
                Irving&apos;s residential landscape spans decades of construction. The 1950s and 1960s ranches near MacArthur Boulevard and Plymouth Park sit alongside the master-planned Las Colinas mid-rise condos around Lake Carolyn, the suburban Valley Ranch family homes east of MacArthur, the contemporary custom builds in Cottonwood Valley and the Lakes, and the newer townhomes pushing up along the SH-161 corridor near DFW Airport. We&apos;ve worked in every Irving neighborhood, replacing windows in homes of every age and configuration.
              </p>
              <p className="text-charcoal-600 text-base leading-relaxed">
                That experience drives every recommendation we make. The right window for a 1962 Plymouth Park ranch is not the right window for a Hackberry Creek Estates custom on a 90-foot lot. We carry Andersen, Pella, JELD-WEN, and Marvin so the spec actually matches the house instead of forcing one product on every project.
              </p>
            </div>

            <div>
              <img
                src="/locations/window-replacement-south-irving-tx.jpg"
                alt="Irving TX home window"
                className="w-full aspect-[4/5] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-stone-100">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-12">
          <h2 className="text-heading-serif text-3xl md:text-4xl text-charcoal-900 font-light text-center mb-16">
            Serving all Irving neighborhoods
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-[13px] tracking-[0.15em] uppercase font-medium text-charcoal-900 mb-4">
                Las Colinas &amp; The Lakes
              </h3>
              <ul className="text-charcoal-600 text-sm space-y-2">
                <li>Four Seasons</li>
                <li>Hackberry Creek</li>
                <li>Las Colinas Country Club</li>
                <li>Cottonwood Valley</li>
                <li>Lake Carolyn / Mandalay Canal</li>
                <li>North Lake</li>
              </ul>
            </div>

            <div>
              <h3 className="text-[13px] tracking-[0.15em] uppercase font-medium text-charcoal-900 mb-4">
                Valley Ranch
              </h3>
              <ul className="text-charcoal-600 text-sm space-y-2">
                <li>Riverside</li>
                <li>Northgate</li>
                <li>Canyon Creek</li>
                <li>Twin Wells</li>
                <li>Cimarron Park</li>
                <li>Song</li>
              </ul>
            </div>

            <div>
              <h3 className="text-[13px] tracking-[0.15em] uppercase font-medium text-charcoal-900 mb-4">
                Central, South &amp; University
              </h3>
              <ul className="text-charcoal-600 text-sm space-y-2">
                <li>Heritage District</li>
                <li>Plymouth Park</li>
                <li>Hospital District</li>
                <li>University Hills (near UD)</li>
                <li>La Villita</li>
                <li>MacArthur Boulevard corridor</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-12">
          <h2 className="text-heading-serif text-3xl md:text-4xl text-charcoal-900 font-light mb-12">
            Why Irving residents choose us
          </h2>

          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-xl font-light text-charcoal-900 mb-4">DFW Airport noise &amp; the case for acoustic glass</h3>
              <p className="text-charcoal-600 leading-relaxed mb-4">
                Irving&apos;s position between DFW Airport and Love Field creates a noise reality that homeowners often don&apos;t consciously register until it goes away. Approach patterns route directly over many Irving neighborhoods, particularly along the MacArthur Boulevard spine and the north Irving sections nearest the airport. Standard dual-pane glass barely affects that low-frequency aircraft noise. Laminated acoustic IGUs raise the sound transmission class meaningfully and translate into a perceptibly quieter bedroom.
              </p>
              <p className="text-charcoal-600 leading-relaxed">
                We routinely spec acoustic glass on the bedrooms and home offices facing the flight path, and standard Low-E elsewhere. The upgrade pays off the first weekend you can leave the windows closed and not hear the runway.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-light text-charcoal-900 mb-4">Local installer, local accountability</h3>
              <p className="text-charcoal-600 leading-relaxed mb-4">
                Being based at Hidden Ridge means our crews can schedule consultations within 24 to 48 hours of your call and still cover most Irving jobs the same week. We know the streets, the HOAs, and the typical opening sizes by neighborhood. We&apos;re a small, owner-operated team, not a metroplex-wide call center. The same person who quotes your project runs the install.
              </p>
              <p className="text-charcoal-600 leading-relaxed">
                Pricing is itemized in writing. The quote lists every window with size, configuration, finish, hardware, screen, and glass package. There are no broker commissions tucked in, no surprise change orders, and a written ten-year craftsmanship guarantee on the labor.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-stone-100">
        <div className="max-w-[1000px] mx-auto px-6 lg:px-12">
          <h2 className="text-heading-serif text-3xl md:text-4xl text-charcoal-900 font-light mb-10">What an Irving project actually looks like</h2>
          <p className="text-charcoal-600 leading-relaxed mb-4">
            Most Irving whole-home replacements run two to three working days from start to cleanup. We typically begin with the back of the house so the front elevation stays presentable for arriving and departing family members. A standard double-hung replacement takes about 45 minutes per opening once the old unit is out, and we set, shim, foam, flash, and trim each opening before moving to the next.
          </p>
          <p className="text-charcoal-600 leading-relaxed mb-4">
            We protect floors with rosin paper, drape furniture in 6-mil plastic, run dust collection on every indoor cut, and HEPA vacuum at the end of each shift. For homes built before 1978 &mdash; some of the older Plymouth Park and Heritage District blocks &mdash; we follow EPA RRP lead-safe protocols. The final walkthrough happens with you alongside the lead installer, every sash demonstrated, every warranty registered before we leave the driveway.
          </p>
          <p className="text-charcoal-600 leading-relaxed">
            You receive a binder containing manufacturer paperwork, warranty registrations, care instructions, and our written craftsmanship guarantee. The manufacturer warranty registers in your name on the day of completion.
          </p>
        </div>
      </section>

      <section className="py-20 bg-charcoal-500">
        <div className="max-w-[1000px] mx-auto px-6 lg:px-12 text-center">
          <h2 className="text-heading-serif text-3xl md:text-4xl text-white font-light mb-8">
            Irving&apos;s window replacement specialists
          </h2>
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div>
              <div className="text-5xl text-white/20 font-light mb-4">500+</div>
              <h3 className="text-white text-lg mb-2">Irving installations</h3>
              <p className="text-stone-300 text-sm">Extensive experience across every Irving neighborhood and home style</p>
            </div>
            <div>
              <div className="text-5xl text-white/20 font-light mb-4">15+</div>
              <h3 className="text-white text-lg mb-2">Years in business</h3>
              <p className="text-stone-300 text-sm">Proven track record and established Irving community presence</p>
            </div>
            <div>
              <div className="text-5xl text-white/20 font-light mb-4">5&#9733;</div>
              <h3 className="text-white text-lg mb-2">Customer rating</h3>
              <p className="text-stone-300 text-sm">Consistently highest ratings from satisfied Irving homeowners</p>
            </div>
          </div>
        </div>
      </section>

            <section className="py-20 bg-white">
        <div className="max-w-[1100px] mx-auto px-6 lg:px-12">
          <h2 className="text-heading-serif text-3xl md:text-4xl text-charcoal-900 font-light mb-10">Common questions from Irving homeowners</h2>
          <div className="space-y-8">
            <div>
              <h3 className="text-lg font-medium text-charcoal-900 mb-3">How long does a typical Irving window replacement take?</h3>
              <p className="text-charcoal-600 leading-relaxed">Most Irving whole-home projects run two to three working days from demo to final cleanup. A standard double-hung swap takes about 45 minutes per opening once the old unit is out, and we move methodically from elevation to elevation. Larger custom orders with arched or radius geometry add a day or two for ordering and a few additional hours per opening on install. We&apos;ll commit to a start and finish date in writing before you sign anything.</p>
            </div>
            <div>
              <h3 className="text-lg font-medium text-charcoal-900 mb-3">Which window brand is best for my Irving home?</h3>
              <p className="text-charcoal-600 leading-relaxed">There is no single right answer because Irving&apos;s position between DFW and Love Field, plus Las Colinas mid-rise considerations all push the spec in different directions. Our default recommendation for most Irving mid-range projects is Andersen 400 Series double-hung or JELD-WEN Premium Vinyl &mdash; both deliver strong thermal performance at fair pricing. For custom-home work, premium remodels, and historic restorations, we step up to Andersen E-Series, Pella Reserve, or Marvin Signature. The right brand depends on your home, your goals, and your budget, and we&apos;ll show you the comparative spec sheets during the consultation rather than pushing one product on every project.</p>
            </div>
            <div>
              <h3 className="text-lg font-medium text-charcoal-900 mb-3">Do energy-efficient windows really lower utility bills in Irving?</h3>
              <p className="text-charcoal-600 leading-relaxed">Yes, particularly when the existing windows are original aluminum-framed singles or first-generation dual-pane. Replacing those with insulated vinyl or fiberglass frames carrying a Low-E366 coating and argon fill typically delivers a measurable reduction on the next Oncor bill. The biggest gains show up on the south- and west-facing elevations, where the late-afternoon sun load is heaviest. We&apos;ll model the projected savings using your actual kWh history during the consultation rather than quoting a generic brochure number.</p>
            </div>
            <div>
              <h3 className="text-lg font-medium text-charcoal-900 mb-3">What does the warranty cover?</h3>
              <p className="text-charcoal-600 leading-relaxed">Every install includes the manufacturer warranty plus our written craftsmanship guarantee on the labor. The manufacturer warranty &mdash; typically limited lifetime on the IGU and frame, with shorter terms on hardware and finishes &mdash; registers in your name on the day of completion. Our craftsmanship guarantee covers the install workmanship for ten years. If a sash needs adjustment, a screen develops a tear, or weatherstripping fails during that period, we come back at no charge. Plymouth Park and the older Heritage District blocks need pre-1978 lead-safe protocols, which we coordinate so that warranty registration and ARB documentation are both handled before we start.</p>
            </div>
            <div>
              <h3 className="text-lg font-medium text-charcoal-900 mb-3">Do you provide written, itemized pricing?</h3>
              <p className="text-charcoal-600 leading-relaxed">Always. Every Irving proposal lists each window with size, configuration, frame material, exterior and interior finish, hardware, screen, and glass package. Installation labor, removal and disposal of the old units, and warranty terms are spelled out separately. There are no broker commissions tucked into the proposal, no surprise change orders, and no hidden line items. You can take the quote, get competitive bids, and decide on your own timeline without a high-pressure follow-up call.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-stone-100">
        <div className="max-w-[800px] mx-auto px-6 text-center">
          <h2 className="text-heading-serif text-3xl md:text-4xl text-charcoal-900 font-light mb-8">
            Schedule your Irving window consultation today
          </h2>
          <p className="text-charcoal-600 mb-10">
            Call or email to arrange your free in-home consultation. We&apos;ll measure your windows, discuss options, answer questions, and provide transparent itemized pricing &mdash; typically within one hour.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/contact" className="btn-outline-dark">
              Request Consultation
            </a>
            <a href="tel:972-284-7995" className="btn-dark">
              Call 972-284-7995
            </a>
          </div>
          <p className="text-charcoal-500 text-sm mt-8">
            909 Hidden Ridge Dr #180, Irving, TX 75038
          </p>
        </div>
      </section>

      <PageFooter />
    </div>
  )
}
