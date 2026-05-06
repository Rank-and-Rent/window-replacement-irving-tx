import type { Metadata } from 'next'
import { PageHeader } from '@/components/page-header'
import { PageFooter } from '@/components/page-footer'

export const metadata: Metadata = {
  title: 'French Door Installation Irving TX | Interior & Exterior French Doors',
  description: 'French doors for Hackberry Creek dining rooms, Cottonwood Valley garden walls, and Las Colinas study transitions. Astragal seals, divided lites, Marvin and Pella in stock.',
  keywords: 'French door installation Irving TX, French doors, double doors, door installation Irving',
}

export default function FrenchDoorPage() {
  return (
    <div className="min-h-screen bg-white">
      <PageHeader />

      {/* Hero */}
      <section className="relative min-h-[60vh] flex items-center pt-32">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(/doors/french-doors-irving-tx.png)',
          }}
        />
        <div className="hero-overlay absolute inset-0" />
        
        <div className="relative z-10 w-full max-w-[1400px] mx-auto px-6 lg:px-12">
          <h1 className="text-heading-serif text-4xl md:text-5xl lg:text-6xl text-white font-light mb-6 max-w-3xl">
            French Door Replacement in Irving, TX
          </h1>
          <p className="text-white/90 text-lg md:text-xl max-w-2xl mb-8">
            Classic Double Doors with Glass Panels for Elegant Transitions
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
                src="/doors/french-doors-irving-tx.png"
                alt="French door installation in Irving home"
                className="w-full aspect-[4/5] object-cover"
              />
            </div>
            
            <div>
              <h2 className="text-heading-serif text-3xl md:text-4xl text-charcoal-900 font-light mb-6">
                French doors for Irving formal-room transitions
              </h2>
              <p className="text-charcoal-600 text-base leading-relaxed mb-6">
                French doors are the spec we see most often on Hackberry Creek dining-to-loggia transitions, Cottonwood Valley study-to-garden walls, and Las Colinas penthouse interior partitions. They land where the priority is sightline, period detail, and a measurable architectural moment — not maximum opening size. Divided lites, six-pane or eight-pane patterns, and astragal seal hardware all matter to homes from the original 1980s Las Colinas builds and the historic Hospital District blocks.
              </p>
              <p className="text-charcoal-600 text-base leading-relaxed">
                Andersen, Pella, JELD-WEN, and Marvin all build French door lines with very different jamb depths and astragal hardware. The wrong substitution under a 1985 Las Colinas trim package will read as obviously aftermarket — we measure jamb depth and trim reveal before quoting.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Interior vs Exterior */}
      <section className="py-20 bg-stone-100">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-12">
          <h2 className="text-heading-serif text-3xl md:text-4xl text-charcoal-900 font-light mb-12">
            Interior and Exterior Applications
          </h2>
          <p className="text-charcoal-600 text-base leading-relaxed mb-6">
            Interior French doors elegantly separate spaces while maintaining visual connection and light flow. They work beautifully between dining rooms and kitchens, home offices and living areas, or primary bedrooms and sitting rooms. Interior French doors typically feature lighter construction since they don&apos;t face weather exposure, with glass options ranging from clear to privacy-enhancing patterns.
          </p>
          <p className="text-charcoal-600 text-base leading-relaxed">
            Exterior French doors, serving as patio or entry doors, require weather-resistant construction, insulated glass, and robust weatherstripping to handle Irving&apos;s climate extremes. Modern exterior French doors from Andersen, Pella, JELD-WEN, and Marvin combine traditional aesthetics with energy efficiency that rivals solid doors.
          </p>
        </div>
      </section>

      {/* Glass and Design */}
      <section className="py-20 bg-white">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-12">
          <h2 className="text-heading-serif text-3xl md:text-4xl text-charcoal-900 font-light mb-12">
            Glass and Design Options
          </h2>
          <p className="text-charcoal-600 text-base leading-relaxed mb-6">
            French doors offer extensive customization through glass selection and grille patterns. Traditional divided lites feature individual glass panes separated by wooden muntins, creating authentic period architecture. Modern simulated divided lites use grilles applied to or between glass panes, offering the classic look with easier maintenance and better energy performance.
          </p>
          <p className="text-charcoal-600 text-base leading-relaxed">
            Glass options include clear for maximum light and views, frosted or seeded for privacy while maintaining light transmission, and decorative patterns that add personality. For Irving homes, Low-E glass coatings on exterior French doors dramatically improve energy efficiency while allowing natural light to flood your interior spaces.
          </p>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 bg-stone-100">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-12">
          <h2 className="text-heading-serif text-3xl md:text-4xl text-charcoal-900 font-light text-center mb-16">
            French Door Features
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div>
              <h3 className="text-[13px] tracking-[0.15em] uppercase font-medium text-charcoal-900 mb-4">
                Interior & Exterior
              </h3>
              <p className="text-charcoal-600 text-sm leading-relaxed">
                Available for both interior and exterior applications in various materials and finishes.
              </p>
            </div>
            
            <div>
              <h3 className="text-[13px] tracking-[0.15em] uppercase font-medium text-charcoal-900 mb-4">
                Classic Design
              </h3>
              <p className="text-charcoal-600 text-sm leading-relaxed">
                Traditional full-length glass panels with customizable grille patterns.
              </p>
            </div>
            
            <div>
              <h3 className="text-[13px] tracking-[0.15em] uppercase font-medium text-charcoal-900 mb-4">
                Energy Efficient
              </h3>
              <p className="text-charcoal-600 text-sm leading-relaxed">
                Low-E glass and insulated construction for superior energy performance.
              </p>
            </div>
            
            <div>
              <h3 className="text-[13px] tracking-[0.15em] uppercase font-medium text-charcoal-900 mb-4">
                Premium Materials
              </h3>
              <p className="text-charcoal-600 text-sm leading-relaxed">
                Wood, fiberglass, and vinyl options from Andersen, Pella, JELD-WEN, and Marvin.
              </p>
            </div>
            
            <div>
              <h3 className="text-[13px] tracking-[0.15em] uppercase font-medium text-charcoal-900 mb-4">
                Custom Glass
              </h3>
              <p className="text-charcoal-600 text-sm leading-relaxed">
                Clear, frosted, seeded, or decorative glass options for any style.
              </p>
            </div>
            
            <div>
              <h3 className="text-[13px] tracking-[0.15em] uppercase font-medium text-charcoal-900 mb-4">
                Secure Locking
              </h3>
              <p className="text-charcoal-600 text-sm leading-relaxed">
                Multi-point locking systems for enhanced security on exterior installations.
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
                Do French doors provide good energy efficiency in Irving, TX?
              </h3>
              <p className="text-charcoal-600 text-sm leading-relaxed">
                Yes, modern exterior French doors with Low-E glass, insulated cores, and quality weatherstripping provide excellent energy efficiency. While they feature more glass than solid doors, advanced glass technology and proper installation ensure they perform well in Irving&apos;s climate.
              </p>
            </div>
            
            <div>
              <h3 className="text-[13px] tracking-[0.15em] uppercase font-medium text-charcoal-900 mb-3">
                Can I use French doors as my main entry door?
              </h3>
              <p className="text-charcoal-600 text-sm leading-relaxed">
                Absolutely. French doors make stunning entry doors that create an impressive first impression. Modern French entry doors include all the security features of standard entry doors, including multi-point locks, reinforced frames, and impact-resistant glass options.
              </p>
            </div>
            
            <div>
              <h3 className="text-[13px] tracking-[0.15em] uppercase font-medium text-charcoal-900 mb-3">
                What is the difference between French doors and patio doors?
              </h3>
              <p className="text-charcoal-600 text-sm leading-relaxed">
                French doors are a type of hinged patio door featuring glass panels that typically extend the full height of the door. While all French doors can be patio doors, not all patio doors are French doors—patio doors also include sliding glass doors. French doors offer a more traditional aesthetic compared to sliding patio doors.
              </p>
            </div>
            
            <div>
              <h3 className="text-[13px] tracking-[0.15em] uppercase font-medium text-charcoal-900 mb-3">
                Which panel of French doors should open first?
              </h3>
              <p className="text-charcoal-600 text-sm leading-relaxed">
                French doors can be configured with either panel as the active (primary opening) panel, or both panels can be active. For exterior applications, we typically recommend one active panel for daily use with the second panel secured by flush bolts that release to create a wide opening when needed. We help Irving homeowners choose the configuration that best suits their space and usage patterns.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-stone-100">
        <div className="max-w-[1100px] mx-auto px-6 lg:px-12">
          <h2 className="text-heading-serif text-3xl md:text-4xl text-charcoal-900 font-light mb-10">French Door questions Irving homeowners ask</h2>
          <div className="space-y-8">
            <div>
              <h3 className="text-lg font-medium text-charcoal-900 mb-3">How do French doors fit my Irving home?</h3>
              <p className="text-charcoal-600 leading-relaxed">French doors swing on traditional hinges and deliver a more architectural look than sliders. Common on Cottonwood Valley customs and Las Colinas Mediterranean homes, French doors are usually the right call when the homeowner wants a meaningful upgrade in performance, security, or aesthetic. We bring sample slabs, frame profiles, and hardware finishes to the consultation so you can compare options against your existing trim and millwork before deciding.</p>
            </div>
            <div>
              <h3 className="text-lg font-medium text-charcoal-900 mb-3">What materials hold up best in Irving&apos;s climate?</h3>
              <p className="text-charcoal-600 leading-relaxed">For Irving&apos;s heat and UV exposure, fiberglass and steel both hold up far better than wood when the door faces direct afternoon sun. Wood doors deliver authentic appearance and substantial feel but require periodic refinishing on west-facing elevations. We&apos;ll talk through the trade-offs and run cost-of-ownership numbers across a 20-year horizon so the decision factors in both upfront cost and long-term maintenance.</p>
            </div>
            <div>
              <h3 className="text-lg font-medium text-charcoal-900 mb-3">How secure are modern French doors?</h3>
              <p className="text-charcoal-600 leading-relaxed">Current generation French doors from Andersen, Pella, JELD-WEN, and Marvin all offer multi-point locking systems that engage the frame at three to five points along the height of the door, dramatically improving forced-entry resistance. Combined with a quality strike plate, three-inch screws into framing, and proper threshold installation, modern French doors are substantially more secure than the doors most Irving homes shipped with originally.</p>
            </div>
            <div>
              <h3 className="text-lg font-medium text-charcoal-900 mb-3">What does the install involve?</h3>
              <p className="text-charcoal-600 leading-relaxed">A typical French doors install in Irving runs four to eight hours depending on whether we&apos;re replacing the slab only or the full frame and threshold. We protect the surrounding floor with rosin paper, run dust collection on cuts, and HEPA vacuum at the end of each project. Most homeowners are surprised at how clean the process is when it&apos;s done by a careful crew.</p>
            </div>
            <div>
              <h3 className="text-lg font-medium text-charcoal-900 mb-3">What warranty coverage applies?</h3>
              <p className="text-charcoal-600 leading-relaxed">Every French doors install includes the manufacturer warranty plus our written craftsmanship guarantee on the labor. Manufacturer warranties typically run 10 to 20 years on the slab and frame depending on product line, with shorter terms on hardware and finishes. Our craftsmanship guarantee covers the install workmanship for ten years; if a sash needs adjustment, weatherstripping fails, or hardware loosens during that period, we come back at no charge.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-[1100px] mx-auto px-6 lg:px-12">
          <h2 className="text-heading-serif text-3xl md:text-4xl text-charcoal-900 font-light mb-8">French doors installation across Irving</h2>
          <p className="text-charcoal-600 leading-relaxed mb-4">We install french doors across every Irving neighborhood &mdash; from the established Plymouth Park ranches and the older Heritage District blocks to the Las Colinas mid-rise condos, the Valley Ranch family homes, the Cottonwood Valley custom estates, and the newer builds along the SH-161 corridor near DFW Airport. Each housing era brings its own framing, threshold, and aesthetic considerations that we work through during the field measurement.</p>
          <p className="text-charcoal-600 leading-relaxed mb-4">Our installers complete factory training for Andersen, Pella, JELD-WEN, and Marvin french doors. That training matters because each manufacturer has specific requirements for threshold installation, hinge alignment, multi-point lock setup, and weatherstripping geometry. A door installed using the wrong manufacturer&apos;s technique will operate fine for the first season and then start to bind, leak, or fail to latch cleanly.</p>
          <p className="text-charcoal-600 leading-relaxed">Most Irving french doors installs take four to eight hours per opening, depending on whether we&apos;re replacing the slab only or the full frame and threshold. We protect the floor with rosin paper, run dust collection on cuts, HEPA vacuum at completion, and walk the homeowner through operation and warranty registration before we leave the driveway.</p>
        </div>
      </section>

      <section className="py-24 md:py-32 bg-charcoal-500">
        <div className="max-w-[800px] mx-auto px-6 text-center">
          <h2 className="text-heading-serif text-3xl md:text-4xl text-white font-light mb-6 leading-relaxed">
            Ready to install French doors in Irving?
          </h2>
          <p className="text-stone-300 text-base mb-10">
            Get a free consultation and quote for your French door installation project.
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
