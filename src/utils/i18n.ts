import english from "@data/cv-english.json";
import spanish from "@data/cv.json";

import { siteConfig as englishData } from "@data/site.config-english.ts";
import { siteConfig as spanishData } from "@data/site.config.ts";

export const languages = {
  en: "English",
  es: "Español",
};

export const getI18N = (currentLocale?: string) => {
  if (currentLocale === "en") return english;
  if (currentLocale === "es") return spanish;
  return english;
};
export const getI18NData = (currentLocale?: string) => {
  if (currentLocale === "en") return englishData;
  if (currentLocale === "es") return spanishData;
  return englishData;
};

export function getLangFromUrl(url: URL) {
  const [, lang] = url.pathname.split("/");
  if (lang in languages) return lang;
  return "";
}
