'use client'

import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { 
  faChevronDown,
  faBars,
  faTimes,
} from '@fortawesome/free-solid-svg-icons'

const windowTypes = [
  {
    name: 'Double-Hung Windows',
    slug: 'double-hung-windows',
    image: 'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=800&q=80',
  },
  {
    name: 'Single-Hung Windows',
    slug: 'single-hung-windows',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80',
  },
  {
    name: 'Casement Windows',
    slug: 'casement-windows',
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80',
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

const brands = ['Andersen', 'Pella', 'Jeld-Wen']

const galleryImages = [
  'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=600&q=80',
  'https://images.unsplash.com/photo-1600210492493-0946911123ea?w=600&q=80',
  'https://images.unsplash.com/photo-1600573472550-8090b5e0745e?w=600&q=80',
  'https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=600&q=80',
  'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=600&q=80',
  'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=600&q=80',
]

export default function HomePage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-charcoal-600/95 backdrop-blur-sm">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="flex items-center justify-between py-4">
            {/* Circular Logo */}
            <a href="/" className="flex-shrink-0">
              <svg 
                viewBox="0 0 120 120" 
                className="w-[100px] h-[100px] md:w-[120px] md:h-[120px] text-white"
              >
                {/* Outer circle text path */}
                <defs>
                  <path
                    id="circlePath"
                    d="M 60, 60 m -45, 0 a 45,45 0 1,1 90,0 a 45,45 0 1,1 -90,0"
                  />
                  <path
                    id="circlePathBottom"
                    d="M 60, 60 m 45, 0 a 45,45 0 1,1 -90,0 a 45,45 0 1,1 90,0"
                  />
                </defs>
                
                {/* Top arc text - REPLACEMENT WINDOWS */}
                <text fill="currentColor" fontSize="9" fontFamily="Montserrat, sans-serif" letterSpacing="0.15em">
                  <textPath href="#circlePath" startOffset="15%">
                    REPLACEMENT WINDOWS
                  </textPath>
                </text>
                
                {/* Bottom arc text - IRVING TEXAS */}
                <text fill="currentColor" fontSize="9" fontFamily="Montserrat, sans-serif" letterSpacing="0.15em">
                  <textPath href="#circlePathBottom" startOffset="25%">
                    IRVING TEXAS
                  </textPath>
                </text>
                
                {/* Center text */}
                <text 
                  x="60" 
                  y="55" 
                  textAnchor="middle" 
                  fill="currentColor" 
                  fontSize="11" 
                  fontFamily="Montserrat, sans-serif"
                  fontWeight="500"
                  letterSpacing="0.05em"
                >
                  THE
                </text>
                <text 
                  x="60" 
                  y="68" 
                  textAnchor="middle" 
                  fill="currentColor" 
                  fontSize="11" 
                  fontFamily="Montserrat, sans-serif"
                  fontWeight="500"
                  letterSpacing="0.05em"
                >
                  WINDOW
                </text>
                <text 
                  x="60" 
                  y="81" 
                  textAnchor="middle" 
                  fill="currentColor" 
                  fontSize="11" 
                  fontFamily="Montserrat, sans-serif"
                  fontWeight="500"
                  letterSpacing="0.05em"
                >
                  EXPERTS
                </text>
              </svg>
            </a>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-8">
              {/* Windows Dropdown */}
              <div className="nav-dropdown">
                <button className="flex items-center gap-2 text-white text-[13px] tracking-[0.15em] uppercase font-medium hover:text-stone-300 transition-colors py-2">
                  Windows
                  <FontAwesomeIcon icon={faChevronDown} className="w-3 h-3" />
                </button>
                <div className="nav-dropdown-content py-4">
                  {allWindowTypes.map((type) => (
                    <a
                      key={type}
                      href={`/windows/${type.toLowerCase().replace(/\s+/g, '-').replace('&', 'and')}`}
                      className="block px-6 py-2 text-charcoal-700 hover:bg-stone-100 text-[13px] tracking-wide"
                    >
                      {type}
                    </a>
                  ))}
                </div>
              </div>

              {/* Brands Dropdown */}
              <div className="nav-dropdown">
                <button className="flex items-center gap-2 text-white text-[13px] tracking-[0.15em] uppercase font-medium hover:text-stone-300 transition-colors py-2">
                  Brands
                  <FontAwesomeIcon icon={faChevronDown} className="w-3 h-3" />
                </button>
                <div className="nav-dropdown-content py-4">
                  {brands.map((brand) => (
                    <a
                      key={brand}
                      href={`/brands/${brand.toLowerCase()}`}
                      className="block px-6 py-2 text-charcoal-700 hover:bg-stone-100 text-[13px] tracking-wide"
                    >
                      {brand}
                    </a>
                  ))}
                </div>
              </div>

              <a href="/services" className="text-white text-[13px] tracking-[0.15em] uppercase font-medium hover:text-stone-300 transition-colors py-2">
                Services
              </a>

              {/* Areas Dropdown */}
              <div className="nav-dropdown">
                <button className="flex items-center gap-2 text-white text-[13px] tracking-[0.15em] uppercase font-medium hover:text-stone-300 transition-colors py-2">
                  Areas We Serve
                  <FontAwesomeIcon icon={faChevronDown} className="w-3 h-3" />
                </button>
                <div className="nav-dropdown-content py-4">
                  {['Irving', 'Dallas', 'Fort Worth', 'Arlington', 'Plano', 'Carrollton'].map((area) => (
                    <a
                      key={area}
                      href={`/areas/${area.toLowerCase().replace(/\s+/g, '-')}`}
                      className="block px-6 py-2 text-charcoal-700 hover:bg-stone-100 text-[13px] tracking-wide"
                    >
                      {area}
                    </a>
                  ))}
                </div>
              </div>

              <a href="/gallery" className="text-white text-[13px] tracking-[0.15em] uppercase font-medium hover:text-stone-300 transition-colors py-2">
                Gallery
              </a>

              <a href="/contact" className="text-white text-[13px] tracking-[0.15em] uppercase font-medium hover:text-stone-300 transition-colors py-2">
                Contact
              </a>
            </nav>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-white"
              aria-label="Toggle menu"
            >
              <FontAwesomeIcon icon={mobileMenuOpen ? faTimes : faBars} className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-charcoal-600 border-t border-charcoal-500">
            <nav className="max-w-[1400px] mx-auto px-6 py-6">
              <div className="space-y-4">
                <div>
                  <span className="text-stone-400 text-[11px] tracking-[0.2em] uppercase block mb-2">Windows</span>
                  {allWindowTypes.map((type) => (
                    <a key={type} href={`/windows/${type.toLowerCase().replace(/\s+/g, '-')}`} className="block py-2 text-white text-sm">
                      {type}
                    </a>
                  ))}
                </div>
                <div>
                  <span className="text-stone-400 text-[11px] tracking-[0.2em] uppercase block mb-2">Brands</span>
                  {brands.map((brand) => (
                    <a key={brand} href={`/brands/${brand.toLowerCase()}`} className="block py-2 text-white text-sm">
                      {brand}
                    </a>
                  ))}
                </div>
                <a href="/services" className="block py-2 text-white text-sm">Services</a>
                <a href="/gallery" className="block py-2 text-white text-sm">Gallery</a>
                <a href="/contact" className="block py-2 text-white text-sm">Contact</a>
              </div>
            </nav>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1920&q=80)',
          }}
        />
        <div className="hero-overlay absolute inset-0" />
        
        <div className="relative z-10 w-full text-center px-6 pt-32">
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
          <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
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
                src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1000&q=80"
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
                Started as a humble family business, Replacement Windows of Irving has evolved into a <strong className="text-charcoal-900 font-medium">dedicated installer of premium windows</strong>. Based in Irving, TX, the company specializes in installing both standard and energy-efficient replacement windows with a commitment to quality and innovation.
              </p>
              <p className="text-charcoal-600 text-base leading-relaxed mb-10">
                With years of experience, the brand aims to deliver high-quality yet accessible, custom-made installations that perfectly fit each space &mdash; from commercial, designer to residential homes.
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
          <div className="flex flex-wrap justify-center items-center gap-12 md:gap-20">
            {brands.map((brand) => (
              <a 
                key={brand}
                href={`/brands/${brand.toLowerCase()}`}
                className="text-2xl md:text-3xl font-light text-charcoal-400 hover:text-charcoal-900 transition-colors tracking-wide"
              >
                {brand.toUpperCase()}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery / Get Inspired */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <h2 className="text-heading-serif text-3xl md:text-4xl text-charcoal-900 font-light text-center mb-12">
            Get inspired
          </h2>
          
          {/* Masonry-style Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {/* Left tall image */}
            <div className="row-span-2">
              <img
                src={galleryImages[0]}
                alt="Window installation project"
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Center large image spanning 2 columns and 2 rows */}
            <div className="col-span-2 row-span-2">
              <img
                src={galleryImages[1]}
                alt="Window installation project"
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Right column - 2 stacked images */}
            <div>
              <img
                src={galleryImages[2]}
                alt="Window installation project"
                className="w-full h-full object-cover aspect-square"
              />
            </div>
            <div>
              <img
                src={galleryImages[3]}
                alt="Window installation project"
                className="w-full h-full object-cover aspect-square"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 md:py-32 bg-stone-100">
        <div className="max-w-[800px] mx-auto px-6 text-center">
          <h2 className="text-heading-serif text-3xl md:text-4xl text-charcoal-900 font-light mb-10 leading-relaxed">
            Book a complimentary design consultation in Irving, TX.
          </h2>
          <a href="/contact" className="btn-outline-dark">
            Get in Touch
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-charcoal-500 text-white pt-16 pb-8">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          {/* Footer Links Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 pb-12 border-b border-charcoal-400">
            {/* Navigate */}
            <div>
              <h3 className="text-[13px] tracking-[0.15em] uppercase font-medium mb-6">
                Navigate
              </h3>
              <ul className="space-y-3">
                <li><a href="/about" className="footer-link">About</a></li>
                <li><a href="/services" className="footer-link">Services</a></li>
                <li><a href="/gallery" className="footer-link">Gallery</a></li>
                <li><a href="/contact" className="footer-link">Contact</a></li>
              </ul>
            </div>

            {/* Catalog */}
            <div>
              <h3 className="text-[13px] tracking-[0.15em] uppercase font-medium mb-6">
                Windows
              </h3>
              <ul className="space-y-3">
                <li><a href="/windows/double-hung-windows" className="footer-link">Double-Hung</a></li>
                <li><a href="/windows/single-hung-windows" className="footer-link">Single-Hung</a></li>
                <li><a href="/windows/casement-windows" className="footer-link">Casement</a></li>
                <li><a href="/windows" className="footer-link">All Windows</a></li>
              </ul>
            </div>

            {/* Connect */}
            <div>
              <h3 className="text-[13px] tracking-[0.15em] uppercase font-medium mb-6">
                Connect
              </h3>
              <ul className="space-y-3">
                <li><a href="mailto:info@replacementwindowsirving.com" className="footer-link">Email</a></li>
                <li><a href="tel:972-284-7995" className="footer-link">Phone</a></li>
                <li><a href="#" className="footer-link">Facebook</a></li>
                <li><a href="#" className="footer-link">Instagram</a></li>
              </ul>
            </div>

            {/* Legal */}
            <div>
              <h3 className="text-[13px] tracking-[0.15em] uppercase font-medium mb-6">
                Legal
              </h3>
              <ul className="space-y-3">
                <li><a href="/terms" className="footer-link">Site Terms</a></li>
                <li><a href="/privacy" className="footer-link">Privacy Policy</a></li>
                <li><a href="/cookies" className="footer-link">Cookie Policy</a></li>
                <li><a href="#top" className="footer-link">Back to Top</a></li>
              </ul>
            </div>
          </div>

          {/* Instagram Feed Placeholder */}
          <div className="py-12 border-b border-charcoal-400">
            <h3 className="text-center text-xl md:text-2xl font-light tracking-wide mb-8">
              @replacementwindowsirving
            </h3>
            <div className="grid grid-cols-3 md:grid-cols-6 gap-2">
              {galleryImages.map((img, index) => (
                <a 
                  key={index}
                  href="#"
                  className="aspect-square overflow-hidden group"
                >
                  <img
                    src={img}
                    alt={`Instagram post ${index + 1}`}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </a>
              ))}
            </div>
          </div>

          {/* Copyright */}
          <div className="pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-stone-400">
            <p>&copy; {new Date().getFullYear()} Replacement Windows of Irving</p>
            <p>909 Hidden Ridge Dr #180, Irving, TX 75038 | 972-284-7995</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
