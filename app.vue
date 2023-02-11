<template>
  <div>
    <NuxtPage />
    {{ $t('welcome') }}
    <button @click="doCall">Do Call</button>
  </div>
</template>

<script lang="ts" setup>
const doCall = async () => {

  const data = useFetch('/api/recipes')

}
</script>
