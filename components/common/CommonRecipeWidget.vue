<script setup lang="ts">
const { addStep, recipe } = useRecipe()

//const {} = useStepper()

const { $client } = useNuxtApp()

const addRecipe = async () => {
  await $client.recipes.create.mutate(recipe.value)
}
</script>

<template>
  <div class="space-y-4" v-if="recipe.steps">
    <div class="flex" :key="step.id" v-for="(step, i) in recipe.steps">
      <div class="space-y-2 w-full">
        <CommonImageTool></CommonImageTool>
        <TextField
          :id="'title-' + step.id"
          v-model="step.title"
          :label="$t('title_for_step', { step: i + 1 })"
          :placeholder="$t('prepare_the_dough')"
        />
        <TextField
          :id="'desc-' + step.id"
          v-model="step.description"
          :placeholder="$t('step_description')"
        />
      </div>
    </div>
    <BaseButton @click="addStep">{{ $t('add_recipe_step') }}</BaseButton>
    <button @click="addRecipe">Bla</button>
  </div>
</template>

<style lang="scss" scoped></style>
