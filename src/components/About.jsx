import React from 'react';
import { CheckCircle } from 'lucide-react';

const skills = [
  'TypeScript',
  'React & Next.js',
  'Node.js & FastAPI',
  'MongoDB & PostgreSQL',
  'CI/CD & Docker',
  'Cloud: AWS, Vercel'
];

export default function About() {
  return (
    <section id="about" className="py-20 bg-slate-900 text-slate-200">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-start">
        <div>
          <h2 className="text-3xl font-bold text-white">About Me</h2>
          <p className="mt-4 text-slate-300">
            I’m a software engineer focused on building high-impact products end-to-end, from system design to polished interfaces. I value clean architecture, performance, and thoughtful UX.
          </p>
          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3">
            {skills.map((s) => (
              <div key={s} className="flex items-center gap-2 bg-white/5 border border-white/10 rounded-md px-3 py-2">
                <CheckCircle className="h-4 w-4 text-emerald-400" />
                <span>{s}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="bg-white/5 border border-white/10 rounded-xl p-6">
          <h3 className="text-xl font-semibold text-white">Experience Snapshot</h3>
          <ul className="mt-4 space-y-3 text-sm">
            <li>• 5+ years building full-stack web apps</li>
            <li>• Led migrations to microservices and serverless</li>
            <li>• Obsessed with DX, testing, and automation</li>
            <li>• Mentored teams and improved delivery velocity</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
