import { PageHeader } from '@/components/page-header'
import { PageFooter } from '@/components/page-footer'
import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="min-h-screen bg-white">
      <PageHeader />

      <section className="py-32 md:py-40 pt-48">
        <div className="max-w-[800px] mx-auto px-6 text-center">
          <h1 className="text-heading-serif text-6xl md:text-7xl lg:text-8xl text-charcoal-900 font-light mb-6">
            404
          </h1>
          <h2 className="text-heading-serif text-3xl md:text-4xl text-charcoal-900 font-light mb-8">
            Page Not Found
          </h2>
          <p className="text-charcoal-600 text-base leading-relaxed mb-10 max-w-2xl mx-auto">
            The page you&apos;re looking for doesn&apos;t exist. It may have been moved or deleted. Let&apos;s get you back on track.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/" className="btn-dark">
              Go Home
            </Link>
            <Link href="/contact" className="btn-outline-dark">
              Contact Us
            </Link>
          </div>

          {/* Quick Links */}
          <div className="mt-16 pt-16 border-t border-stone-200">
            <h3 className="text-[13px] tracking-[0.15em] uppercase font-medium text-charcoal-900 mb-8">
              Popular Pages
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <Link href="/windows" className="text-charcoal-600 hover:text-charcoal-900 text-sm">
                Windows
              </Link>
              <Link href="/doors" className="text-charcoal-600 hover:text-charcoal-900 text-sm">
                Doors
              </Link>
              <Link href="/brands" className="text-charcoal-600 hover:text-charcoal-900 text-sm">
                Brands
              </Link>
              <Link href="/locations" className="text-charcoal-600 hover:text-charcoal-900 text-sm">
                Locations
              </Link>
              <Link href="/about" className="text-charcoal-600 hover:text-charcoal-900 text-sm">
                About Us
              </Link>
              <Link href="/contact" className="text-charcoal-600 hover:text-charcoal-900 text-sm">
                Contact
              </Link>
              <Link href="/windows/double-hung-windows" className="text-charcoal-600 hover:text-charcoal-900 text-sm">
                Double-Hung Windows
              </Link>
              <Link href="/doors/entry-door-installation" className="text-charcoal-600 hover:text-charcoal-900 text-sm">
                Entry Doors
              </Link>
            </div>
          </div>
        </div>
      </section>

      <PageFooter />
    </div>
  )
}
