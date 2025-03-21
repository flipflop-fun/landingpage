import React from 'react';
import { motion } from 'framer-motion';
import { FaRocket, FaShieldAlt } from 'react-icons/fa';

export const Hero = () => {
  return (
    <section className="hero-section hero-pattern min-h-screen flex items-center justify-center px-4 py-20">
      <div className="max-w-6xl mx-auto text-center">
        <motion.h1 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="text-6xl font-bold mb-6 gradient-text"
        >
          Fair Launch Revolution
        </motion.h1>
        
        <motion.p 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-xl mb-8 text-gray-700"
        >
          Launch your token with revolutionary Proof of Mint algorithm.
          Fair, secure, and community-driven.
        </motion.p>

        <div className="flex gap-6 justify-center mb-12">
          <a 
            href="https://flipflop-app.vercel.app/mint-tokens" 
            className="neo-brutalism bg-[#FF4D4D] text-white px-8 py-4 text-xl font-bold rounded-lg"
          >
            Discover
          </a>
          <a 
            href="https://flipflop-app.vercel.app/launch-token" 
            className="neo-brutalism bg-[#4A4FFF] text-white px-8 py-4 text-xl font-bold rounded-lg"
          >
            Launch
          </a>
        </div>
      </div>
    </section>
  );
};