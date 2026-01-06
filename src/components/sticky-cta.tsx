import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

export function StickyCTA() {
  return (
    <div className="fixed bottom-4 right-4 z-50 md:hidden">
      <a
        href="/contact#contact-form"
        className="flex items-center gap-2 bg-charcoal-900 hover:bg-charcoal-800 text-white px-4 py-2 rounded-lg shadow-md transition-all duration-300 text-[13px] font-medium tracking-[0.15em] uppercase"
      >
        <FontAwesomeIcon icon={faEnvelope} className="w-4 h-4" />
        <span>Get Free Quote</span>
      </a>
    </div>
  )
}