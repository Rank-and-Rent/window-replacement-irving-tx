import type { Metadata } from 'next'
import { PageHeader } from '@/components/page-header'
import { PageFooter } from '@/components/page-footer'

export const metadata: Metadata = {
  title: 'Entry Door Installation Irving TX | Andersen, Pella, JELD-WEN, Marvin',
  description: 'Professional entry door installation in Irving, TX. Fiberglass, steel, and wood entry doors from top manufacturers. Enhanced security, energy efficiency, and curb appeal. Call 972-284-7995 for free estimate.',
  keywords: 'entry door installation Irving TX, front door installation, Andersen doors, Pella doors, JELD-WEN doors, Marvin doors',
}

export default function EntryDoorPage() {
  return (
    <div className="min-h-screen bg-white">
      <PageHeader />

      {/* Hero */}
      <section className="relative min-h-[60vh] flex items-center pt-32">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(/doors/entry-doors-irving-tx.jpg)',
          }}
        />
        <div className="hero-overlay absolute inset-0" />
        
        <div className="relative z-10 w-full max-w-[1400px] mx-auto px-6 lg:px-12">
          <h1 className="text-heading-serif text-4xl md:text-5xl lg:text-6xl text-white font-light mb-6 max-w-3xl">
            Entry Door Replacement in Irving, TX
          </h1>
          <p className="text-white/90 text-lg md:text-xl max-w-2xl mb-8">
            Transform Your Home with a Beautiful, Secure Entry
          </p>
          <a href="/contact" className="btn-white">
            Request Free Estimate
          </a>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <img
                src="/doors/entry-doors-irving-tx.jpg"
                alt="Entry door installation in Irving home"
                className="w-full aspect-[4/5] object-cover"
              />
            </div>
            
            <div>
              <h2 className="text-heading-serif text-3xl md:text-4xl text-charcoal-900 font-light mb-6">
                Your entry door makes a statement
              </h2>
              <p className="text-charcoal-600 text-base leading-relaxed mb-6">
                Your entry door is more than just a functional barrier between your home and the outside world. It is the first impression visitors have of your Irving home, a critical security feature protecting your family and belongings, and a significant factor in your home&apos;s energy efficiency.
              </p>
              <p className="text-charcoal-600 text-base leading-relaxed">
                A premium entry door from Andersen, Pella, JELD-WEN, or Marvin combines all three elements—stunning aesthetics, robust security, and superior insulation—while requiring minimal maintenance for decades.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Materials Section */}
      <section className="py-20 bg-stone-100">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-12">
          <h2 className="text-heading-serif text-3xl md:text-4xl text-charcoal-900 font-light mb-12">
            Materials That Match Your Irving Home and Lifestyle
          </h2>
          <p className="text-charcoal-600 text-base leading-relaxed mb-6">
            The choice of entry door material profoundly impacts both performance and maintenance requirements. Fiberglass doors have surged in popularity across Irving for excellent reason—they resist warping, rotting, and rust while offering exceptional energy efficiency and realistic wood-grain textures. Many homeowners cannot distinguish quality fiberglass from real wood without touching it.
          </p>
          <p className="text-charcoal-600 text-base leading-relaxed mb-6">
            Steel doors provide maximum security and excellent insulation at a competitive price point, though they require proper paint maintenance in Texas heat. Solid wood doors deliver unmatched natural beauty and traditional charm, perfect for historic Irving homes or luxury properties where authentic materials matter most.
          </p>
          <p className="text-charcoal-600 text-base leading-relaxed">
            Modern wood doors feature advanced treatments that resist moisture and insects far better than older generations.
          </p>
        </div>
      </section>

      {/* Security Section */}
      <section className="py-20 bg-white">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-12">
          <h2 className="text-heading-serif text-3xl md:text-4xl text-charcoal-900 font-light mb-12">
            Security Features for Peace of Mind
          </h2>
          <p className="text-charcoal-600 text-base leading-relaxed mb-6">
            Modern entry doors incorporate security technologies that would have seemed like science fiction just a decade ago. Today&apos;s premium doors feature reinforced steel frames, multi-point locking systems that engage at three or more points along the jamb, and impact-resistant glass that meets strict safety standards.
          </p>
          <p className="text-charcoal-600 text-base leading-relaxed mb-6">
            The lock itself represents just one element of security—the frame, hinges, and door construction all contribute to break-in resistance. Three-inch screws anchor hinges deep into wall studs rather than just trim. Strike plates extend four or more inches with multiple fastening points. Fiberglass and steel doors resist kick-in attempts that would splinter wood.
          </p>
          <p className="text-charcoal-600 text-base leading-relaxed">
            For Irving homes in areas experiencing property crime, these features provide tangible protection.
          </p>
        </div>
      </section>

      {/* Energy Efficiency Section */}
      <section className="py-20 bg-stone-100">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-12">
          <h2 className="text-heading-serif text-3xl md:text-4xl text-charcoal-900 font-light mb-12">
            Energy Efficiency That Reduces Your Bills
          </h2>
          <p className="text-charcoal-600 text-base leading-relaxed mb-6">
            Your entry door represents one of the largest penetrations in your home&apos;s thermal envelope, making it a critical factor in energy consumption. A poorly sealed or uninsulated door forces your HVAC system to work overtime during Irving&apos;s scorching summers and occasional winter freezes.
          </p>
          <p className="text-charcoal-600 text-base leading-relaxed mb-6">
            Premium entry doors feature polyurethane foam cores that provide superior insulation compared to traditional hollow-core doors. Quality weatherstripping creates an airtight seal when closed. Magnetic weatherstripping, found on many Andersen and Pella models, works similarly to refrigerator door seals for exceptional performance.
          </p>
          <p className="text-charcoal-600 text-base leading-relaxed">
            Double or triple-pane glass units in door lites minimize heat transfer while still allowing natural light. Our Irving customers consistently report noticeable reductions in drafts and energy costs after installing modern high-performance units.
          </p>
        </div>
      </section>

      {/* Design Options Section */}
      <section className="py-20 bg-white">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-12">
          <h2 className="text-heading-serif text-3xl md:text-4xl text-charcoal-900 font-light mb-12">
            Design Options for Every Architectural Style
          </h2>
          <p className="text-charcoal-600 text-base leading-relaxed mb-6">
            Irving homes span an incredible range of architectural styles, from historic neighborhoods to sleek contemporary designs in new developments. Entry doors must complement these diverse aesthetics. Traditional six-panel doors suit Colonial and ranch-style homes. Mission-style doors with clean lines match Craftsman architecture.
          </p>
          <p className="text-charcoal-600 text-base leading-relaxed mb-6">
            Glass-rich modern doors with sidelights create stunning contemporary statements. Rustic doors with iron hardware complement Hill Country and Texas farmhouse styles. Most manufacturers offer dozens of glass options—from privacy-preserving obscure patterns to clear glass that frames your entry.
          </p>
          <p className="text-charcoal-600 text-base leading-relaxed">
            Decorative glass adds personality while sidelights and transoms expand the opening visually and physically. We help Irving homeowners navigate these choices to find doors that enhance their specific home&apos;s character.
          </p>
        </div>
      </section>

      {/* Installation Process Section */}
      <section className="py-20 bg-stone-100">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-12">
          <h2 className="text-heading-serif text-3xl md:text-4xl text-charcoal-900 font-light mb-12">
            The Installation Process: Precision Matters
          </h2>
          <p className="text-charcoal-600 text-base leading-relaxed mb-6">
            A premium door performs only as well as its installation. The process begins with precise measurement of your existing opening, accounting for any settling or structural changes since the home was built. We remove the old door and inspect the rough opening for rot, settling, or damage. The sill must slope correctly to shed water.
          </p>
          <p className="text-charcoal-600 text-base leading-relaxed mb-6">
            Shims level and square the new door frame perfectly—even slight misalignment causes operational issues and premature wear. We use low-expansion foam insulation that fills gaps without bowing the frame. Exterior trim receives proper flashing and sealant to prevent water intrusion. Interior trim is carefully fit and finished.
          </p>
          <p className="text-charcoal-600 text-base leading-relaxed">
            Every door is adjusted for smooth operation and tested with specialized tools to verify proper weatherstripping contact around the entire perimeter. This meticulous process explains why our installations come with comprehensive workmanship warranties.
          </p>
        </div>
      </section>

      {/* Smart Technology Section */}
      <section className="py-20 bg-white">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-12">
          <h2 className="text-heading-serif text-3xl md:text-4xl text-charcoal-900 font-light mb-12">
            Smart Technology Integration
          </h2>
          <p className="text-charcoal-600 text-base leading-relaxed mb-6">
            The latest entry doors seamlessly integrate with smart home technology increasingly popular among Irving homeowners. Smart locks allow keyless entry via smartphone, temporary codes for guests or service providers, and remote lock status verification when you are away from home.
          </p>
          <p className="text-charcoal-600 text-base leading-relaxed mb-6">
            Some systems integrate with whole-home automation to adjust lighting and temperature when you arrive. Video doorbells mount beautifully on modern entry systems. Ring and Nest compatibility is standard on quality doors.
          </p>
          <p className="text-charcoal-600 text-base leading-relaxed">
            For families juggling work, school, and activities, smart entry systems eliminate lost key emergencies and the security risks of hiding spare keys. We work with doors designed to accommodate current and future smart technology without compromising security or aesthetics.
          </p>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 bg-stone-100">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-12">
          <h2 className="text-heading-serif text-3xl md:text-4xl text-charcoal-900 font-light text-center mb-16">
            Entry Door Features
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div>
              <h3 className="text-[13px] tracking-[0.15em] uppercase font-medium text-charcoal-900 mb-4">
                Multiple Materials
              </h3>
              <p className="text-charcoal-600 text-sm leading-relaxed">
                Choose from fiberglass, steel, and wood material options to match your home&apos;s style and your maintenance preferences.
              </p>
            </div>
            
            <div>
              <h3 className="text-[13px] tracking-[0.15em] uppercase font-medium text-charcoal-900 mb-4">
                Enhanced Security
              </h3>
              <p className="text-charcoal-600 text-sm leading-relaxed">
                Multi-point locking systems and reinforced frames provide maximum security for your Irving home.
              </p>
            </div>
            
            <div>
              <h3 className="text-[13px] tracking-[0.15em] uppercase font-medium text-charcoal-900 mb-4">
                Energy Efficient
              </h3>
              <p className="text-charcoal-600 text-sm leading-relaxed">
                Foam core construction and advanced weatherstripping reduce energy costs and improve comfort.
              </p>
            </div>
            
            <div>
              <h3 className="text-[13px] tracking-[0.15em] uppercase font-medium text-charcoal-900 mb-4">
                Premium Brands
              </h3>
              <p className="text-charcoal-600 text-sm leading-relaxed">
                Andersen, Pella, JELD-WEN, and Marvin brands available with lifetime limited warranties.
              </p>
            </div>
            
            <div>
              <h3 className="text-[13px] tracking-[0.15em] uppercase font-medium text-charcoal-900 mb-4">
                Custom Options
              </h3>
              <p className="text-charcoal-600 text-sm leading-relaxed">
                Customizable glass, hardware, and finish options to create your perfect entry.
              </p>
            </div>
            
            <div>
              <h3 className="text-[13px] tracking-[0.15em] uppercase font-medium text-charcoal-900 mb-4">
                Smart Ready
              </h3>
              <p className="text-charcoal-600 text-sm leading-relaxed">
                Compatible with smart locks and video doorbells for modern convenience.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Brands Section */}
      <section className="py-20 bg-white">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-12">
          <h2 className="text-heading-serif text-3xl md:text-4xl text-charcoal-900 font-light text-center mb-16">
            Premium Entry Door Brands
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-[13px] tracking-[0.15em] uppercase font-medium text-charcoal-900 mb-4">
                Andersen Entry Doors
              </h3>
              <p className="text-charcoal-600 text-sm leading-relaxed">
                Andersen fiberglass entry doors combine their renowned Fibrex technology with beautiful designs. Their doors resist warping and rotting while offering wood-like aesthetics with virtually no maintenance. Available in numerous styles and finishes.
              </p>
            </div>
            
            <div>
              <h3 className="text-[13px] tracking-[0.15em] uppercase font-medium text-charcoal-900 mb-4">
                Pella Entry Doors
              </h3>
              <p className="text-charcoal-600 text-sm leading-relaxed">
                Pella entry doors feature their exclusive fiberglass and steel options with advanced security features. Their EnduraClad finish resists fading and scratching while their insulated cores deliver exceptional energy efficiency for Irving homes.
              </p>
            </div>
            
            <div>
              <h3 className="text-[13px] tracking-[0.15em] uppercase font-medium text-charcoal-900 mb-4">
                JELD-WEN Entry Doors
              </h3>
              <p className="text-charcoal-600 text-sm leading-relaxed">
                JELD-WEN offers exceptional value in entry doors with their Aurora fiberglass and steel collections. AuraLast wood doors provide authentic wood beauty with advanced protection. Wide range of styles and price points to fit any budget.
              </p>
            </div>
            
            <div>
              <h3 className="text-[13px] tracking-[0.15em] uppercase font-medium text-charcoal-900 mb-4">
                Marvin Entry Doors
              </h3>
              <p className="text-charcoal-600 text-sm leading-relaxed">
                Marvin Signature entry doors represent the pinnacle of custom craftsmanship. Available in wood, fiberglass, and composite materials with unlimited customization options. Every door is built to order with meticulous attention to detail.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-stone-100">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-12">
          <h2 className="text-heading-serif text-3xl md:text-4xl text-charcoal-900 font-light text-center mb-16">
            Frequently Asked Questions
          </h2>
          
          <div className="space-y-8 max-w-[900px] mx-auto">
            <div>
              <h3 className="text-[13px] tracking-[0.15em] uppercase font-medium text-charcoal-900 mb-3">
                How long does entry door installation take in Irving?
              </h3>
              <p className="text-charcoal-600 text-sm leading-relaxed">
                Most entry door installations in Irving, TX are completed in 4 to 8 hours. Complex installations with sidelights, transoms, or structural modifications may require a full day or more. We provide accurate timelines during your consultation and work efficiently to minimize disruption.
              </p>
            </div>
            
            <div>
              <h3 className="text-[13px] tracking-[0.15em] uppercase font-medium text-charcoal-900 mb-3">
                Do I need a permit to install my entry door in Irving?
              </h3>
              <p className="text-charcoal-600 text-sm leading-relaxed">
                In most cases, installing an entry door in an existing opening does not require a permit in Irving, TX. However, if you are changing the size of the opening or making structural modifications, permits may be necessary. We help navigate local building requirements and coordinate with Irving building officials when needed.
              </p>
            </div>
            
            <div>
              <h3 className="text-[13px] tracking-[0.15em] uppercase font-medium text-charcoal-900 mb-3">
                What is the best entry door material for Texas weather?
              </h3>
              <p className="text-charcoal-600 text-sm leading-relaxed">
                Fiberglass and steel doors perform exceptionally well in Irving, TX climate. Fiberglass resists warping and cracking in temperature extremes while requiring minimal maintenance. Steel offers maximum security and excellent insulation. Both outperform wood in terms of weather resistance, though premium wood doors with proper finishes also perform well with regular maintenance.
              </p>
            </div>
            
            <div>
              <h3 className="text-[13px] tracking-[0.15em] uppercase font-medium text-charcoal-900 mb-3">
                How much do entry doors cost in Irving?
              </h3>
              <p className="text-charcoal-600 text-sm leading-relaxed">
                Entry door costs in Irving, TX vary widely based on material, size, brand, and features. Basic steel doors start around $800 to $1,200 installed. Quality fiberglass doors typically range from $1,500 to $3,500 installed. Premium wood or custom doors can range from $3,000 to $8,000 or more. We provide detailed quotes based on your specific selections and installation requirements.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 md:py-32 bg-charcoal-500">
        <div className="max-w-[800px] mx-auto px-6 text-center">
          <h2 className="text-heading-serif text-3xl md:text-4xl text-white font-light mb-6 leading-relaxed">
            Ready to upgrade your entry door in Irving?
          </h2>
          <p className="text-stone-300 text-base mb-10">
            Get a free consultation and quote for your entry door installation project.
          </p>
          <a href="/contact" className="btn-white">
            Get in Touch
          </a>
        </div>
      </section>

      <PageFooter />
    </div>
  )
}
