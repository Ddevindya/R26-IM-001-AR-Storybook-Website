import React, { useState } from 'react';
import { 
  Sparkles, 
  BookOpen, 
  Cpu, 
  Smartphone, 
  Compass, 
  ShieldAlert, 
  Filter, 
  Eye, 
  CheckCircle2, 
  Maximize2,
  X
} from 'lucide-react';
import { SHOWCASE_ITEMS } from '../data/showcaseData';
import { SectionHeader } from '../components/common/SectionHeader';
import { Badge } from '../components/common/Badge';
import { ShowcaseItem } from '../types';

export const ShowcasePage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activeModalItem, setActiveModalItem] = useState<ShowcaseItem | null>(null);

  const categories = [
    'All',
    'AR Storybook Experience',
    '3D Plant Visualization',
    'Interactive Storytelling',
    'Sensor-Based Simulation',
    'Hybrid Interaction Features',
  ];

  const filteredItems = selectedCategory === 'All'
    ? SHOWCASE_ITEMS
    : SHOWCASE_ITEMS.filter((item) => item.category === selectedCategory);

  const getCategoryIcon = (cat: string) => {
    switch (cat) {
      case 'AR Storybook Experience':
        return <BookOpen className="w-4 h-4 text-[#7966E8]" />;
      case '3D Plant Visualization':
        return <Sparkles className="w-4 h-4 text-[#54B987]" />;
      case 'Interactive Storytelling':
        return <Compass className="w-4 h-4 text-[#F59E0B]" />;
      case 'Sensor-Based Simulation':
        return <Cpu className="w-4 h-4 text-[#0284C7]" />;
      case 'Hybrid Interaction Features':
        return <Smartphone className="w-4 h-4 text-[#7966E8]" />;
      default:
        return <Sparkles className="w-4 h-4 text-[#7966E8]" />;
    }
  };

  return (
    <div className="min-h-screen bg-white pt-28 pb-20">
      {/* Header */}
      <div className="bg-gradient-to-b from-[#F2EDFF]/60 via-[#EAF6FF]/40 to-white py-14 sm:py-20 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 mb-3">
              <Badge variant="purple" size="md">
                Demonstrations & Gallery
              </Badge>
              <span className="text-xs font-mono text-slate-500">
                R26-IM-001 Research Artifacts
              </span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#17243D] tracking-tight leading-tight">
              Project Showcase
            </h1>
            <p className="mt-4 text-base sm:text-lg text-[#536482] leading-relaxed">
              Explore visual prototypes, 3D affective shader demonstrations, physical storybook tracking setups, and cyber-physical IoT telemetry stations engineered for our research evaluation.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 space-y-12">
        {/* Category Filter Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
          {categories.map((cat) => {
            const isSelected = selectedCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all cursor-pointer ${
                  isSelected
                    ? 'bg-[#7966E8] text-white shadow-sm shadow-[#7966E8]/30 font-bold'
                    : 'bg-slate-100 hover:bg-slate-200/70 text-slate-700'
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="group rounded-3xl bg-white border border-slate-200 overflow-hidden shadow-2xs hover:shadow-xl hover:border-[#7966E8]/30 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Visual Stage Card */}
                <div className="relative h-56 bg-gradient-to-br from-[#EAF6FF] via-[#F2EDFF]/40 to-[#E2F8EE]/30 p-6 flex flex-col justify-between overflow-hidden border-b border-slate-100">
                  <div className="flex items-center justify-between z-10">
                    <span className="px-2.5 py-1 rounded-lg bg-white/90 backdrop-blur-sm text-[10px] font-bold font-mono text-slate-700 shadow-2xs border border-white">
                      {item.imagePlaceholder.badge}
                    </span>
                    <button
                      onClick={() => setActiveModalItem(item)}
                      className="p-1.5 rounded-lg bg-white/80 hover:bg-white text-slate-600 shadow-2xs transition-colors"
                      title="Inspect artifact"
                    >
                      <Maximize2 className="w-3.5 h-3.5" />
                    </button>
                  </div>

                  {/* Representative Visual Graphic */}
                  <div className="flex flex-col items-center justify-center my-auto text-center z-10">
                    <div className="w-16 h-16 rounded-2xl bg-white shadow-md flex items-center justify-center text-3xl mb-2 group-hover:scale-110 transition-transform">
                      {item.category === 'AR Storybook Experience' ? '📖' :
                       item.category === '3D Plant Visualization' ? '🌱' :
                       item.category === 'Interactive Storytelling' ? '✨' :
                       item.category === 'Sensor-Based Simulation' ? '📡' : '📱'}
                    </div>
                    <span className="text-xs font-bold text-slate-800 line-clamp-1">
                      {item.title}
                    </span>
                  </div>

                  <div className="text-[10px] text-slate-500 line-clamp-1 z-10 text-center bg-white/80 backdrop-blur-xs py-1 px-2 rounded-lg">
                    {item.imagePlaceholder.caption}
                  </div>
                </div>

                {/* Body Details */}
                <div className="p-6">
                  <div className="flex items-center gap-1.5 text-xs text-[#7966E8] font-semibold mb-2">
                    {getCategoryIcon(item.category)}
                    <span>{item.category}</span>
                  </div>

                  <h3 className="text-base font-bold text-[#17243D] mb-2 leading-snug">
                    {item.title}
                  </h3>

                  <p className="text-xs text-slate-600 leading-relaxed mb-4">
                    {item.description}
                  </p>

                  <div className="space-y-1.5 pt-3 border-t border-slate-100">
                    {item.keyAspects.map((asp, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-[11px] text-slate-600">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                        <span>{asp}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Card Footer */}
              <div className="p-4 px-6 bg-slate-50 border-t border-slate-100 flex items-center justify-between">
                <span className="text-[11px] font-mono text-slate-400">
                  SLIIT R26-IM-001 Prototype
                </span>
                <button
                  onClick={() => setActiveModalItem(item)}
                  className="text-xs font-bold text-[#7966E8] hover:underline"
                >
                  View Details →
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Prototype Demonstration Video Walkthrough Notice */}
        <section className="p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-[#17243D] to-[#243556] text-white flex flex-col md:flex-row items-center justify-between gap-8 shadow-xl">
          <div className="space-y-2 text-center md:text-left">
            <Badge variant="purple" size="sm">
              Laboratory & Field Trial Captures
            </Badge>
            <h3 className="text-2xl font-extrabold tracking-tight">
              Classroom Prototype Demonstrations
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 max-w-xl leading-relaxed">
              Controlled laboratory recordings showcasing children interacting with the printed storybook, viewing AR 3D plant turgor transitions, and demonstrating the automatic AR-to-2D fatigue transition.
            </p>
          </div>

          <div className="flex flex-wrap gap-3 shrink-0">
            <a
              href="#demo"
              onClick={(e) => {
                e.preventDefault();
                alert("Prototype Demonstration recordings are archived locally. Academic evaluators can request full video screencasts via the Contact page.");
              }}
              className="px-5 py-3 rounded-xl text-xs font-bold bg-[#7966E8] hover:bg-[#6853DF] text-white transition-all shadow-md"
            >
              Request Demonstration Screencast ↗
            </a>
          </div>
        </section>
      </div>

      {/* Item Inspect Modal */}
      {activeModalItem && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#17243D]/60 backdrop-blur-sm">
          <div className="relative w-full max-w-lg bg-white rounded-3xl p-6 sm:p-8 shadow-2xl border border-slate-100 overflow-hidden">
            <button
              onClick={() => setActiveModalItem(null)}
              className="absolute top-4 right-4 p-2 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 transition-colors"
            >
              <X className="w-4 h-4" />
            </button>

            <span className="text-xs font-bold uppercase tracking-wider text-[#7966E8] block mb-1">
              {activeModalItem.category}
            </span>
            <h3 className="text-xl font-bold text-[#17243D] mb-3">
              {activeModalItem.title}
            </h3>

            <div className="h-44 rounded-2xl bg-gradient-to-br from-[#EAF6FF] to-[#F2EDFF] flex flex-col items-center justify-center mb-4 text-center p-4">
              <span className="text-5xl mb-2">🌱</span>
              <p className="text-xs font-medium text-slate-600">
                {activeModalItem.imagePlaceholder.caption}
              </p>
            </div>

            <p className="text-xs text-slate-700 leading-relaxed mb-4">
              {activeModalItem.description}
            </p>

            <div className="space-y-1.5 mb-6">
              <span className="text-xs font-bold text-slate-800 block mb-1">
                Technical Highlights:
              </span>
              {activeModalItem.keyAspects.map((asp, idx) => (
                <div key={idx} className="flex items-start gap-2 text-xs text-slate-600">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#7966E8] shrink-0 mt-1.5" />
                  <span>{asp}</span>
                </div>
              ))}
            </div>

            <div className="pt-4 border-t border-slate-100 flex justify-end">
              <button
                onClick={() => setActiveModalItem(null)}
                className="px-4 py-2 rounded-xl text-xs font-bold bg-slate-100 text-slate-700 hover:bg-slate-200"
              >
                Close Inspector
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
