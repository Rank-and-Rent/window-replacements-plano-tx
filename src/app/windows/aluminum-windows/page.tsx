import type { Metadata } from 'next'
import Header from '@/components/header'
import Footer from '@/components/footer'
import ServiceHero from '@/components/service-hero'
import ServiceContent from '@/components/service-content'
import CtaBanner from '@/components/cta-banner'
import ContactSection from '@/components/contact-section'

export const metadata: Metadata = {
  title: 'Aluminum Windows Replacement Plano TX | Durable, Modern Design',
  description: 'High-quality aluminum replacement windows in Plano, TX. Durable, sleek, and energy-efficient. Andersen, Pella & JELD-WEN aluminum options. Everything priced including installation. Call 817-592-8870.',
  keywords: 'aluminum windows Plano TX, aluminum replacement windows, durable windows, modern aluminum windows, Andersen aluminum windows, Pella aluminum windows, JELD-WEN aluminum windows',
}

export default function AluminumWindowsPage() {
  const content = {
    title: 'Aluminum Windows Replacement in Plano, TX',
    subtitle: 'Sleek, Durable Performance with Modern Thermal Efficiency',
    heroImage: '/window-types/aluminum-plano-tx.jpg',

    intro: "Plano&apos;s tech-savvy community and affluent suburban environment make modern aluminum windows an excellent choice for homeowners seeking sophisticated performance. As a technology hub with upscale residential developments, Plano attracts professionals who appreciate aluminum windows' combination of sleek contemporary styling, exceptional strength, and thermal break efficiency. Whether in established neighborhoods or new luxury developments, aluminum windows provide the modern aesthetic and lasting performance that Plano homeowners demand. With the area&apos;s focus on innovation and quality, aluminum windows offer cutting-edge design that enhances Plano&apos;s progressive character.",

    sections: [
      {
        heading: 'Thermal Break Technology for Tech Hub Efficiency',
        content: "Plano&apos;s North Texas climate with hot summers and cool winters benefits greatly from aluminum windows' advanced thermal break technology. A thermal break is a non-conductive material inserted between aluminum sections, creating an insulating barrier that dramatically improves energy performance. This prevents heat conduction through the metal, achieving U-factors comparable to vinyl windows while maintaining aluminum&apos;s sleek appearance. In Plano&apos;s variable climate, thermally broken aluminum windows reduce heating and cooling costs by 25-35%, providing measurable savings for tech-savvy homeowners. Many models qualify for ENERGY STAR certification, appealing to Plano&apos;s environmentally conscious community.",
      },
      {
        heading: 'Professional-Grade Durability and Strength',
        content: "Aluminum&apos;s fundamental properties make it exceptionally well-suited for Plano&apos;s quality-focused environment. The material never rusts, rots, or warps, maintaining structural integrity indefinitely. Aluminum windows are virtually indestructible—they resist impact damage from severe weather far better than alternatives. This makes them ideal for Plano&apos;s upscale homes where quality and longevity are expected. The frames are extruded to precise tolerances, ensuring smooth operation and perfect alignment. Aluminum&apos;s strength enables larger window units and thinner sightlines that maximize views while maintaining structural stability. With proper maintenance, quality aluminum windows provide 40+ years of service in Plano&apos;s premium real estate market.",
      },
      {
        heading: 'Contemporary Aesthetics for Modern Plano',
        content: "Aluminum windows excel at delivering the clean, minimalist aesthetic that complements Plano&apos;s contemporary architecture and tech-forward community. The material&apos;s ability to be extruded into thin, precise profiles creates narrow sightlines that maximize glass area with minimal framing. Aluminum accepts a wide range of exterior finishes, from natural silver tones to custom powder-coated colors that match Plano&apos;s architectural sophistication. Unlike wood windows that can swell or shrink, aluminum maintains perfectly straight lines year-round. For Plano homeowners seeking sophisticated, low-maintenance windows that reflect the city&apos;s innovation and quality standards, aluminum provides the perfect balance of form and function.",
      },
      {
        heading: 'Low Maintenance with Premium Quality',
        content: "While aluminum windows require more maintenance than vinyl options, they offer excellent long-term value with manageable care requirements for Plano&apos;s professional community. Exterior surfaces benefit from periodic refinishing (typically every 8-12 years) to maintain appearance and protect the metal. The frames themselves never corrode or degrade, and interior surfaces require no maintenance beyond occasional cleaning. This maintenance schedule aligns with Plano&apos;s quality standards, where homeowners expect professional-grade materials. Compared to wood windows that require annual maintenance, aluminum windows represent a significant time and cost savings for busy professionals.",
      },
      {
        heading: 'Versatility for Plano\&apos;s Architectural Excellence',
        content: "Aluminum&apos;s workability allows it to be formed into virtually any window configuration, making it ideal for Plano&apos;s diverse and high-quality architectural landscape. From contemporary designs in luxury developments to traditional styles in established neighborhoods, aluminum adapts beautifully. The material accommodates all major glass types, from single-pane for cost-conscious applications to triple-pane insulated units for maximum energy efficiency. In Plano, aluminum windows excel in premium applications that demand durability and style. The material&apos;s compatibility with impact-resistant glass makes it suitable for areas with occasional severe weather. Whether for new luxury construction or replacement in established homes, aluminum provides the design flexibility required in Plano&apos;s quality-focused market.",
      },
      {
        heading: 'Sustainable Investment for Plano Professionals',
        content: "Aluminum represents one of the most environmentally responsible building materials available, perfectly aligning with Plano&apos;s tech-savvy environmental consciousness. The material is 100% recyclable without loss of quality—recycled aluminum requires just 5% of the energy needed to produce new aluminum. Many aluminum window manufacturers use significant amounts of recycled content in their products. The material&apos;s longevity reduces the environmental impact of replacement over time. Aluminum windows contribute to sustainable living by enabling larger glass areas that maximize natural light and reduce artificial lighting needs. For environmentally aware Plano professionals, aluminum windows provide premium performance with significantly lower ecological footprint.",
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
        question: 'Do aluminum windows need painting in Plano?',
        answer: 'Yes, aluminum windows require periodic exterior painting (typically every 8-12 years) to maintain their appearance and protect the metal from oxidation. However, the frames never rust or corrode, and the maintenance is far less frequent than wood windows.',
      },
      {
        question: 'Are aluminum windows energy efficient for Plano professionals?',
        answer: 'Modern aluminum windows with thermal breaks are highly energy efficient, achieving U-factors comparable to vinyl windows. They can reduce heating and cooling costs by 25-35% in Plano\&apos;s climate when properly specified with insulated glass.',
      },
      {
        question: 'How long do aluminum windows last in Plano?',
        answer: 'Quality aluminum windows last 40+ years with proper maintenance. The frames never degrade like wood or vinyl, and with periodic repainting, they maintain their appearance and performance indefinitely.',
      },
      {
        question: 'Are aluminum windows suitable for Plano luxury homes?',
        answer: 'Absolutely. Aluminum windows are perfect for Plano\&apos;s luxury market with their premium durability, contemporary styling, and professional-grade performance that matches the city\&apos;s quality standards.',
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