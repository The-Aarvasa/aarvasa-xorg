/** @type {import('tailwindcss').Config} */
import scrollbarHide from 'tailwind-scrollbar-hide'
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
       animation: {
        'spin-slow': 'spin 4s linear infinite',
        'spin-slower': 'spin 8s linear infinite', // even slower option
      },
      animation: {
      slide: 'slide 30s linear infinite',
    },
    keyframes: {
      slide: {
        '0%': { transform: 'translateX(0)' },
        '100%': { transform: 'translateX(-50%)' }, // slides left to show repeated set
      },
    },
    },
  },
  plugins: [scrollbarHide],
}