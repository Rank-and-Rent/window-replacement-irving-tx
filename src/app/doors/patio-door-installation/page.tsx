import type { Metadata } from 'next'
import { PageHeader } from '@/components/page-header'
import { PageFooter } from '@/components/page-footer'

export const metadata: Metadata = {
  title: 'Patio Door Installation Irving TX | Sliding & French Patio Doors',
  description: 'Patio doors for Mandalay Canal townhomes, Valley Ranch backyards, and Cottonwood Valley fairway homes. Sliding, hinged, French. Hail-rated glass, smooth Texas-summer glide.',
  keywords: 'patio door installation Irving TX, sliding glass doors, French patio doors, door installation Irving',
}

export default function PatioDoorPage() {
  return (
    <div className="min-h-screen bg-white">
      <PageHeader />

      {/* Hero */}
      <section className="relative min-h-[60vh] flex items-center pt-32">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(/doors/patio-doors-irving-tx.png)',
          }}
        />
        <div className="hero-overlay absolute inset-0" />
        
        <div className="relative z-10 w-full max-w-[1400px] mx-auto px-6 lg:px-12">
          <h1 className="text-heading-serif text-4xl md:text-5xl lg:text-6xl text-white font-light mb-6 max-w-3xl">
            Patio Door Replacement in Irving, TX
          </h1>
          <p className="text-white/90 text-lg md:text-xl max-w-2xl mb-8">
            Connect Indoor and Outdoor Living Spaces
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
                src="/doors/patio-doors-irving-tx.png"
                alt="Patio door installation in Irving home"
                className="w-full aspect-[4/5] object-cover"
              />
            </div>
            
            <div>
              <h2 className="text-heading-serif text-3xl md:text-4xl text-charcoal-900 font-light mb-6">
                Patio doors for the Irving outdoor room
              </h2>
              <p className="text-charcoal-600 text-base leading-relaxed mb-6">
                Irving patio doors handle a heavier seasonal load than most DFW suburbs. Cottonwood Valley fairway homes and Hackberry Creek estates push five-foot and eight-foot openings out to covered loggias for entertaining; Mandalay Canal townhomes need slim-frame sliders for tight balcony footprints; Valley Ranch backyards run wide-opening sliders or French swings to the pool deck. Each housing era brings its own measurement and structural reality.
              </p>
              <p className="text-charcoal-600 text-base leading-relaxed">
                We carry Andersen, Pella, JELD-WEN, and Marvin patio doors and recommend the right configuration based on the opening, exposure, and how the door gets used. Standard sliders for daily kitchen-to-patio traffic, French swings for the formal living room, multi-slide stacking units when the budget supports it.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Sliding vs Hinged */}
      <section className="py-20 bg-stone-100">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-12">
          <h2 className="text-heading-serif text-3xl md:text-4xl text-charcoal-900 font-light mb-12">
            Sliding vs Hinged: Choosing Your Configuration
          </h2>
          <p className="text-charcoal-600 text-base leading-relaxed mb-6">
            The fundamental decision in patio door selection involves operation style. Sliding patio doors glide horizontally on tracks, maximizing usable space since they require no clearance for door swing. This makes them ideal for patios with furniture near the door or smaller outdoor spaces where a swinging door would be impractical.
          </p>
          <p className="text-charcoal-600 text-base leading-relaxed mb-6">
            Modern sliding mechanisms feature stainless steel rollers and precision-engineered tracks that ensure smooth, quiet operation even after years of use. Hinged patio doors, including traditional French doors and modern multi-panel folding systems, swing open like standard doors but in much larger configurations.
          </p>
          <p className="text-charcoal-600 text-base leading-relaxed">
            They create dramatic, wide-open passages between spaces and often seal more tightly than sliding units, providing slightly better energy efficiency and weather protection. Irving homeowners choose sliding doors for contemporary homes and space-constrained situations, while hinged doors suit traditional architecture.
          </p>
        </div>
      </section>

      {/* Glass Options */}
      <section className="py-20 bg-white">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-12">
          <h2 className="text-heading-serif text-3xl md:text-4xl text-charcoal-900 font-light mb-12">
            Glass Options for Light, Views, and Privacy
          </h2>
          <p className="text-charcoal-600 text-base leading-relaxed mb-6">
            Patio doors are fundamentally about glass, and modern options extend far beyond basic clear panels. Low-E coatings reflect infrared heat while allowing visible light to pass through, dramatically reducing solar heat gain during Irving summers. Tinted glass further reduces glare and heat while maintaining views.
          </p>
          <p className="text-charcoal-600 text-base leading-relaxed">
            Privacy glass incorporates obscuring patterns or textures that allow light transmission while preventing clear views from outside—perfect for patio doors facing neighboring properties. Impact-resistant glass, becoming increasingly popular in Texas, withstands severe weather and provides additional security against break-ins.
          </p>
        </div>
      </section>

      {/* Energy Performance */}
      <section className="py-20 bg-stone-100">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-12">
          <h2 className="text-heading-serif text-3xl md:text-4xl text-charcoal-900 font-light mb-12">
            Energy Performance in Texas Heat
          </h2>
          <p className="text-charcoal-600 text-base leading-relaxed mb-6">
            A poorly performing patio door can account for significant energy waste in Irving homes, particularly given the large glass area involved. The best patio doors feature insulated frames, multi-pane glass units with argon or krypton gas fills, and comprehensive weatherstripping systems.
          </p>
          <p className="text-charcoal-600 text-base leading-relaxed">
            Frame material matters tremendously—vinyl and fiberglass naturally insulate better than aluminum, though modern aluminum doors incorporate thermal breaks to improve performance. On scorching Irving summer days when outdoor temperatures exceed 100 degrees, a high-performance patio door prevents radiant heat from turning your living room into an oven while still providing the views and light you installed it for.
          </p>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-12">
          <h2 className="text-heading-serif text-3xl md:text-4xl text-charcoal-900 font-light text-center mb-16">
            Patio Door Features
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div>
              <h3 className="text-[13px] tracking-[0.15em] uppercase font-medium text-charcoal-900 mb-4">
                Multiple Configurations
              </h3>
              <p className="text-charcoal-600 text-sm leading-relaxed">
                Sliding and hinged patio door configurations in fiberglass, vinyl, wood, and aluminum options.
              </p>
            </div>
            
            <div>
              <h3 className="text-[13px] tracking-[0.15em] uppercase font-medium text-charcoal-900 mb-4">
                Enhanced Security
              </h3>
              <p className="text-charcoal-600 text-sm leading-relaxed">
                Multi-point locking systems and impact-resistant glass for maximum security.
              </p>
            </div>
            
            <div>
              <h3 className="text-[13px] tracking-[0.15em] uppercase font-medium text-charcoal-900 mb-4">
                Energy Efficient
              </h3>
              <p className="text-charcoal-600 text-sm leading-relaxed">
                Low-E and tinted glass options with insulated glass units for superior energy performance.
              </p>
            </div>
            
            <div>
              <h3 className="text-[13px] tracking-[0.15em] uppercase font-medium text-charcoal-900 mb-4">
                Screen Systems
              </h3>
              <p className="text-charcoal-600 text-sm leading-relaxed">
                Retractable and traditional screen systems for comfortable outdoor living.
              </p>
            </div>
            
            <div>
              <h3 className="text-[13px] tracking-[0.15em] uppercase font-medium text-charcoal-900 mb-4">
                Custom Sizes
              </h3>
              <p className="text-charcoal-600 text-sm leading-relaxed">
                Available in custom sizes up to 16 feet wide to fit your specific opening.
              </p>
            </div>
            
            <div>
              <h3 className="text-[13px] tracking-[0.15em] uppercase font-medium text-charcoal-900 mb-4">
                Premium Brands
              </h3>
              <p className="text-charcoal-600 text-sm leading-relaxed">
                Andersen, Pella, JELD-WEN, and Marvin brands with comprehensive warranties.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-stone-100">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-12">
          <h2 className="text-heading-serif text-3xl md:text-4xl text-charcoal-900 font-light text-center mb-16">
            Frequently Asked Questions
          </h2>
          
          <div className="space-y-8 max-w-[900px] mx-auto">
            <div>
              <h3 className="text-[13px] tracking-[0.15em] uppercase font-medium text-charcoal-900 mb-3">
                What is better for Irving homes, sliding or French patio doors?
              </h3>
              <p className="text-charcoal-600 text-sm leading-relaxed">
                Both work excellently in Irving, TX—the choice depends on your specific situation. Sliding doors save space since they do not swing, making them ideal for patios with nearby furniture. French (hinged) doors suit traditional architecture and seal slightly tighter for maximum energy efficiency. We help you weigh factors like available space, architectural style, and usage patterns.
              </p>
            </div>
            
            <div>
              <h3 className="text-[13px] tracking-[0.15em] uppercase font-medium text-charcoal-900 mb-3">
                How do I prevent my patio door from leaking during heavy rain?
              </h3>
              <p className="text-charcoal-600 text-sm leading-relaxed">
                Quality patio doors properly installed in Irving, TX should not leak. The key factors include proper pan flashing under the threshold, correct sill slope to shed water away from the home, adequate clearance for drainage, and quality weatherstripping. We pay special attention to these details during installation.
              </p>
            </div>
            
            <div>
              <h3 className="text-[13px] tracking-[0.15em] uppercase font-medium text-charcoal-900 mb-3">
                Can I install a patio door where I currently have a window?
              </h3>
              <p className="text-charcoal-600 text-sm leading-relaxed">
                Yes, though it requires structural modifications including adding a beam or header to support the load above, removing wall framing, potentially building up the floor to match exterior grade, and ensuring the new opening meets code requirements. This is more involved than simple door installation but transforms a space.
              </p>
            </div>
            
            <div>
              <h3 className="text-[13px] tracking-[0.15em] uppercase font-medium text-charcoal-900 mb-3">
                How do I secure a patio door against break-ins?
              </h3>
              <p className="text-charcoal-600 text-sm leading-relaxed">
                Modern patio doors in Irving, TX offer excellent security through multi-point locking systems, reinforced frames, impact-resistant glass, and auxiliary security bars or panels for sliding doors. We recommend doors with locks that engage at three or more points and security bars that prevent lifting the door off its track.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-stone-100">
        <div className="max-w-[1100px] mx-auto px-6 lg:px-12">
          <h2 className="text-heading-serif text-3xl md:text-4xl text-charcoal-900 font-light mb-10">Patio Door questions Irving homeowners ask</h2>
          <div className="space-y-8">
            <div>
              <h3 className="text-lg font-medium text-charcoal-900 mb-3">How do patio doors fit my Irving home?</h3>
              <p className="text-charcoal-600 leading-relaxed">Patio doors connect the great room to the back yard and dictate how the home feels day-to-day. Almost every Irving Valley Ranch and Las Colinas home has at least one patio-door opening, patio doors are usually the right call when the homeowner wants a meaningful upgrade in performance, security, or aesthetic. We bring sample slabs, frame profiles, and hardware finishes to the consultation so you can compare options against your existing trim and millwork before deciding.</p>
            </div>
            <div>
              <h3 className="text-lg font-medium text-charcoal-900 mb-3">What materials hold up best in Irving&apos;s climate?</h3>
              <p className="text-charcoal-600 leading-relaxed">For Irving&apos;s heat and UV exposure, fiberglass and steel both hold up far better than wood when the door faces direct afternoon sun. Wood doors deliver authentic appearance and substantial feel but require periodic refinishing on west-facing elevations. We&apos;ll talk through the trade-offs and run cost-of-ownership numbers across a 20-year horizon so the decision factors in both upfront cost and long-term maintenance.</p>
            </div>
            <div>
              <h3 className="text-lg font-medium text-charcoal-900 mb-3">How secure are modern patio doors?</h3>
              <p className="text-charcoal-600 leading-relaxed">Current generation patio doors from Andersen, Pella, JELD-WEN, and Marvin all offer multi-point locking systems that engage the frame at three to five points along the height of the door, dramatically improving forced-entry resistance. Combined with a quality strike plate, three-inch screws into framing, and proper threshold installation, modern patio doors are substantially more secure than the doors most Irving homes shipped with originally.</p>
            </div>
            <div>
              <h3 className="text-lg font-medium text-charcoal-900 mb-3">What does the install involve?</h3>
              <p className="text-charcoal-600 leading-relaxed">A typical patio doors install in Irving runs four to eight hours depending on whether we&apos;re replacing the slab only or the full frame and threshold. We protect the surrounding floor with rosin paper, run dust collection on cuts, and HEPA vacuum at the end of each project. Most homeowners are surprised at how clean the process is when it&apos;s done by a careful crew.</p>
            </div>
            <div>
              <h3 className="text-lg font-medium text-charcoal-900 mb-3">What warranty coverage applies?</h3>
              <p className="text-charcoal-600 leading-relaxed">Every patio doors install includes the manufacturer warranty plus our written craftsmanship guarantee on the labor. Manufacturer warranties typically run 10 to 20 years on the slab and frame depending on product line, with shorter terms on hardware and finishes. Our craftsmanship guarantee covers the install workmanship for ten years; if a sash needs adjustment, weatherstripping fails, or hardware loosens during that period, we come back at no charge.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 md:py-32 bg-charcoal-500">
        <div className="max-w-[800px] mx-auto px-6 text-center">
          <h2 className="text-heading-serif text-3xl md:text-4xl text-white font-light mb-6 leading-relaxed">
            Ready to install a patio door in Irving?
          </h2>
          <p className="text-stone-300 text-base mb-10">
            Get a free consultation and quote for your patio door installation project.
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
