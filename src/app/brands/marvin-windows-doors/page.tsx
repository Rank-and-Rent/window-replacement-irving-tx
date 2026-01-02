import type { Metadata } from 'next'
import { PageHeader } from '@/components/page-header'
import { PageFooter } from '@/components/page-footer'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Marvin Windows & Doors Irving TX | Premium Custom Installation',
  description: 'Professional Marvin Windows and Doors installation in Irving, TX. Premium quality custom craftsmanship and made-to-order solutions. Call 972-284-7995 for free estimate.',
  keywords: 'Marvin windows Irving TX, Marvin doors, custom windows, window installation Irving',
}

export default function MarvinBrandPage() {
  return (
    <div className="min-h-screen bg-white">
      <PageHeader />

      {/* Breadcrumbs */}
      <nav className="bg-stone-100 py-4 pt-32">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <ol className="flex items-center space-x-2 text-sm text-charcoal-600">
            <li><Link href="/" className="hover:text-charcoal-900">Home</Link></li>
            <li className="text-charcoal-400">/</li>
            <li><Link href="/brands" className="hover:text-charcoal-900">Brands</Link></li>
            <li className="text-charcoal-400">/</li>
            <li className="text-charcoal-900">Marvin Windows & Doors</li>
          </ol>
        </div>
      </nav>

      {/* Hero */}
      <section className="py-20 bg-stone-100">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 text-center">
          <div className="mb-8">
            <img
              src="/brands/marvin-windows-irving-tx.avif"
              alt="Marvin Windows & Doors"
              className="max-w-xs mx-auto"
            />
          </div>
          <h1 className="text-heading-serif text-4xl md:text-5xl lg:text-6xl text-charcoal-900 font-light mb-6">
            Marvin Windows & Doors
          </h1>
          <p className="text-charcoal-600 text-xl max-w-2xl mx-auto">
            Premium Marvin Installation in Irving, TX
          </p>
        </div>
      </section>

      {/* About */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-12">
          <h2 className="text-heading-serif text-3xl md:text-4xl text-charcoal-900 font-light mb-12">
            About Marvin Windows & Doors
          </h2>
          <p className="text-charcoal-600 text-base leading-relaxed">
            Marvin Windows and Doors is synonymous with premium quality and custom craftsmanship. Family-owned since 1912, Marvin specializes in made-to-order windows and doors that combine timeless design with cutting-edge performance. Their extensive product lines, including Marvin Signature, Marvin Elevate, and Marvin Essential collections, offer unparalleled customization options in materials, finishes, and hardware. For Irving homeowners seeking luxury, durability, and architectural distinction, Marvin delivers exceptional value.
          </p>
        </div>
      </section>

      {/* Products We Install */}
      <section className="py-20 bg-stone-100">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-12">
          <h2 className="text-heading-serif text-3xl md:text-4xl text-charcoal-900 font-light text-center mb-16">
            Marvin Products We Install
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-white p-8">
              <h3 className="text-[13px] tracking-[0.15em] uppercase font-medium text-charcoal-900 mb-6">
                Windows
              </h3>
              <ul className="space-y-3 text-charcoal-600">
                <li><Link href="/windows/double-hung-windows" className="hover:text-blue-600 transition-colors">Double-Hung Windows</Link></li>
                <li><Link href="/windows/single-hung-windows" className="hover:text-blue-600 transition-colors">Single-Hung Windows</Link></li>
                <li><Link href="/windows/casement-windows" className="hover:text-blue-600 transition-colors">Casement Windows</Link></li>
                <li><Link href="/windows/awning-windows" className="hover:text-blue-600 transition-colors">Awning Windows</Link></li>
                <li><Link href="/windows/sliding-windows" className="hover:text-blue-600 transition-colors">Sliding Windows</Link></li>
                <li><Link href="/windows/picture-windows" className="hover:text-blue-600 transition-colors">Picture Windows</Link></li>
                <li><Link href="/windows/bay-bow-windows" className="hover:text-blue-600 transition-colors">Bay & Bow Windows</Link></li>
                <li><Link href="/windows/special-shape-windows" className="hover:text-blue-600 transition-colors">Specialty Shapes</Link></li>
              </ul>
            </div>
            
            <div className="bg-white p-8">
              <h3 className="text-[13px] tracking-[0.15em] uppercase font-medium text-charcoal-900 mb-6">
                Doors
              </h3>
              <ul className="space-y-3 text-charcoal-600">
                <li><Link href="/doors/entry-door-installation" className="hover:text-blue-600 transition-colors">Entry Doors</Link></li>
                <li><Link href="/doors/patio-door-installation" className="hover:text-blue-600 transition-colors">Patio Doors</Link></li>
                <li><Link href="/doors/french-door-installation" className="hover:text-blue-600 transition-colors">French Doors</Link></li>
                <li><Link href="/doors/sliding-glass-door-installation" className="hover:text-blue-600 transition-colors">Sliding Glass Doors</Link></li>
                <li><Link href="/doors/storm-door-installation" className="hover:text-blue-600 transition-colors">Storm Doors</Link></li>
                <li><Link href="/doors/custom-door-installation" className="hover:text-blue-600 transition-colors">Custom Doors</Link></li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose */}
      <section className="py-20 bg-white">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-12">
          <h2 className="text-heading-serif text-3xl md:text-4xl text-charcoal-900 font-light text-center mb-16">
            Why Choose Marvin for Your Irving Home
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-[13px] tracking-[0.15em] uppercase font-medium text-charcoal-900 mb-4">
                Energy Efficiency
              </h3>
              <p className="text-charcoal-600 text-sm leading-relaxed">
                Marvin windows and doors feature advanced insulation technology to keep your Irving home comfortable year-round while reducing energy costs.
              </p>
            </div>
            
            <div>
              <h3 className="text-[13px] tracking-[0.15em] uppercase font-medium text-charcoal-900 mb-4">
                Durability
              </h3>
              <p className="text-charcoal-600 text-sm leading-relaxed">
                Built to withstand Texas weather, Marvin products resist fading, warping, and deterioration even in Irving&apos;s intense sun and humidity.
              </p>
            </div>
            
            <div>
              <h3 className="text-[13px] tracking-[0.15em] uppercase font-medium text-charcoal-900 mb-4">
                Aesthetic Excellence
              </h3>
              <p className="text-charcoal-600 text-sm leading-relaxed">
                With numerous styles, colors, and finishes available, Marvin offers design options that perfectly complement your Irving home&apos;s architecture.
              </p>
            </div>
            
            <div>
              <h3 className="text-[13px] tracking-[0.15em] uppercase font-medium text-charcoal-900 mb-4">
                Professional Installation
              </h3>
              <p className="text-charcoal-600 text-sm leading-relaxed">
                Our certified installers are trained in Marvin best practices, ensuring your windows and doors perform optimally for decades.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-stone-100">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-12">
          <h2 className="text-heading-serif text-3xl md:text-4xl text-charcoal-900 font-light text-center mb-16">
            Frequently Asked Questions About Marvin in Irving, TX
          </h2>
          
          <div className="space-y-8 max-w-[900px] mx-auto">
            <div>
              <h3 className="text-[13px] tracking-[0.15em] uppercase font-medium text-charcoal-900 mb-3">
                What makes Marvin Windows & Doors a good choice for Irving, TX homes?
              </h3>
              <p className="text-charcoal-600 text-sm leading-relaxed">
                Marvin Windows & Doors are engineered to perform excellently in Texas climates, including Irving, TX. They provide superior energy efficiency to reduce cooling costs during hot summers, durability to withstand intense sun and occasional severe weather, and aesthetic options that complement Irving&apos;s diverse architectural styles. Marvin products are backed by comprehensive warranties and installed by our certified professionals.
              </p>
            </div>
            
            <div>
              <h3 className="text-[13px] tracking-[0.15em] uppercase font-medium text-charcoal-900 mb-3">
                How long does Marvin window and door installation take in Irving?
              </h3>
              <p className="text-charcoal-600 text-sm leading-relaxed">
                Most Marvin window installation projects in Irving, TX are completed within 1 to 3 days, depending on the number of units and complexity. Door installations typically take 4 to 8 hours per unit. Custom Marvin products may have extended lead times for manufacturing. We provide detailed timelines during your free consultation and work efficiently to minimize disruption to your daily routine while ensuring meticulous installation quality.
              </p>
            </div>
            
            <div>
              <h3 className="text-[13px] tracking-[0.15em] uppercase font-medium text-charcoal-900 mb-3">
                What warranty coverage comes with Marvin products?
              </h3>
              <p className="text-charcoal-600 text-sm leading-relaxed">
                Marvin provides comprehensive warranty coverage on their windows and doors, typically including limited lifetime warranties on many product lines. Warranty specifics vary by collection and may cover glass, materials, and finish. Our installations in Irving, TX include both the manufacturer&apos;s warranty and our own craftsmanship guarantee for complete peace of mind.
              </p>
            </div>
            
            <div>
              <h3 className="text-[13px] tracking-[0.15em] uppercase font-medium text-charcoal-900 mb-3">
                Are Marvin windows energy efficient enough for Irving summers?
              </h3>
              <p className="text-charcoal-600 text-sm leading-relaxed">
                Yes, Marvin offers numerous high-performance window options specifically designed for hot climates like Irving, TX. Features like Low-E glass coatings, argon gas fills, advanced weatherstripping, and multi-pane construction significantly reduce heat transfer and UV radiation. Many Marvin products exceed ENERGY STAR requirements and can substantially lower your cooling costs throughout Irving&apos;s long, hot summers.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 md:py-32 bg-charcoal-500">
        <div className="max-w-[800px] mx-auto px-6 text-center">
          <h2 className="text-heading-serif text-3xl md:text-4xl text-white font-light mb-6 leading-relaxed">
            Ready to install Marvin windows and doors in Irving?
          </h2>
          <p className="text-stone-300 text-base mb-10">
            Get a free consultation and quote for your Marvin installation project.
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
