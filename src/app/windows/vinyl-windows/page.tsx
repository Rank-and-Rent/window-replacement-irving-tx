import type { Metadata } from 'next'
import { PageHeader } from '@/components/page-header'
import { PageFooter } from '@/components/page-footer'

export const metadata: Metadata = {
  title: 'Vinyl Windows Replacement Irving TX | Low Maintenance, Energy Efficient',
  description: 'Vinyl replacement windows for Irving — Las Colinas mid-rises, Valley Ranch ranches, Plymouth Park bungalows. Low-E366, argon fill, Oncor savings. Free quote: 972-284-7995.',
  keywords: 'vinyl windows Irving TX, vinyl replacement windows, low maintenance windows, energy efficient vinyl windows',
  alternates: {
    canonical: 'https://replacementwindowsirving.com/windows/vinyl-windows',
  },
}

export default function VinylWindowsPage() {
  return (
    <div className="min-h-screen bg-white">
      <PageHeader />

      {/* Hero */}
      <section className="relative min-h-[60vh] flex items-center pt-32">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(/window-types/vinyl-irving-tx.jpg)',
          }}
        />
        <div className="hero-overlay absolute inset-0" />
        
        <div className="relative z-10 w-full max-w-[1400px] mx-auto px-6 lg:px-12">
          <h1 className="text-heading-serif text-4xl md:text-5xl lg:text-6xl text-white font-light mb-6 max-w-3xl">
            Vinyl Windows Replacement in Irving, TX
          </h1>
          <p className="text-white/90 text-lg md:text-xl max-w-2xl mb-8">
            Low-Maintenance Excellence with Superior Energy Performance
          </p>
          <a href="/contact" className="btn-white">
            Request Free Estimate
          </a>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <img
                src="/window-types/vinyl-irving-tx.jpg"
                alt="Vinyl windows in modern Irving home"
                className="w-full aspect-[4/5] object-cover"
              />
            </div>
            
            <div>
              <h2 className="text-heading-serif text-3xl md:text-4xl text-charcoal-900 font-light mb-6">
                Why Irving homeowners choose vinyl windows
              </h2>
              <p className="text-charcoal-600 text-base leading-relaxed mb-6">
                Irving homeowners are embracing vinyl windows for their perfect blend of modern efficiency and Texas durability. Located near DFW Airport and home to major corporations, Irving demands windows that perform reliably in a busy, fast-paced environment. Vinyl windows deliver exceptional energy efficiency, minimal maintenance, and lasting beauty that suits Irving&apos;s mix of established neighborhoods and growing communities.
              </p>
              <p className="text-charcoal-600 text-base leading-relaxed mb-6">
                Irving&apos;s proximity to DFW Airport creates unique challenges that vinyl windows address with superior sound dampening properties. The material&apos;s density and multi-pane construction significantly reduce aircraft noise compared to single-pane alternatives. Vinyl windows with laminated glass options can achieve sound transmission class (STC) ratings of 35-40, effectively minimizing airport noise while maintaining energy efficiency.
              </p>
              <p className="text-charcoal-600 text-base leading-relaxed">
                Irving&apos;s corporate environment and proximity to major business centers means residents lead demanding schedules. Vinyl windows respect this lifestyle by requiring virtually no maintenance, unlike wood windows that demand regular refinishing or aluminum windows that need periodic painting. The smooth, non-porous vinyl surface resists Irving&apos;s urban pollutants and occasional dust storms, staying looking new with minimal effort.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Grid */}
      <section className="py-20 bg-stone-100">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-12">
          <h2 className="text-heading-serif text-3xl md:text-4xl text-charcoal-900 font-light text-center mb-16">
            Vinyl window advantages for Irving homes
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div>
              <h3 className="text-[13px] tracking-[0.15em] uppercase font-medium text-charcoal-900 mb-4">
                Low Maintenance
              </h3>
              <p className="text-charcoal-600 text-sm leading-relaxed">
                Vinyl windows require virtually no maintenance—just occasional cleaning. They never need painting, staining, or sealing, and they resist fading, cracking, and warping in Irving&apos;s climate.
              </p>
            </div>
            
            <div>
              <h3 className="text-[13px] tracking-[0.15em] uppercase font-medium text-charcoal-900 mb-4">
                Energy Efficiency
              </h3>
              <p className="text-charcoal-600 text-sm leading-relaxed">
                The multi-chambered construction creates superior thermal barriers that reduce heating and cooling costs by 25-35%. Low-E coatings and argon gas fills optimize performance for Irving&apos;s climate.
              </p>
            </div>
            
            <div>
              <h3 className="text-[13px] tracking-[0.15em] uppercase font-medium text-charcoal-900 mb-4">
                Sound Dampening
              </h3>
              <p className="text-charcoal-600 text-sm leading-relaxed">
                Vinyl windows significantly reduce aircraft noise from DFW Airport. With laminated glass options, they can achieve STC ratings of 35-40, providing acoustic comfort for Irving homeowners.
              </p>
            </div>
            
            <div>
              <h3 className="text-[13px] tracking-[0.15em] uppercase font-medium text-charcoal-900 mb-4">
                Cost Effective
              </h3>
              <p className="text-charcoal-600 text-sm leading-relaxed">
                Vinyl windows offer exceptional value, providing premium performance at accessible price points. Many models qualify for North Texas energy rebates, making them an economical choice.
              </p>
            </div>
            
            <div>
              <h3 className="text-[13px] tracking-[0.15em] uppercase font-medium text-charcoal-900 mb-4">
                Design Versatility
              </h3>
              <p className="text-charcoal-600 text-sm leading-relaxed">
                Vinyl windows adapt beautifully to both contemporary and traditional styles. Available in numerous colors and finishes, they complement Irving&apos;s diverse architectural preferences.
              </p>
            </div>
            
            <div>
              <h3 className="text-[13px] tracking-[0.15em] uppercase font-medium text-charcoal-900 mb-4">
                Durability
              </h3>
              <p className="text-charcoal-600 text-sm leading-relaxed">
                Modern vinyl formulations resist Texas UV exposure without fading, warping, or requiring paint. Fusion-welded corners eliminate air infiltration points for lasting performance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Installation Process */}
      <section className="py-20 bg-charcoal-500">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-12">
          <h2 className="text-heading-serif text-3xl md:text-4xl text-white font-light mb-12">
            Our Irving vinyl window installation process
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div>
              <div className="text-5xl text-white/20 font-light mb-4">01</div>
              <h3 className="text-[13px] tracking-[0.15em] uppercase font-medium text-white mb-3">
                Precise Measurement
              </h3>
              <p className="text-stone-300 text-sm leading-relaxed">
                Our certified installers measure each opening three times—width and height at left, center, and right positions. This eliminates the costly errors that plague inexperienced installers.
              </p>
            </div>
            
            <div>
              <div className="text-5xl text-white/20 font-light mb-4">02</div>
              <h3 className="text-[13px] tracking-[0.15em] uppercase font-medium text-white mb-3">
                Custom Fabrication
              </h3>
              <p className="text-stone-300 text-sm leading-relaxed">
                Your vinyl windows are built to your exact specifications at Andersen, Pella, or Jeld-Wen facilities. Factory quality control ensures perfect operation before shipping to Irving.
              </p>
            </div>
            
            <div>
              <div className="text-5xl text-white/20 font-light mb-4">03</div>
              <h3 className="text-[13px] tracking-[0.15em] uppercase font-medium text-white mb-3">
                Expert Installation
              </h3>
              <p className="text-stone-300 text-sm leading-relaxed">
                Old windows are carefully removed, openings are inspected and prepared, and new windows are installed level and plumb. Proper shimming and insulation prevent future air leakage.
              </p>
            </div>
            
            <div>
              <div className="text-5xl text-white/20 font-light mb-4">04</div>
              <h3 className="text-[13px] tracking-[0.15em] uppercase font-medium text-white mb-3">
                Quality Verification
              </h3>
              <p className="text-stone-300 text-sm leading-relaxed">
                We test each window for smooth operation, verify weatherstripping seals properly, and ensure locks engage securely. Your satisfaction is confirmed before our crew leaves your Irving property.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-stone-100">
        <div className="max-w-[1100px] mx-auto px-6 lg:px-12">
          <h2 className="text-heading-serif text-3xl md:text-4xl text-charcoal-900 font-light mb-10">Vinyl Windows questions Irving homeowners ask</h2>
          <div className="space-y-8">
            <div>
              <h3 className="text-lg font-medium text-charcoal-900 mb-3">Are vinyl windows a good fit for my Irving home?</h3>
              <p className="text-charcoal-600 leading-relaxed">Vinyl is the volume choice in Irving for one reason: strong thermal performance at fair pricing. The default pick for the bulk of Irving whole-home replacements outside premium custom remodels, vinyl windows routinely solve problems that other configurations leave on the table. We&apos;ll evaluate your existing openings, the structural rough-opening sizes, and the orientation of each elevation before recommending the right product. The right answer often involves running vinyl windows on some elevations and a different style on others, and we&apos;ll show you why.</p>
            </div>
            <div>
              <h3 className="text-lg font-medium text-charcoal-900 mb-3">How long do vinyl windows last in Irving&apos;s climate?</h3>
              <p className="text-charcoal-600 leading-relaxed">A properly installed vinyl windows should give you 25 to 40 years of service in Irving&apos;s climate, depending on frame material and exposure. Vinyl typically lands in the lower end of that range; fiberglass and aluminum-clad frames often hit the upper end. UV exposure on west-facing elevations is the biggest stressor, so frame finish quality and Low-E glass selection both factor into longevity. Manufacturer warranties register limited lifetime on frame and IGU for most premium product lines.</p>
            </div>
            <div>
              <h3 className="text-lg font-medium text-charcoal-900 mb-3">What energy benefits do vinyl windows deliver?</h3>
              <p className="text-charcoal-600 leading-relaxed">When the existing windows are original aluminum-framed singles or first-generation dual-pane, replacing with current-generation vinyl windows carrying a Low-E366 coating and argon fill typically delivers a measurable reduction on the next Oncor bill. The biggest gains show up on south- and west-facing elevations where the late-afternoon sun load is heaviest. We&apos;ll model the projected savings using your actual kWh history during the consultation.</p>
            </div>
            <div>
              <h3 className="text-lg font-medium text-charcoal-900 mb-3">How long does the install take?</h3>
              <p className="text-charcoal-600 leading-relaxed">A standard vinyl windows replacement takes about 45 to 90 minutes per opening once the old unit is removed, depending on the configuration and any structural surprises in the rough opening. A whole-home Irving project of 12 to 18 openings runs two to three working days from demo to final cleanup. We protect floors with rosin paper, drape furniture in 6-mil plastic, run dust collection on every indoor cut, and HEPA vacuum at the end of each shift.</p>
            </div>
            <div>
              <h3 className="text-lg font-medium text-charcoal-900 mb-3">Do you provide written, itemized pricing?</h3>
              <p className="text-charcoal-600 leading-relaxed">Always. Every Irving proposal lists each window with size, configuration, frame material, exterior and interior finish, hardware, screen, and glass package. Installation labor, removal and disposal of the old units, and warranty terms are spelled out separately. There are no broker commissions tucked into the proposal, and you can take the quote home, get competitive bids, and decide on your own timeline.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-[1100px] mx-auto px-6 lg:px-12">
          <h2 className="text-heading-serif text-3xl md:text-4xl text-charcoal-900 font-light mb-8">Vinyl windows installation across Irving</h2>
          <p className="text-charcoal-600 leading-relaxed mb-4">We install vinyl windows across every Irving neighborhood &mdash; the established Plymouth Park ranches and the older Heritage District blocks south of MacArthur Boulevard, the Las Colinas mid-rise condos around Lake Carolyn and Mandalay Canal, the Valley Ranch family homes east of MacArthur, the Cottonwood Valley and Hackberry Creek custom estates, and the newer townhomes along the SH-161 corridor near DFW Airport. Each housing era brings its own set of measurement, structural, and aesthetic considerations.</p>
          <p className="text-charcoal-600 leading-relaxed mb-4">Our installers complete factory training for Andersen, Pella, JELD-WEN, and Marvin vinyl windows configurations. That training matters because each manufacturer has distinct requirements for shimming, fastener schedule, foam type, sealant compatibility, and flashing tape. A unit installed using the wrong manufacturer&apos;s technique will look fine for a few summers and then start to leak.</p>
          <p className="text-charcoal-600 leading-relaxed">Most Irving whole-home vinyl windows replacement projects run two to three working days. Floors get rosin paper, furniture covered in 6-mil plastic, dust collection on every indoor cut, HEPA vacuum at the end of each shift. The final walkthrough happens with you alongside the lead installer, every sash demonstrated, every warranty registered before we leave.</p>
        </div>
      </section>

      <section className="py-24 bg-stone-100">
        <div className="max-w-[800px] mx-auto px-6 text-center">
          <h2 className="text-heading-serif text-3xl md:text-4xl text-charcoal-900 font-light mb-8">
            Ready to upgrade your Irving home with premium vinyl windows?
          </h2>
          <p className="text-charcoal-600 mb-10">
            Schedule your free in-home consultation. We&apos;ll measure your openings, discuss options, and provide transparent pricing with no pressure.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/contact" className="btn-outline-dark">
              Schedule Consultation
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
