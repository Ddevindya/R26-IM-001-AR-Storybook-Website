import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  ArrowRight, 
  ArrowUpRight,
  BookOpen, 
  Sparkles, 
  Layers, 
  Smartphone, 
  Cpu, 
  Compass, 
  CheckCircle2, 
  Eye, 
  FileText,
  Presentation,
  ShieldCheck,
  User
} from 'lucide-react';
import { PROJECT_INFO } from '../data/projectData';
import { RESEARCH_COMPONENTS } from '../data/componentsData';
import { RESEARCHERS } from '../data/teamData';
import { Badge } from '../components/common/Badge';
import { Button } from '../components/common/Button';
import { SectionHeader } from '../components/common/SectionHeader';
import { UniversityBrandingBand } from '../components/common/UniversityBrandingBand';

export const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen bg-white text-[#172B26]">
      {/* =========================================================================
          SECTION 1: HERO
          Clean spacious headline, nature-inspired AR/plant/storybook visual
          ========================================================================= */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-hero-glow">
        {/* Soft background glow accents */}
        <div className="absolute top-12 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full pointer-events-none overflow-hidden">
          <div className="absolute top-10 left-8 w-72 h-72 rounded-full bg-[#DCFCE7]/60 blur-3xl" />
          <div className="absolute top-24 right-10 w-96 h-96 rounded-full bg-[#22A06B]/10 blur-3xl" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            {/* Hero Copy (7 cols) */}
            <div className="lg:col-span-7 space-y-6 text-left">
              {/* Project Badge */}
              <div className="inline-flex items-center gap-2 p-1.5 pr-4 rounded-full bg-white/95 border border-emerald-200/80 shadow-2xs backdrop-blur-sm">
                <span className="px-2.5 py-1 rounded-full bg-[#166534] text-white text-[11px] font-bold tracking-wide uppercase">
                  {PROJECT_INFO.id}
                </span>
                <span className="text-xs font-semibold text-[#172B26]">
                  SLIIT Research Showcase 2026
                </span>
              </div>

              {/* Primary Headline */}
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[60px] font-extrabold text-[#172B26] tracking-tight leading-[1.08]">
                Where Nature Meets{' '}
                <span className="bg-gradient-to-r from-[#166534] via-[#22A06B] to-[#14532D] bg-clip-text text-transparent">
                  Augmented Reality.
                </span>
              </h1>

              {/* Concise Supporting Paragraph */}
              <p className="text-base sm:text-lg md:text-xl text-[#4A6B61] font-normal leading-relaxed max-w-2xl">
                Helping young primary learners explore plant growth and cultivate environmental stewardship through a tangible storybook, interactive augmented reality, and real-world contextual feedback.
              </p>

              {/* Primary CTAs */}
              <div className="pt-2 flex flex-wrap items-center gap-4">
                <Button
                  to="/research"
                  variant="primary"
                  size="lg"
                  iconRight={<ArrowRight className="w-4 h-4" />}
                >
                  Explore the Research
                </Button>
                <Button
                  to="/showcase"
                  variant="secondary"
                  size="lg"
                  icon={<Sparkles className="w-4 h-4 text-[#166534]" />}
                >
                  Discover the Experience
                </Button>
              </div>

              {/* Verified Audience & Curriculum Strip */}
              <div className="pt-6 border-t border-emerald-900/10 grid grid-cols-2 sm:grid-cols-3 gap-4">
                <div>
                  <span className="text-[11px] text-slate-500 font-medium block">Target Learners</span>
                  <span className="text-xs sm:text-sm font-bold text-[#172B26] mt-0.5 block">
                    Cambridge Grade 1 (Age 6)
                  </span>
                </div>
                <div>
                  <span className="text-[11px] text-slate-500 font-medium block">Institution</span>
                  <span className="text-xs sm:text-sm font-bold text-[#172B26] mt-0.5 block">
                    SLIIT Faculty of Computing
                  </span>
                </div>
                <div className="col-span-2 sm:col-span-1">
                  <span className="text-[11px] text-slate-500 font-medium block">Research Scope</span>
                  <span className="text-xs sm:text-sm font-bold text-[#166534] mt-0.5 block flex items-center gap-1">
                    <span className="w-2 h-2 rounded-full bg-[#22A06B]" />
                    4 Integrated Components
                  </span>
                </div>
              </div>
            </div>

            {/* Hero Conceptual AR Storybook Illustration Stage (5 cols) */}
            <div className="lg:col-span-5 relative">
              <div className="relative mx-auto max-w-md">
                <div className="glass-panel-elevated rounded-3xl p-6 sm:p-7 relative overflow-hidden border border-emerald-200/80">
                  <div className="flex items-center justify-between pb-3.5 mb-3.5 border-b border-emerald-100">
                    <div className="flex items-center gap-2">
                      <span className="w-2.5 h-2.5 rounded-full bg-[#22A06B] animate-ping" />
                      <span className="text-xs font-bold uppercase tracking-wider text-[#166534]">
                        Storybook AR Overlay
                      </span>
                    </div>
                    <Badge variant="mint" size="sm">
                      Conceptual Prototype
                    </Badge>
                  </div>

                  {/* Conceptual Illustration Visual */}
                  <div className="relative h-64 sm:h-72 rounded-2xl bg-gradient-to-b from-[#DCFCE7]/50 via-[#F7FBF8] to-[#DCFCE7]/30 flex flex-col items-center justify-center p-4 text-center overflow-hidden border border-emerald-100 shadow-inner">
                    {/* Floating 3D holographic seedling */}
                    <motion.div
                      animate={{ y: [0, -8, 0], rotate: [0, 1.2, 0] }}
                      transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                      className="relative z-10"
                    >
                      <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full bg-white shadow-lg border-2 border-emerald-300 flex items-center justify-center mx-auto mb-3">
                        <span className="text-5xl select-none">🌱</span>
                      </div>
                    </motion.div>

                    {/* Book Base Underneath */}
                    <div className="w-56 h-11 bg-white rounded-xl border border-slate-200 shadow-sm flex items-center justify-between px-4 z-10">
                      <span className="text-[11px] font-bold text-slate-700 flex items-center gap-1.5">
                        <BookOpen className="w-3.5 h-3.5 text-[#166534]" />
                        Sprout's Journey
                      </span>
                      <span className="text-[10px] font-mono text-[#166534] font-semibold bg-emerald-50 px-2 py-0.5 rounded">
                        Page 02
                      </span>
                    </div>

                    <div className="absolute inset-0 bg-radial-glow pointer-events-none opacity-70" />
                  </div>

                  <div className="mt-3.5 pt-3 border-t border-emerald-100 flex items-center justify-between text-xs text-[#4A6B61]">
                    <span>Physical Print + Handheld AR</span>
                    <Link
                      to="/showcase"
                      className="text-[#166534] font-bold hover:underline flex items-center gap-1"
                    >
                      View Showcase Gallery →
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 2: UNIVERSITY IDENTITY STRIP
          Slim branding band with R26-IM-001 and authentic SLIIT logos
          ========================================================================= */}
      <UniversityBrandingBand />

      {/* =========================================================================
          SECTION 3: THE LEARNING CHALLENGE
          Short accessible explanation of why plant growth concepts are hard
          ========================================================================= */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="The Educational Problem"
            badgeVariant="forest"
            title="Why Teaching Plant Growth is Hard with Static Books"
            subtitle="Grade 1 science curricula introduce living plants, but traditional textbooks fail to communicate the slow, invisible physiological responses that occur over days and weeks."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            <div className="p-7 rounded-3xl bg-[#F7FBF8] border border-emerald-900/10 shadow-2xs hover:shadow-md transition-all">
              <div className="w-12 h-12 rounded-2xl bg-[#DCFCE7] text-[#166534] flex items-center justify-center text-xl mb-4 shadow-2xs">
                ⏳
              </div>
              <h3 className="text-base font-bold text-[#172B26] mb-2">
                Temporal Invisibility
              </h3>
              <p className="text-xs sm:text-sm text-[#4A6B61] leading-relaxed">
                Plant growth and moisture absorption happen gradually over long intervals. Six-year-old learners struggle to connect single watering actions with long-term survival from flat diagrams alone.
              </p>
            </div>

            <div className="p-7 rounded-3xl bg-[#F7FBF8] border border-emerald-900/10 shadow-2xs hover:shadow-md transition-all">
              <div className="w-12 h-12 rounded-2xl bg-[#DCFCE7] text-[#166534] flex items-center justify-center text-xl mb-4 shadow-2xs">
                💪
              </div>
              <h3 className="text-base font-bold text-[#172B26] mb-2">
                Handheld AR Fatigue
              </h3>
              <p className="text-xs sm:text-sm text-[#4A6B61] leading-relaxed">
                Young children develop arm fatigue (the 'Gorilla Arm Effect') after holding mobile devices upright during continuous AR sessions. Conventional tools lack automated resting modes.
              </p>
            </div>

            <div className="p-7 rounded-3xl bg-[#F7FBF8] border border-emerald-900/10 shadow-2xs hover:shadow-md transition-all">
              <div className="w-12 h-12 rounded-2xl bg-[#DCFCE7] text-[#166534] flex items-center justify-center text-xl mb-4 shadow-2xs">
                🌱
              </div>
              <h3 className="text-base font-bold text-[#172B26] mb-2">
                Abstract Ecological Causality
              </h3>
              <p className="text-xs sm:text-sm text-[#4A6B61] leading-relaxed">
                Without dynamic emotional feedback, young children cannot perceive whether a seedling is thriving, thirsty, or light-deprived, missing vital early empathy for living things.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 4: OUR RESEARCH SOLUTION
          Concept: physical storybook + mobile AR + plant feedback + narrative + IoT
          ========================================================================= */}
      <section className="py-20 bg-[#F7FBF8] border-y border-emerald-900/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="The Proposed Solution"
            badgeVariant="forest"
            title="An Integrated Cyber-Physical AR Storybook Ecosystem"
            subtitle="Bridging physical book reading with real-time IoT ambient sensing, affective 3D plant feedback, consequence-based storytelling, and child-centered ergonomics."
          />

          <div className="p-8 sm:p-10 rounded-3xl bg-white border border-emerald-900/10 shadow-sm max-w-5xl mx-auto">
            {/* Visual Ecosystem Architecture Flow */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
              <div className="p-4 rounded-2xl bg-[#F7FBF8] border border-emerald-900/10 text-center">
                <span className="text-2xl block mb-1">📖</span>
                <span className="text-xs font-bold text-[#172B26] block">Physical Storybook</span>
                <span className="text-[11px] text-[#4A6B61]">Tangible page anchors</span>
              </div>
              <div className="p-4 rounded-2xl bg-[#F7FBF8] border border-emerald-900/10 text-center">
                <span className="text-2xl block mb-1">📱</span>
                <span className="text-xs font-bold text-[#172B26] block">Handheld AR App</span>
                <span className="text-[11px] text-[#4A6B61]">Unity AR Foundation</span>
              </div>
              <div className="p-4 rounded-2xl bg-[#F7FBF8] border border-emerald-900/10 text-center">
                <span className="text-2xl block mb-1">🌱</span>
                <span className="text-xs font-bold text-[#172B26] block">Affective 3D Plant</span>
                <span className="text-[11px] text-[#4A6B61]">Turgor shaders & audio</span>
              </div>
              <div className="p-4 rounded-2xl bg-[#F7FBF8] border border-emerald-900/10 text-center">
                <span className="text-2xl block mb-1">📡</span>
                <span className="text-xs font-bold text-[#172B26] block">IoT Sensing Node</span>
                <span className="text-[11px] text-[#4A6B61]">ESP32 + Firebase sync</span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-[#4A6B61] leading-relaxed text-center max-w-2xl mx-auto mb-6">
              When learners scan a storybook page, a living 3D garden appears over the paper. Classroom sunlight and soil moisture feed into the simulation, while the plant responds through emotional cues—perking up when watered and drooping when parched.
            </p>

            <div className="text-center">
              <Link
                to="/architecture"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-[#166534] hover:underline"
              >
                <span>Learn more about the full technical architecture</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 5: FOUR RESEARCH COMPONENTS
          Four compact consistent cards with verified 1-2 sentence summaries
          ========================================================================= */}
      <section className="py-20 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="Modular System Design"
            badgeVariant="forest"
            title="Four Specialized Research Components"
            subtitle="The investigation is divided into four coordinated subsystems, each addressing a distinct technological and pedagogical challenge."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {RESEARCH_COMPONENTS.map((comp) => (
              <div
                key={comp.id}
                className="p-6 rounded-3xl bg-[#F7FBF8] border border-emerald-900/10 hover:border-[#166534]/40 hover:bg-white hover:shadow-lg transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-3.5">
                    <span className="text-[11px] font-mono font-bold text-[#166534] bg-[#DCFCE7] px-2 py-0.5 rounded-md">
                      C0{comp.number}
                    </span>
                    <span className="text-[10px] text-slate-400 font-mono">
                      {comp.studentId}
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-[#172B26] group-hover:text-[#166534] transition-colors mb-1.5 leading-snug">
                    {comp.title}
                  </h3>

                  <span className="text-[11px] font-semibold text-[#166534] block mb-2.5">
                    Lead: {comp.researcher}
                  </span>

                  <p className="text-xs text-[#4A6B61] leading-relaxed mb-4">
                    {comp.summary}
                  </p>
                </div>

                <div className="pt-3.5 border-t border-emerald-900/10">
                  <Link
                    to="/components"
                    className="text-xs font-bold text-[#166534] flex items-center justify-between group-hover:translate-x-1 transition-transform"
                  >
                    <span>Component Specification</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <Button to="/components" variant="secondary" size="md">
              View Complete Components Breakdown →
            </Button>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 6: HOW THE AR STORYBOOK WORKS
          Simple 4-Step Learning Journey
          ========================================================================= */}
      <section className="py-20 bg-[#F7FBF8] border-y border-emerald-900/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="User Experience Flow"
            badgeVariant="forest"
            title="How the AR Storybook Works"
            subtitle="A simplified four-step learning experience tailored for 6-year-old primary school learners."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {PROJECT_INFO.proposedSolution.howItWorksSteps.map((item) => (
              <div
                key={item.step}
                className="p-6 sm:p-7 rounded-3xl bg-white border border-emerald-900/10 shadow-2xs hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div>
                  <span className="text-3xl font-black text-[#166534]/30 font-mono block mb-3">
                    {item.step}
                  </span>
                  <h3 className="text-sm font-bold text-[#172B26] mb-1">
                    {item.title}
                  </h3>
                  <span className="text-[11px] font-semibold text-[#22A06B] block mb-2">
                    {item.subtitle}
                  </span>
                  <p className="text-xs text-[#4A6B61] leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <span className="text-[11px] text-slate-400 italic">
              Note: The illustrative web demo visualizes conceptual mechanics; full testing is conducted with physical storybooks in primary classrooms.
            </span>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 7: MEET OUR RESEARCH TEAM
          Four-portrait teaser matching Change 03 with exact names and roles
          ========================================================================= */}
      <section className="py-20 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Eyebrow & Headline Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12 pb-6 border-b border-emerald-900/10">
            <div>
              <span className="text-[11px] font-bold uppercase tracking-wider text-[#166534] block mb-2">
                THE PEOPLE BEHIND OUR AR STORYBOOK
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#172B26] tracking-tight leading-tight">
                Four minds. One shared vision.
              </h2>
            </div>

            <div>
              <Link
                to="/about"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-[#166534] hover:text-[#14532D] hover:underline"
              >
                <span>Meet the team & supervisors</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

          {/* 4 Large Portrait Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {RESEARCHERS.map((member, idx) => (
              <Link
                key={member.id}
                to="/about"
                className="p-5 rounded-3xl bg-[#F7FBF8] border border-emerald-900/10 hover:border-[#166534]/50 hover:bg-white hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  {/* Portrait Area Placeholder / Authentic Headshot */}
                  <div className="relative w-full aspect-[4/5] rounded-2xl bg-gradient-to-b from-[#DCFCE7]/60 to-white overflow-hidden border border-emerald-200/80 mb-4 flex items-center justify-center shadow-inner">
                    <div className="w-20 h-20 rounded-2xl bg-white shadow-xs flex items-center justify-center text-3xl font-extrabold text-[#166534] group-hover:scale-105 transition-transform">
                      {member.name.split(' ').map((n) => n[0]).join('').slice(0, 2)}
                    </div>

                    <span className="absolute top-3 left-3 px-2 py-0.5 rounded-md bg-[#166534] text-white text-[10px] font-mono font-bold">
                      C0{idx + 1}
                    </span>

                    <span className="absolute bottom-2.5 right-2.5 text-[9px] font-mono text-slate-400 bg-white/90 px-1.5 py-0.5 rounded">
                      {member.studentId}
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-[#172B26] group-hover:text-[#166534] transition-colors leading-snug">
                    {member.name}
                  </h3>

                  {member.preferredName && (
                    <span className="text-[11px] text-[#4A6B61] block mb-1">
                      {member.preferredName}
                    </span>
                  )}

                  <p className="text-xs text-[#166534] font-semibold mt-1">
                    {member.componentTitle}
                  </p>
                </div>

                <div className="pt-3 mt-4 border-t border-emerald-900/10 text-[11px] text-slate-400 flex items-center justify-between">
                  <span>SLIIT Interactive Media</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#166534] group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 8: EXPLORE & CONNECT
          Final CTA offering pathways to Documents, Presentations, and Contact
          ========================================================================= */}
      <section className="py-20 bg-[#F7FBF8] border-t border-emerald-900/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-[#172B26] via-[#166534] to-[#172B26] text-white flex flex-col md:flex-row items-center justify-between gap-8 shadow-xl">
            <div className="space-y-2 text-center md:text-left">
              <Badge variant="mint" size="sm">
                Research Dissemination & Enquiries
              </Badge>
              <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
                Explore Documentation or Request a Demo
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 max-w-xl leading-relaxed">
                Access official research proposal reports, progress presentations, and architecture specifications, or connect with our supervision team for school trials.
              </p>
            </div>

            <div className="flex flex-wrap items-center justify-center md:justify-end gap-3 shrink-0">
              <Button to="/documents" variant="secondary" size="md">
                Download Documents
              </Button>
              <Button to="/presentations" variant="outline" size="md" className="border-white/20 text-white hover:bg-white/10">
                View Presentations
              </Button>
              <Button to="/contact?type=Request%20a%20Demo" variant="nature" size="md">
                Request a Demo ↗
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
