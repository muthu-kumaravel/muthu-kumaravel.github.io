import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight, Camera, MapPin, Eye } from 'lucide-react';

export function Lightbox({ images, initialIndex, onClose }) {
  const [currentIndex, setCurrentIndex] = useState(initialIndex || 0);
  const [showHud, setShowHud] = useState(true);

  const currentPhoto = images[currentIndex] || images[0];

  const handlePrev = useCallback(() => {
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : images.length - 1));
  }, [images.length]);

  const handleNext = useCallback(() => {
    setCurrentIndex((prev) => (prev < images.length - 1 ? prev + 1 : 0));
  }, [images.length]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') handlePrev();
      if (e.key === 'ArrowRight') handleNext();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handlePrev, handleNext, onClose]);

  // Touch Swipe Gesture
  const [touchStart, setTouchStart] = useState(null);
  const handleTouchStart = (e) => setTouchStart(e.targetTouches[0].clientX);
  const handleTouchEnd = (e) => {
    if (!touchStart) return;
    const touchEnd = e.changedTouches[0].clientX;
    const diff = touchStart - touchEnd;
    if (diff > 50) handleNext();
    if (diff < -50) handlePrev();
    setTouchStart(null);
  };

  return (
    <AnimatePresence>
      <div 
        className="fixed inset-0 z-[120] bg-black/95 backdrop-blur-3xl flex items-center justify-center select-none"
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        {/* Top Floating Bar */}
        <div className="absolute top-6 inset-x-6 z-20 flex items-center justify-between pointer-events-none">
          <div className="flex items-center gap-3 pointer-events-auto">
            <span className="px-3 py-1 rounded-full bg-white/10 backdrop-blur-md text-xs font-mono text-white border border-white/10">
              {currentIndex + 1} / {images.length}
            </span>
            <span className="hidden sm:inline-block text-xs font-mono text-zinc-400">
              {currentPhoto.category}
            </span>
          </div>

          <div className="flex items-center gap-2 pointer-events-auto">
            <button
              onClick={() => setShowHud(!showHud)}
              className="p-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white backdrop-blur-md transition-colors"
              title="Toggle Camera EXIF"
            >
              <Eye size={18} />
            </button>
            <button
              onClick={onClose}
              className="p-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white backdrop-blur-md transition-colors"
              aria-label="Close Lightbox"
            >
              <X size={18} />
            </button>
          </div>
        </div>

        {/* Previous & Next Desktop Arrows */}
        <button
          onClick={handlePrev}
          aria-label="Previous photo"
          className="hidden md:flex absolute left-6 z-20 p-3.5 rounded-full bg-white/10 hover:bg-white/25 text-white backdrop-blur-md transition-all hover:scale-110"
        >
          <ChevronLeft size={24} />
        </button>

        <button
          onClick={handleNext}
          aria-label="Next photo"
          className="hidden md:flex absolute right-6 z-20 p-3.5 rounded-full bg-white/10 hover:bg-white/25 text-white backdrop-blur-md transition-all hover:scale-110"
        >
          <ChevronRight size={24} />
        </button>

        {/* Main Photo Display */}
        <div className="relative max-w-5xl max-h-[80vh] p-4 flex items-center justify-center">
          <motion.img
            key={currentPhoto.id}
            src={currentPhoto.src}
            alt={currentPhoto.alt || "Photograph"}
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.98 }}
            transition={{ duration: 0.3 }}
            className="max-h-[75vh] max-w-full w-auto object-contain rounded-2xl shadow-2xl border border-white/10"
          />
        </div>

        {/* Docked EXIF HUD Panel */}
        <AnimatePresence>
          {showHud && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              className="absolute bottom-6 inset-x-4 max-w-lg mx-auto z-20 p-4 rounded-2xl bg-zinc-950/85 backdrop-blur-2xl border border-white/15 shadow-2xl text-center"
            >
              <div className="flex items-center justify-between text-xs font-mono text-white mb-2">
                <span className="font-bold flex items-center gap-1.5 text-blue-400">
                  <Camera size={14} /> {currentPhoto.camera}
                </span>
                {currentPhoto.location && (
                  <span className="text-zinc-400 flex items-center gap-1">
                    <MapPin size={12} /> {currentPhoto.location}
                  </span>
                )}
              </div>

              <div className="flex items-center justify-center gap-4 text-zinc-300 font-mono text-xs pt-1 border-t border-white/5">
                <span>{currentPhoto.aperture}</span>
                <span>•</span>
                <span>{currentPhoto.shutter}</span>
                <span>•</span>
                <span>ISO {currentPhoto.iso}</span>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </AnimatePresence>
  );
}
