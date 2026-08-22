import React from 'react';
import { Modal } from './ui/Modal';
import { MapPin, Calendar, CheckCircle2 } from 'lucide-react';
import { CompanyLogo } from './ui/CompanyLogo';

export function ExperienceModal({ job, onClose }) {
  if (!job) return null;

  return (
    <Modal
      isOpen={!!job}
      onClose={onClose}
      maxWidth="max-w-3xl"
    >
      <div className="space-y-6">
        {/* Header Block */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-white/10 pr-10 sm:pr-12">
          <div className="flex items-center gap-4">
            <CompanyLogo domain={job.domain} company={job.company} className="w-14 h-14" />
            <div>
              <h2 className="text-2xl font-bold text-white tracking-tight">{job.role}</h2>
              <div className="text-blue-400 font-semibold text-base">{job.company}</div>
            </div>
          </div>

          <div className="flex flex-col sm:items-end gap-1 font-mono text-xs text-zinc-400">
            <span className="flex items-center gap-1.5"><Calendar size={13} /> {job.period}</span>
            <span className="flex items-center gap-1.5"><MapPin size={13} /> {job.location}</span>
          </div>
        </div>

        {/* Overview Paragraph */}
        <div>
          <h4 className="text-xs font-mono uppercase tracking-widest text-zinc-400 mb-2">Executive Summary</h4>
          <p className="text-zinc-200 text-sm sm:text-base leading-relaxed whitespace-pre-line font-light">
            {job.description}
          </p>
        </div>

        {/* Core Achievements & Responsibilities */}
        {job.highlights && job.highlights.length > 0 && (
          <div className="pt-4 border-t border-white/10">
            <h4 className="text-xs font-mono uppercase tracking-widest text-blue-400 mb-4">
              Key Engineering Impact & Metrics
            </h4>
            <div className="space-y-3">
              {job.highlights.map((highlight, idx) => (
                <div key={idx} className="flex items-start gap-3 p-3.5 rounded-2xl bg-white/[0.03] border border-white/5">
                  <CheckCircle2 size={16} className="text-blue-400 shrink-0 mt-0.5" />
                  <p className="text-zinc-300 text-xs sm:text-sm leading-relaxed">
                    {highlight}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </Modal>
  );
}
