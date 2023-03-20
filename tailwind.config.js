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
        100: "#CDD0D4",
        200: "#BFC0C5",
        300: "#DCDDDE",
      },
      pink: {
        DEFAULT: "#E55986",
      },
      white: {
        DEFAULT: "#fff",
        smoke: "#FAFAFA",
      },
      yellow: {
        rating: "#F6B01E",
      },
    },
  },
  plugins: [],
};
