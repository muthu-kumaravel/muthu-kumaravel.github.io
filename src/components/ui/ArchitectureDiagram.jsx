import React from 'react';
import { ArrowRight, Server, Cpu, Database, Network, ShieldCheck, Zap, Activity, Video, Camera } from 'lucide-react';

export function ArchitectureDiagram({ type }) {
  if (type === 'multi-lora') {
    const nodes = [
      { id: '1', title: '50k+ Daily Disputes', sub: '18k-20k Tokens Raw', icon: Database, color: 'text-blue-400', border: 'border-blue-500/30' },
      { id: '2', title: 'LangGraph Router', sub: 'Stateful Agent Pipeline', icon: Network, color: 'text-purple-400', border: 'border-purple-500/30' },
      { id: '3', title: 'Multi-LoRA Adapters', sub: 'Intent • Entity • Reason', icon: Cpu, color: 'text-cyan-400', border: 'border-cyan-500/30' },
      { id: '4', title: 'Phi-3.5 + TRT-LLM', sub: 'FP8 PTQ & Radix Cache', icon: Server, color: 'text-emerald-400', border: 'border-emerald-500/30' },
      { id: '5', title: '<1h Resolution', sub: '>95% Accuracy', icon: ShieldCheck, color: 'text-amber-400', border: 'border-amber-500/30' }
    ];

    return (
      <div className="p-5 sm:p-6 rounded-3xl bg-zinc-950/80 border border-white/10 my-6 shadow-inner">
        <div className="flex items-center justify-between mb-4">
          <span className="text-[11px] font-mono uppercase tracking-wider text-purple-400 flex items-center gap-1.5 font-semibold">
            <Activity size={14} /> Multi-LoRA Agentic Serving Pipeline
          </span>
          <span className="text-[10px] font-mono text-zinc-400">4-Node H100 Cluster</span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-5 gap-3 items-center">
          {nodes.map((node, i) => {
            const Icon = node.icon;
            return (
              <React.Fragment key={node.id}>
                <div className={`p-4 rounded-2xl bg-zinc-900/90 border ${node.border} text-center flex flex-col items-center justify-center space-y-1.5 shadow-md`}>
                  <div className={`p-2 rounded-xl bg-white/5 ${node.color}`}>
                    <Icon size={18} />
                  </div>
                  <div className="text-xs font-bold text-white font-sans leading-tight">
                    {node.title}
                  </div>
                  <div className="text-[10px] font-mono text-zinc-400">
                    {node.sub}
                  </div>
                </div>
                {i < nodes.length - 1 && (
                  <div className="hidden sm:flex justify-center text-zinc-600">
                    <ArrowRight size={14} className="text-zinc-600" />
                  </div>
                )}
              </React.Fragment>
            );
          })}
        </div>
      </div>
    );
  }

  if (type === 'tpu-moe') {
    const nodes = [
      { id: '1', title: 'Qwen3-235B MoE', sub: '22B Active / Token', icon: Database, color: 'text-blue-400', border: 'border-blue-500/30' },
      { id: '2', title: 'Pallas Kernel', sub: 'Megablox BSMM Fusion', icon: Cpu, color: 'text-cyan-400', border: 'border-cyan-500/30' },
      { id: '3', title: '3D Torus Mesh', sub: '9.6 Tbps ICI Optical', icon: Network, color: 'text-purple-400', border: 'border-purple-500/30' },
      { id: '4', title: 'TPU v7 Pod', sub: '1,024 Accelerator Slice', icon: Server, color: 'text-emerald-400', border: 'border-emerald-500/30' },
      { id: '5', title: '48.2% MFU Peak', sub: '2.4x Speedup', icon: Zap, color: 'text-amber-400', border: 'border-amber-500/30' }
    ];

    return (
      <div className="p-5 sm:p-6 rounded-3xl bg-zinc-950/80 border border-white/10 my-6 shadow-inner">
        <div className="flex items-center justify-between mb-4">
          <span className="text-[11px] font-mono uppercase tracking-wider text-blue-400 flex items-center gap-1.5 font-semibold">
            <Activity size={14} /> Distributed MoE Supercluster Pipeline
          </span>
          <span className="text-[10px] font-mono text-zinc-400">Google Cloud TPU v7</span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-5 gap-3 items-center">
          {nodes.map((node, i) => {
            const Icon = node.icon;
            return (
              <React.Fragment key={node.id}>
                <div className={`p-4 rounded-2xl bg-zinc-900/90 border ${node.border} text-center flex flex-col items-center justify-center space-y-1.5 shadow-md`}>
                  <div className={`p-2 rounded-xl bg-white/5 ${node.color}`}>
                    <Icon size={18} />
                  </div>
                  <div className="text-xs font-bold text-white font-sans leading-tight">
                    {node.title}
                  </div>
                  <div className="text-[10px] font-mono text-zinc-400">
                    {node.sub}
                  </div>
                </div>
                {i < nodes.length - 1 && (
                  <div className="hidden sm:flex justify-center text-zinc-600">
                    <ArrowRight size={14} className="text-zinc-600" />
                  </div>
                )}
              </React.Fragment>
            );
          })}
        </div>
      </div>
    );
  }

  if (type === 'vision-stream') {
    const nodes = [
      { id: '1', title: '150+ RTSP Feeds', sub: 'H.264 / H.265 Streams', icon: Video, color: 'text-emerald-400', border: 'border-emerald-500/30' },
      { id: '2', title: 'NVIDIA DeepStream', sub: 'Zero-Copy NVDEC', icon: Server, color: 'text-cyan-400', border: 'border-cyan-500/30' },
      { id: '3', title: 'CLIP / BLIP Re-ID', sub: 'Zero-Shot Multi-Cam', icon: Cpu, color: 'text-purple-400', border: 'border-purple-500/30' },
      { id: '4', title: 'Triton Server', sub: 'Dynamic Batching', icon: Database, color: 'text-blue-400', border: 'border-blue-500/30' },
      { id: '5', title: 'Sub-30ms P99', sub: 'Edge/Cloud Analytics', icon: Zap, color: 'text-amber-400', border: 'border-amber-500/30' }
    ];

    return (
      <div className="p-5 sm:p-6 rounded-3xl bg-zinc-950/80 border border-white/10 my-6 shadow-inner">
        <div className="flex items-center justify-between mb-4">
          <span className="text-[11px] font-mono uppercase tracking-wider text-emerald-400 flex items-center gap-1.5 font-semibold">
            <Activity size={14} /> City-Scale Video Ingestion & Vision Analytics Pipeline
          </span>
          <span className="text-[10px] font-mono text-zinc-400">NVIDIA DeepStream + Triton</span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-5 gap-3 items-center">
          {nodes.map((node, i) => {
            const Icon = node.icon;
            return (
              <React.Fragment key={node.id}>
                <div className={`p-4 rounded-2xl bg-zinc-900/90 border ${node.border} text-center flex flex-col items-center justify-center space-y-1.5 shadow-md`}>
                  <div className={`p-2 rounded-xl bg-white/5 ${node.color}`}>
                    <Icon size={18} />
                  </div>
                  <div className="text-xs font-bold text-white font-sans leading-tight">
                    {node.title}
                  </div>
                  <div className="text-[10px] font-mono text-zinc-400">
                    {node.sub}
                  </div>
                </div>
                {i < nodes.length - 1 && (
                  <div className="hidden sm:flex justify-center text-zinc-600">
                    <ArrowRight size={14} className="text-zinc-600" />
                  </div>
                )}
              </React.Fragment>
            );
          })}
        </div>
      </div>
    );
  }

  return null;
}
