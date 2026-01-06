const allWindowTypes = [
  { name: 'Double-Hung', slug: 'double-hung-windows' },
  { name: 'Single-Hung', slug: 'single-hung-windows' },
  { name: 'Casement', slug: 'casement-windows' },
  { name: 'Awning', slug: 'awning-windows' },
  { name: 'Sliding', slug: 'sliding-windows' },
  { name: 'Picture', slug: 'picture-windows' },
  { name: 'Bay & Bow', slug: 'bay-bow-windows' },
  { name: 'Special Shape', slug: 'special-shape-windows' },
]

const allDoorTypes = [
  { name: 'Entry Doors', slug: 'entry-door-installation' },
  { name: 'French Doors', slug: 'french-door-installation' },
  { name: 'Patio Doors', slug: 'patio-door-installation' },
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

const locations = [
  'Irving', 'Dallas', 'Grand Prairie', 'Coppell', 'Euless',
  'Bedford', 'Grapevine', 'Carrollton', 'Farmers Branch', 'Addison',
  'Richardson', 'Plano', 'Lewisville', 'Flower Mound', 'Arlington',
  'Fort Worth', 'Hurst', 'North Richland Hills', 'Colleyville', 'Southlake',
  'Duncanville', 'DeSoto', 'Cedar Hill', 'Garland', 'Mesquite'
]


export function PageFooter() {
  return (
    <footer className="bg-charcoal-500 text-white pt-16 pb-8">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-2 md:grid-cols-6 gap-8 md:gap-12 pb-12 border-b border-charcoal-400">
          <div>
            <h3 className="text-[13px] tracking-[0.15em] uppercase font-medium mb-6">
              Navigate
            </h3>
            <ul className="space-y-3">
              <li><a href="/about" className="footer-link">About</a></li>
              <li><a href="/contact" className="footer-link">Contact</a></li>
              <li><a href="/windows" className="footer-link">Windows</a></li>
              <li><a href="/doors" className="footer-link">Doors</a></li>
              <li><a href="/locations" className="footer-link">Service Areas</a></li>
              <li><a href="/sitemap.xml" className="footer-link">Sitemap</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-[13px] tracking-[0.15em] uppercase font-medium mb-6">
              Windows
            </h3>
            <ul className="space-y-3">
              {allWindowTypes.slice(0, 6).map((type) => (
                <li key={type.slug}>
                  <a href={`/windows/${type.slug}`} className="footer-link">{type.name}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-[13px] tracking-[0.15em] uppercase font-medium mb-6">
              Doors
            </h3>
            <ul className="space-y-3">
              {allDoorTypes.slice(0, 6).map((type) => (
                <li key={type.slug}>
                  <a href={`/doors/${type.slug}`} className="footer-link">{type.name}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-[13px] tracking-[0.15em] uppercase font-medium mb-6">
              Materials
            </h3>
            <ul className="space-y-3">
              {allMaterialTypes.slice(0, 6).map((type) => (
                <li key={type.slug}>
                  <a href={`/windows/${type.slug}`} className="footer-link">{type.name}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-[13px] tracking-[0.15em] uppercase font-medium mb-6">
              Service Areas
            </h3>
            <ul className="space-y-3">
              {locations.slice(0, 5).map((location) => (
                <li key={location}>
                  <a href={`/locations/${location.toLowerCase().replace(/\s+/g, '-')}-tx`} className="footer-link">
                    {location}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-[13px] tracking-[0.15em] uppercase font-medium mb-6">
              Contact
            </h3>
            <ul className="space-y-3">
              <li><a href="tel:972-284-7995" className="footer-link">972-284-7995</a></li>
              <li><a href="mailto:info@replacementwindowsirving.com" className="footer-link">Email Us</a></li>
              <li><span className="footer-link">909 Hidden Ridge Dr #180</span></li>
              <li><span className="footer-link">Irving, TX 75038</span></li>
            </ul>
          </div>
        </div>

        {/* Google Maps */}
        <div className="py-12 border-b border-charcoal-400">
          <h3 className="text-[13px] tracking-[0.15em] uppercase font-medium mb-6 text-center">
            Find Us
          </h3>
          <div className="aspect-video w-full max-w-4xl mx-auto rounded overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3348.5!2d-96.9497!3d32.9026!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864c2b6e1db45555%3A0x1234567890!2s909%20Hidden%20Ridge%20Dr%20%23180%2C%20Irving%2C%20TX%2075038!5e0!3m2!1sen!2sus!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>

        {/* Disclosure */}
        <div className="py-8 border-b border-charcoal-400">
          <p className="text-center text-stone-400 text-xs max-w-3xl mx-auto">
            Our website connects you with our preferred fulfillment partner for professional window and door contractor matching and project management support.
          </p>
        </div>

        <div className="pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-stone-400">
          <p>&copy; {new Date().getFullYear()} Replacement Windows of Irving</p>
          <p>909 Hidden Ridge Dr #180, Irving, TX 75038 | 972-284-7995</p>
        </div>
      </div>
    </footer>
  )
}



