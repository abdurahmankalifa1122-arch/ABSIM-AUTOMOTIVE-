import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, MapPin } from 'lucide-react';
import { ABSIM_BRAND } from '../data/absimData';
import { SafeImage } from './SafeImage';

interface NavbarProps {
  onOpenInquiry?: (serviceId?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenInquiry }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About Us', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Our Equipment', href: '#equipment' },
    { label: 'Our Workshop', href: '#workshop' },
    { label: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Top Utility Bar */}
      <div className="bg-[#0A0B0E] border-b border-[#1C202C] text-[11px] text-slate-300 py-1.5 px-4 sm:px-8 hidden md:block">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2 text-slate-300">
            <MapPin className="w-3.5 h-3.5 text-[#E02447]" />
            <span>{ABSIM_BRAND.location.address}, {ABSIM_BRAND.location.city}</span>
          </div>
          <div className="flex items-center gap-6">
            <a
              href={`tel:${ABSIM_BRAND.contact.phone.replace(/\s+/g, '')}`}
              className="flex items-center gap-1.5 text-slate-300 hover:text-white transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-[#E02447]" />
              <span className="font-semibold text-slate-200">{ABSIM_BRAND.contact.phoneDisplay}</span>
            </a>
            <span className="text-slate-400 font-medium tracking-wide">
              {ABSIM_BRAND.tagline}
            </span>
          </div>
        </div>
      </div>

      {/* Main Navigation Header adhering to 3-zone contract */}
      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#0D0E12]/95 backdrop-blur-md shadow-xl border-b border-[#232733]'
            : 'bg-[#0D0E12] border-b border-[#1E222D]'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20 gap-8">
            {/* Zone 1: Brand Mark with Official Supplied Logo */}
            <a
              href="#home"
              onClick={(e) => handleNavClick(e, '#home')}
              className="flex items-center gap-3 shrink-0 group py-1"
            >
              <div className="relative h-12 w-auto flex items-center justify-center rounded overflow-hidden border border-[#5A0C1A]/40 bg-[#430713]/20 p-1">
                <SafeImage
                  src={ABSIM_BRAND.images.logo.localSrc}
                  fallbackSrc={ABSIM_BRAND.images.logo.remoteFallback}
                  alt={ABSIM_BRAND.images.logo.alt}
                  className="h-10 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="flex flex-col">
                <span className="text-lg sm:text-xl font-bold tracking-tight text-white font-heading leading-tight group-hover:text-slate-100 transition-colors">
                  {ABSIM_BRAND.name}
                </span>
                <span className="text-[10px] tracking-widest uppercase font-semibold text-[#CBD5E1]/80">
                  {ABSIM_BRAND.tagline}
                </span>
              </div>
            </a>

            {/* Zone 2: Navigation Links (single-line, clean hover underline) */}
            <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-slate-300">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="relative whitespace-nowrap hover:text-white transition-colors py-1 group"
                >
                  {link.label}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#A51D38] transition-all duration-200 group-hover:w-full" />
                </a>
              ))}
            </nav>

            {/* Zone 3: Primary Action & Mobile Hamburger */}
            <div className="flex items-center gap-3 shrink-0">
              <a
                href="#contact"
                onClick={(e) => handleNavClick(e, '#contact')}
                className="hidden sm:inline-flex items-center justify-center px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-white bg-[#5A0C1A] hover:bg-[#6E0D22] border border-[#7A1225] rounded transition-all duration-200 shadow-lg shadow-[#5A0C1A]/20 hover:shadow-[#5A0C1A]/40 whitespace-nowrap"
              >
                Contact Us
              </a>

              {/* Mobile Menu Button */}
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden p-2 rounded text-slate-300 hover:text-white hover:bg-[#1E222D] focus:outline-none focus:ring-2 focus:ring-[#7A1225]"
                aria-label="Toggle navigation menu"
                aria-expanded={mobileMenuOpen}
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-[#111319] border-b border-[#232733] px-4 pt-3 pb-6 animate-fadeIn">
            <div className="space-y-1 mb-5">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="block px-3 py-2.5 text-base font-medium text-slate-200 hover:text-white hover:bg-[#1C1F2A] rounded transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>

            <div className="pt-4 border-t border-[#232733] space-y-3">
              <a
                href="#contact"
                onClick={(e) => handleNavClick(e, '#contact')}
                className="w-full flex items-center justify-center px-4 py-3 text-sm font-semibold uppercase tracking-wider text-white bg-[#5A0C1A] hover:bg-[#6E0D22] rounded transition-colors"
              >
                Contact Us
              </a>
              <div className="flex flex-col gap-1.5 px-3 text-xs text-slate-400">
                <span className="flex items-center gap-2">
                  <MapPin className="w-3.5 h-3.5 text-[#A51D38]" />
                  {ABSIM_BRAND.location.full}
                </span>
                <span className="flex items-center gap-2">
                  <Phone className="w-3.5 h-3.5 text-[#A51D38]" />
                  {ABSIM_BRAND.contact.phoneDisplay}
                </span>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
