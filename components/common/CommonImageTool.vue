<script setup lang="ts">
import { fileOpen, supported } from 'browser-fs-access'
import type { FileWithHandle } from 'browser-fs-access'
import { FileHandle } from 'fs/promises'

const props = withDefaults(
  defineProps<{
    mimeTypes?: string[]
  }>(),
  {
    mimeTypes: () => ['image/jpeg', 'image/png']
  }
)
const emit = defineEmits<{
  (e: 'pick', file: FileWithHandle): void
}>()
const file = ref<FileWithHandle | null>(null)

const selectImage = async () => {
  if (process.server) return

  const image = await fileOpen({
    mimeTypes: props.mimeTypes,
    description: 'Image'
  })

  file.value = image
  emit('pick', image)
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
