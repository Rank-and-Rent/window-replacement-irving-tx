import type { Metadata } from 'next'
import { PageHeader } from '@/components/page-header'
import { PageFooter } from '@/components/page-footer'

export const metadata: Metadata = {
  title: 'Window Replacement Arlington TX | Quality Installation & Service',
  description: 'Expert window replacement in Arlington, TX. Serving from Entertainment District to Mansfield Highway. Andersen, Pella & Jeld-Wen authorized dealer. Call 972-284-7995',
}

export default function ArlingtonPage() {
  return (
    <div className="min-h-screen bg-white">
      <PageHeader />

      <section className="relative min-h-[60vh] flex items-center pt-32">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1920&q=80)',
          }}
        />
        <div className="hero-overlay absolute inset-0" />
        
        <div className="relative z-10 w-full max-w-[1400px] mx-auto px-6 lg:px-12">
          <h1 className="text-heading-serif text-4xl md:text-5xl lg:text-6xl text-white font-light mb-6">
            Window Replacement in Arlington, TX
          </h1>
          <p className="text-white/90 text-lg md:text-xl max-w-2xl mb-8">
            Premium replacement windows for Arlington homes—from historic Woodland West to growing developments near Joe Pool Lake. Factory-trained installation and authorized dealer pricing.
          </p>
          <a href="/contact" className="btn-white">
            Request Estimate
          </a>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <h2 className="text-heading-serif text-3xl md:text-4xl text-charcoal-900 font-light mb-6">
                Arlington's window replacement specialists
              </h2>
              <p className="text-charcoal-600 text-base leading-relaxed mb-6">
                Positioned between Dallas and Fort Worth, Arlington has evolved from suburban bedroom community to major Texas city with distinct identity. The housing stock reflects this evolution—post-WWII ranch homes in Dalworth Park, 1970s-80s two-stories in River Oaks and Sherrod Estates, and contemporary construction near the Entertainment District. Each generation of Arlington homes presents unique window replacement challenges we've mastered through hundreds of local installations.
              </p>
              <p className="text-charcoal-600 text-base leading-relaxed mb-6">
                Arlington homeowners replacing original windows from the 1970s-80s discover dramatic improvements in comfort and energy efficiency. Those decades' windows featured single-pane glass or basic double-pane with aluminum frames—technologies that seem primitive by today's standards. Modern Low-E glass with argon fills and insulated vinyl frames reduce energy consumption by 40-50%, transforming previously uncomfortable rooms into pleasant living spaces year-round.
              </p>
              <p className="text-charcoal-600 text-base leading-relaxed">
                The city's location in open prairie exposes Arlington homes to intense sun and wind. South and west-facing windows bear the brunt of Texas's solar assault, making glass selection critical. We specify appropriate Low-E coatings based on each window's orientation, ensuring maximum heat rejection where needed while maintaining natural light transmission. This customized approach optimizes both comfort and energy performance for Arlington's specific climate challenges.
              </p>
            </div>
            
            <div>
              <img
                src="https://images.unsplash.com/photo-1600210492493-0946911123ea?w=1000&q=80"
                alt="Arlington TX window installation"
                className="w-full aspect-[4/5] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-stone-100">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-12">
          <h2 className="text-heading-serif text-3xl md:text-4xl text-charcoal-900 font-light mb-12">
            Arlington neighborhoods we serve
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div>
              <h3 className="text-[13px] tracking-[0.15em] uppercase font-medium text-charcoal-900 mb-4">
                Central Arlington
              </h3>
              <ul className="text-charcoal-600 text-sm space-y-2">
                <li>Dalworth Park</li>
                <li>Downtown Arlington</li>
                <li>Park Springs</li>
                <li>Woodland West</li>
                <li>Woodhaven</li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-[13px] tracking-[0.15em] uppercase font-medium text-charcoal-900 mb-4">
                North Arlington
              </h3>
              <ul className="text-charcoal-600 text-sm space-y-2">
                <li>Lake Arlington</li>
                <li>Viridian</li>
                <li>Rush Creek</li>
                <li>Meadow Creek</li>
                <li>Webb</li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-[13px] tracking-[0.15em] uppercase font-medium text-charcoal-900 mb-4">
                South Arlington
              </h3>
              <ul className="text-charcoal-600 text-sm space-y-2">
                <li>River Oaks</li>
                <li>Sherrod Estates</li>
                <li>Kennedale</li>
                <li>Mansfield Highway</li>
                <li>Southeast Arlington</li>
              </ul>
            </div>
          </div>
          
          <div className="bg-white p-8">
            <h3 className="text-xl font-light text-charcoal-900 mb-4">Entertainment District Window Services</h3>
            <p className="text-charcoal-600 leading-relaxed">
              The explosion of high-density residential development near AT&T Stadium, Globe Life Field, and Six Flags creates unique window needs. Contemporary townhomes and condos feature extensive glass maximizing natural light in compact spaces. We specialize in modern window walls, floor-to-ceiling installations, and noise-reducing glass that maintains comfort despite proximity to Arlington's entertainment venues and busy roadways.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-heading-serif text-3xl md:text-4xl text-charcoal-900 font-light mb-8">
                Energy efficiency for Arlington summers
              </h2>
              <p className="text-charcoal-600 leading-relaxed mb-6">
                Arlington's open terrain provides little natural shade—unlike tree-lined neighborhoods in older Dallas and Fort Worth districts. This means Arlington homes receive full solar exposure during summer months when the sun blazes relentlessly. Windows become critical components of your home's thermal envelope, either protecting against heat gain or allowing it to pour inside and drive up cooling costs.
              </p>
              <p className="text-charcoal-600 leading-relaxed mb-6">
                We recommend dual-pane Low-E windows as minimum specification for Arlington replacements, with triple-pane consideration for large west-facing openings. The additional insulation pays for itself within 5-7 years through reduced air conditioning costs—faster in homes with extensive glass. Arlington's high electricity rates make energy-efficient windows among the smartest home improvement investments available.
              </p>
              <p className="text-charcoal-600 leading-relaxed">
                Beyond energy savings, quality windows dramatically improve comfort. Eliminate hot spots near windows where sun radiates heat despite air conditioning running constantly. Reduce cold drafts in winter when north winds sweep across North Texas prairie. Modern weatherstripping and insulated frames create consistent temperatures throughout your Arlington home regardless of outdoor conditions.
              </p>
            </div>
            
            <div>
              <img
                src="https://images.unsplash.com/photo-1600573472550-8090b5e0745e?w=1000&q=80"
                alt="Energy efficient windows Arlington"
                className="w-full aspect-[3/4] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-charcoal-500">
        <div className="max-w-[1000px] mx-auto px-6 lg:px-12 text-center">
          <h2 className="text-heading-serif text-3xl md:text-4xl text-white font-light mb-8">
            Arlington's trusted window replacement company
          </h2>
          <p className="text-stone-300 text-lg leading-relaxed mb-8 max-w-2xl mx-auto">
            From initial consultation through final installation, we deliver the transparency and professionalism Arlington homeowners deserve. Our factory-trained installers treat your home with respect, complete thorough cleanup, and ensure your complete satisfaction before leaving your property.
          </p>
          <p className="text-stone-300 leading-relaxed max-w-2xl mx-auto">
            We're not a high-pressure sales operation—we're window experts who educate you about options, answer questions honestly, and let you make informed decisions on your timeline. Hundreds of satisfied Arlington customers confirm this approach delivers superior results and genuine peace of mind.
          </p>
        </div>
      </section>

      <section className="py-24 bg-stone-100">
        <div className="max-w-[800px] mx-auto px-6 text-center">
          <h2 className="text-heading-serif text-3xl md:text-4xl text-charcoal-900 font-light mb-8">
            Schedule your Arlington window consultation
          </h2>
          <p className="text-charcoal-600 mb-10">
            We'll visit your Arlington home, measure existing windows, discuss your goals and budget, and provide accurate pricing with no obligation. Most consultations take 45-60 minutes and provide complete clarity about your project.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/contact" className="btn-outline-dark">
              Book Free Consultation
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

