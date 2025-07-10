import React from 'react';
import { motion } from 'framer-motion';
import { FaRocket, FaUsers, FaShieldAlt, FaChartLine, FaCode, FaLock } from 'react-icons/fa';

export const HowItWorks = () => {
  const workflowSteps = [
    {
      number: "01",
      title: "Token Creation",
      description: "Deploy your token with customizable parameters and built-in security features",
      icon: FaRocket,
      details: ["Custom tokenomics", "Built-in security", "One-click deployment"]
    },
    {
      number: "02",
      title: "Fair Minting Phase",
      description: "Community-driven minting with equal opportunity and anti-bot protection",
      icon: FaUsers,
      details: ["Equal opportunity", "Anti-bot protection", "Transparent process"]
    },
    {
      number: "03",
      title: "Milestone Triggers",
      description: "Automatic liquidity pool creation and trading activation at key milestones",
      icon: FaShieldAlt,
      details: ["Auto LP creation", "Trading activation", "Milestone rewards"]
    },
    {
      number: "04",
      title: "Sustainable Growth",
      description: "Long-term value creation with community governance and protection mechanisms",
      icon: FaChartLine,
      details: ["Community governance", "Value protection", "Sustainable growth"]
    }
  ];

  const technicalFeatures = [
    {
      title: "Smart Contract Security",
      description: "Audited contracts with built-in protection mechanisms",
      icon: FaLock,
      features: ["Rug-pull protection", "Automated security checks", "Transparent code"]
    },
    {
      title: "Advanced Tokenomics",
      description: "Sophisticated economic models for sustainable token ecosystems",
      icon: FaCode,
      features: ["Dynamic pricing", "Milestone-based rewards", "Community incentives"]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className="how-it-works-section how-it-works-pattern py-20 px-4 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto">
        {/* Main Title */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-pixel font-bold mb-6 gradient-text">
            How PoM Works
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            A revolutionary approach to token creation and community building on Solana
          </p>
        </motion.div>

        {/* Workflow Steps */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-20"
        >
          <h3 className="text-3xl font-bold text-center mb-12 text-gray-800 dark:text-white">
            The PoM Process
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {workflowSteps.map((step, index) => {
              const IconComponent = step.icon;
              return (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ 
                    scale: 1.05,
                    boxShadow: "0 20px 40px rgba(0,0,0,0.1)"
                  }}
                  className="neo-brutalism bg-white dark:bg-gray-800 p-6 rounded-lg group cursor-pointer"
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="text-4xl font-pixel font-bold text-primary-500">
                      {step.number}
                    </div>
                    <IconComponent className="text-2xl text-accent-500 group-hover:scale-110 transition-transform" />
                  </div>
                  <h4 className="text-xl font-bold mb-3 text-gray-800 dark:text-white">
                    {step.title}
                  </h4>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    {step.description}
                  </p>
                  <ul className="space-y-1">
                    {step.details.map((detail, idx) => (
                      <li key={idx} className="text-sm text-gray-500 dark:text-gray-400 flex items-center">
                        <span className="w-1.5 h-1.5 bg-accent-500 rounded-full mr-2"></span>
                        {detail}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Technical Features */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 className="text-3xl font-bold text-center mb-12 text-gray-800 dark:text-white">
            Technical Excellence
          </h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {technicalFeatures.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ scale: 1.02 }}
                  className="neo-brutalism bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 p-8 rounded-lg"
                >
                  <div className="flex items-center mb-6">
                    <div className="p-3 bg-primary-100 dark:bg-primary-900 rounded-lg mr-4">
                      <IconComponent className="text-2xl text-primary-600 dark:text-primary-400" />
                    </div>
                    <h4 className="text-2xl font-bold text-gray-800 dark:text-white">
                      {feature.title}
                    </h4>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 mb-6">
                    {feature.description}
                  </p>
                  <div className="grid grid-cols-1 gap-3">
                    {feature.features.map((item, idx) => (
                      <div key={idx} className="flex items-center p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                        <span className="w-2 h-2 bg-accent-500 rounded-full mr-3"></span>
                        <span className="text-gray-700 dark:text-gray-200">{item}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <div className="neo-brutalism bg-gradient-to-r from-primary-500 to-accent-500 p-8 rounded-lg text-white">
            <h3 className="text-3xl font-bold mb-4">Ready to Launch Your Token?</h3>
            <p className="text-xl mb-6 opacity-90">
              Join the revolution of fair and secure token creation
            </p>
            <motion.a
              href="https://app.flipflop.plus"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="pixel-btn bg-white text-primary-600 px-8 py-3 rounded-lg font-bold text-lg hover:bg-gray-100 transition-colors"
            >
              Start Buidling
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};