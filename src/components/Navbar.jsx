import React from 'react';
import { Home, User, Briefcase, GraduationCap, Mail } from 'lucide-react';

const NavItem = ({ href, icon: Icon, label }) => (
  <a
    href={href}
    className="inline-flex items-center gap-2 px-3 py-2 rounded-md text-sm font-medium text-slate-200 hover:text-white hover:bg-white/10 transition-colors"
  >
    <Icon className="h-4 w-4" />
    <span className="hidden sm:inline">{label}</span>
  </a>
);

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-slate-900/70 bg-slate-900/60 border-b border-white/10">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex h-14 items-center justify-between">
          <a href="#home" className="font-semibold text-white tracking-tight">
            <span className="bg-gradient-to-r from-indigo-400 via-sky-400 to-cyan-300 bg-clip-text text-transparent">Engineer</span>
            <span className="text-slate-300">.Portfolio</span>
          </a>
          <nav className="flex items-center gap-1">
            <NavItem href="#home" icon={Home} label="Home" />
            <NavItem href="#about" icon={User} label="About" />
            <NavItem href="#projects" icon={Briefcase} label="Projects" />
            <NavItem href="#education" icon={GraduationCap} label="Education" />
            <NavItem href="#contact" icon={Mail} label="Contact" />
          </nav>
        </div>
      </div>
    </header>
  );
}
