import { useState } from 'react';
import { Github, ArrowUpRight, Eye, Layers, CheckCircle, Code, Server, Layout, Sparkles } from 'lucide-react';
import { resumeData } from '../data/resumeData';
import { ProjectItem, AdditionalProjectItem } from '../types';
import ProjectModal from './ProjectModal';

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);
  const [imageErrors, setImageErrors] = useState<Record<string, boolean>>({});

  const handleImageError = (projectId: string) => {
    setImageErrors((prev) => ({ ...prev, [projectId]: true }));
  };

  const handleOpenAdditionalProject = (addProj: AdditionalProjectItem) => {
    setSelectedProject({
      id: addProj.id,
      name: addProj.title || addProj.name || '',
      title: addProj.title,
      tagline: addProj.tagline || `${addProj.category} Platform`,
      period: addProj.date || addProj.period || '',
      date: addProj.date,
      category: addProj.category,
      technologies: addProj.technologies,
      overview: addProj.description,
      description: addProj.description,
      problem: addProj.problemSolved || 'Platform engineering challenges requiring clean architectural patterns and reliable data persistence.',
      problemSolved: addProj.problemSolved,
      solution: addProj.description,
      keyFeatures: addProj.features || [],
      features: addProj.features,
      architecture: [
        `Category: ${addProj.category}`,
        `Stack: ${addProj.technologies.join(', ')}`,
        `Engineered with verified modular patterns, security middlewares, and full CRUD workflows.`,
      ],
      contribution:
        'Architected end-to-end functionality, established database models/APIs, structured component hierarchies, and enforced security standards.',
      githubUrl: addProj.githubUrl,
      liveUrl: addProj.liveUrl,
      imageFallbackLabel: addProj.title || addProj.name || '',
      imageCandidatePaths: [],
      accentColor: addProj.isMern ? '#405548' : '#B56E4A',
      isMern: addProj.isMern,
    });
  };

  return (
    <section id="projects" className="py-24 md:py-32 border-b border-[#D8CBB8]/40">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b border-[#D8CBB8]/60">
          <div>
            <span className="font-mono text-xs tracking-[0.2em] text-[#405548] uppercase font-semibold block mb-3">
              03 / ENGINEERING PROJECTS
            </span>
            <h2 className="font-sans text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#1D1D1B]">
              Featured Work & Systems
            </h2>
          </div>
          <p className="font-sans text-sm text-[#1D1D1B]/70 max-w-md mt-4 md:mt-0">
            Case studies detailing architectural problem solving, database schemas, role-based authentication, and full-stack execution across production applications.
          </p>
        </div>

        {/* 1. Flagship Featured Case Studies (The Three Main Projects) */}
        <div className="space-y-24">
          {resumeData.projects.map((project, idx) => {
            const hasImageFailed = imageErrors[project.id];
            const isEven = idx % 2 === 0;
            const primaryImagePath = project.image || (project.imageCandidatePaths && project.imageCandidatePaths[0]);

            return (
              <article
                key={project.id}
                id={`project-card-${project.id}`}
                className="group relative grid grid-cols-1 lg:grid-cols-12 gap-10 items-center"
              >
                {/* Visual Showcase Container (7 cols) */}
                <div
                  className={`lg:col-span-7 ${
                    isEven ? 'lg:order-1' : 'lg:order-2'
                  }`}
                >
                  <div
                    onClick={() => setSelectedProject(project)}
                    className="cursor-pointer relative rounded-2xl overflow-hidden border border-[#D8CBB8] bg-white shadow-[0_8px_30px_rgba(29,29,27,0.04)] transition-all duration-300 group-hover:shadow-[0_16px_40px_rgba(29,29,27,0.08)] group-hover:border-[#405548]/80"
                  >
                    {/* Top Browser Bar */}
                    <div className="px-4 py-3 bg-[#F7F5F0] border-b border-[#D8CBB8] flex items-center justify-between">
                      <div className="flex items-center gap-1.5">
                        <span className="w-2.5 h-2.5 rounded-full bg-[#D8CBB8]" />
                        <span className="w-2.5 h-2.5 rounded-full bg-[#D8CBB8]" />
                        <span className="w-2.5 h-2.5 rounded-full bg-[#D8CBB8]" />
                      </div>
                      <span className="font-mono text-[10px] text-[#1D1D1B]/60 tracking-wider">
                        {project.id}.systems // {project.period}
                      </span>
                      <div className="flex items-center gap-1 text-[10px] font-mono text-[#405548]">
                        <span>CASE STUDY</span>
                      </div>
                    </div>

                    {/* Visual Content: Screenshot with interactive overlay, or fallback schematic */}
                    {!hasImageFailed && primaryImagePath ? (
                      <div className="relative aspect-[16/10] sm:h-[380px] w-full overflow-hidden bg-[#F7F5F0]">
                        <img
                          src={primaryImagePath}
                          alt={project.name}
                          referrerPolicy="no-referrer"
                          className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
                          onError={() => handleImageError(project.id)}
                        />
                        {/* Hover Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-[#1D1D1B]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-mono font-medium bg-white text-[#1D1D1B] shadow-lg">
                            <Eye className="w-4 h-4 text-[#405548]" />
                            <span>Click to Inspect Full Architecture & Metrics</span>
                          </span>
                        </div>
                        {/* Live Interface Badge */}
                        <div className="absolute top-4 right-4 z-10">
                          <span className="px-3 py-1 rounded-full text-[10px] font-mono font-semibold bg-[#1D1D1B]/85 text-[#F7F5F0] backdrop-blur-md border border-white/20 shadow-sm flex items-center gap-1.5">
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                            Production Interface
                          </span>
                        </div>
                      </div>
                    ) : (
                      /* Architectural Schematic Fallback */
                      <div className="relative min-h-[320px] sm:min-h-[380px] p-6 sm:p-8 flex flex-col justify-between bg-gradient-to-br from-[#F7F5F0]/60 to-white">
                        <div className="space-y-6">
                          <div className="flex items-center justify-between">
                            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-medium bg-white border border-[#D8CBB8] text-[#1D1D1B]">
                              <Layers className="w-3.5 h-3.5 text-[#405548]" />
                              <span>System Architecture Specification</span>
                            </span>
                            <span className="font-mono text-[11px] text-[#B56E4A] font-semibold">
                              Full-Stack Blueprint
                            </span>
                          </div>

                          <div className="p-4 rounded-xl bg-white border border-[#D8CBB8] shadow-sm">
                            <h4 className="font-sans font-bold text-sm text-[#1D1D1B] mb-2">{project.name}</h4>
                            <p className="text-xs text-[#1D1D1B]/75 leading-relaxed">{project.overview}</p>
                          </div>
                        </div>

                        <div className="pt-4 border-t border-[#D8CBB8]/40 flex items-center justify-between font-mono text-[11px] text-[#1D1D1B]/60">
                          <span>{project.technologies.slice(0, 4).join(' • ')}</span>
                          <span className="text-[#405548] font-bold">CLICK TO INSPECT</span>
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                {/* Case Study Editorial Content (5 cols) */}
                <div
                  className={`lg:col-span-5 ${
                    isEven ? 'lg:order-2' : 'lg:order-1'
                  } space-y-6`}
                >
                  {/* Category & Date */}
                  <div className="flex flex-wrap items-center gap-2.5">
                    <span className="font-mono text-xs font-bold text-[#405548] uppercase tracking-wider">
                      FLAGSHIP 0{idx + 1}
                    </span>
                    <span className="w-1.5 h-1.5 rounded-full bg-[#D8CBB8]" />
                    <span className="font-mono text-xs text-[#1D1D1B]/60">{project.period}</span>

                    {project.isMern && (
                      <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-mono font-semibold bg-[#405548]/10 text-[#405548] border border-[#405548]/30">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#405548]" />
                        MERN STACK
                      </span>
                    )}
                  </div>

                  {/* Project Name */}
                  <h3 className="font-sans text-2xl sm:text-3xl font-bold tracking-tight text-[#1D1D1B]">
                    {project.name}
                  </h3>

                  {/* Tagline */}
                  <p className="font-sans text-sm sm:text-base text-[#405548] font-medium leading-relaxed">
                    {project.tagline}
                  </p>

                  {/* Overview from resume */}
                  <p className="text-xs sm:text-sm text-[#1D1D1B]/75 leading-relaxed">
                    {project.overview}
                  </p>

                  {/* Key Highlights */}
                  <div className="space-y-2 pt-2 border-t border-[#D8CBB8]/50">
                    <span className="font-mono text-[10px] uppercase tracking-wider text-[#405548] font-bold block">
                      Core Architecture Highlights
                    </span>
                    <ul className="space-y-2">
                      {project.keyFeatures.slice(0, 3).map((feat, fIdx) => (
                        <li key={fIdx} className="flex items-start gap-2.5 text-xs text-[#1D1D1B]/80 leading-normal">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#B56E4A] mt-1.5 shrink-0" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {project.technologies.map((t, i) => {
                      const isMernCore = ['MongoDB', 'Express.js', 'React.js', 'Node.js'].includes(t);
                      return (
                        <span
                          key={i}
                          className={`px-2.5 py-1 rounded-md font-mono text-[11px] transition-colors ${
                            isMernCore
                              ? 'bg-[#405548]/10 border border-[#405548]/40 text-[#1D1D1B] font-semibold'
                              : 'bg-white border border-[#D8CBB8] text-[#1D1D1B]/85'
                          }`}
                        >
                          {t}
                        </span>
                      );
                    })}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex flex-wrap items-center gap-3 pt-4">
                    <button
                      type="button"
                      id={`inspect-project-${project.id}`}
                      onClick={() => setSelectedProject(project)}
                      className="px-5 py-2.5 rounded-full bg-[#1D1D1B] text-[#F7F5F0] text-xs font-semibold hover:bg-[#B56E4A] transition-colors flex items-center gap-1.5 shadow-sm"
                    >
                      <span>Deep Dive Case Study</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </button>

                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 py-2.5 rounded-full border border-[#D8CBB8] bg-white text-xs font-semibold text-[#1D1D1B] hover:border-[#405548] transition-colors flex items-center gap-1.5"
                      >
                        <Github className="w-3.5 h-3.5" />
                        <span>Source Code</span>
                      </a>
                    )}
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        {/* 2. Additional Projects (Placed after the three main projects as requested) */}
        {resumeData.additionalProjects && resumeData.additionalProjects.length > 0 && (
          <div className="mt-32 pt-20 border-t border-[#D8CBB8]/70">
            {/* Section Header */}
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
              <div>
                <span className="font-mono text-xs tracking-[0.2em] text-[#405548] uppercase font-semibold block mb-2">
                  ADDITIONAL ENGINEERING PROJECTS // SPECIALIZED SYSTEMS & APIS
                </span>
                <h3 className="font-sans text-2xl sm:text-3xl font-bold tracking-tight text-[#1D1D1B]">
                  Specialized Systems & Web Applications
                </h3>
              </div>
              <p className="font-sans text-xs sm:text-sm text-[#1D1D1B]/70 max-w-md mt-2 md:mt-0">
                End-to-end full stack platforms, backend load-distribution systems, developer tools, and client utilities.
              </p>
            </div>

            {/* Pure Typographic Editorial Project Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {resumeData.additionalProjects.map((addProj) => {
                const displayTitle = addProj.title || addProj.name || 'Project';

                return (
                  <article
                    key={addProj.id}
                    id={`project-card-${addProj.id}`}
                    className="group rounded-2xl bg-white border border-[#D8CBB8] hover:border-[#405548] transition-all duration-300 flex flex-col justify-between shadow-[0_4px_16px_rgba(29,29,27,0.03)] hover:shadow-[0_12px_32px_rgba(29,29,27,0.08)] overflow-hidden"
                  >
                    {/* Card Top / Header Bar */}
                    <div className="px-6 pt-6 pb-2 border-b border-[#D8CBB8]/40 bg-[#F7F5F0]/50 flex items-center justify-between">
                      <span className="font-mono text-[10px] tracking-wider text-[#405548] uppercase font-bold">
                        {addProj.category}
                      </span>
                      <span className="font-mono text-[11px] text-[#1D1D1B]/60 font-medium">
                        {addProj.date}
                      </span>
                    </div>

                    {/* Card Body */}
                    <div className="p-6">
                      {/* Title */}
                      <h4
                        onClick={() => handleOpenAdditionalProject(addProj)}
                        className="cursor-pointer font-sans font-bold text-xl text-[#1D1D1B] mb-2 tracking-tight group-hover:text-[#405548] transition-colors"
                      >
                        {displayTitle}
                      </h4>

                      {/* Tagline if present */}
                      {addProj.tagline && (
                        <p className="font-mono text-xs text-[#405548] font-medium mb-3">
                          {addProj.tagline}
                        </p>
                      )}

                      {/* Description */}
                      <p className="text-xs text-[#1D1D1B]/75 leading-relaxed mb-4">
                        {addProj.description}
                      </p>

                      {/* Problem Solved Callout */}
                      {addProj.problemSolved && (
                        <div className="p-3 rounded-xl bg-[#F7F5F0] border border-[#D8CBB8]/70 mb-4">
                          <span className="font-mono text-[9px] uppercase tracking-wider text-[#405548] font-bold block mb-1">
                            Problem Solved
                          </span>
                          <p className="text-[11px] text-[#1D1D1B]/85 leading-snug">
                            {addProj.problemSolved}
                          </p>
                        </div>
                      )}

                      {/* Key Features Preview */}
                      {addProj.features && addProj.features.length > 0 && (
                        <div className="space-y-1.5 mb-4">
                          <span className="font-mono text-[10px] text-[#1D1D1B]/60 font-semibold uppercase tracking-wider block">
                            Key Features:
                          </span>
                          <ul className="space-y-1">
                            {addProj.features.slice(0, 3).map((feat, fIdx) => (
                              <li key={fIdx} className="flex items-start gap-2 text-xs text-[#1D1D1B]/80 leading-snug">
                                <span className="w-1.5 h-1.5 rounded-full bg-[#405548] mt-1.5 shrink-0" />
                                <span className="line-clamp-2">{feat}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>

                    {/* Card Footer: Tech stack & Actions */}
                    <div className="px-6 pb-6 pt-0">
                      <div className="flex flex-wrap gap-1.5 pt-3 border-t border-[#D8CBB8]/50 mb-4">
                        {addProj.technologies.slice(0, 5).map((tech, tIdx) => (
                          <span
                            key={tIdx}
                            className="px-2 py-0.5 rounded text-[10px] font-mono bg-[#F7F5F0] border border-[#D8CBB8]/80 text-[#1D1D1B]/85 font-medium"
                          >
                            {tech}
                          </span>
                        ))}
                        {addProj.technologies.length > 5 && (
                          <span className="px-1.5 py-0.5 rounded text-[10px] font-mono text-[#1D1D1B]/50">
                            +{addProj.technologies.length - 5}
                          </span>
                        )}
                      </div>

                      {/* Action Links */}
                      <div className="flex items-center justify-between gap-2 pt-2 border-t border-[#D8CBB8]/40">
                        <button
                          type="button"
                          onClick={() => handleOpenAdditionalProject(addProj)}
                          className="inline-flex items-center gap-1 text-xs font-mono font-semibold text-[#1D1D1B] hover:text-[#B56E4A] transition-colors"
                        >
                          <span>Case Details</span>
                          <ArrowUpRight className="w-3.5 h-3.5" />
                        </button>

                        {addProj.githubUrl && (
                          <a
                            href={addProj.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-[#D8CBB8] bg-white text-xs font-mono font-semibold text-[#1D1D1B] hover:border-[#405548] hover:text-[#405548] transition-colors shadow-sm"
                          >
                            <Github className="w-3.5 h-3.5" />
                            <span>GitHub</span>
                          </a>
                        )}
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        )}
      </div>

      {/* Case Study Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
}
