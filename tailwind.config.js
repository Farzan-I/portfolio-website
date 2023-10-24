/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#fe0039",
        secondary: "#e000fe",
        

        // No reference yet
        tertiary: "#082744",
        // #052a4c
        // #151030 - old tertiary

        // No reference yet
        quaternary: "#8c0623",

        // For contact background
        quinary: "#0e0e0ebc",

        "black-100": "#101437",
        "black-200": "#090325",
        "dark-grey": "#050505",
        "white-100": "#f0ead6",
        "yellow-text": "#eda53a",
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