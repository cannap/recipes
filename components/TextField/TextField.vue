<script lang="ts" setup>
export interface IProps {
  type?: string
  label?: string
  modelValue?: String
}
const emits = defineEmits<{
  (e: 'update:modelValue', modelValue: string): void
  (e: 'input', modelValue: string): void
}>()
const props = withDefaults(defineProps<IProps>(), {
  type: 'text',
  label: ''
})

function handleInput(event: Event) {
  const { value } = event.target as HTMLInputElement

  emits('update:modelValue', value)
  emits('input', value)
}
</script>

<template>
  <div class="input">
    <label v-if="props.label">{{ props.label }}</label>

    <input :value="modelValue" @input="handleInput" :type="props.type" />
  </div>
</template>
