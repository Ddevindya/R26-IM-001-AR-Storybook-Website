
import React from 'react';
import { PROJECT_INFO } from '../../data/projectData';

export const UniversityBrandingBand: React.FC = () => {
  return (
    <section className="w-full border-y border-emerald-900/10 bg-[#F7FBF8]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        <div className="flex flex-col items-center justify-between gap-5 py-5 md:flex-row md:gap-6 md:py-4">

          {/* Project Information */}
          <div className="flex shrink-0 flex-col items-center gap-1.5 md:items-start">

            <span className="rounded-lg border border-emerald-200 bg-[#DCFCE7] px-3 py-1 text-xs font-extrabold tracking-wide text-[#166534]">
              {PROJECT_INFO.id}
            </span>

            <span className="text-[10px] font-bold uppercase tracking-[0.12em] text-[#4A6B61]">
              Undergraduate Research 2026
            </span>

          </div>

          {/* Department Information */}
          <div className="flex min-w-0 flex-col items-center text-center">

            <span className="text-sm font-bold text-[#172B26]">
              Department of Interactive Media
            </span>

            <span className="mt-1 text-xs text-[#4A6B61]">
              Faculty of Computing
            </span>

          </div>

          {/* Official Institutional Logos */}
          <div className="flex shrink-0 items-center justify-center gap-4">

            {/* Interactive Media Logo */}
            <div className="flex h-[64px] w-[112px] items-center justify-center rounded-xl border border-emerald-100 bg-white px-3 shadow-sm sm:w-[120px]">

              <img
                src="/interactive-media-logo.png"
                alt="SLIIT Interactive Media Logo"
                className="max-h-[49px] max-w-full object-contain"
                loading="lazy"
              />

            </div>

            {/* Official SLIIT Logo */}
            <div className="flex h-[64px] w-[112px] items-center justify-center rounded-xl border border-emerald-100 bg-white px-3 shadow-sm sm:w-[120px]">

              <img
                src="/sliit-logo.png"
                alt="SLIIT Official Logo"
                className="max-h-[49px] max-w-full object-contain"
                loading="lazy"
              />

            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
