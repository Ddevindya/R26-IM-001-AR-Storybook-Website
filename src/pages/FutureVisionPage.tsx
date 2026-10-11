import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Sparkles, 
  School, 
  BookOpen, 
  Lightbulb, 
  Compass, 
  Handshake, 
  ArrowRight, 
  CheckCircle2, 
  Layers, 
  Globe2 
} from 'lucide-react';
import { SectionHeader } from '../components/common/SectionHeader';
import { Badge } from '../components/common/Badge';
import { Button } from '../components/common/Button';

export const FutureVisionPage: React.FC = () => {
  const futureStorybookTopics = [
    {
      title: "The Buzzing Meadow: Pollination & Bees",
      desc: "Introducing 5–6-year-olds to flower fertilization and insect symbiosis using interactive AR nectar gathering.",
      tag: "Stage 2 Science"
    },
    {
      title: "Cloud to River: The Primary Water Cycle",
      desc: "Visualizing evaporation, condensation, and precipitation using real-world classroom humidity sensors.",
      tag: "Stage 1 & 2 Science"
    },
    {
      title: "Roots Beneath: Underground Soil & Worms",
      desc: "Simulating root growth, nutrient uptake, and organic decomposition through AR cross-section book overlays.",
      tag: "Stage 1 Biology"
    },
    {
      title: "Sun to Sugar: The Leaf Kitchen",
      desc: "Demystifying photosynthesis through playful particle games without premature chemical formulas.",
      tag: "Stage 3 Science"
    }
  ];

  return (
    <div className="min-h-screen bg-white pt-28 pb-20">
      {/* Header */}
      <div className="bg-gradient-to-b from-[#E2F8EE]/60 via-[#F2EDFF]/40 to-white py-14 sm:py-20 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 mb-3">
              <Badge variant="green" size="md">
                Post-Evaluation Roadmap
              </Badge>
              <span className="text-xs font-mono text-slate-500">
                Commercialization & Scalability
              </span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#17243D] tracking-tight leading-tight">
              Future Vision & Commercialization
            </h1>
            <p className="mt-4 text-base sm:text-lg text-[#536482] leading-relaxed">
              Envisioning the translation of our research findings into scalable primary classroom kits, international publishing partnerships, and expanded environmental STEM storybooks.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 space-y-20">
        {/* SECTION 1: CLASSROOM ADOPTION ROADMAP */}
        <section className="space-y-10">
          <SectionHeader
            badge="Primary School Adoption"
            badgeVariant="green"
            title="From Lab Research to Classroom Reality"
            subtitle="How the cyber-physical AR storybook concept can be deployed in everyday primary science classrooms."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            <div className="p-7 rounded-3xl bg-white border border-slate-200 shadow-2xs hover:shadow-lg transition-all">
              <div className="w-12 h-12 rounded-2xl bg-[#EAF6FF] text-[#0284C7] flex items-center justify-center text-xl mb-4">
                🏫
              </div>
              <h3 className="text-base font-bold text-[#17243D] mb-2">
                Plug-and-Play IoT Classroom Pods
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                A single solar-friendly ESP32-S3 sensor station sits in the classroom window garden, serving real-time telemetry to all student tablets simultaneously without complex setup.
              </p>
            </div>

            <div className="p-7 rounded-3xl bg-white border border-slate-200 shadow-2xs hover:shadow-lg transition-all">
              <div className="w-12 h-12 rounded-2xl bg-[#F2EDFF] text-[#7966E8] flex items-center justify-center text-xl mb-4">
                📚
              </div>
              <h3 className="text-base font-bold text-[#17243D] mb-2">
                Teacher Guided Lesson Plans
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Accompanying physical curriculum cards aligned with Cambridge Primary Science Stage 1, guiding teachers through structured 30-minute interactive sessions.
              </p>
            </div>

            <div className="p-7 rounded-3xl bg-white border border-slate-200 shadow-2xs hover:shadow-lg transition-all">
              <div className="w-12 h-12 rounded-2xl bg-[#E2F8EE] text-[#54B987] flex items-center justify-center text-xl mb-4">
                🧸
              </div>
              <h3 className="text-base font-bold text-[#17243D] mb-2">
                Inclusive Multi-Modality
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                The ergonomic AR-to-2D transition ensures learners with varied physical motor strengths or sensory sensitivities participate comfortably alongside peers.
              </p>
            </div>
          </div>
        </section>

        {/* SECTION 2: DIGITAL STORYBOOK SERIES EXPANSION */}
        <section className="p-8 sm:p-12 rounded-3xl bg-slate-50 border border-slate-200">
          <SectionHeader
            badge="Curriculum Expansion"
            badgeVariant="green"
            title="The 'Sprout & Friends' Storybook Universe"
            subtitle="Expanding beyond single plant growth to create an ecosystem of environmental stewardship titles."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8">
            {futureStorybookTopics.map((item, idx) => (
              <div key={idx} className="p-6 rounded-2xl bg-white border border-slate-200 shadow-2xs">
                <div className="flex items-center justify-between mb-2">
                  <Badge variant="green" size="sm">
                    {item.tag}
                  </Badge>
                  <span className="text-[10px] font-mono text-slate-400">Concept #{idx + 1}</span>
                </div>
                <h4 className="text-base font-bold text-[#17243D] mb-1">
                  {item.title}
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* SECTION 3: COMMERCIALIZATION & PARTNERSHIPS */}
        <section className="space-y-8">
          <SectionHeader
            badge="Commercial Potential"
            badgeVariant="green"
            title="Partnership & Licensing Opportunities"
            subtitle="Opening doors to collaboration with educational publishers, hardware makers, and international school networks."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-8 rounded-3xl bg-white border border-slate-200 shadow-2xs space-y-3">
              <h4 className="text-lg font-bold text-[#17243D] flex items-center gap-2">
                <BookOpen className="w-5 h-5 text-[#7966E8]" />
                EdTech & Publishing Co-Development
              </h4>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Licensing the hybrid interaction framework and affective 3D plant shader engine to educational publishing houses seeking to enrich conventional textbooks with modern AR.
              </p>
            </div>

            <div className="p-8 rounded-3xl bg-white border border-slate-200 shadow-2xs space-y-3">
              <h4 className="text-lg font-bold text-[#17243D] flex items-center gap-2">
                <Globe2 className="w-5 h-5 text-[#54B987]" />
                School Pilot Programs
              </h4>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Partnering with international schools in Colombo, Kandy, and regional primary education centers to test longitudinal learning retention across full academic terms.
              </p>
            </div>
          </div>

          {/* Academic Transparency Note */}
          <div className="p-4 rounded-2xl bg-amber-50 border border-amber-200 text-xs text-amber-900">
            <strong>Transparency Notice:</strong> Commercialization pathways outlined here represent future potential following graduation and formal research thesis defense, not an active commercial commercial product at this stage.
          </div>
        </section>

        {/* CTA BANNER */}
        <section className="p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-[#17243D] via-[#243556] to-[#17243D] text-white flex flex-col md:flex-row items-center justify-between gap-8 shadow-xl">
          <div className="space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-400">
              Future Collaboration
            </span>
            <h3 className="text-2xl font-extrabold tracking-tight">
              Interested in Piloting or Partnering With Us?
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 max-w-xl">
              We welcome dialogue with educational technology researchers, school administrators, and science educators interested in early childhood AR.
            </p>
          </div>

          <Button to="/contact?type=Partnership" variant="nature" size="lg">
            Submit Partnership Enquiry →
          </Button>
        </section>
      </div>
    </div>
  );
};
