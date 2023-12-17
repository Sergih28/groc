import { defineConfig } from 'astro/config'
import react from '@astrojs/react'
import tailwind from '@astrojs/tailwind'
import { fallbackLang, languages } from './src/i18n/ui'

// https://astro.build/config
export default defineConfig({
  integrations: [
    react(),
    tailwind({
      applyBaseStyles: false,
    }),
  ],
  i18n: {
    defaultLocale: fallbackLang,
    locales: Object.keys(languages),
    routing: {
      prefixDefaultLocale: true,
    },
  },
})
