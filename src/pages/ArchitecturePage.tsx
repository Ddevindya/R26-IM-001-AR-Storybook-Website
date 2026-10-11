import React from 'react';
import { 
  Layers, 
  Cpu, 
  Database, 
  Sparkles, 
  Compass, 
  Smartphone, 
  ArrowRight, 
  CheckCircle2, 
  FileCode, 
  Wifi, 
  Download,
  Info
} from 'lucide-react';
import { ARCHITECTURE_LAYERS, ARCHITECTURE_DATA_FLOWS } from '../data/architectureData';
import { SectionHeader } from '../components/common/SectionHeader';
import { Badge } from '../components/common/Badge';
import { Button } from '../components/common/Button';
import { InteractiveArchitecture } from '../components/architecture/InteractiveArchitecture';

export const ArchitecturePage: React.FC = () => {
  return (
    <div className="min-h-screen bg-white pt-28 pb-20">
      {/* Header */}
      <div className="bg-gradient-to-b from-[#EAF6FF]/60 via-[#F2EDFF]/40 to-white py-14 sm:py-20 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 mb-3">
              <Badge variant="blue" size="md">
                Technical Systems Engineering
              </Badge>
              <span className="text-xs font-mono text-slate-500">
                Low-Level Integrated Component Blueprint
              </span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#17243D] tracking-tight leading-tight">
              System Architecture
            </h1>
            <p className="mt-4 text-base sm:text-lg text-[#536482] leading-relaxed">
              Preserving the formal Low-Level Integrated Component Architecture Diagram from the R26-IM-001 Research Proposal: uniting embedded IoT sensing, affective 3D biological shaders, pedagogical branching narratives, and child-centered ergonomics.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 space-y-20">
        {/* INTERACTIVE ARCHITECTURE CANVAS */}
        <section>
          <div className="mb-8 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#7966E8] block mb-1">
                Visual System Navigator
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#17243D]">
                Interactive 4-Layer Architecture Explorer
              </h2>
            </div>
            <div className="text-xs text-slate-500">
              Click any node to inspect class names, responsibilities, and data protocols.
            </div>
          </div>

          <InteractiveArchitecture />
        </section>

        {/* DATAFLOW MATRIX & PROTOCOLS */}
        <section className="space-y-8">
          <SectionHeader
            badge="Inter-Component Dataflow"
            badgeVariant="green"
            title="Communication Interfaces & Protocol Contracts"
            subtitle="How signals, events, and telemetry traverse across hardware microcontrollers, Firebase cloud endpoints, and Unity C# engine subsystems."
          />

          <div className="overflow-x-auto rounded-3xl border border-slate-200 shadow-xs">
            <table className="w-full text-left text-xs text-slate-700 bg-white">
              <thead className="bg-slate-50 text-[11px] font-bold uppercase tracking-wider text-slate-500 border-b border-slate-200">
                <tr>
                  <th className="p-4 pl-6">Signal Flow</th>
                  <th className="p-4">Origin Entity</th>
                  <th className="p-4">Destination Entity</th>
                  <th className="p-4">Protocol / Interface</th>
                  <th className="p-4 pr-6">Data Payload Type</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {ARCHITECTURE_DATA_FLOWS.map((flow) => (
                  <tr key={flow.id} className="hover:bg-purple-50/20 transition-colors">
                    <td className="p-4 pl-6 font-bold text-[#17243D]">
                      {flow.layer}
                    </td>
                    <td className="p-4 text-slate-600 font-medium">
                      {flow.from}
                    </td>
                    <td className="p-4 text-slate-600 font-medium">
                      {flow.to}
                    </td>
                    <td className="p-4 font-mono text-[#7966E8]">
                      {flow.protocol}
                    </td>
                    <td className="p-4 pr-6 text-slate-600">
                      {flow.label}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* TECHNICAL STACK SPECIFICATION GRID */}
        <section className="space-y-8">
          <SectionHeader
            badge="Technology Stack Matrix"
            badgeVariant="purple"
            title="Production Software & Hardware Specifications"
            subtitle="The verified tools, runtimes, and engineering frameworks powering the R26-IM-001 research prototype."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 rounded-3xl bg-white border border-slate-200 shadow-2xs space-y-3">
              <div className="w-10 h-10 rounded-xl bg-purple-50 text-[#7966E8] flex items-center justify-center font-bold">
                <Smartphone className="w-5 h-5" />
              </div>
              <h3 className="text-sm font-bold text-[#17243D]">
                AR Client Runtime
              </h3>
              <ul className="text-xs text-slate-600 space-y-1.5">
                <li>• <strong>Engine:</strong> Unity 2022.3 LTS</li>
                <li>• <strong>Framework:</strong> AR Foundation / ARKit / ARCore</li>
                <li>• <strong>Scripting:</strong> C# (.NET Standard 2.1)</li>
                <li>• <strong>Tracking:</strong> Image Marker + Kalman Smoothing</li>
              </ul>
            </div>

            <div className="p-6 rounded-3xl bg-white border border-slate-200 shadow-2xs space-y-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-50 text-[#54B987] flex items-center justify-center font-bold">
                <Sparkles className="w-5 h-5" />
              </div>
              <h3 className="text-sm font-bold text-[#17243D]">
                3D Visuals & Shaders
              </h3>
              <ul className="text-xs text-slate-600 space-y-1.5">
                <li>• <strong>Pipeline:</strong> Universal Render Pipeline (URP)</li>
                <li>• <strong>Shaders:</strong> Custom HLSL Vertex Turgor</li>
                <li>• <strong>Polygon Limit:</strong> &lt;15,000 Vertices</li>
                <li>• <strong>Target Framerate:</strong> Stable 60 FPS Mobile</li>
              </ul>
            </div>

            <div className="p-6 rounded-3xl bg-white border border-slate-200 shadow-2xs space-y-3">
              <div className="w-10 h-10 rounded-xl bg-amber-50 text-[#D97706] flex items-center justify-center font-bold">
                <Compass className="w-5 h-5" />
              </div>
              <h3 className="text-sm font-bold text-[#17243D]">
                Narrative & Audio
              </h3>
              <ul className="text-xs text-slate-600 space-y-1.5">
                <li>• <strong>Engine:</strong> Custom C# Rule-Based Tree</li>
                <li>• <strong>Audio:</strong> FMOD / Unity Audio Source</li>
                <li>• <strong>Speech:</strong> Synced Subtitle Highlighting</li>
                <li>• <strong>Persistence:</strong> Local JSON & Cloud Sync</li>
              </ul>
            </div>

            <div className="p-6 rounded-3xl bg-white border border-slate-200 shadow-2xs space-y-3">
              <div className="w-10 h-10 rounded-xl bg-sky-50 text-[#0284C7] flex items-center justify-center font-bold">
                <Cpu className="w-5 h-5" />
              </div>
              <h3 className="text-sm font-bold text-[#17243D]">
                IoT Hardware & Cloud
              </h3>
              <ul className="text-xs text-slate-600 space-y-1.5">
                <li>• <strong>MCU:</strong> ESP32-S3 Dual-Core Xtensa</li>
                <li>• <strong>Sensing:</strong> Capacitive VWC + LDR Lux</li>
                <li>• <strong>Cloud Store:</strong> Firebase Realtime Database</li>
                <li>• <strong>Network Latency:</strong> &lt;150ms over Wi-Fi</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Academic Blueprint Reference Notice */}
        <section className="p-8 rounded-3xl bg-[#EAF6FF]/60 border border-[#BFDBFE]/60 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1">
            <h4 className="text-base font-bold text-[#17243D]">
              Need Full Class Diagrams and UML Specifications?
            </h4>
            <p className="text-xs text-slate-600 max-w-2xl leading-relaxed">
              The complete 45-page architectural blueprint, sequence diagrams, and schema definitions are archived in our Research Documents repository.
            </p>
          </div>

          <Button to="/documents" variant="primary" size="md">
            View Architecture Specification PDF →
          </Button>
        </section>
      </div>
    </div>
  );
};
