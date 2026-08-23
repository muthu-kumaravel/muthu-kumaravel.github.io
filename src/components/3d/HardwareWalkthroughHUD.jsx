import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight, Play, Pause, Cpu, Activity, Zap, Layers, Sparkles, BookOpen } from 'lucide-react';
import { hardwareWalkthroughStages } from '../../data/hardwareWalkthroughData';
import { sound } from '../../utils/audioEngine';

export function HardwareWalkthroughHUD({ activeStageId, onSelectStage, onClose }) {
  const [autoTour, setAutoTour] = useState(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState(true);

  const currentStageIndex = hardwareWalkthroughStages.findIndex((s) => s.id === activeStageId);
  const stage = hardwareWalkthroughStages[currentStageIndex] || hardwareWalkthroughStages[0];

  // Auto-Tour interval
  useEffect(() => {
    if (!autoTour) return;
    const interval = setInterval(() => {
      const nextIndex = (currentStageIndex + 1) % hardwareWalkthroughStages.length;
      onSelectStage(hardwareWalkthroughStages[nextIndex].id);
    }, 7500);
    return () => clearInterval(interval);
  }, [autoTour, currentStageIndex, onSelectStage]);

  const handlePrev = () => {
    sound.playClick();
    const prevIndex = (currentStageIndex - 1 + hardwareWalkthroughStages.length) % hardwareWalkthroughStages.length;
    onSelectStage(hardwareWalkthroughStages[prevIndex].id);
  };

  const handleNext = () => {
    sound.playClick();
    const nextIndex = (currentStageIndex + 1) % hardwareWalkthroughStages.length;
    onSelectStage(hardwareWalkthroughStages[nextIndex].id);
  };

  return (
    <div className="fixed inset-0 z-50 pointer-events-none flex flex-col justify-between p-3 sm:p-6 select-none font-sans overflow-hidden">
      {/* 1. TOP HEADER & STAGE SELECTOR DOCK */}
      <motion.header
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: -40, opacity: 0 }}
        className="pointer-events-auto w-full max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 bg-zinc-950/85 backdrop-blur-2xl border border-cyan-500/20 p-2.5 sm:p-3.5 rounded-3xl shadow-[0_12px_40px_rgba(0,0,0,0.8)]"
      >
        {/* Left Badge */}
        <div className="flex items-center gap-2.5 shrink-0 px-2">
          <div className="w-7 h-7 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
            <Cpu size={15} />
          </div>
          <div>
            <div className="text-[11px] font-mono font-bold text-white flex items-center gap-1.5 leading-none">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
              HARDWARE BLUEPRINT
            </div>
            <div className="text-[9px] font-mono text-zinc-400 mt-0.5">
              GB200 NVL72 • Muse / Glimmer
            </div>
          </div>
        </div>

        {/* Stage Selector Pills */}
        <nav className="flex items-center gap-1 overflow-x-auto max-w-full py-1 px-1 shrink-0" aria-label="Walkthrough Stage Selector">
          {hardwareWalkthroughStages.map((s, idx) => {
            const isActive = s.id === stage.id;
            return (
              <button
                key={s.id}
                onClick={() => {
                  sound.playClick();
                  onSelectStage(s.id);
                }}
                className={`relative px-2.5 sm:px-3 py-1 rounded-full text-[11px] font-mono transition-all duration-200 shrink-0 ${
                  isActive
                    ? 'text-cyan-300 font-bold bg-cyan-500/15 border border-cyan-500/40 shadow-[0_0_12px_rgba(6,182,212,0.25)]'
                    : 'text-zinc-400 hover:text-zinc-200 bg-white/5 border border-transparent'
                }`}
              >
                <span>{idx + 1}. {s.title.split(' ')[0]}</span>
              </button>
            );
          })}
        </nav>

        {/* Close Button */}
        <div className="flex items-center gap-2 shrink-0">
          <button
            onClick={() => setIsDrawerOpen((prev) => !prev)}
            className="sm:hidden px-3 py-1.5 rounded-full bg-white/5 text-zinc-300 text-xs font-mono border border-white/10"
          >
            {isDrawerOpen ? 'Hide Notes' : 'Show Notes'}
          </button>
          <button
            onClick={() => {
              sound.playClick();
              onClose();
            }}
            className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-red-500/15 hover:bg-red-500/25 border border-red-500/30 text-red-400 text-xs font-mono font-medium transition-all active:scale-95"
          >
            <X size={14} />
            <span>Exit Walkthrough</span>
          </button>
        </div>
      </motion.header>

      {/* 2. SIDE TELEMETRY & NOTES DRAWER (Responsive: Side on Desktop, Bottom on Mobile) */}
      <AnimatePresence>
        {isDrawerOpen && (
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -30 }}
            transition={{ duration: 0.3 }}
            className="pointer-events-auto w-full sm:w-[420px] max-h-[58vh] sm:max-h-[72vh] overflow-y-auto bg-zinc-950/90 backdrop-blur-2xl border border-white/15 p-4 sm:p-6 rounded-3xl shadow-2xl space-y-4 my-auto self-start ml-0 sm:ml-4"
          >
            {/* Stage Level Badge */}
            <div className="flex items-center justify-between">
              <span className="px-2.5 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-[10px] font-mono font-semibold uppercase tracking-wider flex items-center gap-1">
                <Layers size={11} /> {stage.layer}
              </span>
              <span className="text-zinc-400 font-mono text-xs">
                Stage {stage.index} / {hardwareWalkthroughStages.length}
              </span>
            </div>

            {/* Title & Subtitle */}
            <div>
              <h2 className="text-lg sm:text-xl font-bold text-white tracking-tight leading-snug">
                {stage.title}
              </h2>
              <p className="text-xs text-zinc-400 font-mono mt-1">
                {stage.subtitle}
              </p>
            </div>

            {/* Mathematical Formulation */}
            <div className="p-3 rounded-2xl bg-black/60 border border-cyan-500/20">
              <div className="text-[10px] font-mono uppercase text-cyan-400 tracking-wider mb-1 flex items-center gap-1">
                <Activity size={12} /> Execution Kernel / Formulation
              </div>
              <div className="font-mono text-xs text-cyan-200 font-semibold break-all leading-relaxed">
                {stage.math}
              </div>
            </div>

            {/* Hardware Telemetry Grid */}
            <div className="grid grid-cols-2 gap-2">
              {Object.entries(stage.hardwareSpec).map(([key, val]) => (
                <div key={key} className="p-2.5 rounded-xl bg-white/[0.03] border border-white/10">
                  <div className="text-[9px] font-mono text-zinc-400 uppercase tracking-wider">
                    {key.replace(/([A-Z])/g, ' $1')}
                  </div>
                  <div className="text-xs font-mono font-bold text-white mt-0.5">
                    {val}
                  </div>
                </div>
              ))}
            </div>

            {/* Presenter's Talk-Track (Walkthrough Script) */}
            <div className="space-y-2 pt-1 border-t border-white/10">
              <div className="text-[10px] font-mono uppercase text-zinc-400 tracking-wider flex items-center gap-1">
                <BookOpen size={12} /> Presenter Notes & Deep-Dive
              </div>
              <ul className="space-y-2">
                {stage.talkTrack.map((note, nIdx) => (
                  <li key={nIdx} className="flex items-start gap-2 text-xs text-zinc-300 leading-relaxed">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-1.5 shrink-0" />
                    <span>{note}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* 3. BOTTOM ACTION DOCK (Navigation, Auto-Tour & Hotkeys) */}
      <motion.footer
        initial={{ y: 40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 40, opacity: 0 }}
        className="pointer-events-auto w-full max-w-2xl mx-auto flex items-center justify-between gap-3 bg-zinc-950/85 backdrop-blur-2xl border border-white/15 p-2 sm:p-3 rounded-full shadow-[0_8px_32px_rgba(0,0,0,0.8)]"
      >
        <button
          onClick={handlePrev}
          className="flex items-center gap-1 px-3.5 py-1.5 rounded-full bg-white/5 hover:bg-white/10 text-zinc-300 hover:text-white text-xs font-mono border border-white/10 transition-all active:scale-95"
        >
          <ChevronLeft size={14} />
          <span>Prev</span>
        </button>

        {/* Auto Tour Toggle */}
        <button
          onClick={() => {
            sound.playClick();
            setAutoTour((prev) => !prev);
          }}
          className={`flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-mono font-medium transition-all ${
            autoTour
              ? 'bg-cyan-500 text-black shadow-[0_0_16px_rgba(6,182,212,0.4)]'
              : 'bg-white/10 text-zinc-300 hover:text-white'
          }`}
        >
          {autoTour ? <Pause size={13} /> : <Play size={13} />}
          <span>{autoTour ? 'Auto Tour Active' : 'Auto Flythrough'}</span>
        </button>

        <button
          onClick={handleNext}
          className="flex items-center gap-1 px-3.5 py-1.5 rounded-full bg-cyan-500/20 hover:bg-cyan-500/30 text-cyan-300 text-xs font-mono font-semibold border border-cyan-500/30 transition-all active:scale-95"
        >
          <span>Next</span>
          <ChevronRight size={14} />
        </button>
      </motion.footer>
    </div>
  );
}
