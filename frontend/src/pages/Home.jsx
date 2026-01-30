import Hero from "../components/sections/Hero";
import Stats from "../components/sections/Stats";
import GetInvolved from "../components/sections/GetInvolved";
import Testimonials from "../components/sections/Testimonials";

export default function Home() {
  return (
    <>
      <Hero />
      <Stats />
      <GetInvolved />
      <div className="brief">
        <p>A global initiative dedicated to unlocking the leadership potential of young women. 
          Through mentorship, skill-building workshops, and a supportive community
        </p>
      </div>
      <Testimonials />
    </>
  );
}