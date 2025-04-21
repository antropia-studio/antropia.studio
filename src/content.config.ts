import { glob } from 'astro/loaders';
import { defineCollection, z } from 'astro:content';

/**
 * Schema to validate frontmatter data
 */
const postSchema = z.object({
  title: z.string(),
  description: z.string(),
  pubDate: z.coerce.date(),
  updatedDate: z.coerce.date().optional(),
  heroImage: z.string().optional(),
});

const blog = defineCollection({
  loader: glob({ base: './src/content/blog', pattern: '**/*.{md,mdx}' }),
  schema: postSchema,
});

const drafts = defineCollection({
  loader: glob({ base: './src/content/drafts', pattern: '**/*.{md,mdx}' }),
  schema: postSchema,
});

export const collections = { blog, drafts };
