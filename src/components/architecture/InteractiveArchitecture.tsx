import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Layers, 
  Cpu, 
  Sparkles, 
  Compass, 
  Smartphone, 
  Wifi, 
  Database, 
  ArrowRight, 
  CheckCircle2, 
  FileCode, 
  User, 
  Info,
  Zap,
  SlidersHorizontal
} from 'lucide-react';
import { ARCHITECTURE_LAYERS, ARCHITECTURE_DATA_FLOWS } from '../../data/architectureData';
import { Badge } from '../common/Badge';

export const InteractiveArchitecture: React.FC = () => {
  const [viewMode, setViewMode] = useState<'simplified' | 'detailed'>('detailed');
  const [selectedNode, setSelectedNode] = useState<{
    layerId: string;
    layerName: string;
    name: string;
    codeFile?: string;
    subsystem: string;
    role: string;
    details: string;
    researcher?: string;
  } | null>({
    layerId: "layer-env",
    layerName: "Environmental Input Layer",
    name: "ESP32-S3 Microcontroller Unit",
    codeFile: "firmware/main.cpp",
    subsystem: "Embedded Firmware",
    role: "Analog Conversion & Telemetry Streaming",
    details: "Processes analog ADC readings, applies noise filtering, and packages sensor telemetry into JSON packets over 2.4 GHz Wi-Fi to Firebase.",
    researcher: "Dissanayaka D.M.D.D. (Component 04)"
  });

  const getResearcherForLayer = (layerId: string) => {
    switch (layerId) {
      case 'layer-env':
        return 'Dissanayaka D.M.D.D. (Component 04: Context-Aware Simulation Engine)';
      case 'layer-plant':
        return 'Palliyaguruge S.N. (Component 02: Affective Visualization Model)';
      case 'layer-narrative':
        return 'Amarawardhane A.S. (Component 03: Gamified Narrative Engine)';
      case 'layer-hci':
        return 'Wijayarathne K.N. (Component 01: Hybrid Interaction Framework)';
      default:
        return 'Integrated System';
    }
  };

  const getLayerIcon = (layerId: string) => {
    switch (layerId) {
      case 'layer-env':
        return <Cpu className="w-5 h-5 text-sky-500" />;
      case 'layer-plant':
        return <Sparkles className="w-5 h-5 text-emerald-500" />;
      case 'layer-narrative':
        return <Compass className="w-5 h-5 text-amber-500" />;
      case 'layer-hci':
        return <Smartphone className="w-5 h-5 text-purple-500" />;
      default:
        return <Layers className="w-5 h-5" />;
    }
  };

  return (
    <div className="w-full bg-white rounded-3xl border border-slate-200 shadow-xl overflow-hidden">
      {/* Control Header */}
      <div className="bg-gradient-to-r from-slate-50 via-purple-50/20 to-slate-50 px-6 py-4 border-b border-slate-200 flex flex-wrap items-center justify-between gap-4">
        <div>
          <span className="text-xs font-bold uppercase tracking-wider text-[#7966E8]">
            Interactive System Blueprint
          </span>
          <h3 className="text-lg font-extrabold text-[#17243D]">
            Integrated 4-Layer Cyber-Physical Architecture
          </h3>
        </div>

        {/* View Mode Toggle */}
        <div className="flex items-center gap-2 bg-slate-100 p-1 rounded-2xl border border-slate-200">
          <button
            onClick={() => setViewMode('simplified')}
            className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-all ${
              viewMode === 'simplified'
                ? 'bg-white text-[#17243D] shadow-xs'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            Simplified Overview
          </button>
          <button
            onClick={() => setViewMode('detailed')}
            className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-all ${
              viewMode === 'detailed'
                ? 'bg-[#7966E8] text-white shadow-xs'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            Detailed Technical View
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 divide-y lg:divide-y-0 lg:divide-x divide-slate-200">
        {/* Architecture Canvas (8 cols) */}
        <div className="lg:col-span-8 p-6 sm:p-8 bg-slate-50/50">
          {viewMode === 'simplified' ? (
            // SIMPLIFIED OVERVIEW
            <div className="space-y-6">
              <div className="p-4 rounded-2xl bg-white border border-slate-200 text-sm text-slate-600">
                <p>
                  <strong>How the System Connects:</strong> Physical sensors measure actual light and moisture, synchronizing via Firebase to Unity. The plant expresses its needs emotionally, guiding the child to care for it through non-linear storytelling while fatigue timers ensure comfortable physical reading sessions.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {ARCHITECTURE_LAYERS.map((layer) => (
                  <div
                    key={layer.id}
                    onClick={() => {
                      const firstComp = layer.components[0];
                      setSelectedNode({
                        layerId: layer.id,
                        layerName: layer.name,
                        ...firstComp,
                        researcher: getResearcherForLayer(layer.id)
                      });
                    }}
                    className={`p-5 rounded-2xl bg-white border-2 cursor-pointer transition-all hover:shadow-md ${
                      selectedNode?.layerId === layer.id
                        ? 'border-[#7966E8] ring-2 ring-[#7966E8]/20 shadow-sm'
                        : 'border-slate-200 hover:border-slate-300'
                    }`}
                  >
                    <div className="flex items-center gap-3 mb-2">
                      <div className="p-2 rounded-xl bg-slate-50 border border-slate-100">
                        {getLayerIcon(layer.id)}
                      </div>
                      <h4 className="text-sm font-bold text-slate-900">
                        {layer.name.split('(')[0]}
                      </h4>
                    </div>
                    <p className="text-xs text-slate-500 leading-relaxed mb-3">
                      {layer.description}
                    </p>
                    <div className="flex items-center justify-between pt-2 border-t border-slate-100 text-[11px] text-[#7966E8] font-semibold">
                      <span>{layer.components.length} Key Subsystems</span>
                      <span>Click to Inspect →</span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Central Arrow Data Flow */}
              <div className="p-4 rounded-2xl bg-gradient-to-r from-sky-50 via-emerald-50 to-purple-50 border border-slate-200 flex items-center justify-around text-center text-xs font-semibold text-slate-700">
                <div className="flex items-center gap-1.5">
                  <Cpu className="w-4 h-4 text-sky-600" />
                  <span>Real IoT World</span>
                </div>
                <ArrowRight className="w-4 h-4 text-slate-400" />
                <div className="flex items-center gap-1.5">
                  <Database className="w-4 h-4 text-purple-600" />
                  <span>Cloud Telemetry</span>
                </div>
                <ArrowRight className="w-4 h-4 text-slate-400" />
                <div className="flex items-center gap-1.5">
                  <Sparkles className="w-4 h-4 text-emerald-600" />
                  <span>Affective AR Seedling</span>
                </div>
                <ArrowRight className="w-4 h-4 text-slate-400" />
                <div className="flex items-center gap-1.5">
                  <Compass className="w-4 h-4 text-amber-600" />
                  <span>Branching Story</span>
                </div>
              </div>
            </div>
          ) : (
            // DETAILED TECHNICAL SPECIFICATION VIEW
            <div className="space-y-6">
              {ARCHITECTURE_LAYERS.map((layer) => (
                <div
                  key={layer.id}
                  className="p-5 rounded-2xl bg-white border border-slate-200 shadow-2xs hover:border-slate-300 transition-all"
                >
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-2.5">
                      <div className="p-1.5 rounded-lg bg-slate-50 border border-slate-100">
                        {getLayerIcon(layer.id)}
                      </div>
                      <h4 className="text-sm font-bold text-slate-900">
                        {layer.name}
                      </h4>
                    </div>
                    <span className="text-[11px] font-mono text-slate-400">
                      Owner: {layer.id === 'layer-env' ? 'D.M.D.D.' : layer.id === 'layer-plant' ? 'S.N.' : layer.id === 'layer-narrative' ? 'A.S.' : 'K.N.'}
                    </span>
                  </div>

                  <p className="text-xs text-slate-500 mb-4">
                    {layer.description}
                  </p>

                  {/* Component Nodes Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {layer.components.map((comp, idx) => {
                      const isSelected = selectedNode?.name === comp.name;
                      return (
                        <div
                          key={idx}
                          onClick={() =>
                            setSelectedNode({
                              layerId: layer.id,
                              layerName: layer.name,
                              ...comp,
                              researcher: getResearcherForLayer(layer.id)
                            })
                          }
                          className={`p-3 rounded-xl border text-left cursor-pointer transition-all ${
                            isSelected
                              ? 'bg-purple-50/70 border-[#7966E8] ring-1 ring-[#7966E8]'
                              : 'bg-slate-50/80 hover:bg-white border-slate-200/80 hover:border-slate-300'
                          }`}
                        >
                          <div className="flex items-center justify-between mb-1">
                            <span className="text-xs font-bold text-slate-800">
                              {comp.name}
                            </span>
                            {comp.codeFile && (
                              <span className="text-[10px] font-mono px-1.5 py-0.5 rounded-md bg-white border border-slate-200 text-purple-700">
                                {comp.codeFile}
                              </span>
                            )}
                          </div>
                          <p className="text-[11px] text-slate-500 line-clamp-1">
                            {comp.role}
                          </p>
                        </div>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Inspector Sidebar (4 cols) */}
        <div className="lg:col-span-4 p-6 sm:p-8 flex flex-col justify-between bg-white">
          <div>
            <div className="flex items-center gap-2 mb-4 pb-3 border-b border-slate-100">
              <Info className="w-4 h-4 text-[#7966E8]" />
              <h4 className="text-sm font-bold text-[#17243D]">
                Component Inspector
              </h4>
            </div>

            {selectedNode ? (
              <div className="space-y-4">
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block mb-1">
                    Selected Node
                  </span>
                  <h5 className="text-base font-extrabold text-[#17243D] leading-snug">
                    {selectedNode.name}
                  </h5>
                  {selectedNode.codeFile && (
                    <div className="flex items-center gap-1.5 mt-1 text-xs font-mono text-[#7966E8] bg-purple-50 px-2 py-0.5 rounded-md border border-purple-100 inline-flex">
                      <FileCode className="w-3.5 h-3.5" />
                      <span>{selectedNode.codeFile}</span>
                    </div>
                  )}
                </div>

                <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-100">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block mb-0.5">
                    Layer & Subsystem
                  </span>
                  <p className="text-xs font-semibold text-slate-800">
                    {selectedNode.layerName}
                  </p>
                  <p className="text-[11px] text-slate-500 font-mono mt-0.5">
                    Subsystem: {selectedNode.subsystem}
                  </p>
                </div>

                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block mb-1">
                    Functional Role
                  </span>
                  <p className="text-xs font-medium text-slate-700 leading-relaxed">
                    {selectedNode.role}
                  </p>
                </div>

                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block mb-1">
                    Technical Specifications
                  </span>
                  <p className="text-xs text-slate-600 leading-relaxed bg-slate-50/50 p-3 rounded-xl border border-slate-100">
                    {selectedNode.details}
                  </p>
                </div>

                <div className="pt-2 border-t border-slate-100">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block mb-1">
                    Researcher Ownership
                  </span>
                  <p className="text-xs font-semibold text-[#7966E8] flex items-center gap-1.5">
                    <User className="w-3.5 h-3.5" />
                    {selectedNode.researcher || getResearcherForLayer(selectedNode.layerId)}
                  </p>
                </div>
              </div>
            ) : (
              <p className="text-xs text-slate-400 italic">
                Click any architectural node on the left to inspect its parameters, C# class files, and communication protocols.
              </p>
            )}
          </div>

          {/* Academic Transparency Note */}
          <div className="mt-6 pt-4 border-t border-slate-100">
            <p className="text-[11px] text-slate-400 leading-tight">
              <strong>Diagram Fidelity:</strong> Preserves the full Low-Level Integrated Component Architecture Diagram relationships submitted in the formal R26-IM-001 Research Proposal.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
