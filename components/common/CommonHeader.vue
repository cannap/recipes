<script lang="ts" setup></script>

<template>
  <header class="shadow-md w-full fixed content-start z-10 top-0 py-4 bg-white">
    <div class="lg:max-w-[80rem] mx-auto flex items-center">
      <NuxtLink to="/"> <PlaceholderLogo></PlaceholderLogo></NuxtLink>
      <div class="flex ml-20 items-center justify-between flex-1">
        <CommonNavigation></CommonNavigation>
        <CommonAccount></CommonAccount>
      </div>
    </div>
  </header>
</template>
