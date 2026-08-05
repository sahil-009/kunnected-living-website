import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { Hero, ClientLogos } from "@/components/home/Hero";
import { WhoWeAre, WhyChooseUs } from "@/components/home/WhoWeAre";
import { Services, Industries } from "@/components/home/Services";
import { Stats } from "@/components/home/Stats";
import { Methodology } from "@/components/home/Methodology";
import { CaseStudy, Testimonials, CtaBand } from "@/components/home/Sections";
import { Faq } from "@/components/home/Faq";
import { company } from "@/lib/site";

const title = "Kunnected FM — Smarter Campus Operations, Abu Dhabi";
const description =
  "Student-facing facilities management for universities and accommodation: HVAC, cleaning, electrical, fire safety and 24/7 maintenance across the campus estate in Abu Dhabi.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          name: company.legalName,
          alternateName: company.name,
          slogan: company.tagline,
          email: company.email,
          telephone: company.tel,
          address: {
            "@type": "PostalAddress",
            streetAddress: company.address.line1,
            addressLocality: "Abu Dhabi",
            addressCountry: "AE",
          },
          areaServed: "United Arab Emirates",
        }),
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-dvh bg-background">
      <Nav />
      <main>
        <Hero />
        <ClientLogos />
        <WhoWeAre />
        <Stats />
        <Services />
        <Methodology />
        <WhyChooseUs />
        <CaseStudy />
        <Industries />
        <Testimonials />
        <Faq />
        <CtaBand />
      </main>
      <Footer />
    </div>
  );
}
