# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

Marketing/content site for "Mataresos de l'Alguer", a Catalan castellers (human tower) group. Built with Nuxt 4, @nuxt/content, @nuxt/ui (Tailwind v4-based), and @nuxtjs/i18n. Bilingual: Catalan (`ca`, default) and Italian (`it`).

## Requirements

Current major versions: `nuxt@4.5.0`, `@nuxt/content@3.15.0`, `@nuxt/ui@4.10.0`.

Node: Nuxt 4.5's `engines` field requires `^22.19.0 || ^24.11.0 || >=26.0.0`. Locally we use Node 24.x LTS via `nvm` (not the machine's `nvm` default, switched manually per-session). There is deliberately no `.nvmrc`/`.node-version` in this repo — on Netlify the Node version must be set via the site's `NODE_VERSION` environment variable in the dashboard instead, since a committed version file would override that.

After switching Node versions locally, native modules must be rebuilt for the new ABI or the build fails with a `NODE_MODULE_VERSION` mismatch:
```bash
npm rebuild better-sqlite3 sharp
```

## Commands

```bash
npm run dev       # start dev server at http://localhost:3000
npm run build     # production build
npm run generate  # static site generation
npm run preview   # preview a production build locally
```

There is no test suite and no lint/format config in this repo — don't invent test or lint commands.

## Architecture

### Content model (`@nuxt/content`)
Content collections are defined in [content.config.ts](content.config.ts), one collection per locale rather than one collection with a locale field:
- `blog_ca` / `blog_it` — sourced from `content/blog/ca/**` and `content/blog/it/**`
- `web_ca` / `web_it` — sourced from `content/web/ca/**` and `content/web/it/**`, schema requires `slug`, `description`, `section` (`home|castells|colla|contacte`), and `order`

Because the split is per-locale, pages query the collection whose name is built dynamically from the active locale, e.g. in [app/components/home/castells.vue](app/components/home/castells.vue):
```js
const webCollection = computed(() => `web_${locale.value}`)
const { data } = await useAsyncData('castells', () =>
  queryCollection(webCollection.value).where('section', '=', 'castells').order('order', 'ASC').all(),
  { watch: [webCollection] }
)
```
When adding a new locale, both a new collection pair in `content.config.ts` and a matching `content/{blog,web}/<locale>/` directory are needed — content files just under `content/blog/` (not in a locale subfolder) fall outside every collection's `source.include` glob and are effectively unreachable.

Markdown files under `content/web/<locale>/` use frontmatter (`slug`, `description`, `section`, `order`) to control which page section they render into and their order within it; files under `content/blog/<locale>/` use the blog schema (`title`, `description`, `publishedAt`, optional `image`).

### i18n
UI strings live in `i18n/locales/{ca,it}.json`, wired up in [nuxt.config.ts](nuxt.config.ts) with `strategy: 'prefix_and_default'` and `defaultLocale: 'ca'`. Localized route overrides (e.g. `/` → `/it` for the Italian home page) are declared under `i18n.pages` in the same config rather than via file-based locale routing. Use `$t()` / `useI18n()` for UI copy and `useSwitchLocalePath()` for language-switch links (see [app/pages/index.vue](app/pages/index.vue)).

`@nuxtjs/i18n` must resolve `@intlify/unplugin-vue-i18n@>=11.1.2`. Older `6.x` releases fail to parse the JSON locale files under Nuxt 4.5's Vite 8 (Rolldown) bundler with `[builtin:vite-json] ... expected value at line 1 column 1` — a bug in the Rolldown-based JSON plugin, fixed upstream. If it resurfaces after a lockfile change, `npm update @nuxtjs/i18n` (already covered by the `^10.0.6` range in package.json) pulls in the fix.

### Layouts
Two layouts under `app/layouts/`: `default.vue` (site header/footer, used for marketing pages) and `blogLayout.vue` (blog-specific header, set per-page via `definePageMeta({ layout: 'blog-layout' })` as in [app/pages/blog/index.vue](app/pages/blog/index.vue) and `blog/[...slug].vue`).

### Styling
Tailwind v4 with `@nuxt/ui`, configured via CSS `@theme` in [app/assets/css/main.css](app/assets/css/main.css) rather than a `tailwind.config.js` — custom design tokens (`--color-coral-500`, `--color-neutro`, font families) are defined there and consumed as Tailwind utility classes (`text-coral-500`, `bg-neutro`, etc). Most page sections use a `grid grid-cols-9` layout convention with content starting at `col-start-2`.

### Assets
Static images referenced by absolute path (`/img/...`) live in `public/img/`; images imported via Vite (`~/assets/img/...`) live in `app/assets/img/`.
