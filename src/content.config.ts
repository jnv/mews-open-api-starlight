import { defineCollection, z } from 'astro:content';
import { docsLoader } from '@astrojs/starlight/loaders';
import { docsSchema } from '@astrojs/starlight/schema';
import { topicSchema } from 'starlight-sidebar-topics/schema'

// Schema for release notes
const releaseNotesSchema = z.object({
  title: z.string(),
  type: z.enum(['enhancement', 'feature', 'deprecation', 'breaking', 'docs']),
  release: z.string().regex(/^\d{4}-\d{2}(-\d{2})?$/), // YYYY-MM or YYYY-MM-DD
  scope: z.enum(['connector-api', 'pos-api', 'be-api', 'chm-api', 'general']),
  operation: z.string().optional(),
});

export const collections = {
  docs: defineCollection({
    loader: docsLoader(),
    schema: docsSchema({ extend: topicSchema })
  }),
  'release-notes': defineCollection({
    type: 'content',
    schema: releaseNotesSchema,
  }),
}