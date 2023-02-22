<script lang="ts" setup>
import { sign } from 'crypto'

const { signIn } = useSession()
const doLogin = async () => {
  await signIn('facebook')
}
</script>

<template>
  <div class="h-full" test-id="yo">
    <BaseButton @click="doLogin">Login</BaseButton>
    <main class="w-full lg:max-w-[80rem] mx-auto">
      <slot></slot>
    </main>
  </div>
</template>
