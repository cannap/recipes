<script setup lang="ts">
onBeforeUnmount(() => {
  console.log('frf')
})
</script>

<template>
  <MainContent>
    <CommonRecipeWidget />
  </MainContent>
</template>

<style lang="scss" scoped></style>
