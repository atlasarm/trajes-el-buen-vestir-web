/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        rojoMarca: '#C1121F', 
        grisMarca: '#333333', 
        grisClaro: '#F5F5F5',
        negro: '#111111',
      }
    },
  },
  plugins: [],
}