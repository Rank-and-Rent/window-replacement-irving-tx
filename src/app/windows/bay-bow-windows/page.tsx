import type { Metadata } from 'next'
import { PageHeader } from '@/components/page-header'
import { PageFooter } from '@/components/page-footer'

export const metadata: Metadata = {
  title: 'Bay & Bow Windows Irving TX | Architectural Window Installation',
  description: 'Bay and bow window replacement in Irving, TX. Add space, light & dimension. Andersen, Pella & Jeld-Wen projecting windows. Transform your home. 972-284-7995',
}

export default function BayBowWindowsPage() {
  return (
    <div className="min-h-screen bg-white">
      <PageHeader />

      <section className="relative min-h-[60vh] flex items-center pt-32">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=1920&q=80)',
          }}
        />
        <div className="hero-overlay absolute inset-0" />
        
        <div className="relative z-10 w-full max-w-[1400px] mx-auto px-6 lg:px-12">
          <h1 className="text-heading-serif text-4xl md:text-5xl lg:text-6xl text-white font-light mb-6 max-w-3xl">
            Bay & Bow Windows in Irving, TX
          </h1>
          <p className="text-white/90 text-lg md:text-xl max-w-2xl mb-8">
            Architectural statements that expand your living space. Bay and bow windows project outward, creating interior dimension while flooding rooms with multi-directional natural light.
          </p>
          <a href="/contact" className="btn-white">
            Transform Your Home
          </a>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <h2 className="text-heading-serif text-3xl md:text-4xl text-charcoal-900 font-light mb-6">
                Creating space and drama in Irving homes
              </h2>
              <p className="text-charcoal-600 text-base leading-relaxed mb-6">
                Bay and bow windows don't merely replace existing openings—they physically expand your Irving home's interior dimensions while transforming exterior architecture. These projecting window systems extend 12-18 inches beyond your home's wall plane, creating interior alcoves perfect for reading nooks, plant displays, or simply additional livable square footage. It's one of the few remodeling projects that genuinely adds space without traditional construction costs.
              </p>
              <p className="text-charcoal-600 text-base leading-relaxed mb-6">
                The multi-angled design captures sunlight from three or more directions throughout the day, maximizing natural illumination in ways single-plane windows cannot. Morning eastern light, midday southern exposure, and afternoon western rays all enter simultaneously—dramatically reducing artificial lighting needs and creating bright, welcoming spaces that feel larger than their actual dimensions. Irving homeowners consistently report bay and bow windows making rooms feel 30-40% more spacious.
              </p>
              <p className="text-charcoal-600 text-base leading-relaxed">
                From the exterior, bay and bow windows create distinctive architectural character that significantly enhances curb appeal and property values. Real estate agents confirm these windows deliver among the highest returns on investment of any window replacement—often recouping 75-85% of installation costs at resale while providing daily enjoyment throughout ownership.
              </p>
            </div>
            
            <div>
              <img
                src="https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=1000&q=80"
                alt="Bay window interior view"
                className="w-full aspect-[4/5] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-stone-100">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-12">
          <h2 className="text-heading-serif text-3xl md:text-4xl text-charcoal-900 font-light text-center mb-16">
            Bay windows vs. bow windows
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-white p-8">
              <h3 className="text-2xl font-light text-charcoal-900 mb-6">Bay Windows</h3>
              <p className="text-charcoal-600 leading-relaxed mb-6">
                Bay windows typically consist of three window units—a large center picture window flanked by smaller double-hung or casement windows angled at 30 or 45 degrees. This three-part configuration creates defined angles and a geometric appearance that complements traditional Irving architectural styles including Colonial, Victorian, and Craftsman homes.
              </p>
              <p className="text-charcoal-600 leading-relaxed mb-6">
                The angular bay design projects farther from the wall than bow configurations—typically 16-18 inches—creating more pronounced interior space gain. This makes bay windows ideal for creating window seats with storage below, plant display areas, or breakfast nook extensions in Irving kitchens.
              </p>
              <p className="text-charcoal-600 leading-relaxed">
                Side windows in bay configurations usually operate for ventilation while the center remains fixed for maximum glass area. This provides both the expansive view of a picture window and practical airflow from operable sides—a functional combination Irving homeowners appreciate year-round.
              </p>
            </div>
            
            <div className="bg-white p-8">
              <h3 className="text-2xl font-light text-charcoal-900 mb-6">Bow Windows</h3>
              <p className="text-charcoal-600 leading-relaxed mb-6">
                Bow windows feature four, five, or six equal-sized window units arranged in a gentle curve rather than sharp angles. This curved configuration creates a more subtle, elegant appearance that particularly complements contemporary and transitional Irving architecture. The smooth arc feels less imposing than bay windows' angular geometry.
              </p>
              <p className="text-charcoal-600 leading-relaxed mb-6">
                While bow windows project less dramatically than bay windows—typically 12-14 inches—the curved design provides more wall area for the same width opening. This means more total glass, more light transmission, and more panoramic views. Bow windows excel in great rooms and master bedrooms where visual impact matters.
              </p>
              <p className="text-charcoal-600 leading-relaxed">
                Multiple casement or double-hung units in bow configurations allow flexible ventilation control. Open just the center units for focused airflow, or open all operable panels for maximum cross-ventilation during pleasant Texas weather. This versatility makes bow windows practical performers despite their dramatic appearance.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-12">
          <h2 className="text-heading-serif text-3xl md:text-4xl text-charcoal-900 font-light mb-12">
            Installation considerations for Irving homes
          </h2>
          
          <div className="space-y-12">
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              <div>
                <h3 className="text-2xl font-light text-charcoal-900 mb-4">Structural Requirements</h3>
                <p className="text-charcoal-600 leading-relaxed mb-4">
                  Bay and bow windows require engineered support systems because they project beyond your home's wall structure. The window assembly's weight—often 200-400 pounds with glass—must be carried by brackets or cables properly anchored to your Irving home's framing. This isn't DIY territory; professional installation ensures structural integrity and long-term performance.
                </p>
                <p className="text-charcoal-600 leading-relaxed mb-4">
                  Our factory-trained installers verify framing adequacy before beginning installation. In rare cases where original framing is insufficient, we reinforce headers and supports to meet current building codes. This upfront structural evaluation prevents future problems like sagging, water infiltration, or even window failure.
                </p>
                <p className="text-charcoal-600 leading-relaxed">
                  Modern bay and bow window systems from Andersen, Pella, and Jeld-Wen include engineered support systems designed for their specific sizes and weights. These pre-engineered solutions eliminate guesswork while ensuring compliance with Texas wind load requirements—critical in a state where severe weather is routine rather than exceptional.
                </p>
              </div>
              <img
                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80"
                alt="Bay window structural support"
                className="w-full aspect-[4/3] object-cover"
              />
            </div>
            
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              <img
                src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80"
                alt="Bay window roofing detail"
                className="w-full aspect-[4/3] object-cover order-2 lg:order-1"
              />
              <div className="order-1 lg:order-2">
                <h3 className="text-2xl font-light text-charcoal-900 mb-4">Roofing and Weatherproofing</h3>
                <p className="text-charcoal-600 leading-relaxed mb-4">
                  Bay and bow windows project beyond your Irving home's roofline, requiring independent roof systems to shed rain and prevent leaks. Quality installations include custom copper, aluminum, or composite roofing matched to your home's aesthetics. Proper flashing integration with existing siding is critical—shortcuts here lead to expensive water damage.
                </p>
                <p className="text-charcoal-600 leading-relaxed mb-4">
                  Interior finishing includes custom trim work concealing the transition between the projecting window and your home's interior wall. Skilled carpentry makes this transition appear intentional and elegant rather than added-on. Many Irving homeowners add decorative corbels or brackets beneath bay windows to enhance the architectural statement.
                </p>
                <p className="text-charcoal-600 leading-relaxed">
                  Insulation beneath the projecting window floor prevents cold air pockets during winter and heat buildup in summer. Without proper insulation, the bay or bow window's extended floor becomes uncomfortably cold or hot—wasting the space you invested to create. Our installations include full insulation and proper air sealing for year-round comfort.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-charcoal-500">
        <div className="max-w-[1000px] mx-auto px-6 lg:px-12">
          <h2 className="text-heading-serif text-3xl md:text-4xl text-white font-light mb-8 text-center">
            Designing your Irving bay or bow window
          </h2>
          <div className="space-y-6 text-stone-300 text-lg leading-relaxed">
            <p>
              Work with our design consultants to select projection depth, angle configurations, and window types that optimize your specific Irving room. Living rooms and dining rooms often benefit from maximum projection and seating depth, while smaller rooms might require shallower designs to maintain furniture placement options.
            </p>
            <p>
              Choose exterior colors and interior finishes that integrate seamlessly with your home's existing palette. Black or bronze exteriors create contemporary contrast, while white or tan blends traditionally. Interior wood options add warmth and can be stained to match existing trim throughout your Irving home.
            </p>
            <p>
              Consider built-in window seats with lift-up storage to maximize the functional return on your bay or bow window investment. These custom features transform the projecting space into practical storage and seating—adding value beyond the window itself.
            </p>
          </div>
        </div>
      </section>

      <section className="py-24 bg-stone-100">
        <div className="max-w-[800px] mx-auto px-6 text-center">
          <h2 className="text-heading-serif text-3xl md:text-4xl text-charcoal-900 font-light mb-8">
            Transform your Irving home with a bay or bow window
          </h2>
          <p className="text-charcoal-600 mb-10">
            Schedule a consultation to explore bay and bow window possibilities. We'll assess your home's structure, discuss design options, and provide transparent pricing for this dramatic upgrade to your Irving property.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/contact" className="btn-outline-dark">
              Schedule Design Consultation
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

