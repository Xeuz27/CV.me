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
          "#37415199" /* equivalent to gray-700/60 -> horizontal separator for items in flex display */,
      },
      backgroundColor: {
        main: "#050c23",
      },
      textColor: {
        mainTitle: "#f9fafb" /* equivalent to gray-50 -> h1 */,
        subtitle: "#e5e7ebcc" /* equivalent to gray-200/80 -> h2 */,
        sectionTitle: "#f9fafbe6" /* equivalent to gray-50/90 -> h3 */,
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
