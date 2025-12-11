import Navbar from "@/components/navbar";
import Hero from "@/components/hero";
import Services from "@/components/services";
import FeaturedWork from "@/components/featured-work";
import TeamPreview from "@/components/team-preview";
import Testimonial from "@/components/testimonial";
import Experience from "@/components/experience";
import CTA from "@/components/cta";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Experience />
      <Services />
      <FeaturedWork />
      <TeamPreview />
      <Testimonial />
      <CTA />
      <Footer />
    </>
  );
}
