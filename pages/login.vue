<script lang="ts" setup>

const { signIn, signOut, data } = useSession()
const localePath = useLocalePath()
</script>
<template>
  <div class="bla">
    <NuxtLink :to="localePath({ name: 'user-profile' })">
      Go To Profile
    </NuxtLink>
    {{ data?.user.id }}
    <button @click="signIn('facebook')">
      Test
    </button>

    <button class="böla" @click="signOut()">
      Signout
    </button>
  </div>
</template>
