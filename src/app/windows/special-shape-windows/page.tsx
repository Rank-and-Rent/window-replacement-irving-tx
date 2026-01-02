import type { Metadata } from 'next'
import { PageHeader } from '@/components/page-header'
import { PageFooter } from '@/components/page-footer'

export const metadata: Metadata = {
  title: 'Special Shape Windows Irving TX | Custom Geometric Window Installation',
  description: 'Custom special shape window replacement in Irving, TX. Arches, circles, triangles, trapezoids. Unique architectural windows. Andersen, Pella & Jeld-Wen. 972-284-7995',
}

export default function SpecialShapeWindowsPage() {
  return (
    <div className="min-h-screen bg-white">
      <PageHeader />

      <section className="relative min-h-[60vh] flex items-center pt-32">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(/windows/special-shape-windows-irving-tx.jpg)',
          }}
        />
        <div className="hero-overlay absolute inset-0" />
        
        <div className="relative z-10 w-full max-w-[1400px] mx-auto px-6 lg:px-12">
          <h1 className="text-heading-serif text-4xl md:text-5xl lg:text-6xl text-white font-light mb-6 max-w-3xl">
            Special Shape Windows in Irving, TX
          </h1>
          <p className="text-white/90 text-lg md:text-xl max-w-2xl mb-8">
            Express your architectural vision. Custom geometric windows add character and distinction to Irving homes—from classic arches to contemporary angles.
          </p>
          <a href="/contact" className="btn-white">
            Explore Custom Shapes
          </a>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <img
                src="/windows/special-shape-windows-irving-tx.jpg"
                alt="Arched window in Irving home"
                className="w-full aspect-[4/5] object-cover"
              />
            </div>
            
            <div>
              <h2 className="text-heading-serif text-3xl md:text-4xl text-charcoal-900 font-light mb-6">
                Architectural accent windows for unique homes
              </h2>
              <p className="text-charcoal-600 text-base leading-relaxed mb-6">
                Special shape windows break free from rectangular constraints, introducing curves, angles, and geometry that define your Irving home's architectural personality. These custom windows transform standard wall openings into design statements—whether you're honoring historic character in an established neighborhood or creating contemporary flair in new construction. Special shapes tell the world your home is thoughtfully designed, not cookie-cutter construction.
              </p>
              <p className="text-charcoal-600 text-base leading-relaxed mb-6">
                Andersen, Pella, and Jeld-Wen manufacture special shape windows in virtually any geometry imaginable. Graceful arches soften rigid rectangular window walls. Triangular and trapezoid shapes follow rooflines in cathedral ceilings and gables. Circular and elliptical windows create focal points on stairway landings. Octagon windows reference Victorian heritage. The limitation isn't manufacturing capability—it's only imagination.
              </p>
              <p className="text-charcoal-600 text-base leading-relaxed">
                While special shape windows typically don't operate, they serve critical functions beyond decoration. Transom windows above entries and interior doorways transmit light between rooms while maintaining privacy. Gable-end windows illuminate attic spaces. Specialty shapes solve unique lighting challenges in Irving homes with complex architecture where standard windows simply won't fit or would look awkward.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-stone-100">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-12">
          <h2 className="text-heading-serif text-3xl md:text-4xl text-charcoal-900 font-light text-center mb-16">
            Popular special shape window styles
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8">
              <h3 className="text-[13px] tracking-[0.15em] uppercase font-medium text-charcoal-900 mb-4">
                Arched Windows
              </h3>
              <p className="text-charcoal-600 text-sm leading-relaxed">
                Radius-top arches, full-round arches, eyebrow arches, and Gothic arches all add elegance to Irving homes. Commonly placed above entry doors or as transoms over picture windows, arched windows soften architectural lines while flooding spaces with natural light. Choose from full or segmented curves depending on your home's style.
              </p>
            </div>
            
            <div className="bg-white p-8">
              <h3 className="text-[13px] tracking-[0.15em] uppercase font-medium text-charcoal-900 mb-4">
                Circular Windows
              </h3>
              <p className="text-charcoal-600 text-sm leading-relaxed">
                Full circles, half-circles, quarter-circles, and elliptical ovals create dramatic focal points. Circle windows work beautifully on stairway landings where their unconventional shape draws the eye upward. Marine-inspired porthole circles add whimsy to children's rooms or nautical-themed spaces in Irving homes.
              </p>
            </div>
            
            <div className="bg-white p-8">
              <h3 className="text-[13px] tracking-[0.15em] uppercase font-medium text-charcoal-900 mb-4">
                Triangle Windows
              </h3>
              <p className="text-charcoal-600 text-sm leading-relaxed">
                Right triangles, isosceles triangles, and custom-angle triangles fill gable ends perfectly, following rooflines while introducing abundant natural light into attic spaces. These geometric shapes complement contemporary Irving architecture where clean angles define the aesthetic. Operable versions are available for venting.
              </p>
            </div>
            
            <div className="bg-white p-8">
              <h3 className="text-[13px] tracking-[0.15em] uppercase font-medium text-charcoal-900 mb-4">
                Trapezoid Windows
              </h3>
              <p className="text-charcoal-600 text-sm leading-relaxed">
                Four-sided windows with non-parallel sides adapt to unique architectural challenges. Trapezoids fill spaces above sloped ceilings, accommodate angled rooflines, or create contemporary geometric patterns when combined with rectangular windows. Custom angles are fabricated to your exact specifications.
              </p>
            </div>
            
            <div className="bg-white p-8">
              <h3 className="text-[13px] tracking-[0.15em] uppercase font-medium text-charcoal-900 mb-4">
                Octagon Windows
              </h3>
              <p className="text-charcoal-600 text-sm leading-relaxed">
                Eight-sided windows reference Victorian and Queen Anne architectural heritage common in established Irving neighborhoods. Octagon windows often appear in gables, above entries, or as accent windows flanking primary openings. They're particularly effective for homes seeking period-appropriate character.
              </p>
            </div>
            
            <div className="bg-white p-8">
              <h3 className="text-[13px] tracking-[0.15em] uppercase font-medium text-charcoal-900 mb-4">
                Pentagon Windows
              </h3>
              <p className="text-charcoal-600 text-sm leading-relaxed">
                Five-sided windows create striking modern statements uncommon in residential architecture. Pentagon windows distinguish your Irving home as custom-designed rather than production-built. Their unusual geometry makes them conversation pieces that guests notice and remember.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-12">
          <h2 className="text-heading-serif text-3xl md:text-4xl text-charcoal-900 font-light mb-12">
            Designing with special shape windows
          </h2>
          
          <div className="space-y-12">
            <div>
              <h3 className="text-2xl font-light text-charcoal-900 mb-4">Combining Shapes for Impact</h3>
              <p className="text-charcoal-600 leading-relaxed mb-4">
                The most dramatic window designs combine special shapes with standard rectangles. A radius-top transom above a large picture window creates instant elegance. Triangular gable windows paired with rectangular first-floor windows establish vertical rhythm. Half-circle transoms over entry doors with flanking sidelights compose welcoming entrances. The possibilities are limitless.
              </p>
              <p className="text-charcoal-600 leading-relaxed">
                Work with our design consultants to balance aesthetics and function. Special shapes deliver maximum impact when they enhance rather than overwhelm. Strategic placement—above doorways, in gable ends, flanking fireplaces—creates focal points without sacrificing wall space needed for furniture placement or artwork display.
              </p>
            </div>
            
            <div>
              <h3 className="text-2xl font-light text-charcoal-900 mb-4">Glass and Grid Options</h3>
              <p className="text-charcoal-600 leading-relaxed mb-4">
                Special shape windows accept the same high-performance glass options as standard windows—Low-E coatings, argon fills, tempered or laminated glass for safety. Don't sacrifice energy efficiency for aesthetics; modern manufacturing delivers both simultaneously. Texas summers demand high-performance glass regardless of window shape.
              </p>
              <p className="text-charcoal-600 leading-relaxed">
                Decorative grids add traditional character to special shape windows. Sunburst patterns radiate from arches' apex. Diamond or rectangular grids organize circular windows into geometric patterns. Grid styles should match other windows throughout your Irving home for cohesive design—mixing grid styles appears haphazard rather than intentional.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-charcoal-500">
        <div className="max-w-[1000px] mx-auto px-6 lg:px-12">
          <h2 className="text-heading-serif text-3xl md:text-4xl text-white font-light mb-8 text-center">
            Custom fabrication for Irving homes
          </h2>
          <div className="space-y-6 text-stone-300 text-lg leading-relaxed">
            <p>
              Every special shape window we install is custom-manufactured to your exact specifications. Our installers carefully template existing openings or design new openings for maximum visual impact. These templates travel to Andersen, Pella, or Jeld-Wen facilities where skilled craftspeople fabricate windows matching your dimensions precisely—typically within millimeters.
            </p>
            <p>
              Lead times for special shape windows extend beyond standard rectangles due to custom fabrication—typically 4-8 weeks depending on complexity and manufacturer workload. This timeline is unavoidable but worthwhile; rushing custom work invites costly errors. We coordinate delivery and installation to minimize disruption to your Irving home while ensuring perfect results.
            </p>
            <p>
              Special shape windows command premium pricing reflecting custom manufacturing, additional materials, and increased installation complexity. However, the architectural impact per dollar often exceeds standard window investments. A single well-placed special shape window can transform your Irving home's entire appearance—inside and out—making it among the most cost-effective design improvements available.
            </p>
          </div>
        </div>
      </section>

      <section className="py-24 bg-stone-100">
        <div className="max-w-[800px] mx-auto px-6 text-center">
          <h2 className="text-heading-serif text-3xl md:text-4xl text-charcoal-900 font-light mb-8">
            Bring your architectural vision to life
          </h2>
          <p className="text-charcoal-600 mb-10">
            Schedule a design consultation to explore special shape possibilities for your Irving home. We'll discuss your aesthetic goals, evaluate existing architecture, and recommend custom windows that enhance your property's unique character.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/contact" className="btn-outline-dark">
              Schedule Design Session
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

