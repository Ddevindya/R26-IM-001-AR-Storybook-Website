import React from 'react';
import { Link } from 'react-router-dom';
import { 
  GraduationCap, 
  BookOpen, 
  Mail, 
  ShieldCheck,
  ArrowRight 
} from 'lucide-react';
import { PROJECT_INFO } from '../../data/projectData';
import { SUPERVISORS } from '../../data/teamData';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#172B26] text-slate-300 pt-16 pb-12 border-t border-emerald-950/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-emerald-900/30">
          {/* Col 1: Project Identity & Institution (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-[#166534] to-[#22A06B] flex items-center justify-center text-xl shadow-lg shadow-emerald-950/40">
                🌱
              </div>
              <div>
                <span className="text-base font-extrabold text-white tracking-tight block">
                  Project {PROJECT_INFO.id}
                </span>
                <span className="text-xs text-emerald-300 font-medium">
                  AR Storybook for Primary Plant Growth & Stewardship
                </span>
              </div>
            </div>

            <p className="text-xs text-slate-300 leading-relaxed max-w-md">
              A 4th-year undergraduate research project conducted at the Sri Lanka Institute of Information Technology (SLIIT), Faculty of Computing. Designing child-centered augmented reality, affective biological visualizations, and cyber-physical IoT systems for Cambridge Primary Science Stage 1 learners.
            </p>

            <div className="pt-2 flex flex-wrap gap-2 text-xs">
              <span className="px-2.5 py-1 rounded-lg bg-emerald-950/60 text-emerald-300 border border-emerald-800/50 font-mono">
                SLIIT Faculty of Computing
              </span>
              <span className="px-2.5 py-1 rounded-lg bg-emerald-950/60 text-emerald-300 border border-emerald-800/50">
                Department of Interactive Media
              </span>
              <span className="px-2.5 py-1 rounded-lg bg-emerald-950/60 text-emerald-300 border border-emerald-800/50">
                Malabe, Sri Lanka
              </span>
            </div>
          </div>

          {/* Col 2: Primary Site Navigation (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Site Navigation
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link to="/" className="hover:text-emerald-300 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/research" className="hover:text-emerald-300 transition-colors">
                  Research Overview
                </Link>
              </li>
              <li>
                <Link to="/milestones" className="hover:text-emerald-300 transition-colors">
                  Milestones & Timeline
                </Link>
              </li>
              <li>
                <Link to="/documents" className="hover:text-emerald-300 transition-colors">
                  Documents & Reports
                </Link>
              </li>
              <li>
                <Link to="/presentations" className="hover:text-emerald-300 transition-colors">
                  Presentations (PP, PP1, PP2)
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-emerald-300 transition-colors">
                  About Us & Team
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-emerald-300 transition-colors">
                  Contact & Request Demo
                </Link>
              </li>
            </ul>

            <div className="pt-2">
              <span className="text-[10px] uppercase font-bold text-slate-400 block mb-1">
                Technical Deep Dives
              </span>
              <div className="flex flex-wrap gap-2 text-[11px] text-emerald-400">
                <Link to="/components" className="hover:underline">Components</Link>
                <span>·</span>
                <Link to="/architecture" className="hover:underline">Architecture</Link>
                <span>·</span>
                <Link to="/showcase" className="hover:underline">Showcase</Link>
              </div>
            </div>
          </div>

          {/* Col 3: Academic Supervision (4 cols) */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Academic Supervision
            </h4>
            <div className="space-y-2.5">
              {SUPERVISORS.map((sup) => (
                <div
                  key={sup.id}
                  className="p-3 rounded-xl bg-emerald-950/40 border border-emerald-800/40 text-xs"
                >
                  <span className="font-bold text-white block">{sup.name}</span>
                  <span className="text-[11px] text-emerald-300 block">{sup.role}</span>
                  <span className="text-[11px] text-slate-400 block">{sup.department}</span>
                </div>
              ))}
            </div>

            <div className="pt-2">
              <Link
                to="/contact?type=Academic%20Enquiry"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-400 hover:text-emerald-300"
              >
                <span>Academic Collaboration Enquiries</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Institutional Badge */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>
            © 2026 Research Project R26-IM-001. Sri Lanka Institute of Information Technology (SLIIT). All rights reserved.
          </p>

          <div className="flex items-center gap-4 text-xs">
            <span className="flex items-center gap-1.5 text-slate-300">
              <span className="w-2 h-2 rounded-full bg-emerald-400" />
              Aligned with SDGs 4, 13 & 15
            </span>
            <Link to="/documents" className="hover:text-white underline">
              Research Documents Archive
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
