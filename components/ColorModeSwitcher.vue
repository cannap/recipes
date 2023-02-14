<script lang="ts" setup>
const colorMode = useColorMode()
const switchColor = (currentColor: string) => {
  colorMode.preference = currentColor === 'light' ? 'dark' : 'light'
}
</script>

<template>
  <button type="button" @click="switchColor(colorMode.preference)">
    <Icon
      :name="
        colorMode.preference === 'light'
          ? 'material-symbols:light-mode-outline'
          : 'material-symbols:dark-mode-outline'
      "
    ></Icon>
  </button>
</template>
