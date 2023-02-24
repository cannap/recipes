import type { RecipeSchema } from '~~/schemas/recipe.schema'
import { nanoid } from 'nanoid/non-secure' //Those nanoid are only temp for v-for usage
const defaultRecipe: RecipeSchema = {
  name: '',
  description: '',
  servings: 1,
  ingredients: [{ name: '', id: nanoid(10) }],
  steps: [{ title: '', description: '', id: nanoid(10) }],
  difficulty: 'EASY'
}

export function useRecipe(initialRecipe = defaultRecipe) {
  const recipe = ref<RecipeSchema>(initialRecipe)

  const removeStep = (id: string) => {
    recipe.value.steps = recipe.value.steps.filter((step) => step.id !== id)
  }

  const addStep = (title: string = '', description: string = '') => {
    recipe.value.steps.push({ title, description, id: nanoid(10) })
  }

  return { recipe, addStep, removeStep }
}
