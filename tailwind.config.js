// tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['"Poppins"', 'sans-serif'],
        quicksand: ['"Quicksand"', 'sans-serif'],
        'indie-flower': ['"Indie Flower"', 'cursive'] // Added Quicksand
      },
      colors: {
        'muted-foreground': '#71717a', // Added this color
      },
      keyframes: {
        gradient: {
          '0%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' },
        },
        'fade-in-up': { // Added this animation
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        gradient: 'gradient 8s linear infinite',
        'fade-in-up': 'fade-in-up 0.5s ease-out forwards', // Added this
      },
    },
  },
  plugins: [],
};