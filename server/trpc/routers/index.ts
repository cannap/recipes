import { router } from '../trpc'
import { recipeRouter } from './recipes'
export const appRouter = router({

  recipes: recipeRouter
})

// export type definition of API
export type AppRouter = typeof appRouter
