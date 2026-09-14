import { useState } from 'react';
import { ArrowDown, FileText, ArrowUpRight, CheckCircle2, Layers, Server, Database, Sparkles, Terminal } from 'lucide-react';
import { resumeData } from '../data/resumeData';

interface HeroProps {
  onOpenResume: () => void;
}

export default function Hero({ onOpenResume }: HeroProps) {
  const [activeMernNode, setActiveMernNode] = useState<'m' | 'e' | 'r' | 'n'>('r');
  const [imgFailed, setImgFailed] = useState(false);

  // MERN Architectural Spec Nodes strictly derived from resume
  const mernNodes = {
    m: {
      letter: 'M',
      name: 'MongoDB',
      role: 'Database & Aggregations',
      detail: 'Document modeling, aggregation pipelines, schema indexing, and Mongoose integration across Next Hire & Hospital Management System.',
      badge: 'Document Persistence',
    },
    e: {
      letter: 'E',
      name: 'Express.js',
      role: 'REST Routing & Middleware',
      detail: 'Modular routing, token-based authentication middlewares, request validation pipelines, and error handling.',
      badge: 'REST Engine',
    },
    r: {
      letter: 'R',
      name: 'React.js',
      role: 'Client Architecture & RBAC',
      detail: 'State management, custom hooks, Role-Based Access Control (RBAC), conditional navigation, and responsive component hierarchies.',
      badge: 'Frontend Architecture',
    },
    n: {
      letter: 'N',
      name: 'Node.js',
      role: 'Runtime & Asynchronous I/O',
      detail: 'Event-driven server runtime, asynchronous request handling, API microservices, and database query coordination.',
      badge: 'Server Runtime',
    },
  };

  const photoSource = '/assets/profile.jpeg';

  return (
    <section
      id="hero"
      className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden border-b border-[#D8CBB8]/40"
    >
      {/* Subtle Background Architectural Grid Pattern */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.035]"
        style={{
          backgroundImage: `radial-gradient(#1D1D1B 1px, transparent 1px)`,
          backgroundSize: '28px 28px',
        }}
      />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
          {/* Left Column: Editorial Headline & Professional Introduction */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            {/* Role Eyebrow Tag */}
            <div className="inline-flex items-center gap-2 mb-6">
              <span className="w-2 h-2 rounded-full bg-[#405548] animate-pulse" />
              <span className="font-mono text-[11px] tracking-[0.2em] text-[#405548] uppercase font-semibold">
                FULL STACK DEVELOPER & SOFTWARE ENGINEER // MERN STACK
              </span>
            </div>

            {/* Editorial Headline */}
            <h1 className="font-sans text-4xl sm:text-5xl lg:text-[3.6rem] leading-[1.12] tracking-[-0.03em] text-[#1D1D1B] font-bold mb-6">
              Engineering scalable{' '}
              <span className="font-serif italic font-normal text-[#405548]">
                MERN platforms
              </span>{' '}
              and high-performance web systems.
            </h1>

            {/* Precise Professional Summary strictly from resume */}
            <p className="font-sans text-base sm:text-lg text-[#1D1D1B]/75 leading-relaxed max-w-2xl mb-8">
              Hello, I am <strong className="text-[#1D1D1B] font-semibold">{resumeData.personal.name}</strong>. Full Stack Software Engineer specializing in the MERN stack (<span className="text-[#1D1D1B] font-semibold">MongoDB, Express.js, React.js, Node.js</span>) with an academic record of <strong className="text-[#1D1D1B] font-semibold">9.27 SGPA</strong> and 4 industry internships spanning full-stack development, Flutter, database indexing, and application QA testing.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-3 sm:gap-4 mb-10">
              <a
                href="#projects"
                id="hero-view-work-cta"
                className="px-6 py-3.5 rounded-full bg-[#1D1D1B] text-[#F7F5F0] text-xs sm:text-sm font-semibold hover:bg-[#B56E4A] transition-all duration-200 flex items-center gap-2 shadow-[0_2px_12px_rgba(29,29,27,0.1)] active:scale-[0.98]"
              >
                <span>Explore Featured Projects</span>
                <ArrowDown className="w-4 h-4 text-[#F7F5F0]" />
              </a>

              <button
                type="button"
                id="hero-view-resume-cta"
                onClick={onOpenResume}
                className="px-6 py-3.5 rounded-full border border-[#D8CBB8] bg-white text-[#1D1D1B] text-xs sm:text-sm font-semibold hover:border-[#405548] hover:bg-[#F7F5F0] transition-all duration-200 flex items-center gap-2 shadow-[0_1px_3px_rgba(0,0,0,0.03)] active:scale-[0.98]"
              >
                <FileText className="w-4 h-4 text-[#405548]" />
                <span>View / Print Resume</span>
              </button>

              <a
                href="#contact"
                id="hero-contact-cta"
                className="px-5 py-3.5 text-xs sm:text-sm font-medium text-[#405548] hover:text-[#B56E4A] transition-colors flex items-center gap-1 underline underline-offset-4"
              >
                <span>Initiate Contact</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* Recruiter Verified Telemetry */}
            <div className="pt-8 border-t border-[#D8CBB8]/60 grid grid-cols-2 sm:grid-cols-3 gap-6">
              <div>
                <span className="block font-mono text-[10px] tracking-wider text-[#405548] uppercase">
                  Academic Standing
                </span>
                <span className="font-sans font-bold text-sm text-[#1D1D1B] mt-0.5 block">
                  9.27 SGPA (B.Tech CSE)
                </span>
                <span className="text-[11px] text-[#1D1D1B]/60 block truncate">
                  Polaris School of Technology
                </span>
              </div>

              <div>
                <span className="block font-mono text-[10px] tracking-wider text-[#405548] uppercase">
                  Location & Availability
                </span>
                <span className="font-sans font-bold text-sm text-[#1D1D1B] mt-0.5 block">
                  Rudrapur, Uttarakhand
                </span>
                <span className="text-[11px] text-[#1D1D1B]/60 block">
                  On-site & Remote Ready
                </span>
              </div>

              <div className="col-span-2 sm:col-span-1">
                <span className="block font-mono text-[10px] tracking-wider text-[#405548] uppercase">
                  Primary Specialization
                </span>
                <span className="font-sans font-bold text-sm text-[#1D1D1B] mt-0.5 block">
                  MERN Stack Architecture
                </span>
                <span className="text-[11px] text-[#1D1D1B]/60 block">
                  MongoDB • Express • React • Node
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Refined Editorial Profile Photo Composition (Hero Section Only) */}
          <div className="lg:col-span-5 flex flex-col items-center lg:items-end">
            <div className="w-full max-w-md">
              {/* Outer Editorial Container */}
              <div className="relative rounded-3xl p-3 bg-white border border-[#D8CBB8] shadow-[0_16px_50px_rgba(29,29,27,0.06)] group">
                {/* Decorative Geometric Corner Brackets */}
                <div className="absolute -top-1.5 -left-1.5 w-4 h-4 border-t-2 border-l-2 border-[#405548] rounded-tl-sm pointer-events-none" />
                <div className="absolute -bottom-1.5 -right-1.5 w-4 h-4 border-b-2 border-r-2 border-[#B56E4A] rounded-br-sm pointer-events-none" />

                {/* Profile Photo Display Frame */}
                <div className="relative rounded-2xl overflow-hidden aspect-[4/5] bg-[#F7F5F0] border border-[#D8CBB8]/80 flex items-center justify-center">
                  {!imgFailed ? (
                    <img
                      src={photoSource}
                      alt="Purnima Baroi - Full Stack Developer"
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-[1.02]"
                      onError={() => setImgFailed(true)}
                    />
                  ) : (
                    /* Dignified Editorial Monogram Studio Frame (No AI face, purely typographic & branded) */
                    <div className="w-full h-full p-8 flex flex-col justify-between bg-gradient-to-br from-[#F7F5F0] via-white to-[#F7F5F0] text-center relative overflow-hidden">
                      <div
                        className="absolute inset-0 pointer-events-none opacity-[0.05]"
                        style={{
                          backgroundImage: `radial-gradient(#1D1D1B 1px, transparent 1px)`,
                          backgroundSize: '20px 20px',
                        }}
                      />

                      <div className="flex items-center justify-between z-10">
                        <span className="font-mono text-[10px] uppercase tracking-widest text-[#405548] font-bold">
                          PB // DEV PORTFOLIO
                        </span>
                        <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[9px] font-mono bg-[#405548]/10 text-[#405548] font-medium">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#405548]" />
                          Verified
                        </span>
                      </div>

                      <div className="my-auto z-10 space-y-3">
                        <div className="w-20 h-20 mx-auto rounded-2xl bg-[#1D1D1B] text-[#F7F5F0] flex items-center justify-center shadow-md">
                          <span className="font-serif italic text-3xl font-normal">PB</span>
                        </div>
                        <div>
                          <h3 className="font-sans font-bold text-lg text-[#1D1D1B] tracking-tight">
                            {resumeData.personal.name}
                          </h3>
                          <p className="font-mono text-xs text-[#405548] mt-0.5">
                            Full Stack Software Engineer
                          </p>
                        </div>
                      </div>

                      <div className="z-10 pt-4 border-t border-[#D8CBB8]/50 flex items-center justify-between text-[10px] font-mono text-[#1D1D1B]/50">
                        <span>B.Tech CSE • 9.27 SGPA</span>
                        <span>MERN Stack</span>
                      </div>
                    </div>
                  )}

                  {/* Floating Status Badge (Top-Right of photo) */}
                  <div className="absolute top-4 right-4 z-20">
                    <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/95 backdrop-blur-md border border-[#D8CBB8] shadow-sm text-[10px] font-mono font-semibold text-[#1D1D1B]">
                      <span className="w-2 h-2 rounded-full bg-[#405548] animate-pulse" />
                      <span>MERN SPECIALIST</span>
                    </div>
                  </div>

                  {/* Asymmetric Bottom Overlay Card */}
                  <div className="absolute bottom-3 inset-x-3 z-20">
                    <div className="p-3.5 rounded-xl bg-white/95 backdrop-blur-md border border-[#D8CBB8] shadow-[0_4px_16px_rgba(29,29,27,0.08)] flex items-center justify-between">
                      <div>
                        <span className="font-mono text-[9px] uppercase tracking-wider text-[#405548] font-bold block">
                          ENGINEERING PROFILE
                        </span>
                        <h2 className="font-sans font-bold text-sm text-[#1D1D1B]">
                          {resumeData.personal.name}
                        </h2>
                        <span className="text-[10px] font-mono text-[#1D1D1B]/70 block">
                          Full Stack Developer • 4 Internships
                        </span>
                      </div>
                      <div className="text-right pl-2 border-l border-[#D8CBB8]">
                        <span className="font-mono text-xs font-bold text-[#405548] block">
                          9.27
                        </span>
                        <span className="font-mono text-[9px] text-[#1D1D1B]/60 uppercase block">
                          SGPA
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Connected MERN Architecture Telemetry Panel below the photograph */}
              <div className="mt-4 p-4 rounded-2xl bg-white border border-[#D8CBB8] shadow-[0_4px_20px_rgba(29,29,27,0.03)]">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <Terminal className="w-3.5 h-3.5 text-[#405548]" />
                    <span className="font-mono text-[11px] font-bold text-[#1D1D1B] uppercase tracking-wider">
                      Core Stack Architecture
                    </span>
                  </div>
                  <span className="font-mono text-[10px] text-[#405548] font-semibold">
                    4-Tier Synergy
                  </span>
                </div>

                {/* M-E-R-N Selector Buttons */}
                <div className="grid grid-cols-4 gap-1.5 mb-3">
                  {(['m', 'e', 'r', 'n'] as const).map((key) => {
                    const node = mernNodes[key];
                    const isActive = activeMernNode === key;
                    return (
                      <button
                        key={key}
                        type="button"
                        id={`mern-toggle-${key}`}
                        onClick={() => setActiveMernNode(key)}
                        className={`py-1.5 px-2 rounded-lg text-center transition-all border ${
                          isActive
                            ? 'bg-[#1D1D1B] text-[#F7F5F0] border-[#1D1D1B] shadow-sm'
                            : 'bg-[#F7F5F0] border-[#D8CBB8]/80 text-[#1D1D1B]/80 hover:bg-white'
                        }`}
                      >
                        <span className="block font-mono font-bold text-xs">{node.letter}</span>
                        <span className="block font-sans text-[9px] truncate opacity-90">{node.name}</span>
                      </button>
                    );
                  })}
                </div>

                {/* Active MERN Node Detail */}
                <div className="p-3 rounded-xl bg-[#F7F5F0] border border-[#D8CBB8]/70">
                  <div className="flex items-center justify-between mb-1">
                    <span className="font-sans font-bold text-xs text-[#1D1D1B]">
                      {mernNodes[activeMernNode].name}
                    </span>
                    <span className="font-mono text-[9px] px-2 py-0.5 rounded bg-white border border-[#D8CBB8] text-[#405548] font-medium">
                      {mernNodes[activeMernNode].badge}
                    </span>
                  </div>
                  <p className="text-[11px] text-[#1D1D1B]/75 leading-relaxed font-sans">
                    {mernNodes[activeMernNode].detail}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
