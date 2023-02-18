import { Prisma } from '@prisma/client'
import { defineStore, acceptHMRUpdate } from 'pinia'
export const useSetupStore = defineStore('setup', {
  state: () => ({
    catgories: null as Prisma.CategorySelect[] | null
  }),
  getters: {
    getCategories: (state) => state.catgories
  },
  actions: {
    async setCategories() {
      const { $client } = useNuxtApp()

      const { data } = await $client.categories.list.useQuery()
      this.catgories = markRaw(data.value as any) //dont know why this ts shit is complaining
    }
  }
})

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useSetupStore, import.meta.hot))
}
