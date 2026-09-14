import { useState } from 'react';
import { Code, Layout, Database, Wrench, Search, CheckCircle2, Server, Layers, Cpu } from 'lucide-react';
import { resumeData } from '../data/resumeData';

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categoryIcons: Record<string, typeof Code> = {
    'MERN Stack & Core Web': Layers,
    'Programming Languages': Code,
    'Technologies & Frameworks': Layout,
    'Databases & Storage': Database,
    'Tools & Utilities': Wrench,
  };

  const mernHighlights = [
    {
      abbr: 'M',
      tech: 'MongoDB',
      role: 'Database & Document Modeling',
      desc: 'Schema design, indexing, Mongoose ORM, aggregation pipelines, and high-performance collection queries.',
      projects: 'Next Hire, Hospital Management',
    },
    {
      abbr: 'E',
      tech: 'Express.js',
      role: 'REST Routing & Middleware',
      desc: 'Modular REST controller architecture, custom JWT authorization middlewares, and request validation pipelines.',
      projects: 'Next Hire, Enterprise Backends',
    },
    {
      abbr: 'R',
      tech: 'React.js',
      role: 'Client Interface & State Architecture',
      desc: 'Component hierarchies, custom hooks, Role-Based Access Control (RBAC), protected routing, and responsive design.',
      projects: 'CivicPulse, Next Hire, Clinic System',
    },
    {
      abbr: 'N',
      tech: 'Node.js',
      role: 'Server Runtime & Asynchronous I/O',
      desc: 'Event-driven asynchronous runtime, RESTful microservices, secure credential hashing, and backend integration.',
      projects: 'Next Hire, Microservices',
    },
  ];

  const allSkills = resumeData.skills.flatMap((cat) =>
    cat.skills.map((s) => ({
      ...s,
      category: cat.title,
    }))
  );

  const filteredSkills = allSkills.filter((s) => {
    const matchesCategory = activeCategory === 'all' || s.category === activeCategory;
    const matchesSearch =
      s.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (s.context && s.context.toLowerCase().includes(searchQuery.toLowerCase())) ||
      s.category.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="skills" className="py-24 md:py-32 border-b border-[#D8CBB8]/40">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b border-[#D8CBB8]/60">
          <div>
            <span className="font-mono text-xs tracking-[0.2em] text-[#405548] uppercase font-semibold block mb-3">
              04 / TECHNICAL TOOLKIT & ARCHITECTURE
            </span>
            <h2 className="font-sans text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#1D1D1B]">
              Core Competencies & Stack Hierarchy
            </h2>
          </div>
          <p className="font-sans text-sm text-[#1D1D1B]/70 max-w-md mt-4 md:mt-0">
            Disciplined toolset anchored by the full MERN stack, verified through 4 commercial internships, academic coursework, and production projects.
          </p>
        </div>

        {/* Highlighted MERN Stack Pillars Showcase */}
        <div className="mb-16">
          <div className="flex items-center gap-2 mb-4">
            <span className="w-2 h-2 rounded-full bg-[#405548]" />
            <span className="font-mono text-xs font-bold text-[#1D1D1B] uppercase tracking-wider">
              CORE SPECIALIZATION // MERN STACK ARCHITECTURE
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {mernHighlights.map((pillar, pIdx) => (
              <div
                key={pIdx}
                className="p-5 rounded-2xl bg-white border border-[#D8CBB8] shadow-[0_4px_16px_rgba(29,29,27,0.03)] hover:border-[#405548] transition-all duration-200 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="w-9 h-9 rounded-xl bg-[#1D1D1B] text-[#F7F5F0] flex items-center justify-center font-mono font-bold text-sm">
                      {pillar.abbr}
                    </span>
                    <span className="font-mono text-[9px] uppercase tracking-wider px-2 py-0.5 rounded bg-[#405548]/10 text-[#405548] font-bold">
                      MERN Core
                    </span>
                  </div>

                  <h3 className="font-sans font-bold text-lg text-[#1D1D1B]">
                    {pillar.tech}
                  </h3>
                  <p className="font-mono text-xs text-[#405548] font-medium mt-0.5 mb-2.5">
                    {pillar.role}
                  </p>
                  <p className="text-xs text-[#1D1D1B]/75 leading-relaxed font-sans mb-4">
                    {pillar.desc}
                  </p>
                </div>

                <div className="pt-3 border-t border-[#D8CBB8]/50 text-[10px] font-mono text-[#1D1D1B]/60">
                  <span>Applied In: <strong className="text-[#1D1D1B]">{pillar.projects}</strong></span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Filter Controls Bar */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-10">
          {/* Category Tabs */}
          <div className="flex flex-wrap items-center gap-1.5 p-1.5 rounded-xl bg-white border border-[#D8CBB8]">
            <button
              type="button"
              id="skill-filter-all"
              onClick={() => setActiveCategory('all')}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-medium transition-all ${
                activeCategory === 'all'
                  ? 'bg-[#1D1D1B] text-[#F7F5F0] font-semibold'
                  : 'text-[#1D1D1B]/70 hover:text-[#1D1D1B] hover:bg-[#F7F5F0]'
              }`}
            >
              All Skills ({allSkills.length})
            </button>

            {resumeData.skills.map((cat) => {
              const Icon = categoryIcons[cat.title] || Code;
              const isActive = activeCategory === cat.title;
              return (
                <button
                  key={cat.title}
                  type="button"
                  id={`skill-filter-${cat.title.toLowerCase().replace(/\s+/g, '-')}`}
                  onClick={() => setActiveCategory(cat.title)}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                    isActive
                      ? 'bg-[#405548] text-[#F7F5F0] font-semibold'
                      : 'text-[#1D1D1B]/70 hover:text-[#1D1D1B] hover:bg-[#F7F5F0]'
                  }`}
                >
                  <Icon className="w-3 h-3" />
                  <span>{cat.title}</span>
                </button>
              );
            })}
          </div>

          {/* Search filter input */}
          <div className="relative min-w-[240px]">
            <Search className="w-3.5 h-3.5 absolute left-3 top-1/2 -translate-y-1/2 text-[#1D1D1B]/40" />
            <input
              type="text"
              id="skill-search-input"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search stack or concepts..."
              className="w-full pl-9 pr-4 py-2 text-xs rounded-xl bg-white border border-[#D8CBB8] text-[#1D1D1B] placeholder:text-[#1D1D1B]/40 focus:outline-none focus:ring-2 focus:ring-[#405548]/30 transition-all"
            />
          </div>
        </div>

        {/* Structured Skills Matrix */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {filteredSkills.map((skill, idx) => {
            const isMernItem = ['MongoDB', 'Express.js', 'React.js', 'Node.js'].includes(skill.name);

            return (
              <div
                key={idx}
                className={`p-5 rounded-xl bg-white border transition-all duration-200 group flex flex-col justify-between ${
                  isMernItem
                    ? 'border-[#405548] shadow-[0_2px_12px_rgba(64,85,72,0.06)]'
                    : 'border-[#D8CBB8] hover:border-[#405548]'
                }`}
              >
                <div>
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <span className="font-mono text-[10px] text-[#405548] uppercase tracking-wider font-semibold">
                      {skill.category}
                    </span>
                    {isMernItem ? (
                      <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-[#405548]/10 text-[#405548] font-bold">
                        MERN CORE
                      </span>
                    ) : (
                      skill.level && (
                        <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-[#F7F5F0] border border-[#D8CBB8]/80 text-[#1D1D1B]/80 font-medium">
                          {skill.level}
                        </span>
                      )
                    )}
                  </div>

                  <h3 className="font-sans font-bold text-base text-[#1D1D1B] group-hover:text-[#405548] transition-colors">
                    {skill.name}
                  </h3>

                  {skill.context && (
                    <p className="text-xs text-[#1D1D1B]/70 leading-relaxed mt-2 font-mono">
                      {skill.context}
                    </p>
                  )}
                </div>

                <div className="pt-4 mt-4 border-t border-[#D8CBB8]/40 flex items-center justify-between text-[10px] font-mono text-[#1D1D1B]/50">
                  <span>Verified in Resume</span>
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#405548]" />
                </div>
              </div>
            );
          })}
        </div>

        {filteredSkills.length === 0 && (
          <div className="text-center py-12 bg-white rounded-xl border border-[#D8CBB8]">
            <p className="text-xs font-mono text-[#1D1D1B]/60">
              No technical skills matched your search query "{searchQuery}".
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
