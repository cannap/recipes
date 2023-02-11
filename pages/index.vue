<script setup lang="ts">
const { $client } = useNuxtApp()
const { data, refresh, error } = $client.recipes.list.useQuery()
</script>
<template>
  <div>
    {{ error }}
    <BaseButton @click="() => refresh()">Refresh</BaseButton>
  </div>
</template>
