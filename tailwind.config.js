/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      keyframes: {
        swing: {
          '0%, 100%': { transform: 'rotate(45deg)' },
          '50%': { transform: 'rotate(-45deg)' },
        },
      },
      animation: {
        swing: 'swing 2s infinite ease-in-out',
      },
    },
  },
  plugins: [],
};