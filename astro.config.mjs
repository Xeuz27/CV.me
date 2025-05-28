import { defineConfig, envField } from "astro/config";

import tailwind from "@astrojs/tailwind";

import sitemap from "@astrojs/sitemap";

import vercel from "@astrojs/vercel";
// https://astro.build/config
export default defineConfig({
  site: "https://yidev.vercel.app",
  integrations: [
    tailwind(),
    sitemap({
      lastmod: new Date(),
    }),
  ],
  env: {
    schema: {
      SERVICE_ID: envField.string({ context: "server", access: "secret" }),
      TEMPLATE_ID: envField.string({ context: "server", access: "secret" }),
      PUBLICKEY: envField.string({ context: "server", access: "secret" }),
      PRIVATEKEY: envField.string({ context: "server", access: "secret" }),
    },
  },
  i18n: {
    defaultLocale: "es",
    locales: ["en", "es"],
  },
  trailingSlash: "ignore",
  build: {
    format: "directory",
  },
  adapter: vercel(),
});
