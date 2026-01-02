import type { Metadata } from 'next'
import { PageHeader } from '@/components/page-header'
import { PageFooter } from '@/components/page-footer'

export const metadata: Metadata = {
  title: 'Storm Door Installation Irving TX | Protective Storm Doors',
  description: 'Professional storm door installation in Irving, TX. Protective storm doors for added security and energy efficiency from top manufacturers. Call 972-284-7995 for free estimate.',
  keywords: 'storm door installation Irving TX, storm doors, screen doors, door installation Irving',
}

export default function StormDoorPage() {
  return (
    <div className="min-h-screen bg-white">
      <PageHeader />

      {/* Hero */}
      <section className="relative min-h-[60vh] flex items-center pt-32">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(/doors/storm-doors-irving-tx.jpg)',
          }}
        />
        <div className="hero-overlay absolute inset-0" />
        
        <div className="relative z-10 w-full max-w-[1400px] mx-auto px-6 lg:px-12">
          <h1 className="text-heading-serif text-4xl md:text-5xl lg:text-6xl text-white font-light mb-6 max-w-3xl">
            Storm Door Replacement in Irving, TX
          </h1>
          <p className="text-white/90 text-lg md:text-xl max-w-2xl mb-8">
            Protective Storm Doors for Added Security and Energy Efficiency
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
                src="/doors/storm-doors-irving-tx.jpg"
                alt="Storm door installation in Irving home"
                className="w-full aspect-[4/5] object-cover"
              />
            </div>
            
            <div>
              <h2 className="text-heading-serif text-3xl md:text-4xl text-charcoal-900 font-light mb-6">
                Protection and versatility
              </h2>
              <p className="text-charcoal-600 text-base leading-relaxed mb-6">
                Storm doors add a protective barrier in front of your main entry door, extending its life while providing versatility through interchangeable glass and screen panels. For Irving homeowners, storm doors deliver multiple benefits: they protect expensive entry doors from weather exposure, provide ventilation while maintaining security, improve energy efficiency, and add an extra layer of protection during severe weather events.
              </p>
              <p className="text-charcoal-600 text-base leading-relaxed">
                Modern storm doors from quality manufacturers like Andersen, Pella, and JELD-WEN combine durable construction with attractive designs that complement rather than detract from your home&apos;s curb appeal.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Ventilation Benefits */}
      <section className="py-20 bg-stone-100">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-12">
          <h2 className="text-heading-serif text-3xl md:text-4xl text-charcoal-900 font-light mb-12">
            Secure Ventilation for Texas Weather
          </h2>
          <p className="text-charcoal-600 text-base leading-relaxed mb-6">
            Irving enjoys many pleasant spring and fall days when you want fresh air without fully opening your home. Storm doors allow you to open your main entry door for maximum ventilation while the locked storm door&apos;s screen panel maintains security. This capability proves particularly valuable for homes without adequate window ventilation or when you want cross-breeze through the entry.
          </p>
          <p className="text-charcoal-600 text-base leading-relaxed">
            Full-view storm doors feature a single large glass panel that lowers completely into the door, converting the entire opening to screen for maximum airflow. Retractable screen models keep the screen hidden when not needed, maintaining your entry door&apos;s appearance. This versatility makes storm doors a practical addition to Irving homes.
          </p>
        </div>
      </section>

      {/* Energy Efficiency */}
      <section className="py-20 bg-white">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-12">
          <h2 className="text-heading-serif text-3xl md:text-4xl text-charcoal-900 font-light mb-12">
            Energy Savings and Door Protection
          </h2>
          <p className="text-charcoal-600 text-base leading-relaxed mb-6">
            A storm door creates an insulating air space between itself and your entry door, reducing heat transfer and improving energy efficiency. During Irving&apos;s scorching summers, the storm door&apos;s Low-E glass reflects heat before it reaches your entry door, keeping your foyer cooler. In winter, the air gap provides additional insulation against heat loss.
          </p>
          <p className="text-charcoal-600 text-base leading-relaxed">
            Perhaps equally important, storm doors shield expensive entry doors from direct weather exposure. Sun, rain, and temperature extremes age entry doors prematurely. A quality storm door absorbs this abuse, protecting your entry door&apos;s finish and extending its life significantly. For homes with wood entry doors particularly, this protection justifies the storm door investment.
          </p>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 bg-stone-100">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-12">
          <h2 className="text-heading-serif text-3xl md:text-4xl text-charcoal-900 font-light text-center mb-16">
            Storm Door Features
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div>
              <h3 className="text-[13px] tracking-[0.15em] uppercase font-medium text-charcoal-900 mb-4">
                Secure Ventilation
              </h3>
              <p className="text-charcoal-600 text-sm leading-relaxed">
                Interchangeable glass and screen panels for fresh air with security.
              </p>
            </div>
            
            <div>
              <h3 className="text-[13px] tracking-[0.15em] uppercase font-medium text-charcoal-900 mb-4">
                Door Protection
              </h3>
              <p className="text-charcoal-600 text-sm leading-relaxed">
                Shields expensive entry doors from weather exposure and UV damage.
              </p>
            </div>
            
            <div>
              <h3 className="text-[13px] tracking-[0.15em] uppercase font-medium text-charcoal-900 mb-4">
                Energy Savings
              </h3>
              <p className="text-charcoal-600 text-sm leading-relaxed">
                Creates insulating air space for improved energy efficiency.
              </p>
            </div>
            
            <div>
              <h3 className="text-[13px] tracking-[0.15em] uppercase font-medium text-charcoal-900 mb-4">
                Durable Construction
              </h3>
              <p className="text-charcoal-600 text-sm leading-relaxed">
                Aluminum and steel frames resist rust and weathering.
              </p>
            </div>
            
            <div>
              <h3 className="text-[13px] tracking-[0.15em] uppercase font-medium text-charcoal-900 mb-4">
                Multiple Styles
              </h3>
              <p className="text-charcoal-600 text-sm leading-relaxed">
                Full-view, mid-view, and traditional designs to match any home.
              </p>
            </div>
            
            <div>
              <h3 className="text-[13px] tracking-[0.15em] uppercase font-medium text-charcoal-900 mb-4">
                Self-Closing
              </h3>
              <p className="text-charcoal-600 text-sm leading-relaxed">
                Pneumatic closers prevent slamming and ensure secure closure.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-12">
          <h2 className="text-heading-serif text-3xl md:text-4xl text-charcoal-900 font-light text-center mb-16">
            Frequently Asked Questions
          </h2>
          
          <div className="space-y-8 max-w-[900px] mx-auto">
            <div>
              <h3 className="text-[13px] tracking-[0.15em] uppercase font-medium text-charcoal-900 mb-3">
                Do I need a storm door in Irving, TX?
              </h3>
              <p className="text-charcoal-600 text-sm leading-relaxed">
                While not required, storm doors offer multiple benefits for Irving homes: they protect expensive entry doors from weather damage, provide ventilation with security, improve energy efficiency, and add a layer of protection during severe weather. Homes with wood entry doors particularly benefit from storm door protection against sun and moisture.
              </p>
            </div>
            
            <div>
              <h3 className="text-[13px] tracking-[0.15em] uppercase font-medium text-charcoal-900 mb-3">
                Will a storm door make my entryway hotter in summer?
              </h3>
              <p className="text-charcoal-600 text-sm leading-relaxed">
                Quality storm doors with Low-E glass actually reduce heat in your entryway by reflecting solar heat before it reaches your entry door. The key is selecting a storm door designed for southern climates with proper ventilation and heat-reflective glass. We help Irving homeowners choose storm doors optimized for Texas heat.
              </p>
            </div>
            
            <div>
              <h3 className="text-[13px] tracking-[0.15em] uppercase font-medium text-charcoal-900 mb-3">
                What is the difference between full-view and traditional storm doors?
              </h3>
              <p className="text-charcoal-600 text-sm leading-relaxed">
                Full-view storm doors feature a single large glass panel covering most of the door, often with a retractable screen. Traditional storm doors have glass in the upper portion and a panel or louvers below. Full-view doors provide more light and better views but may show dirt more readily. Traditional doors offer more privacy and often cost less.
              </p>
            </div>
            
            <div>
              <h3 className="text-[13px] tracking-[0.15em] uppercase font-medium text-charcoal-900 mb-3">
                How long does storm door installation take?
              </h3>
              <p className="text-charcoal-600 text-sm leading-relaxed">
                Professional storm door installation in Irving typically takes 2 to 4 hours. The process involves precise measurement, drilling mounting holes, installing hinges and closer, adjusting the door for proper operation, and ensuring weatherstripping creates a proper seal. We take care to avoid damaging your entry door or trim during installation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 md:py-32 bg-charcoal-500">
        <div className="max-w-[800px] mx-auto px-6 text-center">
          <h2 className="text-heading-serif text-3xl md:text-4xl text-white font-light mb-6 leading-relaxed">
            Ready to install a storm door in Irving?
          </h2>
          <p className="text-stone-300 text-base mb-10">
            Get a free consultation and quote for your storm door installation project.
          </p>
          <a href="/contact" className="btn-white">
            Get in Touch
          </a>
        </div>
      </section>

      <PageFooter />
    </div>
  )
}
