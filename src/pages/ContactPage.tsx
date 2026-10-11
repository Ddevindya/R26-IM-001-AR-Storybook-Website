import React, { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { 
  Mail, 
  MapPin, 
  School, 
  Send, 
  CheckCircle2, 
  AlertCircle, 
  MessageSquare, 
  ExternalLink,
  Users
} from 'lucide-react';
import { PROJECT_INFO } from '../data/projectData';
import { SUPERVISORS } from '../data/teamData';
import { SectionHeader } from '../components/common/SectionHeader';
import { Badge } from '../components/common/Badge';
import { Button } from '../components/common/Button';

export const ContactPage: React.FC = () => {
  const [searchParams] = useSearchParams();
  const initialType = searchParams.get('type') || 'Academic Enquiry';

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    organization: '',
    subject: '',
    enquiryType: initialType,
    message: '',
  });

  const [formErrors, setFormErrors] = useState<Record<string, string>>({});
  const [formSubmitted, setFormSubmitted] = useState<boolean>(false);

  const validateForm = () => {
    const errors: Record<string, string> = {};
    if (!formData.name.trim()) errors.name = 'Full name is required';
    if (!formData.email.trim()) {
      errors.email = 'Email address is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = 'Please provide a valid email address';
    }
    if (!formData.subject.trim()) errors.subject = 'Subject is required';
    if (!formData.message.trim()) {
      errors.message = 'Please provide your enquiry message';
    } else if (formData.message.trim().length < 15) {
      errors.message = 'Message should be at least 15 characters';
    }
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    // Build functional mailto string for fallback delivery
    const recipient = 'aruna.g@sliit.lk';
    const emailSubject = encodeURIComponent(`[R26-IM-001 Research] ${formData.enquiryType}: ${formData.subject}`);
    const emailBody = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\nOrganization: ${formData.organization}\nType: ${formData.enquiryType}\n\nMessage:\n${formData.message}`
    );

    // Trigger local email client
    window.location.href = `mailto:${recipient}?subject=${emailSubject}&body=${emailBody}`;

    setFormSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-white pt-28 pb-20 text-[#172B26]">
      {/* Header */}
      <div className="bg-gradient-to-b from-[#DCFCE7]/50 via-[#F7FBF8] to-white py-14 sm:py-20 border-b border-emerald-900/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 mb-3">
              <Badge variant="forest" size="md">
                Institutional Contact & Collaboration
              </Badge>
              <span className="text-xs font-mono text-slate-500">
                SLIIT Faculty of Computing
              </span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#172B26] tracking-tight leading-tight">
              Get in Touch & Request a Demo
            </h1>
            <p className="mt-4 text-base sm:text-lg text-[#4A6B61] leading-relaxed">
              Connect with the R26-IM-001 research team for academic inquiries, classroom prototype demonstration requests, school evaluation pilots, or research discussions.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Column: Form (7 cols) */}
          <div className="lg:col-span-7">
            <div className="p-8 sm:p-10 rounded-3xl bg-white border border-emerald-900/10 shadow-sm">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-xl font-bold text-[#172B26]">
                  Send an Inquiry to the Research Team
                </h3>
                <span className="text-xs font-mono text-slate-400">
                  Target: aruna.g@sliit.lk
                </span>
              </div>
              <p className="text-xs text-[#4A6B61] mb-6">
                All inquiries are received by our academic supervisor and research project leads at SLIIT.
              </p>

              {formSubmitted ? (
                <div className="p-6 rounded-2xl bg-[#DCFCE7] border border-emerald-300 text-center space-y-3">
                  <div className="w-12 h-12 rounded-full bg-[#166534] text-white flex items-center justify-center mx-auto text-xl">
                    ✓
                  </div>
                  <h4 className="text-base font-bold text-[#14532D]">
                    Email Client Ready!
                  </h4>
                  <p className="text-xs text-[#166534] leading-relaxed max-w-md mx-auto">
                    Your formatted inquiry has been pre-loaded into your mail client targeting our official supervision inbox (<code>aruna.g@sliit.lk</code>). Please press send in your email application to complete delivery.
                  </p>
                  <button
                    onClick={() => setFormSubmitted(false)}
                    className="mt-2 text-xs font-bold text-[#166534] underline cursor-pointer"
                  >
                    Submit another enquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Full Name */}
                    <div>
                      <label className="block text-xs font-semibold text-[#172B26] mb-1">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Dr. Sarah Perera"
                        className={`w-full px-3.5 py-2.5 rounded-xl border text-xs focus:outline-hidden focus:ring-2 ${
                          formErrors.name
                            ? 'border-rose-400 focus:ring-rose-200'
                            : 'border-slate-200 focus:ring-emerald-200 focus:border-[#166534]'
                        }`}
                      />
                      {formErrors.name && (
                        <p className="text-[11px] text-rose-500 mt-1">{formErrors.name}</p>
                      )}
                    </div>

                    {/* Email */}
                    <div>
                      <label className="block text-xs font-semibold text-[#172B26] mb-1">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="sarah@institution.ac.lk"
                        className={`w-full px-3.5 py-2.5 rounded-xl border text-xs focus:outline-hidden focus:ring-2 ${
                          formErrors.email
                            ? 'border-rose-400 focus:ring-rose-200'
                            : 'border-slate-200 focus:ring-emerald-200 focus:border-[#166534]'
                        }`}
                      />
                      {formErrors.email && (
                        <p className="text-[11px] text-rose-500 mt-1">{formErrors.email}</p>
                      )}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Institution / School */}
                    <div>
                      <label className="block text-xs font-semibold text-[#172B26] mb-1">
                        Institution / Organization
                      </label>
                      <input
                        type="text"
                        value={formData.organization}
                        onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                        placeholder="International School Colombo"
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs focus:outline-hidden focus:ring-2 focus:ring-emerald-200 focus:border-[#166534]"
                      />
                    </div>

                    {/* Enquiry Type */}
                    <div>
                      <label className="block text-xs font-semibold text-[#172B26] mb-1">
                        Enquiry Type
                      </label>
                      <select
                        value={formData.enquiryType}
                        onChange={(e) => setFormData({ ...formData, enquiryType: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs focus:outline-hidden focus:ring-2 focus:ring-emerald-200 focus:border-[#166534] bg-white"
                      >
                        <option value="Request a Demo">Request Prototype Demo</option>
                        <option value="Academic Enquiry">Academic Research Enquiry</option>
                        <option value="School Pilot / Partnership">School Pilot & Classroom Trial</option>
                        <option value="Evaluation Feedback">Evaluator Review Question</option>
                        <option value="Other">Other Information</option>
                      </select>
                    </div>
                  </div>

                  {/* Subject */}
                  <div>
                    <label className="block text-xs font-semibold text-[#172B26] mb-1">
                      Subject Line *
                    </label>
                    <input
                      type="text"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      placeholder="Prototype demonstration inquiry for Grade 1 Science..."
                      className={`w-full px-3.5 py-2.5 rounded-xl border text-xs focus:outline-hidden focus:ring-2 ${
                        formErrors.subject
                          ? 'border-rose-400 focus:ring-rose-200'
                          : 'border-slate-200 focus:ring-emerald-200 focus:border-[#166534]'
                      }`}
                    />
                    {formErrors.subject && (
                      <p className="text-[11px] text-rose-500 mt-1">{formErrors.subject}</p>
                    )}
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-xs font-semibold text-[#172B26] mb-1">
                      Message *
                    </label>
                    <textarea
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Please describe your interest, school evaluation context, or demo requirements..."
                      className={`w-full px-3.5 py-2.5 rounded-xl border text-xs focus:outline-hidden focus:ring-2 ${
                        formErrors.message
                          ? 'border-rose-400 focus:ring-rose-200'
                          : 'border-slate-200 focus:ring-emerald-200 focus:border-[#166534]'
                      }`}
                    />
                    {formErrors.message && (
                      <p className="text-[11px] text-rose-500 mt-1">{formErrors.message}</p>
                    )}
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      className="w-full sm:w-auto px-6 py-3 rounded-xl bg-[#166534] hover:bg-[#14532D] text-white text-xs font-bold shadow-md shadow-[#166534]/15 transition-all flex items-center justify-center gap-2 cursor-pointer"
                    >
                      <Send className="w-4 h-4" />
                      <span>Send Enquiry via Official Mail Gateway</span>
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>

          {/* Right Column: Institutional Info & Supervisors (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            {/* Institution Card */}
            <div className="p-7 rounded-3xl bg-[#F7FBF8] border border-emerald-900/10">
              <span className="text-[10px] font-bold uppercase tracking-wider text-[#166534] block mb-1">
                Academic Affiliation
              </span>
              <h3 className="text-base font-bold text-[#172B26] mb-1">
                {PROJECT_INFO.institution}
              </h3>
              <p className="text-xs text-[#4A6B61] leading-relaxed mb-4">
                Department of Interactive Media · Faculty of Computing
              </p>

              <div className="space-y-2 text-xs text-[#4A6B61]">
                <div className="flex items-start gap-2">
                  <MapPin className="w-4 h-4 text-[#166534] shrink-0 mt-0.5" />
                  <span>New Kandy Road, Malabe, Sri Lanka</span>
                </div>
                <div className="flex items-center gap-2">
                  <School className="w-4 h-4 text-[#22A06B] shrink-0" />
                  <span>Accredited Academic Research Lab</span>
                </div>
              </div>
            </div>

            {/* Academic Supervisors Direct Emails */}
            <div className="p-7 rounded-3xl bg-white border border-emerald-900/10 shadow-2xs space-y-3.5">
              <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block">
                Primary Supervisory Contacts
              </span>

              {SUPERVISORS.map((sup) => (
                <div key={sup.id} className="p-3.5 rounded-2xl bg-[#F7FBF8] border border-emerald-900/10 text-xs">
                  <span className="font-bold text-[#172B26] block">{sup.name}</span>
                  <span className="text-[11px] text-[#166534] block">{sup.role}</span>
                  <a
                    href={`mailto:${sup.email}`}
                    className="text-[11px] text-slate-600 hover:text-[#166534] font-mono mt-1 flex items-center gap-1"
                  >
                    <Mail className="w-3 h-3" />
                    {sup.email}
                  </a>
                </div>
              ))}
            </div>

            {/* Project Code Reference Card */}
            <div className="p-6 rounded-2xl bg-[#DCFCE7]/60 border border-emerald-200/80 text-xs text-[#172B26] leading-relaxed">
              <strong className="text-[#166534] block mb-1">Official Reference:</strong>
              When referencing this study in evaluation inquiries or conference communications, please cite project identifier <strong>R26-IM-001</strong>.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
