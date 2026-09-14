import { FileText, ArrowUpRight, CheckCircle2, Sparkles } from 'lucide-react';
import { resumeData } from '../data/resumeData';

interface ResumeCTAProps {
  onOpenResume: () => void;
}

export default function ResumeCTA({ onOpenResume }: ResumeCTAProps) {
  return (
    <section className="py-20 md:py-24 bg-[#1D1D1B] text-[#F7F5F0] relative overflow-hidden">
      {/* Subtle geometric lines */}
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(#F7F5F0 1px, transparent 1px), linear-gradient(90deg, #F7F5F0 1px, transparent 1px)`,
          backgroundSize: '48px 48px',
        }}
      />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-[#A8B5A2] text-xs font-mono mb-6">
            <Sparkles className="w-3.5 h-3.5 text-[#B56E4A]" />
            <span>EXECUTIVE TALENT REVIEW</span>
          </div>

          {/* Heading */}
          <h2 className="font-sans text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#F7F5F0] mb-6">
            Interested in what I can architect for your engineering team?
          </h2>

          {/* Description strictly based on resume */}
          <p className="font-sans text-base sm:text-lg text-[#F7F5F0]/75 max-w-2xl mx-auto leading-relaxed mb-10">
            With 4 commercial internships, 9.27 SGPA academic standing, and hands-on proficiency across React, FastAPI, Node.js, and PostgreSQL/MongoDB, I am prepared to deliver production value from day one.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-4">
            <button
              type="button"
              id="cta-view-resume-btn"
              onClick={onOpenResume}
              className="px-7 py-3.5 rounded-full bg-[#B56E4A] hover:bg-[#B56E4A]/90 text-white font-sans text-xs sm:text-sm font-semibold transition-all shadow-[0_4px_16px_rgba(181,110,74,0.3)] flex items-center gap-2 active:scale-[0.98]"
            >
              <FileText className="w-4 h-4" />
              <span>Inspect Structured Resume</span>
            </button>

            <a
              href="#contact"
              id="cta-contact-btn"
              className="px-7 py-3.5 rounded-full bg-white/10 hover:bg-white/15 text-[#F7F5F0] border border-white/20 font-sans text-xs sm:text-sm font-semibold transition-all flex items-center gap-2 active:scale-[0.98]"
            >
              <span>Initiate Direct Conversation</span>
              <ArrowUpRight className="w-4 h-4 text-[#A8B5A2]" />
            </a>
          </div>

          {/* Quick confirmation */}
          <div className="mt-8 flex items-center justify-center gap-6 text-[11px] font-mono text-[#A8B5A2]">
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-[#A8B5A2]" />
              <span>Immediate Response via Email</span>
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-[#A8B5A2]" />
              <span>Verified Single Source of Truth</span>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
