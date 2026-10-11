import React, { useState } from 'react';
import { 
  Smartphone, 
  Sparkles, 
  Compass, 
  Cpu, 
  ArrowRight, 
  CheckCircle2, 
  Layers, 
  FileCode, 
  User, 
  ExternalLink,
  ChevronRight,
  Shield,
  Activity
} from 'lucide-react';
import { RESEARCH_COMPONENTS } from '../data/componentsData';
import { SectionHeader } from '../components/common/SectionHeader';
import { Badge } from '../components/common/Badge';
import { Button } from '../components/common/Button';
import { InteractivePlant } from '../components/common/InteractivePlant';
import { DecisionTreeDemo } from '../components/common/DecisionTreeDemo';
import { FatigueDemo } from '../components/common/FatigueDemo';

export const ComponentsPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('component-01');

  const selectedComp = RESEARCH_COMPONENTS.find((c) => c.id === activeTab) || RESEARCH_COMPONENTS[0];

  return (
    <div className="min-h-screen bg-white pt-28 pb-20">
      {/* Header */}
      <div className="bg-gradient-to-b from-[#F2EDFF]/60 via-[#EAF6FF]/40 to-white py-14 sm:py-20 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 mb-3">
              <Badge variant="purple" size="md">
                Research Architecture Breakdown
              </Badge>
              <span className="text-xs font-mono text-slate-500">
                4 Core Individual Components
              </span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#17243D] tracking-tight leading-tight">
              Research Components
            </h1>
            <p className="mt-4 text-base sm:text-lg text-[#536482] leading-relaxed">
              Explore the four research pillars driving our augmented reality storybook. Each component solves a distinct challenge across child HCI, affective 3D graphics, gamified narrative branching, and IoT simulation.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12">
        {/* Component Selector Tabs */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-12">
          {RESEARCH_COMPONENTS.map((comp) => {
            const isActive = activeTab === comp.id;
            return (
              <button
                key={comp.id}
                onClick={() => setActiveTab(comp.id)}
                className={`p-4 rounded-2xl border text-left transition-all cursor-pointer ${
                  isActive
                    ? 'bg-white border-[#7966E8] shadow-md ring-2 ring-[#7966E8]/20'
                    : 'bg-slate-50 hover:bg-white border-slate-200'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className={`text-[11px] font-mono font-bold ${isActive ? 'text-[#7966E8]' : 'text-slate-400'}`}>
                    COMPONENT {comp.number}
                  </span>
                  <span className={`w-2 h-2 rounded-full ${isActive ? 'bg-[#7966E8]' : 'bg-slate-300'}`} />
                </div>
                <h4 className="text-xs sm:text-sm font-bold text-slate-800 line-clamp-1">
                  {comp.shortTitle}
                </h4>
                <p className="text-[11px] text-slate-500 line-clamp-1 mt-0.5">
                  Lead: {comp.researcher}
                </p>
              </button>
            );
          })}
        </div>

        {/* Selected Component Full Showcase */}
        <div className="space-y-16">
          {/* Main Hero Card for Selected Component */}
          <div className="p-8 sm:p-12 rounded-3xl bg-slate-50 border border-slate-200/90 shadow-xs">
            <div className="flex flex-wrap items-center justify-between gap-4 pb-6 mb-8 border-b border-slate-200">
              <div className="flex items-center gap-3">
                <span className="w-12 h-12 rounded-2xl bg-white border border-slate-200 shadow-2xs flex items-center justify-center text-xl font-black text-[#7966E8] font-mono">
                  {selectedComp.number}
                </span>
                <div>
                  <Badge variant={selectedComp.number === '01' ? 'purple' : selectedComp.number === '02' ? 'green' : selectedComp.number === '03' ? 'amber' : 'blue'} size="sm">
                    {selectedComp.metricsOrFocus}
                  </Badge>
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-[#17243D] mt-1">
                    {selectedComp.title}
                  </h2>
                </div>
              </div>

              {/* Researcher Badge */}
              <div className="p-3 px-4 rounded-2xl bg-white border border-slate-200 shadow-2xs flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-purple-50 text-[#7966E8] flex items-center justify-center text-base font-bold">
                  <User className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] uppercase font-bold text-slate-400 block">
                    Lead Researcher
                  </span>
                  <span className="text-xs sm:text-sm font-bold text-slate-900 block">
                    {selectedComp.researcher}
                  </span>
                  <span className="text-[11px] text-[#7966E8] font-medium block">
                    {selectedComp.role}
                  </span>
                </div>
              </div>
            </div>

            {/* Problem & Objectives Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-10">
              {/* Problem Addressed */}
              <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-2xs">
                <span className="text-xs font-bold uppercase tracking-wider text-rose-500 block mb-2">
                  Problem Addressed
                </span>
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                  {selectedComp.problem}
                </p>
              </div>

              {/* Research Objectives */}
              <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-2xs">
                <span className="text-xs font-bold uppercase tracking-wider text-emerald-600 block mb-2">
                  Key Research Objectives
                </span>
                <div className="space-y-2">
                  {selectedComp.objectives.map((obj, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-slate-700">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                      <span>{obj}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Technical Approach & Code Modules */}
            <div className="p-6 sm:p-8 rounded-2xl bg-white border border-slate-200 shadow-2xs mb-10">
              <span className="text-xs font-bold uppercase tracking-wider text-[#7966E8] block mb-3">
                Technical Approach & Implemented Code Architecture
              </span>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                {selectedComp.technicalApproach.map((item, idx) => (
                  <div key={idx} className="p-3.5 rounded-xl bg-slate-50 border border-slate-100 text-xs text-slate-700 flex items-start gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#7966E8] shrink-0 mt-1.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              {/* Architecture Nodes / C# Classes */}
              <div>
                <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block mb-2">
                  Key C# Class / Firmware Modules
                </span>
                <div className="flex flex-wrap gap-2">
                  {selectedComp.architectureNodes.map((node, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1.5 rounded-xl bg-purple-50 text-purple-700 border border-purple-200 text-xs font-mono font-medium flex items-center gap-1.5"
                    >
                      <FileCode className="w-3.5 h-3.5" />
                      {node}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Key Features & Integration Points */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-10">
              {/* Features List */}
              <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-2xs">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block mb-3">
                  Key Implemented Features
                </span>
                <div className="space-y-2.5">
                  {selectedComp.keyFeatures.map((feat, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-700">
                      <span className="w-5 h-5 rounded-md bg-emerald-100 text-emerald-700 font-bold text-[10px] flex items-center justify-center shrink-0">
                        ✓
                      </span>
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Cross-Component Integration */}
              <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-2xs">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block mb-3">
                  Integration with Other Components
                </span>
                <div className="space-y-2.5">
                  {selectedComp.integrationPoints.map((integ, idx) => (
                    <div key={idx} className="p-2.5 rounded-xl bg-slate-50 border border-slate-100 text-xs text-slate-600 flex items-start gap-2">
                      <ArrowRight className="w-3.5 h-3.5 text-[#7966E8] shrink-0 mt-0.5" />
                      <span>{integ}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Research Contribution Banner */}
            <div className="p-6 rounded-2xl bg-gradient-to-r from-[#EAF6FF] to-[#F2EDFF] border border-[#BFDBFE]/60">
              <span className="text-xs font-bold uppercase tracking-wider text-[#0284C7] block mb-1">
                Academic Research Contribution
              </span>
              <p className="text-sm font-semibold text-slate-900 leading-relaxed">
                {selectedComp.researchContribution}
              </p>
            </div>
          </div>

          {/* Embedded Interactive Demonstration Matching Component */}
          <div>
            <SectionHeader
              badge="Component Prototype Demonstration"
              badgeVariant="green"
              title={`Live Interactive Demonstration: ${selectedComp.shortTitle}`}
              subtitle="Interact with the illustrative web demo reflecting this specific research component's heuristics and behavioral logic."
            />

            {selectedComp.number === '01' && <FatigueDemo />}
            {selectedComp.number === '02' && <InteractivePlant />}
            {selectedComp.number === '03' && <DecisionTreeDemo />}
            {selectedComp.number === '04' && <InteractivePlant />}
          </div>
        </div>
      </div>
    </div>
  );
};
