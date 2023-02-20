import { router } from '../trpc'
import { recipeRouter } from './recipes.routes'
import { categoriesRouter } from './categories.routes'
export const appRouter = router({
  categories: categoriesRouter,
  recipes: recipeRouter
})

// export type definition of API
export type AppRouter = typeof appRouter
