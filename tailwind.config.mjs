/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      screens: {
        xs: "475px",
      },
      gridTemplateColumns: {
        responsive: "repeat(auto-fit, minmax(200px, 1fr))",
      },
      colors: {
        separatorPrint:
          "#e7e5e480" /* equivalent to stone-200/50 -> horizontal separator for items in flex display PRINT: */,
        separator:
          "#44403c99" /* equivalent to stone-700/60 -> horizontal separator for items in flex display */,
      },
      backgroundColor: {
        main: "#050c23",
      },
      textColor: {
        mainTitle: "#fafaf9" /* equivalent to stone-50 -> h1 */,
        subtitle: "#e7e5e4cc" /* equivalent to stone-200/80 -> h2 */,
        sectionTitle: "#fafaf9e6" /* equivalent to stone-50/90 -> h3 */,
        inherit: "inherit",
      },
      fontSize: {
        sizeInherit: "inherit",
      },
      typography: {
        DEFAULT: {
          css: {
            color: "rgb(180, 180, 180)",
          },
        },
      },
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    // ...
  ],
};
