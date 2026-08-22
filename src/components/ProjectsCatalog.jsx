import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';
import { Badge } from './ui/Badge';
import { SpotlightCard } from './ui/SpotlightCard';
import { sound } from '../utils/audioEngine';

export function ProjectsCatalog() {
  const { projects } = portfolioData;
  const categories = projects.map(p => p.category);
  const [activeCategory, setActiveCategory] = useState(categories[0]);

  const activeGroup = projects.find(p => p.category === activeCategory) || projects[0];

  const handleCategorySelect = (cat) => {
    sound.playClick();
    setActiveCategory(cat);
  };

  return (
    <section id="projects" className="py-24 px-4 sm:px-6 max-w-6xl mx-auto relative">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <Badge variant="blue" size="md" dot={true} className="mb-4">
          SYSTEMS & DEPLOYMENTS
        </Badge>
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white mb-4">
          Production Projects
        </h2>
        <p className="text-base sm:text-lg text-zinc-300 font-light">
          A catalog of 24 real-world architectures, agentic pipelines, kernel optimizations, and cloud deployments.
        </p>
      </div>

      {/* Animated Sliding Category Switcher */}
      <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
        {categories.map((cat) => {
          const isSelected = activeCategory === cat;
          return (
            <button
              key={cat}
              onClick={() => handleCategorySelect(cat)}
              className={`relative px-4 sm:px-5 py-2.5 rounded-full text-xs font-semibold transition-all duration-200 focus-visible:ring-2 focus-visible:ring-blue-500 ${
                isSelected ? 'text-black' : 'text-zinc-400 hover:text-white bg-white/5 border border-white/5'
              }`}
            >
              {isSelected && (
                <motion.span
                  layoutId="projectCategoryPill"
                  className="absolute inset-0 bg-white rounded-full shadow-[0_0_20px_rgba(255,255,255,0.4)]"
                  transition={{ type: "spring", stiffness: 400, damping: 30 }}
                />
              )}
              <span className="relative z-10">{cat}</span>
            </button>
          );
        })}
      </div>

      {/* Projects Grid with Smooth Animations */}
      <motion.div
        layout
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        <AnimatePresence mode="popLayout">
          {activeGroup.items.map((project, index) => (
            <motion.div
              key={project.name}
              layout
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.35, delay: index * 0.05 }}
              className="flex flex-col"
            >
              <SpotlightCard
                className="p-6 sm:p-7 h-full flex flex-col justify-between border-white/10 hover:border-blue-500/30 transition-all group"
                spotlightColor="rgba(59, 130, 246, 0.12)"
              >
                <div>
                  {/* Top Bar: Metric Chip */}
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <span className="px-2.5 py-1 rounded-md bg-blue-500/10 text-blue-400 border border-blue-500/20 text-[10px] font-mono font-semibold">
                      {project.metrics}
                    </span>
                    <span className="text-[10px] font-mono text-zinc-500">
                      SYS-0{index + 1}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-2.5 tracking-tight group-hover:text-blue-300 transition-colors">
                    {project.name}
                  </h3>

                  <p className="text-zinc-300 text-xs sm:text-sm leading-relaxed mb-6 font-light">
                    {project.desc}
                  </p>
                </div>

                {/* Tech Tags */}
                <div className="flex flex-wrap gap-1.5 pt-4 border-t border-white/5">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 text-[11px] font-mono rounded bg-white/[0.04] text-zinc-300 border border-white/5"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </SpotlightCard>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </section>
  );
}
