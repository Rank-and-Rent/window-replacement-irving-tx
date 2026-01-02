// Garland
export const garland = `import type { Metadata } from 'next'
import { PageHeader } from '@/components/page-header'
import { PageFooter } from '@/components/page-footer'

export const metadata: Metadata = {
  title: 'Window Replacement Garland TX | Expert Installation Services',
  description: 'Window replacement in Garland, TX. Serving all Garland neighborhoods. And

ersen, Pella & Jeld-Wen windows. Free estimates: 972-284-7995',
}

export default function GarlandPage() {
  return (
    <div className="min-h-screen bg-white">
      <PageHeader />
      <section className="relative min-h-[60vh] flex items-center pt-32">
        <div className="absolute inset-0 bg-cover bg-center" style={{backgroundImage: 'url(https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=1920&q=80)'}}/>
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
              <p className="text-charcoal-600 leading-relaxed mb-4">Garland's diverse housing—from mid-century homes near Duck Creek to newer developments in North Garland—demands specialized window knowledge. We've replaced thousands of windows across Garland, understanding how Lake Ray Hubbard's proximity affects humidity and how open eastern exposures require enhanced solar control.</p>
              <p className="text-charcoal-600 leading-relaxed">Our Garland customers appreciate transparent pricing, factory-trained installation, and comprehensive warranties. We serve Firewheel, Lake Highlands Estates, Oaks North, and every Garland neighborhood with the same commitment to quality and customer satisfaction.</p>
            </div>
            <div>
              <img src="https://images.unsplash.com/photo-1600210492493-0946911123ea?w=1000&q=80" alt="Garland window replacement" className="w-full aspect-[4/5] object-cover"/>
            </div>
          </div>
        </div>
      </section>
      <section className="py-24 bg-stone-100">
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
}`

console.log("Creating location page templates...")

