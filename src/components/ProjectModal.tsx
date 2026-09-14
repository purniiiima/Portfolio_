import { X, ExternalLink, Github, CheckCircle, Layers, Server, Shield, Database, Calendar } from 'lucide-react';
import { ProjectItem } from '../types';

interface ProjectModalProps {
  project: ProjectItem | null;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  if (!project) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 overflow-y-auto bg-[#1D1D1B]/60 backdrop-blur-sm animate-in fade-in duration-200"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="case-study-title"
    >
      <div
        className="bg-[#F7F5F0] border border-[#D8CBB8] rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl relative animate-in zoom-in-95 duration-200 text-[#1D1D1B]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Sticky Header */}
        <div className="sticky top-0 z-10 bg-[#F7F5F0]/95 backdrop-blur-md px-6 sm:px-8 py-4 border-b border-[#D8CBB8] flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="font-mono text-xs font-bold text-[#405548] uppercase tracking-wider">
              CASE STUDY //
            </span>
            <span className="font-mono text-xs text-[#1D1D1B]/70">{project.period}</span>
          </div>

          <button
            type="button"
            onClick={onClose}
            id="close-project-modal-btn"
            className="p-1.5 rounded-full hover:bg-[#D8CBB8]/40 text-[#1D1D1B] transition-colors"
            aria-label="Close case study modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 space-y-8">
          {/* Title & Tagline */}
          <div>
            <h2 id="case-study-title" className="font-sans text-3xl sm:text-4xl font-bold tracking-tight text-[#1D1D1B] mb-2">
              {project.name}
            </h2>
            <p className="font-sans text-base sm:text-lg text-[#405548] font-medium leading-snug">
              {project.tagline}
            </p>

            {/* Quick Links */}
            <div className="flex flex-wrap items-center gap-3 mt-4">
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-[#1D1D1B] text-[#F7F5F0] hover:bg-[#B56E4A] transition-colors"
                >
                  <Github className="w-3.5 h-3.5" />
                  <span>GitHub Repository</span>
                  <ExternalLink className="w-3 h-3 opacity-60" />
                </a>
              )}

              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-semibold border border-[#D8CBB8] bg-white text-[#1D1D1B] hover:border-[#405548] transition-colors"
                >
                  <span>Live Platform Preview</span>
                  <ExternalLink className="w-3.5 h-3.5 text-[#405548]" />
                </a>
              )}
            </div>
          </div>

          {/* Problem vs Solution Split */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-5 rounded-xl bg-white border border-[#D8CBB8]/70">
              <span className="font-mono text-[11px] uppercase tracking-wider text-[#B56E4A] font-bold block mb-2">
                Problem & Purpose
              </span>
              <p className="text-xs sm:text-sm text-[#1D1D1B]/80 leading-relaxed">
                {project.problem}
              </p>
            </div>

            <div className="p-5 rounded-xl bg-white border border-[#D8CBB8]/70">
              <span className="font-mono text-[11px] uppercase tracking-wider text-[#405548] font-bold block mb-2">
                Solution & Implementation
              </span>
              <p className="text-xs sm:text-sm text-[#1D1D1B]/80 leading-relaxed">
                {project.solution}
              </p>
            </div>
          </div>

          {/* Key Functionality & Modules */}
          <div className="bg-white rounded-xl border border-[#D8CBB8] p-6">
            <h3 className="font-mono text-xs uppercase tracking-widest text-[#405548] font-bold mb-4">
              Key Functionality & Specifications
            </h3>
            <ul className="space-y-3">
              {project.keyFeatures.map((feat, i) => (
                <li key={i} className="flex items-start gap-3 text-xs sm:text-sm text-[#1D1D1B]/85">
                  <CheckCircle className="w-4 h-4 text-[#405548] shrink-0 mt-0.5" />
                  <span>{feat}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Technical Architecture Breakdown */}
          <div className="bg-white rounded-xl border border-[#D8CBB8] p-6">
            <h3 className="font-mono text-xs uppercase tracking-widest text-[#405548] font-bold mb-4">
              System Architecture & Data Flow
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {project.architecture.map((arch, i) => (
                <div key={i} className="p-3.5 rounded-lg bg-[#F7F5F0] border border-[#D8CBB8]/60 text-xs font-mono text-[#1D1D1B]/85 flex items-start gap-2">
                  <span className="text-[#B56E4A] font-bold">0{i + 1}.</span>
                  <span>{arch}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Technologies Used */}
          <div>
            <h3 className="font-mono text-xs uppercase tracking-widest text-[#405548] font-bold mb-3">
              Complete Technology Stack
            </h3>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech, i) => (
                <span
                  key={i}
                  className="px-3 py-1 rounded-full bg-white border border-[#D8CBB8] font-mono text-xs text-[#1D1D1B] font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Contribution Statement */}
          <div className="p-5 rounded-xl bg-[#405548]/10 border border-[#405548]/20">
            <span className="font-mono text-[10px] uppercase tracking-wider text-[#405548] font-bold block mb-1">
              Personal Engineering Role
            </span>
            <p className="text-xs sm:text-sm text-[#1D1D1B] font-medium leading-relaxed">
              {project.contribution}
            </p>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="px-6 sm:px-8 py-4 bg-white border-t border-[#D8CBB8] flex items-center justify-between">
          <span className="font-mono text-xs text-[#405548] font-medium">
            {project.period}
          </span>
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2 text-xs font-semibold text-[#1D1D1B] bg-[#F7F5F0] hover:bg-[#D8CBB8]/40 rounded-full border border-[#D8CBB8] transition-colors"
          >
            Close Case Study
          </button>
        </div>
      </div>
    </div>
  );
}
