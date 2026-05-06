import type { Metadata } from 'next'
import { PageHeader } from '@/components/page-header'
import { PageFooter } from '@/components/page-footer'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Pella Windows & Doors Irving TX | Premium Installation',
  description: 'Professional Pella Windows and Doors installation in Irving, TX. Energy-efficient designs with advanced InsulShield technology. Call 972-284-7995 for free estimate.',
  keywords: 'Pella windows Irving TX, Pella doors, InsulShield windows, window installation Irving',
  alternates: {
    canonical: 'https://replacementwindowsirving.com/brands/pella-windows-doors',
  },
}

export default function PellaBrandPage() {
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
            <li className="text-charcoal-900">Pella Windows & Doors</li>
          </ol>
        </div>
      </nav>

      {/* Hero */}
      <section className="py-20 bg-stone-100">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 text-center">
          <div className="mb-8">
            <img
              src="/brands/pella-windows-irving-tx.jpg"
              alt="Pella Windows & Doors"
              className="max-w-xs mx-auto"
            />
          </div>
          <h1 className="text-heading-serif text-4xl md:text-5xl lg:text-6xl text-charcoal-900 font-light mb-6">
            Pella Windows & Doors
          </h1>
          <p className="text-charcoal-600 text-xl max-w-2xl mx-auto">
            Premium Pella Installation in Irving, TX
          </p>
        </div>
      </section>

      {/* Prominent Brand Logos */}
      <section className="py-16 lg:py-20 bg-stone-100">
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

      {/* About */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-12">
          <h2 className="text-heading-serif text-3xl md:text-4xl text-charcoal-900 font-light mb-12">
            About Pella Windows & Doors
          </h2>
          <p className="text-charcoal-600 text-base leading-relaxed">
            Pella has been an industry leader in window and door innovation since 1925. Renowned for their energy-efficient designs and customization options, Pella windows and doors feature advanced technologies like their proprietary InsulShield glass packages and innovative between-the-glass blinds and shades. From traditional double-hung and casement windows to elegant patio doors and entry systems, Pella products combine beauty, functionality, and lasting performance for Irving homes.
          </p>
        </div>
      </section>

      {/* Products We Install */}
      <section className="py-20 bg-stone-100">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-12">
          <h2 className="text-heading-serif text-3xl md:text-4xl text-charcoal-900 font-light text-center mb-16">
            Pella Products We Install
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
            Why Choose Pella for Your Irving Home
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-[13px] tracking-[0.15em] uppercase font-medium text-charcoal-900 mb-4">
                Energy Efficiency
              </h3>
              <p className="text-charcoal-600 text-sm leading-relaxed">
                Pella windows and doors feature advanced insulation technology to keep your Irving home comfortable year-round while reducing energy costs.
              </p>
            </div>
            
            <div>
              <h3 className="text-[13px] tracking-[0.15em] uppercase font-medium text-charcoal-900 mb-4">
                Durability
              </h3>
              <p className="text-charcoal-600 text-sm leading-relaxed">
                Built to withstand Texas weather, Pella products resist fading, warping, and deterioration even in Irving&apos;s intense sun and humidity.
              </p>
            </div>
            
            <div>
              <h3 className="text-[13px] tracking-[0.15em] uppercase font-medium text-charcoal-900 mb-4">
                Aesthetic Excellence
              </h3>
              <p className="text-charcoal-600 text-sm leading-relaxed">
                With numerous styles, colors, and finishes available, Pella offers design options that perfectly complement your Irving home&apos;s architecture.
              </p>
            </div>
            
            <div>
              <h3 className="text-[13px] tracking-[0.15em] uppercase font-medium text-charcoal-900 mb-4">
                Professional Installation
              </h3>
              <p className="text-charcoal-600 text-sm leading-relaxed">
                Our certified installers are trained in Pella best practices, ensuring your windows and doors perform optimally for decades.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-stone-100">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-12">
          <h2 className="text-heading-serif text-3xl md:text-4xl text-charcoal-900 font-light text-center mb-16">
            Frequently Asked Questions About Pella in Irving, TX
          </h2>
          
          <div className="space-y-8 max-w-[900px] mx-auto">
            <div>
              <h3 className="text-[13px] tracking-[0.15em] uppercase font-medium text-charcoal-900 mb-3">
                What makes Pella Windows & Doors a good choice for Irving, TX homes?
              </h3>
              <p className="text-charcoal-600 text-sm leading-relaxed">
                Pella Windows & Doors are engineered to perform excellently in Texas climates, including Irving, TX. They provide superior energy efficiency to reduce cooling costs during hot summers, durability to withstand intense sun and occasional severe weather, and aesthetic options that complement Irving&apos;s diverse architectural styles. Pella products are backed by comprehensive warranties and installed by our certified professionals.
              </p>
            </div>
            
            <div>
              <h3 className="text-[13px] tracking-[0.15em] uppercase font-medium text-charcoal-900 mb-3">
                How long does Pella window and door installation take in Irving?
              </h3>
              <p className="text-charcoal-600 text-sm leading-relaxed">
                Most Pella window installation projects in Irving, TX are completed within 1 to 3 days, depending on the number of units and complexity. Door installations typically take 4 to 8 hours per unit. We provide detailed timelines during your free consultation and work efficiently to minimize disruption to your daily routine while ensuring meticulous installation quality.
              </p>
            </div>
            
            <div>
              <h3 className="text-[13px] tracking-[0.15em] uppercase font-medium text-charcoal-900 mb-3">
                What warranty coverage comes with Pella products?
              </h3>
              <p className="text-charcoal-600 text-sm leading-relaxed">
                Pella provides comprehensive warranty coverage on their windows and doors, typically including limited lifetime warranties on many product lines. Warranty specifics vary by collection and may cover glass, materials, and finish. Our installations in Irving, TX include both the manufacturer&apos;s warranty and our own craftsmanship guarantee for complete peace of mind.
              </p>
            </div>
            
            <div>
              <h3 className="text-[13px] tracking-[0.15em] uppercase font-medium text-charcoal-900 mb-3">
                Are Pella windows energy efficient enough for Irving summers?
              </h3>
              <p className="text-charcoal-600 text-sm leading-relaxed">
                Yes, Pella offers numerous high-performance window options specifically designed for hot climates like Irving, TX. Features like Low-E glass coatings, argon gas fills, advanced weatherstripping, and multi-pane construction significantly reduce heat transfer and UV radiation. Many Pella products exceed ENERGY STAR requirements and can substantially lower your cooling costs throughout Irving&apos;s long, hot summers.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-[1100px] mx-auto px-6 lg:px-12">
          <h2 className="text-heading-serif text-3xl md:text-4xl text-charcoal-900 font-light mb-10">Pella questions Irving homeowners ask</h2>
          <div className="space-y-8">
            <div>
              <h3 className="text-lg font-medium text-charcoal-900 mb-3">Why specify Pella for an Irving home?</h3>
              <p className="text-charcoal-600 leading-relaxed">Pella focuses on premium product lines with integrated technology &mdash; between-the-glass blinds, motorized shades, smart locks. Pella Lifestyle is a frequent Irving spec when integrated blinds are part of the brief; Pella Reserve handles the historic restorations. We carry multiple manufacturer lines so we can recommend the right product for your specific home rather than forcing one brand on every project. The right Pella product line depends on era of construction, target price point, and the architectural details &mdash; window proportions, grille patterns, hardware finishes &mdash; you want to honor.</p>
            </div>
            <div>
              <h3 className="text-lg font-medium text-charcoal-900 mb-3">What Pella product lines do you install most often in Irving?</h3>
              <p className="text-charcoal-600 leading-relaxed">Pella Lifestyle is a frequent Irving spec when integrated blinds are part of the brief; Pella Reserve handles the historic restorations. For premium remodels and historic restorations, we step up to the higher-tier lines. For value-engineered whole-home replacements, the standard lines deliver strong thermal performance at fair pricing. We&apos;ll bring sample frames and glass cutaways to the consultation so you can compare profiles against your existing trim.</p>
            </div>
            <div>
              <h3 className="text-lg font-medium text-charcoal-900 mb-3">How do Pella warranties compare?</h3>
              <p className="text-charcoal-600 leading-relaxed">Pella warranties register limited lifetime on the IGU and frame for most premium product lines, with shorter terms on hardware and finishes. We register the warranty in your name on the day of completion, and you receive the manufacturer paperwork in a binder along with our written craftsmanship guarantee on the labor. Our guarantee covers install workmanship for ten years and rides on top of whatever the manufacturer offers.</p>
            </div>
            <div>
              <h3 className="text-lg font-medium text-charcoal-900 mb-3">What does the Pella install process look like in Irving?</h3>
              <p className="text-charcoal-600 leading-relaxed">Our installers complete factory training programs for Pella products, which matters because each manufacturer has specific requirements for shimming, foam type, sealant compatibility, and flashing tape. Most Irving whole-home replacements run two to three working days. Floors get rosin paper, furniture covered in 6-mil plastic, dust collection on every indoor cut, HEPA vacuum at the end of each shift. The final walkthrough happens with you alongside the lead installer, every sash demonstrated, every warranty registered.</p>
            </div>
            <div>
              <h3 className="text-lg font-medium text-charcoal-900 mb-3">What does Pella pricing look like?</h3>
              <p className="text-charcoal-600 leading-relaxed">Pella pricing varies sharply by product line. Standard vinyl runs at the value end of the spectrum, while premium wood-clad and aluminum-clad lines sit at the higher end. We provide written, itemized pricing per opening, listing frame material, exterior and interior finish, hardware, screen type, and glass package. There are no broker commissions tucked in, and you can take the quote, get competitive bids, and decide on your own timeline.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-stone-100">
        <div className="max-w-[1100px] mx-auto px-6 lg:px-12">
          <h2 className="text-heading-serif text-3xl md:text-4xl text-charcoal-900 font-light mb-8">Pella installation in Irving</h2>
          <p className="text-charcoal-600 leading-relaxed mb-4">Our Pella installs in Irving range across every neighborhood and housing era &mdash; the older Plymouth Park ranches, Las Colinas mid-rise condos, Valley Ranch family homes, Cottonwood Valley customs, and the contemporary builds going up along the SH-161 corridor. Our crews complete factory training programs for Pella products, which matters because each manufacturer has specific requirements for shimming, fastener schedule, foam type, sealant compatibility, and flashing tape detail.</p>
          <p className="text-charcoal-600 leading-relaxed mb-4">DFW Airport noise routes over much of Irving on most days, particularly along the MacArthur Boulevard spine and the north Irving sections nearest the runway. We routinely scope Pella laminated acoustic IGUs on bedroom and home-office windows facing the flight path, with standard Low-E coatings on the protected sides. The perceptual change inside the room is immediate.</p>
          <p className="text-charcoal-600 leading-relaxed">Each install includes the Pella manufacturer warranty plus our written ten-year craftsmanship guarantee on the labor. The warranty registers in your name on the day of completion, and you receive the manufacturer paperwork in a binder along with our guarantee documentation.</p>
        </div>
      </section>

      <section className="py-24 md:py-32 bg-charcoal-500">
        <div className="max-w-[800px] mx-auto px-6 text-center">
          <h2 className="text-heading-serif text-3xl md:text-4xl text-white font-light mb-6 leading-relaxed">
            Ready to install Pella windows and doors in Irving?
          </h2>
          <p className="text-stone-300 text-base mb-10">
            Get a free consultation and quote for your Pella installation project.
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
