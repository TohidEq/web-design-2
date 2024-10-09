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
        "grey-2": "#222222",
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
        "gradient-orange-center":
          "linear-gradient(90deg,hsla(17, 30%, 5%, 1) 2%,hsla(22, 99%, 45%, 1) 40%,hsla(22, 100%, 50%, 1) 50%,hsla(22, 99%, 45%, 1) 60%,hsla(17, 30%, 5%, 1) 98%)",
        "gradient-orange-full":
          "linear-gradient(90deg,hsla(22, 99%, 45%, 1) 2%,hsla(22, 99%, 45%, 1) 40%,hsla(22, 99%, 45%, 1) 50%,hsla(22, 99%, 45%, 1) 60%,hsla(22, 99%, 45%, 1) 98%)",
        "gradient-dark-soft":
          "linear-gradient(23.96deg, #000000 -14.07%, rgba(22, 19, 26, 0) 97.47%)",
      },
      dropShadow: {
        noglow: ["0px 0px 0px #00000000"],
        glow: ["0px 0px 8px #D3D5FD"],
        glow0: ["0px 0px 11px #D3D5FDa0"],
        glow2: ["0px 0px 8px #D3D5FD", "0px 0px 8px #D3D5FD"],
        "glow-btn-1": ["0px 2px 4px #ffffff"],
        "glow-btn-0-orange": ["0px 0px 8px #FF5C00"],
        "glow-btn-1-orange": ["0px 0px 18px #FF5C00"],
        "glow-btn-2-orange": ["0px 0px 24px #FF5C00"],
      },
      fontFamily: {
        quicksand: ["Quicksand", "sans-serif"],
        outlined: ["Londrina Outline", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
