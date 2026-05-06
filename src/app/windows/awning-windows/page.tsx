import type { Metadata } from 'next'
import { PageHeader } from '@/components/page-header'
import { PageFooter } from '@/components/page-footer'

export const metadata: Metadata = {
  title: 'Awning Windows Irving TX | Top-Hinged Ventilation Windows',
  description: 'Top-hinged awning windows that ventilate Las Colinas townhome stairwells and Valley Ranch baths during Texas downpours. Andersen, Pella, JELD-WEN, Marvin.',
}

export default function AwningWindowsPage() {
  return (
    <div className="min-h-screen bg-white">
      <PageHeader />

      <section className="relative min-h-[60vh] flex items-center pt-32">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(/windows/awning-windows-irving-tx.avif)',
          }}
        />
        <div className="hero-overlay absolute inset-0" />
        
        <div className="relative z-10 w-full max-w-[1400px] mx-auto px-6 lg:px-12">
          <h1 className="text-heading-serif text-4xl md:text-5xl lg:text-6xl text-white font-light mb-6 max-w-3xl">
            Awning Windows in Irving, TX
          </h1>
          <p className="text-white/90 text-lg md:text-xl max-w-2xl mb-8">
            Weather-resistant ventilation that works in any climate. Awning windows open outward from the top, creating a protective canopy that welcomes fresh air while keeping Texas rain outside.
          </p>
          <a href="/contact" className="btn-white">
            Get Started
            </a>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <h2 className="text-heading-serif text-3xl md:text-4xl text-charcoal-900 font-light mb-6">
                Ventilate your Irving home during any weather
              </h2>
              <p className="text-charcoal-600 text-base leading-relaxed mb-6">
                Awning windows solve a problem every Irving homeowner faces: how to maintain ventilation during unexpected rain showers without water pouring into your home. These ingenious windows are hinged at the top and open outward from the bottom, creating an awning-like shield that deflects rain while allowing air circulation. It's a simple mechanical solution that delivers remarkable practicality.
              </p>
              <p className="text-charcoal-600 text-base leading-relaxed mb-6">
                This unique operating style makes awning windows ideal for Texas bathrooms where moisture control is critical. Leave them open during showers to exhaust humid air—even if it starts raining mid-shower, water stays outside while steam escapes. The result: reduced mildew, eliminated mirror fog, and improved bathroom air quality without relying solely on noisy exhaust fans.
              </p>
              <p className="text-charcoal-600 text-base leading-relaxed">
                Irving's unpredictable spring weather makes awning windows particularly valuable. Those sudden afternoon thunderstorms won't catch you off guard—your windows remain open, continuing to ventilate your home while rain sheets harmlessly off the extended sash. You're no longer racing through the house closing windows when storm clouds appear.
              </p>
            </div>
            
            <div>
              <img
                src="/windows/awning-windows-irving-tx.avif"
                alt="Awning window open during weather"
                className="w-full aspect-[4/5] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-stone-100">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-12">
          <h2 className="text-heading-serif text-3xl md:text-4xl text-charcoal-900 font-light text-center mb-16">
            Perfect applications for awning windows
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6">
              <h3 className="text-[13px] tracking-[0.15em] uppercase font-medium text-charcoal-900 mb-4">
                Bathroom Ventilation
              </h3>
              <p className="text-charcoal-600 text-sm leading-relaxed">
                Install above tubs or in shower areas for continuous ventilation. Moisture escapes efficiently while privacy remains intact. Frosted or textured glass options provide full privacy without sacrificing the awning window's functional advantages.
              </p>
            </div>
            
            <div className="bg-white p-6">
              <h3 className="text-[13px] tracking-[0.15em] uppercase font-medium text-charcoal-900 mb-4">
                Above Entry Doors
              </h3>
              <p className="text-charcoal-600 text-sm leading-relaxed">
                Transom-style awning windows above front or back doors add architectural interest while improving entryway ventilation. Natural light floods your foyer without compromising security or requiring door operation for airflow.
              </p>
            </div>
            
            <div className="bg-white p-6">
              <h3 className="text-[13px] tracking-[0.15em] uppercase font-medium text-charcoal-900 mb-4">
                Basement Windows
              </h3>
              <p className="text-charcoal-600 text-sm leading-relaxed">
                High-mounted awning windows bring daylight into Irving basements while the bottom-hinged design prevents rain infiltration. Leave them open year-round to combat basement mustiness—a persistent challenge in below-grade spaces.
              </p>
            </div>
            
            <div className="bg-white p-6">
              <h3 className="text-[13px] tracking-[0.15em] uppercase font-medium text-charcoal-900 mb-4">
                Stacked Combinations
              </h3>
              <p className="text-charcoal-600 text-sm leading-relaxed">
                Stack awning windows vertically to create striking window walls. Each operates independently, giving you precise ventilation control. This contemporary design approach maximizes both daylight and architectural impact in modern Irving homes.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
            <div>
              <h2 className="text-heading-serif text-3xl md:text-4xl text-charcoal-900 font-light mb-8">
                Security and privacy advantages
              </h2>
              <p className="text-charcoal-600 leading-relaxed mb-6">
                Awning windows offer security benefits for ground-level and accessible window locations. When opened, the outward-projecting sash creates a physical barrier that deters intruders far more effectively than sliding windows. An open awning window cannot be silently slid wider from outside—any tampering produces obvious movement and noise alerting occupants.
              </p>
              <p className="text-charcoal-600 leading-relaxed mb-6">
                The bottom-hinged design also provides inherent privacy for Irving bathrooms and bedrooms. Position the window high on the wall and open it for ventilation while maintaining complete visual privacy from outside. Neighbors and passersby cannot see into the room even with the window fully open—a significant advantage for homes on compact lots.
              </p>
              <p className="text-charcoal-600 leading-relaxed">
                Multi-point locking mechanisms on quality awning windows engage at multiple locations around the frame, creating exceptional seal compression and security. These locks resist forced entry better than traditional window latches, giving you peace of mind whether you're home or away from your Irving property.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-charcoal-500">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-12">
          <h2 className="text-heading-serif text-3xl md:text-4xl text-white font-light mb-12">
            Combining awning windows with other styles
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-xl font-light text-white mb-4">Picture Window Combinations</h3>
              <p className="text-stone-300 leading-relaxed">
                Place an awning window below a large fixed picture window to create stunning window walls with practical ventilation. The picture window provides expansive views and maximum daylight while the lower awning window introduces fresh air circulation. This combination appears frequently in contemporary Irving home designs where floor-to-ceiling glass is desired but full operability isn't necessary.
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-light text-white mb-4">Casement Window Pairings</h3>
              <p className="text-stone-300 leading-relaxed">
                Stack an awning window above casement windows to maximize ventilation potential. This configuration allows warm air to escape through the top awning window while casement windows below draw in cooler air—creating effective natural convection cooling during pleasant Texas weather. The varied opening directions add visual interest to your Irving home's exterior.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-stone-100">
        <div className="max-w-[1100px] mx-auto px-6 lg:px-12">
          <h2 className="text-heading-serif text-3xl md:text-4xl text-charcoal-900 font-light mb-10">Awning Windows questions Irving homeowners ask</h2>
          <div className="space-y-8">
            <div>
              <h3 className="text-lg font-medium text-charcoal-900 mb-3">Are awning windows a good fit for my Irving home?</h3>
              <p className="text-charcoal-600 leading-relaxed">Awning windows hinge at the top and open outward, perfect for ventilation during light Texas rain. Common in Irving bathrooms, kitchens, and Las Colinas mid-rise units where high-set ventilation matters, awning windows routinely solve problems that other configurations leave on the table. We&apos;ll evaluate your existing openings, the structural rough-opening sizes, and the orientation of each elevation before recommending the right product. The right answer often involves running awning windows on some elevations and a different style on others, and we&apos;ll show you why.</p>
            </div>
            <div>
              <h3 className="text-lg font-medium text-charcoal-900 mb-3">How long do awning windows last in Irving&apos;s climate?</h3>
              <p className="text-charcoal-600 leading-relaxed">A properly installed awning windows should give you 25 to 40 years of service in Irving&apos;s climate, depending on frame material and exposure. Vinyl typically lands in the lower end of that range; fiberglass and aluminum-clad frames often hit the upper end. UV exposure on west-facing elevations is the biggest stressor, so frame finish quality and Low-E glass selection both factor into longevity. Manufacturer warranties register limited lifetime on frame and IGU for most premium product lines.</p>
            </div>
            <div>
              <h3 className="text-lg font-medium text-charcoal-900 mb-3">What energy benefits do awning windows deliver?</h3>
              <p className="text-charcoal-600 leading-relaxed">When the existing windows are original aluminum-framed singles or first-generation dual-pane, replacing with current-generation awning windows carrying a Low-E366 coating and argon fill typically delivers a measurable reduction on the next Oncor bill. The biggest gains show up on south- and west-facing elevations where the late-afternoon sun load is heaviest. We&apos;ll model the projected savings using your actual kWh history during the consultation.</p>
            </div>
            <div>
              <h3 className="text-lg font-medium text-charcoal-900 mb-3">How long does the install take?</h3>
              <p className="text-charcoal-600 leading-relaxed">A standard awning windows replacement takes about 45 to 90 minutes per opening once the old unit is removed, depending on the configuration and any structural surprises in the rough opening. A whole-home Irving project of 12 to 18 openings runs two to three working days from demo to final cleanup. We protect floors with rosin paper, drape furniture in 6-mil plastic, run dust collection on every indoor cut, and HEPA vacuum at the end of each shift.</p>
            </div>
            <div>
              <h3 className="text-lg font-medium text-charcoal-900 mb-3">Do you provide written, itemized pricing?</h3>
              <p className="text-charcoal-600 leading-relaxed">Always. Every Irving proposal lists each window with size, configuration, frame material, exterior and interior finish, hardware, screen, and glass package. Installation labor, removal and disposal of the old units, and warranty terms are spelled out separately. There are no broker commissions tucked into the proposal, and you can take the quote home, get competitive bids, and decide on your own timeline.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-stone-100">
        <div className="max-w-[800px] mx-auto px-6 text-center">
          <h2 className="text-heading-serif text-3xl md:text-4xl text-charcoal-900 font-light mb-8">
            Ready to improve your Irving home's ventilation?
          </h2>
          <p className="text-charcoal-600 mb-10">
            Contact us to discuss awning window options for your specific applications. We'll recommend sizes, materials, and placement strategies that optimize both function and aesthetics.
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

