import Nav from "./components/Nav";
import Hero from "./components/Hero";
import About from "./components/About";
import Testimonials from "./components/Testimonials";
import Projects from "./components/Projects";
import Blog from "./components/Blog";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="relative min-h-screen">
      <Nav />
      <Hero />
      <About />
      <Testimonials />
      <Projects />
      <Blog />
      <Contact />
      <Footer />
    </main>
  );
}
