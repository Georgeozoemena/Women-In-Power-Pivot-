import Hero from "../components/sections/Hero";
import Stats from "../components/sections/Stats";
import Partners from "../components/sections/Partners";
import GetInvolved from "../components/sections/GetInvolved";
import Testimonials from "../components/sections/Testimonials";
import ContactHero from "../components/sections/Contacthero";
import WebinarCTA from "../components/sections/WebinarCTA";

export default function Home() {
  return (
    <>
      <Hero />
      <WebinarCTA />
      <Stats />
      <Partners />
      <GetInvolved />
      <Testimonials />
      <ContactHero />
    </>
  );
}