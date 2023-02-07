<script lang="ts" setup>
const props = defineProps<{
  foo: boolean
}>()
</script>

<template>
  <button class="bg-slate-400">dwdwd{{ foo }}</button>
</template>
