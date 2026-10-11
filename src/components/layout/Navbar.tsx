import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { PROJECT_INFO } from '../../data/projectData';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [scrolled, setScrolled] = useState<boolean>(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 15);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile drawer on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  // Handle escape key to close mobile menu
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) setIsOpen(false);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen]);

  // Primary 7 Navigation Links in Exact Required Order
  const primaryNavLinks = [
    { name: 'Home', path: '/' },
    { name: 'Research', path: '/research' },
    { name: 'Milestones', path: '/milestones' },
    { name: 'Documents', path: '/documents' },
    { name: 'Presentations', path: '/presentations' },
    { name: 'About Us', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-md border-b border-slate-200/80 shadow-2xs py-3'
          : 'bg-white/90 backdrop-blur-sm border-b border-slate-100 py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Left: Understated Typographic Project Identity */}
          <Link to="/" className="flex items-center gap-2.5 group select-none">
            <span className="w-8 h-8 rounded-xl bg-[#DCFCE7] text-[#166534] flex items-center justify-center text-base font-bold shadow-2xs group-hover:bg-emerald-200 transition-colors">
              🌱
            </span>
            <div className="flex items-center gap-2">
              <span className="text-sm font-extrabold text-[#172B26] tracking-tight group-hover:text-[#166534] transition-colors">
                AR Plant Storybook
              </span>
              <span className="text-[10px] font-mono font-bold px-1.5 py-0.5 rounded-md bg-emerald-50 text-[#166534] border border-emerald-200/80">
                {PROJECT_INFO.id}
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links: Clean Horizontal Navbar with Thin Green Underline */}
          <nav className="hidden lg:flex items-center gap-7" aria-label="Main Navigation">
            {primaryNavLinks.map((link) => {
              // Also highlight if on sub-routes:
              // For Research: /research, /components, /architecture, /showcase, /future
              // For Milestones: /milestones, /journey
              // For About Us: /about, /team
              const isMatch =
                location.pathname === link.path ||
                (link.path === '/research' && ['/components', '/architecture', '/showcase', '/future'].includes(location.pathname)) ||
                (link.path === '/milestones' && location.pathname === '/journey') ||
                (link.path === '/about' && location.pathname === '/team');

              return (
                <NavLink
                  key={link.path}
                  to={link.path}
                  className="relative py-1 text-xs font-semibold text-slate-600 hover:text-[#166534] transition-colors group"
                >
                  <span className={isMatch ? 'text-[#166534] font-bold' : ''}>
                    {link.name}
                  </span>
                  {/* Thin Green Underline for Active State */}
                  {isMatch ? (
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#166534] rounded-full" />
                  ) : (
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-transparent group-hover:bg-[#166534]/30 rounded-full transition-all" />
                  )}
                </NavLink>
              );
            })}
          </nav>

          {/* Right: Forest Green Rounded CTA "Request a Demo ↗" */}
          <div className="hidden sm:flex items-center gap-3">
            <Link
              to="/contact?type=Request%20a%20Demo"
              className="px-4 py-2 text-xs font-bold rounded-xl bg-[#166534] hover:bg-[#14532D] text-white shadow-xs shadow-[#166534]/20 transition-all flex items-center gap-1.5 active:scale-95"
            >
              <span>Request a Demo</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex lg:hidden items-center gap-2">
            <Link
              to="/contact?type=Request%20a%20Demo"
              className="px-3 py-1.5 text-xs font-bold rounded-xl bg-[#166534] text-white sm:hidden"
            >
              Demo ↗
            </Link>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-xl text-slate-700 hover:text-[#166534] hover:bg-emerald-50 transition-colors"
              aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
              aria-expanded={isOpen}
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {isOpen && (
        <div className="lg:hidden bg-white/98 backdrop-blur-xl border-b border-slate-200 px-4 pt-3 pb-6 shadow-xl animate-in slide-in-from-top-3 duration-200">
          <nav className="flex flex-col gap-1 mb-4" aria-label="Mobile Navigation">
            {primaryNavLinks.map((link) => {
              const isMatch =
                location.pathname === link.path ||
                (link.path === '/research' && ['/components', '/architecture', '/showcase', '/future'].includes(location.pathname)) ||
                (link.path === '/milestones' && location.pathname === '/journey') ||
                (link.path === '/about' && location.pathname === '/team');

              return (
                <NavLink
                  key={link.path}
                  to={link.path}
                  className={`px-3.5 py-2.5 text-xs font-bold rounded-xl transition-all flex items-center justify-between ${
                    isMatch
                      ? 'text-[#166534] bg-[#DCFCE7]/70 font-extrabold'
                      : 'text-slate-700 hover:bg-slate-50'
                  }`}
                >
                  <span>{link.name}</span>
                  {isMatch && <span className="w-1.5 h-1.5 rounded-full bg-[#166534]" />}
                </NavLink>
              );
            })}
          </nav>

          <div className="pt-3 border-t border-slate-100">
            <Link
              to="/contact?type=Request%20a%20Demo"
              className="w-full py-2.5 rounded-xl bg-[#166534] text-white text-xs font-bold text-center flex items-center justify-center gap-1.5 shadow-sm"
            >
              <span>Request a Demo</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};
