import type { Metadata } from 'next'
import { PageHeader } from '@/components/page-header'
import { PageFooter } from '@/components/page-footer'

export const metadata: Metadata = {
  title: 'Picture Windows Irving TX | Fixed Glass Window Installation',
  description: 'Picture window replacement in Irving, TX. Maximum daylight, unobstructed views, zero air leakage. Andersen, Pella & Jeld-Wen fixed windows. Call 972-284-7995',
}

export default function PictureWindowsPage() {
  return (
    <div className="min-h-screen bg-white">
      <PageHeader />

      <section className="relative min-h-[60vh] flex items-center pt-32">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1600210492493-0946911123ea?w=1920&q=80)',
          }}
        />
        <div className="hero-overlay absolute inset-0" />
        
        <div className="relative z-10 w-full max-w-[1400px] mx-auto px-6 lg:px-12">
          <h1 className="text-heading-serif text-4xl md:text-5xl lg:text-6xl text-white font-light mb-6 max-w-3xl">
            Picture Windows in Irving, TX
          </h1>
          <p className="text-white/90 text-lg md:text-xl max-w-2xl mb-8">
            Frame your view like fine art. Picture windows maximize daylight and vistas with expansive fixed glass that transforms walls into panoramic canvases.
          </p>
          <a href="/contact" className="btn-white">
            Explore Options
          </a>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <img
                src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1000&q=80"
                alt="Large picture window with view"
                className="w-full aspect-[4/5] object-cover"
              />
            </div>
            
            <div>
              <h2 className="text-heading-serif text-3xl md:text-4xl text-charcoal-900 font-light mb-6">
                Maximum glass, minimal obstruction
              </h2>
              <p className="text-charcoal-600 text-base leading-relaxed mb-6">
                Picture windows contain no moving parts, no operating mechanisms, and no divided sashes—just expansive glass within slim frames. This simplicity delivers multiple advantages for Irving homeowners: unmatched energy efficiency from permanently sealed construction, dramatic natural light that transforms interior spaces, and unobstructed views that connect your home to its surroundings. Picture windows are fundamentally about removing barriers between inside and outside.
              </p>
              <p className="text-charcoal-600 text-base leading-relaxed mb-6">
                Because they don't open, picture windows achieve superior air-tightness compared to operable alternatives. There are no moving sashes to create gaps, no weatherstripping to compress unevenly, and no tracks where air can infiltrate. Factory-sealed glass units remain permanently protected from air and moisture intrusion—picture windows simply don't leak when properly installed. This makes them the most energy-efficient window style available for Irving's climate extremes.
              </p>
              <p className="text-charcoal-600 text-base leading-relaxed">
                The absence of operating hardware allows frame profiles to be minimized, maximizing glass area within any rough opening. More glass means more daylight, reduced artificial lighting needs, and lower electricity consumption. Irving homeowners focused on energy efficiency and sustainability appreciate these measurable benefits that compound over decades of ownership.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-stone-100">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-12">
          <h2 className="text-heading-serif text-3xl md:text-4xl text-charcoal-900 font-light text-center mb-16">
            Design strategies with picture windows
          </h2>
          
          <div className="space-y-12">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-2xl font-light text-charcoal-900 mb-4">Combining with Operable Windows</h3>
                <p className="text-charcoal-600 leading-relaxed mb-4">
                  Picture windows rarely stand alone—they're typically flanked by operable casement or double-hung windows providing ventilation. This combination delivers both expansive views through the center picture window and functional air circulation through side operables. It's the best of both worlds: maximum glass where you want unobstructed views, ventilation where you need it.
                </p>
                <p className="text-charcoal-600 leading-relaxed">
                  Architects designing Irving homes routinely specify picture windows with operable flankers for great rooms, master bedrooms, and dining areas. The central picture window becomes the room's focal point while side windows handle practical ventilation needs—and the overall cost is less than making the entire opening operable.
                </p>
              </div>
              <img
                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80"
                alt="Picture window with side casements"
                className="w-full aspect-[4/3] object-cover"
              />
            </div>
            
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <img
                src="https://images.unsplash.com/photo-1600573472550-8090b5e0745e?w=800&q=80"
                alt="Large picture window wall"
                className="w-full aspect-[4/3] object-cover order-2 lg:order-1"
              />
              <div className="order-1 lg:order-2">
                <h3 className="text-2xl font-light text-charcoal-900 mb-4">Creating Window Walls</h3>
                <p className="text-charcoal-600 leading-relaxed mb-4">
                  Multiple picture windows can be joined to create floor-to-ceiling glass walls spanning entire rooms. Modern structural engineering allows glass expanses previously impossible, with minimal framing interrupting views. These dramatic installations define contemporary Irving architecture—flooding spaces with daylight while erasing boundaries between interior and landscape.
                </p>
                <p className="text-charcoal-600 leading-relaxed">
                  The structural glass systems from Andersen, Pella, and Jeld-Wen achieve remarkable spans while meeting Texas building codes for wind load and impact resistance. Laminated and tempered glass options provide safety in floor-level applications where human impact is possible.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-12">
          <h2 className="text-heading-serif text-3xl md:text-4xl text-charcoal-900 font-light mb-12">
            Glass options for Texas performance
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-light text-charcoal-900 mb-3">Solar Control Glass</h3>
                <p className="text-charcoal-600 leading-relaxed">
                  Large picture windows in south and west-facing Irving locations benefit enormously from advanced solar control glass. These high-performance coatings reflect up to 70% of solar heat before it enters your home, while maintaining clear visibility. Your view remains crystal clear; the heat stays outside. The result: comfortable rooms even adjacent to expansive glass, reduced cooling costs, and protected furnishings that won't fade from UV exposure.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-light text-charcoal-900 mb-3">Triple-Pane Construction</h3>
                <p className="text-charcoal-600 leading-relaxed">
                  Irving's temperature extremes make triple-pane picture windows worth considering for large installations. The additional glass layer and two insulating air spaces dramatically improve thermal performance—particularly noticeable in rooms with extensive glass. Triple-pane windows also reduce exterior noise transmission substantially, valuable for homes near busy Irving streets or highways.
                </p>
              </div>
            </div>
            
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-light text-charcoal-900 mb-3">Laminated Safety Glass</h3>
                <p className="text-charcoal-600 leading-relaxed">
                  Picture windows positioned where human contact is possible—near patios, in playrooms, or at floor level—should incorporate laminated safety glass. If broken, laminated glass remains bonded to an internal plastic layer rather than shattering into dangerous shards. This safety feature is particularly important in Irving homes with children or in areas where falling could cause impact with the window.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-light text-charcoal-900 mb-3">Decorative Glass Options</h3>
                <p className="text-charcoal-600 leading-relaxed">
                  Privacy picture windows for Irving bathrooms and entry areas can feature obscure, frosted, or textured glass that admits daylight while preventing clear views. These decorative options transform picture windows into functional design elements—providing both light and privacy without sacrificing wall space to solid construction.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-charcoal-500">
        <div className="max-w-[1000px] mx-auto px-6 lg:px-12 text-center">
          <h2 className="text-heading-serif text-3xl md:text-4xl text-white font-light mb-8">
            Frame your Irving views with picture windows
          </h2>
          <p className="text-stone-300 text-lg leading-relaxed max-w-2xl mx-auto">
            Whether you're capturing golf course vistas, mature tree canopies, or simply maximizing daylight in interior spaces, picture windows transform walls into connections with the outdoors. Our design consultants help you determine ideal sizes, placement strategies, and glass specifications that balance views, energy performance, and budget for your specific Irving property.
          </p>
        </div>
      </section>

      <section className="py-24 bg-stone-100">
        <div className="max-w-[800px] mx-auto px-6 text-center">
          <h2 className="text-heading-serif text-3xl md:text-4xl text-charcoal-900 font-light mb-8">
            Ready to bring more light into your Irving home?
          </h2>
          <p className="text-charcoal-600 mb-10">
            Schedule a consultation to explore picture window possibilities. We'll discuss sizes, combinations with operable windows, and glass performance options tailored to your home's orientation and your aesthetic vision.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/contact" className="btn-outline-dark">
              Schedule Consultation
            </a>
            <a href="tel:972-284-7995" className="btn-dark">
              Call 972-284-7995
            </a>
          </div>
        </div>
      </section>

      <PageFooter />
    </div>
  )
}

