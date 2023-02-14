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
  <button class="dark:bg-blue-400 bg-red-200">
    <slot></slot>
  </button>
</template>
