/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#FF4D4D',
        secondary: '#4A4FFF',
        accent: '#FFD700',
      },
      fontFamily: {
        'archivo': ['Archivo Black', 'sans-serif'],
      },
    },
  },
  plugins: [],
}