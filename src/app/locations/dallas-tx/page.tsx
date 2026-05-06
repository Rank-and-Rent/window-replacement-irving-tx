import type { Metadata } from 'next'
import { PageHeader } from '@/components/page-header'
import { PageFooter } from '@/components/page-footer'

export const metadata: Metadata = {
  title: 'Window Replacement Dallas TX | Premium Installation Services',
  description: 'Dallas window replacement from an Irving-based crew — Preston Hollow estates, Lake Highlands ranches, Oak Cliff bungalows. Acoustic IGUs, factory-trained installers.',
}

export default function DallasPage() {
  return (
    <div className="min-h-screen bg-white">
      <PageHeader />

      <section className="relative min-h-[60vh] flex items-center pt-32">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(/locations/window-replacement-dallas-tx-1.webp)',
          }}
        />
        <div className="hero-overlay absolute inset-0" />

        <div className="relative z-10 w-full max-w-[1400px] mx-auto px-6 lg:px-12">
          <h1 className="text-heading-serif text-4xl md:text-5xl lg:text-6xl text-white font-light mb-6">
            Window Replacement in Dallas, TX
          </h1>
          <p className="text-white/90 text-lg md:text-xl max-w-2xl mb-8">
            Replacement windows for Dallas&apos;s remarkable housing range &mdash; from 1920s Tudor and Spanish Revival in M Streets to modern lofts in Deep Ellum, mid-century moderns in Lake Highlands, and the Spanish-influenced bungalows of Bishop Arts. Custom shop drawings, premium frames, and a calm install process.
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
                src="/locations/window-replacement-dallas-tx-1.webp"
                alt="Dallas window replacement"
                className="w-full aspect-[4/5] object-cover"
              />
            </div>

            <div>
              <h2 className="text-heading-serif text-3xl md:text-4xl text-charcoal-900 font-light mb-6">
                Dallas&apos;s housing variety drives every spec decision
              </h2>
              <p className="text-charcoal-600 text-base leading-relaxed mb-6">
                Few cities in the country pack the housing variety Dallas does into one ZIP code map. The M Streets and Munger Place still carry 1920s Tudor and Prairie homes with original wood double-hung and steel casements that deserve restoration-quality replacements, often Pella Reserve or Marvin Signature with simulated divided lites. Preston Hollow runs from mid-century modern to large brick traditional, where Andersen E-Series black-clad and Marvin Modern fit the contemporary remodels. Lake Highlands carries 1970s and 1980s family homes with first-generation vinyl that&apos;s now well past service life.
              </p>
              <p className="text-charcoal-600 text-base leading-relaxed mb-6">
                South of the river, Oak Cliff and Bishop Arts hold a different mix &mdash; Spanish Revival bungalows, Craftsman cottages, and the newer infill modern that&apos;s reshaping the area. Each requires its own scoping conversation. We bring sample frames from Andersen, Pella, JELD-WEN, and Marvin to every consultation so you can compare profiles against your existing trim, plaster, and casing details.
              </p>
              <p className="text-charcoal-600 text-base leading-relaxed">
                We&apos;re based in Irving, just across SH-114, with crews that know the conservation district rules in Munger Place, the design review constraints in Preston Hollow, and the practical limits of working in Bishop Arts&apos; tight alleys.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-stone-100">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-12">
          <h2 className="text-heading-serif text-3xl md:text-4xl text-charcoal-900 font-light text-center mb-12">
            Dallas neighborhoods we serve
          </h2>
          <p className="text-charcoal-600 leading-relaxed mb-10 max-w-3xl mx-auto text-center">
            We&apos;ve worked across the city &mdash; uptown high-rises, North Dallas estates, East Dallas conservation districts, and Oak Cliff bungalows. The scoping conversation looks different in each pocket.
          </p>
          <div className="grid md:grid-cols-3 gap-6 text-sm">
            <div>
              <h3 className="text-[11px] tracking-[0.2em] uppercase font-medium text-charcoal-900 mb-3">North Dallas</h3>
              <ul className="text-charcoal-600 space-y-1">
                <li>Preston Hollow</li>
                <li>North Dallas</li>
                <li>Far North Dallas</li>
                <li>Lake Highlands</li>
              </ul>
            </div>
            <div>
              <h3 className="text-[11px] tracking-[0.2em] uppercase font-medium text-charcoal-900 mb-3">Central Dallas</h3>
              <ul className="text-charcoal-600 space-y-1">
                <li>Downtown Dallas</li>
                <li>Deep Ellum</li>
                <li>Uptown</li>
                <li>Oak Lawn</li>
              </ul>
            </div>
            <div>
              <h3 className="text-[11px] tracking-[0.2em] uppercase font-medium text-charcoal-900 mb-3">South Dallas</h3>
              <ul className="text-charcoal-600 space-y-1">
                <li>Oak Cliff</li>
                <li>Bishop Arts</li>
                <li>South Dallas</li>
                <li>Pleasant Grove</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-12">
          <h2 className="text-heading-serif text-3xl md:text-4xl text-charcoal-900 font-light mb-12">
            Dallas climate and window performance
          </h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-xl font-light text-charcoal-900 mb-4">Solar control on big-glass elevations</h3>
              <p className="text-charcoal-600 leading-relaxed mb-4">
                Dallas&apos;s typical north-of-LBJ home has substantial west-facing glass &mdash; great for natural light, brutal for August cooling bills. We spec triple-silver Low-E coatings on those elevations to drop solar heat gain coefficient values into the high teens. East and north exposures get a different package tuned for daylight rather than maximum heat rejection.
              </p>
              <p className="text-charcoal-600 leading-relaxed">
                For older bungalows in M Streets and Bishop Arts, we work with the smaller original openings and focus on perimeter air-sealing and weatherstripping upgrades, where the biggest comfort wins are hiding.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-light text-charcoal-900 mb-4">Acoustic priorities in dense neighborhoods</h3>
              <p className="text-charcoal-600 leading-relaxed mb-4">
                Uptown, Oak Lawn, and Deep Ellum carry meaningful traffic and entertainment-district noise. Laminated acoustic glass on bedroom and home-office windows facing those streets makes a noticeable difference. We&apos;ve also installed laminated upgrades on Lake Highlands homes near LBJ and Skillman, where the highway noise floor is real.
              </p>
              <p className="text-charcoal-600 leading-relaxed">
                Acoustic glazing pairs well with Low-E coatings, so you don&apos;t have to choose between sound and energy performance.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-charcoal-500">
        <div className="max-w-[1000px] mx-auto px-6 lg:px-12 text-center">
          <h2 className="text-heading-serif text-3xl md:text-4xl text-white font-light mb-8">
            Conservation-district experience and modern installs
          </h2>
          <p className="text-stone-300 text-lg leading-relaxed max-w-2xl mx-auto mb-8">
            Working in Dallas&apos;s conservation districts &mdash; Munger Place, Junius Heights, Winnetka Heights &mdash; requires more than a manufacturer catalog. We coordinate with city design review, pull historic-window photos when needed, and spec replacement units that match original muntin patterns. For non-historic homes, we run a clean, dust-controlled, on-time install with a final walkthrough that doesn&apos;t end until the homeowner has tested every sash.
          </p>
          <p className="text-stone-300 leading-relaxed max-w-2xl mx-auto">
            Manufacturer warranties register in your name on completion. Our written craftsmanship guarantee covers labor for ten years.
          </p>
        </div>
      </section>

            <section className="py-20 bg-white">
        <div className="max-w-[1100px] mx-auto px-6 lg:px-12">
          <h2 className="text-heading-serif text-3xl md:text-4xl text-charcoal-900 font-light mb-10">Common questions from Dallas homeowners</h2>
          <div className="space-y-8">
            <div>
              <h3 className="text-lg font-medium text-charcoal-900 mb-3">How long does a typical Dallas window replacement take?</h3>
              <p className="text-charcoal-600 leading-relaxed">Most Dallas whole-home projects run two to three working days from demo to final cleanup. A standard double-hung swap takes about 45 minutes per opening once the old unit is out, and we move methodically from elevation to elevation. Larger custom orders with arched or radius geometry add a day or two for ordering and a few additional hours per opening on install. We&apos;ll commit to a start and finish date in writing before you sign anything.</p>
            </div>
            <div>
              <h3 className="text-lg font-medium text-charcoal-900 mb-3">Which window brand is best for my Dallas home?</h3>
              <p className="text-charcoal-600 leading-relaxed">There is no single right answer because Dallas&apos;s remarkable housing variety, from M Streets bungalows to Preston Hollow estates all push the spec in different directions. Our default recommendation for most Dallas mid-range projects is Andersen 400 Series double-hung or JELD-WEN Premium Vinyl &mdash; both deliver strong thermal performance at fair pricing. For custom-home work, premium remodels, and historic restorations, we step up to Andersen E-Series, Pella Reserve, or Marvin Signature. The right brand depends on your home, your goals, and your budget, and we&apos;ll show you the comparative spec sheets during the consultation rather than pushing one product on every project.</p>
            </div>
            <div>
              <h3 className="text-lg font-medium text-charcoal-900 mb-3">Do energy-efficient windows really lower utility bills in Dallas?</h3>
              <p className="text-charcoal-600 leading-relaxed">Yes, particularly when the existing windows are original aluminum-framed singles or first-generation dual-pane. Replacing those with insulated vinyl or fiberglass frames carrying a Low-E366 coating and argon fill typically delivers a measurable reduction on the next Oncor bill. The biggest gains show up on the south- and west-facing elevations, where the late-afternoon sun load is heaviest. We&apos;ll model the projected savings using your actual kWh history during the consultation rather than quoting a generic brochure number.</p>
            </div>
            <div>
              <h3 className="text-lg font-medium text-charcoal-900 mb-3">What does the warranty cover?</h3>
              <p className="text-charcoal-600 leading-relaxed">Every install includes the manufacturer warranty plus our written craftsmanship guarantee on the labor. The manufacturer warranty &mdash; typically limited lifetime on the IGU and frame, with shorter terms on hardware and finishes &mdash; registers in your name on the day of completion. Our craftsmanship guarantee covers the install workmanship for ten years. If a sash needs adjustment, a screen develops a tear, or weatherstripping fails during that period, we come back at no charge. Conservation districts including Munger Place require historic-window documentation, which we coordinate so that warranty registration and ARB documentation are both handled before we start.</p>
            </div>
            <div>
              <h3 className="text-lg font-medium text-charcoal-900 mb-3">Do you provide written, itemized pricing?</h3>
              <p className="text-charcoal-600 leading-relaxed">Always. Every Dallas proposal lists each window with size, configuration, frame material, exterior and interior finish, hardware, screen, and glass package. Installation labor, removal and disposal of the old units, and warranty terms are spelled out separately. There are no broker commissions tucked into the proposal, no surprise change orders, and no hidden line items. You can take the quote, get competitive bids, and decide on your own timeline without a high-pressure follow-up call.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-stone-100">
        <div className="max-w-[800px] mx-auto px-6 text-center">
          <h2 className="text-heading-serif text-3xl md:text-4xl text-charcoal-900 font-light mb-8">
            Transform your Dallas home with premium windows
          </h2>
          <p className="text-charcoal-600 mb-10">
            Schedule your complimentary consultation. We&apos;ll evaluate your Dallas property, recommend products tuned to era, neighborhood, and conservation-district requirements, and provide a written, itemized quote.
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
