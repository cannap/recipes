<script setup lang="ts">
import RButton from './BaseButton.vue'
import { IProps } from './types'
import { logEvent } from 'histoire/client'
const variants: Array<IProps['variant']> = [
  'danger',
  'secondary',
  'primary',
  'success',
  'warning'
]
</script>

<template>
  <Story title="Buttons" group="forms">
    <Variant v-for="variant of variants" :title="variant">
      <RButton @click="logEvent('click', $event)" :variant="variant">{{
        variant
      }}</RButton>
    </Variant>
  </Story>
</template>
