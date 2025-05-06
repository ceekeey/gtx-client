/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#07021c", // Custom primary color
        secondary: "#fafafa", // Custom secondary color
        accent: "#0a0521", // Custom accent color
      },
      screens: {
        xs: "475px",
        "3xl": "1600px",
      },
    },
  },
  plugins: [require("daisyui")],
};
