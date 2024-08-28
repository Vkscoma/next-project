import type { Config } from "tailwindcss";
import daisyui from "daisyui"

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
      gridTemplateColumns: {
        '70/30': '70% 28%',
      },
      colors: {
        primary: "#4b18e8",
        secondary: "#4b4453",
        third: "#b0a8b9",
        fourth: "#006b4a",
        fifth: "#00a47a",
        accent_dark: "#1f1926",
        accent_white: "#fcf8ff",
        light: "#f5f5f5",
        dark: "#333333",
      },
    },
  },
  plugins: [
    require("daisyui"),
  ],
  daisyui: {
    themes: ["cupcake", "corporate"],
  },
};
export default config;
