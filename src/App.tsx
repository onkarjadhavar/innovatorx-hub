import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { OpportunitiesSection } from './components/OpportunitiesSection';
import { AIAssistantSection } from './components/AIAssistantSection';
import { CommunitySection } from './components/CommunitySection';
import { JourneySection } from './components/JourneySection';
import { ContactSection } from './components/ContactSection';
import { CTASection } from './components/CTASection';
import { Footer } from './components/Footer';
import { GetStartedModal } from './components/GetStartedModal';
import { OpportunityModal } from './components/OpportunityModal';
import { OpportunityCategory } from './types';

export function App() {
  const [isGetStartedOpen, setIsGetStartedOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<OpportunityCategory | null>(null);

  const handleOpenGetStarted = () => {
    setIsGetStartedOpen(true);
  };

  const handleCloseGetStarted = () => {
    setIsGetStartedOpen(false);
  };

  const handleSelectCategory = (category: OpportunityCategory) => {
    setSelectedCategory(category);
  };

  const handleCloseCategoryModal = () => {
    setSelectedCategory(null);
  };

  return (
    <div className="min-h-screen bg-white font-sans text-slate-800 selection:bg-blue-600 selection:text-white">
      {/* SECTION 1: Navbar */}
      <Navbar onOpenGetStarted={handleOpenGetStarted} />

      <main>
        {/* SECTION 2: Hero Section */}
        <HeroSection onOpenGetStarted={handleOpenGetStarted} />

        {/* SECTION 3: About the Platform */}
        <AboutSection />

        {/* SECTION 4: Explore Opportunities */}
        <OpportunitiesSection onSelectCategory={handleSelectCategory} />

        {/* SECTION 5: Innovator AI Assistant */}
        <AIAssistantSection />

        {/* SECTION 6: Innovation Community */}
        <CommunitySection onOpenGetStarted={handleOpenGetStarted} />

        {/* SECTION 7: Innovation Journey */}
        <JourneySection />

        {/* SECTION: Contact Founding Team */}
        <ContactSection />

        {/* SECTION 8: Final Call to Action */}
        <CTASection onOpenGetStarted={handleOpenGetStarted} />
      </main>

      {/* SECTION 9: Footer */}
      <Footer />

      {/* Interactive Modals */}
      <GetStartedModal
        isOpen={isGetStartedOpen}
        onClose={handleCloseGetStarted}
      />

      <OpportunityModal
        category={selectedCategory}
        onClose={handleCloseCategoryModal}
        onApplyOrGetStarted={handleOpenGetStarted}
      />
    </div>
  );
}

export default App;
