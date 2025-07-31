import React, { useState } from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import MentorSection from './components/MentorSection';
import CompanySection from './components/CompanySection';
import VideoSection from './components/VideoSection';
import ReviewSection from './components/ReviewSection';
import ContactSection from './components/ContactSection';
import AuthModal from './components/AuthModal';
import SubscriptionModal from './components/SubscriptionModal';
import UploadVideoModal from './components/UploadVideoModal';
import Chatbot from './components/Chatbot';

function App() {
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [isSubscriptionModalOpen, setIsSubscriptionModalOpen] = useState(false);
  const [isUploadVideoModalOpen, setIsUploadVideoModalOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleGetStarted = () => {
    setIsSubscriptionModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar 
        onAuthClick={() => setIsAuthModalOpen(true)}
        onSectionClick={scrollToSection}
      />
      
      <main>
        <section id="home">
          <HeroSection onGetStarted={handleGetStarted} />
        </section>
        
        <section id="mentors">
          <MentorSection />
        </section>
        
        <section id="companies">
          <CompanySection />
        </section>
        
        <section id="videos">
          <VideoSection onUploadClick={() => setIsUploadVideoModalOpen(true)} />
        </section>
        
        <section id="reviews">
          <ReviewSection />
        </section>
        
        <section id="contact">
          <ContactSection />
        </section>
      </main>

      <AuthModal 
        isOpen={isAuthModalOpen}
        onClose={() => setIsAuthModalOpen(false)}
      />

      <SubscriptionModal 
        isOpen={isSubscriptionModalOpen}
        onClose={() => setIsSubscriptionModalOpen(false)}
      />

      <UploadVideoModal 
        isOpen={isUploadVideoModalOpen}
        onClose={() => setIsUploadVideoModalOpen(false)}
      />

      <Chatbot />
    </div>
  );
}

export default App;