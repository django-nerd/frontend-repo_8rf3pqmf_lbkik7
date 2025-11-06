import React from 'react';
import { Briefcase, GraduationCap, Mail } from 'lucide-react';

const education = [
  {
    school: 'Tech University',
    degree: 'B.Sc. in Computer Engineering',
    period: '2015 — 2019',
    details: 'Focus on distributed systems and human-computer interaction.'
  },
  {
    school: 'Online Coursework',
    degree: 'Systems Design, Cloud Architecture',
    period: 'Ongoing',
    details: 'Deep dives into performance, scalability, and observability.'
  }
];

const experience = [
  {
    company: 'Acme Corp',
    title: 'Senior Software Engineer',
    period: '2022 — Present',
    points: [
      'Architected microservices with observability-first approach',
      'Improved page performance to 95+ Lighthouse scores',
      'Led team of 4 engineers to deliver key milestones'
    ]
  },
  {
    company: 'DevWorks',
    title: 'Full-Stack Engineer',
    period: '2019 — 2022',
    points: [
      'Built internal tooling that reduced deployment time by 60%',
      'Implemented design system and accessibility improvements'
    ]
  }
];

export function Education() {
  return (
    <section id="education" className="py-20 bg-slate-900 text-slate-200">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-center gap-2 mb-6">
          <GraduationCap className="h-5 w-5 text-sky-400" />
          <h2 className="text-3xl font-bold text-white">Education</h2>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          {education.map((e) => (
            <div key={e.school} className="rounded-xl border border-white/10 bg-white/5 p-5">
              <h3 className="text-xl font-semibold text-white">{e.school}</h3>
              <p className="text-slate-300">{e.degree}</p>
              <p className="text-slate-400 text-sm">{e.period}</p>
              <p className="mt-2 text-sm">{e.details}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Experience() {
  return (
    <section id="experience" className="py-20 bg-slate-950 text-slate-200">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-center gap-2 mb-6">
          <Briefcase className="h-5 w-5 text-sky-400" />
          <h2 className="text-3xl font-bold text-white">Work Experience</h2>
        </div>
        <div className="space-y-6">
          {experience.map((e) => (
            <div key={e.company} className="rounded-xl border border-white/10 bg-white/5 p-5">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-xl font-semibold text-white">{e.title}</h3>
                  <p className="text-slate-300">{e.company}</p>
                </div>
                <p className="text-slate-400 text-sm">{e.period}</p>
              </div>
              <ul className="mt-3 list-disc list-inside text-sm space-y-1">
                {e.points.map((p) => (
                  <li key={p}>{p}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Contact() {
  return (
    <section id="contact" className="py-20 bg-slate-900 text-slate-200">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-center gap-2 mb-6">
          <Mail className="h-5 w-5 text-sky-400" />
          <h2 className="text-3xl font-bold text-white">Contact</h2>
        </div>
        <form className="grid md:grid-cols-2 gap-4">
          <input type="text" placeholder="Your name" className="bg-white/5 border border-white/10 rounded-md px-3 py-2 outline-none focus:ring-2 focus:ring-sky-500" />
          <input type="email" placeholder="Email address" className="bg-white/5 border border-white/10 rounded-md px-3 py-2 outline-none focus:ring-2 focus:ring-sky-500" />
          <textarea placeholder="Message" rows={5} className="md:col-span-2 bg-white/5 border border-white/10 rounded-md px-3 py-2 outline-none focus:ring-2 focus:ring-sky-500" />
          <button type="button" className="md:col-span-2 px-4 py-2 rounded-md bg-sky-500 text-white hover:bg-sky-600 transition-colors">Send Message</button>
        </form>
      </div>
    </section>
  );
}
