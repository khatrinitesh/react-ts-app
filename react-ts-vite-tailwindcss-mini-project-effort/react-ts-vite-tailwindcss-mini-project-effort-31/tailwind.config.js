/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        color1:'#ff0000',
        color2:'#ff0010',
      },
      fontSize:{
        f8:'8px',
        f10:'10px',
        f12:'12px',
        f14:'14px',
        f16:'16px',
        f18:'18px',
        f20:'20px',
        f22:'22px',
        f24:'24px',
        f26:'26px',
        f28:'28px',
        f30:'30px',
      }
    },
  },
  plugins: [],
}

