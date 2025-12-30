import type { Metadata } from 'next'
import { PageHeader } from '@/components/page-header'
import { PageFooter } from '@/components/page-footer'

export const metadata: Metadata = {
  title: 'Window Replacement Irving TX | Local Expert Installation',
  description: 'Irving, TX window replacement specialists. Serving Las Colinas, Valley Ranch & all Irving neighborhoods. Andersen, Pella & Jeld-Wen dealer. Call 972-284-7995',
}

export default function IrvingPage() {
  return (
    <div className="min-h-screen bg-white">
      <PageHeader />

      <section className="relative min-h-[60vh] flex items-center pt-32">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1920&q=80)',
          }}
        />
        <div className="hero-overlay absolute inset-0" />
        
        <div className="relative z-10 w-full max-w-[1400px] mx-auto px-6 lg:px-12">
          <h1 className="text-heading-serif text-4xl md:text-5xl lg:text-6xl text-white font-light mb-6">
            Window Replacement in Irving, TX
          </h1>
          <p className="text-white/90 text-lg md:text-xl max-w-2xl mb-8">
            Your local Irving window experts. Proudly serving Las Colinas, Valley Ranch, and every Irving neighborhood with premium Andersen, Pella & Jeld-Wen windows since day one.
          </p>
          <a href="/contact" className="btn-white">
            Get Free Estimate
          </a>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <h2 className="text-heading-serif text-3xl md:text-4xl text-charcoal-900 font-light mb-6">
                Irving's most trusted window replacement company
              </h2>
              <p className="text-charcoal-600 text-base leading-relaxed mb-6">
                Based right here in Irving at 909 Hidden Ridge Dr, we're not a distant contractor traveling from across DFW—we're your neighbors. This local presence means faster response times, intimate knowledge of Irving's neighborhoods and building styles, and genuine investment in our reputation throughout the community. When you choose Replacement Windows of Irving, you're supporting a local business that calls this city home.
              </p>
              <p className="text-charcoal-600 text-base leading-relaxed mb-6">
                Irving's residential landscape spans decades of development—from 1950s-60s ranch homes near MacArthur Boulevard to master-planned communities like Las Colinas and Valley Ranch featuring contemporary architecture. We've worked in every Irving neighborhood, replacing windows in homes of every age and style. This experience ensures we recommend windows perfectly suited to your home's specific architecture and your family's needs.
              </p>
              <p className="text-charcoal-600 text-base leading-relaxed">
                The city's location between DFW Airport and Love Field creates unique noise challenges for Irving residents. Aircraft approach patterns route directly over many Irving neighborhoods, making sound-reducing windows more than luxury—they're essential for peaceful homes. We specify laminated acoustic glass that dramatically reduces flight noise while maintaining energy efficiency and clarity. Irving homeowners consistently report transformative improvements in home tranquility after acoustic window installation.
              </p>
            </div>
            
            <div>
              <img
                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1000&q=80"
                alt="Irving TX home window"
                className="w-full aspect-[4/5] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-stone-100">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-12">
          <h2 className="text-heading-serif text-3xl md:text-4xl text-charcoal-900 font-light text-center mb-16">
            Serving all Irving neighborhoods
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-[13px] tracking-[0.15em] uppercase font-medium text-charcoal-900 mb-4">
                Las Colinas
              </h3>
              <ul className="text-charcoal-600 text-sm space-y-2">
                <li>Four Seasons</li>
                <li>Hackberry Creek</li>
                <li>Las Colinas Country Club</li>
                <li>Cottonwood Valley</li>
                <li>North Lake</li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-[13px] tracking-[0.15em] uppercase font-medium text-charcoal-900 mb-4">
                Valley Ranch
              </h3>
              <ul className="text-charcoal-600 text-sm space-y-2">
                <li>Riverside</li>
                <li>Northgate</li>
                <li>Canyon Creek</li>
                <li>Twin Wells</li>
                <li>Cimarron Park</li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-[13px] tracking-[0.15em] uppercase font-medium text-charcoal-900 mb-4">
                Central & South Irving
              </h3>
              <ul className="text-charcoal-600 text-sm space-y-2">
                <li>Heritage District</li>
                <li>Vickery Meadow</li>
                <li>Northwest Park</li>
                <li>Britain Park</li>
                <li>Grauwyler Park</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-12">
          <h2 className="text-heading-serif text-3xl md:text-4xl text-charcoal-900 font-light mb-12">
            Why Irving residents choose us
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-xl font-light text-charcoal-900 mb-4">Local Expertise & Fast Response</h3>
              <p className="text-charcoal-600 leading-relaxed mb-4">
                Being based in Irving means we can schedule consultations quickly—often within 24-48 hours of your call. No waiting weeks for distant contractors to fit you into their schedule. We know Irving's streets, neighborhoods, and homeowners associations. This local knowledge streamlines every project phase from permitting through final inspection.
              </p>
              <p className="text-charcoal-600 leading-relaxed">
                Our warehouse and office location on Hidden Ridge Dr means faster window delivery and installation scheduling. We're not coordinating across multiple cities—Irving is our focus, our home, and our priority. This dedication translates to superior service and genuine accountability. Your satisfaction directly impacts our reputation in the community we live and work in daily.
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-light text-charcoal-900 mb-4">Transparent Pricing, Zero Pressure</h3>
              <p className="text-charcoal-600 leading-relaxed mb-4">
                We provide detailed written quotes listing every window with exact specifications, installation costs, and warranty coverage. No fine print, no surprise charges, no high-pressure sales tactics. Review our proposal at your leisure, get competitive bids if desired, and make decisions on your timeline. This transparency has earned us hundreds of referrals from satisfied Irving customers.
              </p>
              <p className="text-charcoal-600 leading-relaxed">
                Factory-direct relationships with Andersen, Pella, and Jeld-Wen eliminate middlemen markups that inflate prices elsewhere. We pass these savings directly to Irving homeowners, delivering premium windows at fair prices backed by full manufacturer warranties. Quality shouldn't require premium pricing—our business model proves it.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-charcoal-500">
        <div className="max-w-[1000px] mx-auto px-6 lg:px-12 text-center">
          <h2 className="text-heading-serif text-3xl md:text-4xl text-white font-light mb-8">
            Irving's window replacement specialists
          </h2>
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div>
              <div className="text-5xl text-white/20 font-light mb-4">500+</div>
              <h3 className="text-white text-lg mb-2">Irving Installations</h3>
              <p className="text-stone-300 text-sm">Extensive experience across every Irving neighborhood and home style</p>
            </div>
            <div>
              <div className="text-5xl text-white/20 font-light mb-4">15+</div>
              <h3 className="text-white text-lg mb-2">Years in Business</h3>
              <p className="text-stone-300 text-sm">Proven track record and established Irving community presence</p>
            </div>
            <div>
              <div className="text-5xl text-white/20 font-light mb-4">5★</div>
              <h3 className="text-white text-lg mb-2">Customer Rating</h3>
              <p className="text-stone-300 text-sm">Consistently highest ratings from satisfied Irving homeowners</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-stone-100">
        <div className="max-w-[800px] mx-auto px-6 text-center">
          <h2 className="text-heading-serif text-3xl md:text-4xl text-charcoal-900 font-light mb-8">
            Schedule your Irving window consultation today
          </h2>
          <p className="text-charcoal-600 mb-10">
            Call or email to arrange your free in-home consultation. We'll measure your windows, discuss options, answer questions, and provide transparent pricing—typically within one hour.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/contact" className="btn-outline-dark">
              Request Consultation
            </a>
            <a href="tel:972-284-7995" className="btn-dark">
              Call 972-284-7995
            </a>
          </div>
          <p className="text-charcoal-500 text-sm mt-8">
            909 Hidden Ridge Dr #180, Irving, TX 75038
          </p>
        </div>
      </section>

      <PageFooter />
    </div>
  )
}

