<script setup lang="ts">
const { addStep, recipe, removeStep, steps } = useRecipe()

//const {} = useStepper()

const { $client } = useNuxtApp()

const addRecipe = async () => {
  await $client.recipes.create.mutate(recipe.value)
}

const showStep = ref<boolean>(false)
</script>

<template>
  <div class="space-y-4" v-if="recipe.steps">
    <FormsTextField
      id="recipe_name"
      :label="$t('recipe_name')"
      v-model="recipe.name"
    ></FormsTextField>

    <div class="flex" :key="step.id" v-for="(step, i) in recipe.steps">
      <div class="w-full">
        <CommonImageTool />
        <div class="flex gap-4 items-end">
          <div class="flex-grow space-y-2">
            <FormsTextField
              :id="'title-' + step.id"
              v-model="step.title"
              :label="$t('title_for_step', { step: i + 1 })"
              :placeholder="$t('prepare_the_dough')"
            />
            <FormsTextField
              type="textarea"
              class="w-full"
              :id="'desc-' + step.id"
              v-model="step.description"
              :placeholder="$t('step_description')"
            />
          </div>
          <BaseButton
            intent="secondary"
            v-if="i !== 0"
            @click="removeStep(step.id)"
            >{{ $t('remove_step') }}</BaseButton
          >
        </div>
      </div>
    </div>
    <BaseButton @click="addStep()">{{ $t('add_recipe_step') }}</BaseButton>
    <button @click="addRecipe">Bla</button>
  </div>
</template>

<style lang="scss" scoped></style>
