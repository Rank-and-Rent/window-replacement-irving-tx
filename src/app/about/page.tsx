import type { Metadata } from 'next'
import { PageHeader } from '@/components/page-header'
import { PageFooter } from '@/components/page-footer'

export const metadata: Metadata = {
  title: 'About Us | Window Replacement Irving TX',
  description: 'Learn about our professional window and door installation services in Irving, TX. Premium products from Andersen, Pella, JELD-WEN, and Marvin. Call 972-284-7995.',
  keywords: 'about window replacement Irving TX, window installation company, door installation Irving',
}

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      <PageHeader />

      {/* Hero */}
      <section className="py-20 bg-stone-100 pt-32">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 text-center">
          <h1 className="text-heading-serif text-4xl md:text-5xl lg:text-6xl text-charcoal-900 font-light mb-6">
            About Us
          </h1>
          <p className="text-charcoal-600 text-xl max-w-2xl mx-auto">
            Professional window and door installation serving Irving, TX and the DFW metroplex
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-12">
          <h2 className="text-heading-serif text-3xl md:text-4xl text-charcoal-900 font-light mb-8">
            Our Story
          </h2>
          <div className="space-y-6 text-charcoal-600 text-base leading-relaxed">
            <p>
              Replacement Windows of Irving is committed to making modern, reliable, and custom window solutions accessible and easy for everyone in Irving and the DFW metroplex. We specialize in professional installation of premium windows and doors from the industry&apos;s most trusted manufacturers.
            </p>
            <p>
              Focused on offering high-quality products and services that are custom-made to ensure they are perfect for each space and client&apos;s taste, we bring years of experience and expertise to every project. Our team understands the unique challenges of Texas climate and builds each installation to withstand Irving&apos;s intense sun, heat, and occasional severe weather.
            </p>
            <p>
              We partner exclusively with premium brands—Andersen, Pella, JELD-WEN, and Marvin—because they share our commitment to quality, energy efficiency, and long-term performance. These manufacturers have earned their reputations through decades of innovation and reliability, and we&apos;re proud to bring their products to Irving homeowners.
            </p>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-stone-100">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-12">
          <h2 className="text-heading-serif text-3xl md:text-4xl text-charcoal-900 font-light text-center mb-16">
            What Sets Us Apart
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8">
              <h3 className="text-[13px] tracking-[0.15em] uppercase font-medium text-charcoal-900 mb-4">
                Premium Products
              </h3>
              <p className="text-charcoal-600 text-sm leading-relaxed">
                We install only the highest quality windows and doors from Andersen, Pella, JELD-WEN, and Marvin—brands known for durability, energy efficiency, and beauty.
              </p>
            </div>

            <div className="bg-white p-8">
              <h3 className="text-[13px] tracking-[0.15em] uppercase font-medium text-charcoal-900 mb-4">
                Expert Installation
              </h3>
              <p className="text-charcoal-600 text-sm leading-relaxed">
                Our certified installers follow manufacturer specifications precisely, ensuring your windows and doors perform optimally for decades.
              </p>
            </div>

            <div className="bg-white p-8">
              <h3 className="text-[13px] tracking-[0.15em] uppercase font-medium text-charcoal-900 mb-4">
                Local Expertise
              </h3>
              <p className="text-charcoal-600 text-sm leading-relaxed">
                Based in Irving, we understand Texas building codes, climate challenges, and architectural styles throughout the DFW metroplex.
              </p>
            </div>

            <div className="bg-white p-8">
              <h3 className="text-[13px] tracking-[0.15em] uppercase font-medium text-charcoal-900 mb-4">
                Energy Efficiency
              </h3>
              <p className="text-charcoal-600 text-sm leading-relaxed">
                We specialize in energy-efficient windows and doors that significantly reduce cooling costs during Irving&apos;s hot Texas summers.
              </p>
            </div>

            <div className="bg-white p-8">
              <h3 className="text-[13px] tracking-[0.15em] uppercase font-medium text-charcoal-900 mb-4">
                Custom Solutions
              </h3>
              <p className="text-charcoal-600 text-sm leading-relaxed">
                Every home is unique. We offer custom sizing, materials, finishes, and configurations to perfectly match your specific needs.
              </p>
            </div>

            <div className="bg-white p-8">
              <h3 className="text-[13px] tracking-[0.15em] uppercase font-medium text-charcoal-900 mb-4">
                Comprehensive Warranties
              </h3>
              <p className="text-charcoal-600 text-sm leading-relaxed">
                Our installations include both manufacturer warranties and our own workmanship guarantee for complete peace of mind.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 md:py-32 bg-charcoal-500">
        <div className="max-w-[800px] mx-auto px-6 text-center">
          <h2 className="text-heading-serif text-3xl md:text-4xl text-white font-light mb-6 leading-relaxed">
            Ready to start your project?
          </h2>
          <p className="text-stone-300 text-base mb-10">
            Get a free consultation and quote for your window or door installation.
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
