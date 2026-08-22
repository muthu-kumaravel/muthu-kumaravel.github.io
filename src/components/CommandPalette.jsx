import React, { useState, useEffect, useMemo, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, ArrowRight, FolderGit2, BookOpen, User, Briefcase, Camera, X, FileText, MessageSquare } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export function CommandPalette({ isOpen, onClose, onNavigate, onOpenLog, onSelectJob, onOpenResume, onOpenConnect }) {
  const [query, setQuery] = useState('');
  const [selectedIndex, setSelectedIndex] = useState(0);
  const inputRef = useRef(null);
  const listRef = useRef(null);

  // Focus input when opened
  useEffect(() => {
    if (isOpen) {
      const timer = setTimeout(() => inputRef.current?.focus(), 50);
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  const handleClose = useCallback(() => {
    setQuery('');
    setSelectedIndex(0);
    onClose();
  }, [onClose]);

  // Build Comprehensive Search Index
  const searchIndex = useMemo(() => {
    const items = [
      // Sections
      { type: 'section', id: 'overview', title: 'Overview', subtitle: 'Hero, Keynote & High-Level Metrics', icon: User, action: () => onNavigate('overview') },
      { type: 'section', id: 'experience', title: 'Experience', subtitle: 'Career Journey (Google, Quantiphi, MulticoreWare, ValueLabs)', icon: Briefcase, action: () => onNavigate('experience') },
      { type: 'section', id: 'projects', title: 'Projects Catalog', subtitle: '24 Systems & Deployments (GenAI, Vision, HPC, Cloud)', icon: FolderGit2, action: () => onNavigate('projects') },
      { type: 'section', id: 'logs', title: 'Engineering Logs', subtitle: 'Technical Case Studies & Empirical Telemetry Reports', icon: BookOpen, action: () => onNavigate('logs') },
      { type: 'section', id: 'gallery', title: 'Visual Gallery', subtitle: 'Optical Photography & Sensory Archive', icon: Camera, action: () => onNavigate('gallery') },
      { type: 'section', id: 'about', title: 'About & Foundations', subtitle: 'Persona, Skills Arsenal & Academic Background', icon: User, action: () => onNavigate('about') },
      
      // Quick Modals
      { type: 'action', id: 'resume', title: 'View Printable Resume', subtitle: 'Executive CV & Printable PDF View', icon: FileText, action: () => onOpenResume() },
      { type: 'action', id: 'connect', title: 'Connect & Contact', subtitle: '1-Click Email Copy, LinkedIn & GitHub', icon: MessageSquare, action: () => onOpenConnect() },
    ];

    // Add Projects
    portfolioData.projects.forEach(group => {
      group.items.forEach(proj => {
        items.push({
          type: 'project',
          id: proj.name,
          title: proj.name,
          subtitle: `${group.category} • ${proj.tags.join(', ')}`,
          icon: FolderGit2,
          action: () => {
            onNavigate('projects');
          }
        });
      });
    });

    // Add Experience
    portfolioData.experience.forEach(job => {
      items.push({
        type: 'experience',
        id: job.id,
        title: `${job.role} @ ${job.company}`,
        subtitle: `${job.period} • ${job.location}`,
        icon: Briefcase,
        action: () => {
          onSelectJob(job);
        }
      });
    });

    // Add Engineering Logs
    portfolioData.logs.forEach(log => {
      items.push({
        type: 'log',
        id: log.id,
        title: log.title,
        subtitle: `${log.tag} • ${log.date}`,
        icon: BookOpen,
        action: () => {
          onOpenLog(log.id);
        }
      });
    });

    return items;
  }, [onNavigate, onOpenLog, onSelectJob, onOpenResume, onOpenConnect]);

  // Filter items based on query
  const filteredItems = useMemo(() => {
    if (!query.trim()) return searchIndex.slice(0, 8);
    const q = query.toLowerCase();
    return searchIndex.filter(item => 
      item.title.toLowerCase().includes(q) || 
      item.subtitle.toLowerCase().includes(q)
    ).slice(0, 10);
  }, [query, searchIndex]);

  // Keyboard navigation & Focus Trap
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e) => {
      if (e.key === 'ArrowDown') {
        e.preventDefault();
        setSelectedIndex(prev => (prev + 1) % filteredItems.length);
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        setSelectedIndex(prev => (prev - 1 + filteredItems.length) % filteredItems.length);
      } else if (e.key === 'Enter') {
        e.preventDefault();
        if (filteredItems[selectedIndex]) {
          filteredItems[selectedIndex].action();
          handleClose();
        }
      } else if (e.key === 'Escape') {
        handleClose();
      } else if (e.key === 'Tab') {
        e.preventDefault();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, filteredItems, selectedIndex, handleClose]);

  // Scroll active item into view
  useEffect(() => {
    if (listRef.current) {
      const selectedEl = listRef.current.children[selectedIndex];
      if (selectedEl) {
        selectedEl.scrollIntoView({ block: 'nearest' });
      }
    }
  }, [selectedIndex]);

  // Highlight query match in string
  const renderHighlighted = (text) => {
    if (!query.trim()) return text;
    const parts = text.split(new RegExp(`(${query})`, 'gi'));
    return parts.map((part, i) => 
      part.toLowerCase() === query.toLowerCase() ? (
        <span key={i} className="text-blue-400 font-bold bg-blue-500/10 rounded px-0.5">{part}</span>
      ) : part
    );
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[150] flex items-start justify-center pt-20 px-4 sm:px-6">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
            className="fixed inset-0 bg-black/80 backdrop-blur-2xl"
          />

          {/* Palette Window */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: -10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: -10 }}
            transition={{ type: "spring", damping: 30, stiffness: 350 }}
            className="relative w-full max-w-2xl bg-[#0e0e12] border border-white/15 rounded-3xl shadow-2xl overflow-hidden z-10 flex flex-col"
          >
            {/* Search Input Bar */}
            <div className="flex items-center px-5 py-4 border-b border-white/10 bg-zinc-950/60">
              <Search className="text-zinc-400 mr-3 shrink-0" size={18} />
              <input
                ref={inputRef}
                type="text"
                value={query}
                onChange={(e) => {
                  setQuery(e.target.value);
                  setSelectedIndex(0);
                }}
                placeholder="Search projects, architecture logs, skills, or navigate..."
                className="w-full bg-transparent text-white placeholder-zinc-500 text-sm focus:outline-none font-sans"
              />
              {query && (
                <button 
                  onClick={() => setQuery('')}
                  className="p-1 rounded-full text-zinc-500 hover:text-white"
                >
                  <X size={14} />
                </button>
              )}
            </div>

            {/* Results List */}
            <div ref={listRef} className="max-h-[60vh] overflow-y-auto p-2 space-y-1 custom-scrollbar">
              {filteredItems.length === 0 ? (
                <div className="p-8 text-center text-zinc-500 text-sm font-mono">
                  No matching systems or topics found for "{query}"
                </div>
              ) : (
                filteredItems.map((item, idx) => {
                  const Icon = item.icon;
                  const isSelected = idx === selectedIndex;

                  return (
                    <button
                      key={`${item.type}-${item.id}`}
                      onClick={() => {
                        item.action();
                        handleClose();
                      }}
                      onMouseEnter={() => setSelectedIndex(idx)}
                      className={`w-full flex items-center justify-between p-3 rounded-2xl text-left transition-all ${
                        isSelected 
                          ? 'bg-blue-500/15 border border-blue-500/30 text-white' 
                          : 'text-zinc-300 hover:bg-white/5 border border-transparent'
                      }`}
                    >
                      <div className="flex items-center gap-3 min-w-0 pr-4">
                        <div className={`p-2 rounded-xl shrink-0 ${isSelected ? 'bg-blue-500 text-black' : 'bg-white/5 text-zinc-400'}`}>
                          <Icon size={16} />
                        </div>
                        <div className="min-w-0">
                          <div className="text-sm font-semibold truncate">
                            {renderHighlighted(item.title)}
                          </div>
                          <div className="text-xs text-zinc-400 font-mono truncate">
                            {renderHighlighted(item.subtitle)}
                          </div>
                        </div>
                      </div>

                      <div className="flex items-center gap-2 shrink-0">
                        {isSelected && (
                          <span className="text-[10px] font-mono text-blue-400 flex items-center gap-1">
                            <span>Open</span>
                            <ArrowRight size={12} />
                          </span>
                        )}
                      </div>
                    </button>
                  );
                })
              )}
            </div>

            {/* Footer Keyboard Hints */}
            <div className="px-5 py-3 border-t border-white/5 bg-zinc-950/40 flex items-center justify-between text-[11px] font-mono text-zinc-500">
              <div className="flex items-center gap-3">
                <span><kbd className="px-1.5 py-0.5 bg-white/10 rounded text-zinc-300">↑</kbd> <kbd className="px-1.5 py-0.5 bg-white/10 rounded text-zinc-300">↓</kbd> to navigate</span>
                <span><kbd className="px-1.5 py-0.5 bg-white/10 rounded text-zinc-300">↵</kbd> to select</span>
                <span><kbd className="px-1.5 py-0.5 bg-white/10 rounded text-zinc-300">ESC</kbd> to close</span>
              </div>
              <span className="text-blue-400 font-medium">Spotlight Search</span>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
