import React from 'react';
import { motion } from 'framer-motion';
import { FaUserShield, FaRocket, FaUsers, FaChartLine } from 'react-icons/fa';

const FeatureCard = ({ icon: Icon, title, description }) => (
  <motion.div 
    whileHover={{ scale: 1.05 }}
    className="neo-brutalism bg-white p-6 rounded-lg"
  >
    <Icon className="text-4xl mb-4 text-[#4A4FFF]" />
    <h3 className="text-xl font-bold mb-2">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </motion.div>
);

export const Features = () => {
  const features = [
    {
      icon: FaUserShield,
      title: "Fair Launch",
      description: "Revolutionary Proof of Mint algorithm ensures equal opportunities for all participants"
    },
    {
      icon: FaRocket,
      title: "One-Click Deploy",
      description: "Deploy your token on Solana with just one click - no technical knowledge required"
    },
    {
      icon: FaUsers,
      title: "Community First",
      description: "Four key roles working together: Developers, Miners, Influencers, and Liquidity Managers"
    },
    {
      icon: FaChartLine,
      title: "Smart Economics",
      description: "Multi-milestone system with rebase effects for sustainable token growth"
    }
  ];

  return (
    <section className="features-section features-pattern py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 gradient-text">
          Why Flipflop?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
};