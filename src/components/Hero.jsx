import React from 'react';
import { motion } from 'framer-motion';
import { FaRocket, FaShieldAlt, FaCoins, FaUsers } from 'react-icons/fa';

const Hero = () => {
  return (
    <section className="hero-pattern min-h-screen flex items-center justify-center px-4 py-20 pt-32 relative overflow-hidden">
      
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-20 left-10 w-16 h-16 border-4 border-primary-500 rotate-45"
          animate={{ rotate: [45, 405] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-12 h-12 bg-secondary-500 rounded-full"
          animate={{ y: [-10, 10, -10] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute top-1/2 right-20 w-8 h-8 bg-accent-500 transform rotate-45"
          animate={{ rotate: [45, -315] }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        />
      </div>

      <div className="max-w-6xl mx-auto text-center relative z-10">
        
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-8"
        >
          <h1 className="hero-title text-4xl md:text-6xl lg:text-7xl font-pixel font-bold mb-4 gradient-text leading-tight">
            Proof of Mint
          </h1>
          <div className="text-lg md:text-3xl text-gray-600 dark:text-gray-300 font-pixel-mono">
            Revolutionary Fair Launch Protocol
          </div>
        </motion.div>

        
        <motion.p
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="hero-subtitle text-lg md:text-xl lg:text-2xl mb-12 text-gray-700 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed"
        >
          Inspired by Bitcoin's mining difficulty mechanism, PoM transforms hash power into 
          minting participation levels, ensuring true fairness and preventing Sybil attacks.
        </motion.p>

        
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12 max-w-4xl mx-auto"
        >
          {[
            { icon: FaShieldAlt, text: "Anti-Sybil" },
            { icon: FaCoins, text: "Fair Mint" },
            { icon: FaUsers, text: "Community" },
            { icon: FaRocket, text: "Scalable" }
          ].map((item, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center p-4 rounded-lg bg-white/50 dark:bg-dark-surface/50 backdrop-blur-sm border border-gray-200 dark:border-gray-700"
              whileHover={{ scale: 1.05, y: -2 }}
              transition={{ delay: 0.8 + index * 0.1 }}
            >
              <item.icon className="text-2xl text-primary-500 mb-2" />
              <span className="text-sm font-pixel-mono font-semibold text-gray-700 dark:text-gray-300">
                {item.text}
              </span>
            </motion.div>
          ))}
        </motion.div>

        
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.9, duration: 0.8 }}
          className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4"
        >
          <motion.a
            href="https://test.flipflop.plus"
            target="_blank"
            rel="noopener noreferrer"
            className="pixel-button bg-brand-500 hover:bg-brand-600 text-white px-8 py-4 text-lg font-bold"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Start Building
          </motion.a>
          <motion.a
            href="https://docsend.com/view/r9rz54y2ggvwny4j"
            target="_blank"
            rel="noopener noreferrer"
            className="pixel-button-secondary border-2 border-brand-500 text-brand-500 hover:bg-brand-500 hover:text-white px-8 py-4 text-lg font-bold"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Read Whitepaper
          </motion.a>
        </motion.div>

        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="w-6 h-10 border-2 border-gray-400 dark:border-gray-600 rounded-full flex justify-center"
          >
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="w-1 h-3 bg-gray-400 dark:bg-gray-600 rounded-full mt-2"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export { Hero };