/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        lightGreen: '#E9F5E7',
        lightGreen2: '#DFFBD5',
        black: '#121415',
        grey: '#33383D',
        deepGreen: '#1A7408',
        comGreen: '#D3F5C6',
        orange: '#D47F00'
      }
    },
  },
  plugins: [],
}

