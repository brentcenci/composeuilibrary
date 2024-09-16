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
      'mono': ["Space Mono", 'ui-monospace', 'SFMono-Regular'],
    },
    extend: {
      backgroundImage: {
        'blue-gradient':
            "linear-gradient(to right bottom, #768AF4, 45%, #1400FF, 75%, #768AF4)",
      },
      transitionProperty: {
        'bg': 'background-image',
      }
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}