<script setup lang="ts">
import type { ComputedRef } from 'vue'
import type { LocaleObject } from '#i18n'
const { locales } = useI18n() as { locales: ComputedRef<LocaleObject[]> }
</script>
<template>Switch</template>
