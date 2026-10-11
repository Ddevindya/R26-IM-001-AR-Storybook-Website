import React, { useState } from 'react';
import {
  FileText,
  Download,
  Eye,
  Calendar,
  Users,
  Clock,
  Search,
  Info,
} from 'lucide-react';
import { RESEARCH_DOCUMENTS } from '../data/publicationsData';
import { SectionHeader } from '../components/common/SectionHeader';
import { Badge } from '../components/common/Badge';
import { DocumentModal } from '../components/common/DocumentModal';
import { PublicationDocument } from '../types';

export const DocumentsPage: React.FC = () => {
  const [selectedDoc, setSelectedDoc] = useState<PublicationDocument | null>(null);
  const [searchQuery, setSearchQuery] = useState<string>('');

  const sharedDocs = RESEARCH_DOCUMENTS.filter(
    (doc) => doc.category === 'shared' &&
      (doc.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
       doc.description.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  const individualDocs = RESEARCH_DOCUMENTS.filter(
    (doc) => doc.category === 'individual' &&
      (doc.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
       doc.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
       (doc.authorMember && doc.authorMember.toLowerCase().includes(searchQuery.toLowerCase())))
  );

  const renderDocumentRow = (doc: PublicationDocument, index: number) => (
    <div
      key={doc.id}
      className="p-6 sm:p-7 rounded-2xl bg-white border border-emerald-900/10 hover:border-[#166534]/40 hover:shadow-md transition-all duration-200 flex flex-col md:flex-row md:items-center justify-between gap-6 group"
    >
      <div className="flex items-start gap-4">
        <div className="w-12 h-12 rounded-xl bg-[#DCFCE7] text-[#166534] flex flex-col items-center justify-center shrink-0 border border-emerald-200 font-mono shadow-2xs">
          <span className="text-[10px] font-bold leading-none text-emerald-800">
            {doc.category === 'shared' ? 'DOC' : doc.componentNumber}
          </span>
          <span className="text-xs font-black leading-none mt-1">
            0{index + 1}
          </span>
        </div>
        <div className="space-y-1.5">
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
            <button
              onClick={() => setSelectedDoc(doc)}
              className="px-3.5 py-2 rounded-xl text-xs font-semibold bg-emerald-50 hover:bg-[#DCFCE7] text-[#166534] border border-emerald-200 transition-colors flex items-center gap-1.5 cursor-pointer"
              title="Preview document details"
            >
              <Eye className="w-3.5 h-3.5" />
              <span>Preview</span>
            </button>
            <a
              href={doc.downloadUrl || '#'}
              download
              onClick={(e) => {
                e.preventDefault();
                alert(`Downloading: ${doc.title} (${doc.fileSize || 'PDF'}).`);
              }}
              className="px-4 py-2 rounded-xl text-xs font-bold bg-[#166534] hover:bg-[#14532D] text-white shadow-2xs transition-all flex items-center gap-1.5 cursor-pointer"
              title="Download verified PDF"
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
              Browse shared proposals, architecture blueprints, and individual component theses.
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
            Showing {sharedDocs.length + individualDocs.length} documents
          </span>
        </div>

        {/* Shared Documents Section */}
        <section className="space-y-6">
          <div className="border-b border-emerald-900/10 pb-4">
            <div className="flex items-center gap-2 mb-1">
              <span className="px-2 py-0.5 rounded bg-[#DCFCE7] text-[#166534] text-[10px] font-mono font-bold">PART A</span>
              <h2 className="text-xl sm:text-2xl font-extrabold text-[#172B26]">Shared Research Documents</h2>
            </div>
            <p className="text-xs sm:text-sm text-[#4A6B61]">
              Collaborative outputs approved by the faculty and supervisors.
            </p>
          </div>
          <div className="space-y-4">
            {sharedDocs.map((doc, idx) => renderDocumentRow(doc, idx))}
            {sharedDocs.length === 0 && (
              <p className="text-xs text-slate-400 italic p-6 bg-slate-50 rounded-2xl">
                No shared documents matching your search.
              </p>
            )}
          </div>
        </section>

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
            {individualDocs.map((doc, idx) => renderDocumentRow(doc, idx))}
            {individualDocs.length === 0 && (
              <p className="text-xs text-slate-400 italic p-6 bg-slate-50 rounded-2xl">
                No individual component documents matching your search.
              </p>
            )}
          </div>
        </section>

        {/* Guidance Box */}
        <section className="p-6 sm:p-7 rounded-3xl bg-[#F7FBF8] border border-emerald-900/10 text-xs text-[#4A6B61] space-y-2">
          <div className="flex items-center gap-2 font-bold text-[#172B26]"><Info className="w-4 h-4 text-[#166534]" />
            <span>Document Repository Organization</span>
          </div>
          <p className="leading-relaxed">
            Files are stored under <code>public/documents/shared/</code> for group docs and <code>public/documents/individual/</code> for component reports. URLs are managed in <code>src/data/publicationsData.ts</code>.
          </p>
        </section>
      </div>

      {/* Document Detail Modal */}
      <DocumentModal document={selectedDoc} onClose={() => setSelectedDoc(null)} />
    </div>
  );
};
