<script lang="ts" setup>
import { useTextareaAutosize } from '@vueuse/core'

export interface IProps {
  label?: string
  modelValue: string | number
  id: string
  name?: string
  error?: string
  type?: 'textarea' | 'text' | 'number' | 'date' | 'tel' | 'color' //Info i know there are more but they will never used or we will create custom components for it
}
const { textarea: areaSize, input: modelValue } = useTextareaAutosize()

const rootEl = ref<HTMLElement | null>(null)
const input = ref<HTMLInputElement | null>(null)

defineExpose({ rootEl, input })
const emits = defineEmits<{
  (e: 'update:modelValue', value: IProps['modelValue']): void
  (e: 'input', value: IProps['modelValue']): void
}>()

const props = withDefaults(defineProps<IProps>(), {
  type: 'text'
})

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
      class="block text-gray-700 text-sm mb-1"
      :class="{ 'text-red-500': error }"
      >{{ props.label }}</label
    >
    <FormsInputWrapper>
      <input
        v-if="type !== 'textarea'"
        :name="name || id"
        :id="id || name"
        ref="input"
        class="block w-full p-2"
        :value="modelValue"
        @input="handleInput"
        v-bind="$attrs"
      />
      <textarea
        :name="name || id"
        :id="id || name"
        class="block w-full p-2 border-none focus:outline-none"
        ref="areaSize"
        :value="modelValue"
        @input="handleInput"
        v-bind="$attrs"
        v-else
      />
    </FormsInputWrapper>
  </div>
</template>
