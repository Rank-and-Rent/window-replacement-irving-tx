const allWindowTypes = [
  { name: 'Double-Hung', slug: 'double-hung-windows' },
  { name: 'Single-Hung', slug: 'single-hung-windows' },
  { name: 'Casement', slug: 'casement-windows' },
  { name: 'Awning', slug: 'awning-windows' },
]

const locations = [
  'Fort Worth', 'Arlington', 'Dallas', 'Irving', 'Grand Prairie',
  'Plano', 'Garland', 'Frisco'
]

const galleryImages = [
  'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=600&q=80',
  'https://images.unsplash.com/photo-1600210492493-0946911123ea?w=600&q=80',
  'https://images.unsplash.com/photo-1600573472550-8090b5e0745e?w=600&q=80',
  'https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=600&q=80',
  'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=600&q=80',
  'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=600&q=80',
]

export function PageFooter() {
  return (
    <footer className="bg-charcoal-500 text-white pt-16 pb-8">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 pb-12 border-b border-charcoal-400">
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

          <div>
            <h3 className="text-[13px] tracking-[0.15em] uppercase font-medium mb-6">
              Windows
            </h3>
            <ul className="space-y-3">
              {allWindowTypes.map((type) => (
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
              {locations.slice(0, 4).map((location) => (
                <li key={location}>
                  <a href={`/locations/${location.toLowerCase().replace(/\s+/g, '-')}`} className="footer-link">
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

        <div className="py-12 border-b border-charcoal-400">
          <h3 className="text-center text-xl md:text-2xl font-light tracking-wide mb-8">
            @replacementwindowsirving
          </h3>
          <div className="grid grid-cols-3 md:grid-cols-6 gap-2">
            {galleryImages.map((img, index) => (
              <a 
                key={index}
                href="/gallery"
                className="aspect-square overflow-hidden group"
              >
                <img
                  src={img}
                  alt={`Project ${index + 1}`}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </a>
            ))}
          </div>
        </div>

        <div className="pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-stone-400">
          <p>&copy; {new Date().getFullYear()} Replacement Windows of Irving</p>
          <p>909 Hidden Ridge Dr #180, Irving, TX 75038 | 972-284-7995</p>
        </div>
      </div>
    </footer>
  )
}



