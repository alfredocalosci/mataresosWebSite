import type { ca } from "@nuxt/ui/runtime/locale/index.js";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: ['@nuxt/content', '@nuxt/image', '@nuxt/ui', '@nuxtjs/i18n'],
  css: ['~/assets/css/main.css'],
  fonts: {
    families: [
      // only resolve this font with the `google` provider
      { name: 'Barlow Semi Condensed', provider: 'google' },
      { name: 'Inconsolata', provider: 'google' },
    ]
  },
  i18n: {
    strategy: 'prefix_and_default',
    defaultLocale: 'ca',
    locales: [
      { code: 'ca', name: 'Català', file: 'ca.json' },
      { code: 'it', name: 'Italiano', file: 'it.json' }
    ],
    customRoutes: 'config', // disable custom route with page components
    pages: {
      // Define your localized pages here
      '/': {
        ca: '/',
        it: '/it'
      }
    } 
  },
  content: {
    renderer: {
      anchorLinks: { h2: false, h3: false, h4: false },
    }
  }
})