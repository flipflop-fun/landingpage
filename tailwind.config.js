/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class', // 启用深色模式
  theme: {
    extend: {
      colors: {
        // 主色调
        primary: {
          50: '#fff1f1',
          100: '#ffe1e1',
          500: '#FF4D4D',
          600: '#e63946',
          700: '#d62828',
          900: '#a4161a',
        },
        secondary: {
          50: '#f0f0ff',
          100: '#e1e1ff',
          500: '#4A4FFF',
          600: '#3d42f5',
          700: '#2f35eb',
          900: '#1a1fd4',
        },
        accent: {
          50: '#fffdf0',
          100: '#fffbe1',
          500: '#FFD700',
          600: '#f5c842',
          700: '#ebb935',
          900: '#d4a017',
        },
        // 深色模式颜色
        dark: {
          bg: '#0a0a0a',
          surface: '#1a1a1a',
          border: '#333333',
          text: '#ffffff',
          'text-secondary': '#cccccc',
        },
        // 浅色模式颜色
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
      },
      screens: {
        'xs': '475px',
      },
    },
  },
  plugins: [],
}