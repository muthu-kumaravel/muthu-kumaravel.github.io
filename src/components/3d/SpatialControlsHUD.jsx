import React, { useEffect } from 'react';
import { Layers, Compass, Eye, X, ArrowLeft } from 'lucide-react';
import { sound } from '../../utils/audioEngine';

export function SpatialControlsHUD({ viewMode, onToggleMode, activeSection, onSelectSection }) {
  const sectors = [
    { id: 'overview', label: 'Overview', icon: '01' },
    { id: 'experience', label: 'Experience', icon: '02' },
    { id: 'projects', label: 'Projects', icon: '03' },
    { id: 'logs', label: 'Logs', icon: '04' },
    { id: 'gallery', label: 'Gallery', icon: '05' },
    { id: 'about', label: 'About', icon: '06' },
  ];

  // Esc key exits diorama mode
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && viewMode === 'diorama') {
        onToggleMode();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [viewMode, onToggleMode]);

  const handleModeToggle = () => {
    sound.playWhoosh();
    onToggleMode();
  };

  const handleSectorClick = (id) => {
    sound.playClick();
    onSelectSection(id);
  };

  return (
    <>
      {/* Top Banner when Diorama mode is Active */}
      {viewMode === 'diorama' && (
        <div className="fixed top-20 left-1/2 -translate-x-1/2 z-50 pointer-events-auto flex items-center gap-3 px-5 py-2.5 rounded-full bg-zinc-950/90 backdrop-blur-2xl border border-blue-500/30 text-xs font-mono text-white shadow-[0_8px_32px_rgba(0,0,0,0.8)] animate-in fade-in slide-in-from-top-4 duration-300">
          <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
          <span className="text-zinc-300 hidden sm:inline">3D Spatial Diorama • Drag to Rotate</span>
          <span className="text-zinc-600 hidden sm:inline">|</span>
          <button
            onClick={handleModeToggle}
            className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-white text-black font-semibold text-[11px] hover:bg-zinc-200 transition-all hover:scale-105"
          >
            <ArrowLeft size={12} />
            <span>Return to Portfolio</span>
          </button>
        </div>
      )}

      <div className="fixed bottom-6 right-4 sm:right-6 z-40 flex flex-col items-end gap-2.5 select-none pointer-events-none">
        {/* 3D Mode Switcher Pill */}
        <button
          onClick={handleModeToggle}
          className={`pointer-events-auto flex items-center gap-2 px-4 py-2.5 rounded-full backdrop-blur-2xl border text-xs font-mono transition-all hover:scale-105 active:scale-95 shadow-[0_8px_32px_rgba(0,0,0,0.6)] ${
            viewMode === 'diorama'
              ? 'bg-blue-600 text-white border-blue-400 shadow-[0_0_20px_rgba(37,99,235,0.5)]'
              : 'bg-zinc-950/85 hover:bg-zinc-900/90 text-zinc-300 hover:text-white border-white/15'
          }`}
          title="Toggle 3D Interactive Diorama Mode"
        >
          <span className="p-1 rounded-full bg-white/10 text-cyan-300">
            {viewMode === 'diorama' ? <X size={13} /> : <Compass size={13} />}
          </span>
          <span className="font-semibold">
            {viewMode === 'diorama' ? 'Exit Diorama' : '3D Spatial View'}
          </span>
          <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
        </button>

        {/* Sector Quick-Nav Dock (Visible in Diorama or Keynote) */}
        <div className="pointer-events-auto hidden sm:flex items-center gap-1 p-1 rounded-full bg-zinc-950/80 backdrop-blur-2xl border border-white/10 shadow-xl">
          <div className="px-2 text-[10px] font-mono text-zinc-400 flex items-center gap-1">
            <Eye size={11} className="text-blue-400" />
            <span>Orbit</span>
          </div>
          {sectors.map((sec) => {
            const isActive = activeSection === sec.id;
            return (
              <button
                key={sec.id}
                onClick={() => handleSectorClick(sec.id)}
                className={`px-2.5 py-1 rounded-full text-[11px] font-mono transition-all ${
                  isActive
                    ? 'bg-blue-500/20 text-cyan-300 border border-blue-500/40 font-bold'
                    : 'text-zinc-400 hover:text-white hover:bg-white/5'
                }`}
              >
                {sec.label}
              </button>
            );
          })}
        </div>
      </div>
    </>
  );
}
