'use client'

import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { 
  faChevronDown,
  faBars,
  faTimes,
} from '@fortawesome/free-solid-svg-icons'

const allWindowTypes = [
  { name: 'Double-Hung Windows', slug: 'double-hung-windows' },
  { name: 'Single-Hung Windows', slug: 'single-hung-windows' },
  { name: 'Awning Windows', slug: 'awning-windows' },
  { name: 'Casement Windows', slug: 'casement-windows' },
  { name: 'Sliding Windows', slug: 'sliding-windows' },
  { name: 'Picture Windows', slug: 'picture-windows' },
  { name: 'Bay & Bow Windows', slug: 'bay-bow-windows' },
  { name: 'Special Shape Windows', slug: 'special-shape-windows' },
]

const brands = ['Andersen', 'Pella', 'Jeld-Wen']

const locations = [
  'Fort Worth', 'Arlington', 'Dallas', 'Irving', 'Grand Prairie',
  'Plano', 'Garland', 'Frisco', 'McKinney', 'Denton',
  'Carrollton', 'Lewisville', 'Richardson', 'Grapevine', 'Mesquite'
]

export function PageHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-charcoal-600/95 backdrop-blur-sm">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between py-4">
          {/* Circular Logo */}
          <a href="/" className="flex-shrink-0">
            <svg 
              viewBox="0 0 120 120" 
              className="w-[100px] h-[100px] md:w-[120px] md:h-[120px] text-white"
            >
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
              
              <text fill="currentColor" fontSize="9" fontFamily="Montserrat, sans-serif" letterSpacing="0.15em">
                <textPath href="#circlePath" startOffset="15%">
                  REPLACEMENT WINDOWS
                </textPath>
              </text>
              
              <text fill="currentColor" fontSize="9" fontFamily="Montserrat, sans-serif" letterSpacing="0.15em">
                <textPath href="#circlePathBottom" startOffset="25%">
                  IRVING TEXAS
                </textPath>
              </text>
              
              <text x="60" y="55" textAnchor="middle" fill="currentColor" fontSize="11" fontFamily="Montserrat, sans-serif" fontWeight="500" letterSpacing="0.05em">
                THE
              </text>
              <text x="60" y="68" textAnchor="middle" fill="currentColor" fontSize="11" fontFamily="Montserrat, sans-serif" fontWeight="500" letterSpacing="0.05em">
                WINDOW
              </text>
              <text x="60" y="81" textAnchor="middle" fill="currentColor" fontSize="11" fontFamily="Montserrat, sans-serif" fontWeight="500" letterSpacing="0.05em">
                EXPERTS
              </text>
            </svg>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            <div className="nav-dropdown">
              <button className="flex items-center gap-2 text-white text-[13px] tracking-[0.15em] uppercase font-medium hover:text-stone-300 transition-colors py-2">
                Windows
                <FontAwesomeIcon icon={faChevronDown} className="w-3 h-3" />
              </button>
              <div className="nav-dropdown-content py-4">
                {allWindowTypes.map((type) => (
                  <a
                    key={type.slug}
                    href={`/windows/${type.slug}`}
                    className="block px-6 py-2 text-charcoal-700 hover:bg-stone-100 text-[13px] tracking-wide"
                  >
                    {type.name}
                  </a>
                ))}
              </div>
            </div>

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

            <div className="nav-dropdown">
              <button className="flex items-center gap-2 text-white text-[13px] tracking-[0.15em] uppercase font-medium hover:text-stone-300 transition-colors py-2">
                Areas We Serve
                <FontAwesomeIcon icon={faChevronDown} className="w-3 h-3" />
              </button>
              <div className="nav-dropdown-content py-4 max-h-[400px] overflow-y-auto">
                {locations.map((area) => (
                  <a
                    key={area}
                    href={`/locations/${area.toLowerCase().replace(/\s+/g, '-')}`}
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

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-white"
            aria-label="Toggle menu"
          >
            <FontAwesomeIcon icon={mobileMenuOpen ? faTimes : faBars} className="w-6 h-6" />
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="lg:hidden bg-charcoal-600 border-t border-charcoal-500 max-h-[80vh] overflow-y-auto">
          <nav className="max-w-[1400px] mx-auto px-6 py-6">
            <div className="space-y-4">
              <div>
                <span className="text-stone-400 text-[11px] tracking-[0.2em] uppercase block mb-2">Windows</span>
                {allWindowTypes.map((type) => (
                  <a key={type.slug} href={`/windows/${type.slug}`} className="block py-2 text-white text-sm">
                    {type.name}
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
              <div>
                <span className="text-stone-400 text-[11px] tracking-[0.2em] uppercase block mb-2">Locations</span>
                {locations.map((area) => (
                  <a key={area} href={`/locations/${area.toLowerCase().replace(/\s+/g, '-')}`} className="block py-2 text-white text-sm">
                    {area}
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
  )
}



