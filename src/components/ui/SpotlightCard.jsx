import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';

export function SpotlightCard({ 
  children, 
  className = "", 
  spotlightColor = "rgba(41, 151, 255, 0.12)", 
  borderColor = "rgba(255, 255, 255, 0.08)",
  hoverBorderColor = "rgba(255, 255, 255, 0.25)",
  onClick = null,
  ...props 
}) {
  const cardRef = useRef(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={onClick}
      className={`relative rounded-3xl overflow-hidden transition-all duration-300 ${
        onClick ? 'cursor-pointer' : ''
      } ${className}`}
      style={{
        backgroundColor: '#0a0a0d',
        border: `1px solid ${isHovered ? hoverBorderColor : borderColor}`,
      }}
      {...props}
    >
      {/* Dynamic Cursor Spotlight Effect */}
      <div
        className="pointer-events-none absolute -inset-px transition-opacity duration-300"
        style={{
          opacity: isHovered ? 1 : 0,
          background: `radial-gradient(400px circle at ${mousePos.x}px ${mousePos.y}px, ${spotlightColor}, transparent 70%)`,
        }}
      />

      {/* Top Specular Line (Apple Unibody Light Refraction) */}
      <div 
        className="pointer-events-none absolute top-0 left-8 right-8 h-[1px] transition-opacity duration-300"
        style={{
          background: 'linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.25), transparent)',
          opacity: isHovered ? 1 : 0.4
        }}
      />

      {/* Content Container */}
      <div className="relative z-10 h-full">
        {children}
      </div>
    </motion.div>
  );
}
