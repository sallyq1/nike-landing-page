import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/sections/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "20px",
        lg: "80px",
      },
      screens: {
        sm: "375px",
        md: "768px",
        lg: "1200px",
      },
    },
    screens: {
      sm: "375px",
      md: "768px",
      lg: "1200px",
    },

    
    extend: {
      fontFamily: {
        futura: ['Futura', 'sans-serif'],
        'futura-condensed': ['Futura Condensed', 'sans-serif'],
      },

      fontWeight: {
        light: "300",
        normal: "400",
        medium: "600",
        bold: "700",
        heavy: "800",
        'extra-black': "900", // Add this line for Futura Extra Black
      },


    },
  },
  plugins: [],
};
export default config;

