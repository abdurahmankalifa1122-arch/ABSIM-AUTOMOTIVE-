import React from 'react';
import { MapPin, Phone, MessageCircle, ArrowUp } from 'lucide-react';
import { ABSIM_BRAND } from '../data/absimData';
import { SafeImage } from './SafeImage';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About Us', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Our Equipment', href: '#equipment' },
    { label: 'Our Workshop', href: '#workshop' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <footer className="bg-[#08090C] border-t border-[#1C202C] text-slate-400 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 mb-10">
          {/* Brand Column (5 cols) */}
          <div className="lg:col-span-5 space-y-3">
            <div className="flex items-center gap-3">
              <div className="h-11 w-auto flex items-center justify-center rounded overflow-hidden border border-[#5A0C1A]/40 bg-[#430713]/20 p-1">
                <SafeImage
                  src={ABSIM_BRAND.images.logo.localSrc}
                  fallbackSrc={ABSIM_BRAND.images.logo.remoteFallback}
                  alt={ABSIM_BRAND.images.logo.alt}
                  className="h-9 w-auto object-contain"
                />
              </div>
              <div>
                <span className="text-base font-bold text-white tracking-tight font-heading block">
                  {ABSIM_BRAND.name}
                </span>
                <span className="text-[10px] tracking-widest uppercase font-bold text-[#CBD5E1]/90">
                  {ABSIM_BRAND.tagline}
                </span>
              </div>
            </div>

            <p className="text-slate-400 text-xs leading-relaxed max-w-sm">
              Professional automotive care, tyre changing, wheel balancing, alignment, and vehicle inspection in Addis Ababa, Ethiopia.
            </p>
          </div>

          {/* Navigation Links (3 cols) */}
          <div className="lg:col-span-3 space-y-2.5">
            <h4 className="text-xs font-bold uppercase tracking-widest text-white">
              Navigation
            </h4>
            <ul className="space-y-1.5">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="hover:text-white transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Location (4 cols) */}
          <div className="lg:col-span-4 space-y-2.5">
            <h4 className="text-xs font-bold uppercase tracking-widest text-white">
              Workshop Contact
            </h4>
            <div className="space-y-2">
              <div className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#E02447] shrink-0 mt-0.5" />
                <span className="text-slate-300">
                  Behind AMCE, Megenagna, Addis Ababa, Ethiopia
                </span>
              </div>

              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-[#E02447] shrink-0" />
                <a
                  href={`tel:${ABSIM_BRAND.contact.phone.replace(/\s+/g, '')}`}
                  className="text-slate-200 hover:text-white font-semibold transition-colors"
                >
                  {ABSIM_BRAND.contact.phoneDisplay}
                </a>
              </div>

              <div className="flex items-center gap-2">
                <MessageCircle className="w-3.5 h-3.5 text-[#128C7E] shrink-0" />
                <a
                  href={ABSIM_BRAND.contact.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-300 hover:text-white transition-colors"
                >
                  Connect on WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar with Dynamic Year */}
        <div className="pt-6 border-t border-[#1C202C] flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-500">
          <div>
            © {currentYear} {ABSIM_BRAND.name}. All rights reserved. Addis Ababa, Ethiopia.
          </div>

          <div className="flex items-center gap-4">
            <span className="text-slate-400 font-mono tracking-tight text-[10px]">
              {ABSIM_BRAND.tagline}
            </span>
            <button
              type="button"
              onClick={scrollToTop}
              className="p-1.5 rounded bg-[#161822] hover:bg-[#202433] text-slate-400 hover:text-white transition-colors cursor-pointer"
              aria-label="Scroll to top"
            >
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
