import { FeaturesSectionWithBentoGrid } from "@/components/blocks/feature-section-with-bento-grid";
import { ContactSection } from "@/components/contact";
import Footer from "@/components/footer";
import { Introducing } from "@/components/indroducing";
import Landing from "@/components/landing";
import { NavBar } from "@/components/nav";
import { Slogen } from "@/components/slogen";
import { ZoodoTeam } from "@/components/team";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Unevee | Fitness Business Platform & Health Tracking App",
  description:
    "Unevee offers a comprehensive fitness management platform for businesses and a free health tracking app for users. Discover tools for gym management, personal training, and achieving your health goals.",
};

export default function Home() {
  const pageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    url: "https://unevee.com/",
    name: "Unevee | Fitness Business Platform & Health Tracking App",
    isPartOf: {
      "@id": "https://unevee.com/#website",
    },
    description:
      "Unevee offers a comprehensive fitness management platform for businesses and a free health tracking app for users. Discover tools for gym management, personal training, and achieving your health goals.",
    inLanguage: "en-IN",
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://unevee.com/",
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <div className="bg-black">
        <NavBar />
        <section id="home" className="scroll-mt-24">
          <Landing />
        </section>
        <section id="about" className="scroll-mt-24">
          <Introducing />
        </section>
        <section id="products" className="scroll-mt-24">
          <FeaturesSectionWithBentoGrid />
        </section>
        <section id="team" className="scroll-mt-24">
          <ZoodoTeam />
        </section>
        <section id="contact" className="scroll-mt-24">
          <ContactSection />
        </section>
        <Slogen />
        <Footer />
      </div>
    </>
  );
}
