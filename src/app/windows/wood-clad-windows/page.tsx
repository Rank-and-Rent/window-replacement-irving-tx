import type { Metadata } from 'next'
import { PageHeader } from '@/components/page-header'
import { PageFooter } from '@/components/page-footer'

export const metadata: Metadata = {
  title: 'Wood Clad Windows Replacement Irving TX | Traditional Beauty, Modern Protection',
  description: 'Premium wood clad replacement windows in Irving, TX. Authentic wood interior beauty with weather-resistant exterior protection. Everything priced including installation.',
  keywords: 'wood clad windows Irving TX, wood clad replacement windows, clad windows, wood interior windows',
}

export default function WoodCladWindowsPage() {
  return (
    <div className="min-h-screen bg-white">
      <PageHeader />

      {/* Hero */}
      <section className="relative min-h-[60vh] flex items-center pt-32">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(/window-types/wood-clad-irving-tx.jpg)',
          }}
        />
        <div className="hero-overlay absolute inset-0" />
        
        <div className="relative z-10 w-full max-w-[1400px] mx-auto px-6 lg:px-12">
          <h1 className="text-heading-serif text-4xl md:text-5xl lg:text-6xl text-white font-light mb-6 max-w-3xl">
            Wood Clad Windows Replacement in Irving, TX
          </h1>
          <p className="text-white/90 text-lg md:text-xl max-w-2xl mb-8">
            Authentic Wood Interior Beauty with Weather-Resistant Exterior Protection
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
                src="/window-types/wood-clad-irving-tx.jpg"
                alt="Wood clad windows in modern Irving home"
                className="w-full aspect-[4/5] object-cover"
              />
            </div>
            
            <div>
              <h2 className="text-heading-serif text-3xl md:text-4xl text-charcoal-900 font-light mb-6">
                Why Irving homeowners choose wood clad windows
              </h2>
              <p className="text-charcoal-600 text-base leading-relaxed mb-6">
                Irving homeowners seeking the ultimate combination of traditional wood beauty and modern durability discover that wood clad windows provide the perfect balance. With authentic wood interiors that bring natural warmth to your home and weather-resistant exteriors that withstand Irving&apos;s challenging climate, wood clad windows represent the gold standard in window performance and aesthetics.
              </p>
              <p className="text-charcoal-600 text-base leading-relaxed mb-6">
                Wood clad windows feature genuine wood interiors that provide authentic natural beauty, warmth, and character. The interior wood can be stained or painted to match any décor, from traditional stains to contemporary colors. The exterior cladding—typically aluminum or vinyl—protects the wood from Irving&apos;s weather extremes, eliminating the maintenance burdens of traditional wood windows while preserving interior beauty.
              </p>
              <p className="text-charcoal-600 text-base leading-relaxed">
                The exterior cladding creates an impenetrable barrier against moisture, UV exposure, and temperature extremes that damage traditional wood windows in Irving. Unlike bare wood that requires annual maintenance, clad exteriors need minimal care while providing decades of weather protection. The cladding prevents rot, warping, and insect damage that plague unprotected wood in Texas climate.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Grid */}
      <section className="py-20 bg-stone-100">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-12">
          <h2 className="text-heading-serif text-3xl md:text-4xl text-charcoal-900 font-light text-center mb-16">
            Wood clad window advantages for Irving homes
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div>
              <h3 className="text-[13px] tracking-[0.15em] uppercase font-medium text-charcoal-900 mb-4">
                Best of Both Worlds
              </h3>
              <p className="text-charcoal-600 text-sm leading-relaxed">
                Wood clad windows feature genuine wood interiors that provide authentic natural beauty, warmth, and character. The exterior cladding protects the wood from Irving&apos;s weather extremes, eliminating maintenance burdens while preserving interior beauty.
              </p>
            </div>
            
            <div>
              <h3 className="text-[13px] tracking-[0.15em] uppercase font-medium text-charcoal-900 mb-4">
                Weather Protection
              </h3>
              <p className="text-charcoal-600 text-sm leading-relaxed">
                The exterior cladding creates an impenetrable barrier against moisture, UV exposure, and temperature extremes. Unlike bare wood that requires annual maintenance, clad exteriors need minimal care while providing decades of weather protection.
              </p>
            </div>
            
            <div>
              <h3 className="text-[13px] tracking-[0.15em] uppercase font-medium text-charcoal-900 mb-4">
                Superior Energy Efficiency
              </h3>
              <p className="text-charcoal-600 text-sm leading-relaxed">
                Wood&apos;s natural insulating properties combined with modern cladding technology create exceptional thermal performance. Wood clad windows typically achieve U-factors of 0.25-0.30, significantly better than aluminum and comparable to premium vinyl.
              </p>
            </div>
            
            <div>
              <h3 className="text-[13px] tracking-[0.15em] uppercase font-medium text-charcoal-900 mb-4">
                Design Flexibility
              </h3>
              <p className="text-charcoal-600 text-sm leading-relaxed">
                Wood clad windows offer unlimited design possibilities. The wood interior accepts any stain or paint color, matching Irving homes from traditional to contemporary styles. Exterior cladding is available in dozens of factory-finished colors that never need repainting.
              </p>
            </div>
            
            <div>
              <h3 className="text-[13px] tracking-[0.15em] uppercase font-medium text-charcoal-900 mb-4">
                Reduced Maintenance
              </h3>
              <p className="text-charcoal-600 text-sm leading-relaxed">
                Interior wood surfaces benefit from occasional refinishing to maintain their beauty, but exterior cladding requires no painting or sealing. Overall maintenance is far less than traditional wood windows while preserving authentic wood aesthetics.
              </p>
            </div>
            
            <div>
              <h3 className="text-[13px] tracking-[0.15em] uppercase font-medium text-charcoal-900 mb-4">
                Longevity
              </h3>
              <p className="text-charcoal-600 text-sm leading-relaxed">
                Quality wood clad windows last 30-40 years with proper care. The exterior cladding protects the wood from weather damage, significantly extending service life compared to unprotected wood while maintaining authentic wood interiors.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Installation Process */}
      <section className="py-20 bg-charcoal-500">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-12">
          <h2 className="text-heading-serif text-3xl md:text-4xl text-white font-light mb-12">
            Our Irving wood clad window installation process
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
                Your wood clad windows are built to your exact specifications at Andersen, Pella, or Jeld-Wen facilities. Factory quality control ensures perfect operation before shipping to Irving.
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
            Ready to upgrade your Irving home with premium wood clad windows?
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
