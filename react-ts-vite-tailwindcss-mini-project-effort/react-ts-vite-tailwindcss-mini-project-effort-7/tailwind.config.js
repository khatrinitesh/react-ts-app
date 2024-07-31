/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#007bff',
        secondary: '#6c757d',
        tertiary: '#f8f9fa',
        textColorPrimary: '#343a40',
    },
    fontSize: {
        base: '16px', // Default font size if needed
    },
    transitionProperty: {
        'all': 'all',
        'transform': 'transform',
        'opacity': 'opacity',
    },
    keyframes: {
        scale: {
            '0%': { transform: 'scale(1)' },
            '100%': { transform: 'scale(1.1)' },
        },
        fade: {
            '0%': { opacity: '1' },
            '100%': { opacity: '0.8' },
        },
        rotate: {
            '0%': { transform: 'rotate(0deg)' },
            '100%': { transform: 'rotate(15deg)' },
        },
    },
    animation: {
        'scale': 'scale 0.3s ease',
        'fade': 'fade 0.3s ease',
        'rotate': 'rotate 0.3s ease',
    },
    },
  },
  plugins: [],
}

