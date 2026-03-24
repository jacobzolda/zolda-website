import { defineCollection, z } from "astro:content";

const projects = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    section: z.enum(["cinematography", "game-design", "mocap", "vox", "hardware", "software"]),
    tags: z.array(z.string()).default([]),
    role: z.array(z.string()).default([]),
    tools: z.array(z.string()).default([]),
    description: z.string(),
    media: z
      .object({
        youtube: z.string().url().optional(),
        vimeo: z.string().url().optional(),
        images: z.array(z.string()).default([])
      })
      .default({ images: [] }),
    links: z
      .object({
        github: z.string().url().optional(),
        itch: z.string().url().optional(),
        pdf: z.string().url().optional(),
        writeup: z.string().url().optional(),
        press: z.string().url().optional()
      })
      .default({})
  })
});

export const collections = { projects };
