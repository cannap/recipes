<script setup lang="ts">

const { $client } = useNuxtApp()
const test = ref<string>('gerg')


</script>
<template>
  <div>
    <input type="text" v-model="test" />
  </div>
</template>
