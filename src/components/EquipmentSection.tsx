import React from 'react';
import { Eye, Info } from 'lucide-react';
import { ABSIM_EQUIPMENT, EquipmentItem } from '../data/absimData';
import { SafeImage } from './SafeImage';

interface EquipmentSectionProps {
  onInspectEquipment: (item: EquipmentItem) => void;
}

export const EquipmentSection: React.FC<EquipmentSectionProps> = ({ onInspectEquipment }) => {
  return (
    <section id="equipment" className="py-20 lg:py-24 bg-[#0F1015] border-b border-[#1C202C]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Exact Required Title */}
        <div className="mb-12">
          <span className="text-xs font-bold tracking-widest uppercase text-[#E02447] block mb-2">
            FACTORY BENCHMARKS
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-heading tracking-tight">
            Professional Equipment. Professional Care.
          </h2>
          <p className="text-slate-400 mt-2 text-base max-w-2xl">
            Calibrated German and Italian workshop machinery ensuring millimeter-level precision for wheels, chassis, and tyres.
          </p>
        </div>

        {/* 5 Equipment Units Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {ABSIM_EQUIPMENT.map((item, idx) => (
            <div
              key={item.id}
              className={`group bg-[#12141C] border border-[#202534] hover:border-[#5A0C1A] rounded-lg overflow-hidden flex flex-col justify-between transition-all duration-300 shadow-md hover:shadow-xl hover:-translate-y-1 ${
                idx === 2 ? 'md:col-span-2 lg:col-span-1' : ''
              }`}
            >
              {/* Image Frame */}
              <div className="relative h-64 w-full overflow-hidden bg-[#161822]">
                <SafeImage
                  src={item.photo.localSrc}
                  fallbackSrc={item.photo.remoteFallback}
                  alt={item.photo.alt}
                  className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                  wrapperClassName="w-full h-full"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#12141C] via-transparent to-transparent opacity-80" />

                {/* Country / Brand Badge */}
                <div className="absolute top-3 left-3 bg-[#0B0C10]/85 px-2.5 py-1 rounded border border-[#252B3B] text-[11px] font-semibold text-slate-200 flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#E02447]" />
                  <span>{item.brand}</span>
                  <span className="text-slate-500">·</span>
                  <span className="text-slate-400">{item.origin}</span>
                </div>

                {/* Quick inspect hover overlay */}
                <button
                  type="button"
                  onClick={() => onInspectEquipment(item)}
                  className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-200 cursor-pointer"
                  aria-label={`Inspect ${item.name}`}
                >
                  <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded bg-[#5A0C1A] text-white text-xs font-bold uppercase tracking-wider shadow-lg">
                    <Eye className="w-3.5 h-3.5" />
                    <span>View Specifications</span>
                  </span>
                </button>
              </div>

              {/* Info Frame */}
              <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-wider text-[#CBD5E1]/80">
                    {item.category}
                  </span>
                  <h3 className="text-lg font-bold text-white font-heading mt-0.5">
                    {item.name}
                  </h3>
                  <p className="text-xs text-slate-400 mt-2 leading-relaxed">
                    {item.purpose}
                  </p>
                </div>

                <div className="pt-3 border-t border-[#1C202C]">
                  <button
                    type="button"
                    onClick={() => onInspectEquipment(item)}
                    className="w-full inline-flex items-center justify-center gap-1.5 px-3.5 py-2 text-xs font-semibold uppercase tracking-wider text-slate-300 hover:text-white bg-[#181A24] hover:bg-[#5A0C1A] border border-[#252A38] hover:border-[#7A1225] rounded transition-all duration-200 cursor-pointer"
                  >
                    <Info className="w-3.5 h-3.5 text-[#E02447]" />
                    <span>Machine Details</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
