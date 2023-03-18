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
      },
      pink: {
        DEFAULT: "#E55986",
      },
      white: {
        DEFAULT: "#fff",
        smoke: "#ECEDEF",
      },
    },
  },
  plugins: [],
};
