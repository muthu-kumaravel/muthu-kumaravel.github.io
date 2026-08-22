import React, { useState } from 'react';
import { Volume2, VolumeX } from 'lucide-react';
import { sound } from '../../utils/audioEngine';

export function SoundToggle() {
  const [isAudioActive, setIsAudioActive] = useState(!sound.isMuted);

  const handleToggle = () => {
    const active = sound.toggleMute();
    setIsAudioActive(active);
  };

  return (
    <button
      onClick={handleToggle}
      className={`flex items-center gap-1.5 px-2.5 py-1.5 rounded-full border text-xs font-mono transition-all ${
        isAudioActive
          ? 'bg-blue-500/15 border-blue-500/40 text-blue-400 shadow-[0_0_12px_rgba(59,130,246,0.3)]'
          : 'bg-white/5 border-white/10 text-zinc-400 hover:text-zinc-200'
      }`}
      title={isAudioActive ? "Sound FX Enabled (Click to Mute)" : "Sound FX Muted (Click to Enable)"}
      aria-label="Toggle sound effects"
    >
      {isAudioActive ? (
        <>
          <Volume2 size={13} className="text-blue-400 animate-pulse" />
          <span className="flex items-center gap-0.5 h-2.5">
            <span className="w-0.5 h-2.5 bg-blue-400 rounded-full animate-[pulse_0.6s_ease-in-out_infinite]" />
            <span className="w-0.5 h-1.5 bg-blue-400 rounded-full animate-[pulse_0.8s_ease-in-out_infinite]" />
            <span className="w-0.5 h-3 bg-blue-400 rounded-full animate-[pulse_0.5s_ease-in-out_infinite]" />
          </span>
        </>
      ) : (
        <>
          <VolumeX size={13} />
          <span className="hidden sm:inline text-[10px]">Audio</span>
        </>
      )}
    </button>
  );
}
