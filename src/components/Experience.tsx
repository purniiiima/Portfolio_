import { useState } from 'react';
import { Briefcase, Calendar, ChevronRight, CheckCircle2, Sparkles, Building2 } from 'lucide-react';
import { resumeData } from '../data/resumeData';

export default function Experience() {
  const [selectedId, setSelectedId] = useState<string>(resumeData.experiences[0].id);

  const selectedExp =
    resumeData.experiences.find((e) => e.id === selectedId) || resumeData.experiences[0];

  return (
    <section id="experience" className="py-24 md:py-32 border-b border-[#D8CBB8]/40">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b border-[#D8CBB8]/60">
          <div>
            <span className="font-mono text-xs tracking-[0.2em] text-[#405548] uppercase font-semibold block mb-3">
              02 / WORK HISTORY
            </span>
            <h2 className="font-sans text-3xl sm:text-4xl font-bold tracking-tight text-[#1D1D1B]">
              Professional Experience
            </h2>
          </div>
          <p className="font-sans text-sm text-[#1D1D1B]/70 max-w-md mt-4 md:mt-0">
            Four targeted internships across software engineering, backend databases, full-stack web applications, and QA test validation.
          </p>
        </div>

        {/* Editorial Two-Column Experience Inspector */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Role Directory List */}
          <div className="lg:col-span-5 space-y-3">
            <span className="font-mono text-[10px] uppercase tracking-wider text-[#405548] block mb-2 font-semibold">
              Select Company to Inspect
            </span>

            {resumeData.experiences.map((exp, idx) => {
              const isSelected = exp.id === selectedId;
              return (
                <button
                  key={exp.id}
                  type="button"
                  id={`exp-tab-${exp.id}`}
                  onClick={() => setSelectedId(exp.id)}
                  className={`w-full text-left p-5 rounded-xl border transition-all duration-200 relative ${
                    isSelected
                      ? 'bg-white border-[#405548] shadow-[0_4px_16px_rgba(29,29,27,0.06)]'
                      : 'bg-[#F7F5F0] border-[#D8CBB8]/70 hover:border-[#D8CBB8] hover:bg-white/60'
                  }`}
                >
                  {/* Left accent indicator */}
                  {isSelected && (
                    <div className="absolute left-0 top-3 bottom-3 w-1 bg-[#405548] rounded-r-full" />
                  )}

                  <div className="flex items-center justify-between gap-2 mb-1.5">
                    <span className="font-mono text-xs font-semibold text-[#405548]">
                      0{idx + 1} // {exp.type.toUpperCase()}
                    </span>
                    <span className="font-mono text-[11px] text-[#1D1D1B]/60 flex items-center gap-1">
                      <Calendar className="w-3 h-3 text-[#405548]" />
                      <span>{exp.period}</span>
                    </span>
                  </div>

                  <h3 className="font-sans font-bold text-base text-[#1D1D1B] tracking-tight">
                    {exp.company}
                  </h3>

                  <p className="font-sans text-xs text-[#1D1D1B]/70 font-medium mt-0.5 flex items-center justify-between">
                    <span>{exp.role}</span>
                    <ChevronRight
                      className={`w-4 h-4 transition-transform duration-200 ${
                        isSelected ? 'translate-x-1 text-[#405548]' : 'text-[#D8CBB8]'
                      }`}
                    />
                  </p>
                </button>
              );
            })}
          </div>

          {/* Right Column: In-Depth Role Case Details */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-2xl border border-[#D8CBB8] p-6 sm:p-8 shadow-[0_10px_30px_rgba(29,29,27,0.03)] transition-all">
              {/* Header */}
              <div className="flex flex-wrap items-start justify-between gap-4 pb-6 border-b border-[#D8CBB8]/50">
                <div>
                  <div className="flex items-center gap-2 mb-1.5">
                    <Building2 className="w-4 h-4 text-[#405548]" />
                    <span className="font-mono text-xs font-bold text-[#405548] uppercase tracking-wider">
                      {selectedExp.company}
                    </span>
                  </div>
                  <h3 className="font-sans font-bold text-2xl text-[#1D1D1B] tracking-tight">
                    {selectedExp.role}
                  </h3>
                </div>

                <div className="text-right">
                  <span className="inline-flex items-center px-3 py-1 rounded-full font-mono text-xs font-semibold bg-[#F7F5F0] border border-[#D8CBB8] text-[#1D1D1B]">
                    {selectedExp.period}
                  </span>
                  <span className="block font-mono text-[10px] text-[#1D1D1B]/50 mt-1">
                    {selectedExp.type}
                  </span>
                </div>
              </div>

              {/* Responsibilities */}
              <div className="py-6 border-b border-[#D8CBB8]/50">
                <h4 className="font-mono text-[11px] uppercase tracking-widest text-[#405548] font-bold mb-4">
                  Core Responsibilities & Deliverables
                </h4>

                <ul className="space-y-3">
                  {selectedExp.points.map((point, index) => (
                    <li key={index} className="flex items-start gap-3 text-sm text-[#1D1D1B]/80 leading-relaxed">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#B56E4A] mt-2 shrink-0" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Key Contribution / Impact */}
              <div className="py-6 border-b border-[#D8CBB8]/50 bg-[#F7F5F0]/60 -mx-6 sm:-mx-8 px-6 sm:px-8">
                <div className="flex items-start gap-3">
                  <Sparkles className="w-4 h-4 text-[#B56E4A] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-[#B56E4A] block mb-1">
                      Key Contribution & Impact
                    </span>
                    <p className="text-xs sm:text-sm font-medium text-[#1D1D1B] leading-relaxed">
                      {selectedExp.keyImpact}
                    </p>
                  </div>
                </div>
              </div>

              {/* Technologies Applied */}
              <div className="pt-6">
                <h4 className="font-mono text-[11px] uppercase tracking-widest text-[#405548] font-bold mb-3">
                  Technologies Applied
                </h4>
                <div className="flex flex-wrap gap-2">
                  {selectedExp.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 rounded-md bg-[#F7F5F0] border border-[#D8CBB8] text-xs font-mono text-[#1D1D1B] font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
