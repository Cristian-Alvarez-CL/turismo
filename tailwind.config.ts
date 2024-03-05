import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        green: {
          "50": "#f3fcf1",
          "100": "#e3f9df",
          "200": "#c8f2c0",
          "300": "#a9ea9f",
          "400": "#66d256",
          "500": "#40b82f",
          "600": "#319722",
          "700": "#29771e",
          "800": "#235f1c",
          "900": "#1e4e19",
          "950": "#0a2b08",
        },
      },
    },
  },
  plugins: [],
  darkMode: 'class',
};
export default config;
