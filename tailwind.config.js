/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class', 
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#f0fdf4',
          100: '#dcfce7',
          200: '#bbf7d0',
          300: '#86efac',
          400: '#4ade80',
          500: '#2cd47a',
          600: '#16a34a',
          700: '#15803d',
          800: '#166534',
          900: '#14532d',
        },
        primary: {
          50: '#f0fdf4',
          100: '#dcfce7',
          200: '#bbf7d0',
          300: '#86efac',
          400: '#4ade80',
          500: '#2cd47a',
          600: '#16a34a',
          700: '#15803d',
          800: '#166534',
          900: '#14532d',
        },
        secondary: {
          50: '#f8fafc',
          100: '#f1f5f9',
          200: '#e2e8f0',
          300: '#cbd5e1',
          400: '#94a3b8',
          500: '#64748b',
          600: '#475569',
          700: '#334155',
          800: '#1e293b',
          900: '#0f172a',
        },
        accent: {
          50: '#fffdf0',
          100: '#fffbe1',
          200: '#fff7c2',
          300: '#fff08a',
          400: '#ffe54d',
          500: '#FFD700',
          600: '#f5c842',
          700: '#ebb935',
          800: '#d4a017',
          900: '#a67c00',
        },
        pixel: {
          black: '#000000',
          'dark-gray': '#1a1a1a',
          'medium-gray': '#333333',
          'light-gray': '#666666',
        },
        dark: {
          bg: '#0a0a0a',
          surface: '#1a1a1a',
          border: '#333333',
          text: '#ffffff',
          'text-secondary': '#cccccc',
        },
        light: {
          bg: '#ffffff',
          surface: '#f8f9fa',
          border: '#e9ecef',
          text: '#212529',
          'text-secondary': '#6c757d',
        }
      },
      fontFamily: {
        'archivo': ['Archivo Black', 'sans-serif'],
        'pixel': ['RetroPixelArcade', 'monospace'],
        'pixel-mono': ['RetroPixelCuteMono', 'monospace'],
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-in-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'bounce-gentle': 'bounceGentle 2s infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
        'glow-green': 'glowGreen 2s ease-in-out infinite alternate',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        bounceGentle: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        glow: {
          '0%': { boxShadow: '0 0 5px rgba(255, 77, 77, 0.5)' },
          '100%': { boxShadow: '0 0 20px rgba(255, 77, 77, 0.8)' },
        },
        glowGreen: {
          '0%': { boxShadow: '0 0 5px rgba(44, 212, 122, 0.5)' },
          '100%': { boxShadow: '0 0 20px rgba(44, 212, 122, 0.8)' },
        },
      },
      screens: {
        'xs': '475px',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}