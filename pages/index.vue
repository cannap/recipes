<script setup lang="ts">
const localePath = useLocalePath()
const { locale, locales } = useI18n()
const switchLocalePath = useSwitchLocalePath()
const availableLocales = computed(() => {
  return locales.value.filter((i) => i.code !== locale.value)
})
</script>
<template>
  <div>
    <NuxtLink :to="localePath({ name: 'recipes-id', params: { id: 'Wtf' } })"
      >grgrgrggergerg</NuxtLink
    >

    <NuxtLink
      v-for="locale in availableLocales"
      :key="locale.code"
      :to="switchLocalePath(locale.code)"
      >{{ locale.name }}</NuxtLink
    >
  </div>
</template>

<style lang="scss" scoped></style>
