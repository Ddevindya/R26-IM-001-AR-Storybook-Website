import React, { useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { ArrowUpRight, Leaf, ShieldCheck } from 'lucide-react';

const inquiryOptions = [
  'Request a Demo',
  'Academic Enquiry',
  'School Pilot / Partnership',
  'Evaluation Feedback',
  'Other',
];

export const ContactPage: React.FC = () => {
  const [searchParams] = useSearchParams();
  const requestedType = searchParams.get('type') ?? 'Request a Demo';
  const initialType = inquiryOptions.includes(requestedType) ? requestedType : 'Request a Demo';

  const [submitStatus, setSubmitStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const [submitMessage, setSubmitMessage] = useState('');

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    organization: '',
    enquiryType: initialType,
    message: '',
    consent: false,
  });

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!formData.consent || submitStatus === 'sending') return;

    setSubmitStatus('sending');
    setSubmitMessage('');

    try {
      const response = await fetch('https://formsubmit.co/ajax/devindyadulakshi@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          name: formData.name.trim(),
          email: formData.email.trim(),
          organization: formData.organization.trim() || 'Not provided',
          enquiry_type: formData.enquiryType,
          message: formData.message.trim(),
          _subject: `R26-IM-001 Website Inquiry: ${formData.enquiryType}`,
          _template: 'table',
          _honey: '',
        }),
      });

      const result: { success?: boolean | string; message?: string } = await response.json();
      const accepted = result.success === true || result.success === 'true';

      if (!response.ok || !accepted) {
        throw new Error(result.message || 'The message could not be submitted.');
      }

      setSubmitStatus('success');
      setSubmitMessage('Your inquiry has been submitted to the email service. You may need to confirm the recipient email before delivery is active.');
      setFormData((previous) => ({
        ...previous,
        name: '',
        email: '',
        organization: '',
        message: '',
        consent: false,
      }));
    } catch {
      setSubmitStatus('error');
      setSubmitMessage('Unable to submit your inquiry right now. Please try again later.');
    }
  };

  const fieldClass =
    'mt-2 w-full rounded-xl border border-emerald-900/15 bg-white px-4 py-3 text-sm text-[#172B26] outline-none transition-colors placeholder:text-slate-400 focus:border-[#22A06B] focus:ring-2 focus:ring-emerald-100';

  return (
    <main className="min-h-screen bg-white pt-28 pb-20 text-[#172B26]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <header className="mb-12 max-w-5xl sm:mb-16">
          <p className="mb-5 flex items-center gap-2 text-[11px] font-extrabold uppercase tracking-[0.2em] text-[#166534]">
            <span className="h-2 w-2 rounded-full bg-[#22A06B]" />
            Let's start a conversation
          </p>
          <h1 className="font-display text-4xl font-extrabold leading-[1.1] tracking-tight sm:text-5xl lg:text-6xl">
            Let's grow something <span className="text-[#166534]">meaningful together.</span>
          </h1>
          <p className="mt-6 max-w-3xl text-base leading-relaxed text-[#4A6B61] sm:text-lg">
            Request a demonstration, explore a school pilot, or connect with our research team to learn more about the AR Plant Storybook.
          </p>
        </header>

        <div className="grid items-start gap-10 lg:grid-cols-12 lg:gap-16">
          <section className="space-y-7 lg:col-span-5">
            <span className="inline-flex rounded-full border border-emerald-200 bg-emerald-50 px-4 py-2 font-mono text-xs font-semibold text-[#166534]">
              R26-IM-001 · AR Plant Storybook
            </span>
            <div>
              <h2 className="text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl">
                Ideas welcome.<br />Curiosity encouraged.
              </h2>
              <p className="mt-5 max-w-md text-sm leading-7 text-[#4A6B61]">
                We're exploring how physical storytelling, augmented reality and environmental feedback can help Grade 1 learners understand tomato plant growth and care for living things.
              </p>
              <p className="mt-4 max-w-md text-sm leading-7 text-[#4A6B61]">
                This enquiry form is intended for adults, educators and research collaborators. Please do not include children's names, photographs or sensitive learner records.
              </p>
            </div>
            <div className="flex items-start gap-3 rounded-2xl border border-emerald-100 bg-[#F7FBF8] p-4">
              <Leaf className="mt-0.5 h-5 w-5 shrink-0 text-[#166534]" />
              <div>
                <p className="text-sm font-bold">SLIIT Faculty of Computing</p>
                <p className="mt-1 text-xs leading-5 text-[#4A6B61]">Interactive Media · Undergraduate Research Project 2026</p>
              </div>
            </div>
            <Link to="/research" className="inline-flex items-center gap-2 text-sm font-bold text-[#166534] hover:underline">
              Explore our research <ArrowUpRight className="h-4 w-4" />
            </Link>
          </section>

          <section className="rounded-[28px] border border-emerald-900/10 bg-[#F4FAF6] p-5 shadow-sm sm:p-8 lg:col-span-7 lg:p-10" aria-label="Research enquiry form">
            <div className="mb-7 rounded-2xl border border-emerald-200 bg-white/85 px-5 py-4 text-sm leading-6 text-[#4A6B61]">
              Request a demo or share a research enquiry. Your message will be processed by FormSubmit and forwarded to the research contact email after initial email verification.
            </div>

            {submitStatus === 'success' && (
              <div role="status" className="mb-6 rounded-xl border border-emerald-200 bg-emerald-50 p-4 text-sm text-[#166534]">
                {submitMessage}
              </div>
            )}
            {submitStatus === 'error' && (
              <div role="alert" className="mb-6 rounded-xl border border-red-200 bg-red-50 p-4 text-sm text-red-700">
                {submitMessage}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid gap-5 sm:grid-cols-2">
                <label className="block text-sm font-semibold">
                  Your name *
                  <input type="text" autoComplete="name" required value={formData.name} onChange={(event) => setFormData({ ...formData, name: event.target.value })} className={fieldClass} placeholder="Your full name" />
                </label>
                <label className="block text-sm font-semibold">
                  Email address *
                  <input type="email" autoComplete="email" required value={formData.email} onChange={(event) => setFormData({ ...formData, email: event.target.value })} className={fieldClass} placeholder="name@example.com" />
                </label>
              </div>

              <label className="block text-sm font-semibold">
                Organization (optional)
                <input type="text" autoComplete="organization" value={formData.organization} onChange={(event) => setFormData({ ...formData, organization: event.target.value })} className={fieldClass} placeholder="School, university or organization" />
              </label>

              <label className="block text-sm font-semibold">
                I'd like to... *
                <select value={formData.enquiryType} onChange={(event) => setFormData({ ...formData, enquiryType: event.target.value })} className={fieldClass}>
                  {inquiryOptions.map((option) => <option value={option} key={option}>{option}</option>)}
                </select>
              </label>

              <label className="block text-sm font-semibold">
                Your message *
                <textarea rows={6} minLength={20} maxLength={3000} required value={formData.message} onChange={(event) => setFormData({ ...formData, message: event.target.value })} className={`${fieldClass} resize-y`} placeholder="Tell us about your interest or potential collaboration..." />
                <span className="mt-2 block text-xs font-normal text-[#4A6B61]">20–3,000 characters. Please avoid sensitive learner information.</span>
              </label>

              <label className="flex items-start gap-3 text-xs leading-6 text-[#4A6B61]">
                <input type="checkbox" checked={formData.consent} onChange={(event) => setFormData({ ...formData, consent: event.target.checked })} className="mt-1.5 h-4 w-4 accent-[#166534]" />
                <span>I agree that my inquiry details will be processed by FormSubmit and shared with the research contact to respond to my request.</span>
              </label>

              <div className="flex flex-wrap items-center gap-3 pt-1">
                <button
                  type="submit"
                  disabled={!formData.consent || submitStatus === 'sending'}
                  className="inline-flex items-center gap-2 rounded-xl bg-[#166534] px-6 py-3 text-sm font-bold text-white transition-colors hover:bg-[#14532D] disabled:cursor-not-allowed disabled:opacity-50"
                >
                  {submitStatus === 'sending' ? 'Sending...' : 'Send inquiry'}
                  <ArrowUpRight className="h-4 w-4" />
                </button>
                <span className="inline-flex items-center gap-1.5 text-xs text-[#4A6B61]">
                  <ShieldCheck className="h-4 w-4 text-[#166534]" /> Sent via FormSubmit
                </span>
              </div>
            </form>
            <p className="mt-5 text-xs leading-5 text-[#4A6B61]">This form uses FormSubmit, a third-party email delivery service. Do not include children's personal information or sensitive records.</p>
          </section>
        </div>
      </div>
    </main>
  );
};
