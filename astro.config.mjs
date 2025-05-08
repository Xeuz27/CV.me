import { defineConfig } from "astro/config";

import tailwind from "@astrojs/tailwind";

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: "https://yidev.vercel.app",
  integrations: [
    tailwind(),
    sitemap({
      lastmod: new Date(),
    }),
  ],
  i18n: {
    defaultLocale: "es",
    locales: ["en", "es"],
  },
  build: {
    format: "directory",
  },
  trailingSlash: "never",
});
