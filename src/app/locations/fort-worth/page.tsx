import type { Metadata } from 'next'
import { PageHeader } from '@/components/page-header'
import { PageFooter } from '@/components/page-footer'

export const metadata: Metadata = {
  title: 'Window Replacement Fort Worth TX | Andersen, Pella & Jeld-Wen Dealer',
  description: 'Professional window replacement in Fort Worth, TX. Authorized dealer for Andersen, Pella & Jeld-Wen windows. Expert installation serving Tarrant County. Free quotes: 972-284-7995',
}

export default function FortWorthPage() {
  return (
    <div className="min-h-screen bg-white">
      <PageHeader />

      <section className="relative min-h-[60vh] flex items-center pt-32">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1920&q=80)',
          }}
        />
        <div className="hero-overlay absolute inset-0" />
        
        <div className="relative z-10 w-full max-w-[1400px] mx-auto px-6 lg:px-12">
          <h1 className="text-heading-serif text-4xl md:text-5xl lg:text-6xl text-white font-light mb-6">
            Window Replacement in Fort Worth, TX
          </h1>
          <p className="text-white/90 text-lg md:text-xl max-w-2xl mb-8">
            Serving Cowtown with premium Andersen, Pella & Jeld-Wen windows. From historic Southside homes to modern developments near Clearfork, we deliver quality installations across Tarrant County.
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
                Window replacement expertise for Fort Worth's diverse architecture
              </h2>
              <p className="text-charcoal-600 text-base leading-relaxed mb-6">
                Fort Worth's architectural tapestry spans 130 years—from Victorian mansions in Fairmount to mid-century ranch homes in Ridglea Hills to contemporary masterpieces along the Trinity River. Each era demands specialized window replacement knowledge. Our Fort Worth team understands these distinctions, recommending windows that honor historical character while delivering modern energy performance demanded by Texas's punishing climate.
              </p>
              <p className="text-charcoal-600 text-base leading-relaxed mb-6">
                The city's explosive growth—particularly in southwest Fort Worth around Chisholm Trail Ranch and Walsh Ranch—creates unprecedented demand for new construction and replacement windows. We work with homeowners replacing original builder-grade windows in 10-15 year old homes where seal failures and operational problems have become chronic. Quality replacements from Andersen, Pella, and Jeld-Wen eliminate these frustrations while substantially reducing utility bills.
              </p>
              <p className="text-charcoal-600 text-base leading-relaxed">
                Fort Worth's urban forest—those majestic live oaks and pecans shading established neighborhoods—creates unique considerations for window selection. North-facing windows in tree shade require different glass specifications than south-facing windows receiving full Texas sun. Our consultants evaluate each window's specific solar exposure, recommending appropriate Low-E coatings that optimize both energy performance and natural light transmission.
              </p>
            </div>
            
            <div>
              <img
                src="https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=1000&q=80"
                alt="Fort Worth home window replacement"
                className="w-full aspect-[4/5] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-stone-100">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-12">
          <h2 className="text-heading-serif text-3xl md:text-4xl text-charcoal-900 font-light text-center mb-16">
            Neighborhoods we serve in Fort Worth
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-[13px] tracking-[0.15em] uppercase font-medium text-charcoal-900 mb-4">
                Historic Districts
              </h3>
              <ul className="text-charcoal-600 text-sm space-y-2">
                <li>Fairmount</li>
                <li>Berkeley Place</li>
                <li>Ryan Place</li>
                <li>Mistletoe Heights</li>
                <li>Bluebonnet Hills</li>
                <li>Monticello</li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-[13px] tracking-[0.15em] uppercase font-medium text-charcoal-900 mb-4">
                Established Communities
              </h3>
              <ul className="text-charcoal-600 text-sm space-y-2">
                <li>Ridglea Hills</li>
                <li>Tanglewood</li>
                <li>Westover Hills</li>
                <li>Meadowbrook</li>
                <li>Como</li>
                <li>Riverside</li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-[13px] tracking-[0.15em] uppercase font-medium text-charcoal-900 mb-4">
                Growing Areas
              </h3>
              <ul className="text-charcoal-600 text-sm space-y-2">
                <li>Walsh Ranch</li>
                <li>Chisholm Trail Ranch</li>
                <li>Clearfork</li>
                <li>Alliance</li>
                <li>Fossil Creek</li>
                <li>Far North Fort Worth</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-12">
          <h2 className="text-heading-serif text-3xl md:text-4xl text-charcoal-900 font-light mb-12">
            Fort Worth climate considerations
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-xl font-light text-charcoal-900 mb-4">Summer Heat Management</h3>
              <p className="text-charcoal-600 leading-relaxed mb-6">
                Fort Worth summers routinely exceed 100°F with heat index values pushing 110°F. Windows become your home's thermal weak point—single-pane and even basic double-pane windows allow massive solar heat gain that overwhelms air conditioning systems. We specify Low-E4 SmartSun glass for south and west exposures, reflecting up to 70% of solar heat before it enters your Fort Worth home.
              </p>
              <p className="text-charcoal-600 leading-relaxed">
                The investment pays rapid dividends. Fort Worth homeowners report 20-30% reductions in summer cooling costs after replacing windows with premium energy-efficient alternatives. With Oncor electric rates and Texas's deregulated market volatility, these savings compound substantially over windows' 20-30 year lifespan. Energy-efficient windows aren't optional in Fort Worth—they're financial necessity.
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-light text-charcoal-900 mb-4">Severe Weather Durability</h3>
              <p className="text-charcoal-600 leading-relaxed mb-6">
                Fort Worth sits in Tornado Alley's southern reaches, experiencing severe thunderstorms with damaging winds, large hail, and occasional tornadoes. While windows won't survive direct tornado strikes, impact-resistant glass options protect against windborne debris—tree branches, roof shingles, patio furniture turned projectile. Laminated glass holds together even when cracked, preventing catastrophic home damage.
              </p>
              <p className="text-charcoal-600 leading-relaxed">
                North Texas's temperature swings—90-degree days followed by 30-degree nights during spring and fall—stress window seals and frames. Inferior vinyl becomes brittle and cracks; cheap weatherstripping hardens and loses resilience. Premium windows from Andersen, Pella, and Jeld-Wen use advanced vinyl formulations and silicone-based weatherstripping engineered for these thermal cycles, maintaining performance across Fort Worth's extreme seasonal variations.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-charcoal-500">
        <div className="max-w-[1000px] mx-auto px-6 lg:px-12">
          <h2 className="text-heading-serif text-3xl md:text-4xl text-white font-light mb-8 text-center">
            Why Fort Worth homeowners choose us
          </h2>
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-5xl text-white/20 font-light mb-4">15+</div>
              <h3 className="text-white text-lg mb-2">Years Serving Tarrant County</h3>
              <p className="text-stone-300 text-sm">Deep local knowledge and proven reputation across Fort Worth neighborhoods</p>
            </div>
            <div>
              <div className="text-5xl text-white/20 font-light mb-4">1000+</div>
              <h3 className="text-white text-lg mb-2">Fort Worth Installations</h3>
              <p className="text-stone-300 text-sm">Extensive experience with every architectural style and window challenge</p>
            </div>
            <div>
              <div className="text-5xl text-white/20 font-light mb-4">100%</div>
              <h3 className="text-white text-lg mb-2">Satisfaction Guarantee</h3>
              <p className="text-stone-300 text-sm">We don't leave until you're completely satisfied with every detail</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-stone-100">
        <div className="max-w-[800px] mx-auto px-6 text-center">
          <h2 className="text-heading-serif text-3xl md:text-4xl text-charcoal-900 font-light mb-8">
            Ready to upgrade your Fort Worth windows?
          </h2>
          <p className="text-charcoal-600 mb-10">
            Schedule your free in-home consultation. We'll measure your windows, discuss your goals, and provide transparent pricing with no pressure to commit.
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

