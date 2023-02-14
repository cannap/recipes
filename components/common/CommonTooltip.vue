<script setup lang="ts">
import type { Popper as VTooltipType } from 'floating-vue/dist'
//I think volar cannot handle it
interface IProps extends Partial<typeof VTooltipType> {
  content?: string
}
defineProps<IProps>()
</script>

<template>
  <VTooltip v-bind="$attrs" auto-hide>
    <slot />
    <template #popper>
      <div class="text-xs">
        <slot name="popper">
          {{ content }}
        </slot>
      </div>
    </template>
  </VTooltip>
</template>
