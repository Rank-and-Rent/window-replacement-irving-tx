import type { Metadata } from 'next'
import { PageHeader } from '@/components/page-header'
import { PageFooter } from '@/components/page-footer'

export const metadata: Metadata = {
  title: 'Fiberglass Windows Replacement Irving TX | Ultimate Strength & Insulation',
  description: 'Premium fiberglass replacement windows in Irving, TX. Maximum strength, superior insulation, and authentic wood appearance. Everything priced including installation.',
  keywords: 'fiberglass windows Irving TX, fiberglass replacement windows, strong windows, insulated fiberglass windows',
}

export default function FiberglassWindowsPage() {
  return (
    <div className="min-h-screen bg-white">
      <PageHeader />

      {/* Hero */}
      <section className="relative min-h-[60vh] flex items-center pt-32">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(/window-types/fiberglass-irving-tx.jpg)',
          }}
        />
        <div className="hero-overlay absolute inset-0" />
        
        <div className="relative z-10 w-full max-w-[1400px] mx-auto px-6 lg:px-12">
          <h1 className="text-heading-serif text-4xl md:text-5xl lg:text-6xl text-white font-light mb-6 max-w-3xl">
            Fiberglass Windows Replacement in Irving, TX
          </h1>
          <p className="text-white/90 text-lg md:text-xl max-w-2xl mb-8">
            Ultimate Strength and Insulation with Authentic Wood-Like Beauty
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
                src="/window-types/fiberglass-irving-tx.jpg"
                alt="Fiberglass windows in modern Irving home"
                className="w-full aspect-[4/5] object-cover"
              />
            </div>
            
            <div>
              <h2 className="text-heading-serif text-3xl md:text-4xl text-charcoal-900 font-light mb-6">
                Why Irving homeowners choose fiberglass windows
              </h2>
              <p className="text-charcoal-600 text-base leading-relaxed mb-6">
                Irving homeowners seeking the pinnacle of window performance choose fiberglass for its unmatched combination of structural strength, superior thermal efficiency, and authentic wood aesthetics. In a city with corporate architecture from historic bungalows to modern developments, fiberglass windows provide the ultimate durability and energy performance that discerning Irving residents demand.
              </p>
              <p className="text-charcoal-600 text-base leading-relaxed mb-6">
                Fiberglass is fundamentally stronger than any other window frame material, making it ideal for Irving&apos;s occasional severe weather and hail storms. The material&apos;s tensile strength exceeds steel while maintaining flexibility that prevents cracking during temperature extremes. Unlike vinyl that can become brittle or wood that warps, fiberglass maintains perfect alignment and smooth operation year-round in Irving&apos;s variable climate.
              </p>
              <p className="text-charcoal-600 text-base leading-relaxed">
                Fiberglass&apos;s naturally low thermal conductivity creates exceptional insulating properties that significantly reduce energy costs in Irving&apos;s hot summers. The material conducts heat 500 times slower than aluminum and far better than wood, creating a natural thermal barrier. Irving homeowners typically see 35-45% reductions in heating and cooling costs with fiberglass windows.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Grid */}
      <section className="py-20 bg-stone-100">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-12">
          <h2 className="text-heading-serif text-3xl md:text-4xl text-charcoal-900 font-light text-center mb-16">
            Fiberglass window advantages for Irving homes
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div>
              <h3 className="text-[13px] tracking-[0.15em] uppercase font-medium text-charcoal-900 mb-4">
                Ultimate Strength
              </h3>
              <p className="text-charcoal-600 text-sm leading-relaxed">
                Fiberglass is stronger than any other window frame material. It exceeds steel in tensile strength while maintaining flexibility, making it ideal for large installations and impact-prone areas in Irving.
              </p>
            </div>
            
            <div>
              <h3 className="text-[13px] tracking-[0.15em] uppercase font-medium text-charcoal-900 mb-4">
                Superior Insulation
              </h3>
              <p className="text-charcoal-600 text-sm leading-relaxed">
                Fiberglass&apos;s low thermal conductivity creates superior insulation. Combined with advanced glass packages, fiberglass windows can reduce energy costs by 35-45% in Irving&apos;s climate.
              </p>
            </div>
            
            <div>
              <h3 className="text-[13px] tracking-[0.15em] uppercase font-medium text-charcoal-900 mb-4">
                Zero Maintenance
              </h3>
              <p className="text-charcoal-600 text-sm leading-relaxed">
                Fiberglass windows require minimal maintenance—just occasional cleaning. They never need painting, staining, or sealing, and they resist fading, cracking, moisture damage, and insect infestation.
              </p>
            </div>
            
            <div>
              <h3 className="text-[13px] tracking-[0.15em] uppercase font-medium text-charcoal-900 mb-4">
                Authentic Wood Appearance
              </h3>
              <p className="text-charcoal-600 text-sm leading-relaxed">
                Modern fiberglass windows can be finished to look exactly like real wood, including staining and painting to match any wood tone. The wood-grain textures are virtually indistinguishable from authentic wood.
              </p>
            </div>
            
            <div>
              <h3 className="text-[13px] tracking-[0.15em] uppercase font-medium text-charcoal-900 mb-4">
                Moisture Resistance
              </h3>
              <p className="text-charcoal-600 text-sm leading-relaxed">
                Fiberglass is inherently moisture-resistant, making it perfect for Irving&apos;s humid summers and occasional heavy rains. Unlike wood that absorbs moisture and rots, fiberglass remains impervious to water damage.
              </p>
            </div>
            
            <div>
              <h3 className="text-[13px] tracking-[0.15em] uppercase font-medium text-charcoal-900 mb-4">
                Longevity
              </h3>
              <p className="text-charcoal-600 text-sm leading-relaxed">
                Quality fiberglass windows last 30-40 years or more with proper care. The material resists degradation indefinitely and maintains its performance and appearance throughout its service life.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Installation Process */}
      <section className="py-20 bg-charcoal-500">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-12">
          <h2 className="text-heading-serif text-3xl md:text-4xl text-white font-light mb-12">
            Our Irving fiberglass window installation process
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
                Your fiberglass windows are built to your exact specifications at Andersen, Pella, or Jeld-Wen facilities. Factory quality control ensures perfect operation before shipping to Irving.
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
            Ready to upgrade your Irving home with premium fiberglass windows?
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
