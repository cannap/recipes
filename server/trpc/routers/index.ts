import { router } from '../trpc'
import { recipeRouter } from './recipes'
import { categoriesRouter } from './categories'
export const appRouter = router({
  categories: categoriesRouter,
  recipes: recipeRouter
})

// export type definition of API
export type AppRouter = typeof appRouter
