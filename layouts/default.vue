<script lang="ts" setup></script>

<template>
  <div class="h-screen" test-id="yo">
    <CommonHeader></CommonHeader>

    <main class="w-full lg:max-w-[80rem] mx-auto">
      <slot></slot>
    </main>
  </div>
</template>
