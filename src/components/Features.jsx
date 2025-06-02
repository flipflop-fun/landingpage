import React from 'react';
import { motion } from 'framer-motion';
import { 
  FaUserShield, 
  FaClock, 
  FaBalanceScale, 
  FaChartLine,
  FaRobot,
  FaHandshake,
  FaLock,
  FaGem
} from 'react-icons/fa';

const FeatureCard = ({ icon: Icon, title, description, delay = 0 }) => (
  <motion.div
    initial={{ y: 50, opacity: 0 }}
    whileInView={{ y: 0, opacity: 1 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ delay, duration: 0.6, ease: "easeOut" }}
    whileHover={{ 
      scale: 1.02, 
      y: -5,
      transition: { duration: 0.2 }
    }}
    className="feature-card group cursor-pointer"
  >
    <div className="flex items-center mb-4">
      <div className="p-3 rounded-lg bg-primary-100 dark:bg-primary-900/30 mr-4 group-hover:bg-primary-200 dark:group-hover:bg-primary-800/50 transition-colors">
        <Icon className="text-2xl text-primary-600 dark:text-primary-400" />
      </div>
      <h3 className="text-xl font-pixel font-bold text-gray-900 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
        {title}
      </h3>
    </div>
    <p className="text-gray-600 dark:text-gray-300 leading-relaxed font-pixel-mono text-sm">
      {description}
    </p>
    
    {/* 装饰性元素 */}
    <div className="absolute top-4 right-4 w-2 h-2 bg-accent-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
  </motion.div>
);

const Features = () => {
  const problemsFeatures = [
    {
      icon: FaRobot,
      title: "Prevents Sybil Attacks",
      description: "Advanced difficulty adjustment mechanism makes it economically unfeasible for attackers to control large portions of token supply through multiple accounts."
    },
    {
      icon: FaClock,
      title: "Extended Consensus Time",
      description: "Stable minting process provides ample time for community building and consensus formation, unlike rapid fair launch mechanisms."
    },
    {
      icon: FaHandshake,
      title: "Eliminates Fraud",
      description: "Transparent, algorithmic minting process removes human intervention and prevents project teams from manipulating token distribution."
    },
    {
      icon: FaChartLine,
      title: "Market Value Management",
      description: "Built-in economic incentives and gradual token release help maintain healthy market dynamics and prevent pump-and-dump schemes."
    }
  ];

  const mechanismFeatures = [
    {
      icon: FaBalanceScale,
      title: "Difficulty Adjustment",
      description: "Inspired by Bitcoin's mining algorithm, automatically adjusts minting difficulty based on network participation to maintain stable token emission."
    },
    {
      icon: FaGem,
      title: "Era & Epoch System",
      description: "Structured minting phases with decreasing rewards and increasing difficulty, ensuring long-term sustainability and fair distribution."
    },
    {
      icon: FaLock,
      title: "MEV Resistance",
      description: "Design minimizes Maximal Extractable Value opportunities, protecting regular users from front-running and sandwich attacks."
    },
    {
      icon: FaUserShield,
      title: "Community Driven",
      description: "Decentralized governance model where community consensus drives protocol evolution and parameter adjustments."
    }
  ];

  return (
    <section id="features" className="features-pattern py-20 px-4 relative">
      <div className="max-w-7xl mx-auto">
        {/* 问题解决部分 */}
        <div className="mb-20">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-pixel font-bold mb-6 gradient-text">
              Problems We Solve
            </h2>
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto font-pixel-mono">
              Traditional fair launch mechanisms face critical challenges that undermine their fairness and sustainability.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {problemsFeatures.map((feature, index) => (
              <FeatureCard 
                key={index} 
                {...feature} 
                delay={index * 0.1}
              />
            ))}
          </div>
        </div>

        {/* 机制特性部分 */}
        <div>
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-pixel font-bold mb-6 gradient-text">
              PoM Mechanism
            </h2>
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto font-pixel-mono">
              Our innovative Proof of Mint protocol introduces revolutionary features for truly fair token distribution.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {mechanismFeatures.map((feature, index) => (
              <FeatureCard 
                key={index} 
                {...feature} 
                delay={index * 0.1}
              />
            ))}
          </div>
        </div>

        {/* 统计数据 */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 text-center"
        >
          {[
            { number: "95%", label: "Sybil Attack Prevention" },
            { number: "10x", label: "Longer Consensus Time" },
            { number: "100%", label: "Transparent Process" },
            { number: "∞", label: "Sustainable Growth" }
          ].map((stat, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="p-6 rounded-lg bg-white/70 dark:bg-dark-surface/70 backdrop-blur-sm border border-gray-200 dark:border-gray-700"
            >
              <div className="text-3xl md:text-4xl font-pixel font-bold text-primary-600 dark:text-primary-400 mb-2">
                {stat.number}
              </div>
              <div className="text-sm font-pixel-mono text-gray-600 dark:text-gray-400">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export { Features };