import React, { useState } from 'react';
import { Modal } from './ui/Modal';
import { Mail, Copy, Check, Linkedin, Github, Instagram, MapPin, ArrowUpRight, MessageSquare } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export function ConnectModal({ isOpen, onClose, onCopySuccess }) {
  const { personal, socials } = portfolioData;
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personal.email);
    setCopied(true);
    if (onCopySuccess) onCopySuccess("Email copied to clipboard!");
    setTimeout(() => setCopied(false), 2500);
  };

  const iconMap = {
    Github: Github,
    Linkedin: Linkedin,
    Instagram: Instagram,
    Mail: Mail
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      maxWidth="max-w-xl"
    >
      <div className="space-y-6">
        {/* Header Block */}
        <div>
          <div className="flex items-center gap-2 text-xs font-mono text-blue-400 mb-2 uppercase tracking-wider">
            <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
            Direct Transmission
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight mb-2">
            Let's Connect
          </h2>
          <p className="text-sm text-zinc-300 font-light">
            Open for strategic advisory, enterprise GenAI architecture, LLM infrastructure discussions, and technical keynotes.
          </p>
        </div>

        {/* Email Copy Card */}
        <div className="p-4 sm:p-5 rounded-2xl bg-zinc-950/80 border border-white/15 space-y-3">
          <div className="text-[11px] font-mono text-zinc-400 uppercase tracking-wider">
            Primary Contact Email
          </div>
          
          <div className="flex items-center justify-between gap-3 p-3 rounded-xl bg-white/[0.03] border border-white/10 font-mono text-xs text-white overflow-hidden">
            <span className="truncate">{personal.email}</span>
            <button
              onClick={handleCopyEmail}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-blue-500 hover:bg-blue-400 text-black font-semibold text-xs shrink-0 transition-all hover:scale-105"
            >
              {copied ? (
                <>
                  <Check size={13} />
                  <span>Copied!</span>
                </>
              ) : (
                <>
                  <Copy size={13} />
                  <span>Copy</span>
                </>
              )}
            </button>
          </div>

          <div className="flex items-center justify-between pt-1 text-xs">
            <a
              href={`mailto:${personal.email}`}
              className="text-blue-400 hover:underline flex items-center gap-1 text-[11px] font-mono"
            >
              <span>Open in Default Mail Client</span>
              <ArrowUpRight size={12} />
            </a>
            <span className="text-zinc-500 font-mono text-[11px] flex items-center gap-1">
              <MapPin size={11} /> {personal.location}
            </span>
          </div>
        </div>

        {/* Social Grid */}
        <div className="space-y-3">
          <div className="text-[11px] font-mono text-zinc-400 uppercase tracking-wider">
            Professional Networks
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {socials.filter(s => s.platform !== 'Email').map((s, idx) => {
              const Icon = iconMap[s.icon] || ArrowUpRight;
              return (
                <a
                  key={idx}
                  href={s.url}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-3 p-3 rounded-xl bg-zinc-900/60 hover:bg-zinc-800 border border-white/10 hover:border-white/20 transition-all group"
                >
                  <div className="p-2 rounded-lg bg-white/5 text-zinc-300 group-hover:text-white">
                    <Icon size={16} />
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-white group-hover:text-blue-400 transition-colors">
                      {s.platform}
                    </div>
                    <div className="text-[10px] font-mono text-zinc-500">
                      Connect
                    </div>
                  </div>
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </Modal>
  );
}
