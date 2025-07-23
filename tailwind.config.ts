// --- MODIFIED FILE: tailwind.config.ts ---
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: 'class', // This enables our manual dark mode switching
  theme: {
    extend: {
      // New brand colors from Coolors palette
      colors: {
        primary: '#7098FC',            // Soft Blue
        secondary: '#74391E',          // Rich Brown
        accent: '#E24A14',             // Vivid Orange
        background: '#262727',         // Dark Base
        muted: '#788AFC',              // Light Indigo

        // For use in components or charts
        brandBlue: '#7098FC',
        brandBrown: '#74391E',
        brandDark: '#262727',
        brandOrange: '#E24A14',
        brandIndigo: '#788AFC',
      },
      // Here we define the font families
      fontFamily: {
        sans: ['Open Sans', 'sans-serif'],
        serif: ['Playfair Display', 'serif'],
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        }
      },
      animation: {
        marquee: 'marquee 40s linear infinite',
      }
    },
  },
  plugins: [],
};
export default config;