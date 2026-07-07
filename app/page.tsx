import Nav from "@/components/Nav/Nav";
import Hero from "@/components/Hero/Hero";
import Projects from "@/components/Projects/Projects";
import About from "@/components/About/About";
import Experience from "@/components/Experience/Experience";
import Education from "@/components/Education/Education";
import Contact from "@/components/Contact/Contact";
import Links from "@/components/Links/Links";
export default function Portfolio() {
  return (
    <>
      <Nav />
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Education />
      <Links />
      <Contact />
    </>
  );
}
