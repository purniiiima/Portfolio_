import { useState, useEffect } from 'react';
import { Menu, X, FileText, ArrowUpRight, Code2 } from 'lucide-react';
import { resumeData } from '../data/resumeData';

interface NavbarProps {
  onOpenResume: () => void;
}

export default function Navbar({ onOpenResume }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Simple active section detection
      const sections = ['about', 'experience', 'projects', 'skills', 'education', 'contact'];
      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 140 && rect.bottom >= 140) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'About', href: '#about', id: 'about' },
    { label: 'Experience', href: '#experience', id: 'experience' },
    { label: 'Projects', href: '#projects', id: 'projects' },
    { label: 'Skills', href: '#skills', id: 'skills' },
    { label: 'Education', href: '#education', id: 'education' },
    { label: 'Contact', href: '#contact', id: 'contact' },
  ];

  return (
    <header
      id="main-navigation"
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#F7F5F0]/95 backdrop-blur-md py-3.5 border-b border-[#D8CBB8]/60 shadow-[0_4px_20px_rgba(29,29,27,0.03)]'
          : 'bg-[#F7F5F0] py-5 border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 flex items-center justify-between">
        {/* Brand identity */}
        <a
          href="#"
          id="nav-brand-logo"
          className="group flex items-center gap-3 text-left focus:outline-none focus:ring-2 focus:ring-[#B56E4A]/30 rounded-sm"
        >
          <div className="w-9 h-9 rounded-md bg-[#1D1D1B] text-[#F7F5F0] flex items-center justify-center font-mono font-semibold text-xs tracking-wider transition-transform duration-200 group-hover:scale-105 group-hover:bg-[#405548]">
            PB
          </div>
          <div className="flex flex-col">
            <span className="font-sans font-bold text-sm tracking-tight text-[#1D1D1B] group-hover:text-[#405548] transition-colors">
              {resumeData.personal.name.toUpperCase()}
            </span>
            <span className="font-mono text-[10px] tracking-widest text-[#405548] uppercase">
              Full Stack Engineer
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-1.5" aria-label="Main Navigation">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.id}
                href={link.href}
                id={`nav-link-${link.id}`}
                className={`px-3.5 py-1.5 rounded-full text-xs font-medium tracking-wide transition-all duration-200 ${
                  isActive
                    ? 'text-[#1D1D1B] bg-[#D8CBB8]/45 font-semibold'
                    : 'text-[#1D1D1B]/70 hover:text-[#1D1D1B] hover:bg-[#D8CBB8]/20'
                }`}
              >
                {link.label}
              </a>
            );
          })}
        </nav>

        {/* Right CTA Actions */}
        <div className="hidden sm:flex items-center gap-3">
          <button
            type="button"
            id="nav-view-resume-btn"
            onClick={onOpenResume}
            className="flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-[#1D1D1B] border border-[#D8CBB8] hover:border-[#405548] rounded-full bg-white hover:bg-[#F7F5F0] transition-all shadow-[0_1px_2px_rgba(0,0,0,0.04)] active:scale-[0.98]"
          >
            <FileText className="w-3.5 h-3.5 text-[#405548]" />
            <span>View Resume</span>
          </button>

          <a
            href="#contact"
            id="nav-connect-btn"
            className="flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-[#F7F5F0] bg-[#1D1D1B] hover:bg-[#B56E4A] rounded-full transition-all shadow-[0_2px_8px_rgba(29,29,27,0.12)] active:scale-[0.98]"
          >
            <span>Let's Connect</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Mobile menu trigger */}
        <div className="flex items-center gap-2 lg:hidden">
          <button
            type="button"
            id="nav-mobile-resume-btn"
            onClick={onOpenResume}
            className="p-2 text-[#1D1D1B] hover:text-[#B56E4A] transition-colors"
            title="View Resume"
            aria-label="View Resume"
          >
            <FileText className="w-5 h-5" />
          </button>
          <button
            type="button"
            id="nav-mobile-menu-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-[#1D1D1B] hover:bg-[#D8CBB8]/30 rounded-md transition-colors"
            aria-label="Toggle navigation menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div
          id="mobile-navigation-menu"
          className="lg:hidden border-b border-[#D8CBB8] bg-[#F7F5F0] px-6 pt-3 pb-6 animate-in slide-in-from-top-2 duration-200"
        >
          <div className="flex flex-col space-y-2 mb-4">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 text-sm font-medium text-[#1D1D1B] hover:bg-[#D8CBB8]/30 rounded-md transition-colors flex items-center justify-between"
              >
                <span>{link.label}</span>
                <span className="text-[10px] font-mono text-[#405548]">0{navLinks.indexOf(link) + 1}</span>
              </a>
            ))}
          </div>
          <div className="pt-3 border-t border-[#D8CBB8]/60 flex flex-col gap-2.5">
            <button
              type="button"
              id="mobile-nav-view-resume"
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenResume();
              }}
              className="w-full py-2.5 px-4 text-xs font-semibold text-center border border-[#D8CBB8] rounded-full bg-white flex items-center justify-center gap-2 text-[#1D1D1B]"
            >
              <FileText className="w-4 h-4 text-[#405548]" />
              <span>Inspect Full Resume</span>
            </button>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full py-2.5 px-4 text-xs font-semibold text-center rounded-full bg-[#1D1D1B] text-white flex items-center justify-center gap-2"
            >
              <span>Get in Touch</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
