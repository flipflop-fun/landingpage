import React from 'react';
import { Logo } from './Logo';
import ThemeToggle from './ThemeToggle';
import { PATTERNS } from '../constants/patterns';
import markdownContent from '../asserts/markdown/PrivacyPolicy.md?raw';
import ReactMarkdown from 'react-markdown';

export const PrivacyPolicyPage = () => {
  return (
    <div className={`min-h-screen transition-colors duration-300 ${PATTERNS.SQUARES} bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-200`}>
      <ThemeToggle />
      <Logo />
      <main className="pt-32 pb-16 px-4 md:px-8 max-w-4xl mx-auto">
        <div className="prose dark:prose-invert max-w-none">
          <ReactMarkdown>{markdownContent}</ReactMarkdown>
        </div>
      </main>

      <footer className="text-center py-8 border-t border-gray-200 dark:border-gray-700">
        <p className="text-gray-600 dark:text-gray-400 text-sm">
          <a href="/" className="hover:underline">Back to Home</a>
        </p>
        <p className="text-gray-500 dark:text-gray-500 text-xs mt-2">
          © 2025 Proof of Mint. All rights reserved.
        </p>
      </footer>
    </div>
  );
};