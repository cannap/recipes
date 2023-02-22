<script lang="ts" setup>
import { type ExtractPropTypes } from 'vue'
export interface IProps {
  label?: string
  modelValue: string | number
  id: string
  name?: string
  error?: string
}

const rootEl = ref<HTMLElement | null>(null)
const input = ref<HTMLInputElement | null>(null)

defineExpose({ rootEl, input })
const emits = defineEmits<{
  (e: 'update:modelValue', value: IProps['modelValue']): void
  (e: 'input', value: IProps['modelValue']): void
}>()

const props = withDefaults(defineProps<IProps>(), {})

const setFocus = () => {
  //input.value?.focus()
}

function handleInput(event: Event) {
  const { value } = event.target as HTMLInputElement

  emits('update:modelValue', value)
  emits('input', value)
}
</script>

<template>
  <div ref="rootEl" @click="setFocus">
    <label
      :for="id"
      v-if="label"
      class="block text-gray-700 text-sm"
      :class="{ 'bg-red-500': error }"
      >{{ props.label }}</label
    >
    <div class="inline-flex flex-grow relative border w-full">
      <input
        :name="name || id"
        :id="id || name"
        ref="input"
        class="block w-full"
        :value="modelValue"
        @input="handleInput"
        v-bind="$attrs"
      />
    </div>
  </div>
</template>
