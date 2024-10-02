/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class', 
  theme: {
    extend: {
      boxShadow: {
        'custom-shadow': '0 0 30px 10px rgba(118, 134, 195, 0.207)', 
      },
      colors: {
        'baseColor':'rgb(2 132 199)',   
        // 'baseColor':'#e9d5a1',   
        "eduColor": 'rgb(149 157 173)',
        'skillColor':'#212121',
        'lightColor':'rgb(243 244 246)',
        // 'lightColor':'#e9d5a1'
       
      
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
        blink: {
          '0%, 100%': { opacity: 1 },
          '50%': { opacity: 0 },
        },
      },
      animation: {
        fadeIn: 'fadeIn 2s ease-in-out',
        blink: 'blink 1s infinite',
      },
      
    },
  },
  plugins: [require('daisyui')],
  daisyui:{
    themes:['light', 'dark'],
  }
}