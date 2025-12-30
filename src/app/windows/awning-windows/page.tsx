import type { Metadata } from 'next'
import { PageHeader } from '@/components/page-header'
import { PageFooter } from '@/components/page-footer'

export const metadata: Metadata = {
  title: 'Awning Windows Irving TX | Top-Hinged Ventilation Windows',
  description: 'Awning window replacement in Irving, TX. Perfect for bathrooms & above doors. Ventilate during rain. Andersen, Pella & Jeld-Wen top-hinged windows. 972-284-7995',
}

export default function AwningWindowsPage() {
  return (
    <div className="min-h-screen bg-white">
      <PageHeader />

      <section className="relative min-h-[60vh] flex items-center pt-32">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1920&q=80)',
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
                src="https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=1000&q=80"
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
            
            <div className="space-y-6">
              <img
                src="https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=800&q=80"
                alt="Awning window security features"
                className="w-full aspect-[4/3] object-cover"
              />
              <img
                src="https://images.unsplash.com/photo-1600573472550-8090b5e0745e?w=800&q=80"
                alt="Awning window in bathroom"
                className="w-full aspect-[4/3] object-cover"
              />
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

