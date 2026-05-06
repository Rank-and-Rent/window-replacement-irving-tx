import type { Metadata } from 'next'
import { PageHeader } from '@/components/page-header'
import { PageFooter } from '@/components/page-footer'

export const metadata: Metadata = {
  title: 'Storm Door Installation Irving TX | Protective Storm Doors',
  description: 'Storm doors that shield Plymouth Park entries from west-facing sun and Valley Ranch porches from spring hail. Full-view, ventilating, and retractable-screen options.',
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
                Storm doors that earn their keep in Irving sun
              </h2>
              <p className="text-charcoal-600 text-base leading-relaxed mb-6">
                Storm doors do the most work in Irving on west-facing entries — Plymouth Park ranches, Valley Ranch front porches, La Villita rentals — where late-afternoon sun and wind-driven spring storms cook a wood entry door in two summers without one. The storm door takes the UV and hail load while the primary door stays clean. North Irving homes near DFW pull double duty for ventilation when an open primary door is desirable but a screen-only barrier is not.
              </p>
              <p className="text-charcoal-600 text-base leading-relaxed">
                We install Andersen, Pella, and JELD-WEN storm doors with full-view glass, retractable screens, and self-storing combo panels. Closer hardware specification matters: we tune the closer for Texas wind so the door does not slam in spring gusts.
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
      <section className="py-20 bg-stone-100">
        <div className="max-w-[1100px] mx-auto px-6 lg:px-12">
          <h2 className="text-heading-serif text-3xl md:text-4xl text-charcoal-900 font-light mb-10">Storm Door questions Irving homeowners ask</h2>
          <div className="space-y-8">
            <div>
              <h3 className="text-lg font-medium text-charcoal-900 mb-3">How do storm doors fit my Irving home?</h3>
              <p className="text-charcoal-600 leading-relaxed">Storm doors add a protective barrier in front of your main entry and extend its lifespan. Particularly helpful for Irving entry doors facing afternoon sun in Plymouth Park and the Heritage District, storm doors are usually the right call when the homeowner wants a meaningful upgrade in performance, security, or aesthetic. We bring sample slabs, frame profiles, and hardware finishes to the consultation so you can compare options against your existing trim and millwork before deciding.</p>
            </div>
            <div>
              <h3 className="text-lg font-medium text-charcoal-900 mb-3">What materials hold up best in Irving&apos;s climate?</h3>
              <p className="text-charcoal-600 leading-relaxed">For Irving&apos;s heat and UV exposure, fiberglass and steel both hold up far better than wood when the door faces direct afternoon sun. Wood doors deliver authentic appearance and substantial feel but require periodic refinishing on west-facing elevations. We&apos;ll talk through the trade-offs and run cost-of-ownership numbers across a 20-year horizon so the decision factors in both upfront cost and long-term maintenance.</p>
            </div>
            <div>
              <h3 className="text-lg font-medium text-charcoal-900 mb-3">How secure are modern storm doors?</h3>
              <p className="text-charcoal-600 leading-relaxed">Current generation storm doors from Andersen, Pella, JELD-WEN, and Marvin all offer multi-point locking systems that engage the frame at three to five points along the height of the door, dramatically improving forced-entry resistance. Combined with a quality strike plate, three-inch screws into framing, and proper threshold installation, modern storm doors are substantially more secure than the doors most Irving homes shipped with originally.</p>
            </div>
            <div>
              <h3 className="text-lg font-medium text-charcoal-900 mb-3">What does the install involve?</h3>
              <p className="text-charcoal-600 leading-relaxed">A typical storm doors install in Irving runs four to eight hours depending on whether we&apos;re replacing the slab only or the full frame and threshold. We protect the surrounding floor with rosin paper, run dust collection on cuts, and HEPA vacuum at the end of each project. Most homeowners are surprised at how clean the process is when it&apos;s done by a careful crew.</p>
            </div>
            <div>
              <h3 className="text-lg font-medium text-charcoal-900 mb-3">What warranty coverage applies?</h3>
              <p className="text-charcoal-600 leading-relaxed">Every storm doors install includes the manufacturer warranty plus our written craftsmanship guarantee on the labor. Manufacturer warranties typically run 10 to 20 years on the slab and frame depending on product line, with shorter terms on hardware and finishes. Our craftsmanship guarantee covers the install workmanship for ten years; if a sash needs adjustment, weatherstripping fails, or hardware loosens during that period, we come back at no charge.</p>
            </div>
          </div>
        </div>
      </section>

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
