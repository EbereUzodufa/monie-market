/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
    colors: {
      transparent: "transparent",
      green: {
        DEFAULT: "#4daa96",
      },
      black: {
        DEFAULT: "#060607",
      },
      gray: {
        DEFAULT: "#2a2d40",
      },
      pink: {
        DEFAULT: "#E55986",
      },
      white: {
        DEFAULT: "#000",
        smoke: "#FEFEFE",
      },
    },
  },
  plugins: [],
};
