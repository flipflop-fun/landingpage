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
    name: 'Discord',
    icon: FaDiscord,
    url: ' https://discord.gg/DtwkgAyD'
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
    <section className="py-16 px-4 social-links-pattern dark:bg-gray-900 transition-colors duration-200">
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
              className="w-14 h-14 flex items-center justify-center bg-white dark:bg-gray-700 rounded-full border-2 border-gray-200 dark:border-gray-600 hover:border-brand-500 dark:hover:border-brand-400 hover:bg-brand-50 dark:hover:bg-gray-600 transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-brand-500/20"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <link.icon className="text-2xl text-gray-600 dark:text-gray-200 hover:text-brand-600 dark:hover:text-brand-400 transition-colors duration-300" />
            </motion.a>
          ))}
        </div>

        {/* Privacy Policy Link */}
        <div className="mt-8 mb-4">
          <a 
            href="/privacy-policy" 
            className="text-sm text-brand-600 dark:text-brand-400 hover:text-brand-700 dark:hover:text-brand-300 hover:underline transition-colors duration-300"
          >
            Privacy Policy
          </a>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-600">
          <p className="text-gray-600 dark:text-gray-300 text-sm">
            © 2025 Proof of Mint. All rights reserved.
          </p>
          <p className="text-gray-500 dark:text-gray-400 text-xs mt-2">
            Built with ❤️ for the Solana ecosystem
          </p>
        </div>
      </div>
    </section>
  );
};
