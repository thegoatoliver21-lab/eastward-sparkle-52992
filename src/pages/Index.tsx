import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { AboutUs } from "@/components/AboutUs";
import { Games } from "@/components/Games";
import { Events } from "@/components/Events";
import { Gallery } from "@/components/Gallery";
import { Members } from "@/components/Members";
import { SocialNetworks } from "@/components/SocialNetworks";
import { Footer } from "@/components/Footer";
import { LaserCursor } from "@/components/LaserCursor";

const Index = () => {
  return (
    <div className="min-h-screen">
      <LaserCursor />
      <Navigation />
      <main id="home">
        <Hero />
        <AboutUs />
        <Games />
        <Events />
        <Gallery />
        <Members />
        <SocialNetworks />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
