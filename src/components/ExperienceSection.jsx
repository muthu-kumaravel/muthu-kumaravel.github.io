import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, ArrowRight } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import { Badge } from './ui/Badge';
import { SpotlightCard } from './ui/SpotlightCard';
import { CompanyLogo } from './ui/CompanyLogo';

export function ExperienceSection({ onSelectJob }) {
  const { experience } = portfolioData;

  return (
    <section id="experience" className="py-24 px-4 sm:px-6 max-w-5xl mx-auto relative">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <Badge variant="blue" size="md" dot={true} className="mb-4">
          CAREER TRAJECTORY
        </Badge>
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white mb-4">
          Professional Journey
        </h2>
        <p className="text-base sm:text-lg text-zinc-400 font-light">
          Leading high-impact AI infrastructure architecture, supercluster engineering, and strategic enterprise engagements.
        </p>
      </div>

      <div className="relative border-l-2 border-white/10 ml-4 sm:ml-8 space-y-10">
        {experience.map((job, index) => (
          <motion.div
            key={job.id}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="relative pl-6 sm:pl-10 group"
          >
            {/* Glowing Timeline Node Dot */}
            <div className="absolute -left-[9px] top-6 w-4 h-4 rounded-full bg-black border-2 border-blue-500 group-hover:bg-blue-400 group-hover:shadow-[0_0_12px_#3b82f6] transition-all z-10" />

            <SpotlightCard
              onClick={() => onSelectJob(job)}
              className="p-6 sm:p-8 hover:border-blue-500/30 transition-all cursor-pointer"
              spotlightColor="rgba(59, 130, 246, 0.12)"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">
                <div className="flex items-center gap-4">
                  {/* Resilient Company Logo Component */}
                  <CompanyLogo domain={job.domain} company={job.company} className="w-12 h-12" />

                  <div>
                    <h3 className="text-xl font-bold text-white group-hover:text-blue-300 transition-colors">
                      {job.role}
                    </h3>
                    <div className="flex items-center gap-2 text-sm text-blue-400 font-medium">
                      <span>{job.company}</span>
                      <span className="text-zinc-600">•</span>
                      <span className="text-zinc-400 font-mono text-xs flex items-center gap-1">
                        <MapPin size={12} /> {job.location}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-zinc-400 font-mono text-xs whitespace-nowrap">
                    {job.period}
                  </span>
                  {job.badge && (
                    <span className="hidden sm:inline-block px-2.5 py-0.5 rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20 font-mono text-[10px]">
                      {job.badge}
                    </span>
                  )}
                </div>
              </div>

              <p className="text-zinc-300 text-sm leading-relaxed mb-5">
                {job.summary}
              </p>

              {/* Key Bullet Highlights */}
              <ul className="space-y-2 mb-6">
                {job.highlights.slice(0, 2).map((highlight, hIdx) => (
                  <li key={hIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-zinc-400 leading-normal">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-400 shrink-0 mt-1.5" />
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>

              {/* View Deep-Dive CTA */}
              <div className="flex items-center text-xs font-mono font-semibold text-blue-400 group-hover:text-blue-300 transition-colors">
                <span>VIEW ARCHITECTURAL SPECIFICATION</span>
                <ArrowRight size={14} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </div>
            </SpotlightCard>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
