import Hero from "@/components/Home/Hero";
import Projects from "@/components/Home/Projects";
import Recommendations from "@/components/Home/Recommendations";
import Showcase from "@/components/Home/Showcase";


export default function Home() {
 
  return (
    <section>
      <Hero />
      <Projects />
      <Showcase />
      <Recommendations />
    </section>
  );
}
