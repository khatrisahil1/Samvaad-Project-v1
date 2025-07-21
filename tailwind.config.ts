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
      // Here we define the "Serene Sage & Stone" color palette
      colors: {
        stone: {
          DEFAULT: '#F5F5F4',   // Light Stone Gray (Light BG)
          100: '#FFFFF0',     // Warm Ivory (Light Card BG)
        },
        slate: {
          DEFAULT: '#36454F',   // Dark Slate (Light Text / Dark BG)
          800: '#475867',     // Muted Dark Slate (Dark Card BG)
        },
        sage: {
          DEFAULT: '#879A74',   // Muted Sage Green (Light Accent)
          light: '#A7B894',    // Brighter Sage Green (Dark Accent)
        },
        orangeDark: 'hsl(var(--color-orange-dark))',
        teal: 'hsl(var(--color-teal))',
        indigo: 'hsl(var(--color-indigo))',
        offwhite: 'hsl(var(--color-offwhite))',
        orangeVivid: 'hsl(var(--color-orange-vivid))',
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