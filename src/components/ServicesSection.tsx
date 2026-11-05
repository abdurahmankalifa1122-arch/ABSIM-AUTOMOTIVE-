import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { ABSIM_SERVICES, ServiceItem } from '../data/absimData';
import { SafeImage } from './SafeImage';

interface ServicesSectionProps {
  onSelectService: (service: ServiceItem) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onSelectService }) => {
  return (
    <section id="services" className="py-20 lg:py-24 bg-[#0B0C10] border-b border-[#1C202C]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-12">
          <span className="text-xs font-bold tracking-widest uppercase text-[#E02447] block mb-2">
            WORKSHOP SERVICES
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-heading tracking-tight">
            Our Services
          </h2>
          <p className="text-slate-400 mt-2 text-base max-w-2xl">
            Professional automotive solutions backed by calibrated European machinery and dedicated diagnostic bays.
          </p>
        </div>

        {/* 6 Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {ABSIM_SERVICES.map((service) => (
            <div
              key={service.id}
              className="group flex flex-col bg-[#111319] border border-[#202534] hover:border-[#5A0C1A] rounded-lg overflow-hidden transition-all duration-300 shadow-md hover:shadow-xl hover:-translate-y-1"
            >
              {/* Image Frame */}
              <div className="relative h-48 w-full overflow-hidden bg-[#161822]">
                <SafeImage
                  src={service.equipmentPhoto.localSrc}
                  fallbackSrc={service.equipmentPhoto.remoteFallback}
                  alt={service.equipmentPhoto.alt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  wrapperClassName="w-full h-full"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#111319] via-transparent to-transparent opacity-75" />

                <div className="absolute top-3 left-3 bg-[#0B0C10]/85 px-2.5 py-0.5 rounded border border-[#232838] text-[11px] font-mono font-bold text-slate-300">
                  {service.number}
                </div>

                <div className="absolute bottom-2.5 left-3 right-3 text-[11px] font-medium text-slate-300 truncate bg-[#0B0C10]/90 px-2 py-0.5 rounded border border-[#232838]">
                  <span className="text-[#E02447] font-semibold">Equip: </span>
                  {service.equipmentAssigned}
                </div>
              </div>

              {/* Service Info */}
              <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                <div>
                  <h3 className="text-lg font-bold text-white font-heading tracking-tight group-hover:text-slate-100 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-xs text-slate-400 mt-2 leading-relaxed">
                    {service.shortDescription}
                  </p>
                </div>

                <div className="pt-3 border-t border-[#1C202C]">
                  <button
                    type="button"
                    onClick={() => onSelectService(service)}
                    className="w-full inline-flex items-center justify-between px-3.5 py-2 text-xs font-semibold uppercase tracking-wider text-slate-200 bg-[#161822] hover:bg-[#5A0C1A] hover:text-white border border-[#252B3B] hover:border-[#7A1225] rounded transition-all duration-200 cursor-pointer"
                  >
                    <span>Request Service</span>
                    <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
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
