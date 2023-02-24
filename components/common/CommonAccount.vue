<script setup lang="ts">
const { signIn, signOut, getSession, status } = useSession()
const session = await getSession()
</script>

<template>
  <div v-if="status !== 'loading'">
    <BaseButton @click="signIn('facebook')" v-if="status !== 'authenticated'">{{
      $t('sign_in')
    }}</BaseButton>
    <BaseButton @click="signOut" v-else>{{ $t('sign_out') }}</BaseButton>
  </div>
  <div v-else>Loading</div>
</template>

<style lang="scss" scoped></style>
