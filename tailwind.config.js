/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        pop : 'Poppins'
      },
      colors: {
        shawgreen: '#0A5438'
      },
    },
  },
  plugins: [],
}

