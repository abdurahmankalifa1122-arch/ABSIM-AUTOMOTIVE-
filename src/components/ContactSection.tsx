import React, { useState } from 'react';
import { Phone, MessageCircle, MapPin, Send, CheckCircle, Navigation } from 'lucide-react';
import { ABSIM_BRAND } from '../data/absimData';

interface ContactSectionProps {
  preselectedService?: string;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ preselectedService = '' }) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: preselectedService || 'General Automotive Inquiry',
    vehicle: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) newErrors.name = 'Please provide your name';
    if (!formData.phone.trim()) newErrors.phone = 'Please enter your phone number';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setSubmitted(true);
  };

  const sendToWhatsApp = () => {
    const text = encodeURIComponent(
      `Hello ABSIM Automotive!
Name: ${formData.name || 'Customer'}
Phone: ${formData.phone || 'N/A'}
Vehicle: ${formData.vehicle || 'Not specified'}
Service: ${formData.service}
Notes: ${formData.message || 'I would like to inquire about workshop service.'}`
    );
    window.open(`https://wa.me/251911893490?text=${text}`, '_blank');
  };

  return (
    <section id="contact" className="py-20 lg:py-24 bg-[#0F1015] border-b border-[#1C202C]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Headline */}
        <div className="mb-12">
          <span className="text-xs font-bold tracking-widest uppercase text-[#E02447] block mb-2">
            CONTACT & LOCATION
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-heading tracking-tight uppercase">
            GET IN TOUCH WITH ABSIM AUTOMOTIVE.
          </h2>
          <p className="text-slate-400 mt-2 text-base max-w-2xl">
            Visit our workshop behind AMCE in Megenagna or contact us directly for tyre fitting, wheel balancing, alignment, and vehicle care.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Direct Access Details */}
          <div className="lg:col-span-5 space-y-5">
            {/* Location Card */}
            <div className="p-6 rounded-lg bg-[#13151D] border border-[#202534] shadow-md space-y-3">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded bg-[#5A0C1A]/20 text-[#E02447]">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] font-mono uppercase text-slate-400">Workshop Location</span>
                  <h3 className="text-base font-bold text-white font-heading">
                    {ABSIM_BRAND.location.full}
                  </h3>
                </div>
              </div>

              <div className="pt-2">
                <a
                  href={ABSIM_BRAND.location.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-white bg-[#1A1D27] hover:bg-[#252B3B] border border-[#2D3344] rounded transition-colors"
                >
                  <Navigation className="w-3.5 h-3.5 text-[#E02447]" />
                  <span>Google Maps Directions ↗</span>
                </a>
              </div>
            </div>

            {/* Direct Telephone & WhatsApp */}
            <div className="p-6 rounded-lg bg-[#13151D] border border-[#202534] shadow-md space-y-4">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded bg-[#5A0C1A]/20 text-[#E02447]">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] font-mono uppercase text-slate-400">Direct Telephone</span>
                  <h3 className="text-lg font-bold text-white font-heading">
                    {ABSIM_BRAND.contact.phoneDisplay}
                  </h3>
                </div>
              </div>

              <div className="flex flex-wrap gap-3">
                <a
                  href={`tel:${ABSIM_BRAND.contact.phone.replace(/\s+/g, '')}`}
                  className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-white bg-[#5A0C1A] hover:bg-[#6E0D22] border border-[#7A1225] rounded transition-colors"
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span>Call Us</span>
                </a>

                <a
                  href={ABSIM_BRAND.contact.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-white bg-[#128C7E] hover:bg-[#075E54] border border-[#25D366]/40 rounded transition-colors"
                >
                  <MessageCircle className="w-3.5 h-3.5" />
                  <span>WhatsApp Chat</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Direct Service Inquiry Form */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-7 rounded-lg bg-[#13151D] border border-[#202534] shadow-xl">
              <div className="mb-5">
                <h3 className="text-lg font-bold text-white font-heading">
                  Request Service or Consultation
                </h3>
                <p className="text-xs text-slate-400 mt-1">
                  Send your vehicle details to schedule workshop care or request direct guidance.
                </p>
              </div>

              {submitted ? (
                <div className="py-6 px-4 rounded-lg bg-[#0F1117] border border-[#232838] text-center space-y-3 animate-fadeIn">
                  <div className="w-10 h-10 rounded-full bg-[#5A0C1A]/20 border border-[#7A1225] text-[#E02447] flex items-center justify-center mx-auto">
                    <CheckCircle className="w-5 h-5" />
                  </div>
                  <h4 className="text-base font-bold text-white font-heading">
                    Inquiry Received
                  </h4>
                  <p className="text-xs text-slate-300">
                    Thank you, <span className="text-white font-semibold">{formData.name}</span>. We will assist you with <span className="text-white font-semibold">{formData.service}</span>.
                  </p>
                  <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
                    <button
                      type="button"
                      onClick={sendToWhatsApp}
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2 text-xs font-bold uppercase tracking-wider text-white bg-[#128C7E] hover:bg-[#075E54] rounded transition-colors"
                    >
                      <MessageCircle className="w-3.5 h-3.5" />
                      <span>Send Direct via WhatsApp</span>
                    </button>
                    <button
                      type="button"
                      onClick={() => setSubmitted(false)}
                      className="w-full sm:w-auto px-4 py-2 text-xs text-slate-400 hover:text-white transition-colors"
                    >
                      New Inquiry
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Your name"
                        className="w-full px-3 py-2 text-xs bg-[#0B0C10] border border-[#232838] rounded text-white placeholder-slate-500 focus:outline-none focus:border-[#7A1225] transition-colors"
                      />
                      {errors.name && (
                        <span className="text-[10px] text-red-400 mt-1 block">{errors.name}</span>
                      )}
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+251 9X XXX XXXX"
                        className="w-full px-3 py-2 text-xs bg-[#0B0C10] border border-[#232838] rounded text-white placeholder-slate-500 focus:outline-none focus:border-[#7A1225] transition-colors"
                      />
                      {errors.phone && (
                        <span className="text-[10px] text-red-400 mt-1 block">{errors.phone}</span>
                      )}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1">
                        Service
                      </label>
                      <select
                        value={formData.service}
                        onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                        className="w-full px-3 py-2 text-xs bg-[#0B0C10] border border-[#232838] rounded text-white focus:outline-none focus:border-[#7A1225] transition-colors"
                      >
                        <option value="Tyre Changing">Tyre Changing (Twin Busch X-98)</option>
                        <option value="Wheel Balancing">Wheel Balancing (Twin Busch F-150)</option>
                        <option value="Wheel Alignment">Wheel Alignment (Corghi 3D)</option>
                        <option value="Vehicle Inspection">Vehicle Inspection (Pit Bay)</option>
                        <option value="Automotive Workshop Services">Automotive Workshop Services</option>
                        <option value="Car Laundry / Vehicle Cleaning">Car Laundry / Vehicle Cleaning</option>
                        <option value="General Automotive Inquiry">General Workshop Inquiry</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1">
                        Vehicle (Optional)
                      </label>
                      <input
                        type="text"
                        value={formData.vehicle}
                        onChange={(e) => setFormData({ ...formData, vehicle: e.target.value })}
                        placeholder="Make & model"
                        className="w-full px-3 py-2 text-xs bg-[#0B0C10] border border-[#232838] rounded text-white placeholder-slate-500 focus:outline-none focus:border-[#7A1225] transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">
                      Notes (Optional)
                    </label>
                    <textarea
                      rows={2}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Brief details or specific requests..."
                      className="w-full px-3 py-2 text-xs bg-[#0B0C10] border border-[#232838] rounded text-white placeholder-slate-500 focus:outline-none focus:border-[#7A1225] transition-colors resize-none"
                    />
                  </div>

                  <div className="pt-2 flex flex-wrap items-center gap-3">
                    <button
                      type="submit"
                      className="inline-flex items-center justify-center gap-2 px-6 py-2.5 text-xs font-bold uppercase tracking-wider text-white bg-[#5A0C1A] hover:bg-[#6E0D22] border border-[#7A1225] rounded transition-all duration-200 cursor-pointer shadow-md"
                    >
                      <Send className="w-3.5 h-3.5" />
                      <span>Send Inquiry</span>
                    </button>

                    <button
                      type="button"
                      onClick={sendToWhatsApp}
                      className="inline-flex items-center justify-center gap-2 px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-white bg-[#128C7E] hover:bg-[#075E54] border border-[#25D366]/40 rounded transition-all duration-200 cursor-pointer"
                    >
                      <MessageCircle className="w-3.5 h-3.5" />
                      <span>WhatsApp</span>
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
