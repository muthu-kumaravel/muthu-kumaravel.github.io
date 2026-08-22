import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Camera, MapPin, Plus } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import { Badge } from './ui/Badge';

const GalleryCard = React.memo(({ photo, onClick, index }) => {
  const [loaded, setLoaded] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.4, delay: (index % 3) * 0.1 }}
      onClick={onClick}
      className="break-inside-avoid relative rounded-3xl overflow-hidden cursor-zoom-in group border border-white/10 bg-zinc-950/60 shadow-lg mb-5"
    >
      {/* Skeleton Shimmer Loader */}
      {!loaded && (
        <div className="w-full h-64 bg-zinc-900 animate-pulse flex items-center justify-center">
          <Camera className="text-zinc-700 animate-pulse" size={24} />
        </div>
      )}

      <img
        src={photo.src}
        alt={photo.alt || "Photography item"}
        loading="lazy"
        onLoad={() => setLoaded(true)}
        className={`w-full h-auto object-cover transform group-hover:scale-105 transition-all duration-700 ease-out ${
          loaded ? 'opacity-100' : 'opacity-0 h-0'
        }`}
      />

      {/* Hover Dark Vignette & Glass HUD */}
      {loaded && (
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-5">
          <div className="space-y-1.5 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
            <div className="flex items-center justify-between text-white font-mono text-xs">
              <span className="font-bold flex items-center gap-1.5 text-blue-400">
                <Camera size={13} /> {photo.camera}
              </span>
              <span className="text-[10px] text-zinc-400 uppercase tracking-wider">
                {photo.category}
              </span>
            </div>

            <div className="flex items-center gap-3 text-zinc-300 font-mono text-[11px]">
              <span>{photo.aperture}</span>
              <span>•</span>
              <span>{photo.shutter}</span>
              <span>•</span>
              <span>ISO {photo.iso}</span>
            </div>

            {photo.location && (
              <div className="text-[10px] text-zinc-400 font-mono flex items-center gap-1 pt-1">
                <MapPin size={10} /> {photo.location}
              </div>
            )}
          </div>
        </div>
      )}
    </motion.div>
  );
});

export function Gallery({ onOpenLightbox }) {
  const { photography } = portfolioData;
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [visibleCount, setVisibleCount] = useState(9);

  const categories = ["All", "Landscape", "Nature", "Architecture", "Urban", "Culture"];

  const filteredPhotos = selectedCategory === "All"
    ? photography
    : photography.filter(p => p.category === selectedCategory);

  const displayedPhotos = filteredPhotos.slice(0, visibleCount);

  return (
    <section id="gallery" className="py-24 px-4 sm:px-6 max-w-6xl mx-auto relative">
      <div className="text-center max-w-3xl mx-auto mb-14">
        <Badge variant="purple" size="md" dot={true} className="mb-4">
          PHOTOGRAPHY ARCHIVE
        </Badge>
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white mb-4">
          Visual Gallery
        </h2>
        <p className="text-base sm:text-lg text-zinc-400 font-light">
          Moments captured across coastlines, architecture, and urban landscapes in high fidelity.
        </p>
      </div>

      {/* Category Pills */}
      <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
        {categories.map((cat) => {
          const isSelected = selectedCategory === cat;
          return (
            <button
              key={cat}
              onClick={() => {
                setSelectedCategory(cat);
                setVisibleCount(9);
              }}
              className={`px-4 py-2 rounded-full text-xs font-semibold transition-all duration-200 ${
                isSelected
                  ? 'bg-white text-black shadow-[0_0_16px_rgba(255,255,255,0.3)] scale-105'
                  : 'bg-white/5 text-zinc-400 hover:text-white hover:bg-white/10 border border-white/5'
              }`}
            >
              {cat}
            </button>
          );
        })}
      </div>

      {/* Photography Masonry Columns with Skeleton Placeholders */}
      <div className="columns-1 sm:columns-2 lg:columns-3 gap-5">
        {displayedPhotos.map((photo, index) => {
          const realIndex = photography.findIndex(p => p.id === photo.id);

          return (
            <GalleryCard
              key={photo.id}
              photo={photo}
              index={index}
              onClick={() => onOpenLightbox(realIndex >= 0 ? realIndex : 0)}
            />
          );
        })}
      </div>

      {/* Load More Button */}
      {visibleCount < filteredPhotos.length && (
        <div className="mt-14 flex justify-center">
          <button
            onClick={() => setVisibleCount(prev => prev + 6)}
            className="flex items-center gap-2 px-8 py-3.5 rounded-full bg-zinc-900/80 hover:bg-white text-zinc-300 hover:text-black border border-white/10 hover:border-transparent font-mono text-xs tracking-wider uppercase transition-all duration-300 shadow-xl hover:scale-105"
          >
            <Plus size={14} />
            <span>Load More Photos ({filteredPhotos.length - visibleCount} remaining)</span>
          </button>
        </div>
      )}
    </section>
  );
}
