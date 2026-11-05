import React from 'react';
import { X, Check, Wrench, MessageSquare } from 'lucide-react';
import { EquipmentItem } from '../data/absimData';
import { SafeImage } from './SafeImage';

interface EquipmentModalProps {
  item: EquipmentItem | null;
  onClose: () => void;
  onRequestService: (equipmentName: string) => void;
}

export const EquipmentModal: React.FC<EquipmentModalProps> = ({
  item,
  onClose,
  onRequestService,
}) => {
  if (!item) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-sm animate-fadeIn"
      onClick={onClose}
    >
      <div
        className="relative max-w-2xl w-full bg-[#12141C] border border-[#262B3B] rounded-lg overflow-hidden shadow-2xl max-h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-4 sm:p-5 border-b border-[#202534]">
          <div>
            <div className="flex items-center gap-2 text-[11px] font-mono uppercase text-[#E02447]">
              <span>{item.brand}</span>
              <span>·</span>
              <span className="text-slate-400">{item.origin}</span>
            </div>
            <h3 className="text-lg sm:text-xl font-bold text-white font-heading mt-0.5">
              {item.name}
            </h3>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-1.5 rounded bg-[#181B26] text-slate-400 hover:text-white transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Content */}
        <div className="overflow-y-auto p-4 sm:p-5 space-y-5">
          {/* Real Photo Frame */}
          <div className="relative rounded-lg overflow-hidden border border-[#232838] bg-[#161822] max-h-[300px] flex items-center justify-center">
            <SafeImage
              src={item.photo.localSrc}
              fallbackSrc={item.photo.remoteFallback}
              alt={item.photo.alt}
              className="w-full h-[280px] object-contain sm:object-cover"
              wrapperClassName="w-full h-full"
            />
          </div>

          {/* Operational Purpose */}
          <div className="space-y-1.5">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white flex items-center gap-2">
              <Wrench className="w-3.5 h-3.5 text-[#E02447]" />
              <span>Workshop Purpose</span>
            </h4>
            <p className="text-xs text-slate-300 leading-relaxed">
              {item.purpose}
            </p>
          </div>

          {/* Key Specifications */}
          <div className="space-y-2">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Specifications
            </h4>
            <div className="space-y-1.5">
              {item.features.map((feat, idx) => (
                <div key={idx} className="flex items-start gap-2 p-2.5 rounded bg-[#151722] border border-[#202534] text-xs text-slate-300">
                  <Check className="w-3.5 h-3.5 text-[#E02447] shrink-0 mt-0.5" />
                  <span>{feat}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Footer Actions */}
        <div className="p-4 border-t border-[#202534] bg-[#0E1015] flex items-center justify-between gap-4">
          <span className="text-xs text-slate-400">
            Available at ABSIM AUTOMOTIVE
          </span>
          <button
            type="button"
            onClick={() => {
              onClose();
              onRequestService(item.name);
            }}
            className="inline-flex items-center justify-center gap-2 px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-white bg-[#5A0C1A] hover:bg-[#6E0D22] border border-[#7A1225] rounded transition-colors cursor-pointer"
          >
            <MessageSquare className="w-3.5 h-3.5" />
            <span>Inquire About This Service</span>
          </button>
        </div>
      </div>
    </div>
  );
};
