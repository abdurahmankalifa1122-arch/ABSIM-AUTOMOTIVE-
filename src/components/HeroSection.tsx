import React from 'react';
import { ArrowRight, ChevronDown } from 'lucide-react';
import { ABSIM_BRAND } from '../data/absimData';
import { SafeImage } from './SafeImage';

interface HeroSectionProps {
  onContactClick?: () => void;
  onServicesClick?: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onContactClick,
  onServicesClick,
}) => {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-[90vh] flex flex-col justify-between bg-[#0B0C10] overflow-hidden border-b border-[#1E222D]">
      {/* Background Photography with Sophisticated Scrim */}
      <div className="absolute inset-0 z-0">
        <SafeImage
          src={ABSIM_BRAND.images.entrance.localSrc}
          fallbackSrc={ABSIM_BRAND.images.entrance.remoteFallback}
          alt={ABSIM_BRAND.images.entrance.alt}
          className="w-full h-full object-cover object-center filter brightness-[0.34] contrast-[1.12]"
          wrapperClassName="w-full h-full"
        />
        {/* Gradients for high-contrast legibility */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0B0C10] via-[#0B0C10]/85 to-[#0B0C10]/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B0C10] via-transparent to-[#0B0C10]/70" />
      </div>

      {/* Main Content Area */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16 flex-1 flex flex-col justify-center w-full">
        <div className="max-w-3xl space-y-6">
          {/* Subtle Tagline / Location Kicker */}
          <div className="flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-slate-300">
            <span className="text-[#E02447] font-bold">ABSIM AUTOMOTIVE</span>
            <span aria-hidden="true" className="text-slate-600">·</span>
            <span>ADDIS ABABA, ETHIOPIA</span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white font-heading leading-[1.12] text-balance">
            {ABSIM_BRAND.headline}
          </h1>

          {/* Supporting Text */}
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl font-normal">
            {ABSIM_BRAND.supportingText}
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center gap-4 pt-4">
            <button
              type="button"
              onClick={onContactClick || (() => scrollTo('contact'))}
              className="inline-flex items-center justify-center gap-2.5 px-8 py-3.5 text-xs font-bold uppercase tracking-wider text-white bg-[#5A0C1A] hover:bg-[#6E0D22] border border-[#7A1225] rounded transition-all duration-200 shadow-xl shadow-[#5A0C1A]/30 hover:shadow-[#5A0C1A]/50 hover:-translate-y-0.5 cursor-pointer"
            >
              <span>CONTACT US</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              type="button"
              onClick={onServicesClick || (() => scrollTo('services'))}
              className="inline-flex items-center justify-center gap-2 px-8 py-3.5 text-xs font-semibold uppercase tracking-wider text-slate-200 hover:text-white bg-[#14161F]/80 hover:bg-[#1C1F2B] border border-[#2B3040] hover:border-[#424A5E] rounded backdrop-blur-sm transition-all duration-200 cursor-pointer"
            >
              <span>EXPLORE OUR SERVICES</span>
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Clean Strip: 4 Key Workshop Pillars */}
      <div className="relative z-10 border-t border-[#1C202C] bg-[#0A0B0E]/80 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-xs">
            <div className="flex items-center gap-2 text-slate-300">
              <span className="w-1.5 h-1.5 rounded-full bg-[#E02447]" />
              <span className="font-semibold text-white">Behind AMCE, Megenagna</span>
            </div>
            <div className="flex items-center gap-2 text-slate-300">
              <span className="w-1.5 h-1.5 rounded-full bg-[#E02447]" />
              <span className="font-semibold text-white">German & Italian Equipment</span>
            </div>
            <div className="flex items-center gap-2 text-slate-300">
              <span className="w-1.5 h-1.5 rounded-full bg-[#E02447]" />
              <span className="font-semibold text-white">Vehicle Inspection Pit</span>
            </div>
            <div className="flex items-center gap-2 text-slate-300">
              <span className="w-1.5 h-1.5 rounded-full bg-[#E02447]" />
              <span className="font-semibold text-white">On-Site Car Laundry</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
