import { GraduationCap, Award, Calendar, MapPin, BookOpen } from 'lucide-react';
import { resumeData } from '../data/resumeData';

export default function Education() {
  return (
    <section id="education" className="py-24 md:py-32 border-b border-[#D8CBB8]/40">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b border-[#D8CBB8]/60">
          <div>
            <span className="font-mono text-xs tracking-[0.2em] text-[#405548] uppercase font-semibold block mb-3">
              05 / ACADEMICS
            </span>
            <h2 className="font-sans text-3xl sm:text-4xl font-bold tracking-tight text-[#1D1D1B]">
              Academic Pedigree
            </h2>
          </div>
          <p className="font-sans text-sm text-[#1D1D1B]/70 max-w-md mt-4 md:mt-0">
            Solid theoretical foundation in Computer Science with a high cumulative standing and early distinctions in STEM disciplines.
          </p>
        </div>

        {/* Education Editorial Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Main Undergraduate Degree (Featured Large Card - 7 cols) */}
          <div className="lg:col-span-7">
            <div className="h-full p-8 rounded-2xl bg-white border border-[#D8CBB8] shadow-[0_4px_20px_rgba(29,29,27,0.03)] flex flex-col justify-between">
              <div>
                <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full font-mono text-xs font-semibold bg-[#405548]/10 text-[#405548]">
                    <GraduationCap className="w-3.5 h-3.5" />
                    <span>Undergraduate Degree</span>
                  </span>
                  <span className="font-mono text-xs text-[#1D1D1B]/60 flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5 text-[#405548]" />
                    <span>{resumeData.education[0].period}</span>
                  </span>
                </div>

                <h3 className="font-sans font-bold text-2xl text-[#1D1D1B] tracking-tight mb-1">
                  {resumeData.education[0].degree}
                </h3>

                <p className="font-sans font-medium text-sm text-[#405548] mb-4">
                  {resumeData.education[0].institution}
                </p>

                <div className="inline-flex items-baseline gap-2 px-4 py-2 rounded-lg bg-[#F7F5F0] border border-[#D8CBB8] mb-6">
                  <span className="font-mono text-xs text-[#405548] uppercase tracking-wider font-semibold">
                    Cumulative Score:
                  </span>
                  <span className="font-sans font-bold text-lg text-[#1D1D1B]">
                    {resumeData.education[0].score}
                  </span>
                </div>

                <div className="space-y-3 pt-4 border-t border-[#D8CBB8]/50">
                  <span className="font-mono text-[10px] text-[#405548] uppercase tracking-wider font-bold block">
                    Curriculum & Focus
                  </span>
                  <ul className="space-y-2">
                    {resumeData.education[0].highlights.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#1D1D1B]/80 leading-relaxed">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#405548] mt-2 shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="pt-6 mt-6 border-t border-[#D8CBB8]/40 flex items-center justify-between text-xs font-mono text-[#1D1D1B]/60">
                <span className="flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-[#405548]" />
                  <span>{resumeData.education[0].location}</span>
                </span>
                <span className="text-[#405548] font-semibold">Status: Active Student</span>
              </div>
            </div>
          </div>

          {/* Schooling & Foundation (Two Stacked Cards - 5 cols) */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            {resumeData.education.slice(1).map((edu) => (
              <div
                key={edu.id}
                className="flex-1 p-6 rounded-2xl bg-white border border-[#D8CBB8] shadow-[0_2px_10px_rgba(29,29,27,0.02)] flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="font-mono text-xs font-semibold text-[#405548]">
                      {edu.period}
                    </span>
                    <span className="px-2.5 py-0.5 rounded-md font-sans text-xs font-bold bg-[#B56E4A]/10 text-[#B56E4A] border border-[#B56E4A]/20">
                      Score: {edu.score}
                    </span>
                  </div>

                  <h4 className="font-sans font-bold text-base text-[#1D1D1B] tracking-tight mb-0.5">
                    {edu.degree}
                  </h4>

                  <p className="font-sans text-xs text-[#1D1D1B]/70 mb-3">
                    {edu.institution}
                  </p>

                  <ul className="space-y-1.5">
                    {edu.highlights.map((h, i) => (
                      <li key={i} className="text-xs text-[#1D1D1B]/75 flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#D8CBB8] mt-1.5 shrink-0" />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-4 mt-4 border-t border-[#D8CBB8]/40 flex items-center justify-between text-[11px] font-mono text-[#1D1D1B]/50">
                  <span className="flex items-center gap-1">
                    <MapPin className="w-3 h-3 text-[#405548]" />
                    <span>{edu.location}</span>
                  </span>
                  <span>Completed</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
