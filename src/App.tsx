/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Introduction } from './components/Introduction';
import { WhyRadiant } from './components/WhyRadiant';
import { SchoolFlyerShowcase } from './components/SchoolFlyerShowcase';
import { AcademicsSection } from './components/AcademicsSection';
import { BeyondClassroom } from './components/BeyondClassroom';
import { CampusExperience } from './components/CampusExperience';
import { StudentLife } from './components/StudentLife';
import { AdmissionsSection } from './components/AdmissionsSection';
import { ParentHub } from './components/ParentHub';
import { NewsEvents } from './components/NewsEvents';
import { Testimonials } from './components/Testimonials';
import { FinalCTA } from './components/FinalCTA';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { FloatingActions } from './components/FloatingActions';
import { ApplyNowModal } from './components/modals/ApplyNowModal';
import { BookTourModal } from './components/modals/BookTourModal';
import { ProspectusModal } from './components/modals/ProspectusModal';
import { NewsArticleModal } from './components/modals/NewsArticleModal';
import { UploadPhotosModal } from './components/modals/UploadPhotosModal';
import { SchoolPhotoGallery } from './components/SchoolPhotoGallery';
import { SchoolVideosSection } from './components/SchoolVideosSection';
import { NewsArticle } from './types';

export default function App() {
  const [isApplyModalOpen, setIsApplyModalOpen] = useState(false);
  const [isTourModalOpen, setIsTourModalOpen] = useState(false);
  const [isProspectusModalOpen, setIsProspectusModalOpen] = useState(false);
  const [isUploadModalOpen, setIsUploadModalOpen] = useState(false);
  const [selectedArticle, setSelectedArticle] = useState<NewsArticle | null>(null);

  const scrollToContact = () => {
    const el = document.getElementById('contact');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF9F6] text-[#1E293B] antialiased">
      {/* 1. Sticky Navigation Header */}
      <Header
        onOpenApply={() => setIsApplyModalOpen(true)}
        onOpenTour={() => setIsTourModalOpen(true)}
        onOpenProspectus={() => setIsProspectusModalOpen(true)}
        onOpenUploadModal={() => setIsUploadModalOpen(true)}
      />

      <main className="flex-1">
        {/* 2. Hero Section */}
        <Hero
          onOpenApply={() => setIsApplyModalOpen(true)}
          onOpenTour={() => setIsTourModalOpen(true)}
          onOpenProspectus={() => setIsProspectusModalOpen(true)}
          onOpenUploadModal={() => setIsUploadModalOpen(true)}
        />

        {/* 3. Introduction Section */}
        <Introduction
          onOpenProspectus={() => setIsProspectusModalOpen(true)}
          onOpenTour={() => setIsTourModalOpen(true)}
        />

        {/* 4. Why Radiant Section */}
        <WhyRadiant onOpenApply={() => setIsApplyModalOpen(true)} />

        {/* Official School Commitment & Admissions Showcase */}
        <SchoolFlyerShowcase
          onOpenApply={() => setIsApplyModalOpen(true)}
          onOpenTour={() => setIsTourModalOpen(true)}
        />

        {/* 5. Academic Excellence Section */}
        <AcademicsSection
          onOpenApply={() => setIsApplyModalOpen(true)}
          onOpenProspectus={() => setIsProspectusModalOpen(true)}
        />

        {/* 6. Learning Beyond the Classroom Section */}
        <BeyondClassroom onOpenTour={() => setIsTourModalOpen(true)} />

        {/* 7. Campus Experience Section */}
        <CampusExperience onOpenTour={() => setIsTourModalOpen(true)} />

        {/* Authentic School Photo Gallery & Life at Radiant */}
        <SchoolPhotoGallery onOpenUploadModal={() => setIsUploadModalOpen(true)} />

        {/* Official School Videos & Reels Section */}
        <SchoolVideosSection onOpenTour={() => setIsTourModalOpen(true)} />

        {/* 8. Student Life Section */}
        <StudentLife />

        {/* 9. Admissions Section */}
        <AdmissionsSection
          onOpenApply={() => setIsApplyModalOpen(true)}
          onOpenTour={() => setIsTourModalOpen(true)}
          onOpenProspectus={() => setIsProspectusModalOpen(true)}
        />

        {/* 10. Parent & Guardian Hub Section */}
        <ParentHub onOpenProspectus={() => setIsProspectusModalOpen(true)} />

        {/* 11. News & Events Section */}
        <NewsEvents
          onSelectArticle={(art) => setSelectedArticle(art)}
          onOpenTour={() => setIsTourModalOpen(true)}
        />

        {/* 12. Community Reflections & Testimonials Section */}
        <Testimonials />

        {/* 13. Final CTA Section */}
        <FinalCTA
          onOpenApply={() => setIsApplyModalOpen(true)}
          onOpenTour={() => setIsTourModalOpen(true)}
          onScrollToContact={scrollToContact}
        />

        {/* 14. Contact & Inquiries Section */}
        <ContactSection />
      </main>

      {/* 15. Comprehensive Footer */}
      <Footer
        onOpenApply={() => setIsApplyModalOpen(true)}
        onOpenTour={() => setIsTourModalOpen(true)}
        onOpenProspectus={() => setIsProspectusModalOpen(true)}
      />

      {/* Floating Fast-Access Actions */}
      <FloatingActions
        onOpenApply={() => setIsApplyModalOpen(true)}
        onOpenTour={() => setIsTourModalOpen(true)}
        onOpenUploadModal={() => setIsUploadModalOpen(true)}
      />

      {/* Modals */}
      <ApplyNowModal
        isOpen={isApplyModalOpen}
        onClose={() => setIsApplyModalOpen(false)}
      />

      <BookTourModal
        isOpen={isTourModalOpen}
        onClose={() => setIsTourModalOpen(false)}
      />

      <ProspectusModal
        isOpen={isProspectusModalOpen}
        onClose={() => setIsProspectusModalOpen(false)}
      />

      <NewsArticleModal
        article={selectedArticle}
        onClose={() => setSelectedArticle(null)}
      />

      <UploadPhotosModal
        isOpen={isUploadModalOpen}
        onClose={() => setIsUploadModalOpen(false)}
      />
    </div>
  );
}
