import SEO from "../seo/SEO";
import Hero from "../components/sections/Hero";
import Stats from "../components/sections/Stats";
import GetInvolved from "../components/sections/GetInvolved";

export default function Home() {
  return (
    <>
      <SEO
        title="Home"
        description="Empowering leadership and innovation across Africa."
      />
      <Hero />
      <Stats />
      <GetInvolved />
    </>
  );
}