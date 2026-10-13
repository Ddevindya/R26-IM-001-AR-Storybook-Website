import React, { useEffect, useState } from 'react';
import { Download, ExternalLink, FileText, Maximize2, X } from 'lucide-react';
import { Link } from 'react-router-dom';

type PresentationItem = {
  id: 'proposal' | 'pp1' | 'pp2';
  code: string;
  title: string;
  subtitle: string;
  description: string;
  pages?: number;
  pdfUrl?: string;
  coverUrl: string;
};

// Public assets are located in public/presentations/.
const presentations: PresentationItem[] = [
  {
    id: 'proposal',
    code: 'PP',
    title: 'Proposal Presentation',
    subtitle: 'Initial Research Proposal',
    description: 'An introduction to our research problem, objectives, and proposed AR storybook framework.',
    coverUrl: '/presentations/proposal-presentation-cover.png',
    // Add pdfUrl here only when the actual proposal PDF is available.
  },
  {
    id: 'pp1',
    code: 'PP1',
    title: 'Progress Presentation 1',
    subtitle: 'Research Development & Component Progress',
    description: 'Project progress, research problem, component contributions, prototype development, and technical approaches.',
    pdfUrl: '/presentations/progress-presentation-1.pdf',
    coverUrl: '/presentations/progress-presentation-1-cover.png',
    pages: 38,
  },
  {
    id: 'pp2',
    code: 'PP2',
    title: 'Progress Presentation 2',
    subtitle: 'Architecture, Integration & Research Progress',
    description: 'Research gaps, objectives, integrated system architecture, proposed solutions, and potential educational impact.',
    pdfUrl: '/presentations/progress-presentation-2.pdf',
    coverUrl: '/presentations/progress-presentation-2-cover.png',
    pages: 7,
  },
];

export const PresentationsPage: React.FC = () => {
  const [preview, setPreview] = useState<PresentationItem | null>(null);

  useEffect(() => {
    if (!preview) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setPreview(null);
    };
    document.addEventListener('keydown', onKeyDown);
    return () => document.removeEventListener('keydown', onKeyDown);
  }, [preview]);

  return (
    <div className="min-h-screen bg-white pb-20 pt-24 text-[#172B26]">
      <section className="border-b border-[#DCE9DF] bg-gradient-to-b from-[#F1FAF3] to-white">
        <div className="mx-auto max-w-7xl px-4 pb-14 pt-12 sm:px-6 sm:pb-16 sm:pt-16 lg:px-8">
          <nav aria-label="Breadcrumb" className="mb-10 text-sm text-[#527363]">
            <Link to="/" className="hover:text-[#166534] hover:underline">Home</Link>
            <span aria-hidden="true" className="mx-3">/</span>
            <span className="font-medium text-[#166534]">Presentations</span>
          </nav>
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-[#15803D]">
            R26-IM-001 · Research Presentation Materials
          </p>
          <h1 className="max-w-4xl text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
            The research, presented.
          </h1>
          <p className="mt-5 max-w-3xl text-base leading-relaxed text-[#4A6B61] sm:text-lg">
            Explore the proposal and progress presentations for our Augmented Reality Storybook
            research on plant growth understanding and environmental stewardship.
          </p>
        </div>
      </section>

      <section aria-label="Research presentations" className="mx-auto max-w-7xl px-4 pt-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-7 md:grid-cols-2 lg:grid-cols-3">
          {presentations.map((item) => (
            <article
              key={item.id}
              className="group flex h-full flex-col overflow-hidden rounded-3xl border border-[#DCE9DF] bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#86C8A0] hover:shadow-xl"
            >
              <div className="relative aspect-[16/10] overflow-hidden bg-[#E8F4EC]">
                <img
                  src={item.coverUrl}
                  alt={`${item.title} cover illustration`}
                  className="h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-[1.025]"
                  loading="lazy"
                />
                <span className="absolute left-4 top-4 rounded-lg bg-[#166534] px-3 py-1.5 text-xs font-bold text-white shadow-md">
                  {item.code}
                </span>
                <button
                  type="button"
                  onClick={() => setPreview(item)}
                  className="absolute bottom-3 right-3 inline-flex items-center gap-1.5 rounded-lg bg-white px-3 py-2 text-xs font-semibold text-[#172B26] shadow-md transition-colors hover:bg-[#DCFCE7] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#166534]"
                  aria-label={`Preview cover of ${item.title}`}
                >
                  <Maximize2 className="h-3.5 w-3.5" aria-hidden="true" /> Preview cover
                </button>
              </div>

              <div className="flex flex-1 flex-col px-6 pb-6 pt-6">
                <p className="text-xs font-bold uppercase tracking-widest text-[#15803D]">
                  {item.code} · PRESENTATION
                </p>
                <h2 className="mt-3 text-xl font-extrabold leading-snug tracking-tight text-[#172B26]">
                  {item.title}
                </h2>
                <p className="mt-1 text-sm font-medium text-[#278357]">{item.subtitle}</p>
                <p className="mt-4 flex-1 text-sm leading-relaxed text-[#527363]">{item.description}</p>
                <div className="mt-5 flex items-center gap-2 border-t border-[#E4EEE7] pt-4 text-xs text-[#527363]">
                  <FileText className="h-4 w-4" aria-hidden="true" />
                  {item.pages ? `${item.pages} pages · Research team · PDF` : 'Research team · Cover preview'}
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-2 border-t border-[#E4EEE7] bg-[#F7FBF8] px-6 py-4">
                {item.pdfUrl ? (
                  <>
                    <a
                      href={item.pdfUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-xl border border-[#B8D8C2] bg-white px-4 py-2.5 text-sm font-semibold text-[#166534] transition-colors hover:bg-[#E8F5EC]"
                    >
                      <ExternalLink className="h-4 w-4" aria-hidden="true" /> Open PDF
                    </a>
                    <a
                      href={item.pdfUrl}
                      download
                      className="inline-flex items-center gap-2 rounded-xl bg-[#166534] px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[#14532D]"
                    >
                      <Download className="h-4 w-4" aria-hidden="true" /> Download PDF
                    </a>
                  </>
                ) : (
                  <button
                    type="button"
                    onClick={() => setPreview(item)}
                    className="inline-flex items-center gap-2 rounded-xl border border-[#B8D8C2] bg-white px-4 py-2.5 text-sm font-semibold text-[#166534] transition-colors hover:bg-[#E8F5EC]"
                  >
                    <Maximize2 className="h-4 w-4" aria-hidden="true" /> View Proposal Cover
                  </button>
                )}
              </div>
            </article>
          ))}
        </div>
      </section>

      {preview && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-[#0F241A]/75 p-4 backdrop-blur-sm"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) setPreview(null);
          }}
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-label={`${preview.title} cover preview`}
            className="relative w-full max-w-4xl overflow-hidden rounded-2xl bg-white p-4 shadow-2xl sm:p-6"
          >
            <div className="mb-4 pr-12">
              <p className="text-xs font-bold uppercase tracking-widest text-[#15803D]">
                {preview.code} · Cover Preview
              </p>
              <h2 className="mt-1 text-lg font-bold text-[#172B26]">{preview.title}</h2>
            </div>
            <button
              type="button"
              onClick={() => setPreview(null)}
              aria-label="Close cover preview"
              className="absolute right-4 top-4 rounded-full bg-[#EAF5ED] p-2 text-[#166534] hover:bg-[#DCFCE7]"
            >
              <X className="h-5 w-5" aria-hidden="true" />
            </button>
            <div className="max-h-[70vh] overflow-auto rounded-lg">
              <img
                src={preview.coverUrl}
                alt={`${preview.title} cover enlarged`}
                className="max-h-[70vh] w-full object-contain"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
