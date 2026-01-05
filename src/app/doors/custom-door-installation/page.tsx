import type { Metadata } from 'next'
import { PageHeader } from '@/components/page-header'
import { PageFooter } from '@/components/page-footer'

export const metadata: Metadata = {
  title: 'Custom Door Installation Irving TX | Fully Customized Doors',
  description: 'Professional custom door installation in Irving, TX. Fully customized doors designed to your specifications from Andersen, Pella, JELD-WEN, Marvin. Call 972-284-7995.',
  keywords: 'custom door installation Irving TX, custom doors, bespoke doors, door installation Irving',
}

export default function CustomDoorPage() {
  return (
    <div className="min-h-screen bg-white">
      <PageHeader />

      {/* Hero */}
      <section className="relative min-h-[60vh] flex items-center pt-32">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(/doors/custom-doors-irving-tx.webp)',
          }}
        />
        <div className="hero-overlay absolute inset-0" />
        
        <div className="relative z-10 w-full max-w-[1400px] mx-auto px-6 lg:px-12">
          <h1 className="text-heading-serif text-4xl md:text-5xl lg:text-6xl text-white font-light mb-6 max-w-3xl">
            Custom Door Replacement in Irving, TX
          </h1>
          <p className="text-white/90 text-lg md:text-xl max-w-2xl mb-8">
            Fully Customized Doors Designed to Your Specifications
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
                src="/doors/custom-doors-irving-tx.webp"
                alt="Custom door installation in Irving home"
                className="w-full aspect-[4/5] object-cover"
              />
            </div>
            
            <div>
              <h2 className="text-heading-serif text-3xl md:text-4xl text-charcoal-900 font-light mb-6">
                Your vision, perfectly realized
              </h2>
              <p className="text-charcoal-600 text-base leading-relaxed mb-6">
                Custom doors represent the ultimate expression of personal style and architectural vision for Irving homeowners. When standard sizes don&apos;t fit your opening, when you envision specific design elements unavailable in stock products, or when you simply demand perfection tailored to your home&apos;s unique character, custom doors deliver exactly what you imagine.
              </p>
              <p className="text-charcoal-600 text-base leading-relaxed">
                Premium manufacturers like Marvin, Pella, Andersen, and JELD-WEN offer extensive customization programs that build doors to your exact specifications—dimensions, materials, finishes, glass, hardware, and architectural details all selected by you.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Unlimited Possibilities */}
      <section className="py-20 bg-stone-100">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-12">
          <h2 className="text-heading-serif text-3xl md:text-4xl text-charcoal-900 font-light mb-12">
            Unlimited Design Possibilities
          </h2>
          <p className="text-charcoal-600 text-base leading-relaxed mb-6">
            Custom doors begin with material selection—solid wood species ranging from mahogany to walnut to clear vertical grain fir, fiberglass molded to replicate specific wood grains, or modern composite materials. Size customization accommodates non-standard openings or dramatic oversize entries that make architectural statements.
          </p>
          <p className="text-charcoal-600 text-base leading-relaxed mb-6">
            Glass options extend far beyond standard choices. You can specify decorative glass with custom patterns, art glass created specifically for your door, unique shapes and configurations, or minimal glass for maximum privacy and security. Grille patterns can match historical precedent or create contemporary geometric designs.
          </p>
          <p className="text-charcoal-600 text-base leading-relaxed">
            Hardware selection includes finish options from traditional brass and bronze to contemporary stainless steel and matte black, with handle styles ranging from classic lever sets to modern pulls. We help Irving homeowners navigate these choices to create doors that perfectly express their vision.
          </p>
        </div>
      </section>

      {/* Perfect Fit */}
      <section className="py-20 bg-white">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-12">
          <h2 className="text-heading-serif text-3xl md:text-4xl text-charcoal-900 font-light mb-12">
            Perfect Fit for Unique Openings
          </h2>
          <p className="text-charcoal-600 text-base leading-relaxed mb-6">
            Irving features homes spanning decades of construction, including many with non-standard door openings. Older homes often have unique dimensions that don&apos;t match modern standard sizes. Contemporary architectural designs incorporate oversized or unusually proportioned openings for dramatic effect.
          </p>
          <p className="text-charcoal-600 text-base leading-relaxed">
            Custom doors solve these challenges perfectly. Manufacturers build to your exact measurements, ensuring proper fit without expensive opening modifications. For installations requiring specific performance characteristics—extreme weather resistance, sound attenuation, or particular energy ratings—custom doors can be engineered to meet those requirements precisely.
          </p>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 bg-stone-100">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-12">
          <h2 className="text-heading-serif text-3xl md:text-4xl text-charcoal-900 font-light text-center mb-16">
            Custom Door Features
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div>
              <h3 className="text-[13px] tracking-[0.15em] uppercase font-medium text-charcoal-900 mb-4">
                Any Size
              </h3>
              <p className="text-charcoal-600 text-sm leading-relaxed">
                Built to your exact dimensions for perfect fit in any opening.
              </p>
            </div>
            
            <div>
              <h3 className="text-[13px] tracking-[0.15em] uppercase font-medium text-charcoal-900 mb-4">
                Material Options
              </h3>
              <p className="text-charcoal-600 text-sm leading-relaxed">
                Choose from solid wood species, fiberglass, or modern composites.
              </p>
            </div>
            
            <div>
              <h3 className="text-[13px] tracking-[0.15em] uppercase font-medium text-charcoal-900 mb-4">
                Custom Glass
              </h3>
              <p className="text-charcoal-600 text-sm leading-relaxed">
                Decorative, art glass, unique shapes, or minimal glass options.
              </p>
            </div>
            
            <div>
              <h3 className="text-[13px] tracking-[0.15em] uppercase font-medium text-charcoal-900 mb-4">
                Finish Selection
              </h3>
              <p className="text-charcoal-600 text-sm leading-relaxed">
                Factory-applied or site-finished in any color or stain.
              </p>
            </div>
            
            <div>
              <h3 className="text-[13px] tracking-[0.15em] uppercase font-medium text-charcoal-900 mb-4">
                Premium Hardware
              </h3>
              <p className="text-charcoal-600 text-sm leading-relaxed">
                Unlimited hardware choices in any finish to match your style.
              </p>
            </div>
            
            <div>
              <h3 className="text-[13px] tracking-[0.15em] uppercase font-medium text-charcoal-900 mb-4">
                Built to Order
              </h3>
              <p className="text-charcoal-600 text-sm leading-relaxed">
                Crafted specifically for your home by premium manufacturers.
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
                How much do custom doors cost in Irving, TX?
              </h3>
              <p className="text-charcoal-600 text-sm leading-relaxed">
                Custom door costs with installation vary widely based on size, materials, complexity, and manufacturer. Everything is priced including installation. Basic custom sizing in standard materials might add 20-30% over stock doors. Extensive customization with premium materials, complex glass work, and high-end hardware can range from $5,000 to $15,000 or more with installation. We do not sell doors without installation.
              </p>
            </div>
            
            <div>
              <h3 className="text-[13px] tracking-[0.15em] uppercase font-medium text-charcoal-900 mb-3">
                How long does it take to get a custom door?
              </h3>
              <p className="text-charcoal-600 text-sm leading-relaxed">
                Custom door lead times typically range from 6 to 12 weeks, though complex designs or special materials may require longer. The process includes design consultation, precise measurement, manufacturing, shipping, and installation. We provide accurate timelines during initial consultation and keep you informed throughout the process.
              </p>
            </div>
            
            <div>
              <h3 className="text-[13px] tracking-[0.15em] uppercase font-medium text-charcoal-900 mb-3">
                Can I match my existing doors with custom doors?
              </h3>
              <p className="text-charcoal-600 text-sm leading-relaxed">
                Yes, custom doors can be built to match existing doors in your Irving home. We carefully analyze your current doors to specify matching materials, dimensions, profiles, glass patterns, and finishes. This capability proves invaluable when replacing doors in historic homes or maintaining consistency in homes with unique existing doors.
              </p>
            </div>
            
            <div>
              <h3 className="text-[13px] tracking-[0.15em] uppercase font-medium text-charcoal-900 mb-3">
                What warranty comes with custom doors?
              </h3>
              <p className="text-charcoal-600 text-sm leading-relaxed">
                Custom doors typically carry the same manufacturer warranties as standard products—often lifetime limited warranties on materials and construction. Finishes usually carry shorter warranties, typically 2 to 10 years depending on the product. We provide detailed warranty information for your specific door selection and ensure proper registration for warranty coverage.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 md:py-32 bg-charcoal-500">
        <div className="max-w-[800px] mx-auto px-6 text-center">
          <h2 className="text-heading-serif text-3xl md:text-4xl text-white font-light mb-6 leading-relaxed">
            Ready to create your custom door in Irving?
          </h2>
          <p className="text-stone-300 text-base mb-10">
            Get a free consultation and quote for your custom door installation project.
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
