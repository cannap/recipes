import type { RecipeSchema } from '~~/schemas/recipe.schema'
import { randomId } from '~~/utils'

const defaultRecipe: RecipeSchema = {
  name: '',
  description: '',
  servings: 1,
  ingredients: [{ name: '', id: randomId() }],
  steps: [{ title: '', description: '', id: randomId() }],
  difficulty: 'EASY'
}

export function useRecipe(initialRecipe = defaultRecipe) {
  const recipe = ref<RecipeSchema>(initialRecipe)

  const removeStep = (id: string) => {
    console.log(id)
    //  if (recipe.value.steps.length === 1) return

    recipe.value.steps = recipe.value.steps.filter((s) => s.id !== id)
  }

  const addStep = (title: string = '', description: string = '') => {
    recipe.value.steps.push({ title, description, id: randomId() })
  }

  return { recipe, addStep, removeStep }
}
