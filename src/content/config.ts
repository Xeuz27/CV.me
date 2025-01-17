import { defineCollection, z } from "astro:content";

const caseStudies = defineCollection({
  schema: z.object({
    title: z.string(),
    author: z.string(),
    img: z.string(),
    description: z.string(),
    date: z.string().or(z.date()),
  }),
});

export const collections = { caseStudies };
