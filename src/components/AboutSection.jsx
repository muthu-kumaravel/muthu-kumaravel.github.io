import React from 'react';
import { Award, BookOpen, Cpu, Presentation, ArrowUpRight, Brain, Server, Layers, Terminal, Network, FileText, CheckCircle2 } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import { Badge } from './ui/Badge';
import { SpotlightCard } from './ui/SpotlightCard';

export function AboutSection({ onOpenConnect, onOpenResume }) {
  const { about, personal, skills, certifications, education, workshops } = portfolioData;

  const categoryIconMap = {
    "AI Models & Architectures": Brain,
    "Frameworks & Compilers": Cpu,
    "Inference & Acceleration": ZapIcon,
    "Cloud & Distributed Systems": Server,
    "Agentic & Vector Stack": Network,
    "Languages & Low-Level": Terminal
  };

  function ZapIcon(props) {
    return <Layers {...props} />;
  }

  return (
    <section id="about" className="py-24 px-4 sm:px-6 max-w-6xl mx-auto relative">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <Badge variant="blue" size="md" dot={true} className="mb-4">
          PERSONA & FOUNDATIONS
        </Badge>
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white mb-4">
          Behind the Architect
        </h2>
        <p className="text-base sm:text-lg text-zinc-300 font-light">
          Translating complex machine learning algorithms and distributed infrastructure into production reality.
        </p>
      </div>

      {/* Profile Card & Story */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16 items-stretch">
        {/* Bio Text Column */}
        <SpotlightCard className="lg:col-span-8 p-8 sm:p-12 flex flex-col justify-between border-white/10" spotlightColor="rgba(59, 130, 246, 0.12)">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <span className="text-xs font-mono uppercase tracking-widest text-blue-400 font-semibold">
                Philosophy & Background
              </span>
              <span className="text-zinc-600">•</span>
              <span className="text-xs font-mono text-zinc-400">{personal.location}</span>
            </div>

            <div className="space-y-4 text-zinc-300 text-sm sm:text-base leading-relaxed font-light whitespace-pre-line">
              {about.bio}
            </div>
          </div>

          {/* Quick Stats Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-8 mt-8 border-t border-white/5">
            {about.stats.map((stat, i) => (
              <div key={i} className="p-3.5 rounded-2xl bg-zinc-950/60 border border-white/5 text-center">
                <div className="text-2xl font-bold text-white mb-0.5 font-sans">
                  {stat.value}
                </div>
                <div className="text-[10px] font-mono text-zinc-400 uppercase tracking-wider">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </SpotlightCard>

        {/* Profile Avatar & Contact Card */}
        <SpotlightCard className="lg:col-span-4 p-8 flex flex-col items-center justify-between border-white/10 text-center" spotlightColor="rgba(168, 85, 247, 0.15)">
          <div className="w-full flex flex-col items-center">
            {/* Avatar Frame */}
            <div className="w-36 h-36 rounded-3xl overflow-hidden border-2 border-white/15 shadow-2xl mb-6 relative group bg-zinc-900">
              <img
                src={personal.avatar}
                alt={personal.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                onError={(e) => {
                  e.target.style.display = 'none';
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent pointer-events-none" />
            </div>

            <h3 className="text-xl font-bold text-white mb-1 tracking-tight">
              {personal.name}
            </h3>
            <p className="text-xs font-mono text-blue-400 mb-4">
              {personal.role}
            </p>

            <p className="text-zinc-300 text-xs leading-relaxed mb-6 font-light">
              "{personal.tagline}"
            </p>
          </div>

          <div className="w-full space-y-3">
            <div className="w-full p-3.5 rounded-2xl bg-white/[0.03] border border-white/5 text-left space-y-1 font-mono text-[11px] text-zinc-400">
              <div><span className="text-zinc-500">LOC:</span> {personal.location}</div>
              <div><span className="text-zinc-500">MAIL:</span> {personal.email}</div>
            </div>

            <div className="grid grid-cols-2 gap-2">
              <button
                onClick={onOpenResume}
                className="py-3 rounded-xl bg-white/5 hover:bg-white/10 text-white font-medium text-xs border border-white/10 flex items-center justify-center gap-1.5 transition-all hover:scale-102"
              >
                <FileText size={13} />
                <span>Resume</span>
              </button>

              <button
                onClick={onOpenConnect}
                className="py-3 rounded-xl bg-blue-500 hover:bg-blue-400 text-black font-semibold text-xs flex items-center justify-center gap-1.5 transition-all hover:scale-102"
              >
                <span>Connect</span>
                <ArrowUpRight size={13} />
              </button>
            </div>
          </div>
        </SpotlightCard>
      </div>

      {/* Enterprise Workshops & Technical Evangelism */}
      {workshops && workshops.length > 0 && (
        <div className="mb-16">
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-2xl font-bold text-white flex items-center gap-3">
              <Presentation className="text-purple-400" /> Enterprise Architecture Workshops & Evangelism
            </h3>
            <span className="hidden sm:inline-block text-xs font-mono text-zinc-400">15+ Sessions Led</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {workshops.map((ws, idx) => (
              <SpotlightCard
                key={idx}
                className="p-6 border-white/10 flex flex-col justify-between"
                spotlightColor="rgba(168, 85, 247, 0.12)"
              >
                <div>
                  <div className="text-[11px] font-mono text-purple-400 uppercase tracking-wider mb-1.5 font-semibold">
                    {ws.subtitle}
                  </div>
                  <h4 className="text-lg font-bold text-white mb-2 leading-snug">
                    {ws.title}
                  </h4>
                  <p className="text-zinc-300 text-xs sm:text-sm leading-relaxed mb-4 font-light">
                    {ws.desc}
                  </p>
                </div>
                <div className="flex flex-wrap gap-1.5 pt-3 border-t border-white/5">
                  {ws.tags.map(tag => (
                    <span key={tag} className="px-2 py-0.5 text-[10px] font-mono rounded bg-white/[0.04] text-zinc-300 border border-white/5">
                      {tag}
                    </span>
                  ))}
                </div>
              </SpotlightCard>
            ))}
          </div>
        </div>
      )}

      {/* Technical Arsenal with Categorized Icons */}
      <div className="mb-16">
        <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
          <Cpu className="text-emerald-400" /> Technical Arsenal & Frameworks
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {Object.entries(skills).map(([category, items], idx) => {
            const Icon = categoryIconMap[category] || Terminal;
            return (
              <SpotlightCard
                key={idx}
                className="p-6 border-white/10 flex flex-col justify-between"
                spotlightColor="rgba(16, 185, 129, 0.1)"
              >
                <div>
                  <div className="flex items-center gap-2 mb-4 pb-2 border-b border-white/5">
                    <Icon size={16} className="text-emerald-400 shrink-0" />
                    <h4 className="text-xs font-mono uppercase tracking-widest text-zinc-300 font-semibold">
                      {category}
                    </h4>
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {items.map((skill) => (
                      <span
                        key={skill}
                        className="px-2.5 py-1 text-xs font-mono rounded-lg bg-white/[0.04] text-zinc-300 border border-white/5 hover:border-white/20 hover:text-white transition-colors"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </SpotlightCard>
            );
          })}
        </div>
      </div>

      {/* Education & Certifications */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Certifications Card */}
        <SpotlightCard className="p-8 border-white/10" spotlightColor="rgba(168, 85, 247, 0.12)">
          <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-3">
            <Award className="text-purple-400" /> Industry Certifications
          </h3>
          <ul className="space-y-4">
            {certifications.map((cert, i) => (
              <li key={i} className="flex items-start gap-3 text-xs sm:text-sm text-zinc-300">
                <CheckCircle2 size={16} className="text-purple-400 mt-0.5 shrink-0" />
                <div>
                  <div className="font-medium text-white">{cert.name}</div>
                  <div className="text-[11px] font-mono text-zinc-400">{cert.issuer}</div>
                </div>
              </li>
            ))}
          </ul>
        </SpotlightCard>

        {/* Academic Foundation Card */}
        <SpotlightCard className="p-8 border-white/10" spotlightColor="rgba(59, 130, 246, 0.12)">
          <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-3">
            <BookOpen className="text-blue-400" /> Academic Foundation
          </h3>
          <div className="space-y-6">
            {education.map((edu, i) => (
              <div key={i}>
                <div className="text-base font-bold text-white">{edu.institution}</div>
                <div className="text-sm text-blue-400 font-medium">{edu.degree}</div>
                <div className="text-xs font-mono text-zinc-400 mt-1">{edu.period} • {edu.location}</div>
              </div>
            ))}
          </div>
        </SpotlightCard>
      </div>
    </section>
  );
}
