import type { Metadata } from 'next'
import { PageHeader } from '@/components/page-header'
import { PageFooter } from '@/components/page-footer'

export const metadata: Metadata = {
  title: 'Patio Door Installation Irving TX | Sliding & French Patio Doors',
  description: 'Professional patio door installation in Irving, TX. Sliding and hinged patio doors from Andersen, Pella, JELD-WEN, and Marvin. Energy-efficient, beautiful, secure. Free estimates. Call 972-284-7995.',
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
                Seamless indoor-outdoor living
              </h2>
              <p className="text-charcoal-600 text-base leading-relaxed mb-6">
                Patio doors serve as the gateway between your Irving home&apos;s interior and outdoor living spaces, fundamentally shaping how you experience your property. Whether you envision lazy weekend mornings with coffee on the patio, summer evening barbecues with seamless guest flow, or simply bathing your living room in natural Texas light, the right patio door transforms daily life.
              </p>
              <p className="text-charcoal-600 text-base leading-relaxed">
                Modern patio doors from Andersen, Pella, JELD-WEN, and Marvin deliver expansive glass areas for unobstructed views, smooth operation that lasts for decades, and energy efficiency that keeps your home comfortable despite Irving&apos;s temperature extremes.
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
