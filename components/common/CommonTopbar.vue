<script setup lang="ts">
import { useSetupStore } from '~~/stores/setupStore'

const setup = useSetupStore()
</script>

<template>
  <div>
    <ul>
      <li v-for="category in setup.getCategories">
        {{ category }}
      </li>
    </ul>
  </div>
</template>

<style lang="scss" scoped></style>
