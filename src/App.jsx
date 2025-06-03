import React from 'react';
import { Hero } from './components/Hero';
import { Features } from './components/Features';
import { HowItWorks } from './components/HowItWorks';
import { SocialLinks } from './components/SocialLinks';
import { Logo } from './components/Logo';
import ThemeToggle from './components/ThemeToggle'; 
import { PATTERNS } from './constants/patterns';

function App() {
  return (
    <div className={`min-h-screen transition-colors duration-300 ${PATTERNS.SQUARES} bg-white dark:bg-gray-900`}>
      {/* Theme Toggle Button - Fixed Position */}
      <ThemeToggle />
      
      {/* Main Content */}
      <Logo />
      <Hero />
      <Features />
      <HowItWorks />
      <SocialLinks />
    </div>
  );
}

export default App;