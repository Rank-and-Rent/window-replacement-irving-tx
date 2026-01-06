import { PageHeader } from '@/components/page-header'
import { PageFooter } from '@/components/page-footer'
import { locationsData } from '@/data'

const windowTypes = [
  {
    name: 'Double-Hung Windows',
    slug: 'double-hung-windows',
    image: '/windows/double-hung-windows-irving-tx.avif',
  },
  {
    name: 'Single-Hung Windows',
    slug: 'single-hung-windows',
    image: '/windows/single-hung-windows-irving-tx.jpg',
  },
  {
    name: 'Casement Windows',
    slug: 'casement-windows',
    image: '/windows/casement-windows-irving-tx.webp',
  },
]

const allWindowTypes = [
  'Double-Hung Windows',
  'Single-Hung Windows',
  'Awning Windows',
  'Casement Windows',
  'Sliding Windows',
  'Picture Windows',
  'Bay & Bow Windows',
  'Special Shape Windows',
]

const doorTypes = [
  {
    name: 'Entry Doors',
    slug: 'entry-door-installation',
    image: '/doors/entry-doors-irving-tx.jpg',
  },
  {
    name: 'French Doors',
    slug: 'french-door-installation',
    image: '/doors/french-doors-irving-tx.png',
  },
  {
    name: 'Patio Doors',
    slug: 'patio-door-installation',
    image: '/doors/patio-doors-irving-tx.png',
  },
]

const brands = ['Andersen', 'Pella', 'Jeld-Wen', 'Marvin']

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      <PageHeader />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center">
        {/* Brand Logos Banner - positioned below fixed header */}
        <div className="absolute top-[140px] left-0 right-0 z-20 bg-white/90 backdrop-blur-sm border-b border-gray-200/20">
          <div className="max-w-[1400px] mx-auto px-4 lg:px-12 py-3 lg:py-4">
            <div className="flex items-center justify-center gap-3 sm:gap-4 lg:gap-8">
              <span className="hidden sm:inline text-sm font-medium text-gray-700 mr-2 lg:mr-4">Trusted Brands:</span>
              <a href="/brands" className="hover:opacity-80 transition-opacity flex-shrink-0">
                <img
                  src="/andersen-windows-and-doors-irving-tx-logo.png"
                  alt="Andersen Windows & Doors"
                  className="h-6 sm:h-8 lg:h-10 w-auto"
                />
              </a>
              <a href="/brands" className="hover:opacity-80 transition-opacity flex-shrink-0">
                <img
                  src="/pella-windows-and-doors-irving-tx-logo.png"
                  alt="Pella Windows & Doors"
                  className="h-6 sm:h-8 lg:h-10 w-auto"
                />
              </a>
              <a href="/brands" className="hover:opacity-80 transition-opacity flex-shrink-0">
                <img
                  src="/jeld-wen-windows-and-doors-irving-tx-logo.png"
                  alt="Jeld-Wen Windows & Doors"
                  className="h-6 sm:h-8 lg:h-10 w-auto"
                />
              </a>
              <a href="/brands" className="hover:opacity-80 transition-opacity flex-shrink-0">
                <img
                  src="/marvin-windows-and-doors-irving-tx-logo.png"
                  alt="Marvin Windows & Doors"
                  className="h-6 sm:h-8 lg:h-10 w-auto"
                />
              </a>
            </div>
          </div>
        </div>

        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(/windows/double-hung-windows-irving-tx.avif)',
          }}
        />
        <div className="hero-overlay absolute inset-0" />
        
        <div className="relative z-10 w-full text-center px-6 pt-48">
          <h1 className="text-heading-serif text-4xl md:text-5xl lg:text-6xl text-white font-light mb-6 max-w-4xl mx-auto leading-tight">
            Premium Window Replacement in Irving, TX
          </h1>
          <p className="text-heading-serif text-xl md:text-2xl text-white/90 italic mb-4 max-w-2xl mx-auto">
            Measured, customized, installed with precision. It&apos;s that easy.
          </p>
          <p className="text-white/70 text-sm md:text-base mb-10 max-w-xl mx-auto">
            Expert Andersen, Pella & Jeld-Wen window installation for homes in Irving and the DFW metroplex.
          </p>
          <a href="/contact" className="btn-white">
            Get a Quote
          </a>
        </div>
      </section>

      {/* Window Types Section - 3 Cards */}
      <section className="py-20 md:py-28 bg-stone-100">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="grid md:grid-cols-3 gap-8 lg:gap-12 mb-12">
            {windowTypes.map((window) => (
              <a
                key={window.slug}
                href={`/windows/${window.slug}`}
                className="group block"
              >
                <div className="aspect-[4/5] overflow-hidden mb-6">
                  <img
                    src={window.image}
                    alt={window.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <h3 className="text-center text-[13px] tracking-[0.2em] uppercase font-medium text-charcoal-900">
                  {window.name}
                </h3>
              </a>
            ))}
          </div>
          <div className="text-center">
            <a href="/windows" className="btn-outline-dark">
              View All Windows
            </a>
          </div>
        </div>
      </section>

      {/* Door Types Section - 3 Cards */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="grid md:grid-cols-3 gap-8 lg:gap-12 mb-12">
            {doorTypes.map((door) => (
              <a
                key={door.slug}
                href={`/doors/${door.slug}`}
                className="group block"
              >
                <div className="aspect-[4/5] overflow-hidden mb-6">
                  <img
                    src={door.image}
                    alt={door.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <h3 className="text-center text-[13px] tracking-[0.2em] uppercase font-medium text-charcoal-900">
                  {door.name}
                </h3>
              </a>
            ))}
          </div>
          <div className="text-center">
            <a href="/doors" className="btn-outline-dark">
              View All Doors
            </a>
          </div>
        </div>
      </section>

      {/* Materials Section - 3 Cards */}
      <section className="py-20 md:py-28 bg-stone-100">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <h2 className="text-heading-serif text-3xl md:text-4xl text-charcoal-900 font-light text-center mb-12">
            Window Materials
          </h2>
          <div className="grid md:grid-cols-3 gap-8 lg:gap-12 mb-12">
            <a
              href="/windows/vinyl-windows"
              className="group block"
            >
              <div className="aspect-[4/5] overflow-hidden mb-6">
                <img
                  src="/window-types/vinyl-irving-tx.jpg"
                  alt="Vinyl Windows"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <h3 className="text-center text-[13px] tracking-[0.2em] uppercase font-medium text-charcoal-900">
                Vinyl Windows
              </h3>
            </a>
            <a
              href="/windows/aluminum-windows"
              className="group block"
            >
              <div className="aspect-[4/5] overflow-hidden mb-6">
                <img
                  src="/window-types/aluminum-irving-tx.jpg"
                  alt="Aluminum Windows"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <h3 className="text-center text-[13px] tracking-[0.2em] uppercase font-medium text-charcoal-900">
                Aluminum Windows
              </h3>
            </a>
            <a
              href="/windows/fibrex-windows"
              className="group block"
            >
              <div className="aspect-[4/5] overflow-hidden mb-6">
                <img
                  src="/window-types/fibrex-irving-tx.jpg"
                  alt="Fibrex Windows"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <h3 className="text-center text-[13px] tracking-[0.2em] uppercase font-medium text-charcoal-900">
                Fibrex Windows
              </h3>
            </a>
          </div>
          <div className="text-center">
            <a href="/materials" className="btn-outline-dark">
              View All Materials
            </a>
          </div>
        </div>
      </section>

      {/* Mission Statement - Dark Section */}
      <section className="py-24 md:py-32 bg-charcoal-500">
        <div className="max-w-[1000px] mx-auto px-6 lg:px-12">
          <h2 className="text-heading-serif text-3xl md:text-4xl lg:text-[42px] text-white font-light leading-relaxed mb-8">
            Replacement Windows of Irving is focused on making each client experience unique.
          </h2>
          <div className="max-w-2xl ml-auto">
            <p className="text-stone-300 text-base leading-relaxed mb-4">
              Replacement Windows of Irving is committed to making modern, reliable, and <strong className="text-white font-medium">custom window solutions</strong> accessible and easy for everyone in Irving and the DFW metroplex.
            </p>
            <p className="text-stone-300 text-base leading-relaxed">
              Focused on offering high-quality products and services that are custom-made to ensure they are perfect for each space and client&apos;s taste.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Image */}
            <div>
              <img
                src="/windows/double-hung-windows-irving-tx.avif"
                alt="Modern living room with premium replacement windows"
                className="w-full aspect-[4/3] object-cover"
              />
            </div>
            
            {/* Content */}
            <div>
              <h2 className="text-heading-serif text-3xl md:text-4xl text-charcoal-900 font-light mb-8">
                Our story
              </h2>
              <p className="text-charcoal-600 text-base leading-relaxed mb-6">
                Replacement Windows of Irving is a <strong className="text-charcoal-900 font-medium">dedicated installer of premium windows</strong>. Based in Irving, TX, we specialize in installing both standard and energy-efficient replacement windows with a commitment to quality and innovation.
              </p>
              <p className="text-charcoal-600 text-base leading-relaxed mb-10">
                We aim to deliver high-quality yet accessible, custom-made installations that perfectly fit each space for residential homes throughout the Irving area.
              </p>
              <a href="/about" className="btn-outline-dark">
                Learn More About Us
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Brands We Carry */}
      <section className="py-16 bg-white border-y border-stone-200">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <h2 className="text-center text-[13px] tracking-[0.2em] uppercase font-medium text-charcoal-400 mb-12">
            Brands we carry
          </h2>
          <div className="flex flex-wrap justify-center items-center gap-8 lg:gap-12 max-w-6xl mx-auto">
            <a href="/brands/andersen" className="hover:opacity-80 transition-opacity">
              <img
                src="/andersen-windows-and-doors-irving-tx-logo.png"
                alt="Andersen Windows & Doors"
                className="h-16 lg:h-20 w-auto"
              />
            </a>
            <a href="/brands/pella" className="hover:opacity-80 transition-opacity">
              <img
                src="/pella-windows-and-doors-irving-tx-logo.png"
                alt="Pella Windows & Doors"
                className="h-16 lg:h-20 w-auto"
              />
            </a>
            <a href="/brands/jeld-wen" className="hover:opacity-80 transition-opacity">
              <img
                src="/jeld-wen-windows-and-doors-irving-tx-logo.png"
                alt="Jeld-Wen Windows & Doors"
                className="h-16 lg:h-20 w-auto"
              />
            </a>
            <a href="/brands/marvin" className="hover:opacity-80 transition-opacity">
              <img
                src="/marvin-windows-and-doors-irving-tx-logo.png"
                alt="Marvin Windows & Doors"
                className="h-16 lg:h-20 w-auto"
              />
            </a>
          </div>
        </div>
      </section>


      {/* Service Areas Section */}
      <section className="py-20 md:py-28 bg-stone-100">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <h2 className="text-heading-serif text-3xl md:text-4xl text-charcoal-900 font-light text-center mb-12">
            Service Areas
          </h2>
          <p className="text-center text-charcoal-600 mb-12 max-w-2xl mx-auto">
            Professional window and door installation throughout Irving and surrounding Dallas-Fort Worth communities.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 max-w-5xl mx-auto mb-8">
            {locationsData.filter(loc => loc.type === 'city').slice(0, 10).map((location) => (
              <a
                key={location.slug}
                href={location.route}
                className="bg-white p-6 rounded text-center hover:bg-charcoal-900 hover:text-white transition-colors text-sm font-medium"
              >
                {location.name}
              </a>
            ))}
          </div>
          <div className="text-center">
            <a href="/locations" className="btn-outline-dark">
              View All Service Areas
            </a>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 md:py-32 bg-charcoal-500">
        <div className="max-w-[800px] mx-auto px-6 text-center">
          <h2 className="text-heading-serif text-3xl md:text-4xl text-white font-light mb-6 leading-relaxed">
            Ready to Transform Your Irving Home?
          </h2>
          <p className="text-stone-300 text-lg mb-8">
            Get a free, no-obligation quote from Irving&apos;s window replacement experts.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a href="/contact" className="btn-white">
              Get Free Quote
            </a>
            <a href="tel:972-284-7995" className="text-white hover:text-stone-300 transition-colors font-medium">
              Call 972-284-7995
            </a>
          </div>
        </div>
      </section>

      <PageFooter />
    </div>
  )
}
