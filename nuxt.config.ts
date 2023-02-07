
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/i18n',
    '@sidebase/nuxt-auth',
    '@pinia/nuxt'
  ],
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
      title: 'Recipes'
    }
  },
  i18n: {
    lazy: true,
    defaultLocale: 'en',
    langDir: 'locales',
    locales: [{ code: 'en', file: 'en.json', iso: 'en-US' }]
  },
  auth: {

    enableGlobalAppMiddleware: false
  }
})


