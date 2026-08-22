import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

export function Modal({ 
  isOpen, 
  onClose, 
  title, 
  badge, 
  children, 
  maxWidth = "max-w-4xl" 
}) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      const handleKeyDown = (e) => {
        if (e.key === 'Escape') onClose();
      };
      window.addEventListener('keydown', handleKeyDown);
      return () => {
        document.body.style.overflow = 'unset';
        window.removeEventListener('keydown', handleKeyDown);
      };
    }
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-3 sm:p-6 md:p-10">
          {/* Frosted Glass Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/80 backdrop-blur-2xl"
          />

          {/* Modal Card Window */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 15 }}
            transition={{ type: "spring", damping: 28, stiffness: 320 }}
            className={`relative w-full ${maxWidth} max-h-[88vh] bg-[#0c0c10] border border-white/15 rounded-3xl shadow-2xl overflow-hidden flex flex-col z-10`}
          >
            {/* Top Light Line */}
            <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/30 to-transparent" />

            {/* Absolute Floating Close Button */}
            <button
              onClick={onClose}
              aria-label="Close dialog"
              className="absolute top-4 right-4 z-30 w-9 h-9 rounded-full bg-zinc-900/90 hover:bg-zinc-800 border border-white/15 flex items-center justify-center text-zinc-400 hover:text-white transition-all hover:scale-105 shadow-md"
            >
              <X size={18} />
            </button>

            {/* Optional Header (only if title or badge is explicitly passed) */}
            {(title || badge) && (
              <div className="flex items-center justify-between px-6 sm:px-8 py-5 border-b border-white/5 bg-zinc-950/40 backdrop-blur-md pr-16">
                <div className="flex items-center gap-3">
                  {badge && <div>{badge}</div>}
                  {title && <h2 className="text-xl md:text-2xl font-bold text-white tracking-tight">{title}</h2>}
                </div>
              </div>
            )}

            {/* Scrollable Content Body */}
            <div className="overflow-y-auto p-5 sm:p-8 custom-scrollbar">
              {children}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
