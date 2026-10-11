import React from 'react';
import { 
  GraduationCap, 
  Mail, 
  CheckCircle2, 
  ShieldCheck,
  ArrowRight,
  Globe,
  ExternalLink
} from 'lucide-react';
import { RESEARCHERS, SUPERVISORS } from '../data/teamData';
import { SectionHeader } from '../components/common/SectionHeader';
import { Badge } from '../components/common/Badge';

export const TeamPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-white pt-28 pb-20 text-[#172B26]">
      {/* Header */}
      <div className="bg-gradient-to-b from-[#DCFCE7]/50 via-[#F7FBF8] to-white py-14 sm:py-20 border-b border-emerald-900/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 mb-3">
              <Badge variant="forest" size="md">
                Research Team & Academic Supervision
              </Badge>
              <span className="text-xs font-mono text-slate-500">
                SLIIT Faculty of Computing
              </span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#172B26] tracking-tight leading-tight">
              About Us & Research Team
            </h1>
            <p className="mt-4 text-base sm:text-lg text-[#4A6B61] leading-relaxed">
              Final-year undergraduate researchers and academic supervisors at the Sri Lanka Institute of Information Technology (SLIIT) collaborating across child-centered HCI, affective 3D graphics, game storytelling, and embedded IoT.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 space-y-20">
        {/* RESEARCHERS SECTION */}
        <section className="space-y-10">
          <SectionHeader
            badge="Undergraduate Researchers"
            badgeVariant="forest"
            title="Component Research Leads"
            subtitle="Each researcher leads an individual component investigation while collaborating on the unified cyber-physical AR storybook."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {RESEARCHERS.map((member) => (
              <div
                key={member.id}
                className="p-7 sm:p-8 rounded-3xl bg-white border border-emerald-900/10 shadow-2xs hover:shadow-xl hover:border-[#166534]/40 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Card Top */}
                  <div className="flex items-start justify-between gap-4 mb-6">
                    <div className="flex items-center gap-4">
                      {/* Avatar Placeholder with initials */}
                      <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-[#166534] to-[#22A06B] p-0.5 shadow-sm">
                        <div className="w-full h-full bg-[#DCFCE7] rounded-[14px] flex items-center justify-center text-lg font-bold text-[#166534]">
                          {member.name.split(' ').map((n) => n[0]).join('').slice(0, 2)}
                        </div>
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <h3 className="text-lg font-bold text-[#172B26]">
                            {member.name}
                          </h3>
                        </div>
                        {member.preferredName && (
                          <span className="text-xs text-[#4A6B61] block">
                            {member.preferredName}
                          </span>
                        )}
                        <span className="text-xs font-semibold text-[#166534] block mt-0.5">
                          {member.role}
                        </span>
                        <span className="text-[11px] text-slate-500 block">
                          {member.institution}
                        </span>
                      </div>
                    </div>

                    <div className="text-right">
                      <Badge variant="forest" size="sm">
                        {member.componentNumber}
                      </Badge>
                      <span className="text-[11px] font-mono text-slate-400 block mt-1">
                        {member.studentId}
                      </span>
                    </div>
                  </div>

                  {/* Component Title Pill */}
                  <div className="p-3 rounded-xl bg-emerald-50/70 border border-emerald-200/60 mb-4">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#166534] block">
                      Component Specialization
                    </span>
                    <span className="text-xs font-bold text-[#172B26] block mt-0.5">
                      {member.componentTitle}
                    </span>
                  </div>

                  <p className="text-xs text-[#4A6B61] leading-relaxed mb-4">
                    {member.bio}
                  </p>

                  {/* Key Contributions */}
                  <div className="space-y-1.5 pt-3 border-t border-slate-100 mb-6">
                    <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block mb-1">
                      Key Technical Contributions:
                    </span>
                    {member.contributions.map((cont, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-[11px] text-[#172B26]">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#22A06B] shrink-0 mt-0.5" />
                        <span>{cont}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Contact Links */}
                <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-[11px] text-slate-400 font-mono">
                    SLIIT Interactive Media Specialization
                  </span>

                  <div className="flex items-center gap-2">
                    <a
                      href={`mailto:${member.email}`}
                      className="p-2 rounded-xl bg-emerald-50 hover:bg-emerald-100 text-[#166534] transition-colors"
                      title="Send Academic Email"
                    >
                      <Mail className="w-3.5 h-3.5" />
                    </a>
                    <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-xl bg-emerald-50 hover:bg-emerald-100 text-[#166534] transition-colors"
                      title="LinkedIn Profile"
                    >
                      <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                        <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ACADEMIC SUPERVISION SECTION */}
        <section className="space-y-10 pt-8 border-t border-slate-200">
          <SectionHeader
            badge="Academic Governance"
            badgeVariant="forest"
            title="Academic Supervisors"
            subtitle="Guided by senior academics from the Department of Computer Science & Software Engineering / Interactive Media at SLIIT."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {SUPERVISORS.map((sup) => (
              <div
                key={sup.id}
                className="p-7 sm:p-8 rounded-3xl bg-gradient-to-br from-[#F7FBF8] to-white border border-emerald-900/10 shadow-2xs hover:shadow-lg transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-16 h-16 rounded-2xl bg-[#DCFCE7] text-[#166534] flex items-center justify-center text-xl font-bold shadow-2xs">
                      <GraduationCap className="w-8 h-8 text-[#166534]" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-[#172B26]">
                        {sup.name}
                      </h3>
                      <span className="text-xs font-bold text-[#166534] block">
                        {sup.role}
                      </span>
                      <span className="text-[11px] text-slate-500 block">
                        {sup.institution}
                      </span>
                    </div>
                  </div>

                  <p className="text-xs text-[#4A6B61] leading-relaxed mb-4">
                    {sup.bio}
                  </p>

                  <div className="space-y-1.5 pt-3 border-t border-slate-100 mb-6">
                    <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block mb-1">
                      Supervisory Guidance:
                    </span>
                    {sup.contributions.map((c, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-[11px] text-[#172B26]">
                        <ShieldCheck className="w-3.5 h-3.5 text-[#22A06B] shrink-0 mt-0.5" />
                        <span>{c}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs">
                  <span className="text-slate-500">{sup.department}</span>
                  <a
                    href={`mailto:${sup.email}`}
                    className="font-bold text-[#166534] hover:underline flex items-center gap-1"
                  >
                    <span>Contact Supervisor</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};
