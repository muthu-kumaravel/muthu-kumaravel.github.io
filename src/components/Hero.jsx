import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Copy, Check, MessageSquare, FileText, Sparkles } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import { Badge } from './ui/Badge';
import { NumberTicker } from './ui/NumberTicker';
import { SpotlightCard } from './ui/SpotlightCard';
import { sound } from '../utils/audioEngine';

export function Hero({ onNavigate, onOpenConnect, onOpenResume, onOpenWalkthrough, onCopySuccess }) {
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
    <section id="overview" className="relative min-h-[92vh] flex flex-col justify-center items-center pt-32 pb-16 px-4 overflow-hidden select-none">
      {/* Subtle Ambient Radial Glow */}
      <div className="absolute inset-0 pointer-events-none -z-10 flex items-center justify-center">
        <div className="w-[700px] h-[450px] bg-gradient-to-tr from-blue-600/15 via-indigo-600/10 to-transparent rounded-full blur-[150px] animate-pulse-glow" />
      </div>

      <div className="max-w-4xl mx-auto text-center z-10 flex flex-col items-center pointer-events-none">
        {/* Role Pill & Live Status Indicator */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-6 flex flex-wrap items-center justify-center gap-2.5 pointer-events-auto"
        >
          <Badge variant="blue" size="md" dot={true}>
            {hero.badge}
          </Badge>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/[0.04] border border-white/10 text-[11px] font-mono text-zinc-300 backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>Google Cloud (GCP) • Bengaluru</span>
          </div>
          {onOpenWalkthrough && (
            <button
              onClick={() => {
                sound.playClick();
                onOpenWalkthrough();
              }}
              className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-500/10 hover:bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 font-mono text-[11px] transition-all hover:scale-105 active:scale-95 shadow-[0_0_12px_rgba(6,182,212,0.1)] cursor-pointer backdrop-blur-md"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
              <span>Inspect 3D Blueprint</span>
            </button>
          )}
        </motion.div>

        {/* Master Keynote Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-5xl sm:text-7xl md:text-8xl font-bold tracking-tighter text-white mb-6 leading-[1.05] px-2"
        >
          {hero.headline} <br />
          <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-indigo-400 bg-clip-text text-transparent font-extrabold drop-shadow-[0_0_35px_rgba(59,130,246,0.3)]">
            {hero.headlineGradient}
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-base sm:text-xl text-zinc-300 max-w-2xl font-light leading-relaxed mb-8 px-2"
        >
          {hero.description}
        </motion.p>

        {/* Streamlined Primary & Secondary CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-wrap items-center justify-center gap-3.5 mb-6 pointer-events-auto"
        >
          <button
            onClick={() => {
              sound.playClick();
              onNavigate('projects');
            }}
            className="group relative px-8 py-3.5 rounded-full bg-white text-black font-semibold text-sm hover:bg-zinc-100 transition-all duration-300 hover:scale-105 active:scale-95 flex items-center gap-2 shadow-[0_0_30px_rgba(255,255,255,0.25)] focus-visible:ring-2 focus-visible:ring-blue-400"
          >
            <span>Explore Systems & Projects</span>
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </button>

          <button
            onClick={() => {
              sound.playWhoosh();
              onOpenResume();
            }}
            className="px-7 py-3.5 rounded-full bg-white/10 hover:bg-white/20 text-white font-medium text-sm border border-white/15 hover:border-white/30 transition-all duration-300 flex items-center gap-2 backdrop-blur-xl hover:scale-105 active:scale-95 focus-visible:ring-2 focus-visible:ring-blue-400"
          >
            <FileText size={16} className="text-zinc-300" />
            <span>View Resume</span>
          </button>
        </motion.div>

        {/* Secondary Quick Contact & Advisory Strip */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="flex items-center gap-2 text-xs text-zinc-400 mb-12 pointer-events-auto bg-zinc-950/70 p-1.5 px-3 rounded-full border border-white/10 backdrop-blur-xl shadow-lg"
        >
          <button
            onClick={() => {
              sound.playWhoosh();
              onOpenConnect();
            }}
            className="flex items-center gap-1.5 px-2.5 py-1 rounded-full text-zinc-300 hover:text-white hover:bg-white/10 transition-colors"
          >
            <MessageSquare size={13} className="text-blue-400" />
            <span>Let's Connect</span>
          </button>
          <span className="text-zinc-700">|</span>
          <button
            onClick={handleCopyEmail}
            className="flex items-center gap-1.5 px-2.5 py-1 rounded-full font-mono text-[11px] text-zinc-300 hover:text-white hover:bg-white/10 transition-colors"
            title="Click to copy email"
          >
            {copied ? (
              <>
                <Check size={12} className="text-emerald-400" />
                <span className="text-emerald-400 font-semibold">Email Copied!</span>
              </>
            ) : (
              <>
                <Copy size={12} className="text-zinc-400" />
                <span>{personal.email}</span>
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
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
          {hero.metrics.map((metric, idx) => (
            <SpotlightCard
              key={idx}
              className="p-5 sm:p-6 text-left relative group border-white/10 hover:border-white/25 transition-all bg-zinc-950/60 backdrop-blur-xl"
              spotlightColor="rgba(41, 151, 255, 0.14)"
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
