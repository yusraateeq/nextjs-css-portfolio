import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Project from "./components/Project";

export default function Home() {
  return (
   <div>
    <Navbar/>
    <Hero/>
    <About/>
    <Project/>
    <Contact/>
    <Footer/>
   </div>
  );
}