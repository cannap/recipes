<script lang="ts" setup>
import { IProps } from './types'
import { cva } from 'cva'
import { type } from 'os'

const props = withDefaults(defineProps<IProps>(), {
  intent: 'secondary',
  outline: false,
  type: 'button',
  loading: false,
  disabled: false
})

const buttonStyle = computed(() => {
  return cva([], {
    variants: {
      intent: {
        secondary: 'bg-red-200',
        primary: 'bg-red-500'
      }
    },
    defaultVariants: {
      intent: 'secondary'
    }
  })({ intent: props.intent as any })
})
</script>
<template>
  <button :class="buttonStyle">
    <slot></slot>
  </button>
</template>
