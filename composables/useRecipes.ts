import type { RecipeSchema } from '~~/schemas/recipe.schema'
import { nanoid } from 'nanoid/non-secure' //Those nanoid are only temp for v-for usage
const defaultRecipe: RecipeSchema = {
  name: 'fefefef',
  description: '',
  servings: 1,
  //ingredients: [{ name: '', id: '' }],
  steps: [{ title: '', description: '', id: nanoid(10) }],
  difficulty: 'EASY'
}

export function useRecipe(initialRecipe = defaultRecipe) {
  const recipe = ref<RecipeSchema>(initialRecipe)

  const addStep = (title: string = '', description: string = '') => {
    recipe.value.steps.push({ title, description, id: nanoid(10) })
  }

  return { recipe, addStep }
}
