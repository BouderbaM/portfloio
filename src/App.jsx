import Header from './components/Header';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Projects from './components/Projects';
import CTA from './components/CTA';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-slate-900 text-gray-100">
      <Header />
      <Hero />
      <Skills />
      <Projects />
      <CTA />
      <Footer />
    </div>
  );
}
