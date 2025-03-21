import React from 'react';
import { Hero } from './components/Hero';
import { Features } from './components/Features';
import { HowItWorks } from './components/HowItWorks';
import { SocialLinks } from './components/SocialLinks';
import { Logo } from './components/Logo';
import { PATTERNS } from './constants/patterns';

function App() {
  return (
    <div className={`min-h-screen ${PATTERNS.SQUARES}`}>
      <Logo />
      <Hero />
      <Features />
      <HowItWorks />
      <SocialLinks />
    </div>
  );
}

export default App;