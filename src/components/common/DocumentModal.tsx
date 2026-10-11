import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  X, 
  FileText, 
  Download, 
  Calendar, 
  Users, 
  CheckCircle, 
  ExternalLink,
  BookOpen,
  Share2
} from 'lucide-react';
import { PublicationDocument } from '../../types';
import { Badge } from './Badge';

interface DocumentModalProps {
  document: PublicationDocument | null;
  onClose: () => void;
}

export const DocumentModal: React.FC<DocumentModalProps> = ({ document, onClose }) => {
  if (!document) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-[#17243D]/60 backdrop-blur-sm"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 15 }}
          className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl border border-slate-100 overflow-hidden z-10 my-8"
        >
          {/* Header */}
          <div className="bg-gradient-to-r from-[#F2EDFF] via-[#EAF6FF] to-white p-6 border-b border-slate-100 flex items-start justify-between gap-4">
            <div className="flex items-start gap-3.5">
              <div className="p-3 rounded-2xl bg-white shadow-xs text-[#7966E8] shrink-0 mt-0.5">
                <FileText className="w-6 h-6" />
              </div>
              <div>
                <Badge variant="purple" size="sm" className="mb-2">
                  {document.type}
                </Badge>
                <h3 className="text-lg sm:text-xl font-bold text-[#17243D] leading-snug">
                  {document.title}
                </h3>
              </div>
            </div>

            <button
              onClick={onClose}
              className="p-2 rounded-full bg-white hover:bg-slate-100 text-slate-500 hover:text-slate-800 transition-colors shadow-2xs shrink-0"
              aria-label="Close document modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Content Body */}
          <div className="p-6 sm:p-8 space-y-6 max-h-[65vh] overflow-y-auto">
            {/* Meta Row */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 p-4 rounded-2xl bg-slate-50 border border-slate-100 text-xs">
              <div>
                <span className="text-slate-400 font-medium block">Document Date</span>
                <span className="font-semibold text-slate-700 flex items-center gap-1 mt-0.5">
                  <Calendar className="w-3.5 h-3.5 text-slate-400" />
                  {document.date}
                </span>
              </div>
              <div>
                <span className="text-slate-400 font-medium block">Approval Status</span>
                <span className="font-semibold text-emerald-700 flex items-center gap-1 mt-0.5">
                  <CheckCircle className="w-3.5 h-3.5 text-emerald-500" />
                  {document.status}
                </span>
              </div>
              <div className="col-span-2 sm:col-span-1">
                <span className="text-slate-400 font-medium block">File Size</span>
                <span className="font-semibold text-slate-700 mt-0.5 block">
                  {document.fileSize || "1.5 MB (PDF)"}
                </span>
              </div>
            </div>

            {/* Description */}
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                Executive Abstract & Summary
              </h4>
              <p className="text-sm text-slate-700 leading-relaxed">
                {document.description}
              </p>
            </div>

            {/* Content Summary / Key Focus */}
            {document.contentSummary && (
              <div className="p-4 rounded-2xl bg-[#EAF6FF]/50 border border-[#BFDBFE]/40 text-xs text-slate-700 leading-relaxed">
                <strong className="text-[#0284C7] block mb-1">Pedagogical & Technical Highlights:</strong>
                {document.contentSummary}
              </div>
            )}

            {/* Authors */}
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                Contributing Authors & Supervision
              </h4>
              <div className="flex flex-wrap gap-2">
                {document.authors.map((author, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1.5 rounded-xl bg-slate-100 text-slate-700 text-xs font-medium flex items-center gap-1.5"
                  >
                    <Users className="w-3 h-3 text-slate-400" />
                    {author}
                  </span>
                ))}
              </div>
            </div>

            {/* Academic Notice */}
            <div className="p-3.5 rounded-xl bg-amber-50/70 border border-amber-200/60 text-xs text-amber-900 leading-tight">
              <strong>Academic Repository Note:</strong> This document is part of the final-year undergraduate research submission (R26-IM-001) at the Sri Lanka Institute of Information Technology (SLIIT). All rights reserved.
            </div>
          </div>

          {/* Footer Actions */}
          <div className="p-6 bg-slate-50 border-t border-slate-100 flex flex-wrap items-center justify-between gap-3">
            <span className="text-xs text-slate-400">
              Project Identifier: R26-IM-001
            </span>

            <div className="flex items-center gap-3">
              <button
                onClick={() => {
                  navigator.clipboard.writeText(
                    `R26-IM-001 Research Team. (${document.date}). "${document.title}". SLIIT Faculty of Computing.`
                  );
                  alert("Citation copied to clipboard!");
                }}
                className="px-4 py-2.5 rounded-xl text-xs font-semibold bg-white hover:bg-slate-100 text-slate-700 border border-slate-200 shadow-2xs transition-all flex items-center gap-1.5"
              >
                <Share2 className="w-3.5 h-3.5" />
                Copy Citation
              </button>

              <a
                href={document.downloadUrl || "#"}
                download
                className="px-5 py-2.5 rounded-xl text-xs font-bold bg-[#7966E8] hover:bg-[#6853DF] text-white shadow-md shadow-[#7966E8]/20 transition-all flex items-center gap-1.5"
                onClick={(e) => {
                  // If local mock pdf
                  e.preventDefault();
                  alert(`Starting download for: ${document.title} (${document.fileSize || 'PDF'}). (Document archive referenced from project workspace).`);
                }}
              >
                <Download className="w-4 h-4" />
                Download Document
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
