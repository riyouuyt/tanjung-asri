import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: 
    {
      fontFamily: {
        nunito: ['var(--font-nunito)', 'sans-serif'],
        quicksand: ['var(--font-quicksand)', 'sans-serif'],
        fredoka: ['var(--font-fredoka)', 'cursive'],
        comic: ['var(--font-comic)', 'cursive']
      }
    },
  },
  plugins: [],
} satisfies Config;
