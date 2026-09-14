import { ArrowUp, Github, Linkedin, Code } from 'lucide-react';
import { resumeData } from '../data/resumeData';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#F7F5F0] py-14 border-t border-[#D8CBB8]/60 text-[#1D1D1B]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 pb-10 border-b border-[#D8CBB8]/50">
          {/* Left Brand */}
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded bg-[#1D1D1B] text-[#F7F5F0] flex items-center justify-center font-mono font-bold text-[10px]">
                PB
              </div>
              <span className="font-sans font-bold text-base tracking-tight text-[#1D1D1B]">
                {resumeData.personal.name}
              </span>
            </div>
            <p className="font-mono text-xs text-[#405548]">
              {resumeData.personal.title} • Polaris School of Technology (9.27 SGPA)
            </p>
          </div>

          {/* Center Links */}
          <div className="flex flex-wrap items-center gap-6 text-xs font-mono text-[#1D1D1B]/80">
            <a href="#about" className="hover:text-[#405548] transition-colors">
              About
            </a>
            <a href="#experience" className="hover:text-[#405548] transition-colors">
              Experience
            </a>
            <a href="#projects" className="hover:text-[#405548] transition-colors">
              Projects
            </a>
            <a href="#skills" className="hover:text-[#405548] transition-colors">
              Skills
            </a>
            <a href="#education" className="hover:text-[#405548] transition-colors">
              Education
            </a>
            <a href="#contact" className="hover:text-[#405548] transition-colors">
              Contact
            </a>
          </div>

          {/* Right Action: Scroll To Top */}
          <button
            type="button"
            id="footer-back-to-top"
            onClick={scrollToTop}
            className="flex items-center gap-1.5 px-3.5 py-2 rounded-full border border-[#D8CBB8] bg-white hover:bg-[#F7F5F0] text-xs font-mono text-[#1D1D1B] transition-colors"
          >
            <span>Top</span>
            <ArrowUp className="w-3.5 h-3.5 text-[#405548]" />
          </button>
        </div>

        {/* Bottom copyright & verified note */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-[#1D1D1B]/60">
          <div>
            © {new Date().getFullYear()} {resumeData.personal.name}. All rights reserved.
          </div>
          <div className="flex items-center gap-4">
            <span>Verified against single source of truth curriculum vitae.</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
