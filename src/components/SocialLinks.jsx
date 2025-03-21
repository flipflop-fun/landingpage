import React from 'react';
import { motion } from 'framer-motion';
import { FaTwitter, FaDiscord, FaTelegram, FaGithub, FaMedium } from 'react-icons/fa';

const socialLinks = [
  {
    name: 'Twitter',
    icon: FaTwitter,
    url: 'https://twitter.com/flipflop'
  },
  {
    name: 'Discord',
    icon: FaDiscord,
    url: 'https://discord.gg/flipflop'
  },
  {
    name: 'Telegram',
    icon: FaTelegram,
    url: 'https://t.me/flipflop'
  },
  {
    name: 'GitHub',
    icon: FaGithub,
    url: 'https://github.com/flipflop'
  },
  {
    name: 'Medium',
    icon: FaMedium,
    url: 'https://medium.com/flipflop'
  }
];

export const SocialLinks = () => {
  return (
    <section className="py-16 px-4 social-links-pattern">
      <div className="max-w-6xl mx-auto text-center">
        <div 
          className="flex justify-center items-center gap-8 flex-wrap"
        >
          {socialLinks.map((link, index) => (
            <a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="social-link w-14 h-14 flex items-center justify-center bg-white rounded-full"
            >
              <link.icon className="text-2xl text-black" />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};
