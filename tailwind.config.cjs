/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    screens: {
      midscreen: {'max': '768px'},
      minscreen: {'max': '480px'},     
      bigscreen: {'max': '800px'},     
    }
  },
  plugins: [],
}