const { Palanquin, Montserrat } = require('next/font/google');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./Components/**/*.{js,ts,jsx,tsx,mdx}",
    "./sections/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontSize: {
      xs: ["12px", "16px"],
      sm: ["14px", "20px"],
      base: ["16px", "19.5px"],
      lg: ["18px", "21.94px"],
      xl: ["20px", "24.38px"],
      "2xl": ["24px", "29.26px"],
      "3xl": ["28px", "50px"],
      "4xl": ["48px", "58px"],
      "8xl": ["96px", "106px"],
    },
    extend: {
      fontFamily: {
        Palanquin: ["Palanquin", "sans-serif"],
        Montserrat: ["Montserrat", "sans-serif"],
      },
      colors: {
        primary: "#ECEEFF",
        "coral-red": "#FF6452",
        "slate-gray": "#6D6D6D",
        "pale-blue": "#F5F6FF",
        "white-400": "rgba(255, 255, 255, 0.80)",
      },
      boxShadow: {
        "3xl": "0 10px 40px rgba(0, 0, 0, 0.1)",
      },
      backgroundImage: {
        card: "https://raw.githubusercontent.com/adrianhajdin/nike_landing_page/cfda8c5841b6e57f644f19aa10c4329553162a15/src/assets/images/thumbnail-background.svg",
        hero: "https://raw.githubusercontent.com/adrianhajdin/nike_landing_page/cfda8c5841b6e57f644f19aa10c4329553162a15/src/assets/images/collection-background.svg",
      },
      screens: {
        wide: "1440px",
      },
    },
  },
  plugins: [],
};
