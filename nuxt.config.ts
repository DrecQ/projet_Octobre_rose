// https://nuxt.com/docs/api/configuration/nuxt-config

import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
 compatibilityDate: '2025-07-15',
 devtools: { enabled: true },
 css: ['~/assets/css/main.css'],
app: {
  pageTransition: { name: 'page', mode: 'out-in' }
},
 vite: {
    plugins: [
      tailwindcss(),
    ],
  },

 modules: ['@nuxt/image', '@nuxtjs/i18n',],

 i18n: {
    locales: [
      { code: 'en', language: 'en-US' },
      { code: 'fr', language: 'fr-FR' }
    ],
    defaultLocale: 'fr',
  }
})