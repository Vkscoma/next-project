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
        secondary: "#b8a2d6",
        third: "#7a40ff",
        fourth: "#006b4a",
        fifth: "#00a47a",
        sixth: "#c4fcef",
        blue1: "#008dff",
        blue2: "#00cbff",
        blueGreen: "#50fbdf",
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
    themes: ["pastel"],
  },
};
export default config;
