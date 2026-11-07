import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { TopBar } from "@/components/layout/TopBar";
import { Benefits } from "@/components/sections/Benefits";
import { ContactCTA } from "@/components/sections/ContactCTA";
import { Hero } from "@/components/sections/Hero";
import { HowWeWork } from "@/components/sections/HowWeWork";
import { Services } from "@/components/sections/Services";
import { Testimonials } from "@/components/sections/Testimonials";
import { WhyExpentra } from "@/components/sections/WhyExpentra";

export default function HomePage() {
  return (
    <>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-[100] focus:rounded-lg focus:bg-white focus:px-4 focus:py-2 focus:text-navy focus:shadow-lg"
      >
        Skip to main content
      </a>
      <TopBar />
      <Header />
      <main id="main-content">
        <Hero />
        <Benefits />
        <Services />
        <WhyExpentra />
        <HowWeWork />
        <Testimonials />
        <ContactCTA />
      </main>
      <Footer />
    </>
  );
}
