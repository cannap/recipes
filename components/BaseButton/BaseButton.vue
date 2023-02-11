<script lang="ts" setup>
import { IProps } from './types'

const props = withDefaults(defineProps<IProps>(), {
  variant: 'secondary',
  outline: false,
  type: 'button',
  loading: false
})
</script>

<template>
  <button>
    <slot></slot>
  </button>
</template>
