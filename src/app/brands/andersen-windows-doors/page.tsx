import type { Metadata } from 'next'
import { PageHeader } from '@/components/page-header'
import { PageFooter } from '@/components/page-footer'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Andersen Windows & Doors Irving TX | Premium Installation',
  description: 'Professional Andersen Windows and Doors installation in Irving, TX. Fibrex technology, energy-efficient designs, and superior durability. Call 972-284-7995 for free estimate.',
  keywords: 'Andersen windows Irving TX, Andersen doors, Fibrex windows, window installation Irving',
}

export default function AndersenBrandPage() {
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
            <li className="text-charcoal-900">Andersen Windows & Doors</li>
          </ol>
        </div>
      </nav>

      {/* Hero */}
      <section className="py-20 bg-stone-100">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 text-center">
          <div className="mb-8">
            <img
              src="/brands/andersen-windows-irving-tx.jpg"
              alt="Andersen Windows & Doors"
              className="max-w-xs mx-auto"
            />
          </div>
          <h1 className="text-heading-serif text-4xl md:text-5xl lg:text-6xl text-charcoal-900 font-light mb-6">
            Andersen Windows & Doors
          </h1>
          <p className="text-charcoal-600 text-xl max-w-2xl mx-auto">
            Premium Andersen Installation in Irving, TX
          </p>
        </div>
      </section>

      {/* About */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-12">
          <h2 className="text-heading-serif text-3xl md:text-4xl text-charcoal-900 font-light mb-12">
            About Andersen Windows & Doors
          </h2>
          <p className="text-charcoal-600 text-base leading-relaxed">
            Andersen Windows and Doors has been a trusted name in window and door manufacturing for over 120 years. Known for exceptional quality, energy efficiency, and innovative design, Andersen offers a comprehensive range of products including double-hung windows, casement windows, sliding patio doors, and hinged French doors. Their Fibrex material combines the strength of wood with the low-maintenance benefits of vinyl, providing superior durability and performance for Irving homeowners.
          </p>
        </div>
      </section>

      {/* Products We Install */}
      <section className="py-20 bg-stone-100">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-12">
          <h2 className="text-heading-serif text-3xl md:text-4xl text-charcoal-900 font-light text-center mb-16">
            Andersen Products We Install
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
            Why Choose Andersen for Your Irving Home
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-[13px] tracking-[0.15em] uppercase font-medium text-charcoal-900 mb-4">
                Energy Efficiency
              </h3>
              <p className="text-charcoal-600 text-sm leading-relaxed">
                Andersen windows and doors feature advanced insulation technology to keep your Irving home comfortable year-round while reducing energy costs.
              </p>
            </div>
            
            <div>
              <h3 className="text-[13px] tracking-[0.15em] uppercase font-medium text-charcoal-900 mb-4">
                Durability
              </h3>
              <p className="text-charcoal-600 text-sm leading-relaxed">
                Built to withstand Texas weather, Andersen products resist fading, warping, and deterioration even in Irving&apos;s intense sun and humidity.
              </p>
            </div>
            
            <div>
              <h3 className="text-[13px] tracking-[0.15em] uppercase font-medium text-charcoal-900 mb-4">
                Aesthetic Excellence
              </h3>
              <p className="text-charcoal-600 text-sm leading-relaxed">
                With numerous styles, colors, and finishes available, Andersen offers design options that perfectly complement your Irving home&apos;s architecture.
              </p>
            </div>
            
            <div>
              <h3 className="text-[13px] tracking-[0.15em] uppercase font-medium text-charcoal-900 mb-4">
                Professional Installation
              </h3>
              <p className="text-charcoal-600 text-sm leading-relaxed">
                Our certified installers are trained in Andersen best practices, ensuring your windows and doors perform optimally for decades.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-stone-100">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-12">
          <h2 className="text-heading-serif text-3xl md:text-4xl text-charcoal-900 font-light text-center mb-16">
            Frequently Asked Questions About Andersen in Irving, TX
          </h2>
          
          <div className="space-y-8 max-w-[900px] mx-auto">
            <div>
              <h3 className="text-[13px] tracking-[0.15em] uppercase font-medium text-charcoal-900 mb-3">
                What makes Andersen Windows & Doors a good choice for Irving, TX homes?
              </h3>
              <p className="text-charcoal-600 text-sm leading-relaxed">
                Andersen Windows & Doors are engineered to perform excellently in Texas climates, including Irving, TX. They provide superior energy efficiency to reduce cooling costs during hot summers, durability to withstand intense sun and occasional severe weather, and aesthetic options that complement Irving&apos;s diverse architectural styles. Andersen products are backed by comprehensive warranties and installed by our certified professionals.
              </p>
            </div>
            
            <div>
              <h3 className="text-[13px] tracking-[0.15em] uppercase font-medium text-charcoal-900 mb-3">
                How long does Andersen window and door installation take in Irving?
              </h3>
              <p className="text-charcoal-600 text-sm leading-relaxed">
                Most Andersen window installation projects in Irving, TX are completed within 1 to 3 days, depending on the number of units and complexity. Door installations typically take 4 to 8 hours per unit. We provide detailed timelines during your free consultation and work efficiently to minimize disruption to your daily routine while ensuring meticulous installation quality.
              </p>
            </div>
            
            <div>
              <h3 className="text-[13px] tracking-[0.15em] uppercase font-medium text-charcoal-900 mb-3">
                What warranty coverage comes with Andersen products?
              </h3>
              <p className="text-charcoal-600 text-sm leading-relaxed">
                Andersen provides comprehensive warranty coverage on their windows and doors, typically including limited lifetime warranties on many product lines. Warranty specifics vary by collection and may cover glass, materials, and finish. Our installations in Irving, TX include both the manufacturer&apos;s warranty and our own craftsmanship guarantee for complete peace of mind.
              </p>
            </div>
            
            <div>
              <h3 className="text-[13px] tracking-[0.15em] uppercase font-medium text-charcoal-900 mb-3">
                Are Andersen windows energy efficient enough for Irving summers?
              </h3>
              <p className="text-charcoal-600 text-sm leading-relaxed">
                Yes, Andersen offers numerous high-performance window options specifically designed for hot climates like Irving, TX. Features like Low-E glass coatings, argon gas fills, advanced weatherstripping, and multi-pane construction significantly reduce heat transfer and UV radiation. Many Andersen products exceed ENERGY STAR requirements and can substantially lower your cooling costs throughout Irving&apos;s long, hot summers.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 md:py-32 bg-charcoal-500">
        <div className="max-w-[800px] mx-auto px-6 text-center">
          <h2 className="text-heading-serif text-3xl md:text-4xl text-white font-light mb-6 leading-relaxed">
            Ready to install Andersen windows and doors in Irving?
          </h2>
          <p className="text-stone-300 text-base mb-10">
            Get a free consultation and quote for your Andersen installation project.
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
