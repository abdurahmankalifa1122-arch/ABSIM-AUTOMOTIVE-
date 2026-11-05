import React, { useState } from 'react';
import { Maximize2, X } from 'lucide-react';
import { WORKSHOP_GALLERY } from '../data/absimData';
import { SafeImage } from './SafeImage';

export const WorkshopSection: React.FC = () => {
  const [activePhoto, setActivePhoto] = useState<typeof WORKSHOP_GALLERY[0] | null>(null);

  return (
    <section id="workshop" className="py-20 lg:py-24 bg-[#0B0C10] border-b border-[#1C202C]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-12">
          <span className="text-xs font-bold tracking-widest uppercase text-[#E02447] block mb-2">
            FACILITY OVERVIEW
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-heading tracking-tight uppercase">
            OUR WORKSHOP
          </h2>
          <p className="text-slate-400 mt-2 text-base max-w-2xl">
            Discover the facilities and equipment behind ABSIM AUTOMOTIVE.
          </p>
        </div>

        {/* Editorial Photo Showcase */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {WORKSHOP_GALLERY.map((item, index) => (
            <div
              key={item.id}
              onClick={() => setActivePhoto(item)}
              className={`group relative rounded-lg overflow-hidden border border-[#202534] bg-[#12141C] cursor-pointer transition-all duration-300 hover:border-[#5A0C1A] hover:shadow-xl hover:-translate-y-1 ${
                index === 0 ? 'md:col-span-2 lg:col-span-2 h-[300px] sm:h-[360px]' : 'h-[260px] sm:h-[300px]'
              }`}
            >
              <SafeImage
                src={item.image.localSrc}
                fallbackSrc={item.image.remoteFallback}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                wrapperClassName="w-full h-full"
              />

              {/* Scrim */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B0C10] via-[#0B0C10]/20 to-transparent opacity-85 transition-opacity group-hover:opacity-70" />

              {/* Top Tag */}
              <div className="absolute top-3 left-3">
                <span className="bg-[#0B0C10]/80 px-2.5 py-0.5 rounded border border-[#252B3B] text-[10px] font-semibold text-slate-300 uppercase tracking-wider">
                  {item.category}
                </span>
              </div>

              {/* Maximize Icon */}
              <div className="absolute top-3 right-3 p-1.5 rounded-full bg-[#0B0C10]/80 border border-[#252B3B] text-slate-300 opacity-0 group-hover:opacity-100 transition-opacity">
                <Maximize2 className="w-3.5 h-3.5 text-[#E02447]" />
              </div>

              {/* Bottom Caption */}
              <div className="absolute bottom-3 left-4 right-4">
                <h3 className="text-base sm:text-lg font-bold text-white font-heading">
                  {item.title}
                </h3>
                <p className="text-xs text-slate-300 mt-0.5 line-clamp-1">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {activePhoto && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md animate-fadeIn"
          onClick={() => setActivePhoto(null)}
        >
          <div
            className="relative max-w-4xl w-full bg-[#12141C] border border-[#282E3E] rounded-lg overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between p-4 border-b border-[#202534]">
              <div>
                <span className="text-[10px] font-mono uppercase text-[#E02447] tracking-wider">
                  {activePhoto.category}
                </span>
                <h3 className="text-base font-bold text-white font-heading">
                  {activePhoto.title}
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setActivePhoto(null)}
                className="p-1.5 rounded bg-[#1A1D27] text-slate-400 hover:text-white transition-colors cursor-pointer"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="relative max-h-[70vh] bg-black flex items-center justify-center overflow-hidden">
              <SafeImage
                src={activePhoto.image.localSrc}
                fallbackSrc={activePhoto.image.remoteFallback}
                alt={activePhoto.title}
                className="max-h-[70vh] w-auto object-contain mx-auto"
              />
            </div>

            <div className="p-3 bg-[#13151D] border-t border-[#202534] text-xs text-slate-300">
              <p>{activePhoto.description}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
