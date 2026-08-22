import React, { useEffect, useState, useRef } from 'react';
import { useInView } from 'framer-motion';

export function NumberTicker({ value, className = "" }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [displayValue, setDisplayValue] = useState(value);

  useEffect(() => {
    if (!isInView) return;

    // Parse numeric value and suffix/prefix
    const match = value.match(/([\d,.]+)/);
    if (!match) {
      return;
    }

    const rawNumStr = match[0].replace(/,/g, '');
    const targetNum = parseFloat(rawNumStr);
    const prefix = value.substring(0, match.index);
    const suffix = value.substring(match.index + match[0].length);

    const isFloat = rawNumStr.includes('.');
    const decimals = isFloat ? rawNumStr.split('.')[1].length : 0;

    let start = 0;
    const duration = 1200; // ms
    const startTime = performance.now();
    let animationFrameId;

    const updateCounter = (currentTime) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      // Apple easeOutExpo curve
      const easeProgress = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      const current = start + (targetNum - start) * easeProgress;

      let formattedCurrent;
      if (decimals > 0) {
        formattedCurrent = current.toFixed(decimals);
      } else {
        formattedCurrent = Math.floor(current).toLocaleString('en-US');
      }

      setDisplayValue(`${prefix}${formattedCurrent}${suffix}`);

      if (progress < 1) {
        animationFrameId = requestAnimationFrame(updateCounter);
      } else {
        setDisplayValue(value);
      }
    };

    animationFrameId = requestAnimationFrame(updateCounter);
    return () => {
      if (animationFrameId) cancelAnimationFrame(animationFrameId);
    };
  }, [isInView, value]);

  return (
    <span ref={ref} className={className}>
      {displayValue}
    </span>
  );
}
