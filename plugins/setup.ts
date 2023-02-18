import { useSetupStore } from '~~/stores/setupStore'

export default defineNuxtPlugin(async (nuxtApp) => {
  const store = useSetupStore()
  await store.setCategories()
})
