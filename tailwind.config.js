/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
      },
      colors: {
        lime: {
          50: '#F7FDE8',
          100: '#EEFAC6',
          200: '#E1F694',
          300: '#D2F05B',
          400: '#C0E72B', // Main bright lime accent
          500: '#A6CC17',
          600: '#84A40E',
          700: '#647D10',
          800: '#4F6213',
          900: '#435315',
        },
        surface: {
          light: '#FFFFFF',
          dark: '#181E29',
        },
        canvas: {
          light: '#F4F6F8',
          dark: '#0F131C',
        },
      },
      borderRadius: {
        'card': '12px',
      },
      boxShadow: {
        'card': '0 2px 12px -2px rgba(0, 0, 0, 0.05), 0 1px 4px -1px rgba(0, 0, 0, 0.03)',
        'card-hover': '0 8px 24px -4px rgba(0, 0, 0, 0.08), 0 3px 8px -2px rgba(0, 0, 0, 0.04)',
        'card-glow': '0 0 30px rgba(192, 231, 43, 0.25)',
      },
    },
  },
  plugins: [],
}
