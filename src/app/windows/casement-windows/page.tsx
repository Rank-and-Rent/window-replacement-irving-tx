import type { Metadata } from 'next'
import { PageHeader } from '@/components/page-header'
import { PageFooter } from '@/components/page-footer'

export const metadata: Metadata = {
  title: 'Casement Windows Irving TX | Crank-Out Windows Installation',
  description: 'Premium casement window replacement in Irving, TX. Full opening, unobstructed views, superior ventilation. Andersen, Pella & Jeld-Wen crank-operated windows. 972-284-7995',
}

export default function CasementWindowsPage() {
  return (
    <div className="min-h-screen bg-white">
      <PageHeader />

      <section className="relative min-h-[60vh] flex items-center pt-32">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(/windows/casement-windows-irving-tx.webp)',
          }}
        />
        <div className="hero-overlay absolute inset-0" />
        
        <div className="relative z-10 w-full max-w-[1400px] mx-auto px-6 lg:px-12">
          <h1 className="text-heading-serif text-4xl md:text-5xl lg:text-6xl text-white font-light mb-6 max-w-3xl">
            Casement Windows in Irving, TX
          </h1>
          <p className="text-white/90 text-lg md:text-xl max-w-2xl mb-8">
            Hinged elegance that swings outward. Casement windows deliver maximum ventilation, unobstructed views, and contemporary aesthetics that complement modern Irving architecture.
          </p>
          <a href="/contact" className="btn-white">
            Schedule Consultation
          </a>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <img
                src="/windows/casement-windows-irving-tx.webp"
                alt="Casement window open in Irving home"
                className="w-full aspect-[4/5] object-cover"
              />
            </div>
            
            <div>
              <h2 className="text-heading-serif text-3xl md:text-4xl text-charcoal-900 font-light mb-6">
                The modern alternative to traditional windows
              </h2>
              <p className="text-charcoal-600 text-base leading-relaxed mb-6">
                Casement windows represent a departure from traditional double-hung design, offering advantages that Irving homeowners increasingly appreciate. These windows are hinged on one side and swing outward like a door, operated by an interior crank mechanism that provides precise control over opening width. The result is a window that captures breezes from any direction and funnels fresh Texas air directly into your living spaces.
              </p>
              <p className="text-charcoal-600 text-base leading-relaxed mb-6">
                When fully opened, casement windows provide 100% of their glass area for ventilation—impossible with sliding window designs where half the opening remains blocked. This complete opening makes casement windows particularly effective in Irving kitchens and bathrooms where maximum ventilation removes cooking odors, moisture, and heat efficiently. The outward-swinging design also means interior window treatments never interfere with operation.
              </p>
              <p className="text-charcoal-600 text-base leading-relaxed">
                Modern casement windows from Andersen, Pella, and Jeld-Wen feature multi-point locking systems that engage at several points around the frame perimeter. This creates an exceptionally tight seal that resists air infiltration and enhances security beyond what sliding windows can achieve. When locked, the sash compresses against weatherstripping to form a barrier that keeps conditioned air inside during Texas temperature extremes.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-stone-100">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-12">
          <h2 className="text-heading-serif text-3xl md:text-4xl text-charcoal-900 font-light mb-12">
            Why Irving homeowners choose casement windows
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-xl font-light text-charcoal-900 mb-4">Superior Energy Efficiency</h3>
              <p className="text-charcoal-600 leading-relaxed mb-6">
                Casement windows achieve the tightest seals in the window industry. When cranked closed, the sash presses firmly against weatherstripping around the entire perimeter—not just at two or three points like sliding windows. This compression seal virtually eliminates air leakage, making casement windows the most energy-efficient operable window style available for Irving homes.
              </p>
              <p className="text-charcoal-600 leading-relaxed">
                Energy Star testing consistently shows casement windows outperforming double-hung and sliding alternatives. Irving homeowners concerned about reducing utility bills appreciate this measurable efficiency advantage, especially in larger window openings where energy loss through inferior seals becomes substantial.
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-light text-charcoal-900 mb-4">Unobstructed Panoramic Views</h3>
              <p className="text-charcoal-600 leading-relaxed mb-6">
                Casement windows eliminate the center meeting rail required by double-hung designs, providing clear, uninterrupted views of your Irving landscape. This makes them ideal for picture window flankers where you want maximum visibility or for kitchen windows overlooking backyard spaces. The single pane of glass creates a clean, modern aesthetic that complements contemporary architecture.
              </p>
              <p className="text-charcoal-600 leading-relaxed">
                For Irving homes with premium views—whether overlooking golf courses, creeks, or established neighborhoods—casement windows maximize your visual connection to outdoor spaces. The slim frame profiles and absence of horizontal divisions create an expansive feel even in modestly sized openings.
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-light text-charcoal-900 mb-4">Easy One-Handed Operation</h3>
              <p className="text-charcoal-600 leading-relaxed mb-6">
                The crank mechanism makes casement windows effortless to operate—an important consideration for Irving homeowners with mobility limitations. No struggling to push heavy sashes upward or dealing with stuck windows painted shut. Simply turn the crank and the window swings open smoothly regardless of humidity or temperature conditions.
              </p>
              <p className="text-charcoal-600 leading-relaxed">
                Hard-to-reach windows above kitchen sinks or in high wall positions become accessible with casement design. The crank handles extend operation within easy reach, and modern versions feature extension handles for windows positioned beyond standard height. Irving homeowners aging in place particularly value this accessibility advantage.
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-light text-charcoal-900 mb-4">Catches Directional Breezes</h3>
              <p className="text-charcoal-600 leading-relaxed mb-6">
                Casement windows act like sails when open, catching breezes from oblique angles and directing air into your Irving home. During pleasant spring and fall weather, prevailing winds from any direction can be channeled indoors by adjusting the window's opening angle. This passive ventilation reduces reliance on mechanical cooling during shoulder seasons.
              </p>
              <p className="text-charcoal-600 leading-relaxed">
                Strategic placement of casement windows on opposite walls creates cross-ventilation that moves air through your entire home. This natural cooling strategy was well understood before air conditioning became universal—and remains remarkably effective for reducing energy consumption during mild Texas weather.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-12">
          <h2 className="text-heading-serif text-3xl md:text-4xl text-charcoal-900 font-light mb-12">
            Design considerations for casement windows
          </h2>
          
          <div className="space-y-12">
            <div>
              <h3 className="text-2xl font-light text-charcoal-900 mb-4">Hinge Side Selection Matters</h3>
              <p className="text-charcoal-600 leading-relaxed mb-4">
                Casement windows can be hinged on either the left or right side, affecting both aesthetics and function. For windows above kitchen sinks, hinge the sash away from the faucet to prevent interference. When installing pairs of casement windows, hinging them to open from the center creates a French window effect with traditional appeal.
              </p>
              <p className="text-charcoal-600 leading-relaxed">
                Consider your Irving home's prevailing wind direction when specifying hinge placement. Windows hinged correctly will catch breezes effectively; hinged incorrectly they might be blown shut by gusts. Our design consultants help Irving homeowners make these important decisions during the planning phase.
              </p>
            </div>
            
            <div>
              <h3 className="text-2xl font-light text-charcoal-900 mb-4">Exterior Clearance Requirements</h3>
              <p className="text-charcoal-600 leading-relaxed mb-4">
                Because casement windows swing outward, ensure adequate clearance in your Irving yard or patio. Windows opening onto decks, walkways, or landscaped areas need sufficient space to open fully without obstruction. Measure the sash projection when fully open—typically 6-10 inches depending on window width.
              </p>
              <p className="text-charcoal-600 leading-relaxed">
                Avoid placing casement windows where they'll interfere with outdoor faucets, electrical outlets, or HVAC equipment. Your Replacement Windows of Irving consultant reviews exterior conditions during the estimate appointment to identify potential conflicts before ordering custom windows.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-charcoal-500">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-12">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-heading-serif text-3xl md:text-4xl text-white font-light mb-8">
              Casement windows for modern Irving architecture
            </h2>
            <p className="text-stone-300 text-lg leading-relaxed mb-6">
              Contemporary Irving homes increasingly feature casement windows as primary design elements. Their clean lines, unobstructed glass, and minimalist hardware complement modern architectural aesthetics perfectly. Architects and designers specify casement windows when visual simplicity and maximum daylight are priorities.
            </p>
            <p className="text-stone-300 text-lg leading-relaxed mb-6">
              Black or bronze exterior frames create striking contrast against light-colored siding, while narrow frame profiles maximize glass area for flood of natural light. Interior frames can be specified in custom colors to coordinate with your Irving home's design palette—from crisp white to warm wood tones.
            </p>
            <p className="text-stone-300 text-lg leading-relaxed">
              Consider combining fixed picture windows with flanking casement windows to create dramatic window walls. The picture window provides expansive views while casement sides offer ventilation—giving you both visual impact and functional airflow in your Irving great room or master bedroom.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-stone-100">
        <div className="max-w-[1100px] mx-auto px-6 lg:px-12">
          <h2 className="text-heading-serif text-3xl md:text-4xl text-charcoal-900 font-light mb-10">Casement Windows questions Irving homeowners ask</h2>
          <div className="space-y-8">
            <div>
              <h3 className="text-lg font-medium text-charcoal-900 mb-3">Are casement windows a good fit for my Irving home?</h3>
              <p className="text-charcoal-600 leading-relaxed">Casement windows hinge on the side and crank open for unobstructed views and tight weather seals. For Irving great rooms, kitchens, and the upper levels of Las Colinas townhomes, casement windows routinely solve problems that other configurations leave on the table. We&apos;ll evaluate your existing openings, the structural rough-opening sizes, and the orientation of each elevation before recommending the right product. The right answer often involves running casement windows on some elevations and a different style on others, and we&apos;ll show you why.</p>
            </div>
            <div>
              <h3 className="text-lg font-medium text-charcoal-900 mb-3">How long do casement windows last in Irving&apos;s climate?</h3>
              <p className="text-charcoal-600 leading-relaxed">A properly installed casement windows should give you 25 to 40 years of service in Irving&apos;s climate, depending on frame material and exposure. Vinyl typically lands in the lower end of that range; fiberglass and aluminum-clad frames often hit the upper end. UV exposure on west-facing elevations is the biggest stressor, so frame finish quality and Low-E glass selection both factor into longevity. Manufacturer warranties register limited lifetime on frame and IGU for most premium product lines.</p>
            </div>
            <div>
              <h3 className="text-lg font-medium text-charcoal-900 mb-3">What energy benefits do casement windows deliver?</h3>
              <p className="text-charcoal-600 leading-relaxed">When the existing windows are original aluminum-framed singles or first-generation dual-pane, replacing with current-generation casement windows carrying a Low-E366 coating and argon fill typically delivers a measurable reduction on the next Oncor bill. The biggest gains show up on south- and west-facing elevations where the late-afternoon sun load is heaviest. We&apos;ll model the projected savings using your actual kWh history during the consultation.</p>
            </div>
            <div>
              <h3 className="text-lg font-medium text-charcoal-900 mb-3">How long does the install take?</h3>
              <p className="text-charcoal-600 leading-relaxed">A standard casement windows replacement takes about 45 to 90 minutes per opening once the old unit is removed, depending on the configuration and any structural surprises in the rough opening. A whole-home Irving project of 12 to 18 openings runs two to three working days from demo to final cleanup. We protect floors with rosin paper, drape furniture in 6-mil plastic, run dust collection on every indoor cut, and HEPA vacuum at the end of each shift.</p>
            </div>
            <div>
              <h3 className="text-lg font-medium text-charcoal-900 mb-3">Do you provide written, itemized pricing?</h3>
              <p className="text-charcoal-600 leading-relaxed">Always. Every Irving proposal lists each window with size, configuration, frame material, exterior and interior finish, hardware, screen, and glass package. Installation labor, removal and disposal of the old units, and warranty terms are spelled out separately. There are no broker commissions tucked into the proposal, and you can take the quote home, get competitive bids, and decide on your own timeline.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-stone-100">
        <div className="max-w-[800px] mx-auto px-6 text-center">
          <h2 className="text-heading-serif text-3xl md:text-4xl text-charcoal-900 font-light mb-8">
            Discover if casement windows are right for your Irving home
          </h2>
          <p className="text-charcoal-600 mb-10">
            Schedule a consultation to discuss your specific needs. We'll evaluate your windows' locations, your ventilation goals, and your aesthetic preferences to recommend the ideal casement window solution.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/contact" className="btn-outline-dark">
              Book Consultation
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

