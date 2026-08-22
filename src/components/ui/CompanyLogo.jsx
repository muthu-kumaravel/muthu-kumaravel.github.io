import React from 'react';

export function CompanyLogo({ company = '', className = "w-12 h-12" }) {
  const cLower = company.toLowerCase();

  const renderBrandedLogo = () => {
    // 1. Google / Google Cloud
    if (cLower.includes('google')) {
      return (
        <svg viewBox="0 0 24 24" className="w-7 h-7 shrink-0" aria-label="Google Cloud">
          <path
            fill="#4285F4"
            d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
          />
          <path
            fill="#34A853"
            d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
          />
          <path
            fill="#FBBC05"
            d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
          />
          <path
            fill="#EA4335"
            d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
          />
        </svg>
      );
    }

    // 2. Quantiphi (Authentic Gradient Q-Infinity Vector)
    if (cLower.includes('quantiphi')) {
      return (
        <svg viewBox="0 0 36 36" className="w-8 h-8 shrink-0" aria-label="Quantiphi">
          <defs>
            <linearGradient id="quantiphiGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#00E5FF" />
              <stop offset="50%" stopColor="#0088FF" />
              <stop offset="100%" stopColor="#7B00FF" />
            </linearGradient>
          </defs>
          <circle cx="17" cy="17" r="11" fill="none" stroke="url(#quantiphiGrad)" strokeWidth="3.8" strokeLinecap="round" />
          <circle cx="17" cy="17" r="4.5" fill="url(#quantiphiGrad)" />
          <path d="M22 22 L31 31" stroke="url(#quantiphiGrad)" strokeWidth="4.2" strokeLinecap="round" />
        </svg>
      );
    }

    // 3. MulticoreWare (Authentic Multi-Core Processor Silicon Grid Vector)
    if (cLower.includes('multicoreware')) {
      return (
        <svg viewBox="0 0 36 36" className="w-8 h-8 shrink-0" aria-label="MulticoreWare">
          <defs>
            <linearGradient id="mcwGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#10B981" />
              <stop offset="100%" stopColor="#06B6D4" />
            </linearGradient>
          </defs>
          <rect x="5" y="5" width="26" height="26" rx="6" fill="none" stroke="url(#mcwGrad)" strokeWidth="2.5" />
          <rect x="9" y="9" width="7.5" height="7.5" rx="2" fill="url(#mcwGrad)" />
          <rect x="19.5" y="9" width="7.5" height="7.5" rx="2" fill="url(#mcwGrad)" />
          <rect x="9" y="19.5" width="7.5" height="7.5" rx="2" fill="url(#mcwGrad)" />
          <rect x="19.5" y="19.5" width="7.5" height="7.5" rx="2" fill="url(#mcwGrad)" />
          <circle cx="18" cy="18" r="2" fill="#FFFFFF" />
        </svg>
      );
    }

    // 4. ValueLabs (Authentic Geometric Origami Diamond Butterfly Vector)
    if (cLower.includes('valuelabs')) {
      return (
        <svg viewBox="0 0 36 36" className="w-8 h-8 shrink-0" aria-label="ValueLabs">
          <defs>
            <linearGradient id="vlGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#8B5CF6" />
              <stop offset="100%" stopColor="#EC4899" />
            </linearGradient>
            <linearGradient id="vlGrad2" x1="0%" y1="100%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#3B82F6" />
              <stop offset="100%" stopColor="#8B5CF6" />
            </linearGradient>
          </defs>
          <polygon points="18,4 31,18 18,22 18,10" fill="url(#vlGrad1)" />
          <polygon points="18,4 5,18 18,22 18,10" fill="url(#vlGrad2)" />
          <polygon points="18,22 30,32 18,27" fill="url(#vlGrad1)" opacity="0.85" />
          <polygon points="18,22 6,32 18,27" fill="url(#vlGrad2)" opacity="0.85" />
        </svg>
      );
    }

    return null;
  };

  const brandIcon = renderBrandedLogo();

  return (
    <div className={`${className} rounded-2xl bg-zinc-900 dark:bg-zinc-900/90 border border-white/15 dark:border-white/15 p-2 shrink-0 flex items-center justify-center shadow-lg relative overflow-hidden group`}>
      {brandIcon ? (
        brandIcon
      ) : (
        <div className="flex items-center justify-center text-zinc-300 dark:text-zinc-300 text-xs font-mono font-bold">
          {company.slice(0, 2).toUpperCase()}
        </div>
      )}
    </div>
  );
}
