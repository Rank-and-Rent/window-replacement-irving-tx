import type { Metadata } from 'next'
import { PageHeader } from '@/components/page-header'
import { PageFooter } from '@/components/page-footer'

export const metadata: Metadata = {
  title: 'Double-Hung Windows Irving TX | Energy Efficient Replacement',
  description: 'Premium double-hung window replacement in Irving, TX. Both sashes tilt for easy cleaning. Andersen, Pella & Jeld-Wen options. Superior ventilation & traditional elegance. Free quote: 972-284-7995',
}

export default function DoubleHungWindowsPage() {
  return (
    <div className="min-h-screen bg-white">
      <PageHeader />

      {/* Hero */}
      <section className="relative min-h-[60vh] flex items-center pt-32">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(/windows/double-hung-windows-irving-tx.avif)',
          }}
        />
        <div className="hero-overlay absolute inset-0" />
        
        <div className="relative z-10 w-full max-w-[1400px] mx-auto px-6 lg:px-12">
          <h1 className="text-heading-serif text-4xl md:text-5xl lg:text-6xl text-white font-light mb-6 max-w-3xl">
            Double-Hung Window Replacement in Irving, TX
          </h1>
          <p className="text-white/90 text-lg md:text-xl max-w-2xl mb-8">
            The timeless choice for Texas homes. Both sashes operate independently, offering unmatched versatility and classic appeal that complements any architectural style.
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
                src="/windows/double-hung-windows-irving-tx.avif"
                alt="Double-hung window in modern Irving home"
                className="w-full aspect-[4/5] object-cover"
              />
            </div>
            
            <div>
              <h2 className="text-heading-serif text-3xl md:text-4xl text-charcoal-900 font-light mb-6">
                Why Irving homeowners choose double-hung windows
              </h2>
              <p className="text-charcoal-600 text-base leading-relaxed mb-6">
                Double-hung windows remain the most popular window style in Irving and throughout North Texas for compelling reasons. Both the upper and lower sashes slide vertically and tilt inward, making them remarkably practical for our Texas climate while maintaining the traditional aesthetic that defines so many Irving neighborhoods.
              </p>
              <p className="text-charcoal-600 text-base leading-relaxed mb-6">
                The dual-operability creates superior ventilation control—open the top sash to release hot air trapped at the ceiling level during Irving's scorching summers, while the bottom sash draws in cooler air from ground level. This natural convection reduces your reliance on air conditioning and lowers energy bills substantially.
              </p>
              <p className="text-charcoal-600 text-base leading-relaxed">
                Modern double-hung windows from Andersen, Pella, and Jeld-Wen feature advanced weatherstripping and Low-E glass coatings specifically engineered for Texas's extreme temperature swings. The tilt-in sash design means you can clean both sides of the glass from inside your home—a significant advantage for second-story installations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Grid */}
      <section className="py-20 bg-stone-100">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-12">
          <h2 className="text-heading-serif text-3xl md:text-4xl text-charcoal-900 font-light text-center mb-16">
            Double-hung window advantages for Irving homes
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div>
              <h3 className="text-[13px] tracking-[0.15em] uppercase font-medium text-charcoal-900 mb-4">
                Easy Maintenance
              </h3>
              <p className="text-charcoal-600 text-sm leading-relaxed">
                Both sashes tilt into your home for effortless cleaning from the inside. No ladders needed for second-story windows, no hiring professional cleaners. Simply unlock, tilt, clean, and you're done in minutes.
              </p>
            </div>
            
            <div>
              <h3 className="text-[13px] tracking-[0.15em] uppercase font-medium text-charcoal-900 mb-4">
                Superior Ventilation
              </h3>
              <p className="text-charcoal-600 text-sm leading-relaxed">
                Open both sashes simultaneously to maximize airflow during pleasant Texas spring and fall evenings. Control exactly how much air enters by adjusting each sash independently—impossible with single-hung alternatives.
              </p>
            </div>
            
            <div>
              <h3 className="text-[13px] tracking-[0.15em] uppercase font-medium text-charcoal-900 mb-4">
                Child Safety Features
              </h3>
              <p className="text-charcoal-600 text-sm leading-relaxed">
                Open the top sash while keeping the bottom locked, allowing fresh air circulation while preventing young children from accessing the window opening. Irving families with kids particularly value this safety advantage.
              </p>
            </div>
            
            <div>
              <h3 className="text-[13px] tracking-[0.15em] uppercase font-medium text-charcoal-900 mb-4">
                Energy Efficiency
              </h3>
              <p className="text-charcoal-600 text-sm leading-relaxed">
                Modern double-hung windows achieve U-factors as low as 0.27, meeting Texas energy codes with room to spare. Triple weatherstripping and insulated frames prevent conditioned air loss even during 100°F summer days.
              </p>
            </div>
            
            <div>
              <h3 className="text-[13px] tracking-[0.15em] uppercase font-medium text-charcoal-900 mb-4">
                Architectural Versatility
              </h3>
              <p className="text-charcoal-600 text-sm leading-relaxed">
                Double-hung windows complement every Irving architectural style—from historic craftsman bungalows to contemporary new construction. Available in numerous grid patterns, colors, and materials to match your home's character.
              </p>
            </div>
            
            <div>
              <h3 className="text-[13px] tracking-[0.15em] uppercase font-medium text-charcoal-900 mb-4">
                Enhanced Resale Value
              </h3>
              <p className="text-charcoal-600 text-sm leading-relaxed">
                Irving real estate agents confirm that quality double-hung windows significantly boost home values. Buyers appreciate the combination of classic aesthetics, modern performance, and low maintenance requirements.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Material Options */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-12">
          <h2 className="text-heading-serif text-3xl md:text-4xl text-charcoal-900 font-light mb-12">
            Choose your ideal double-hung window material
          </h2>
          
          <div className="space-y-12">
            <div>
              <h3 className="text-2xl font-light text-charcoal-900 mb-4">Vinyl Double-Hung Windows</h3>
              <p className="text-charcoal-600 leading-relaxed mb-4">
                Vinyl dominates the Irving replacement window market for good reason—exceptional thermal performance at accessible price points. Modern vinyl formulations resist Texas UV exposure without fading, warping, or requiring paint. The hollow chambers within vinyl frames can be foam-filled for additional insulation value, making them ideal for Irving's energy-conscious homeowners.
              </p>
              <p className="text-charcoal-600 leading-relaxed">
                Our Andersen 400 Series and Pella 250 Series vinyl double-hung windows feature fusion-welded corners that eliminate air infiltration points. Available in numerous exterior colors beyond standard white, though interior colors remain limited to white or beige.
              </p>
            </div>
            
            <div>
              <h3 className="text-2xl font-light text-charcoal-900 mb-4">Wood Double-Hung Windows</h3>
              <p className="text-charcoal-600 leading-relaxed mb-4">
                For Irving's historic homes and luxury new construction, nothing matches wood's natural beauty and authentic character. Wood double-hung windows can be stained to showcase natural grain patterns or painted in unlimited custom colors. The Andersen A-Series offers Ponderosa Pine interiors that accept stain beautifully while maintaining vinyl-clad exteriors for weather protection.
              </p>
              <p className="text-charcoal-600 leading-relaxed">
                Wood provides natural insulation properties superior to vinyl or aluminum, though it requires periodic maintenance. Many Irving homeowners consider the maintenance worthwhile for wood's unmistakable premium appearance and feel. Wood windows particularly enhance property values in established Irving neighborhoods where architectural authenticity matters.
              </p>
            </div>
            
            <div>
              <h3 className="text-2xl font-light text-charcoal-900 mb-4">Fiberglass Double-Hung Windows</h3>
              <p className="text-charcoal-600 leading-relaxed mb-4">
                Fiberglass represents the ultimate in durability and thermal performance, though at premium pricing. Pella Impervia and Andersen Architectural Collection fiberglass double-hung windows withstand Texas's punishing climate better than any alternative material. Fiberglass won't rot, warp, corrode, or deteriorate even after decades of Irving's temperature extremes.
              </p>
              <p className="text-charcoal-600 leading-relaxed">
                The fiberglass frame's low expansion/contraction coefficient matches glass itself, maintaining weather seals far longer than vinyl alternatives. Fiberglass accepts paint if desired, though its low-maintenance surface needs repainting far less frequently than wood. Irving homeowners investing in forever homes increasingly specify fiberglass for its exceptional longevity.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Installation Process */}
      <section className="py-20 bg-charcoal-500">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-12">
          <h2 className="text-heading-serif text-3xl md:text-4xl text-white font-light mb-12">
            Our Irving double-hung window installation process
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
                Your double-hung windows are built to your exact specifications at Andersen, Pella, or Jeld-Wen facilities. Factory quality control ensures perfect operation before shipping to Irving.
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
                We test each sash for smooth operation, verify weatherstripping seals properly, and ensure locks engage securely. Your satisfaction is confirmed before our crew leaves your Irving property.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-stone-100">
        <div className="max-w-[800px] mx-auto px-6 text-center">
          <h2 className="text-heading-serif text-3xl md:text-4xl text-charcoal-900 font-light mb-8">
            Ready to upgrade your Irving home with premium double-hung windows?
          </h2>
          <p className="text-charcoal-600 mb-10">
            Schedule your free in-home consultation. We'll measure your openings, discuss material options, and provide transparent pricing with no pressure.
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



