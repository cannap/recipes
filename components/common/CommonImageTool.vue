<script setup lang="ts">
import { fileOpen, supported } from 'browser-fs-access'
import type { FileWithHandle } from 'browser-fs-access'

const file = ref<FileWithHandle | null>(null)

const selectImage = async () => {
  if (process.server) return

  const image = await fileOpen({
    mimeTypes: ['image/jpeg', 'image/png'],
    description: 'Image'
  })
}
</script>

<template>
  <div>
    <button @click="selectImage">
      <Icon name="ri:image-add-fill"></Icon>
    </button>
  </div>
</template>

<style lang="scss" scoped></style>
