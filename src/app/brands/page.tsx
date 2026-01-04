import type { Metadata } from 'next'
import { PageHeader } from '@/components/page-header'
import { PageFooter } from '@/components/page-footer'
import Link from 'next/link'
import { brandsData } from '@/data'

export const metadata: Metadata = {
  title: 'Window & Door Brands Irving TX | Andersen, Pella, JELD-WEN, Marvin',
  description: 'Premium window and door brands in Irving, TX. We install Andersen, Pella, JELD-WEN, and Marvin windows and doors. Call 972-284-7995 for free estimate.',
  keywords: 'Andersen windows Irving TX, Pella windows, JELD-WEN, Marvin windows, premium window brands',
}

export default function BrandsIndexPage() {
  return (
    <div className="min-h-screen bg-white">
      <PageHeader />

      {/* Hero */}
      <section className="py-20 bg-stone-100 pt-32">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 text-center">
          <h1 className="text-heading-serif text-4xl md:text-5xl lg:text-6xl text-charcoal-900 font-light mb-6">
            Premium Window & Door Brands
          </h1>
          <p className="text-charcoal-600 text-xl max-w-2xl mx-auto">
            We install the industry&apos;s most trusted manufacturers in Irving, TX
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-12 text-center">
          <h2 className="text-heading-serif text-3xl md:text-4xl text-charcoal-900 font-light mb-8">
            Quality You Can Trust
          </h2>
          <p className="text-charcoal-600 text-base leading-relaxed max-w-3xl mx-auto">
            We partner with the industry&apos;s leading window and door manufacturers to bring Irving homeowners the perfect combination of beauty, performance, and value. Each brand offers unique advantages while maintaining the highest standards of quality and durability.
          </p>
        </div>
      </section>

      {/* Prominent Brand Logos */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="flex flex-wrap items-center justify-center gap-8 lg:gap-12">
            <Link href="/brands/andersen-windows-doors" className="hover:opacity-80 transition-opacity">
              <img
                src="/andersen-windows-and-doors-irving-tx-logo.png"
                alt="Andersen Windows & Doors"
                className="h-16 lg:h-20 w-auto"
              />
            </Link>
            <Link href="/brands/pella-windows-doors" className="hover:opacity-80 transition-opacity">
              <img
                src="/pella-windows-and-doors-irving-tx-logo.png"
                alt="Pella Windows & Doors"
                className="h-16 lg:h-20 w-auto"
              />
            </Link>
            <Link href="/brands/jeld-wen-windows-doors" className="hover:opacity-80 transition-opacity">
              <img
                src="/jeld-wen-windows-and-doors-irving-tx-logo.png"
                alt="Jeld-Wen Windows & Doors"
                className="h-16 lg:h-20 w-auto"
              />
            </Link>
            <Link href="/brands/marvin-windows-doors" className="hover:opacity-80 transition-opacity">
              <img
                src="/marvin-windows-and-doors-irving-tx-logo.png"
                alt="Marvin Windows & Doors"
                className="h-16 lg:h-20 w-auto"
              />
            </Link>
          </div>
        </div>
      </section>

      {/* Brands Grid */}
      <section className="py-20 bg-stone-100">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="grid md:grid-cols-2 gap-12">
            {brandsData.map((brand) => {
              const imagePath = brand.slug === 'marvin-windows-doors'
                ? '/brands/marvin-windows-irving-tx.avif'
                : `/brands/${brand.slug.split('-')[0]}-windows-irving-tx.jpg`

              return (
                <Link
                  key={brand.slug}
                  href={brand.route}
                  className="group bg-white p-12 hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="mb-6">
                    <img
                      src={imagePath}
                      alt={brand.name}
                      className="max-w-xs mx-auto h-12 object-contain"
                    />
                  </div>
                  <h3 className="text-heading-serif text-2xl md:text-3xl text-charcoal-900 font-light mb-6 group-hover:text-charcoal-600 transition-colors">
                    {brand.name}
                  </h3>
                  <p className="text-charcoal-600 text-base leading-relaxed">
                    {brand.description}
                  </p>
                  <span className="inline-block mt-6 text-[13px] tracking-[0.15em] uppercase font-medium text-charcoal-900 group-hover:text-charcoal-600 transition-colors">
                    Learn More
                  </span>
                </Link>
              )
            })}
          </div>
        </div>
      </section>

      {/* Why These Brands */}
      <section className="py-20 bg-white">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-12">
          <h2 className="text-heading-serif text-3xl md:text-4xl text-charcoal-900 font-light text-center mb-16">
            Why We Choose Premium Brands
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <h3 className="text-[13px] tracking-[0.15em] uppercase font-medium text-charcoal-900 mb-4">
                Proven Performance
              </h3>
              <p className="text-charcoal-600 text-sm leading-relaxed">
                Decades of manufacturing excellence and countless satisfied homeowners.
              </p>
            </div>
            
            <div className="text-center">
              <h3 className="text-[13px] tracking-[0.15em] uppercase font-medium text-charcoal-900 mb-4">
                Energy Efficiency
              </h3>
              <p className="text-charcoal-600 text-sm leading-relaxed">
                Advanced technologies reduce cooling costs in Irving&apos;s hot climate.
              </p>
            </div>
            
            <div className="text-center">
              <h3 className="text-[13px] tracking-[0.15em] uppercase font-medium text-charcoal-900 mb-4">
                Design Options
              </h3>
              <p className="text-charcoal-600 text-sm leading-relaxed">
                Extensive styles, colors, and configurations to match any home.
              </p>
            </div>
            
            <div className="text-center">
              <h3 className="text-[13px] tracking-[0.15em] uppercase font-medium text-charcoal-900 mb-4">
                Comprehensive Warranties
              </h3>
              <p className="text-charcoal-600 text-sm leading-relaxed">
                Industry-leading warranties protect your investment for years.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 md:py-32 bg-charcoal-500">
        <div className="max-w-[800px] mx-auto px-6 text-center">
          <h2 className="text-heading-serif text-3xl md:text-4xl text-white font-light mb-6 leading-relaxed">
            Ready to choose the perfect brand for your Irving home?
          </h2>
          <p className="text-stone-300 text-base mb-10">
            Get a free consultation to explore your options and find the perfect fit.
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
