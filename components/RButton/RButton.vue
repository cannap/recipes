<script lang="ts" setup>
import { Props } from './types'


const props = withDefaults(defineProps<Props>(), {
  variant: 'default',
  type: 'button'
})

</script>

<template>
  <button></button>
</template>
