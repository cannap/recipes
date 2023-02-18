<script lang="ts" setup>
export interface IProps {
  modelValue: string | number
  type?: string
  label?: string
}

const emit = defineEmits<{
  (e: 'input', event: string | number): void
  (e: 'update:modelValue', event: string | number): void
}>()

const props = withDefaults(defineProps<IProps>(), {
  type: 'text',
  label: ''
})

const handleInput = (event: Event) => {
  const { value } = event.target as HTMLInputElement

  emit('input', value)
  emit('update:modelValue', value)
}
</script>

<template>
  <div class="input">
    <label v-if="props.label">{{ props.label }}</label>
    <input @input="handleInput" :type="props.type" />
  </div>
</template>
