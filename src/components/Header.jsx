import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Menu, X, ArrowUpRight, FileText } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import { SoundToggle } from './ui/SoundToggle';
import { sound } from '../utils/audioEngine';

export function Header({ activeSection, onNavigate, onOpenCmdK, onOpenConnect, onOpenResume }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { id: 'overview', label: 'Overview' },
    { id: 'experience', label: 'Experience' },
    { id: 'projects', label: 'Projects' },
    { id: 'logs', label: 'Logs' },
    { id: 'gallery', label: 'Gallery' },
    { id: 'about', label: 'About' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (id) => {
    sound.playClick();
    onNavigate(id);
    setMobileMenuOpen(false);
  };

  return (
    <>
      <motion.header
        initial={{ y: -60, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="fixed top-0 left-0 right-0 z-50 flex justify-center px-3 sm:px-4 pt-3 sm:pt-5 pointer-events-none"
      >
        <div 
          className={`pointer-events-auto w-full max-w-5xl px-3.5 sm:px-6 py-2.5 sm:py-3 rounded-full transition-all duration-300 flex items-center justify-between border ${
            isScrolled 
              ? 'bg-zinc-950/85 backdrop-blur-2xl border-white/15 shadow-[0_8px_32px_rgba(0,0,0,0.6)]' 
              : 'bg-zinc-950/65 backdrop-blur-xl border-white/10 shadow-lg'
          }`}
        >
          {/* Monogram Brand */}
          <button
            onClick={() => handleNavClick('overview')}
            className="flex items-center gap-2.5 group focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded-full"
            aria-label="Go to Overview"
          >
            <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-blue-600 via-indigo-500 to-cyan-400 p-[1px] shadow-sm">
              <div className="w-full h-full bg-black rounded-full flex items-center justify-center font-mono font-bold text-xs text-white group-hover:scale-105 transition-transform">
                {portfolioData.personal.initials}
              </div>
            </div>
            <div className="hidden lg:flex flex-col text-left">
              <span className="text-xs font-semibold text-white tracking-tight leading-none group-hover:text-blue-400 transition-colors">
                {portfolioData.personal.name}
              </span>
              <span className="text-[9px] font-mono text-zinc-400 tracking-wider uppercase leading-none mt-0.5">
                GenAI & ML Architect
              </span>
            </div>
          </button>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1 bg-white/[0.03] p-1 rounded-full border border-white/5" aria-label="Main Navigation">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`relative px-3.5 py-1.5 text-xs font-medium rounded-full transition-colors duration-200 focus-visible:ring-2 focus-visible:ring-blue-500 ${
                    isActive ? 'text-white' : 'text-zinc-400 hover:text-white'
                  }`}
                >
                  {isActive && (
                    <motion.span
                      layoutId="activeNavIndicator"
                      className="absolute inset-0 bg-white/10 rounded-full border border-white/10 shadow-[0_0_12px_rgba(255,255,255,0.1)]"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{item.label}</span>
                </button>
              );
            })}
          </nav>

          {/* Right Header Actions */}
          <div className="flex items-center gap-2">
            {/* Audio Toggle */}
            <SoundToggle />

            <button
              onClick={() => {
                sound.playClick();
                onOpenCmdK();
              }}
              aria-label="Open Command Search (Cmd+K)"
              className="flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-3 py-1.5 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-zinc-400 hover:text-white text-xs font-mono transition-all duration-200 focus-visible:ring-2 focus-visible:ring-blue-500"
            >
              <Search size={13} />
              <span className="hidden sm:inline">Search</span>
              <kbd className="hidden sm:inline px-1.5 py-0.5 text-[10px] bg-white/10 rounded text-zinc-300">⌘K</kbd>
            </button>

            <button
              onClick={() => {
                sound.playWhoosh();
                onOpenResume();
              }}
              className="hidden sm:inline-flex items-center gap-1 px-3 py-1.5 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-zinc-300 hover:text-white font-medium text-xs transition-all hover:scale-105"
            >
              <FileText size={13} />
              <span>Resume</span>
            </button>

            <button
              onClick={() => {
                sound.playWhoosh();
                onOpenConnect();
              }}
              className="inline-flex items-center gap-1.5 px-3 sm:px-3.5 py-1.5 rounded-full bg-blue-500 hover:bg-blue-400 text-black font-semibold text-xs shadow-[0_0_16px_rgba(59,130,246,0.4)] transition-all hover:scale-105 active:scale-95"
            >
              <span>Connect</span>
              <ArrowUpRight size={13} />
            </button>

            {/* Mobile Hamburger Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-1.5 rounded-full bg-white/5 text-zinc-300 hover:text-white transition-colors"
              aria-label="Toggle navigation menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-4 top-20 z-50 md:hidden bg-zinc-950/95 backdrop-blur-2xl border border-white/15 rounded-3xl p-6 shadow-2xl"
          >
            <div className="flex flex-col gap-2">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`flex items-center justify-between p-3 rounded-2xl text-left text-sm font-medium transition-colors ${
                    activeSection === item.id 
                      ? 'bg-blue-500/10 text-blue-400 border border-blue-500/20' 
                      : 'text-zinc-300 hover:bg-white/5'
                  }`}
                >
                  <span>{item.label}</span>
                  {activeSection === item.id && (
                    <span className="w-2 h-2 rounded-full bg-blue-400 shadow-[0_0_8px_#60a5fa]" />
                  )}
                </button>
              ))}
              
              <div className="mt-4 pt-4 border-t border-white/10 flex flex-col gap-2">
                <button
                  onClick={() => { onOpenCmdK(); setMobileMenuOpen(false); }}
                  className="flex items-center justify-center gap-2 p-3 rounded-2xl bg-white/5 text-zinc-300 text-xs font-mono"
                >
                  <Search size={14} /> Search Portfolio (⌘K)
                </button>
                <button
                  onClick={() => { onOpenResume(); setMobileMenuOpen(false); }}
                  className="flex items-center justify-center gap-2 p-3 rounded-2xl bg-white/5 text-white text-xs font-mono"
                >
                  <FileText size={14} /> View Printable Resume
                </button>
                <button
                  onClick={() => { onOpenConnect(); setMobileMenuOpen(false); }}
                  className="flex items-center justify-center gap-2 p-3 rounded-2xl bg-blue-500 text-black font-semibold text-sm"
                >
                  Connect Directly <ArrowUpRight size={16} />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
