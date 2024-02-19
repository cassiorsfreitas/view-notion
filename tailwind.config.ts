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
        primary: "#D9D9D9",
        hover: "#1B58BF",
      },
      fontSize: {
        sm: "0.80rem",
      },
      borderRadius: {
        md: "0.275rem",
      },
    },
  },
  plugins: [],
};
export default config;
