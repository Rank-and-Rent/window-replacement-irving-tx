import type { Metadata } from 'next'
import { PageHeader } from '@/components/page-header'
import { PageFooter } from '@/components/page-footer'

export const metadata: Metadata = {
  title: 'Sliding Glass Door Installation Irving TX | Space-Saving Patio Doors',
  description: 'Professional sliding glass door installation in Irving, TX. Space-saving sliding doors with expansive glass panels from Andersen, Pella, JELD-WEN, Marvin. Call 972-284-7995.',
  keywords: 'sliding glass door installation Irving TX, sliding patio doors, glass doors, door installation Irving',
}

export default function SlidingGlassDoorPage() {
  return (
    <div className="min-h-screen bg-white">
      <PageHeader />

      {/* Hero */}
      <section className="relative min-h-[60vh] flex items-center pt-32">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(/doors/sliding-glass-doors-irving-tx.avif)',
          }}
        />
        <div className="hero-overlay absolute inset-0" />
        
        <div className="relative z-10 w-full max-w-[1400px] mx-auto px-6 lg:px-12">
          <h1 className="text-heading-serif text-4xl md:text-5xl lg:text-6xl text-white font-light mb-6 max-w-3xl">
            Sliding Glass Door Replacement in Irving, TX
          </h1>
          <p className="text-white/90 text-lg md:text-xl max-w-2xl mb-8">
            Space-Saving Sliding Doors with Expansive Glass Panels
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
                src="/doors/sliding-glass-doors-irving-tx.avif"
                alt="Sliding glass door installation in Irving home"
                className="w-full aspect-[4/5] object-cover"
              />
            </div>
            
            <div>
              <h2 className="text-heading-serif text-3xl md:text-4xl text-charcoal-900 font-light mb-6">
                Maximize your views and space
              </h2>
              <p className="text-charcoal-600 text-base leading-relaxed mb-6">
                Sliding glass doors provide the perfect solution for Irving homes seeking maximum outdoor views and indoor-outdoor connectivity without sacrificing interior or exterior space. Unlike hinged doors that require clearance for their swing arc, sliding glass doors glide horizontally on precision-engineered tracks, making them ideal for rooms with furniture near the door or patios with limited space.
              </p>
              <p className="text-charcoal-600 text-base leading-relaxed">
                Modern sliding glass doors from Andersen, Pella, JELD-WEN, and Marvin feature expansive glass areas that flood rooms with natural light while framing spectacular views of your outdoor spaces.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Smooth Operation */}
      <section className="py-20 bg-stone-100">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-12">
          <h2 className="text-heading-serif text-3xl md:text-4xl text-charcoal-900 font-light mb-12">
            Smooth, Quiet Operation Built to Last
          </h2>
          <p className="text-charcoal-600 text-base leading-relaxed mb-6">
            The quality of a sliding glass door reveals itself in daily operation. Premium doors glide effortlessly with a gentle touch, thanks to stainless steel or nylon rollers riding on precision-milled aluminum tracks. Ball-bearing roller systems found in high-end models provide even smoother operation and exceptional longevity—these doors glide as effortlessly after twenty years as they did on installation day.
          </p>
          <p className="text-charcoal-600 text-base leading-relaxed">
            The track design incorporates multiple channels for drainage, preventing water accumulation that causes operational issues. Adjustable rollers allow periodic height adjustment to maintain proper weatherstripping contact as homes settle over time. When properly installed and maintained, quality sliding glass doors deliver decades of trouble-free operation.
          </p>
        </div>
      </section>

      {/* Energy Efficiency */}
      <section className="py-20 bg-white">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-12">
          <h2 className="text-heading-serif text-3xl md:text-4xl text-charcoal-900 font-light mb-12">
            Energy Performance in Irving&apos;s Climate
          </h2>
          <p className="text-charcoal-600 text-base leading-relaxed mb-6">
            Given their large glass area, energy efficiency is critical for sliding glass doors in Irving. Modern units feature dual or triple-pane insulated glass units with Low-E coatings that reflect heat while allowing visible light to pass through. Argon or krypton gas fills between panes provide additional insulation beyond standard air gaps.
          </p>
          <p className="text-charcoal-600 text-base leading-relaxed">
            Frame materials significantly impact energy performance. Vinyl and fiberglass frames provide superior insulation compared to traditional aluminum, though modern aluminum doors incorporate thermal breaks that prevent heat transfer through the frame. The weatherstripping system creates an airtight seal when closed, preventing drafts and energy waste. For Irving homeowners, these features mean reduced cooling costs during brutal Texas summers while maintaining the expansive views and natural light that make sliding glass doors so appealing.
          </p>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 bg-stone-100">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-12">
          <h2 className="text-heading-serif text-3xl md:text-4xl text-charcoal-900 font-light text-center mb-16">
            Sliding Glass Door Features
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div>
              <h3 className="text-[13px] tracking-[0.15em] uppercase font-medium text-charcoal-900 mb-4">
                Space-Saving Design
              </h3>
              <p className="text-charcoal-600 text-sm leading-relaxed">
                No swing clearance required—perfect for rooms with furniture near the door.
              </p>
            </div>
            
            <div>
              <h3 className="text-[13px] tracking-[0.15em] uppercase font-medium text-charcoal-900 mb-4">
                Smooth Operation
              </h3>
              <p className="text-charcoal-600 text-sm leading-relaxed">
                Precision rollers and tracks ensure effortless gliding for decades.
              </p>
            </div>
            
            <div>
              <h3 className="text-[13px] tracking-[0.15em] uppercase font-medium text-charcoal-900 mb-4">
                Energy Efficient
              </h3>
              <p className="text-charcoal-600 text-sm leading-relaxed">
                Low-E glass and insulated frames reduce energy costs.
              </p>
            </div>
            
            <div>
              <h3 className="text-[13px] tracking-[0.15em] uppercase font-medium text-charcoal-900 mb-4">
                Expansive Glass
              </h3>
              <p className="text-charcoal-600 text-sm leading-relaxed">
                Large glass panels flood rooms with natural light and frame outdoor views.
              </p>
            </div>
            
            <div>
              <h3 className="text-[13px] tracking-[0.15em] uppercase font-medium text-charcoal-900 mb-4">
                Multiple Materials
              </h3>
              <p className="text-charcoal-600 text-sm leading-relaxed">
                Vinyl, fiberglass, wood, and aluminum frame options available.
              </p>
            </div>
            
            <div>
              <h3 className="text-[13px] tracking-[0.15em] uppercase font-medium text-charcoal-900 mb-4">
                Enhanced Security
              </h3>
              <p className="text-charcoal-600 text-sm leading-relaxed">
                Multi-point locks and anti-lift devices provide maximum security.
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
                How do I keep my sliding glass door secure in Irving?
              </h3>
              <p className="text-charcoal-600 text-sm leading-relaxed">
                Modern sliding glass doors include multiple security features: multi-point locking systems, reinforced frames, impact-resistant glass options, and anti-lift devices that prevent the door from being lifted off its track. We recommend doors with locks engaging at three or more points and installing a security bar for additional protection when you&apos;re away.
              </p>
            </div>
            
            <div>
              <h3 className="text-[13px] tracking-[0.15em] uppercase font-medium text-charcoal-900 mb-3">
                Why is my sliding glass door hard to open?
              </h3>
              <p className="text-charcoal-600 text-sm leading-relaxed">
                Difficulty opening sliding glass doors typically results from dirty tracks, worn rollers, or misalignment. Regular track cleaning removes debris that impedes operation. Adjustable rollers can be raised to restore smooth gliding. If rollers are worn, we can replace them without replacing the entire door. Professional maintenance can restore smooth operation to most sliding glass doors.
              </p>
            </div>
            
            <div>
              <h3 className="text-[13px] tracking-[0.15em] uppercase font-medium text-charcoal-900 mb-3">
                Can I get a sliding screen door for my sliding glass door?
              </h3>
              <p className="text-charcoal-600 text-sm leading-relaxed">
                Yes, all quality sliding glass doors include or accommodate sliding screen doors. Standard sliding screens move on their own track, allowing independent operation. Retractable screens, increasingly popular in Irving, hide in a side housing when not needed and pull across when you want ventilation. We help you select the screen system that best fits your needs.
              </p>
            </div>
            
            <div>
              <h3 className="text-[13px] tracking-[0.15em] uppercase font-medium text-charcoal-900 mb-3">
                What sizes do sliding glass doors come in?
              </h3>
              <p className="text-charcoal-600 text-sm leading-relaxed">
                Standard sliding glass doors typically measure 6 feet or 8 feet wide by 6 feet 8 inches or 8 feet tall. Three-panel and four-panel configurations extend wider for larger openings. Custom sizes accommodate non-standard openings. We measure precisely and recommend the configuration that best fits your opening and usage requirements.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 md:py-32 bg-charcoal-500">
        <div className="max-w-[800px] mx-auto px-6 text-center">
          <h2 className="text-heading-serif text-3xl md:text-4xl text-white font-light mb-6 leading-relaxed">
            Ready to install a sliding glass door in Irving?
          </h2>
          <p className="text-stone-300 text-base mb-10">
            Get a free consultation and quote for your sliding glass door installation project.
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
