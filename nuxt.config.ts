// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  //@ts-ignore
  modules: [
    '@nuxt/devtools',
    '@nuxtjs/tailwindcss',
    '@nuxtjs/i18n',
    '@sidebase/nuxt-auth',
    '@pinia/nuxt',
    // 'nuxt-typed-router',
    '@nuxt/image-edge',
    'nuxt-icon',
    '@vueuse/nuxt',
    '@nuxtjs/color-mode',
    '@vue-macros/nuxt',
    '~/modules/devonly',
    'nuxt-vitest'
  ],
  experimental: {
    inlineSSRStyles: false
  },
  css: [
    'floating-vue/dist/style.css',
    '~/styles/tooltip.css',
    '~/styles/global.css'
  ],
  colorMode: {
    classSuffix: ''
  },
  build: {
    transpile: ['trpc-nuxt']
  },
  runtimeConfig: {
    facebookClientID: process.env.FACEBOOK_ID,
    facebookSecret: process.env.FACEBOOK_SECRET,
    secret: process.env.AUTH_SECRET
  },
  typescript: {
    shim: false
  },

  app: {
    // keepalive: true,
    head: {
      viewport: 'width=device-width,initial-scale=1,viewport-fit=cover',
      title: 'Recipes'
    }
  },

  i18n: {
    // strategy: 'prefix_except_default',
    lazy: true,
    defaultLocale: 'en',
    langDir: 'locales',
    vueI18n: {
      fallbackLocale: 'en'
    },
    locales: [
      { code: 'en', file: 'en.json', iso: 'en-US', name: 'English' },
      { code: 'de', file: 'de.json', iso: 'de-DE', name: 'German' }
    ]
  },
  auth: {
    origin: process.env.AUTH_ORIGIN
  }
})
