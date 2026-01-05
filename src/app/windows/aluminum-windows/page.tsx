import type { Metadata } from 'next'
import Header from '@/components/header'
import Footer from '@/components/footer'
import ServiceHero from '@/components/service-hero'
import ServiceContent from '@/components/service-content'
import CtaBanner from '@/components/cta-banner'
import ContactSection from '@/components/contact-section'

export const metadata: Metadata = {
  title: 'Aluminum Windows Replacement Irving TX | Durable, Modern Design',
  description: 'High-quality aluminum replacement windows in Irving, TX. Durable, sleek, and energy-efficient. Andersen, Pella & JELD-WEN aluminum options. Everything priced including installation. Call 817-592-8870.',
  keywords: 'aluminum windows Irving TX, aluminum replacement windows, durable windows, modern aluminum windows, Andersen aluminum windows, Pella aluminum windows, JELD-WEN aluminum windows',
}

export default function AluminumWindowsPage() {
  const content = {
    title: 'Aluminum Windows Replacement in Irving, TX',
    subtitle: 'Sleek, Durable Performance with Modern Thermal Efficiency',
    heroImage: '/window-types/aluminum-irving-tx.jpg',

    intro: "Irving&apos;s corporate landscape and proximity to DFW Airport demand windows that combine professional aesthetics with exceptional durability. Aluminum windows have evolved significantly from basic sliding windows, now offering thermal break technology, sleek contemporary styling, and remarkable strength that suits Irving&apos;s mix of corporate headquarters, upscale residential developments, and airport-adjacent neighborhoods. Modern aluminum windows provide the sophisticated appearance and lasting performance that Irving homeowners and property managers expect in a business-savvy community.",

    sections: [
      {
        heading: 'Thermal Break Technology for Airport Area Efficiency',
        content: "Irving&apos;s proximity to DFW Airport creates unique energy challenges that modern aluminum windows address with advanced thermal break technology. A thermal break is a non-conductive material inserted between aluminum sections, creating an insulating barrier that dramatically improves energy performance. This prevents heat conduction through the metal, achieving U-factors comparable to vinyl windows while maintaining aluminum&apos;s sleek appearance. In Irving&apos;s variable climate, thermally broken aluminum windows reduce heating and cooling costs by 25-35%, providing measurable savings for homeowners and cost-conscious property managers. Many models qualify for ENERGY STAR certification, confirming their efficiency credentials.",
      },
      {
        heading: 'Corporate-Grade Durability and Strength',
        content: "Aluminum&apos;s fundamental properties make it exceptionally well-suited for Irving&apos;s demanding environment. The material never rusts, rots, or warps, maintaining structural integrity indefinitely. Aluminum windows are virtually indestructible—they resist impact damage from hail, vandalism, or severe weather far better than alternatives. This makes them ideal for Irving&apos;s busy urban environment and airport-adjacent properties. The frames are extruded to precise tolerances, ensuring smooth operation and perfect alignment. Aluminum&apos;s strength enables larger window units and thinner sightlines that maximize views while maintaining structural stability. With proper maintenance, quality aluminum windows provide 40+ years of service.",
      },
      {
        heading: 'Contemporary Aesthetics for Modern Irving',
        content: "Aluminum windows excel at delivering the clean, minimalist aesthetic that complements Irving&apos;s corporate and contemporary architecture. Las Colinas' glass-and-steel aesthetic and modern residential developments benefit from aluminum&apos;s ability to create thin, precise profiles that maximize glass area with minimal framing. The material accepts a wide range of exterior finishes, from natural silver tones to custom powder-coated colors that match Irving&apos;s architectural preferences. Unlike wood windows that can swell or shrink, aluminum maintains perfectly straight lines year-round. For Irving homeowners seeking sophisticated, maintenance-light windows that reflect the city&apos;s progressive character, aluminum provides the perfect balance of form and function.",
      },
      {
        heading: 'Low Maintenance with Professional Appeal',
        content: "While aluminum windows require more maintenance than vinyl options, they offer excellent long-term value with minimal care requirements in Irving&apos;s environment. Exterior surfaces benefit from periodic refinishing (typically every 8-12 years) to maintain appearance and protect the metal. The frames themselves never corrode or degrade, and interior surfaces require no maintenance beyond occasional cleaning. This maintenance schedule aligns well with Irving&apos;s professional community, where property owners appreciate quality materials that require periodic professional care rather than constant attention. Compared to wood windows that require annual maintenance, aluminum windows represent a significant time and cost savings.",
      },
      {
        heading: 'Versatility for Irving\&apos;s Diverse Architecture',
        content: "Aluminum&apos;s workability allows it to be formed into virtually any window configuration, making it ideal for Irving&apos;s architectural diversity. From the sleek contemporary designs of Las Colinas to traditional homes in established neighborhoods, aluminum adapts beautifully. The material accommodates all major glass types, from single-pane for cost-conscious applications to triple-pane insulated units for maximum energy efficiency. In Irving, aluminum windows excel in commercial-style installations and large glass areas that enhance natural light. The material&apos;s compatibility with impact-resistant glass makes it suitable for properties near the airport. Whether for residential or commercial applications, aluminum provides the design flexibility required in Irving&apos;s dynamic environment.",
      },
      {
        heading: 'Sustainable and Recyclable Construction',
        content: "Aluminum represents one of the most environmentally responsible building materials available, perfectly aligning with Irving&apos;s corporate environmental consciousness. The material is 100% recyclable without loss of quality—recycled aluminum requires just 5% of the energy needed to produce new aluminum. Many aluminum window manufacturers use significant amounts of recycled content in their products. The material&apos;s longevity reduces the environmental impact of replacement over time. Aluminum windows contribute to sustainable building practices by enabling larger glass areas that maximize natural light and reduce artificial lighting needs. For environmentally aware Irving homeowners and businesses, aluminum windows provide premium performance with significantly lower ecological footprint.",
      },
    ],

    features: [
      'Thermal break technology for energy efficiency',
      'Exceptional strength and impact resistance',
      'Sleek, contemporary appearance',
      'Narrow sightlines maximize glass area',
      'Available in unlimited color options',
      '40+ year lifespan with proper maintenance',
      'Resists rust, rot, and corrosion',
      'Compatible with all glass types',
      'Smooth, precise operation',
      'Environmentally recyclable',
    ],

    brands: [
      {
        name: 'Andersen Aluminum Series',
        description: 'Andersen combines their expertise in window design with advanced aluminum extrusion technology. Their aluminum windows feature comprehensive thermal breaks and premium hardware for exceptional performance and longevity.',
      },
      {
        name: 'Pella Aluminum Windows',
        description: 'Pella\&apos;s aluminum windows incorporate their signature EnduraClad protection system and advanced thermal barrier systems. The result is aluminum performance with superior weather resistance and energy efficiency.',
      },
      {
        name: 'JELD-WEN Aluminum Collection',
        description: 'JELD-WEN offers premium aluminum windows with fusion-welded construction and comprehensive thermal breaks. Their extensive color selection ensures you can match any design aesthetic.',
      },
    ],

    faq: [
      {
        question: 'Do aluminum windows need painting in Irving?',
        answer: 'Yes, aluminum windows require periodic exterior painting (typically every 8-12 years) to maintain their appearance and protect the metal from oxidation. However, the frames never rust or corrode, and the maintenance is far less frequent than wood windows.',
      },
      {
        question: 'Are aluminum windows energy efficient near DFW Airport?',
        answer: 'Modern aluminum windows with thermal breaks are highly energy efficient, achieving U-factors comparable to vinyl windows. They can reduce heating and cooling costs by 25-35% in Irving\&apos;s climate when properly specified with insulated glass.',
      },
      {
        question: 'How long do aluminum windows last in Irving?',
        answer: 'Quality aluminum windows last 40+ years with proper maintenance. The frames never degrade like wood or vinyl, and with periodic repainting, they maintain their appearance and performance indefinitely.',
      },
      {
        question: 'Are aluminum windows suitable for Las Colinas architecture?',
        answer: 'Absolutely. Aluminum windows complement Las Colinas\' contemporary glass-and-steel aesthetic perfectly with their sleek lines, large glass areas, and modern styling that enhances upscale architectural designs.',
      },
      {
        question: 'Can aluminum windows be recycled?',
        answer: 'Yes, aluminum is 100% recyclable without loss of quality. Many aluminum windows contain recycled content, and the frames can be recycled at the end of their service life, making them an environmentally responsible choice.',
      },
      {
        question: 'How much do aluminum windows cost with installation?',
        answer: 'Aluminum window costs with installation vary by style and features. Everything is priced including installation. Pricing starts at around $850 for small vinyl windows and goes up to $3500 per window depending on frame material. We do not sell windows without installation.',
      },
    ],
  }

  return (
    <>
      <Header />
      <main>
        <ServiceHero
          title={content.title}
          subtitle={content.subtitle}
          image={content.heroImage}
        />
        <ServiceContent content={content} />
        <CtaBanner />
        <ContactSection />
      </main>
      <Footer />
    </>
  )
}