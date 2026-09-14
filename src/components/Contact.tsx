import { useState, FormEvent } from 'react';
import { Mail, MapPin, ExternalLink, Send, Check, Copy, MessageSquare, Clock } from 'lucide-react';
import { resumeData } from '../data/resumeData';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [status, setStatus] = useState<'idle' | 'submitted'>('idle');
  const [copiedItem, setCopiedItem] = useState<string | null>(null);

  const handleCopy = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    setCopiedItem(label);
    setTimeout(() => setCopiedItem(null), 2000);
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // Generate pre-filled mailto trigger as fallback & show confirmation state
    const mailtoLink = `mailto:${resumeData.personal.email}?subject=${encodeURIComponent(
      formData.subject || 'Engineering Inquiry'
    )}&body=${encodeURIComponent(
      `From: ${formData.name} (${formData.email})\n\n${formData.message}`
    )}`;

    // Set submitted state
    setStatus('submitted');

    // Attempt mail client launch
    window.location.href = mailtoLink;
  };

  return (
    <section id="contact" className="py-24 md:py-32 border-b border-[#D8CBB8]/40">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b border-[#D8CBB8]/60">
          <div>
            <span className="font-mono text-xs tracking-[0.2em] text-[#405548] uppercase font-semibold block mb-3">
              06 / GET IN TOUCH
            </span>
            <h2 className="font-sans text-3xl sm:text-4xl font-bold tracking-tight text-[#1D1D1B]">
              Let's Connect
            </h2>
          </div>
          <p className="font-sans text-sm text-[#1D1D1B]/70 max-w-md mt-4 md:mt-0">
            Open for software engineering roles, full-stack internships, and technical collaboration opportunities.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left Column: Direct Verified Contact Directory */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <h3 className="font-sans text-xl font-bold text-[#1D1D1B] mb-2">
                Direct Communication Channels
              </h3>
              <p className="text-xs sm:text-sm text-[#1D1D1B]/70 leading-relaxed">
                Contact information verified directly from my curriculum vitae. Recruiters and technical teams are welcome to reach out directly.
              </p>
            </div>

            {/* Contact Items Cards */}
            <div className="space-y-3">
              {/* Email */}
              <div className="p-4 rounded-xl bg-white border border-[#D8CBB8] flex items-center justify-between gap-4 shadow-sm">
                <div className="flex items-center gap-3.5 min-w-0">
                  <div className="w-9 h-9 rounded-lg bg-[#405548]/10 text-[#405548] flex items-center justify-center shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div className="min-w-0">
                    <span className="font-mono text-[10px] text-[#405548] uppercase block">Email</span>
                    <a
                      href={`mailto:${resumeData.personal.email}`}
                      className="font-sans text-xs sm:text-sm font-semibold text-[#1D1D1B] hover:text-[#B56E4A] transition-colors truncate block"
                    >
                      {resumeData.personal.email}
                    </a>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => handleCopy(resumeData.personal.email, 'email')}
                  className="p-2 text-[#405548] hover:bg-[#F7F5F0] rounded-md transition-colors shrink-0"
                  title="Copy Email"
                >
                  {copiedItem === 'email' ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              {/* Location */}
              <div className="p-4 rounded-xl bg-white border border-[#D8CBB8] flex items-center gap-3.5 shadow-sm">
                <div className="w-9 h-9 rounded-lg bg-[#405548]/10 text-[#405548] flex items-center justify-center shrink-0">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <span className="font-mono text-[10px] text-[#405548] uppercase block">Current Location</span>
                  <span className="font-sans text-xs sm:text-sm font-semibold text-[#1D1D1B]">
                    {resumeData.personal.location}
                  </span>
                </div>
              </div>
            </div>

            {/* Social / Profiles */}
            <div className="pt-2">
              <span className="font-mono text-[10px] uppercase tracking-wider text-[#405548] font-bold block mb-3">
                Professional Coding Profiles
              </span>

              <div className="flex flex-wrap gap-2">
                {resumeData.personal.social.map((item) => (
                  <a
                    key={item.platform}
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-white border border-[#D8CBB8] text-xs font-semibold text-[#1D1D1B] hover:border-[#405548] hover:bg-[#F7F5F0] transition-colors shadow-sm"
                  >
                    <span>{item.platform}</span>
                    <ExternalLink className="w-3 h-3 text-[#405548]" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Working Contact Ingestion Form */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-2xl border border-[#D8CBB8] p-6 sm:p-8 shadow-[0_4px_20px_rgba(29,29,27,0.03)]">
              <div className="flex items-center justify-between pb-4 mb-6 border-b border-[#D8CBB8]/50">
                <div className="flex items-center gap-2">
                  <MessageSquare className="w-4 h-4 text-[#405548]" />
                  <span className="font-mono text-xs font-bold text-[#1D1D1B] uppercase tracking-wider">
                    RECRUITER MESSAGE FORM
                  </span>
                </div>
                <div className="flex items-center gap-1.5 text-[11px] font-mono text-[#405548]">
                  <Clock className="w-3.5 h-3.5" />
                  <span>Response &lt; 24h</span>
                </div>
              </div>

              {status === 'submitted' ? (
                <div className="py-12 text-center space-y-4 animate-in fade-in duration-300">
                  <div className="w-12 h-12 rounded-full bg-[#405548]/10 text-[#405548] flex items-center justify-center mx-auto">
                    <Check className="w-6 h-6" />
                  </div>
                  <h4 className="font-sans text-xl font-bold text-[#1D1D1B]">
                    Inquiry Prepared Successfully
                  </h4>
                  <p className="text-xs sm:text-sm text-[#1D1D1B]/70 max-w-md mx-auto leading-relaxed">
                    Your email client has been triggered with your pre-filled inquiry. You can also contact directly at{' '}
                    <strong className="text-[#1D1D1B]">{resumeData.personal.email}</strong>.
                  </p>
                  <button
                    type="button"
                    onClick={() => setStatus('idle')}
                    className="px-5 py-2 rounded-full bg-[#F7F5F0] border border-[#D8CBB8] text-xs font-semibold text-[#1D1D1B] hover:bg-[#D8CBB8]/30"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="contact-name" className="block font-mono text-[11px] text-[#405548] uppercase tracking-wider mb-1.5 font-medium">
                        Your Full Name *
                      </label>
                      <input
                        type="text"
                        id="contact-name"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Sarah Jenkins"
                        className="w-full px-3.5 py-2.5 rounded-xl bg-[#F7F5F0] border border-[#D8CBB8] text-xs sm:text-sm text-[#1D1D1B] placeholder:text-[#1D1D1B]/40 focus:outline-none focus:ring-2 focus:ring-[#405548]/30 focus:bg-white transition-all"
                      />
                    </div>

                    <div>
                      <label htmlFor="contact-email" className="block font-mono text-[11px] text-[#405548] uppercase tracking-wider mb-1.5 font-medium">
                        Your Work Email *
                      </label>
                      <input
                        type="email"
                        id="contact-email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="e.g. recruiter@company.com"
                        className="w-full px-3.5 py-2.5 rounded-xl bg-[#F7F5F0] border border-[#D8CBB8] text-xs sm:text-sm text-[#1D1D1B] placeholder:text-[#1D1D1B]/40 focus:outline-none focus:ring-2 focus:ring-[#405548]/30 focus:bg-white transition-all"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="contact-subject" className="block font-mono text-[11px] text-[#405548] uppercase tracking-wider mb-1.5 font-medium">
                      Subject / Role Title *
                    </label>
                    <input
                      type="text"
                      id="contact-subject"
                      required
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      placeholder="e.g. Full Stack Developer Opportunity"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-[#F7F5F0] border border-[#D8CBB8] text-xs sm:text-sm text-[#1D1D1B] placeholder:text-[#1D1D1B]/40 focus:outline-none focus:ring-2 focus:ring-[#405548]/30 focus:bg-white transition-all"
                    />
                  </div>

                  <div>
                    <label htmlFor="contact-message" className="block font-mono text-[11px] text-[#405548] uppercase tracking-wider mb-1.5 font-medium">
                      Message & Requirements *
                    </label>
                    <textarea
                      id="contact-message"
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Provide details about the software engineering role, team stack, or project inquiry..."
                      className="w-full px-3.5 py-2.5 rounded-xl bg-[#F7F5F0] border border-[#D8CBB8] text-xs sm:text-sm text-[#1D1D1B] placeholder:text-[#1D1D1B]/40 focus:outline-none focus:ring-2 focus:ring-[#405548]/30 focus:bg-white transition-all resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    id="contact-submit-btn"
                    className="w-full py-3 px-6 rounded-xl bg-[#1D1D1B] hover:bg-[#B56E4A] text-[#F7F5F0] font-sans text-xs sm:text-sm font-semibold transition-all duration-200 flex items-center justify-center gap-2 shadow-[0_2px_10px_rgba(29,29,27,0.1)] active:scale-[0.99]"
                  >
                    <span>Send Message to Purnima</span>
                    <Send className="w-3.5 h-3.5" />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
