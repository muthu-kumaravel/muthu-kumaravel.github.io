import React from 'react';
import { motion } from 'framer-motion';
import { Server, Brain, Camera, Cpu, LineChart, Terminal } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import { Badge } from './ui/Badge';
import { SpotlightCard } from './ui/SpotlightCard';
import { TiltCard } from './ui/TiltCard';

export function BentoGrid() {
  const { bentoGrid } = portfolioData;

  const iconMap = {
    Server: Server,
    Brain: Brain,
    Camera: Camera,
    Cpu: Cpu,
    LineChart: LineChart,
  };

  return (
    <section className="py-20 px-4 sm:px-6 max-w-6xl mx-auto relative">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <Badge variant="blue" size="md" dot={true} className="mb-4">
          AREAS OF EXPERTISE
        </Badge>
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white mb-4">
          Architectural Pillars
        </h2>
        <p className="text-base sm:text-lg text-zinc-300 font-light">
          From low-level silicon kernel optimization to autonomous multi-agent orchestration and production enterprise systems.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {bentoGrid.map((item, index) => {
          const Icon = iconMap[item.icon] || Terminal;
          const isLarge = item.colSpan === 2;

          return (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`flex flex-col ${isLarge ? "md:col-span-2" : "md:col-span-1"}`}
            >
              <TiltCard className="h-full">
                <SpotlightCard
                  className="p-7 sm:p-9 h-full flex flex-col justify-between group border-white/10"
                  spotlightColor={
                    item.id === 'ai-infra' ? 'rgba(59, 130, 246, 0.15)' :
                    item.id === 'genai-agents' ? 'rgba(168, 85, 247, 0.15)' :
                    item.id === 'cv-stream' ? 'rgba(16, 185, 129, 0.15)' :
                    item.id === 'hpc-kernels' ? 'rgba(245, 158, 11, 0.15)' :
                    'rgba(244, 63, 94, 0.15)'
                  }
                >
                  {/* Header & Icon */}
                  <div>
                    <div className="flex items-center justify-between mb-6">
                      <div className={`p-3 rounded-2xl bg-white/5 border border-white/10 ${item.accent} group-hover:scale-110 transition-transform duration-300`}>
                        <Icon size={24} />
                      </div>
                      <span className="text-[10px] font-mono text-zinc-400 uppercase tracking-widest font-semibold">
                        PILLAR 0{index + 1}
                      </span>
                    </div>

                    <h3 className="text-2xl font-bold text-white tracking-tight mb-3 group-hover:text-blue-300 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-zinc-300 text-sm leading-relaxed mb-6 font-light">
                      {item.subtitle}
                    </p>
                  </div>

                  {/* Tech Tags */}
                  <div className="flex flex-wrap gap-2 pt-4 border-t border-white/5">
                    {item.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-1 text-[11px] font-mono rounded-lg bg-white/[0.04] text-zinc-300 border border-white/5 group-hover:border-white/15 transition-colors"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </SpotlightCard>
              </TiltCard>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
