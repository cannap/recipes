// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxt/devtools',
    '@nuxtjs/tailwindcss',
    '@nuxtjs/i18n',
    '@sidebase/nuxt-auth',
    '@pinia/nuxt',
    '@nuxt/image-edge',
    'nuxt-icon',
    '@vueuse/nuxt',
    '@nuxtjs/color-mode',
    '@vue-macros/nuxt',
    '~/modules/devonly'
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
    head: {
      title: 'Recipes',
      bodyAttrs: { class: 'overflow-x-hidden' }
    }
  },

  i18n: {
    lazy: true,
    defaultLocale: 'de',
    langDir: 'locales',

    customRoutes: 'page',

    locales: [
      { code: 'en', file: 'en.json', iso: 'en-US', name: 'English' },
      { code: 'de', file: 'de.json', iso: 'de-DE', name: 'German' }
    ]
  },
  auth: {
    enableGlobalAppMiddleware: false
  }
})
