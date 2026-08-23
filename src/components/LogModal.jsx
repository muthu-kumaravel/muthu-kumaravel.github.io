import React from 'react';
import { Modal } from './ui/Modal';
import { Activity, Calendar, ArrowRightLeft } from 'lucide-react';
import { ArchitectureDiagram } from './ui/ArchitectureDiagram';

export function LogModal({ log, onClose }) {
  if (!log) return null;

  return (
    <Modal
      isOpen={!!log}
      onClose={onClose}
      maxWidth="max-w-4xl"
    >
      <div className="space-y-6 pr-2 sm:pr-6">
        {/* Header Block */}
        <div className="pb-6 border-b border-white/10">
          <div className="flex items-center gap-3 mb-3">
            <span className="px-3 py-1 rounded-full text-xs font-mono bg-blue-500/15 text-blue-400 border border-blue-500/30">
              {log.tag}
            </span>
            <span className="text-zinc-400 font-mono text-xs flex items-center gap-1">
              <Calendar size={13} /> {log.date}
            </span>
          </div>

          <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight mb-2">
            {log.title}
          </h2>
          <p className="text-zinc-300 text-sm sm:text-base leading-relaxed font-light">
            {log.summary}
          </p>
        </div>

        {/* Visual Architecture Flow Diagram (if diagramType exists) */}
        {log.diagramType && (
          <ArchitectureDiagram type={log.diagramType} />
        )}

        {/* Training Log Empirical Table (if available, e.g. Log-01) */}
        {log.trainingData && (
          <div className="space-y-3">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
              <h4 className="text-xs font-mono uppercase tracking-wider text-cyan-400 flex items-center gap-2 font-semibold">
                <Activity size={14} /> Empirical Hardware Telemetry & MFU Convergence
              </h4>
              <div className="flex items-center gap-2">
                <span className="sm:hidden text-[10px] font-mono text-zinc-400 flex items-center gap-1 bg-white/5 px-2 py-0.5 rounded-full">
                  <ArrowRightLeft size={10} /> Scroll table
                </span>
                <span className="text-[11px] font-mono text-zinc-400">TPU v7-1024 Slice</span>
              </div>
            </div>

            <div className="relative overflow-x-auto rounded-2xl border border-white/10 bg-zinc-950/80 shadow-inner">
              <table className="w-full text-xs font-mono text-left border-collapse">
                <thead className="bg-white/5 text-zinc-400 border-b border-white/10">
                  <tr>
                    <th className="p-3 sticky left-0 bg-zinc-950/95 z-10">Step</th>
                    <th className="p-3">Epoch</th>
                    <th className="p-3">Loss</th>
                    <th className="p-3">LR</th>
                    <th className="p-3">Time (ms)</th>
                    <th className="p-3">TFLOPS</th>
                    <th className="p-3">MFU</th>
                    <th className="p-3 min-w-[160px]">Optimization State</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5 text-zinc-300">
                  {log.trainingData.map((row, rIdx) => (
                    <tr key={rIdx} className="hover:bg-white/[0.03] transition-colors">
                      <td className="p-3 font-semibold text-white sticky left-0 bg-zinc-950/95 z-10">{row.step}</td>
                      <td className="p-3 text-zinc-400">{row.epoch}</td>
                      <td className="p-3 text-blue-400 font-semibold">{row.loss}</td>
                      <td className="p-3 text-zinc-400">{row.lr}</td>
                      <td className="p-3 text-zinc-300">{row.timeMs}</td>
                      <td className="p-3 text-purple-400">{row.tflops}</td>
                      <td className="p-3 font-bold text-emerald-400">{row.mfu}</td>
                      <td className="p-3 text-zinc-400 text-[11px]">{row.notes}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Detailed Case Study Report Content */}
        <div className="pt-2 text-zinc-200 text-sm sm:text-base leading-relaxed space-y-4 font-light">
          {log.details.split('\n\n').map((paragraph, pIdx) => {
            const trimmed = paragraph.trim();
            if (!trimmed) return null;

            if (trimmed.startsWith('### ')) {
              return (
                <h3 key={pIdx} className="text-lg sm:text-xl font-bold text-white tracking-tight pt-4 pb-1 border-b border-white/5">
                  {trimmed.replace('### ', '')}
                </h3>
              );
            }

            if (trimmed.startsWith('- ')) {
              const items = trimmed.split('\n').filter(i => i.trim().startsWith('- '));
              return (
                <ul key={pIdx} className="space-y-2 pl-2">
                  {items.map((item, iIdx) => (
                    <li key={iIdx} className="flex items-start gap-2.5 text-sm text-zinc-300">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-2 shrink-0" />
                      <span>{item.replace('- ', '').replace(/\*\*(.*?)\*\*/g, '$1')}</span>
                    </li>
                  ))}
                </ul>
              );
            }

            return (
              <p key={pIdx} className="text-zinc-300 text-sm sm:text-base leading-relaxed">
                {trimmed.replace(/\*\*(.*?)\*\*/g, '$1')}
              </p>
            );
          })}
        </div>
      </div>
    </Modal>
  );
}
