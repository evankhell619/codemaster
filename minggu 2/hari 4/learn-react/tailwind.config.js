/** @type {import('tailwindcss').Config} */
export default {
  content: ["index.html" , "./src/**/*.{js,ts,tsx,jsx}"],
  theme: {
    extend: {
      colors : {
        primary : '#ff49db',
        secondary : '#1fb6ff'
      }
    },
  },
  plugins: [],
}

