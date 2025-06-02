import React from 'react';
import { motion } from 'framer-motion';
import { FaTwitter, FaDiscord, FaTelegram, FaGithub, FaMedium } from 'react-icons/fa';

const socialLinks = [
  {
    name: 'Twitter',
    icon: FaTwitter,
    url: 'https://x.com/flipfloplaunch'
  },
  {
    name: 'Telegram',
    icon: FaTelegram,
    url: 'https://t.me/flipflopEng'
  },
  {
    name: 'GitHub',
    icon: FaGithub,
    url: 'https://github.com/flipflop-fun'
  },
  {
    name: 'Medium',
    icon: FaMedium,
    url: 'https://medium.com/@flipfloplaunch'
  }
];

export const SocialLinks = () => {
  return (
    <section className="py-16 px-4 social-links-pattern bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-6xl mx-auto text-center">
        <div 
          className="flex justify-center items-center gap-8 flex-wrap"
        >
          {socialLinks.map((link, index) => (
            <motion.a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="w-14 h-14 flex items-center justify-center bg-white dark:bg-gray-800 rounded-full border-2 border-gray-300 dark:border-gray-600 hover:border-primary-500 dark:hover:border-primary-400 hover:bg-gray-50 dark:hover:bg-gray-700 transition-all duration-300 shadow-lg hover:shadow-xl"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <link.icon className="text-2xl text-gray-700 dark:text-white hover:text-primary-500 dark:hover:text-primary-400 transition-colors duration-300" />
            </motion.a>
          ))}
        </div>
        
        {/* Footer 信息 */}
        <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
          <p className="text-gray-600 dark:text-gray-400 text-sm">
            © 2025 Proof of Mint. All rights reserved.
          </p>
          <p className="text-gray-500 dark:text-gray-500 text-xs mt-2">
            Built with ❤️ for the Solana ecosystem
          </p>
        </div>
      </div>
    </section>
  );
};
