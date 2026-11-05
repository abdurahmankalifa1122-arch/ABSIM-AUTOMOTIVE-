import React from 'react';
import { Check, Shield, Wrench, Sparkles, MapPin } from 'lucide-react';
import { ABSIM_BRAND } from '../data/absimData';
import { SafeImage } from './SafeImage';

export const AboutSection: React.FC = () => {
  const pillars = [
    { title: 'Professional Care', desc: 'Meticulous handling for every vehicle according to manufacturer standards.' },
    { title: 'Attention to Detail', desc: 'Precision rim protection, calibrated torque settings, and thorough inspections.' },
    { title: 'Calibrated Equipment', desc: 'Twin Busch Germany, Corghi Italy alignment, and industrial air systems.' },
    { title: 'Quality & Service', desc: 'Transparent advice, honest workmanship, and on-site vehicle cleaning.' },
  ];

  return (
    <section id="about" className="py-20 lg:py-24 bg-[#0F1015] border-b border-[#1C202C]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Concise Section Header */}
        <div className="mb-12">
          <span className="text-xs font-bold tracking-widest uppercase text-[#E02447] block mb-2">
            WHO WE ARE
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-heading tracking-tight">
            About ABSIM AUTOMOTIVE
          </h2>
          <p className="text-slate-400 mt-2 text-base max-w-2xl">
            A professional automotive workshop in Addis Ababa, Ethiopia, equipped with modern machinery for precision wheel, tyre, and chassis care.
          </p>
        </div>

        {/* 2-Column Clean Editorial Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* IMAGE 1: Entrance / Facility */}
          <div className="lg:col-span-6">
            <div className="relative rounded-lg overflow-hidden border border-[#232838] bg-[#141620] shadow-xl group">
              <SafeImage
                src={ABSIM_BRAND.images.entrance.localSrc}
                fallbackSrc={ABSIM_BRAND.images.entrance.remoteFallback}
                alt={ABSIM_BRAND.images.entrance.alt}
                className="w-full h-[320px] sm:h-[380px] object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B0C10] via-transparent to-transparent opacity-70" />
              <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-xs text-slate-300">
                <span className="flex items-center gap-1.5 font-medium text-white">
                  <MapPin className="w-3.5 h-3.5 text-[#E02447]" />
                  Behind AMCE, Megenagna, Addis Ababa
                </span>
                <span className="text-[11px] text-slate-400 font-mono">Facility Gate</span>
              </div>
            </div>
          </div>

          {/* Core Story & 4 Clean Pillars */}
          <div className="lg:col-span-6 space-y-6">
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              Located behind AMCE in Megenagna, <strong className="text-white font-semibold">ABSIM AUTOMOTIVE</strong> provides reliable, detail-oriented automotive services. Our workshop is built on quality equipment, careful workmanship, and straightforward advice for every vehicle owner.
            </p>

            {/* 4 Clean Pillars with short sentences */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
              {pillars.map((item, idx) => (
                <div key={idx} className="p-3.5 rounded bg-[#13151D] border border-[#202534]">
                  <div className="flex items-center gap-2 text-white font-semibold text-xs mb-1">
                    <Check className="w-3.5 h-3.5 text-[#E02447] shrink-0" />
                    <span>{item.title}</span>
                  </div>
                  <p className="text-xs text-slate-400 leading-normal">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>

            <div className="pt-2">
              <a
                href="#services"
                className="inline-flex items-center justify-center px-6 py-2.5 text-xs font-bold uppercase tracking-wider text-white bg-[#5A0C1A] hover:bg-[#6E0D22] border border-[#7A1225] rounded transition-all duration-200"
              >
                View Services
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
