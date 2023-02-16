<script lang="ts" setup>
export interface IProps {
  modelValue: string | number
  type: string
}
withDefaults(defineProps<IProps>(), {
  type: 'text'
})
</script>

<template>
  <div class="test">
    <input type="text" class="fe" />
  </div>
</template>
