import { X, Printer, Download, Mail, MapPin, ExternalLink, Check, Copy } from 'lucide-react';
import { useState } from 'react';
import { resumeData } from '../data/resumeData';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

/**
 * Expected PDF file path:
 * If a static compiled PDF is placed at /public/assets/Purnima_Baroi_Resume.pdf,
 * it is directly downloaded; otherwise the browser native Print/Save-as-PDF flow is triggered.
 */
const RESUME_PDF_PATH = '/assets/Purnima_Baroi_Resume.pdf';

export default function ResumeModal({ isOpen, onClose }: ResumeModalProps) {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(resumeData.personal.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleDownload = async () => {
    try {
      const response = await fetch(RESUME_PDF_PATH, { method: 'HEAD' });
      if (response.ok) {
        const link = document.createElement('a');
        link.href = RESUME_PDF_PATH;
        link.download = 'Purnima_Baroi_Resume.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        return;
      }
    } catch {
      // Fall through to print dialog
    }
    // Launch browser print/save-to-PDF dialog directly
    window.print();
  };

  return (
    <div
      className="resume-modal-overlay fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 md:p-8 overflow-y-auto bg-[#1D1D1B]/65 backdrop-blur-sm animate-in fade-in duration-200"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label="Purnima Baroi Official Resume"
    >
      <div
        className="resume-modal-container bg-white border border-[#D8CBB8] rounded-2xl max-w-4xl w-full max-h-[92vh] overflow-y-auto shadow-2xl relative text-[#1D1D1B]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Sticky Action Toolbar */}
        <div
          id="resume-modal-toolbar"
          className="sticky top-0 z-20 bg-[#F7F5F0]/95 backdrop-blur-md px-6 py-3.5 border-b border-[#D8CBB8] flex flex-wrap items-center justify-between gap-3"
        >
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#405548]" />
            <span className="font-mono text-xs font-bold text-[#1D1D1B] uppercase tracking-wider">
              OFFICIAL RESUME // PURNIMA BAROI
            </span>
          </div>

          <div className="flex items-center gap-2 flex-wrap">
            <button
              type="button"
              id="resume-copy-email-btn"
              onClick={handleCopyEmail}
              className="px-3 py-1.5 rounded-md text-xs font-mono font-medium border border-[#D8CBB8] bg-white hover:bg-[#F7F5F0] flex items-center gap-1.5 text-[#1D1D1B]"
              title="Copy Email Address"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5 text-[#405548]" />}
              <span>{copied ? 'Copied' : 'Copy Email'}</span>
            </button>

            <button
              type="button"
              id="resume-download-btn"
              onClick={handleDownload}
              className="px-3 py-1.5 rounded-md text-xs font-mono font-medium border border-[#405548] bg-white hover:bg-[#405548]/5 text-[#405548] flex items-center gap-1.5 transition-colors"
              title="Download PDF File"
            >
              <Download className="w-3.5 h-3.5 text-[#405548]" />
              <span>Download PDF</span>
            </button>

            <button
              type="button"
              id="resume-print-btn"
              onClick={handlePrint}
              className="px-3.5 py-1.5 rounded-md text-xs font-mono font-medium bg-[#1D1D1B] text-[#F7F5F0] hover:bg-[#B56E4A] flex items-center gap-1.5 transition-colors shadow-sm"
              title="Print or Save via Browser Dialog"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print / Save PDF</span>
            </button>

            <button
              type="button"
              onClick={onClose}
              id="resume-close-btn"
              className="p-1.5 rounded-md hover:bg-[#D8CBB8]/40 text-[#1D1D1B] transition-colors ml-1"
              aria-label="Close resume viewer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Printable Resume Document Page (Targeted by @media print) */}
        <div id="printable-resume" className="p-8 sm:p-12 space-y-8 font-sans print:p-0 print:m-0">
          {/* Header */}
          <div className="text-center pb-6 border-b border-[#1D1D1B]/20">
            <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#1D1D1B] mb-2 uppercase">
              {resumeData.personal.name}
            </h1>
            <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-1 text-xs text-[#1D1D1B]/80 font-mono">
              <a href={`mailto:${resumeData.personal.email}`} className="hover:underline text-[#405548]">
                {resumeData.personal.email}
              </a>
              <span>•</span>
              <span>{resumeData.personal.location}</span>
            </div>
            <div className="flex items-center justify-center gap-4 mt-2 text-xs font-mono text-[#405548]">
              <a href="https://linkedin.com/in/purnimabaroi" target="_blank" rel="noopener noreferrer" className="hover:underline flex items-center gap-1">
                <span>LinkedIn</span>
                <ExternalLink className="w-2.5 h-2.5 print:hidden" />
              </a>
              <span>|</span>
              <a href="https://github.com/purnimabaroi" target="_blank" rel="noopener noreferrer" className="hover:underline flex items-center gap-1">
                <span>GitHub</span>
                <ExternalLink className="w-2.5 h-2.5 print:hidden" />
              </a>
              <span>|</span>
              <a href="https://leetcode.com/u/purnimabaroi" target="_blank" rel="noopener noreferrer" className="hover:underline flex items-center gap-1">
                <span>Leetcode</span>
                <ExternalLink className="w-2.5 h-2.5 print:hidden" />
              </a>
            </div>
          </div>

          {/* Education */}
          <div>
            <h2 className="text-xs font-mono font-bold tracking-[0.2em] text-[#405548] uppercase pb-1.5 border-b border-[#1D1D1B]/30 mb-4">
              EDUCATION
            </h2>

            <div className="space-y-4">
              {resumeData.education.map((edu, idx) => (
                <div key={idx}>
                  <div className="flex flex-wrap items-baseline justify-between gap-2">
                    <h3 className="font-bold text-sm text-[#1D1D1B]">
                      {edu.institution}, {edu.location}
                    </h3>
                    <span className="font-mono text-xs text-[#1D1D1B]/80">{edu.period}</span>
                  </div>
                  <div className="text-xs text-[#1D1D1B]/80 mt-0.5">
                    {edu.degree} {edu.score ? `– ` : ''}
                    {edu.score && <strong className="text-[#1D1D1B]">{edu.score}</strong>}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Work Experience */}
          <div>
            <h2 className="text-xs font-mono font-bold tracking-[0.2em] text-[#405548] uppercase pb-1.5 border-b border-[#1D1D1B]/30 mb-4">
              WORK EXPERIENCE
            </h2>

            <div className="space-y-5">
              {resumeData.experiences.map((exp) => (
                <div key={exp.id}>
                  <div className="flex flex-wrap items-baseline justify-between gap-2">
                    <h3 className="font-bold text-sm text-[#1D1D1B]">
                      {exp.company} <span className="font-normal text-[#1D1D1B]/80">| {exp.role}</span>
                    </h3>
                    <span className="font-mono text-xs text-[#1D1D1B]/80">{exp.period}</span>
                  </div>

                  <ul className="mt-2 space-y-1 text-xs text-[#1D1D1B]/85 list-disc list-outside pl-4 leading-relaxed">
                    {exp.points.map((pt, i) => (
                      <li key={i}>{pt}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Projects */}
          <div>
            <h2 className="text-xs font-mono font-bold tracking-[0.2em] text-[#405548] uppercase pb-1.5 border-b border-[#1D1D1B]/30 mb-4">
              PROJECTS
            </h2>

            <div className="space-y-4">
              {resumeData.projects.map((proj) => (
                <div key={proj.id}>
                  <div className="flex flex-wrap items-baseline justify-between gap-2">
                    <h3 className="font-bold text-sm text-[#1D1D1B]">
                      {proj.name} <span className="font-normal text-xs text-[#405548]">| {proj.technologies.join(', ')}</span>
                    </h3>
                    <span className="font-mono text-xs text-[#1D1D1B]/80">{proj.period}</span>
                  </div>

                  <ul className="mt-1.5 space-y-1 text-xs text-[#1D1D1B]/85 list-disc list-outside pl-4 leading-relaxed">
                    {proj.keyFeatures.map((kf, i) => (
                      <li key={i}>{kf}</li>
                    ))}
                  </ul>
                </div>
              ))}

              {resumeData.additionalProjects && resumeData.additionalProjects.length > 0 && (
                <div className="pt-2 space-y-3">
                  <span className="font-mono text-[10px] uppercase tracking-wider text-[#405548] font-bold block">
                    Additional Technical Work
                  </span>
                  {resumeData.additionalProjects.map((addProj) => (
                    <div key={addProj.id} className="text-xs text-[#1D1D1B]/85">
                      <div className="flex flex-wrap items-baseline justify-between gap-2">
                        <span className="font-semibold text-[#1D1D1B]">
                          {addProj.title || addProj.name} <span className="font-normal text-[#405548]">({addProj.technologies.join(', ')})</span>
                        </span>
                        <span className="font-mono text-[11px] text-[#1D1D1B]/70">{addProj.date || addProj.period}</span>
                      </div>
                      <p className="mt-0.5 text-[#1D1D1B]/80">{addProj.description}</p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Key Skills */}
          <div>
            <h2 className="text-xs font-mono font-bold tracking-[0.2em] text-[#405548] uppercase pb-1.5 border-b border-[#1D1D1B]/30 mb-4">
              KEY SKILLS
            </h2>

            <div className="space-y-2 text-xs text-[#1D1D1B]/90">
              <div>
                <strong className="font-semibold text-[#1D1D1B]">Programming :</strong> Javascript, Java, Python
              </div>
              <div>
                <strong className="font-semibold text-[#1D1D1B]">Technologies & Frameworks :</strong> HTML, CSS, GitHub, Flask, API, FastAPI, NodeJs, ReactJs
              </div>
              <div>
                <strong className="font-semibold text-[#1D1D1B]">Databases :</strong> MySQL, MongoDB, PostgreSQL
              </div>
              <div>
                <strong className="font-semibold text-[#1D1D1B]">Tools & Utilities :</strong> VS Code, Git, IntelliJ Idea, PyCharm CE, Postman, MongoDB Compass, AppSmith
              </div>
            </div>
          </div>
        </div>

        {/* Modal Bottom Bar */}
        <div
          id="resume-modal-footer"
          className="px-6 py-4 bg-[#F7F5F0] border-t border-[#D8CBB8] flex flex-wrap items-center justify-between gap-3 text-xs font-mono text-[#1D1D1B]/60"
        >
          <span>Curriculum Vitae • Purnima Baroi</span>
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-1.5 rounded-full bg-white border border-[#D8CBB8] hover:bg-[#D8CBB8]/30 text-[#1D1D1B] font-semibold transition-colors"
          >
            Close Viewer
          </button>
        </div>
      </div>
    </div>
  );
}
