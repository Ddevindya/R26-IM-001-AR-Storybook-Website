import React, { useState } from 'react';
import { 
  Calendar, 
  CheckCircle2, 
  Clock, 
  Sparkles, 
  ChevronDown, 
  ChevronUp, 
  FileText, 
  Award,
  ArrowRight,
  CircleDot
} from 'lucide-react';
import { RESEARCH_MILESTONES } from '../data/journeyData';
import { SectionHeader } from '../components/common/SectionHeader';
import { Badge } from '../components/common/Badge';

export const JourneyPage: React.FC = () => {
  const [expandedId, setExpandedId] = useState<string | null>('m4-prototyping');

  const toggleExpand = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <div className="min-h-screen bg-white pt-28 pb-20">
      {/* Header */}
      <div className="bg-gradient-to-b from-[#EAF6FF]/60 via-[#F2EDFF]/40 to-white py-14 sm:py-20 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 mb-3">
              <Badge variant="blue" size="md">
                Project Roadmap & Milestones
              </Badge>
              <span className="text-xs font-mono text-slate-500">
                Academic Year 2025/2026
              </span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#17243D] tracking-tight leading-tight">
              Research Journey
            </h1>
            <p className="mt-4 text-base sm:text-lg text-[#536482] leading-relaxed">
              Tracking our iterative progress from exploratory curriculum formulation, proposal defense, and cyber-physical prototyping to upcoming classroom trials and final dissertation defense.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-16">
        {/* Timeline Status Legend */}
        <div className="flex items-center justify-between pb-8 border-b border-slate-200 mb-12">
          <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
            Milestone Progress
          </span>
          <div className="flex items-center gap-4 text-xs font-semibold">
            <span className="flex items-center gap-1.5 text-emerald-700">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
              Completed (Phases 1–3)
            </span>
            <span className="flex items-center gap-1.5 text-[#7966E8]">
              <span className="w-2.5 h-2.5 rounded-full bg-[#7966E8] animate-ping" />
              In Progress (Phases 4–5)
            </span>
            <span className="flex items-center gap-1.5 text-slate-500">
              <span className="w-2.5 h-2.5 rounded-full bg-slate-300" />
              Upcoming (Phases 6–7)
            </span>
          </div>
        </div>

        {/* Vertical Timeline */}
        <div className="relative border-l-2 border-slate-200 ml-4 sm:ml-8 pl-6 sm:pl-10 space-y-10">
          {RESEARCH_MILESTONES.map((milestone) => {
            const isExpanded = expandedId === milestone.id;
            const isCompleted = milestone.status === 'Completed';
            const isInProgress = milestone.status === 'In Progress';

            return (
              <div key={milestone.id} className="relative group">
                {/* Timeline Dot Node */}
                <div
                  className={`absolute -left-[35px] sm:-left-[51px] top-1.5 w-6 h-6 rounded-full border-4 border-white flex items-center justify-center transition-all ${
                    isCompleted
                      ? 'bg-emerald-500 shadow-sm shadow-emerald-200'
                      : isInProgress
                      ? 'bg-[#7966E8] ring-4 ring-purple-100'
                      : 'bg-slate-300'
                  }`}
                >
                  {isCompleted && (
                    <span className="text-white text-[10px] font-bold">✓</span>
                  )}
                </div>

                {/* Milestone Card */}
                <div className="p-6 sm:p-7 rounded-3xl bg-white border border-slate-200 hover:border-slate-300 shadow-2xs hover:shadow-md transition-all">
                  {/* Card Header */}
                  <div
                    onClick={() => toggleExpand(milestone.id)}
                    className="flex flex-wrap items-center justify-between gap-3 cursor-pointer select-none"
                  >
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-[11px] font-mono font-bold text-slate-400">
                          {milestone.phase}
                        </span>
                        <Badge
                          variant={isCompleted ? 'green' : isInProgress ? 'purple' : 'gray'}
                          size="sm"
                        >
                          {milestone.status}
                        </Badge>
                        <span className="text-xs font-semibold text-slate-500 flex items-center gap-1 ml-2">
                          <Calendar className="w-3.5 h-3.5" />
                          {milestone.dateRange}
                        </span>
                      </div>
                      <h3 className="text-base sm:text-lg font-bold text-[#17243D]">
                        {milestone.title}
                      </h3>
                    </div>

                    <button
                      className="p-1.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-600 transition-colors"
                      aria-label="Toggle details"
                    >
                      {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                    </button>
                  </div>

                  {/* Short Description */}
                  <p className="mt-3 text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {milestone.description}
                  </p>

                  {/* Expandable Details */}
                  {isExpanded && (
                    <div className="mt-6 pt-5 border-t border-slate-100 space-y-4">
                      {/* Deliverables */}
                      <div>
                        <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block mb-2">
                          Documented Deliverables:
                        </span>
                        <div className="space-y-1.5">
                          {milestone.deliverables.map((deliv, idx) => (
                            <div key={idx} className="flex items-start gap-2 text-xs text-slate-700">
                              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                              <span>{deliv}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Highlights */}
                      {milestone.highlights && (
                        <div className="p-3.5 rounded-xl bg-purple-50/60 border border-purple-100">
                          <span className="text-[10px] font-bold uppercase tracking-wider text-[#7966E8] block mb-1">
                            Key Milestone Outcomes:
                          </span>
                          <ul className="text-xs text-purple-900 space-y-1">
                            {milestone.highlights.map((hl, idx) => (
                              <li key={idx} className="flex items-center gap-1.5">
                                <span className="w-1.5 h-1.5 rounded-full bg-[#7966E8]" />
                                <span>{hl}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
