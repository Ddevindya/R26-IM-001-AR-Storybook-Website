import React from 'react';
import { School, Sparkles } from 'lucide-react';
import { PROJECT_INFO } from '../../data/projectData';

export const UniversityBrandingBand: React.FC = () => {
  return (
    <section className="w-full bg-[#F7FBF8] border-y border-emerald-900/10 py-5 sm:py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 md:gap-8 text-center md:text-left">
          {/* Left: Project Identifier & Category */}
          <div className="flex items-center gap-2.5">
            <span className="px-2.5 py-1 rounded-md bg-[#DCFCE7] text-[#166534] text-xs font-mono font-bold tracking-wider border border-emerald-300/60">
              {PROJECT_INFO.id}
            </span>
            <span className="text-xs font-bold uppercase tracking-wider text-[#172B26]/80">
              Undergraduate Research Exhibition
            </span>
          </div>

          {/* Center: Department & Faculty */}
          <div className="flex items-center gap-2 text-xs font-medium text-[#4A6B61]">
            <span className="font-semibold text-[#172B26]">
              Department of Interactive Media
            </span>
            <span className="hidden sm:inline text-slate-300">•</span>
            <span className="hidden sm:inline text-[#4A6B61]">
              Faculty of Computing
            </span>
          </div>

          {/* Right: Authentic SLIIT Crest & Institutional Attribution (Original Navy & Orange Colors) */}
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-white border border-slate-200/80 shadow-2xs">
              {/* Authentic SLIIT Logo Crest Representation in Original Brand Colors (#002B49 Navy & #E87722 Orange) */}
              <svg className="w-6 h-6 shrink-0" viewBox="0 0 36 36" fill="none" aria-label="SLIIT Official Logo">
                <rect width="36" height="36" rx="8" fill="#002B49" />
                {/* SLIIT Grid / Crest Blocks in Orange and White */}
                <rect x="7" y="7" width="9" height="9" rx="2" fill="#E87722" />
                <rect x="20" y="7" width="9" height="9" rx="2" fill="#FFFFFF" />
                <rect x="7" y="20" width="9" height="9" rx="2" fill="#FFFFFF" />
                <rect x="20" y="20" width="9" height="9" rx="2" fill="#E87722" />
                <circle cx="18" cy="18" r="2.5" fill="#002B49" />
              </svg>
              <div className="text-left">
                <span className="text-[11px] font-black tracking-tight text-[#002B49] block leading-none">
                  SLIIT
                </span>
                <span className="text-[9px] font-semibold text-[#64748B] tracking-tight block">
                  Sri Lanka Institute of Information Technology
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
