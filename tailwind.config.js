/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontFamily: {
      "iran-sans": "iran-sans",
    },
    container: {
      "center": true
    },
    extend: {
      screens: {
        "xs": "550px"
      }
    },
  },
  plugins: [],
}

