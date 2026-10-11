import React from 'react';
import { Link } from 'react-router-dom';
import { 
  BookOpen, 
  Target, 
  HelpCircle, 
  CheckCircle2, 
  AlertTriangle, 
  Lightbulb, 
  Layers, 
  Cpu, 
  Users, 
  FileCheck,
  Compass,
  ArrowRight,
  ShieldCheck,
  Sparkles
} from 'lucide-react';
import { PROJECT_INFO } from '../data/projectData';
import { SectionHeader } from '../components/common/SectionHeader';
import { Badge } from '../components/common/Badge';
import { Button } from '../components/common/Button';

export const AboutResearchPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-white pt-28 pb-20 text-[#172B26]">
      {/* Page Header */}
      <div className="bg-gradient-to-b from-[#DCFCE7]/50 via-[#F7FBF8] to-white py-14 sm:py-20 border-b border-emerald-900/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 mb-3">
              <Badge variant="forest" size="md">
                Research Domain & Problem Formulation
              </Badge>
              <span className="text-xs font-mono text-slate-500">
                SLIIT Project Code: {PROJECT_INFO.id}
              </span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#172B26] tracking-tight leading-tight">
              About the Research
            </h1>
            <p className="mt-4 text-base sm:text-lg text-[#4A6B61] leading-relaxed">
              Investigating the design, ergonomics, and pedagogical efficacy of a cyber-physical Augmented Reality storybook for Cambridge Primary Grade 1 science learners in Sri Lankan international schools.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 space-y-20">
        {/* SECTION 1: RESEARCH BACKGROUND & MOTIVATION */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-5 space-y-4">
            <span className="text-xs font-bold uppercase tracking-wider text-[#166534]">
              Background & Context
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#172B26] leading-snug">
              Why Early Botanical Literacy & Environmental Care Matter
            </h2>
            <p className="text-xs sm:text-sm text-[#4A6B61] leading-relaxed">
              Understanding plant growth and environmental processes is a significant part of early childhood education. Reports from UNESCO indicate that a large percentage of young learners are unaware of ecological systems and sustainability. In science education, this problem is intensified when young learners are taught through static textbook explanations rather than interactive, experiential methods.
            </p>
            <p className="text-xs sm:text-sm text-[#4A6B61] leading-relaxed">
              While some educational tools use 3D models to show plant structures, they do not show dynamic biological conditions such as plant health, dehydration, or recovery. Moreover, emotional design elements that help children intuitively understand plant conditions are missing.
            </p>
          </div>

          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-6 rounded-3xl bg-[#F7FBF8] border border-emerald-900/10 shadow-2xs">
              <span className="text-2xl block mb-2">📚</span>
              <h3 className="text-sm font-bold text-[#172B26] mb-1">
                Textbook Limitations
              </h3>
              <p className="text-xs text-[#4A6B61] leading-relaxed">
                Static textbook diagrams cannot effectively convey dynamic plant responses to water, light, and environmental stress.
              </p>
            </div>

            <div className="p-6 rounded-3xl bg-[#F7FBF8] border border-emerald-900/10 shadow-2xs">
              <span className="text-2xl block mb-2">📱</span>
              <h3 className="text-sm font-bold text-[#172B26] mb-1">
                Handheld AR Fatigue
              </h3>
              <p className="text-xs text-[#4A6B61] leading-relaxed">
                Six-year-olds develop muscular fatigue (Gorilla Arm Effect) during continuous handheld AR tracking without timed resting modes.
              </p>
            </div>

            <div className="p-6 rounded-3xl bg-[#F7FBF8] border border-emerald-900/10 shadow-2xs">
              <span className="text-2xl block mb-2">🧠</span>
              <h3 className="text-sm font-bold text-[#172B26] mb-1">
                Cognitive Split-Attention
              </h3>
              <p className="text-xs text-[#4A6B61] leading-relaxed">
                Separating physical book text from onscreen 3D models causes extraneous cognitive load and motor clumsiness in young children.
              </p>
            </div>

            <div className="p-6 rounded-3xl bg-[#F7FBF8] border border-emerald-900/10 shadow-2xs">
              <span className="text-2xl block mb-2">📡</span>
              <h3 className="text-sm font-bold text-[#172B26] mb-1">
                Detached Virtual Worlds
              </h3>
              <p className="text-xs text-[#4A6B61] leading-relaxed">
                Purely virtual simulators lack real-world physical classroom sensing, missing the connection between actual sunlight and simulated plant health.
              </p>
            </div>
          </div>
        </section>

        {/* SECTION 2: PROBLEM STATEMENT & FOUR RESEARCH GAPS */}
        <section className="p-8 sm:p-12 rounded-3xl bg-[#F7FBF8] border border-emerald-900/10">
          <SectionHeader
            align="left"
            badge="Identified Research Gaps"
            badgeVariant="forest"
            title="Problem Statement & Evidence-Based Gaps"
            subtitle="Extracted directly from the approved SLIIT R26-IM-001 Research Proposal literature comparison."
          />

          <div className="p-6 rounded-2xl bg-white border border-emerald-900/10 mb-8">
            <h3 className="text-base font-bold text-[#172B26] mb-2 flex items-center gap-2">
              <AlertTriangle className="w-5 h-5 text-amber-600 shrink-0" />
              Core Research Problem
            </h3>
            <p className="text-xs sm:text-sm text-[#4A6B61] leading-relaxed italic">
              “How can primary learners studying the Cambridge Grade 1 Science module in Sri Lanka be better supported in understanding plant growth and environmental changes that are difficult to learn through traditional text-based teaching methods?”
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-5 rounded-2xl bg-white border border-slate-200">
              <span className="text-xs font-mono font-bold text-[#166534] block mb-1">GAP 01</span>
              <h4 className="text-sm font-bold text-[#172B26] mb-1">
                Lack of Longitudinal Persistence
              </h4>
              <p className="text-xs text-[#4A6B61] leading-relaxed">
                Most AR educational applications are one-time episodic experiences that do not simulate the continuous, time-delta nature of caring for living things across days.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-white border border-slate-200">
              <span className="text-xs font-mono font-bold text-[#166534] block mb-1">GAP 02</span>
              <h4 className="text-sm font-bold text-[#172B26] mb-1">
                Inadequate Representation of Dynamic States
              </h4>
              <p className="text-xs text-[#4A6B61] leading-relaxed">
                Existing plant AR tools focus on anatomy and structure rather than translating biological states into emotionally interpretable cues (health, stress, recovery).
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-white border border-slate-200">
              <span className="text-xs font-mono font-bold text-[#166534] block mb-1">GAP 03</span>
              <h4 className="text-sm font-bold text-[#172B26] mb-1">
                Superficial PBL Gamification
              </h4>
              <p className="text-xs text-[#4A6B61] leading-relaxed">
                Over-reliance on points, badges, and leaderboards fails to foster intrinsic ecological stewardship and prosocial behavior in early childhood.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-white border border-slate-200">
              <span className="text-xs font-mono font-bold text-[#166534] block mb-1">GAP 04</span>
              <h4 className="text-sm font-bold text-[#172B26] block mb-1">
                Absence of Redemption Mechanics
              </h4>
              <p className="text-xs text-[#4A6B61] leading-relaxed">
                Existing serious games emphasize negative consequences without providing structured narrative opportunities for children to actively correct mistakes through care.
              </p>
            </div>
          </div>
        </section>

        {/* SECTION 3: RESEARCH AIM & FOUR OBJECTIVES */}
        <section className="space-y-6">
          <SectionHeader
            badge="Academic Goals"
            badgeVariant="forest"
            title="Research Aim & Specific Objectives"
            subtitle="Formal academic objectives approved by the SLIIT Faculty of Computing supervision panel."
          />

          <div className="p-6 sm:p-8 rounded-3xl bg-[#166534] text-white shadow-md">
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-200 block mb-1">
              Main Research Objective
            </span>
            <h3 className="text-lg sm:text-xl font-bold leading-snug">
              To design, develop, and evaluate a child-centered handheld Augmented Reality interactive storybook application that supports Sri Lankan international school children aged 6 studying the Cambridge Grade 1 Science curriculum in understanding plant growth, environmental interactions, and ecological responsibility.
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
            <div className="p-5 rounded-2xl bg-white border border-slate-200">
              <div className="flex items-center gap-2 mb-2">
                <span className="w-6 h-6 rounded-lg bg-[#DCFCE7] text-[#166534] font-bold text-xs flex items-center justify-center font-mono">
                  O1
                </span>
                <h4 className="text-xs sm:text-sm font-bold text-[#172B26]">
                  Child-Centered Ergonomic Interaction
                </h4>
              </div>
              <p className="text-xs text-[#4A6B61] leading-relaxed">
                Develop a hybrid interaction framework with dynamic UI resizing, 45-second AR-to-2D resting transitions, and physical page anchoring to reduce prolonged arm strain and split-attention.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-white border border-slate-200">
              <div className="flex items-center gap-2 mb-2">
                <span className="w-6 h-6 rounded-lg bg-[#DCFCE7] text-[#166534] font-bold text-xs flex items-center justify-center font-mono">
                  O2
                </span>
                <h4 className="text-xs sm:text-sm font-bold text-[#172B26]">
                  Affective 3D Plant Visualization
                </h4>
              </div>
              <p className="text-xs text-[#4A6B61] leading-relaxed">
                Create AR-optimized 3D plant assets and custom vertex turgor shaders to represent plant health, stress, and recovery through emotionally readable color, glow, and motion cues.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-white border border-slate-200">
              <div className="flex items-center gap-2 mb-2">
                <span className="w-6 h-6 rounded-lg bg-[#DCFCE7] text-[#166534] font-bold text-xs flex items-center justify-center font-mono">
                  O3
                </span>
                <h4 className="text-xs sm:text-sm font-bold text-[#172B26]">
                  Gamified Narrative & Redemption Engine
                </h4>
              </div>
              <p className="text-xs text-[#4A6B61] leading-relaxed">
                Implement rule-based story branching, longitudinal time-delta persistence, and redemption mechanics where story progress depends on caring for the plant rather than collecting points.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-white border border-slate-200">
              <div className="flex items-center gap-2 mb-2">
                <span className="w-6 h-6 rounded-lg bg-[#DCFCE7] text-[#166534] font-bold text-xs flex items-center justify-center font-mono">
                  O4
                </span>
                <h4 className="text-xs sm:text-sm font-bold text-[#172B26]">
                  Context-Aware Cyber-Physical Simulation
                </h4>
              </div>
              <p className="text-xs text-[#4A6B61] leading-relaxed">
                Engineer an ESP32 micro-climate sensing station (soil moisture, LDR light, DHT22) with low-latency Firebase cloud sync to control virtual plant growth based on real classroom environments.
              </p>
            </div>
          </div>
        </section>

        {/* SECTION 4: GATEWAYS TO DETAILED TECHNICAL PAGES */}
        <section className="p-8 sm:p-10 rounded-3xl bg-[#F7FBF8] border border-emerald-900/10">
          <SectionHeader
            badge="Technical Deep Dives"
            badgeVariant="forest"
            title="Explore Detailed System Specifications"
            subtitle="Access individual subsystem architectures, interactive hardware diagrams, and prototype showcases."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-6">
            <Link
              to="/components"
              className="p-5 rounded-2xl bg-white border border-emerald-900/10 hover:border-[#166534] hover:shadow-md transition-all group"
            >
              <Layers className="w-6 h-6 text-[#166534] mb-2 group-hover:scale-110 transition-transform" />
              <h4 className="text-sm font-bold text-[#172B26] mb-1">
                Components Deep Dive
              </h4>
              <p className="text-[11px] text-[#4A6B61] leading-tight mb-3">
                Full technical breakdowns for C1, C2, C3, and C4 subsystems.
              </p>
              <span className="text-xs font-bold text-[#166534] flex items-center gap-1">
                Explore Components →
              </span>
            </Link>

            <Link
              to="/architecture"
              className="p-5 rounded-2xl bg-white border border-emerald-900/10 hover:border-[#166534] hover:shadow-md transition-all group"
            >
              <Cpu className="w-6 h-6 text-[#166534] mb-2 group-hover:scale-110 transition-transform" />
              <h4 className="text-sm font-bold text-[#172B26] mb-1">
                System Architecture
              </h4>
              <p className="text-[11px] text-[#4A6B61] leading-tight mb-3">
                Interactive 4-layer blueprint with C# node inspector.
              </p>
              <span className="text-xs font-bold text-[#166534] flex items-center gap-1">
                View Architecture →
              </span>
            </Link>

            <Link
              to="/showcase"
              className="p-5 rounded-2xl bg-white border border-emerald-900/10 hover:border-[#166534] hover:shadow-md transition-all group"
            >
              <Sparkles className="w-6 h-6 text-[#166534] mb-2 group-hover:scale-110 transition-transform" />
              <h4 className="text-sm font-bold text-[#172B26] mb-1">
                Prototype Showcase
              </h4>
              <p className="text-[11px] text-[#4A6B61] leading-tight mb-3">
                Interactive 3D shaders, mobile HUD, and gallery.
              </p>
              <span className="text-xs font-bold text-[#166534] flex items-center gap-1">
                Discover Showcase →
              </span>
            </Link>

            <Link
              to="/future"
              className="p-5 rounded-2xl bg-white border border-emerald-900/10 hover:border-[#166534] hover:shadow-md transition-all group"
            >
              <Compass className="w-6 h-6 text-[#166534] mb-2 group-hover:scale-110 transition-transform" />
              <h4 className="text-sm font-bold text-[#172B26] mb-1">
                Future Vision
              </h4>
              <p className="text-[11px] text-[#4A6B61] leading-tight mb-3">
                School pilot pathways and storybook series roadmap.
              </p>
              <span className="text-xs font-bold text-[#166534] flex items-center gap-1">
                View Future Roadmap →
              </span>
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
};
