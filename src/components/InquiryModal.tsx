import React, { useState } from 'react';
import { X, Send, MessageCircle, CheckCircle } from 'lucide-react';
import { ServiceItem } from '../data/absimData';

interface InquiryModalProps {
  service: ServiceItem | null;
  onClose: () => void;
}

export const InquiryModal: React.FC<InquiryModalProps> = ({ service, onClose }) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [vehicle, setVehicle] = useState('');
  const [notes, setNotes] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  if (!service) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !phone.trim()) {
      setError('Please provide your name and phone number');
      return;
    }
    setError('');
    setSubmitted(true);
  };

  const sendToWhatsApp = () => {
    const text = encodeURIComponent(
      `Hello ABSIM Automotive!
I would like to inquire about: ${service.title}
Name: ${name || 'Customer'}
Phone: ${phone || 'Not specified'}
Vehicle: ${vehicle || 'Not specified'}
Notes: ${notes || 'Looking for information on workshop service'}`
    );
    window.open(`https://wa.me/251911893490?text=${text}`, '_blank');
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-sm animate-fadeIn"
      onClick={onClose}
    >
      <div
        className="relative max-w-lg w-full bg-[#12141C] border border-[#2B3042] rounded-lg overflow-hidden shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-5 border-b border-[#212636]">
          <div>
            <span className="text-[11px] font-mono uppercase text-[#E02447] tracking-wider">
              Service Request
            </span>
            <h3 className="text-xl font-bold text-white font-heading mt-0.5">
              {service.title}
            </h3>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-1.5 rounded bg-[#1B1E2B] text-slate-400 hover:text-white transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {submitted ? (
          <div className="p-8 text-center space-y-4">
            <div className="w-12 h-12 rounded-full bg-[#5A0C1A]/20 border border-[#7A1225] text-[#E02447] flex items-center justify-center mx-auto">
              <CheckCircle className="w-6 h-6" />
            </div>
            <h4 className="text-lg font-bold text-white font-heading">
              Inquiry Registered
            </h4>
            <p className="text-xs text-slate-300">
              Your request for <span className="text-white font-semibold">{service.title}</span> has been logged. Our workshop representative can reach you directly.
            </p>
            <div className="pt-2 flex flex-col gap-2">
              <button
                type="button"
                onClick={sendToWhatsApp}
                className="w-full inline-flex items-center justify-center gap-2 px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-white bg-[#128C7E] hover:bg-[#075E54] rounded transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Instant WhatsApp Connect</span>
              </button>
              <button
                type="button"
                onClick={onClose}
                className="w-full px-4 py-2 text-xs font-semibold text-slate-400 hover:text-white transition-colors"
              >
                Close Window
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="p-6 space-y-4 text-xs">
            {error && (
              <div className="p-2.5 rounded bg-red-950/40 border border-red-800 text-red-200">
                {error}
              </div>
            )}

            <div>
              <label className="block font-semibold text-slate-300 uppercase tracking-wider mb-1">
                Your Full Name *
              </label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="e.g. Abebe Bikila"
                className="w-full px-3 py-2 text-sm bg-[#0E1015] border border-[#282D3D] rounded text-white focus:outline-none focus:border-[#7A1225]"
              />
            </div>

            <div>
              <label className="block font-semibold text-slate-300 uppercase tracking-wider mb-1">
                Phone Number *
              </label>
              <input
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="+251 9X XXX XXXX"
                className="w-full px-3 py-2 text-sm bg-[#0E1015] border border-[#282D3D] rounded text-white focus:outline-none focus:border-[#7A1225]"
              />
            </div>

            <div>
              <label className="block font-semibold text-slate-300 uppercase tracking-wider mb-1">
                Vehicle Make & Model
              </label>
              <input
                type="text"
                value={vehicle}
                onChange={(e) => setVehicle(e.target.value)}
                placeholder="e.g. Hyundai Tucson / Toyota Prado"
                className="w-full px-3 py-2 text-sm bg-[#0E1015] border border-[#282D3D] rounded text-white focus:outline-none focus:border-[#7A1225]"
              />
            </div>

            <div>
              <label className="block font-semibold text-slate-300 uppercase tracking-wider mb-1">
                Specific Request or Symptoms
              </label>
              <textarea
                rows={2}
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                placeholder="Tyre replacement size, vibration details, or routine inspection..."
                className="w-full px-3 py-2 text-sm bg-[#0E1015] border border-[#282D3D] rounded text-white focus:outline-none focus:border-[#7A1225] resize-none"
              />
            </div>

            <div className="pt-2 flex items-center justify-between gap-3">
              <button
                type="button"
                onClick={sendToWhatsApp}
                className="inline-flex items-center gap-1.5 px-4 py-2.5 text-xs font-bold uppercase tracking-wider text-white bg-[#128C7E] hover:bg-[#075E54] rounded transition-colors"
              >
                <MessageCircle className="w-3.5 h-3.5" />
                <span>WhatsApp</span>
              </button>

              <button
                type="submit"
                className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-white bg-[#5A0C1A] hover:bg-[#6E0D22] border border-[#7A1225] rounded transition-colors cursor-pointer"
              >
                <Send className="w-3.5 h-3.5" />
                <span>Submit Inquiry</span>
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
