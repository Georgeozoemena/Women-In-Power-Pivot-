import Hero from "../components/sections/Hero";
import Stats from "../components/sections/Stats";
import Partners from "../components/sections/Partners";
import GetInvolved from "../components/sections/GetInvolved";
import Testimonials from "../components/sections/Testimonials";
import ContactHero from "../components/sections/Contacthero";

export default function Home() {
  return (
    <>
      <Hero />
      <Stats />
      <Partners />
      <GetInvolved />
      <Testimonials />
      <ContactHero />
    </>
  );
}