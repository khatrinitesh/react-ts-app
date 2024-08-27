/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'frankenstein': '#2b921c',
        'cta': '#fff',
        'wave-col': '#141414',
        'wave-alpha': '#14141480',
      },
      fontFamily: {
        'comforter': ['Comforter Brush', 'cursive'],
      },
      animation: {
        frankenstein: 'frankenstein 5s ease-in infinite',
      },
      keyframes: {
        frankenstein: {
          '0%': { transform: 'translate(-50%, -75%) rotate(0deg)' },
          '100%': { transform: 'translate(-50%, -75%) rotate(360deg)' },
        },
      },
    },
  },
  plugins: [],
}

