<script setup lang="ts">
import { useSetupStore } from '~~/stores/setupStore'
import { onClickOutside } from '@vueuse/core'
const localePath = useLocalePath()
const categories = useSetupStore().getCategories
const showRecipes = ref<boolean>(false)
const target = ref<HTMLElement | null>(null)

onClickOutside(target, () => (showRecipes.value = false))
</script>

<template>
  <nav>
    <ul class="flex md:space-x-8">
      <li class="relative">
        <button ref="target" @click="showRecipes = !showRecipes">
          {{ $t('recipes') }}
        </button>
        <div v-if="showRecipes">
          <ul class="absolute bg-white">
            <li v-for="category in categories">
              <NuxtLink
                :to="
                  localePath({
                    name: 'recipes-id-category',
                    params: { id: category.id, category: category.slug }
                  })
                "
                >{{ category.name }}</NuxtLink
              >
            </li>
          </ul>
        </div>
      </li>
      <li>
        <NuxtLink :to="localePath({ name: 'recipes-add' })">{{
          $t('add_recipe')
        }}</NuxtLink>
      </li>
    </ul>
  </nav>
</template>

<style lang="scss" scoped></style>
