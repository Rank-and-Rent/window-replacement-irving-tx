import type { Metadata } from 'next'
import { PageHeader } from '@/components/page-header'
import { PageFooter } from '@/components/page-footer'

export const metadata: Metadata = {
  title: 'Sliding Windows Irving TX | Horizontal Gliding Window Replacement',
  description: 'Sliding window replacement in Irving, TX. Space-saving horizontal operation, wide views. Perfect for patios & tight spaces. Andersen, Pella & Jeld-Wen. 972-284-7995',
}

export default function SlidingWindowsPage() {
  return (
    <div className="min-h-screen bg-white">
      <PageHeader />

      <section className="relative min-h-[60vh] flex items-center pt-32">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(/windows/sliding-windows-irving-tx.webp)',
          }}
        />
        <div className="hero-overlay absolute inset-0" />
        
        <div className="relative z-10 w-full max-w-[1400px] mx-auto px-6 lg:px-12">
          <h1 className="text-heading-serif text-4xl md:text-5xl lg:text-6xl text-white font-light mb-6 max-w-3xl">
            Sliding Windows in Irving, TX
          </h1>
          <p className="text-white/90 text-lg md:text-xl max-w-2xl mb-8">
            Horizontal elegance that saves space. Sliding windows glide effortlessly on tracks, perfect for areas where outward-swinging windows aren't practical.
          </p>
          <a href="/contact" className="btn-white">
            Request Quote
          </a>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <h2 className="text-heading-serif text-3xl md:text-4xl text-charcoal-900 font-light mb-6">
                Space-efficient design for Irving homes
              </h2>
              <p className="text-charcoal-600 text-base leading-relaxed mb-6">
                Sliding windows operate horizontally along tracks, making them ideal for Irving locations where exterior or interior clearance prevents casement installation. No swing radius means you can place furniture directly adjacent to sliding windows without blocking operation. Similarly, exterior landscaping, walkways, and patios don't conflict with sliding window placement—a significant advantage for homes on compact Irving lots.
              </p>
              <p className="text-charcoal-600 text-base leading-relaxed mb-6">
                Modern sliding windows bear little resemblance to the drafty aluminum sliders of previous decades. Today's vinyl and fiberglass sliding windows from Andersen, Pella, and Jeld-Wen feature precision-engineered rollers that glide smoothly for decades. Multiple weatherstripping points seal against air infiltration, and optional fusion-welded sash corners eliminate weak points where leaks traditionally developed.
              </p>
              <p className="text-charcoal-600 text-base leading-relaxed">
                Wide sliding windows—spanning 6, 8, or even 10 feet—create dramatic openings that flood Irving rooms with Texas sunlight. These expansive windows particularly suit contemporary architectural styles where clean horizontal lines define the aesthetic. The absence of vertical mullions in single-sash designs creates uninterrupted views that make outdoor spaces feel like extensions of interior rooms.
              </p>
            </div>
            
            <div>
              <img
                src="/windows/sliding-windows-irving-tx.webp"
                alt="Wide sliding window with view"
                className="w-full aspect-[4/5] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-stone-100">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-12">
          <h2 className="text-heading-serif text-3xl md:text-4xl text-charcoal-900 font-light text-center mb-16">
            Ideal applications for sliding windows
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8">
              <h3 className="text-[13px] tracking-[0.15em] uppercase font-medium text-charcoal-900 mb-4">
                Above Kitchen Sinks
              </h3>
              <p className="text-charcoal-600 text-sm leading-relaxed">
                Sliding windows work perfectly over kitchen sinks where faucets make casement operation awkward. Open them with one hand while doing dishes, and they don't interfere with window treatments or plants on the sill. Irving homeowners appreciate this practical combination of function and convenience.
              </p>
            </div>
            
            <div className="bg-white p-8">
              <h3 className="text-[13px] tracking-[0.15em] uppercase font-medium text-charcoal-900 mb-4">
                Patio & Deck Access
              </h3>
              <p className="text-charcoal-600 text-sm leading-relaxed">
                Install sliding windows on walls adjacent to patios and decks where outward-opening windows would block outdoor living spaces. The horizontal operation leaves patios clear for furniture, grills, and foot traffic—maximizing usable outdoor area around your Irving home.
              </p>
            </div>
            
            <div className="bg-white p-8">
              <h3 className="text-[13px] tracking-[0.15em] uppercase font-medium text-charcoal-900 mb-4">
                Contemporary Designs
              </h3>
              <p className="text-charcoal-600 text-sm leading-relaxed">
                Modern Irving architecture embraces sliding windows for their clean horizontal lines and minimal visual disruption. Black or bronze frames create dramatic contrast, while oversized glass panels blur boundaries between indoor and outdoor spaces in contemporary home designs.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-12">
          <h2 className="text-heading-serif text-3xl md:text-4xl text-charcoal-900 font-light mb-12">
            Modern sliding window performance
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-xl font-light text-charcoal-900 mb-4">Advanced Roller Systems</h3>
              <p className="text-charcoal-600 leading-relaxed mb-6">
                Premium sliding windows feature tandem roller assemblies with stainless steel ball bearings that eliminate the binding and sticking plaguing older sliders. These precision-engineered rollers distribute sash weight evenly across tracks, ensuring smooth operation even in large, heavy window panels. Quality rollers remain maintenance-free for decades despite Irving's temperature cycling.
              </p>
              <p className="text-charcoal-600 leading-relaxed">
                Adjustable roller heights allow fine-tuning during installation and future adjustments if settling occurs. This adjustability—absent in budget sliding windows—ensures your windows continue operating smoothly throughout their service life rather than becoming progressively more difficult to slide.
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-light text-charcoal-900 mb-4">Enhanced Weathersealing</h3>
              <p className="text-charcoal-600 leading-relaxed mb-6">
                Modern sliding windows incorporate multiple weatherstripping barriers that compress when closed, forming tight seals against air and water infiltration. Pile weatherstripping at meeting rails, fin seals at frame perimeters, and bottom track seals work together to achieve energy efficiency approaching casement window performance.
              </p>
              <p className="text-charcoal-600 leading-relaxed">
                Interlocking meeting rails on premium sliding windows create overlapping barriers that prevent air movement between sashes. This design dramatically improves upon older sliders where simple flat rails met with minimal seal engagement—a primary source of energy loss and drafts.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-charcoal-500">
        <div className="max-w-[1000px] mx-auto px-6 lg:px-12">
          <h2 className="text-heading-serif text-3xl md:text-4xl text-white font-light mb-8 text-center">
            Choosing sliding window configurations
          </h2>
          <div className="grid md:grid-cols-2 gap-12 text-stone-300">
            <div>
              <h3 className="text-xl font-light text-white mb-4">Two-Lite Sliders (XO or OX)</h3>
              <p className="leading-relaxed">
                Standard sliding windows feature one operating sash and one fixed panel. "XO" designates the operating panel on the left; "OX" places it on the right. This configuration balances economy with function—you get 50% ventilation at lower cost than fully operable designs. Choose the operating side based on interior furniture placement and exterior access needs around your Irving home.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-light text-white mb-4">Three-Lite Sliders (OXO)</h3>
              <p className="leading-relaxed">
                Wide openings benefit from three-panel configurations with a fixed center lite and operating panels on both sides. This "OXO" arrangement provides balanced aesthetics and flexible ventilation control. Open one or both sides depending on ventilation needs and Irving's prevailing wind direction. Three-lite sliders create impressive window walls in great rooms and master bedrooms.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-stone-100">
        <div className="max-w-[800px] mx-auto px-6 text-center">
          <h2 className="text-heading-serif text-3xl md:text-4xl text-charcoal-900 font-light mb-8">
            Discover sliding windows for your Irving home
          </h2>
          <p className="text-charcoal-600 mb-10">
            Let's discuss whether sliding windows are the right choice for your replacement project. We'll evaluate your space constraints, aesthetic goals, and budget to recommend the ideal solution.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/contact" className="btn-outline-dark">
              Get Free Estimate
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

