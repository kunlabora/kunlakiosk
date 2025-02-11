/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        yellow: "#f0d096",
        purple: "#652cb3",
        green: "#84d9a9",
        red: "#f08c75",
        black: "#546aec",
        blue: "#80b0fb",
      },
    },
  },
  plugins: [],
};
