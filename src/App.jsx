import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import { Education, Experience, Contact } from './components/ResumeSections';

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
        <Education />
        <Experience />
        <Contact />
      </main>
      <footer className="py-8 text-center text-sm text-slate-400 bg-slate-950 border-t border-white/10">
        © {new Date().getFullYear()} Engineer.Portfolio — Built with React & Tailwind
      </footer>
    </div>
  );
}

export default App;
