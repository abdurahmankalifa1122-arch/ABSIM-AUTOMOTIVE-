/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { ServicesSection } from './components/ServicesSection';
import { EquipmentSection } from './components/EquipmentSection';
import { WorkshopSection } from './components/WorkshopSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { EquipmentModal } from './components/EquipmentModal';
import { InquiryModal } from './components/InquiryModal';
import { ServiceItem, EquipmentItem, ABSIM_SERVICES, ABSIM_EQUIPMENT } from './data/absimData';

export default function App() {
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);
  const [inspectedEquipment, setInspectedEquipment] = useState<EquipmentItem | null>(null);
  const [preselectedContactService, setPreselectedContactService] = useState<string>('');

  const handleOpenInquiryFromNav = () => {
    setSelectedService(ABSIM_SERVICES[0]);
  };

  const handleInspectEquipment = (item: EquipmentItem) => {
    setInspectedEquipment(item);
  };

  const handleServiceInquiryFromEquipment = (equipmentName: string) => {
    setInspectedEquipment(null);
    setPreselectedContactService(`Inquiry related to: ${equipmentName}`);
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectService = (service: ServiceItem) => {
    setSelectedService(service);
  };

  return (
    <div className="min-h-screen bg-[#0D0E12] text-[#F3F4F6] flex flex-col font-sans selection:bg-[#5A0C1A] selection:text-white">
      {/* Refined Navigation Bar */}
      <Navbar onOpenInquiry={handleOpenInquiryFromNav} />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* 1. Hero Section */}
        <HeroSection
          onContactClick={() => {
            const el = document.getElementById('contact');
            if (el) el.scrollIntoView({ behavior: 'smooth' });
          }}
          onServicesClick={() => {
            const el = document.getElementById('services');
            if (el) el.scrollIntoView({ behavior: 'smooth' });
          }}
        />

        {/* 2. About ABSIM AUTOMOTIVE */}
        <AboutSection />

        {/* 3. Our Services */}
        <ServicesSection onSelectService={handleSelectService} />

        {/* 4. Our Equipment: "Professional Equipment. Professional Care." */}
        <EquipmentSection onInspectEquipment={handleInspectEquipment} />

        {/* 5. Our Workshop */}
        <WorkshopSection />

        {/* 6. Contact Section */}
        <ContactSection preselectedService={preselectedContactService} />
      </main>

      {/* Official Footer */}
      <Footer />

      {/* Equipment Detailed Modal */}
      <EquipmentModal
        item={inspectedEquipment}
        onClose={() => setInspectedEquipment(null)}
        onRequestService={handleServiceInquiryFromEquipment}
      />

      {/* Quick Service Inquiry Modal */}
      <InquiryModal
        service={selectedService}
        onClose={() => setSelectedService(null)}
      />
    </div>
  );
}
