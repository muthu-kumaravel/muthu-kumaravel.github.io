import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Calendar } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import { Badge } from './ui/Badge';
import { SpotlightCard } from './ui/SpotlightCard';
import { KernelSimulator } from './ui/KernelSimulator';
import { sound } from '../utils/audioEngine';

export function EngineeringLogs({ onOpenLog }) {
  const { logs } = portfolioData;

  return (
    <section id="logs" className="py-24 px-4 sm:px-6 max-w-5xl mx-auto relative">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <Badge variant="amber" size="md" dot={true} className="mb-4">
          TECHNICAL CASE STUDIES & NOTES
        </Badge>
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white mb-4">
          Engineering Logs
        </h2>
        <p className="text-base sm:text-lg text-zinc-300 font-light">
          Deep-dive architecture breakdowns, cluster profiling, and empirical benchmark reports.
        </p>
      </div>

      {/* Interactive Live Hardware & Kernel Profiler */}
      <KernelSimulator />

      {/* Case Studies Cards */}
      <div className="grid gap-8 mt-12">
        {logs.map((log, index) => (
          <motion.div
            key={log.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <SpotlightCard
              onClick={() => {
                sound.playWhoosh();
                onOpenLog(log.id);
              }}
              className="p-6 sm:p-8 cursor-pointer border-white/10 hover:border-blue-500/30 transition-all group"
              spotlightColor="rgba(59, 130, 246, 0.15)"
            >
              <div className="flex flex-col md:flex-row gap-6 items-start">
                {/* Visual Thumbnail */}
                <div className="w-full md:w-56 h-36 rounded-2xl bg-zinc-900 border border-white/10 overflow-hidden shrink-0 relative">
                  <img
                    src={log.image}
                    alt={log.title}
                    className="w-full h-full object-cover opacity-75 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  <div className="absolute bottom-2.5 left-2.5">
                    <span className="px-2 py-0.5 rounded-md bg-black/60 backdrop-blur-md text-[10px] font-mono text-cyan-400 border border-white/10">
                      {log.id.toUpperCase()}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="flex-grow">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="px-2.5 py-0.5 rounded-full text-[11px] font-mono bg-blue-500/10 text-blue-400 border border-blue-500/20">
                      {log.tag}
                    </span>
                    <span className="text-zinc-400 font-mono text-xs flex items-center gap-1">
                      <Calendar size={12} /> {log.date}
                    </span>
                  </div>

                  <h3 className="text-2xl font-bold text-white mb-2.5 group-hover:text-blue-300 transition-colors">
                    {log.title}
                  </h3>

                  <p className="text-zinc-300 text-sm leading-relaxed mb-4 font-light">
                    {log.summary}
                  </p>

                  <div className="flex items-center text-xs font-mono font-semibold text-blue-400 group-hover:text-blue-300">
                    <span>READ ARCHITECTURAL CASE STUDY</span>
                    <ArrowRight size={14} className="ml-2 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            </SpotlightCard>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
