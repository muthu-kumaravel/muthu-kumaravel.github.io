import React from 'react';

export function Badge({ 
  children, 
  variant = "blue", 
  size = "md",
  dot = false,
  className = "" 
}) {
  const variantStyles = {
    blue: "bg-blue-500/10 text-blue-400 border-blue-500/20 shadow-[0_0_12px_rgba(59,130,246,0.15)]",
    purple: "bg-purple-500/10 text-purple-400 border-purple-500/20 shadow-[0_0_12px_rgba(168,85,247,0.15)]",
    green: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20 shadow-[0_0_12px_rgba(16,185,129,0.15)]",
    amber: "bg-amber-500/10 text-amber-400 border-amber-500/20 shadow-[0_0_12px_rgba(245,158,11,0.15)]",
    rose: "bg-rose-500/10 text-rose-400 border-rose-500/20 shadow-[0_0_12px_rgba(244,63,94,0.15)]",
    zinc: "bg-zinc-800/80 text-zinc-300 border-white/10",
  };

  const dotStyles = {
    blue: "bg-blue-400 shadow-[0_0_8px_#60a5fa]",
    purple: "bg-purple-400 shadow-[0_0_8px_#c084fc]",
    green: "bg-emerald-400 shadow-[0_0_8px_#34d399]",
    amber: "bg-amber-400 shadow-[0_0_8px_#fbbf24]",
    rose: "bg-rose-400 shadow-[0_0_8px_#fb7185]",
    zinc: "bg-zinc-400",
  };

  const sizeStyles = {
    sm: "px-2.5 py-0.5 text-[10px] gap-1.5",
    md: "px-3 py-1 text-xs gap-2",
    lg: "px-4 py-1.5 text-sm gap-2.5",
  };

  return (
    <span className={`inline-flex items-center font-mono font-medium rounded-full border tracking-wide uppercase ${variantStyles[variant] || variantStyles.zinc} ${sizeStyles[size] || sizeStyles.md} ${className}`}>
      {dot && (
        <span className={`w-1.5 h-1.5 rounded-full animate-pulse ${dotStyles[variant] || dotStyles.zinc}`} />
      )}
      {children}
    </span>
  );
}
