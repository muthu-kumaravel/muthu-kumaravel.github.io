import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Copy, Check, MessageSquare, FileText, Orbit } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import { Badge } from './ui/Badge';
import { NumberTicker } from './ui/NumberTicker';
import { SpotlightCard } from './ui/SpotlightCard';
import { HeroCanvas3D } from './ui/HeroCanvas3D';
import { sound } from '../utils/audioEngine';

export function Hero({ onNavigate, onOpenConnect, onOpenResume, onCopySuccess }) {
  const { hero, personal } = portfolioData;
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    sound.playChime();
    navigator.clipboard.writeText(personal.email);
    setCopied(true);
    if (onCopySuccess) onCopySuccess("Email copied to clipboard!");
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="overview" className="relative min-h-[90vh] flex flex-col justify-center items-center pt-28 pb-16 px-4 overflow-hidden select-none">
      {/* Interactive 3D Structured Supercluster Canvas */}
      <HeroCanvas3D />

      {/* Subtle Ambient Radial Glow */}
      <div className="absolute inset-0 pointer-events-none -z-10 flex items-center justify-center">
        <div className="w-[650px] h-[450px] bg-blue-600/10 rounded-full blur-[140px] animate-pulse-glow" />
      </div>

      <div className="max-w-4xl mx-auto text-center z-10 flex flex-col items-center pointer-events-none">
        {/* Role Pill & 3D Interactive Badge */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8 flex items-center gap-2 pointer-events-auto"
        >
          <Badge variant="blue" size="md" dot={true}>
            {hero.badge}
          </Badge>
          <span className="hidden sm:inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-[10px] font-mono text-zinc-400">
            <Orbit size={11} className="text-cyan-400 animate-spin-slow" /> Drag to Orbit 3D Mesh
          </span>
        </motion.div>

        {/* Master Keynote Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-5xl sm:text-7xl md:text-8xl font-bold tracking-tighter text-white mb-6 leading-[1.06] px-2"
        >
          {hero.headline} <br />
          <span className="text-gradient-blue font-extrabold">
            {hero.headlineGradient}
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-base sm:text-xl text-zinc-300 max-w-2xl font-light leading-relaxed mb-10 px-2"
        >
          {hero.description}
        </motion.p>

        {/* 4-Button Action Cluster */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-wrap items-center justify-center gap-3 mb-14 pointer-events-auto"
        >
          <button
            onClick={() => {
              sound.playClick();
              onNavigate('projects');
            }}
            className="group relative px-7 py-3 rounded-full bg-white text-black font-semibold text-sm hover:bg-zinc-200 transition-all duration-300 hover:scale-105 active:scale-95 flex items-center gap-2 shadow-[0_0_24px_rgba(255,255,255,0.2)]"
          >
            <span>{hero.primaryCta}</span>
            <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
          </button>

          <button
            onClick={() => {
              sound.playWhoosh();
              onOpenResume();
            }}
            className="px-6 py-3 rounded-full bg-white/10 hover:bg-white/20 text-white font-medium text-sm border border-white/15 hover:border-white/25 transition-all duration-300 flex items-center gap-2 backdrop-blur-md"
          >
            <FileText size={15} />
            <span>View Resume</span>
          </button>

          <button
            onClick={() => {
              sound.playWhoosh();
              onOpenConnect();
            }}
            className="px-6 py-3 rounded-full bg-blue-500/15 hover:bg-blue-500/25 text-blue-400 border border-blue-500/30 text-sm font-medium transition-all duration-300 flex items-center gap-2"
          >
            <MessageSquare size={15} />
            <span>Connect</span>
          </button>

          <button
            onClick={handleCopyEmail}
            className="px-4 py-3 rounded-full bg-white/5 hover:bg-white/10 text-zinc-300 hover:text-white border border-white/10 text-xs font-mono transition-all duration-300 flex items-center gap-2"
            title="Copy Email to Clipboard"
          >
            {copied ? (
              <>
                <Check size={14} className="text-emerald-400" />
                <span className="text-emerald-400 font-semibold">Copied Email</span>
              </>
            ) : (
              <>
                <Copy size={14} />
                <span>Copy Email</span>
              </>
            )}
          </button>
        </motion.div>
      </div>

      {/* Metrics Ribbon */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="w-full max-w-5xl mx-auto px-4 z-10"
      >
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {hero.metrics.map((metric, idx) => (
            <SpotlightCard
              key={idx}
              className="p-5 sm:p-6 text-left relative group border-white/10 hover:border-white/20 transition-all"
              spotlightColor="rgba(41, 151, 255, 0.12)"
            >
              <div className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-1 font-sans">
                <NumberTicker value={metric.value} />
              </div>
              <div className="text-xs font-semibold text-zinc-200 mb-0.5">
                {metric.label}
              </div>
              <div className="text-[11px] text-zinc-400 font-mono">
                {metric.suffix}
              </div>
            </SpotlightCard>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
