/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    fontFamily: {
      "BowlbyOne": ["Bowlby One", 'serif'],
    },
    extend: {
      backgroundImage: {
        'blue-gradient':
            "linear-gradient(to right bottom, #768AF4, 70%, #1400FF)",
      },
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}