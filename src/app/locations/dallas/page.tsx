import type { Metadata } from 'next'
import { PageHeader } from '@/components/page-header'
import { PageFooter } from '@/components/page-footer'

export const metadata: Metadata = {
  title: 'Window Replacement Dallas TX | Premium Installation Services',
  description: 'Professional window replacement throughout Dallas, TX. From Oak Cliff to Preston Hollow. Andersen, Pella & Jeld-Wen authorized dealer. Expert service: 972-284-7995',
}

export default function DallasPage() {
  return (
    <div className="min-h-screen bg-white">
      <PageHeader />

      <section className="relative min-h-[60vh] flex items-center pt-32">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1920&q=80)',
          }}
        />
        <div className="hero-overlay absolute inset-0" />
        
        <div className="relative z-10 w-full max-w-[1400px] mx-auto px-6 lg:px-12">
          <h1 className="text-heading-serif text-4xl md:text-5xl lg:text-6xl text-white font-light mb-6">
            Window Replacement in Dallas, TX
          </h1>
          <p className="text-white/90 text-lg md:text-xl max-w-2xl mb-8">
            Serving Dallas County with premium replacement windows. From historic Lakewood to modern Uptown high-rises, we deliver quality installations backed by manufacturer warranties.
          </p>
          <a href="/contact" className="btn-white">
            Get Quote
          </a>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <img
                src="https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=1000&q=80"
                alt="Dallas window replacement"
                className="w-full aspect-[4/5] object-cover"
              />
            </div>
            
            <div>
              <h2 className="text-heading-serif text-3xl md:text-4xl text-charcoal-900 font-light mb-6">
                Window expertise for Dallas's architectural diversity
              </h2>
              <p className="text-charcoal-600 text-base leading-relaxed mb-6">
                Dallas's residential architecture spans Tudor revivals in Highland Park, mid-century modern in Lake Highlands, Victorian cottages in Bishop Arts, and gleaming glass towers in Uptown. This diversity demands specialized knowledge—what works for a 1920s Craftsman bungalow in Munger Place fails in a contemporary loft conversion in Deep Ellum. Our Dallas team brings two decades of experience navigating these distinctions, ensuring window recommendations honor each property's unique character.
              </p>
              <p className="text-charcoal-600 text-base leading-relaxed mb-6">
                Historic preservation guidelines in Dallas's protected districts require careful window specification. Swiss Avenue, Munger Place, and portions of Lakewood mandate historically appropriate replacements that maintain original appearance while incorporating modern performance. We work regularly with Dallas Landmark Commission requirements, sourcing windows meeting both preservation standards and homeowner needs for energy efficiency and durability.
              </p>
              <p className="text-charcoal-600 text-base leading-relaxed">
                The city's explosive vertical growth—particularly in Uptown, Victory Park, and the Cedars—creates demand for specialized high-rise window services. Modern residential towers feature floor-to-ceiling glass requiring professional installation expertise beyond typical suburban home replacement. Our team handles these technical challenges, delivering flawless installations regardless of project complexity or building height.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-stone-100">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-12">
          <h2 className="text-heading-serif text-3xl md:text-4xl text-charcoal-900 font-light text-center mb-16">
            Dallas neighborhoods we serve
          </h2>
          
          <div className="grid md:grid-cols-4 gap-6 text-sm">
            <div>
              <h3 className="text-[11px] tracking-[0.2em] uppercase font-medium text-charcoal-900 mb-3">North Dallas</h3>
              <ul className="text-charcoal-600 space-y-1">
                <li>Preston Hollow</li>
                <li>Lake Highlands</li>
                <li>Far North Dallas</li>
                <li>Addison</li>
              </ul>
            </div>
            <div>
              <h3 className="text-[11px] tracking-[0.2em] uppercase font-medium text-charcoal-900 mb-3">East Dallas</h3>
              <ul className="text-charcoal-600 space-y-1">
                <li>Lakewood</li>
                <li>M Streets</li>
                <li>Munger Place</li>
                <li>Junius Heights</li>
              </ul>
            </div>
            <div>
              <h3 className="text-[11px] tracking-[0.2em] uppercase font-medium text-charcoal-900 mb-3">Central/Urban</h3>
              <ul className="text-charcoal-600 space-y-1">
                <li>Uptown</li>
                <li>Downtown</li>
                <li>Deep Ellum</li>
                <li>Victory Park</li>
              </ul>
            </div>
            <div>
              <h3 className="text-[11px] tracking-[0.2em] uppercase font-medium text-charcoal-900 mb-3">South Dallas</h3>
              <ul className="text-charcoal-600 space-y-1">
                <li>Oak Cliff</li>
                <li>Bishop Arts</li>
                <li>Kessler Park</li>
                <li>Cedar Hill</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-12">
          <h2 className="text-heading-serif text-3xl md:text-4xl text-charcoal-900 font-light mb-12">
            Dallas climate and window performance
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-xl font-light text-charcoal-900 mb-4">Urban Heat Island Effects</h3>
              <p className="text-charcoal-600 leading-relaxed mb-4">
                Dallas's downtown core and dense residential areas create urban heat islands where temperatures climb 5-10 degrees higher than surrounding suburbs. Concrete, asphalt, and glass absorb solar energy during Dallas's brutal summers, radiating heat well into evening hours. This phenomenon makes window selection even more critical for urban Dallas homes and condos where cooling challenges intensify.
              </p>
              <p className="text-charcoal-600 leading-relaxed">
                High-performance Low-E glass becomes essential rather than optional in these environments. We specify solar control packages that dramatically reduce heat transmission while maintaining natural light—critical in urban settings where views and daylight are premium amenities. The right glass selection transforms uncomfortable spaces into pleasant living areas despite Dallas's challenging thermal environment.
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-light text-charcoal-900 mb-4">Noise Reduction Priorities</h3>
              <p className="text-charcoal-600 leading-relaxed mb-4">
                Traffic noise from Central Expressway, LBJ Freeway, and Dallas's extensive highway network penetrates homes miles from actual roadways. Laminated glass windows reduce exterior noise transmission by 30-40% compared to standard insulated glass—a dramatic improvement that transforms sleep quality and overall comfort. This upgrade proves particularly valuable for Dallas homes near DART lines or busy arterial streets.
              </p>
              <p className="text-charcoal-600 leading-relaxed">
                Love Field flight paths affect neighborhoods throughout northwest Dallas. While we can't eliminate aircraft noise entirely, laminated acoustic glass significantly dampens sound intrusion. Many Dallas homeowners report barely noticing overhead flights after window replacement—a quality-of-life improvement worth far more than the modest cost premium for acoustic glass.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-charcoal-500">
        <div className="max-w-[1000px] mx-auto px-6 lg:px-12 text-center">
          <h2 className="text-heading-serif text-3xl md:text-4xl text-white font-light mb-8">
            Dallas's premier window replacement company
          </h2>
          <p className="text-stone-300 text-lg leading-relaxed max-w-2xl mx-auto">
            Whether you're restoring a historic Swiss Avenue mansion, upgrading a Lake Highlands ranch, or outfitting an Uptown high-rise, we bring the specialized expertise your Dallas project demands. Factory-trained installers, transparent pricing, and unwavering commitment to quality define every installation we complete across Dallas County.
          </p>
        </div>
      </section>

      <section className="py-24 bg-stone-100">
        <div className="max-w-[800px] mx-auto px-6 text-center">
          <h2 className="text-heading-serif text-3xl md:text-4xl text-charcoal-900 font-light mb-8">
            Transform your Dallas home with premium windows
          </h2>
          <p className="text-charcoal-600 mb-10">
            Schedule your complimentary consultation. We'll evaluate your Dallas property, recommend optimal window solutions, and provide detailed pricing with no sales pressure.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/contact" className="btn-outline-dark">
              Book Consultation
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

