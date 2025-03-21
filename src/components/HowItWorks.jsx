import React from 'react';
import { motion } from 'framer-motion';

export const HowItWorks = () => {
  const steps = [
    {
      number: "01",
      title: "Deploy Token",
      description: "Create your token in seconds with customizable parameters"
    },
    {
      number: "02",
      title: "Fair Minting",
      description: "Community members mint tokens with equal opportunity"
    },
    {
      number: "03",
      title: "Reach Milestones",
      description: "Automatic liquidity pool creation at key milestones"
    },
    {
      number: "04",
      title: "Community Growth",
      description: "Sustainable token growth with built-in protection mechanisms"
    }
  ];

  return (
    <section className="how-it-works-section how-it-works-pattern py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 gradient-text">
          How It Works
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div 
              key={index}
              whileHover={{ scale: 1.05 }}
              className="neo-brutalism bg-white p-6 rounded-lg"
            >
              <div className="text-6xl font-bold text-[#4A4FFF] mb-4">{step.number}</div>
              <h3 className="text-xl font-bold mb-2">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};