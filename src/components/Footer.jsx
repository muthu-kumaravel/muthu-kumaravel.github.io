import React from 'react';
import { Github, Linkedin, Instagram, Mail, Globe, ArrowUp } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export function Footer({ onOpenConnect }) {
  const { personal, socials } = portfolioData;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const iconMap = {
    Github: Github,
    Linkedin: Linkedin,
    Instagram: Instagram,
    Mail: Mail,
  };

  return (
    <footer className="bg-[#050507] border-t border-white/10 pt-16 pb-12 px-4 sm:px-6 relative">
      <div className="max-w-5xl mx-auto flex flex-col gap-12">
        {/* Top Tier: Clean Heading & Contact */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 pb-12 border-b border-white/5">
          <div className="space-y-2">
            <div className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
              Let's build something remarkable.
            </div>
            <p className="text-sm text-zinc-300 font-light max-w-lg">
              Open for conversations on GenAI architecture, LLM infrastructure, and production machine learning systems.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={onOpenConnect}
              className="px-6 py-3 rounded-full bg-white text-black font-semibold text-xs hover:bg-zinc-200 transition-all hover:scale-105 active:scale-95 shadow-md"
            >
              Get in Touch
            </button>
            <button
              onClick={scrollToTop}
              aria-label="Scroll to top"
              className="p-3 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-zinc-300 hover:text-white transition-colors"
              title="Back to Top"
            >
              <ArrowUp size={16} />
            </button>
          </div>
        </div>

        {/* Bottom Tier: Location & Social Links */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 text-xs font-mono text-zinc-400">
          <div className="space-y-1">
            <div className="text-zinc-200 font-medium">
              {personal.location}
            </div>
            <div className="text-[11px] text-zinc-400">
              © {new Date().getFullYear()} {personal.name}. All rights reserved.
            </div>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-3">
            {socials.map((s, idx) => {
              const Icon = iconMap[s.icon] || Globe;
              return (
                <a
                  key={idx}
                  href={s.url}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={s.platform}
                  title={s.platform}
                  className="w-10 h-10 rounded-xl bg-white/5 hover:bg-white/15 border border-white/10 flex items-center justify-center text-zinc-300 hover:text-white transition-all hover:scale-110"
                >
                  <Icon size={17} />
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </footer>
  );
}
