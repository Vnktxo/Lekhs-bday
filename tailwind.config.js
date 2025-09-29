// tailwind.config.js

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    // your content paths
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", 
  ],
  theme: {
    extend: {
      // Add this entire block
      keyframes: {
        gradient: {
          '0%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' },
        },
      },
      animation: {
        gradient: 'gradient 8s linear infinite',
      },  
       fontFamily: {
        klee: ['"Klee One"', 'cursive'],
        poppins: ['"Poppins"', 'sans-serif'],
      },
    },
  },
  plugins: [],
};