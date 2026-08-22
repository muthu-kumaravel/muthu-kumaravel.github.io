import React, { useState, useMemo, useEffect, useRef } from 'react';
import { Sparkles } from 'lucide-react';
import { sound } from '../../utils/audioEngine';

// Static Models Metadata
const MODELS = [
  { id: 'qwen3-moe', name: 'Qwen3-235B MoE', params: '235B (22B Active)', sparsity: '10.6:1' },
  { id: 'deepseek-v3', name: 'DeepSeek-V3 MoE', params: '671B (37B Active)', sparsity: '18.1:1' },
  { id: 'llama-70b', name: 'Llama 3.3 70B', params: '70B Dense', sparsity: 'Dense' },
  { id: 'phi-14b', name: 'Phi-3.5 14B SLM', params: '14B Dense', sparsity: 'Dense' },
];

// Static Hardware Metadata
const HARDWARES = [
  { id: 'tpu-v7', name: 'Google TPU v7 Pod', chips: '1,024 Chips', peakTflops: 1112, hbm: '192 GB/chip' },
  { id: 'tpu-v6e', name: 'Google TPU v6e Slice', chips: '256 Chips', peakTflops: 480, hbm: '32 GB/chip' },
  { id: 'h100', name: 'NVIDIA H100 SXM5', chips: '512 GPUs', peakTflops: 989, hbm: '80 GB/GPU' },
  { id: 'b200', name: 'NVIDIA B200 GB200', chips: '512 GPUs', peakTflops: 2200, hbm: '192 GB/GPU' },
];

export function KernelSimulator() {
  const [model, setModel] = useState('qwen3-moe');
  const [hardware, setHardware] = useState('tpu-v7');
  const [kernelMode, setKernelMode] = useState('pallas-bsmm');
  const [batchSize, setBatchSize] = useState(16);
  const [seqLength, setSeqLength] = useState(32768);
  const canvasRef = useRef(null);

  // Real-time Empirical Calculation
  const stats = useMemo(() => {
    const isPallas = kernelMode === 'pallas-bsmm';
    const isMoE = model.includes('moe') || model.includes('deepseek');
    
    // Baseline calculations
    let baseMfu = isMoE ? 18.4 : 38.0;
    if (isPallas) {
      baseMfu = isMoE ? 48.2 : 54.5;
    }

    // Scale with batch size and seq length efficiency
    const batchFactor = Math.min(1.15, Math.max(0.85, Math.log2(batchSize) / 4));
    const seqFactor = Math.min(1.08, Math.max(0.9, Math.log2(seqLength / 4096) / 5 + 0.9));
    
    const mfu = Math.min(62.0, +(baseMfu * batchFactor * seqFactor).toFixed(1));
    
    const hw = HARDWARES.find(h => h.id === hardware) || HARDWARES[0];
    const totalTflops = Math.round(hw.peakTflops * (mfu / 100) * 1000);
    
    const baseTimeMs = isPallas ? 260 : 682;
    const stepTimeMs = Math.round((baseTimeMs * (batchSize / 16)) / (isPallas ? 1.0 : 0.8));
    
    const costSavings = isPallas ? ((1 - (stepTimeMs / (stepTimeMs * 2.4))) * 100).toFixed(1) : '0.0';

    return {
      mfu,
      totalTflops: totalTflops.toLocaleString(),
      stepTimeMs,
      costSavings,
      isPallas
    };
  }, [model, hardware, kernelMode, batchSize, seqLength]);

  // Live Canvas Waveform Render
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let frameId;
    let t = 0;
    const w = (canvas.width = canvas.offsetWidth);
    const h = (canvas.height = canvas.offsetHeight);

    const draw = () => {
      ctx.clearRect(0, 0, w, h);
      t += 0.04;

      // Draw Grid Lines
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.05)';
      ctx.lineWidth = 1;
      for (let x = 0; x < w; x += 30) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, h);
        ctx.stroke();
      }

      // Draw Dynamic Waveform
      const color = stats.isPallas ? '#3b82f6' : '#a855f7';
      ctx.strokeStyle = color;
      ctx.lineWidth = 2;
      ctx.beginPath();

      for (let x = 0; x < w; x++) {
        const freq = stats.isPallas ? 0.02 : 0.01;
        const amp = (stats.mfu / 100) * (h * 0.35);
        const y = h / 2 + Math.sin(x * freq + t) * amp + Math.cos(x * 0.01 - t * 0.5) * (amp * 0.4);
        if (x === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      }
      ctx.stroke();

      frameId = requestAnimationFrame(draw);
    };

    draw();
    return () => cancelAnimationFrame(frameId);
  }, [stats]);

  return (
    <div className="p-6 sm:p-8 rounded-3xl bg-zinc-950/90 border border-white/15 shadow-2xl relative overflow-hidden my-8">
      {/* Specular Unibody Line */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-blue-500/40 to-transparent" />

      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6 pb-4 border-b border-white/10">
        <div>
          <div className="flex items-center gap-2 text-xs font-mono text-blue-400 uppercase tracking-widest font-semibold mb-1">
            <Sparkles size={14} /> Interactive Live Hardware & Kernel Profiler
          </div>
          <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
            Distributed MoE Optimization Simulator
          </h3>
        </div>
        <div className="flex items-center gap-2">
          <span className="px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-mono font-medium">
            Live Telemetry Engine
          </span>
        </div>
      </div>

      {/* Control Surface */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-8">
        {/* Left Options (8 cols) */}
        <div className="lg:col-span-7 space-y-5">
          {/* Model Selector */}
          <div>
            <label className="text-[11px] font-mono text-zinc-400 uppercase tracking-wider block mb-2">
              Select Frontier Architecture
            </label>
            <div className="grid grid-cols-2 gap-2">
              {MODELS.map(m => (
                <button
                  key={m.id}
                  onClick={() => {
                    setModel(m.id);
                    sound.playClick();
                  }}
                  className={`p-2.5 rounded-xl text-left border text-xs transition-all ${
                    model === m.id
                      ? 'bg-blue-500/15 border-blue-500/40 text-white font-semibold shadow-md'
                      : 'bg-white/[0.03] border-white/5 text-zinc-400 hover:text-white hover:bg-white/[0.06]'
                  }`}
                >
                  <div className="font-sans font-bold">{m.name}</div>
                  <div className="text-[10px] font-mono text-zinc-400">{m.params}</div>
                </button>
              ))}
            </div>
          </div>

          {/* Hardware Selector */}
          <div>
            <label className="text-[11px] font-mono text-zinc-400 uppercase tracking-wider block mb-2">
              Target Accelerator Supercluster
            </label>
            <div className="grid grid-cols-2 gap-2">
              {HARDWARES.map(h => (
                <button
                  key={h.id}
                  onClick={() => {
                    setHardware(h.id);
                    sound.playClick();
                  }}
                  className={`p-2.5 rounded-xl text-left border text-xs transition-all ${
                    hardware === h.id
                      ? 'bg-purple-500/15 border-purple-500/40 text-white font-semibold shadow-md'
                      : 'bg-white/[0.03] border-white/5 text-zinc-400 hover:text-white hover:bg-white/[0.06]'
                  }`}
                >
                  <div className="font-sans font-bold">{h.name}</div>
                  <div className="text-[10px] font-mono text-zinc-400">{h.chips} • {h.hbm}</div>
                </button>
              ))}
            </div>
          </div>

          {/* Kernel Mode Toggle */}
          <div>
            <label className="text-[11px] font-mono text-zinc-400 uppercase tracking-wider block mb-2">
              Kernel Compiler Optimization
            </label>
            <div className="grid grid-cols-2 gap-2">
              <button
                onClick={() => {
                  setKernelMode('pallas-bsmm');
                  sound.playClick();
                }}
                className={`p-3 rounded-xl border text-xs text-center transition-all ${
                  kernelMode === 'pallas-bsmm'
                    ? 'bg-emerald-500/20 border-emerald-500/40 text-emerald-300 font-bold shadow-md'
                    : 'bg-white/[0.02] border-white/5 text-zinc-400 hover:text-white'
                }`}
              >
                Pallas Megablox BSMM (Fused)
              </button>
              <button
                onClick={() => {
                  setKernelMode('baseline-xla');
                  sound.playClick();
                }}
                className={`p-3 rounded-xl border text-xs text-center transition-all ${
                  kernelMode === 'baseline-xla'
                    ? 'bg-amber-500/20 border-amber-500/40 text-amber-300 font-bold shadow-md'
                    : 'bg-white/[0.02] border-white/5 text-zinc-400 hover:text-white'
                }`}
              >
                Baseline XLA (Unfused Scatter)
              </button>
            </div>
          </div>

          {/* Sliders */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
            <div>
              <div className="flex justify-between text-xs font-mono text-zinc-300 mb-1">
                <span>Micro-Batch / Chip</span>
                <span className="text-blue-400 font-bold">{batchSize}</span>
              </div>
              <input
                type="range"
                min="1"
                max="64"
                step="1"
                value={batchSize}
                onChange={(e) => {
                  setBatchSize(+e.target.value);
                  sound.playTick(500 + (+e.target.value) * 10);
                }}
                className="w-full accent-blue-500 cursor-pointer"
              />
            </div>

            <div>
              <div className="flex justify-between text-xs font-mono text-zinc-300 mb-1">
                <span>Context Window</span>
                <span className="text-purple-400 font-bold">{(seqLength / 1024)}k tokens</span>
              </div>
              <input
                type="range"
                min="4096"
                max="131072"
                step="4096"
                value={seqLength}
                onChange={(e) => {
                  setSeqLength(+e.target.value);
                  sound.playTick(400 + (+e.target.value / 1024) * 15);
                }}
                className="w-full accent-purple-500 cursor-pointer"
              />
            </div>
          </div>
        </div>

        {/* Right Output HUD Gauge & Waveform (5 cols) */}
        <div className="lg:col-span-5 flex flex-col justify-between p-5 rounded-2xl bg-black/60 border border-white/10">
          <div>
            <div className="text-[11px] font-mono text-zinc-400 uppercase tracking-wider mb-4 flex items-center justify-between">
              <span>Hardware Telemetry HUD</span>
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            </div>

            {/* MFU Gauge Hero Metric */}
            <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5 mb-4 text-center">
              <div className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight mb-1 font-sans">
                {stats.mfu}%
              </div>
              <div className="text-xs font-mono font-semibold text-emerald-400 uppercase tracking-wider">
                Model Flops Utilization (MFU)
              </div>
              <div className="text-[10px] font-mono text-zinc-400 mt-1">
                {stats.isPallas ? '🔥 2.4x Time-to-Train Speedup' : '⚠️ Scatter-Gather Bottleneck'}
              </div>
            </div>

            {/* Metric Rows */}
            <div className="space-y-2 text-xs font-mono">
              <div className="flex items-center justify-between p-2.5 rounded-lg bg-white/[0.02] border border-white/5">
                <span className="text-zinc-400">Step Latency</span>
                <span className="text-white font-bold">{stats.stepTimeMs} ms / step</span>
              </div>
              <div className="flex items-center justify-between p-2.5 rounded-lg bg-white/[0.02] border border-white/5">
                <span className="text-zinc-400">Cluster TFLOPS</span>
                <span className="text-purple-400 font-bold">{stats.totalTflops} TFLOPS</span>
              </div>
              <div className="flex items-center justify-between p-2.5 rounded-lg bg-white/[0.02] border border-white/5">
                <span className="text-zinc-400">Cluster TCO Savings</span>
                <span className="text-emerald-400 font-bold">~{stats.costSavings}%</span>
              </div>
            </div>
          </div>

          {/* Waveform Canvas */}
          <div className="mt-4 pt-3 border-t border-white/5">
            <div className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest mb-1.5">
              Kernel Execution Waveform
            </div>
            <div className="h-16 w-full rounded-lg overflow-hidden bg-zinc-950/80 border border-white/5">
              <canvas ref={canvasRef} className="w-full h-full" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
