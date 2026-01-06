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

const allDoorTypes = [
  { name: 'Entry Doors', slug: 'entry-door-installation' },
  { name: 'Patio Doors', slug: 'patio-door-installation' },
  { name: 'French Doors', slug: 'french-door-installation' },
  { name: 'Sliding Glass Doors', slug: 'sliding-glass-door-installation' },
  { name: 'Storm Doors', slug: 'storm-door-installation' },
  { name: 'Custom Doors', slug: 'custom-door-installation' },
]

const allMaterialTypes = [
  { name: 'Vinyl Windows', slug: 'vinyl-windows' },
  { name: 'Aluminum Windows', slug: 'aluminum-windows' },
  { name: 'Fibrex Windows', slug: 'fibrex-windows' },
  { name: 'Fiberglass Windows', slug: 'fiberglass-windows' },
  { name: 'Wood Clad Windows', slug: 'wood-clad-windows' },
  { name: 'Wood Windows', slug: 'wood-windows' },
]

const brands = [
  { name: 'Andersen', slug: 'andersen-windows-doors' },
  { name: 'Pella', slug: 'pella-windows-doors' },
  { name: 'JELD-WEN', slug: 'jeld-wen-windows-doors' },
  { name: 'Marvin', slug: 'marvin-windows-doors' },
]

const locations = [
  'Irving', 'Dallas', 'Grand Prairie', 'Coppell', 'Euless',
  'Bedford', 'Grapevine', 'Carrollton', 'Farmers Branch', 'Addison'
]

export function PageHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-charcoal-600/95 backdrop-blur-sm">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <a href="/" className="flex-shrink-0">
            <img
              src="/replacement-windows-irving-tx-logo.png"
              alt="Replacement Windows Irving TX"
              className="w-[100px] h-[100px] md:w-[120px] md:h-[120px] object-contain"
            />
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
                    key={type.slug}
                    href={`/windows/${type.slug}`}
                    className="block px-6 py-2 text-charcoal-700 hover:bg-stone-100 text-[13px] tracking-wide"
                  >
                    {type.name}
                  </a>
                ))}
                <div className="border-t border-stone-300 mt-2 pt-2">
                  <a
                    href="/windows"
                    className="block px-6 py-2 text-charcoal-900 hover:bg-stone-200 text-[13px] font-semibold tracking-wide bg-stone-50"
                  >
                    View All Windows
                  </a>
                </div>
              </div>
            </div>

            {/* Doors Dropdown */}
            <div className="nav-dropdown">
              <button className="flex items-center gap-2 text-white text-[13px] tracking-[0.15em] uppercase font-medium hover:text-stone-300 transition-colors py-2">
                Doors
                <FontAwesomeIcon icon={faChevronDown} className="w-3 h-3" />
              </button>
              <div className="nav-dropdown-content py-4">
                {allDoorTypes.map((type) => (
                  <a
                    key={type.slug}
                    href={`/doors/${type.slug}`}
                    className="block px-6 py-2 text-charcoal-700 hover:bg-stone-100 text-[13px] tracking-wide"
                  >
                    {type.name}
                  </a>
                ))}
                <div className="border-t border-stone-300 mt-2 pt-2">
                  <a
                    href="/doors"
                    className="block px-6 py-2 text-charcoal-900 hover:bg-stone-200 text-[13px] font-semibold tracking-wide bg-stone-50"
                  >
                    View All Doors
                  </a>
                </div>
              </div>
            </div>

            {/* Materials Dropdown */}
            <div className="nav-dropdown">
              <button className="flex items-center gap-2 text-white text-[13px] tracking-[0.15em] uppercase font-medium hover:text-stone-300 transition-colors py-2">
                Materials
                <FontAwesomeIcon icon={faChevronDown} className="w-3 h-3" />
              </button>
              <div className="nav-dropdown-content py-4">
                {allMaterialTypes.map((type) => (
                  <a
                    key={type.slug}
                    href={`/windows/${type.slug}`}
                    className="block px-6 py-2 text-charcoal-700 hover:bg-stone-100 text-[13px] tracking-wide"
                  >
                    {type.name}
                  </a>
                ))}
                <div className="border-t border-stone-300 mt-2 pt-2">
                  <a
                    href="/materials"
                    className="block px-6 py-2 text-charcoal-900 hover:bg-stone-200 text-[13px] font-semibold tracking-wide bg-stone-50"
                  >
                    View All Materials
                  </a>
                </div>
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
                    key={brand.slug}
                    href={`/brands/${brand.slug}`}
                    className="block px-6 py-2 text-charcoal-700 hover:bg-stone-100 text-[13px] tracking-wide"
                  >
                    {brand.name}
                  </a>
                ))}
                <div className="border-t border-stone-300 mt-2 pt-2">
                  <a
                    href="/brands"
                    className="block px-6 py-2 text-charcoal-900 hover:bg-stone-200 text-[13px] font-semibold tracking-wide bg-stone-50"
                  >
                    View All Brands
                  </a>
                </div>
              </div>
            </div>

            {/* Locations Dropdown */}
            <div className="nav-dropdown">
              <button className="flex items-center gap-2 text-white text-[13px] tracking-[0.15em] uppercase font-medium hover:text-stone-300 transition-colors py-2">
                Areas We Serve
                <FontAwesomeIcon icon={faChevronDown} className="w-3 h-3" />
              </button>
              <div className="nav-dropdown-content py-4 max-h-[400px] overflow-y-auto">
                {locations.map((area) => (
                  <a
                    key={area}
                    href={`/locations/${area.toLowerCase().replace(/\s+/g, '-')}-tx`}
                    className="block px-6 py-2 text-charcoal-700 hover:bg-stone-100 text-[13px] tracking-wide"
                  >
                    {area}
                  </a>
                ))}
                <div className="border-t border-stone-300 mt-2 pt-2 sticky bottom-0 bg-white">
                  <a
                    href="/locations"
                    className="block px-6 py-2 text-charcoal-900 hover:bg-stone-200 text-[13px] font-semibold tracking-wide bg-stone-50"
                  >
                    View All Locations
                  </a>
                </div>
              </div>
            </div>

            <a href="/about" className="text-white text-[13px] tracking-[0.15em] uppercase font-medium hover:text-stone-300 transition-colors py-2">
              About
            </a>

            <a href="/contact" className="text-white text-[13px] tracking-[0.15em] uppercase font-medium hover:text-stone-300 transition-colors py-2">
              Contact
            </a>
          </nav>

          <div className="lg:hidden flex items-center gap-3">
            <a 
              href="tel:972-284-7995" 
              className="bg-white text-charcoal-900 px-4 py-2 rounded text-sm font-medium hover:bg-stone-100 transition-colors"
            >
              Call Now
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-white"
              aria-label="Toggle menu"
            >
              <FontAwesomeIcon icon={mobileMenuOpen ? faTimes : faBars} className="w-6 h-6" />
            </button>
          </div>
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
                <a href="/windows" className="block py-2 text-stone-300 text-sm font-semibold">View All Windows</a>
              </div>
              <div>
                <span className="text-stone-400 text-[11px] tracking-[0.2em] uppercase block mb-2">Doors</span>
                {allDoorTypes.map((type) => (
                  <a key={type.slug} href={`/doors/${type.slug}`} className="block py-2 text-white text-sm">
                    {type.name}
                  </a>
                ))}
                <a href="/doors" className="block py-2 text-stone-300 text-sm font-semibold">View All Doors</a>
              </div>
              <div>
                <span className="text-stone-400 text-[11px] tracking-[0.2em] uppercase block mb-2">Materials</span>
                {allMaterialTypes.map((type) => (
                  <a key={type.slug} href={`/windows/${type.slug}`} className="block py-2 text-white text-sm">
                    {type.name}
                  </a>
                ))}
                <a href="/materials" className="block py-2 text-stone-300 text-sm font-semibold">View All Materials</a>
              </div>
              <div>
                <span className="text-stone-400 text-[11px] tracking-[0.2em] uppercase block mb-2">Brands</span>
                {brands.map((brand) => (
                  <a key={brand.slug} href={`/brands/${brand.slug}`} className="block py-2 text-white text-sm">
                    {brand.name}
                  </a>
                ))}
                <a href="/brands" className="block py-2 text-stone-300 text-sm font-semibold">View All Brands</a>
              </div>
              <div>
                <span className="text-stone-400 text-[11px] tracking-[0.2em] uppercase block mb-2">Locations</span>
                {locations.map((area) => (
                  <a key={area} href={`/locations/${area.toLowerCase().replace(/\s+/g, '-')}-tx`} className="block py-2 text-white text-sm">
                    {area}
                  </a>
                ))}
                <a href="/locations" className="block py-2 text-stone-300 text-sm font-semibold">View All Locations</a>
              </div>
              <a href="/about" className="block py-2 text-white text-sm">About</a>
              <a href="/contact" className="block py-2 text-white text-sm">Contact</a>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}



