import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        light: "#F5F5F5",
        grey: "#8C8C8C",
        dark: "#0D0D0D",
        "dark-2": "#0F0A08",
        orange: "#FF5C00",
        "blue-light": "#00C9E0",
        "green-light": "#41EAD4",
        purple: "#BE41EA",

        "blue-dark": "#011627",
        "blue-dark-1": "#011627",
        "blue-dark-2": "#133149",
        black: "#0B0B0D",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        quicksand: ["Quicksand", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
