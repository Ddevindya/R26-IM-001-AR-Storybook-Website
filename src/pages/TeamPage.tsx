import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, GraduationCap } from 'lucide-react';
import { RESEARCHERS, SUPERVISORS } from '../data/teamData';

type PortraitProps = {
  src: string;
  alt: string;
  fallback: React.ReactNode;
  className?: string;
};

const Portrait: React.FC<PortraitProps> = ({ src, alt, fallback, className = '' }) => {
  const [failed, setFailed] = useState(false);

  return (
    <div className={`relative overflow-hidden bg-[#EAF7EE] ${className}`}>
      {failed ? (
        <div className="flex h-full w-full items-center justify-center text-[#166534]">
          {fallback}
        </div>
      ) : (
        <img
          src={src}
          alt={alt}
          loading="lazy"
          className="h-full w-full object-cover object-top"
          onError={() => setFailed(true)}
        />
      )}
    </div>
  );
};

const memberPhotos: Record<string, string> = {
  IT22641410: '/team/c01-wijayarathne.jpeg',
  IT22179258: '/team/c02-palliyaguruge.jpeg',
  IT22237804: '/team/c03-amarawardhane.jpeg',
  IT22626974: '/team/c04-dissanayaka.jpeg',
};

const supervisorPhotos: Record<string, string> = {
  'aruna': '/supervisors/aruna-ishara-gamage.jpg',
  'nushkan': '/supervisors/nushkan-nizmi.jpg',
};

const researcherSummaries: Record<string, string> = {
  IT22641410: 'Making handheld AR storybook interactions comfortable and accessible for young learners.',
  IT22179258: 'Bringing virtual plants to life through expressive visual states and feedback.',
  IT22237804: 'Connecting children’s care choices with meaningful story outcomes.',
  IT22626974: 'Connecting environmental sensor readings to a responsive AR plant simulation.',
};

export const TeamPage: React.FC = () => (
  <div className="min-h-screen bg-white text-[#172B26]">
    {/* BREADCRUMB + INTRO */}
    <section className="relative overflow-hidden bg-gradient-to-br from-white via-[#F8FCF9] to-[#EEF9F1] pt-32 pb-16 sm:pt-36 sm:pb-20">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_95%_10%,rgba(134,207,153,0.17),transparent_52%)]" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <nav aria-label="Breadcrumb" className="mb-14 flex items-center gap-3 text-xs text-[#557366]">
          <Link to="/" className="font-semibold text-[#166534] hover:underline">Home</Link>
          <span>/</span>
          <span>About Us</span>
        </nav>
        <div className="max-w-5xl">
          <p className="mb-5 flex items-center gap-2 text-[11px] font-extrabold uppercase tracking-[0.18em] text-[#166534]">
            <span className="h-2 w-2 rounded-full bg-[#22A06B]" /> THE TEAM BEHIND R26-IM-001
          </p>
          <h1 className="max-w-4xl text-4xl font-extrabold leading-[1.12] tracking-tight text-[#172B26] sm:text-5xl lg:text-[66px]">
            Growing curiosity.<br />
            <span className="text-[#166534]">Nurturing stewardship.</span>
          </h1>
          <p className="mt-7 max-w-3xl text-base leading-relaxed text-[#4A6B61] sm:text-lg">
            Four Interactive Media researchers working together to help Grade 1 learners explore tomato plant growth through a physical storybook, augmented reality, and responsive environmental feedback.
          </p>
        </div>
      </div>
    </section>

    {/* SIMPLE FOUR-PORTRAIT TEAM GRID */}
    <section className="mx-auto max-w-7xl px-4 pb-20 pt-14 sm:px-6 lg:px-8 lg:pb-28">
      <div className="mb-8 flex flex-wrap items-end justify-between gap-3">
        <div>
          <span className="text-[11px] font-bold uppercase tracking-[0.16em] text-[#166534]">UNDERGRADUATE RESEARCH TEAM</span>
          <h2 className="mt-2 text-2xl font-extrabold tracking-tight sm:text-3xl">Meet the four component leads</h2>
        </div>
        <span className="rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1.5 text-xs font-semibold text-[#166534]">SLIIT · Interactive Media</span>
      </div>
      <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
        {RESEARCHERS.map((member, index) => (
          <article key={member.id} className="min-w-0">
            <div className="group relative aspect-[4/4.2] overflow-hidden rounded-[24px] bg-[#E8F5EB] ring-1 ring-emerald-900/10">
              <Portrait
                src={memberPhotos[member.studentId ?? ''] || ''}
                alt={`${member.name} - research team member`}
                fallback={<span className="text-5xl font-black">{member.name.split(' ').map((word) => word.charAt(0)).join('').slice(0, 2)}</span>}
                className="h-full w-full transition-transform duration-500 group-hover:scale-[1.025]"
              />
              <span className="absolute bottom-4 left-4 rounded-lg bg-white/95 px-3 py-1.5 text-xs font-extrabold text-[#166534] shadow-sm">
                {member.componentNumber || `C${index + 1}`}
              </span>
            </div>
            <h3 className="mt-5 text-lg font-extrabold leading-snug">{member.name}</h3>
            <p className="mt-1 text-xs font-semibold leading-relaxed text-[#166534]">{member.componentTitle}</p>
            <p className="mt-2 font-mono text-xs text-[#6B7F77]">{member.studentId}</p>
            <p className="mt-3 text-xs leading-relaxed text-[#4A6B61]">
              {researcherSummaries[member.studentId ?? ''] || member.bio}
            </p>
          </article>
        ))}
      </div>
    </section>

    {/* SIMPLE SUPERVISOR PORTRAITS */}
    <section className="border-t border-emerald-900/10 bg-[#F7FBF8] py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 flex flex-col justify-between gap-5 md:flex-row md:items-end">
          <div>
            <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#166534]">ACADEMIC SUPERVISION</p>
            <h2 className="mt-4 text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl">
              Guidance for<br />the research journey.
            </h2>
          </div>
          <p className="text-sm leading-7 text-[#4A6B61]">Interactive Media<br />Sri Lanka Institute of Information Technology</p>
        </div>
        <div className="grid grid-cols-1 gap-x-12 gap-y-10 md:grid-cols-2">
          {SUPERVISORS.map((sup, index) => {
            const key = sup.name.toLowerCase().includes('aruna') ? 'aruna' : 'nushkan';
            return (
              <article key={sup.id} className="flex flex-col items-start gap-5 sm:flex-row sm:gap-6">
                <Portrait
                  src={supervisorPhotos[key]}
                  alt={`${sup.name} - academic supervisor`}
                  fallback={<GraduationCap className="h-14 w-14" />}
                  className="aspect-square w-40 shrink-0 rounded-[22px] sm:w-44"
                />
                <div className="pt-1">
                  <p className="text-[11px] font-extrabold uppercase tracking-[0.13em] text-[#166534]">
                    {index === 0 ? 'SUPERVISOR' : 'CO-SUPERVISOR'}
                  </p>
                  <h3 className="mt-4 text-xl font-extrabold text-[#172B26]">{sup.name}</h3>
                  <p className="mt-4 text-sm text-[#4A6B61]">{index === 0 ? 'Senior Lecturer' : 'Lecturer'}</p>
                  <p className="mt-1 text-sm text-[#4A6B61]">Interactive Media · SLIIT</p>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>

    <div className="mx-auto flex max-w-7xl justify-end px-4 py-10 sm:px-6 lg:px-8">
      <Link to="/research" className="inline-flex items-center gap-2 text-sm font-bold text-[#166534] hover:underline">
        Explore our research <ArrowRight className="h-4 w-4" />
      </Link>
    </div>
  </div>
);

export default TeamPage;
