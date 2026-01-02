import Header from "@/components/header";
import { SocialBar, ContactSection, Footer } from "@/components/footer";
import { servicesData } from "@/data";
import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

interface PageProps {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  const windowServices = servicesData.filter(service => service.category === "Windows");

  return windowServices.map((service) => ({
    slug: service.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const service = servicesData.find(s => s.slug === params.slug && s.category === "Windows");

  if (!service) {
    return {
      title: "Window Service | Window Replacements of Plano",
      description: "Professional window services in Plano, TX",
    };
  }

  return {
    title: `${service.name} Replacement in Plano, TX | Window Replacements`,
    description: `${service.name} replacement services in Plano, TX. Professional installation by certified technicians. Call 945-207-3988.`,
    keywords: `${service.slug} Plano TX, ${service.name.toLowerCase()} replacement, window installation Plano`,
  };
}

export default function WindowServicePage({ params }: PageProps) {
  const service = servicesData.find(s => s.slug === params.slug && s.category === "Windows");

  if (!service) {
    notFound();
  }

  const content = {
    title: `${service.name} Services`,
    description: service.short,
    advantages: [
      { title: "Professional Installation", desc: "Expert technicians ensure perfect fit and function" },
      { title: "Energy Efficient", desc: "Modern windows reduce energy costs" },
      { title: "Quality Materials", desc: "Premium brands with lifetime warranties" },
      { title: "Custom Options", desc: "Wide variety of styles and configurations" }
    ]
  };

  return (
    <>
      <Header />

      {/* Breadcrumbs */}
      <nav className="bg-gray-50 py-4 pt-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ol className="flex items-center space-x-2 text-sm text-gray-600">
            <li><Link href="/" className="hover:text-blue-600">Home</Link></li>
            <li>/</li>
            <li><Link href="/windows" className="hover:text-blue-600">Windows</Link></li>
            <li>/</li>
            <li className="text-gray-900 font-medium">{service.name}</li>
          </ol>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center bg-gray-900">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{ backgroundImage: `url('/windows/${params.slug}-plano-tx.jpg')` }}
        />
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto py-20">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            {service.name} Replacement in Plano, TX
          </h1>
          <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
            {service.short}
          </p>
          <Link href="/contact" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
            Get Free Estimate
          </Link>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-start mb-16">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                {content.title}
              </h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                {content.description}
              </p>
              {content.description.includes('.') && (
                <p className="text-gray-700 leading-relaxed">
                  Professional installation by our certified technicians ensures your {service.name.toLowerCase()} perform optimally for years to come.
                </p>
              )}
            </div>
            {content.advantages.length > 0 && (
              <div className="bg-white p-8 rounded-lg shadow-sm border">
                <h3 className="text-2xl text-gray-900 mb-6">{service.name} Advantages</h3>
                <ul className="space-y-4">
                  {content.advantages.map((advantage, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-blue-600 mr-3 mt-1">•</span>
                      <div>
                        <strong className="text-gray-900">{advantage.title}:</strong>
                        <span className="text-gray-700 ml-1">{advantage.desc}</span>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          {/* Brand Logos */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Premium Brands We Install
            </h2>
            <div className="flex justify-center items-center gap-6 flex-wrap">
              <a href="/brands" className="hover:opacity-80 transition-opacity">
                <img src="/andersen-windows-and-doors-logo.png" alt="Andersen" className="h-12 w-auto" />
              </a>
              <a href="/brands" className="hover:opacity-80 transition-opacity">
                <img src="/Pella-Corp-Windows-Doors-Logo-2x1-1.png" alt="Pella" className="h-12 w-auto" />
              </a>
              <a href="/brands" className="hover:opacity-80 transition-opacity">
                <img src="/jeld-wen-windows-and-doors-logo.png" alt="Jeld-Wen" className="h-12 w-auto" />
              </a>
              <a href="/brands" className="hover:opacity-80 transition-opacity">
                <img src="/Marvin-LOCKUP-CMYK-898x301.png" alt="Marvin" className="h-12 w-auto" />
              </a>
            </div>
          </div>

          {/* Additional Info */}
          <div className="text-center">
            <p className="text-gray-700 text-lg">
              Contact us today for a free consultation on {service.name.toLowerCase()} replacement in Plano, TX.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gray-900 py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Upgrade Your Windows?
          </h2>
          <p className="text-gray-200 text-lg mb-8">
            Contact us today for a free consultation on {service.name.toLowerCase()} replacement in Plano, TX.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
              Get Free Estimate
            </Link>
            <a href="tel:945-207-3988" className="border border-gray-300 text-gray-300 hover:bg-gray-300 hover:text-gray-900 px-8 py-3 rounded-lg font-semibold transition-colors">
              Call 945-207-3988
            </a>
          </div>
        </div>
      </section>

      <ContactSection />
      <SocialBar />
      <Footer />
    </>
  );
}