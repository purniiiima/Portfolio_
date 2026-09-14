import { MapPin, GraduationCap, Briefcase, Award, ArrowUpRight, Check } from 'lucide-react';
import { resumeData } from '../data/resumeData';

export default function About() {
  const coreCompetencies = [
    {
      title: 'Full-Stack Web Architecture',
      desc: 'Building responsive React applications connected to Python FastAPI and Node.js microservices with clean API contracts.',
    },
    {
      title: 'Enterprise RBAC & Security',
      desc: 'Architecting role-based access control, protected routes, JWT tokens, Bcrypt hashing, and conditional navigation workflows.',
    },
    {
      title: 'Multi-Database Engineering',
      desc: 'Designing optimized relational schemas in PostgreSQL and MySQL alongside flexible document models in MongoDB.',
    },
    {
      title: 'Quality Assurance & Performance',
      desc: 'Executing regression testing, edge-case validation, UI responsiveness optimization, and low-latency API response design.',
    },
  ];

  return (
    <section id="about" className="py-24 md:py-32 border-b border-[#D8CBB8]/40">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left Column: Section Title & Structured Metadata Specs */}
          <div className="lg:col-span-4 flex flex-col justify-between">
            <div>
              <span className="font-mono text-xs tracking-[0.2em] text-[#405548] uppercase font-semibold block mb-3">
                01 / BACKGROUND
              </span>
              <h2 className="font-sans text-3xl sm:text-4xl font-bold tracking-tight text-[#1D1D1B] mb-6">
                About Me
              </h2>

              <p className="text-sm text-[#1D1D1B]/70 leading-relaxed mb-8">
                Engineering student with an analytical mindset and a strong track record across academic rigor and commercial internships.
              </p>
            </div>

            {/* Quick Specs Information Card */}
            <div className="bg-white rounded-xl border border-[#D8CBB8] p-5 space-y-4 shadow-[0_2px_8px_rgba(29,29,27,0.02)]">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#405548] mt-0.5 shrink-0" />
                <div>
                  <span className="font-mono text-[10px] text-[#405548] uppercase block">Location</span>
                  <span className="text-xs font-semibold text-[#1D1D1B]">{resumeData.personal.location}</span>
                </div>
              </div>

              <div className="flex items-start gap-3 pt-3 border-t border-[#D8CBB8]/40">
                <GraduationCap className="w-4 h-4 text-[#405548] mt-0.5 shrink-0" />
                <div>
                  <span className="font-mono text-[10px] text-[#405548] uppercase block">Current Degree</span>
                  <span className="text-xs font-semibold text-[#1D1D1B]">
                    B.Tech in Computer Science & Engineering
                  </span>
                  <span className="text-[11px] text-[#1D1D1B]/60 block">
                    Polaris School of Technology (9.27 SGPA)
                  </span>
                </div>
              </div>

              <div className="flex items-start gap-3 pt-3 border-t border-[#D8CBB8]/40">
                <Briefcase className="w-4 h-4 text-[#405548] mt-0.5 shrink-0" />
                <div>
                  <span className="font-mono text-[10px] text-[#405548] uppercase block">Work Experience</span>
                  <span className="text-xs font-semibold text-[#1D1D1B]">
                    4 Industry Internships Completed
                  </span>
                  <span className="text-[11px] text-[#1D1D1B]/60 block">
                    Frontend, Backend, and QA
                  </span>
                </div>
              </div>

              <div className="flex items-start gap-3 pt-3 border-t border-[#D8CBB8]/40">
                <Award className="w-4 h-4 text-[#405548] mt-0.5 shrink-0" />
                <div>
                  <span className="font-mono text-[10px] text-[#405548] uppercase block">Schooling Foundation</span>
                  <span className="text-xs font-semibold text-[#1D1D1B]">
                    High School 91% • Intermediate 76%
                  </span>
                  <span className="text-[11px] text-[#1D1D1B]/60 block">
                    Shri Guru Nanak H/S Public School
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Narrative Editorial & Core Competencies */}
          <div className="lg:col-span-8 flex flex-col justify-center">
            {/* Editorial Lead Paragraph */}
            <div className="space-y-5 text-base sm:text-lg text-[#1D1D1B]/80 leading-relaxed font-sans mb-12">
              <p>
                I am a <strong className="text-[#1D1D1B] font-semibold">Full Stack Developer</strong> and Computer Science undergraduate studying at Polaris School of Technology (Starex University), maintaining a consistent <strong className="text-[#1D1D1B] font-semibold">9.27 SGPA</strong>.
              </p>
              <p>
                My professional trajectory is defined by real-world engineering contributions across four internships. At <strong className="text-[#1D1D1B]">Qapla IT Services LLP</strong>, I architected optimized databases, secure authentication mechanisms, and end-to-end service request and quotation lifecycles with strict frontend role-based access control. At <strong className="text-[#1D1D1B]">To-Let Globe</strong>, I engineered backend property database systems and optimized data retrieval speeds under strict API security standards.
              </p>
              <p>
                Additionally, through my work at <strong className="text-[#1D1D1B]">AVSOFTEC</strong> and <strong className="text-[#1D1D1B]">F Salon Academy LLP</strong>, I specialized in responsive React interfaces, cross-device layout optimization, and rigorous regression and functional QA workflows.
              </p>
            </div>

            {/* Core Competencies Grid */}
            <div>
              <h3 className="font-mono text-xs uppercase tracking-[0.15em] text-[#405548] font-semibold mb-6">
                Technical Focus & Applied Standards
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {coreCompetencies.map((item, idx) => (
                  <div
                    key={idx}
                    className="p-5 rounded-xl bg-white border border-[#D8CBB8] hover:border-[#405548]/80 transition-all duration-200"
                  >
                    <div className="flex items-center gap-2 mb-2">
                      <span className="w-4 h-4 rounded-full bg-[#405548]/10 text-[#405548] flex items-center justify-center">
                        <Check className="w-2.5 h-2.5" />
                      </span>
                      <h4 className="font-sans font-bold text-sm text-[#1D1D1B]">{item.title}</h4>
                    </div>
                    <p className="text-xs text-[#1D1D1B]/70 leading-relaxed pl-6">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
