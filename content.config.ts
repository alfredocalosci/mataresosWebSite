import { defineCollection, defineContentConfig, z } from '@nuxt/content'

const commonBlogSchema = z.object({
  title: z.string().min(5).max(100),
  description: z.string().max(500),
  publishedAt: z.date(),
  image: z.string().optional()
});

const commonWebSchema = z.object({
  slug: z.string(),
  description: z.string().max(500),
  section: z.enum(['home', 'castells', 'colla', 'contacte']),
  order: z.number().min(0)
});

export default defineContentConfig({
  collections: {
    blog_ca: defineCollection({
      type: 'page',
     // Load every file inside the `content` directory
      source: {
        include: "blog/ca/**",
        exclude: ["**/.*"],
        prefix: "ca",
      },
      // Define custom schema for docs collection
      schema: commonBlogSchema
    }),
    blog_it: defineCollection({
      type: 'page',
     // Load every file inside the `content` directory
      source: {
        include: "blog/it/**",
        exclude: ["**/.*"],
        prefix: "it",
      },
      // Define custom schema for docs collection
      schema: commonBlogSchema
    }),
    web_ca: defineCollection({
      type: 'page',
      // Load every file inside the `content` directory
      source: {
        include: "web/ca/**",
        exclude: ["**/.*"],
        prefix: "ca",
      },
      // Define custom schema for docs collection
      schema: commonWebSchema
    }),
    web_it: defineCollection({
      type: 'page',
      // Load every file inside the `content` directory
      source: {
        include: "web/it/**",
        exclude: ["**/.*"],
        prefix: "it",
      },
      // Define custom schema for docs collection
      schema: commonWebSchema
    })
  }
})
