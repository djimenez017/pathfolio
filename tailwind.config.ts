import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        purple: "#121c3d;",
        yellow: "#f2c917",
        black: "#343633ff",
        white: "#ffffff",
        blue: "#585fd3",
        green: "#22adbc",
        pink: "#ec478f",
      },
    },
  },
  plugins: [],
};
export default config;
