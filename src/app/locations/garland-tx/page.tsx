import type { Metadata } from 'next'
import { PageHeader } from '@/components/page-header'
import { PageFooter } from '@/components/page-footer'

export const metadata: Metadata = {
  title: 'Window Replacement Garland TX | Expert Installation Services',
  description: 'Window replacement in Garland, TX. Serving Firewheel, Lake Ray Hubbard area & all Garland neighborhoods. Andersen, Pella & Jeld-Wen dealer. 972-284-7995',
}

export default function GarlandPage() {
  return (
    <div className="min-h-screen bg-white">
      <PageHeader />
      
      <section className="relative min-h-[60vh] flex items-center pt-32">
        <div className="absolute inset-0 bg-cover bg-center" style={{backgroundImage: 'url(/locations/window-replacement-garland-tx-1.jpg)'}}/>
        <div className="hero-overlay absolute inset-0" />
        <div className="relative z-10 w-full max-w-[1400px] mx-auto px-6 lg:px-12">
          <h1 className="text-heading-serif text-4xl md:text-5xl lg:text-6xl text-white font-light mb-6">Window Replacement in Garland, TX</h1>
          <p className="text-white/90 text-lg md:text-xl max-w-2xl mb-8">Quality window installation for Garland homes. Energy-efficient Andersen, Pella & Jeld-Wen windows installed by certified professionals.</p>
          <a href="/contact" className="btn-white">Get Free Estimate</a>
        </div>
      </section>
      
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-heading-serif text-3xl md:text-4xl text-charcoal-900 font-light mb-6">Serving Garland since 2008</h2>
              <p className="text-charcoal-600 leading-relaxed mb-4">Garland's diverse housing stock—from mid-century homes near Duck Creek to newer developments in North Garland—demands specialized window knowledge. We've replaced thousands of windows across Garland, understanding how Lake Ray Hubbard's proximity affects humidity and how open eastern exposures require enhanced solar control.</p>
              <p className="text-charcoal-600 leading-relaxed mb-4">Many Garland homes built in the 1970s-80s still have original single-pane or basic dual-pane windows that leak air and allow excessive heat gain. Modern replacements with Low-E glass reduce cooling costs by 30-40% while dramatically improving comfort throughout your Garland home.</p>
              <p className="text-charcoal-600 leading-relaxed">Our Garland customers appreciate transparent pricing, factory-trained installation, and comprehensive warranties. We serve Firewheel, Lake Highlands Estates, Oaks North, Meadowcreek, and every Garland neighborhood with the same commitment to quality and customer satisfaction.</p>
            </div>
            <div>
              <img src="/locations/window-replacement-garland-tx-1.jpg" alt="Garland window replacement" className="w-full aspect-[4/5] object-cover"/>
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-20 bg-stone-100">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-12">
          <h2 className="text-heading-serif text-3xl md:text-4xl text-charcoal-900 font-light mb-12">Why Garland homeowners trust us</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-xl font-light text-charcoal-900 mb-4">Local Knowledge & Experience</h3>
              <p className="text-charcoal-600 leading-relaxed">With 15+ years serving Garland, we understand local building codes, HOA requirements, and the specific challenges Garland's climate presents. Our installation teams have worked throughout the city, from lakefront properties to suburban neighborhoods, delivering consistent quality every time.</p>
            </div>
            <div>
              <h3 className="text-xl font-light text-charcoal-900 mb-4">Premium Brands, Fair Pricing</h3>
              <p className="text-charcoal-600 leading-relaxed">We offer Andersen, Pella, and Jeld-Wen, we offer factory-direct pricing on America's most trusted window brands. You get premium quality without premium markups—just honest pricing and professional installation guaranteed to meet manufacturer specifications.</p>
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-24 bg-white">
        <div className="max-w-[800px] mx-auto px-6 text-center">
          <h2 className="text-heading-serif text-3xl md:text-4xl text-charcoal-900 font-light mb-8">Schedule your Garland consultation</h2>
          <p className="text-charcoal-600 mb-10">Contact us for a free estimate. Most Garland consultations scheduled within 48 hours.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/contact" className="btn-outline-dark">Request Estimate</a>
            <a href="tel:972-284-7995" className="btn-dark">Call 972-284-7995</a>
          </div>
        </div>
      </section>
      
      <PageFooter />
    </div>
  )
}

