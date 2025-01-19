import { cleanHtml } from "./cleanHtml";

export function getReadingTime(content: string) {
  const WORDS_PER_MINUTE = 150;
  if (!content) return;
  const clean = cleanHtml(content);
  const numberOfWords = clean.split(/\s/g).length;
  return Math.ceil(numberOfWords / WORDS_PER_MINUTE);
}
