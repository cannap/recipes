<script lang="ts" setup>
export interface IProps {
  label?: string
  modelValue: string | number
  id: string
  name?: string
  error?: string
  rows?: number
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
      class="block text-gray-700 text-sm mb-1"
      :class="{ 'text-red-500': error }"
      >{{ props.label }}</label
    >
    <FormsInputWrapper>
      <input
        :name="name || id"
        :id="id || name"
        ref="input"
        class="block w-full p-2"
        :value="modelValue"
        @input="handleInput"
        v-bind="$attrs"
      />
    </FormsInputWrapper>
  </div>
</template>
