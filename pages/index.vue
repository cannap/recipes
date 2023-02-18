<script setup lang="ts">
import { useSetupStore } from '~~/stores/setupStore'

useSeoMeta({
  title: 'yo'
})
const store = useSetupStore()
</script>
<template>
  <div>
    {{ store.getCategories }}
  </div>
</template>

<style lang="scss" scoped></style>
