/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { BentoSection } from './components/BentoSection';
import { UrgencyStatementSection } from './components/UrgencyStatementSection';
import { FeaturesCenterSection } from './components/FeaturesCenterSection';
import { ShowcaseSection } from './components/ShowcaseSection';
import { CtaSection } from './components/CtaSection';
import { Footer } from './components/Footer';
import { ScrollReveal } from './components/ScrollReveal';
import { ServiceModal } from './components/ServiceModal';
import { BookingModal } from './components/BookingModal';
import { ServiceDetail, ServiceType } from './types';
import { useScrollSectionFade } from './hooks/useScrollSectionFade';

export default function App() {
  useScrollSectionFade();
  const [selectedService, setSelectedService] = useState<ServiceDetail | null>(null);
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [bookingInitialService, setBookingInitialService] = useState<ServiceType | null>(null);

  const handleSelectService = (service: ServiceDetail) => {
    setSelectedService(service);
  };

  const handleBookFromService = (service: ServiceDetail) => {
    setSelectedService(null);
    setBookingInitialService(service.id);
    setIsBookingOpen(true);
  };

  const handleOpenGeneralBooking = () => {
    setBookingInitialService(null);
    setIsBookingOpen(true);
  };

  const scrollToSection = (id: string) => {
    if (id === 'hero') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#F6F2EC] text-[#1A1817] flex flex-col font-['Plus_Jakarta_Sans',sans-serif] selection:bg-[#3B4D37] selection:text-white">
      {/* Top Bar with Flowblox layout */}
      <Navbar 
        onOpenBooking={handleOpenGeneralBooking}
        onNavigate={scrollToSection}
      />

      <main className="flex-1">
        {/* Hero Section */}
        <HeroSection 
          onSelectService={handleSelectService}
          onOpenBooking={handleOpenGeneralBooking}
        />

        {/* Bento Grid: 5 Pain Point Bottleneck Cards (Slides from Left & Right) */}
        <BentoSection onOpenBooking={handleOpenGeneralBooking} />

        {/* Full Section Urgency Statement (Slides from Left) */}
        <UrgencyStatementSection />

        {/* 4-Step Process Section (Cards Slide Alternately from Left & Right) */}
        <FeaturesCenterSection />

        {/* 25 Live Client Reels Showcase (Reels Slide Alternately from Left & Right) */}
        <ShowcaseSection onOpenBooking={handleOpenGeneralBooking} />

        {/* Luminous Dark CTA Banner (Slides from Right) */}
        <CtaSection onOpenBooking={handleOpenGeneralBooking} />
      </main>

      {/* Floating Card Footer with Giant Watermark (Slides from Left & Right) */}
      <Footer 
        onOpenBooking={handleOpenGeneralBooking}
        onNavigate={scrollToSection}
      />

      {/* Service Details Drawer/Modal */}
      <ServiceModal
        service={selectedService}
        onClose={() => setSelectedService(null)}
        onBookService={handleBookFromService}
      />

      {/* Interactive Project Inquiry & Booking Modal */}
      <BookingModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
        initialService={bookingInitialService}
      />
    </div>
  );
}
