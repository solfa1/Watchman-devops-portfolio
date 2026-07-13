import Navbar from "./components/layout/Navbar";
import Hero from "./components/sections/Hero";
import About from "./components/sections/About";
import Projects from "./components/sections/Projects";
import EngineeringStack from "./components/sections/EngineeringStack";
import Contact from "@/app/components/sections/contact";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <EngineeringStack />
      <Contact />
    </>
  );
}