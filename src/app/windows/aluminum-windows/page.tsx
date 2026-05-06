import type { Metadata } from 'next'
import { PageHeader } from '@/components/page-header'
import { PageFooter } from '@/components/page-footer'

export const metadata: Metadata = {
  title: 'Aluminum Windows Replacement Irving TX | Durable, Modern Design',
  description: 'Premium aluminum replacement windows in Irving, TX. Sleek, durable performance with modern thermal efficiency. Everything priced including installation.',
  keywords: 'aluminum windows Irving TX, aluminum replacement windows, thermal break windows, modern windows',
  alternates: {
    canonical: 'https://replacementwindowsirving.com/windows/aluminum-windows',
  },
}

export default function AluminumWindowsPage() {
  return (
    <div className="min-h-screen bg-white">
      <PageHeader />

      {/* Hero */}
      <section className="relative min-h-[60vh] flex items-center pt-32">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(/window-types/aluminum-irving-tx.jpg)',
          }}
        />
        <div className="hero-overlay absolute inset-0" />
        
        <div className="relative z-10 w-full max-w-[1400px] mx-auto px-6 lg:px-12">
          <h1 className="text-heading-serif text-4xl md:text-5xl lg:text-6xl text-white font-light mb-6 max-w-3xl">
            Aluminum Windows Replacement in Irving, TX
          </h1>
          <p className="text-white/90 text-lg md:text-xl max-w-2xl mb-8">
            Sleek, Durable Performance with Modern Thermal Efficiency
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
                src="/window-types/aluminum-irving-tx.jpg"
                alt="Aluminum windows in modern Irving home"
                className="w-full aspect-[4/5] object-cover"
              />
            </div>
            
            <div>
              <h2 className="text-heading-serif text-3xl md:text-4xl text-charcoal-900 font-light mb-6">
                Why Irving homeowners choose aluminum windows
              </h2>
              <p className="text-charcoal-600 text-base leading-relaxed mb-6">
                Irving&apos;s corporate landscape and proximity to DFW Airport demand windows that combine professional aesthetics with exceptional durability. Aluminum windows have evolved significantly from basic sliding windows, now offering thermal break technology, sleek contemporary styling, and remarkable strength that suits Irving&apos;s mix of corporate headquarters, upscale residential developments, and airport-adjacent neighborhoods.
              </p>
              <p className="text-charcoal-600 text-base leading-relaxed mb-6">
                Irving&apos;s proximity to DFW Airport creates unique energy challenges that modern aluminum windows address with advanced thermal break technology. A thermal break is a non-conductive material inserted between aluminum sections, creating an insulating barrier that dramatically improves energy performance. This prevents heat conduction through the metal, achieving U-factors comparable to vinyl windows while maintaining aluminum&apos;s sleek appearance.
              </p>
              <p className="text-charcoal-600 text-base leading-relaxed">
                Aluminum&apos;s fundamental properties make it exceptionally well-suited for Irving&apos;s demanding environment. The material never rusts, rots, or warps, maintaining structural integrity indefinitely. Aluminum windows are virtually indestructible—they resist impact damage from hail, vandalism, or severe weather far better than alternatives.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Grid */}
      <section className="py-20 bg-stone-100">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-12">
          <h2 className="text-heading-serif text-3xl md:text-4xl text-charcoal-900 font-light text-center mb-16">
            Aluminum window advantages for Irving homes
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div>
              <h3 className="text-[13px] tracking-[0.15em] uppercase font-medium text-charcoal-900 mb-4">
                Thermal Break Technology
              </h3>
              <p className="text-charcoal-600 text-sm leading-relaxed">
                Modern aluminum windows feature thermal break technology that dramatically improves energy performance. This prevents heat conduction through the metal, achieving U-factors comparable to vinyl windows.
              </p>
            </div>
            
            <div>
              <h3 className="text-[13px] tracking-[0.15em] uppercase font-medium text-charcoal-900 mb-4">
                Exceptional Durability
              </h3>
              <p className="text-charcoal-600 text-sm leading-relaxed">
                Aluminum never rusts, rots, or warps, maintaining structural integrity indefinitely. Aluminum windows resist impact damage from hail, vandalism, or severe weather far better than alternatives.
              </p>
            </div>
            
            <div>
              <h3 className="text-[13px] tracking-[0.15em] uppercase font-medium text-charcoal-900 mb-4">
                Contemporary Aesthetics
              </h3>
              <p className="text-charcoal-600 text-sm leading-relaxed">
                Aluminum windows excel at delivering the clean, minimalist aesthetic that complements Irving&apos;s corporate and contemporary architecture. Thin, precise profiles maximize glass area with minimal framing.
              </p>
            </div>
            
            <div>
              <h3 className="text-[13px] tracking-[0.15em] uppercase font-medium text-charcoal-900 mb-4">
                Low Maintenance
              </h3>
              <p className="text-charcoal-600 text-sm leading-relaxed">
                While aluminum windows require more maintenance than vinyl options, they offer excellent long-term value with minimal care requirements. Exterior surfaces benefit from periodic refinishing every 8-12 years.
              </p>
            </div>
            
            <div>
              <h3 className="text-[13px] tracking-[0.15em] uppercase font-medium text-charcoal-900 mb-4">
                Design Flexibility
              </h3>
              <p className="text-charcoal-600 text-sm leading-relaxed">
                The material accepts a wide range of exterior finishes, from natural silver tones to custom powder-coated colors that match Irving&apos;s architectural preferences. Unlike wood windows that can swell or shrink, aluminum maintains perfectly straight lines year-round.
              </p>
            </div>
            
            <div>
              <h3 className="text-[13px] tracking-[0.15em] uppercase font-medium text-charcoal-900 mb-4">
                Longevity
              </h3>
              <p className="text-charcoal-600 text-sm leading-relaxed">
                With proper maintenance, quality aluminum windows provide 40+ years of service. The frames are extruded to precise tolerances, ensuring smooth operation and perfect alignment throughout their service life.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Installation Process */}
      <section className="py-20 bg-charcoal-500">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-12">
          <h2 className="text-heading-serif text-3xl md:text-4xl text-white font-light mb-12">
            Our Irving aluminum window installation process
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
                Your aluminum windows are built to your exact specifications at Andersen, Pella, or Jeld-Wen facilities. Factory quality control ensures perfect operation before shipping to Irving.
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
          <h2 className="text-heading-serif text-3xl md:text-4xl text-charcoal-900 font-light mb-10">Aluminum Windows questions Irving homeowners ask</h2>
          <div className="space-y-8">
            <div>
              <h3 className="text-lg font-medium text-charcoal-900 mb-3">Are aluminum windows a good fit for my Irving home?</h3>
              <p className="text-charcoal-600 leading-relaxed">Aluminum is the right answer for slim sightlines and contemporary elevations. For Irving&apos;s mid-century blocks in Plymouth Park and the contemporary Las Colinas mid-rises, aluminum windows routinely solve problems that other configurations leave on the table. We&apos;ll evaluate your existing openings, the structural rough-opening sizes, and the orientation of each elevation before recommending the right product. The right answer often involves running aluminum windows on some elevations and a different style on others, and we&apos;ll show you why.</p>
            </div>
            <div>
              <h3 className="text-lg font-medium text-charcoal-900 mb-3">How long do aluminum windows last in Irving&apos;s climate?</h3>
              <p className="text-charcoal-600 leading-relaxed">A properly installed aluminum windows should give you 25 to 40 years of service in Irving&apos;s climate, depending on frame material and exposure. Vinyl typically lands in the lower end of that range; fiberglass and aluminum-clad frames often hit the upper end. UV exposure on west-facing elevations is the biggest stressor, so frame finish quality and Low-E glass selection both factor into longevity. Manufacturer warranties register limited lifetime on frame and IGU for most premium product lines.</p>
            </div>
            <div>
              <h3 className="text-lg font-medium text-charcoal-900 mb-3">What energy benefits do aluminum windows deliver?</h3>
              <p className="text-charcoal-600 leading-relaxed">When the existing windows are original aluminum-framed singles or first-generation dual-pane, replacing with current-generation aluminum windows carrying a Low-E366 coating and argon fill typically delivers a measurable reduction on the next Oncor bill. The biggest gains show up on south- and west-facing elevations where the late-afternoon sun load is heaviest. We&apos;ll model the projected savings using your actual kWh history during the consultation.</p>
            </div>
            <div>
              <h3 className="text-lg font-medium text-charcoal-900 mb-3">How long does the install take?</h3>
              <p className="text-charcoal-600 leading-relaxed">A standard aluminum windows replacement takes about 45 to 90 minutes per opening once the old unit is removed, depending on the configuration and any structural surprises in the rough opening. A whole-home Irving project of 12 to 18 openings runs two to three working days from demo to final cleanup. We protect floors with rosin paper, drape furniture in 6-mil plastic, run dust collection on every indoor cut, and HEPA vacuum at the end of each shift.</p>
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
          <h2 className="text-heading-serif text-3xl md:text-4xl text-charcoal-900 font-light mb-8">Aluminum windows installation across Irving</h2>
          <p className="text-charcoal-600 leading-relaxed mb-4">We install aluminum windows across every Irving neighborhood &mdash; the established Plymouth Park ranches and the older Heritage District blocks south of MacArthur Boulevard, the Las Colinas mid-rise condos around Lake Carolyn and Mandalay Canal, the Valley Ranch family homes east of MacArthur, the Cottonwood Valley and Hackberry Creek custom estates, and the newer townhomes along the SH-161 corridor near DFW Airport. Each housing era brings its own set of measurement, structural, and aesthetic considerations.</p>
          <p className="text-charcoal-600 leading-relaxed mb-4">Our installers complete factory training for Andersen, Pella, JELD-WEN, and Marvin aluminum windows configurations. That training matters because each manufacturer has distinct requirements for shimming, fastener schedule, foam type, sealant compatibility, and flashing tape. A unit installed using the wrong manufacturer&apos;s technique will look fine for a few summers and then start to leak.</p>
          <p className="text-charcoal-600 leading-relaxed">Most Irving whole-home aluminum windows replacement projects run two to three working days. Floors get rosin paper, furniture covered in 6-mil plastic, dust collection on every indoor cut, HEPA vacuum at the end of each shift. The final walkthrough happens with you alongside the lead installer, every sash demonstrated, every warranty registered before we leave.</p>
        </div>
      </section>

      <section className="py-24 bg-stone-100">
        <div className="max-w-[800px] mx-auto px-6 text-center">
          <h2 className="text-heading-serif text-3xl md:text-4xl text-charcoal-900 font-light mb-8">
            Ready to upgrade your Irving home with premium aluminum windows?
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
