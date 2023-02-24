import { defineStore, acceptHMRUpdate } from 'pinia'
import { Raw } from 'vue'
export interface Categories {
  name: string
  id: string
  description?: string
  slug: string
  subcategories?: {
    slug: string
    id: string
    description?: string
  }[]
}
export const useSetupStore = defineStore('setup', {
  state: () => ({
    categories: null as Raw<Categories[]> | null
  }),
  getters: {
    getCategories: (state) => state.categories
  },
  actions: {
    async setCategories() {
      const { $client } = useNuxtApp()
      try {
        const { data } = await $client.categories.list.useQuery()
        if (Array.isArray(data.value)) {
          this.categories = toRaw(data.value) as any
        }
      } catch (error) {
        console.log(error)
      }
    }
  }
})

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useSetupStore, import.meta.hot))
}
