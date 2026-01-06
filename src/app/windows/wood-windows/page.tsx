import type { Metadata } from 'next'
import { PageHeader } from '@/components/page-header'
import { PageFooter } from '@/components/page-footer'

export const metadata: Metadata = {
  title: 'Wood Windows Replacement Irving TX | Authentic Natural Beauty',
  description: 'Premium wood replacement windows in Irving, TX. Timeless beauty and authentic craftsmanship in solid wood. Everything priced including installation.',
  keywords: 'wood windows Irving TX, wood replacement windows, solid wood windows, traditional windows',
}

export default function WoodWindowsPage() {
  return (
    <div className="min-h-screen bg-white">
      <PageHeader />

      {/* Hero */}
      <section className="relative min-h-[60vh] flex items-center pt-32">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(/window-types/wood-irving-tx.jpg)',
          }}
        />
        <div className="hero-overlay absolute inset-0" />
        
        <div className="relative z-10 w-full max-w-[1400px] mx-auto px-6 lg:px-12">
          <h1 className="text-heading-serif text-4xl md:text-5xl lg:text-6xl text-white font-light mb-6 max-w-3xl">
            Wood Windows Replacement in Irving, TX
          </h1>
          <p className="text-white/90 text-lg md:text-xl max-w-2xl mb-8">
            Timeless Beauty and Authentic Craftsmanship in Solid Wood
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
                src="/window-types/wood-irving-tx.jpg"
                alt="Wood windows in modern Irving home"
                className="w-full aspect-[4/5] object-cover"
              />
            </div>
            
            <div>
              <h2 className="text-heading-serif text-3xl md:text-4xl text-charcoal-900 font-light mb-6">
                Why Irving homeowners choose wood windows
              </h2>
              <p className="text-charcoal-600 text-base leading-relaxed mb-6">
                Irving homeowners who appreciate authentic traditional craftsmanship and timeless natural beauty choose solid wood windows. Nothing matches the warmth, character, and architectural authenticity that genuine wood provides. For historic Irving homes and discerning homeowners who prioritize traditional quality, solid wood windows offer unparalleled beauty and lasting value.
              </p>
              <p className="text-charcoal-600 text-base leading-relaxed mb-6">
                Solid wood windows provide authenticity that synthetic materials cannot replicate. Each window features unique grain patterns, natural color variations, and organic warmth that change subtly with light and seasons. Wood accepts stains and finishes that enhance natural beauty while allowing the grain to show through. For Irving&apos;s historic homes and traditional architecture, wood windows provide period-appropriate authenticity that preserves architectural integrity.
              </p>
              <p className="text-charcoal-600 text-base leading-relaxed">
                Wood is naturally insulating, providing thermal performance that rivals modern synthetics without requiring complex engineering. The cellular structure creates air pockets that resist heat transfer, keeping Irving homes comfortable year-round. Quality wood windows achieve U-factors of 0.25-0.30, comparable to premium alternatives, while providing the added benefit of thermal mass that moderates temperature swings throughout the day.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Grid */}
      <section className="py-20 bg-stone-100">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-12">
          <h2 className="text-heading-serif text-3xl md:text-4xl text-charcoal-900 font-light text-center mb-16">
            Wood window advantages for Irving homes
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div>
              <h3 className="text-[13px] tracking-[0.15em] uppercase font-medium text-charcoal-900 mb-4">
                Natural Beauty
              </h3>
              <p className="text-charcoal-600 text-sm leading-relaxed">
                Solid wood windows provide authenticity that synthetic materials cannot replicate. Each window features unique grain patterns, natural color variations, and organic warmth that change subtly with light and seasons.
              </p>
            </div>
            
            <div>
              <h3 className="text-[13px] tracking-[0.15em] uppercase font-medium text-charcoal-900 mb-4">
                Superior Insulation
              </h3>
              <p className="text-charcoal-600 text-sm leading-relaxed">
                Wood is naturally insulating, providing thermal performance that rivals modern synthetics. Quality wood windows achieve U-factors of 0.25-0.30, comparable to premium alternatives, while providing thermal mass that moderates temperature swings.
              </p>
            </div>
            
            <div>
              <h3 className="text-[13px] tracking-[0.15em] uppercase font-medium text-charcoal-900 mb-4">
                Exceptional Craftsmanship
              </h3>
              <p className="text-charcoal-600 text-sm leading-relaxed">
                Solid wood windows represent traditional craftsmanship at its finest. Quality manufacturers select premium wood species and craft windows using time-honored joinery techniques. The result is windows that operate smoothly and provide decades of service.
              </p>
            </div>
            
            <div>
              <h3 className="text-[13px] tracking-[0.15em] uppercase font-medium text-charcoal-900 mb-4">
                Design Flexibility
              </h3>
              <p className="text-charcoal-600 text-sm leading-relaxed">
                Wood accepts stains and finishes that enhance natural beauty while allowing the grain to show through. For Irving&apos;s historic homes and traditional architecture, wood windows provide period-appropriate authenticity.
              </p>
            </div>
            
            <div>
              <h3 className="text-[13px] tracking-[0.15em] uppercase font-medium text-charcoal-900 mb-4">
                Architectural Authenticity
              </h3>
              <p className="text-charcoal-600 text-sm leading-relaxed">
                For Irving&apos;s historic homes and traditional architecture, wood windows provide period-appropriate authenticity that preserves architectural integrity. Nothing matches the warmth and character that genuine wood provides.
              </p>
            </div>
            
            <div>
              <h3 className="text-[13px] tracking-[0.15em] uppercase font-medium text-charcoal-900 mb-4">
                Long-Term Value
              </h3>
              <p className="text-charcoal-600 text-sm leading-relaxed">
                For homeowners willing to invest time in maintenance, wood windows reward with beauty and character that improve with age. Quality wood windows provide decades of service and significantly enhance property values.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Installation Process */}
      <section className="py-20 bg-charcoal-500">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-12">
          <h2 className="text-heading-serif text-3xl md:text-4xl text-white font-light mb-12">
            Our Irving wood window installation process
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
                Your wood windows are built to your exact specifications at Andersen, Pella, or Jeld-Wen facilities. Factory quality control ensures perfect operation before shipping to Irving.
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
                We test each window for smooth operation, verify weatherstripping seals properly, and ensure locks engage securely. Your satisfaction is confirmed before our crew leaves your Irving property.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-stone-100">
        <div className="max-w-[800px] mx-auto px-6 text-center">
          <h2 className="text-heading-serif text-3xl md:text-4xl text-charcoal-900 font-light mb-8">
            Ready to upgrade your Irving home with premium wood windows?
          </h2>
          <p className="text-charcoal-600 mb-10">
            Schedule your free in-home consultation. We&apos;ll measure your openings, discuss options, and provide transparent pricing with no pressure.
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
