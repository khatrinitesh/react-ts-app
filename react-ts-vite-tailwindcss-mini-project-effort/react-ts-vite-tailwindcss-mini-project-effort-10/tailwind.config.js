/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'custom-background': "url('./public/img/gateway-of-india.jpg')"
      },
      blur: {
        'custom': '8px'
      }
    },
  },
  plugins: [ 
  ],
}

