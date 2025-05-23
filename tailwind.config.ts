import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        backgroundColor: {
          primary: "rgb(64, 94, 245)",
          secondary: "rgb(46, 229, 242)",
        }
      },
    },
  },
  plugins: [],
} satisfies Config;
