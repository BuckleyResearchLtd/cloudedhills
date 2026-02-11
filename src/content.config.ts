import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const essays = defineCollection({
	// Load Markdown and MDX files in the `src/content/essay/` directory.
	loader: glob({ base: './src/content/essays', pattern: '**/*.{md,mdx}' }),
	// Type-check frontmatter using a schema
	schema: ({ image }) =>
		z.object({
			title: z.string(),
			description: z.string(),
			// Transform string to Date object
			pubDate: z.coerce.date(),
			updatedDate: z.coerce.date().optional().nullable(),
			heroImage: image().optional().nullable(),
			colour: z.string().optional().nullable(),
		}),
});

const musings = defineCollection({
	// Load Markdown and MDX files in the `src/content/essay/` directory.
	loader: glob({ base: './src/content/musings', pattern: '**/*.{md,mdx}' }),
	// Type-check frontmatter using a schema
	schema: ({ image }) =>
		z.object({
			title: z.string(),
			description: z.string(),
			// Transform string to Date object
			pubDate: z.coerce.date(),
			updatedDate: z.coerce.date().optional().nullable(),
			heroImage: image().optional().nullable(),
			colour: z.string().optional().nullable(),
			noProof: z.boolean().optional().nullable(),
		}),
});


const updates = defineCollection({
	// Load Markdown and MDX files in the `src/content/essay/` directory.
	loader: glob({ base: './src/content/updates', pattern: '**/*.{md,mdx}' }),
	// Type-check frontmatter using a schema
	schema: ({ image }) =>
		z.object({
			title: z.string(),
			description: z.string(),
			// Transform string to Date object
			pubDate: z.coerce.date(),
			updatedDate: z.coerce.date().optional().nullable(),
			heroImage: image().optional().nullable(),
			colour: z.string().optional().nullable(),
			noProof: z.boolean().optional().nullable(),
		}),
});

const notes = defineCollection({
	// Load Markdown and MDX files in the `src/content/notes/` directory.
	loader: glob({ base: './src/content/notes', pattern: '**/*.{md,mdx}' }),
	// Type-check frontmatter using a schema
	schema: ({ image }) =>
		z.object({
			title: z.string(),
			description: z.string(),
			// Transform string to Date object
			pubDate: z.coerce.date(),
			updatedDate: z.coerce.date().optional(),
			heroImage: image().optional().nullable(),
			colour: z.string().optional().nullable(),
			unfinished: z.boolean().optional().nullable(),
		}),
});

const misc = defineCollection({
	// Load Markdown and MDX files in the `src/content/essay/` directory.
	loader: glob({ base: './src/content/misc', pattern: '**/*.{md,mdx}' }),
	// Type-check frontmatter using a schema
	schema: () => z.object({
		title: z.string()
	})
});

export const collections = { essays, musings, updates, notes, misc};
