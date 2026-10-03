/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'space-dark': '#0B0D17',
        'space-light': '#D0D6F9',
        'space-white': '#FFFFFF',
      },
      fontFamily: {
        bellefair: ['"Bellefair"', 'serif'],
        barlow: ['"Barlow"', 'sans-serif'],
        'barlow-condensed': ['"Barlow Condensed"', 'sans-serif'],
      },
      letterSpacing: {
        'nav': '2.7px',
        'subhead-1': '2.35px',
        'subhead-2': '4.75px',
        'heading-5': '4.72px',
      },
      keyframes: {
        'fade-in': {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-scale': {
          '0%': { opacity: '0', transform: 'scale(0.95)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        'spin-slow': {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        }
      },
      animation: {
        'fade-in': 'fade-in 0.4s ease-out forwards',
        'fade-scale': 'fade-scale 0.4s ease-out forwards',
        'spin-slow': 'spin-slow 120s linear infinite',
      }
    },
  },
  plugins: [],
}
