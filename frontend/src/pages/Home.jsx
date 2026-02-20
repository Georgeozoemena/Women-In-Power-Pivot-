import Hero from "../components/sections/Hero";
import Stats from "../components/sections/Stats";
import GetInvolved from "../components/sections/GetInvolved";
import Testimonials from "../components/sections/Testimonials";
import ContactHero from "../components/sections/Contacthero";

export default function Home() {
  return (
    <>
      <Hero />
      <Stats />
      <GetInvolved />
      <div className="brief">
        <p>A worldwide initiative, committed to nurturing the leadership potential of young women, through guidance, hands-on learning, and a community that believes in them.
        </p>
      </div>
      <Testimonials />
      <ContactHero />
    </>
  );
}