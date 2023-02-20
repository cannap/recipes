import { defineNuxtModule } from '@nuxt/kit'

export default defineNuxtModule({
  meta: {
    name: 'Trpc Panel',
    configKey: 'trpcPanel'
  },
  // Default configuration options of the Nuxt module
  defaults: {},
  setup(options, nuxt) {
    if (nuxt.options.dev) {
      // @ts-expect-error missing type
      nuxt.hook('devtools:customTabs', (tabs) => {
        tabs.push({
          title: 'Trpc',
          name: 'trpc',
          view: {
            type: 'iframe',
            src: '/api/panel'
          }
        })
      })
    }
  }
})
