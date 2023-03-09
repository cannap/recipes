<script setup lang="ts">
import { z } from 'zod'
const { addStep, recipe, removeStep } = useRecipe()
//const {} = useStepper()

const { $client } = useNuxtApp()
const addRecipe = async () => {
  await $client.recipes.create.mutate(recipe.value)
}
const images = reactive<File[]>([])
const formData = new FormData()

const addFile = (name: string, image: File) => {
  images.push(image)
  formData.set(name, image)
}

const removeImage = () => {}
</script>

<template>
  <div class="space-y-4" v-if="recipe.steps">
    <FormsTextField
      id="recipe_name"
      :label="$t('recipe_name')"
      v-model="recipe.name"
    />
    <FormsTextField
      id="recipe_desc"
      :label="$t('recipe_description')"
      v-model="recipe.description"
    />
    <div class="flex" :key="step.id" v-for="(step, i) in recipe.steps">
      <div class="w-full">
        <CommonImageTool @pick="addFile(`step-${i + 1}`, $event)" />
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
          <BaseButton v-if="i !== 0" @click="removeStep(step.id)">{{
            $t('remove_step')
          }}</BaseButton>
        </div>
      </div>
    </div>
    <div class="flex gap-2">
      <BaseButton @click="addStep('', '')">{{
        $t('add_recipe_step')
      }}</BaseButton>
      <BaseButton @click="addRecipe()">{{ $t('add_recipe') }}</BaseButton>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
