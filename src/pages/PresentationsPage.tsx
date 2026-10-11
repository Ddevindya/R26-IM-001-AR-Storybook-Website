import React, { useState } from 'react';
import { 
  Presentation, 
  Download, 
  Eye, 
  Calendar, 
  Users, 
  Clock, 
  FileCheck, 
  X,
  Maximize2,
  FileCode,
  Info
} from 'lucide-react';
import { RESEARCH_PRESENTATIONS } from '../data/presentationsData';
import { SectionHeader } from '../components/common/SectionHeader';
import { Badge } from '../components/common/Badge';
import { PresentationRecord } from '../types';

export const PresentationsPage: React.FC = () => {
  const [selectedPresentation, setSelectedPresentation] = useState<PresentationRecord | null>(null);

  return (
    <div className="min-h-screen bg-white pt-28 pb-20">
      {/* Header */}
      <div className="bg-gradient-to-b from-[#DCFCE7]/50 via-[#F7FBF8] to-white py-14 sm:py-20 border-b border-emerald-900/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 mb-3">
              <Badge variant="forest" size="md">
                Evaluation Presentations
              </Badge>
              <span className="text-xs font-mono text-slate-500">
                SLIIT Academic Milestones
              </span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#172B26] tracking-tight leading-tight">
              Research Presentations
            </h1>
            <p className="mt-4 text-base sm:text-lg text-[#4A6B61] leading-relaxed">
              Official slide decks and evaluation defenses presented before the SLIIT Academic Review Board, covering our proposal defense, progress reviews, and integrated system evaluations.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 space-y-12">
        {/* Three-Column Card Grid (PP, PP1, PP2) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {RESEARCH_PRESENTATIONS.map((pres) => (
            <div
              key={pres.id}
              className="rounded-3xl bg-white border border-emerald-900/10 hover:border-[#166534]/40 hover:shadow-xl transition-all duration-300 flex flex-col justify-between overflow-hidden group"
            >
              <div>
                {/* Top Cover Visual Stage */}
                <div className="relative h-56 bg-gradient-to-br from-[#DCFCE7]/60 via-[#F7FBF8] to-[#DCFCE7]/40 p-5 flex flex-col justify-between border-b border-emerald-100 overflow-hidden">
                  <div className="flex items-center justify-between z-10">
                    <span className="px-2.5 py-1 rounded-lg bg-[#166534] text-white text-[11px] font-mono font-bold shadow-2xs">
                      {pres.code}
                    </span>
                    <Badge variant="mint" size="sm">
                      {pres.format}
                    </Badge>
                  </div>

                  {/* Representative Slide Cover Visual */}
                  <div className="flex flex-col items-center justify-center my-auto text-center z-10">
                    <div className="w-14 h-14 rounded-2xl bg-white shadow-md flex items-center justify-center text-2xl text-[#166534] mb-2 group-hover:scale-105 transition-transform">
                      <Presentation className="w-7 h-7" />
                    </div>
                    <span className="text-[11px] font-mono font-bold text-[#166534]">
                      R26-IM-001 • SLIIT 2026
                    </span>
                    <span className="text-xs font-bold text-[#172B26] line-clamp-1 mt-0.5">
                      {pres.title}
                    </span>
                  </div>

                  <div className="flex items-center justify-between text-[10px] text-[#4A6B61] z-10 bg-white/80 backdrop-blur-xs px-2.5 py-1 rounded-md">
                    <span>{pres.date}</span>
                    <button
                      onClick={() => setSelectedPresentation(pres)}
                      className="text-[#166534] font-bold hover:underline flex items-center gap-1 cursor-pointer"
                    >
                      <Maximize2 className="w-3 h-3" />
                      Preview Cover
                    </button>
                  </div>
                </div>

                {/* Body Details */}
                <div className="p-6 space-y-3">
                  <div>
                    <h3 className="text-base font-bold text-[#172B26] group-hover:text-[#166534] transition-colors leading-snug">
                      {pres.title}
                    </h3>
                    <span className="text-xs font-semibold text-[#22A06B] block mt-0.5">
                      {pres.subtitle}
                    </span>
                  </div>

                  <p className="text-xs text-[#4A6B61] leading-relaxed">
                    {pres.description}
                  </p>

                  <div className="pt-2 border-t border-slate-100 space-y-1">
                    <span className="text-[10px] uppercase font-bold text-slate-400 block">
                      Presenting Researchers
                    </span>
                    <div className="flex flex-wrap gap-1">
                      {pres.presenters.map((p, idx) => (
                        <span
                          key={idx}
                          className="text-[10px] font-medium text-slate-600 bg-[#F7FBF8] px-2 py-0.5 rounded border border-slate-200/60"
                        >
                          {p.split(' ')[0]} {p.split(' ')[1]}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Card Footer Actions */}
              <div className="p-4 px-6 bg-[#F7FBF8] border-t border-emerald-900/10 flex items-center justify-between">
                <span className="text-[11px] font-medium text-slate-500">
                  Status: <strong className="text-[#166534]">{pres.status}</strong>
                </span>

                {pres.isAvailable ? (
                  <a
                    href={pres.downloadUrl || '#'}
                    download
                    onClick={(e) => {
                      e.preventDefault();
                      alert(`Downloading slide deck: ${pres.title} (${pres.fileSize || 'PowerPoint'}).`);
                    }}
                    className="px-3 py-1.5 rounded-xl text-xs font-bold bg-[#166534] hover:bg-[#14532D] text-white shadow-2xs transition-all flex items-center gap-1.5 cursor-pointer"
                  >
                    <Download className="w-3.5 h-3.5" />
                    <span>Download</span>
                  </a>
                ) : (
                  <span className="text-xs font-semibold text-slate-400 flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    Coming soon
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Developer Guidance Box */}
        <section className="p-6 sm:p-7 rounded-3xl bg-[#F7FBF8] border border-emerald-900/10 text-xs text-[#4A6B61] space-y-2">
          <div className="flex items-center gap-2 font-bold text-[#172B26]">
            <Info className="w-4 h-4 text-[#166534]" />
            <span>Presentations Asset Placement Notice</span>
          </div>
          <p className="leading-relaxed">
            Actual slide files (PowerPoint <code>.pptx</code> or <code>.pdf</code>) can be stored in <code>public/presentations/</code> and cover thumbnail images in <code>public/images/presentations/</code>. Entries and availability toggles are configured in <code>src/data/presentationsData.ts</code>.
          </p>
        </section>
      </div>

      {/* Cover Modal */}
      {selectedPresentation && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#172B26]/60 backdrop-blur-sm">
          <div className="relative w-full max-w-lg bg-white rounded-3xl p-6 sm:p-8 shadow-2xl border border-slate-100 overflow-hidden">
            <button
              onClick={() => setSelectedPresentation(null)}
              className="absolute top-4 right-4 p-2 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 transition-colors"
              aria-label="Close presentation cover modal"
            >
              <X className="w-4 h-4" />
            </button>

            <span className="text-xs font-bold font-mono text-[#166534] block mb-1">
              {selectedPresentation.code} • SLIIT Faculty of Computing
            </span>
            <h3 className="text-lg font-bold text-[#172B26] mb-1">
              {selectedPresentation.title}
            </h3>
            <p className="text-xs text-[#22A06B] font-semibold mb-4">
              {selectedPresentation.subtitle}
            </p>

            <div className="h-44 rounded-2xl bg-gradient-to-br from-[#DCFCE7] via-[#F7FBF8] to-[#DCFCE7] flex flex-col items-center justify-center mb-4 text-center p-4 border border-emerald-100">
              <Presentation className="w-12 h-12 text-[#166534] mb-2" />
              <p className="text-xs font-bold text-[#172B26]">
                Design and Evaluation of an Augmented Reality Storybook
              </p>
              <span className="text-[10px] text-[#4A6B61] mt-1 font-mono">
                Project ID: R26-IM-001 • Date: {selectedPresentation.date}
              </span>
            </div>

            <p className="text-xs text-[#4A6B61] leading-relaxed mb-6">
              {selectedPresentation.description}
            </p>

            <div className="flex justify-end gap-2">
              <button
                onClick={() => setSelectedPresentation(null)}
                className="px-4 py-2 rounded-xl text-xs font-bold bg-slate-100 text-slate-700 hover:bg-slate-200"
              >
                Close Preview
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
