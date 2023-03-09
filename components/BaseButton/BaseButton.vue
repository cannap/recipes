<script lang="ts" setup>
import { cva } from 'cva'

const props = defineProps({
  disabled: {
    type: Boolean,
    default: false
  },
  size: {
    default: 'md',
    type: String as PropType<'md' | 'xs'>
  },
  intent: {
    default: 'primary',
    type: String as PropType<'secondary' | 'primary' | 'danger'>
  }
})

const buttonStyle = computed(() => {
  return cva(
    [
      'rounded-md border transition  duration-500 ease select-none focus:outline-none focus:shadow-outline  max-w-full'
    ],
    {
      variants: {
        intent: {
          secondary: 'border-blue-500 bg-blue-500 text-white hover:bg-blue-600',
          primary:
            'border-green-500 bg-green-500 text-white hover:bg-green-600',
          danger: 'border-red-500 bg-red-500 text-white hover:bg-red-600'
        },
        disabled: {
          true: 'cursor-not-allowed'
        },
        size: {
          md: 'px-4 py-2',
          xs: 'px-2 py-1'
        }
      },
      compoundVariants: [
        {
          intent: ['primary', 'secondary', 'danger'],
          disabled: true,
          class: 'opacity-80'
        }
      ]
    }
  )({ intent: props.intent, size: props.size, disabled: props.disabled })
})
</script>
<template>
  <button :disabled="disabled" v-bind="$attrs" :class="buttonStyle">
    <slot></slot>
  </button>
</template>
