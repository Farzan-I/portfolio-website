/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#fe0039",
        secondary: "#e000fe",
        tertiary: "#0e0e0ebc",
        "black-100": "#101437",
        "white-100": "#f0ead6",
      },
      boxShadow: {
        card: "0px 35px 120px -15px #211e35",
      },
      screens: {
        xs: "450px",
      },
      backgroundImage: {
        "hero-pattern": "url('/src/assets/bg.jpeg')",
      },
    },
  },
  plugins: [],
};