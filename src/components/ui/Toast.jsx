import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';

export function Toast({ message, isVisible }) {
  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.95 }}
          transition={{ type: "spring", stiffness: 400, damping: 25 }}
          className="fixed bottom-8 left-1/2 -translate-x-1/2 z-[200] pointer-events-none"
        >
          <div className="flex items-center gap-2.5 px-5 py-3 rounded-full bg-zinc-900/90 text-white border border-white/15 shadow-[0_12px_40px_rgba(0,0,0,0.6)] backdrop-blur-2xl text-xs font-mono">
            <CheckCircle2 size={16} className="text-emerald-400 shrink-0" />
            <span className="font-medium text-zinc-200">{message}</span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
