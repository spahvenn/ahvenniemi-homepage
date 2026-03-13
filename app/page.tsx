import Nav from '@/components/Nav';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';

export default function Home() {
  return (
    <main className="bg-bg text-text">
      <Nav />
      <Hero />
      <About />
      <Projects />
      <Contact />
    </main>
  );
}
