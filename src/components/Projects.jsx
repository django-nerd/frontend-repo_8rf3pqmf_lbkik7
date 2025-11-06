import React from 'react';
import { Github, ExternalLink } from 'lucide-react';

const projects = [
  {
    title: 'Realtime Collaboration Suite',
    description: 'Low-latency editor with CRDT sync, roles, and comments.',
    tags: ['React', 'WebSockets', 'Redis'],
    link: '#',
    repo: '#',
  },
  {
    title: 'E-commerce Platform',
    description: 'Headless storefront with payments, analytics, and search.',
    tags: ['Next.js', 'Stripe', 'PostgreSQL'],
    link: '#',
    repo: '#',
  },
  {
    title: 'ML Ops Pipeline',
    description: 'Automated training, model registry, and batch inference.',
    tags: ['Python', 'FastAPI', 'Docker'],
    link: '#',
    repo: '#',
  },
];

function Badge({ children }) {
  return (
    <span className="inline-flex items-center rounded-md bg-white/5 px-2 py-1 text-xs text-slate-200 border border-white/10">
      {children}
    </span>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-slate-950 text-slate-200">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-white mb-8">Projects</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p) => (
            <div key={p.title} className="rounded-xl border border-white/10 bg-white/5 p-5 h-full flex flex-col">
              <h3 className="text-xl font-semibold text-white">{p.title}</h3>
              <p className="mt-2 text-sm text-slate-300 flex-1">{p.description}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <Badge key={t}>{t}</Badge>
                ))}
              </div>
              <div className="mt-5 flex items-center gap-3">
                <a href={p.link} className="inline-flex items-center gap-1 text-sky-300 hover:text-sky-200">
                  <ExternalLink className="h-4 w-4" /> Live
                </a>
                <a href={p.repo} className="inline-flex items-center gap-1 text-slate-300 hover:text-white">
                  <Github className="h-4 w-4" /> Code
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
