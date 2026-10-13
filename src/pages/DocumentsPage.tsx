import React, { useState } from 'react';
import {
  Download,
  Eye,
  Calendar,
  Users,
  Clock,
  Search,
  Info,
} from 'lucide-react';
import { RESEARCH_DOCUMENTS } from '../data/publicationsData';
import { Badge } from '../components/common/Badge';
import type { PublicationDocument } from '../types';

// Uses the same photos as the Home Page.
const teamPhotoByStudentId: Record<string, string> = {
  IT22641410: '/team/c01-wijayarathne.jpeg',
  IT22179258: '/team/c02-palliyaguruge.jpeg',
  IT22237804: '/team/c03-amarawardhane.jpeg',
  IT22626974: '/team/c04-dissanayaka.jpeg',
};

export const DocumentsPage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState<string>('');

  const individualDocs = RESEARCH_DOCUMENTS.filter(
    (doc) => doc.category === 'individual' &&
      (doc.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
       doc.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
       (doc.authorMember && doc.authorMember.toLowerCase().includes(searchQuery.toLowerCase())))
  );

  const renderDocumentRow = (doc: PublicationDocument) => {
    const photoUrl = teamPhotoByStudentId[doc.studentId ?? ''];

    return (
      <div
        key={doc.id}
        className="p-6 sm:p-7 rounded-2xl bg-white border border-emerald-900/10 hover:border-[#166534]/40 hover:shadow-md transition-all duration-200 flex flex-col md:flex-row md:items-center justify-between gap-6 group"
      >
        <div className="flex items-start gap-4 min-w-0">
          {/* Researcher portrait. Initials are visible if the photo is unavailable. */}
          <div className="relative w-16 h-20 sm:w-20 sm:h-24 rounded-xl bg-[#DCFCE7] border border-emerald-200 overflow-hidden shrink-0 shadow-sm flex items-center justify-center">
            <span className="text-lg font-extrabold text-[#166534]">
              {doc.componentNumber ?? 'AR'}
            </span>
            {photoUrl && (
              <img
                src={photoUrl}
                alt={`${doc.authorMember ?? 'Researcher'} profile portrait`}
                className="absolute inset-0 h-full w-full object-cover object-top transition-transform duration-300 group-hover:scale-105"
                loading="lazy"
                onError={(event) => {
                  event.currentTarget.style.display = 'none';
                }}
              />
            )}
            <span className="absolute bottom-1 left-1 z-10 rounded-md bg-[#166534] px-1.5 py-0.5 text-[10px] font-bold text-white shadow-sm">
              {doc.componentNumber}
            </span>
          </div>

          <div className="space-y-1.5 min-w-0">
            <div className="flex flex-wrap items-center gap-2">
              <Badge variant="forest" size="sm">{doc.type}</Badge>
              {doc.studentId && (
                <span className="text-[11px] font-mono font-semibold text-slate-500 bg-slate-100 px-2 py-0.5 rounded">
                  {doc.studentId}
                </span>
              )}
              <span className="text-[11px] text-slate-400 flex items-center gap-1 font-mono">
                <Calendar className="w-3 h-3" />{doc.date}
              </span>
            </div>
            <h3 className="text-base sm:text-lg font-bold text-[#172B26] group-hover:text-[#166534] transition-colors leading-snug">
              {doc.title}
            </h3>
            <p className="text-xs text-[#4A6B61] leading-relaxed max-w-3xl">
              {doc.description}
            </p>
            <div className="flex flex-wrap items-center gap-3 pt-1 text-[11px] text-slate-500">
              <span className="font-semibold text-slate-700 flex items-center gap-1">
                <Users className="w-3 h-3 text-[#166534]" />{doc.authors.join(', ')}
              </span>
              <span>•</span>
              <span className="font-mono text-slate-600">
                {doc.isAvailable ? doc.fileSize : 'File pending upload'}
              </span>
              <span>•</span>
              <span className={doc.isAvailable ? 'text-emerald-700 font-semibold' : 'text-amber-700 font-semibold'}>
                {doc.status}
              </span>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-2.5 shrink-0 self-start md:self-center">
          {doc.isAvailable ? (
            <>
              <a
                href={doc.downloadUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3.5 py-2 rounded-xl text-xs font-semibold bg-emerald-50 hover:bg-[#DCFCE7] text-[#166534] border border-emerald-200 transition-colors flex items-center gap-1.5 cursor-pointer"
                title="Open PDF in a new tab"
              >
                <Eye className="w-3.5 h-3.5" />
                <span>Preview</span>
              </a>
              <a
                href={doc.downloadUrl || '#'}
                download
                className="px-4 py-2 rounded-xl text-xs font-bold bg-[#166534] hover:bg-[#14532D] text-white shadow-2xs transition-all flex items-center gap-1.5 cursor-pointer"
                title="Download PDF"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Download</span>
              </a>
            </>
          ) : (
            <div className="px-4 py-2 rounded-xl text-xs font-semibold bg-slate-100 text-slate-500 border border-slate-200 flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-slate-400" />
              <span>Coming soon</span>
            </div>
          )}
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-white pt-28 pb-20">
      {/* Header */}
      <div className="bg-gradient-to-b from-[#DCFCE7]/50 via-[#F7FBF8] to-white py-14 sm:py-20 border-b border-emerald-900/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 mb-3">
              <Badge variant="forest" size="md">Official Research Archive</Badge>
              <span className="text-xs font-mono text-slate-500">Project Code: R26-IM-001</span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#172B26] tracking-tight leading-tight">
              Research Documents &amp; Reports
            </h1>
            <p className="mt-4 text-base sm:text-lg text-[#4A6B61] leading-relaxed">
              Browse individual research proposals, technical reports, and component theses.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 space-y-16">
        {/* Search Toolbar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 p-4 rounded-2xl bg-[#F7FBF8] border border-emerald-900/10">
          <div className="relative w-full sm:w-96">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search documents..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-white border border-slate-200 text-xs text-slate-800 placeholder-slate-400 focus:outline-hidden focus:ring-2 focus:ring-emerald-500/30"
            />
          </div>
          <span className="text-xs text-[#4A6B61] font-medium">
            Showing {individualDocs.length} documents
          </span>
        </div>

        {/* Individual Documents Section */}
        <section className="space-y-6">
          <div className="border-b border-emerald-900/10 pb-4">
            <div className="flex items-center gap-2 mb-1">
              <span className="px-2 py-0.5 rounded bg-[#DCFCE7] text-[#166534] text-[10px] font-mono font-bold">PART B</span>
              <h2 className="text-xl sm:text-2xl font-extrabold text-[#172B26]">Individual Research Documents (C1 – C4)</h2>
            </div>
            <p className="text-xs sm:text-sm text-[#4A6B61]">
              Component proposals and technical reports authored by each student researcher.
            </p>
          </div>
          <div className="space-y-4">
            {individualDocs.map((doc) => renderDocumentRow(doc))}
            {individualDocs.length === 0 && (
              <p className="text-xs text-slate-400 italic p-6 bg-slate-50 rounded-2xl">
                No individual component documents matching your search.
              </p>
            )}
          </div>
        </section>

       
      </div>
    </div>
  );
};
