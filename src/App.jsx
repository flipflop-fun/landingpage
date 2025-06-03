import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Hero } from './components/Hero';
import { Features } from './components/Features';
import { HowItWorks } from './components/HowItWorks';
import { SocialLinks } from './components/SocialLinks';
import { Logo } from './components/Logo';
import ThemeToggle from './components/ThemeToggle'; 
import { PrivacyPolicyPage } from './components/PrivacyPolicyPage'; // Import the new page
import { PATTERNS } from './constants/patterns';

function MainPageLayout() {
  return (
    <>
      <Logo />
      <Hero />
      <Features />
      <HowItWorks />
      <SocialLinks />
    </>
  );
}

function App() {
  return (
    <Router>
      <div className={`min-h-screen transition-colors duration-300 ${PATTERNS.SQUARES} bg-white dark:bg-gray-900`}>
        <ThemeToggle />
        <Routes>
          <Route path="/" element={<MainPageLayout />} />
          <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;