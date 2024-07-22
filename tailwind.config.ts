import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      regular: "regular",
      medium: "medium",
      semibold: "semibold",
      bold: "bold",
      black: "black",
    },
    extend: {
      screens: {
        sm: "280px",
        ls: "684px",
        ms: "703px",
        md: "744px",
        lg: "1200px",
        xl: "1440px",
      },
      colors: {
        primary: "#939393",
        secondary: "#009129",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
