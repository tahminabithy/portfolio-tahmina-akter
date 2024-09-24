/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'custom-shadow': '0 0 30px 10px rgba(118, 134, 195, 0.207)', 
      },
      colors: {
        'baseColor':'rgb(2 132 199)',
        "eduColor": 'rgb(149 157 173)',
        'skillColor':'#212121',
        // 'skillShadow': '0 0 30px rgba(194,110,143,.207)'
      },
      keyframes: {
        blink: {
          '0%, 100%': { opacity: 1 },
          '50%': { opacity: 0 },
        },
      },
      animation: {
        blink: 'blink 1s infinite',
      },
    },
  },
  plugins: [require('daisyui')],
  daisyui:{
    themes:['light', 'dark'],
  }
}