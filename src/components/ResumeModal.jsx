import React from 'react';
import { Modal } from './ui/Modal';
import { Printer, Mail, MapPin, Briefcase, GraduationCap, Award, Cpu, Layers } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export function ResumeModal({ isOpen, onClose }) {
  const { personal, experience, education, certifications, skills, workshops } = portfolioData;

  const handlePrint = () => {
    window.print();
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      maxWidth="max-w-4xl"
    >
      <div className="space-y-8 pr-4 sm:pr-6">
        {/* Header Actions & Profile Bar */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-white/10">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
              {personal.name}
            </h2>
            <div className="text-sm font-semibold text-blue-400 mt-0.5">
              {personal.role}
            </div>
            <div className="flex flex-wrap items-center gap-3 text-xs font-mono text-zinc-400 mt-2">
              <span className="flex items-center gap-1"><MapPin size={12} /> {personal.location}</span>
              <span>•</span>
              <span className="flex items-center gap-1"><Mail size={12} /> {personal.email}</span>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-white text-black font-semibold text-xs hover:bg-zinc-200 transition-all hover:scale-105"
            >
              <Printer size={14} />
              <span>Print / Save PDF</span>
            </button>
          </div>
        </div>

        {/* Executive Summary */}
        <div>
          <h3 className="text-xs font-mono uppercase tracking-widest text-zinc-400 mb-2 flex items-center gap-2">
            <Cpu size={14} className="text-blue-400" /> Executive Architecture Profile
          </h3>
          <p className="text-sm text-zinc-300 leading-relaxed font-light">
            GenAI & Machine Learning Architect with 6+ years of specialized experience in large-scale LLM training, high-throughput model serving, kernel optimization (JAX/Pallas, CUDA), and autonomous multi-agent systems across NVIDIA GPUs and Google TPUs. Proven record of leading 30+ enterprise pre-sales architectures with a 65% PoC conversion rate.
          </p>
        </div>

        {/* Technical Skills Taxonomy */}
        <div>
          <h3 className="text-xs font-mono uppercase tracking-widest text-zinc-400 mb-3 flex items-center gap-2">
            <Layers size={14} className="text-emerald-400" /> Technical Arsenal & Frameworks
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
            {Object.entries(skills).map(([category, items], idx) => (
              <div key={idx} className="p-3 rounded-xl bg-white/[0.02] border border-white/5 space-y-1">
                <div className="text-[11px] font-mono text-zinc-400 font-semibold uppercase">{category}</div>
                <div className="text-xs text-zinc-300 font-light leading-snug">{items.join(', ')}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Experience Timeline */}
        <div>
          <h3 className="text-xs font-mono uppercase tracking-widest text-zinc-400 mb-4 flex items-center gap-2">
            <Briefcase size={14} className="text-blue-400" /> Professional Experience
          </h3>
          
          <div className="space-y-6">
            {experience.map((job) => (
              <div key={job.id} className="p-4 sm:p-5 rounded-2xl bg-zinc-950/60 border border-white/5 space-y-2">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                  <div>
                    <span className="text-base font-bold text-white">{job.role}</span>
                    <span className="text-blue-400 font-semibold text-sm"> • {job.company}</span>
                  </div>
                  <span className="text-xs font-mono text-zinc-400">{job.period} • {job.location}</span>
                </div>
                
                <p className="text-xs sm:text-sm text-zinc-300 font-light">
                  {job.summary}
                </p>

                <ul className="space-y-1 pt-1">
                  {job.highlights.map((h, i) => (
                    <li key={i} className="flex items-start gap-2 text-xs text-zinc-400">
                      <span className="w-1 h-1 rounded-full bg-blue-400 mt-1.5 shrink-0" />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Enterprise Workshops */}
        {workshops && (
          <div>
            <h3 className="text-xs font-mono uppercase tracking-widest text-zinc-400 mb-3 flex items-center gap-2">
              <Award size={14} className="text-purple-400" /> Enterprise Workshops & Masterclasses
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {workshops.map((ws, i) => (
                <div key={i} className="p-3.5 rounded-xl bg-white/[0.02] border border-white/5">
                  <div className="text-xs font-bold text-white">{ws.title}</div>
                  <div className="text-[11px] font-mono text-purple-400 mt-0.5">{ws.subtitle}</div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Education & Certifications */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2">
          {/* Certifications */}
          <div className="space-y-2">
            <h3 className="text-xs font-mono uppercase tracking-widest text-zinc-400 flex items-center gap-2">
              <Award size={14} className="text-emerald-400" /> Certifications
            </h3>
            <ul className="space-y-1.5 text-xs text-zinc-300">
              {certifications.map((c, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="w-1 h-1 rounded-full bg-emerald-400 mt-1.5 shrink-0" />
                  <div>
                    <span className="font-medium text-white">{c.name}</span>
                    <span className="text-zinc-500 font-mono text-[10px]"> ({c.issuer})</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Education */}
          <div className="space-y-2">
            <h3 className="text-xs font-mono uppercase tracking-widest text-zinc-400 flex items-center gap-2">
              <GraduationCap size={14} className="text-blue-400" /> Education
            </h3>
            {education.map((edu, i) => (
              <div key={i} className="text-xs">
                <div className="font-bold text-white">{edu.institution}</div>
                <div className="text-blue-400 font-medium">{edu.degree}</div>
                <div className="text-[11px] font-mono text-zinc-400 mt-0.5">{edu.period} • {edu.location}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Modal>
  );
}
