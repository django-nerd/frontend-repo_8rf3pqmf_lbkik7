import React from 'react';
import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[70vh] flex items-center justify-center overflow-hidden bg-slate-950">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/BApDkqk9zPyl0xQy/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight bg-gradient-to-r from-white via-sky-200 to-cyan-200 bg-clip-text text-transparent">
          Building performant, beautiful engineering solutions
        </h1>
        <p className="mt-4 text-slate-300 max-w-2xl mx-auto">
          Full-stack engineer crafting scalable systems and delightful user experiences.
        </p>
        <div className="mt-6 flex items-center justify-center gap-3">
          <a href="#projects" className="px-4 py-2 rounded-md bg-sky-500 text-white hover:bg-sky-600 transition-colors">View Projects</a>
          <a href="#contact" className="px-4 py-2 rounded-md bg-white/10 text-white hover:bg-white/20 border border-white/10 transition-colors">Contact</a>
        </div>
      </div>
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
    </section>
  );
}
