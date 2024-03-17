/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{html,ts}"],
  theme: {
    screens: {
      md: "49em",
      lg: "75em",
    },
    colors: {
      // Light
      black: "#000112",
      // Dark
      white: "#FFF",
      "dark-grey": "rgba(43, 44, 55, 1)",
    },
    fontFamily: {
      Jakarta: ["Plus Jakarta Sans", "serif"],
    },
    extend: {},
  },
  plugins: [],
};
