import { publicProcedure, protectedProcedure, router } from '../trpc'
import { z } from 'zod'
import { recipeSchema } from '@/schemas/recipe.schema'
import { removeEmptyObjectsFromArray, makeSlug } from '~~/utils'
export const recipeRouter = router({
  create: protectedProcedure
    .input(recipeSchema)

    .mutation(async ({ input, ctx }) => {
      console.log(input)
      const recipe = await ctx.prisma.recipe.create({
        data: {
          description: input.description, //Todo: sanitize
          name: input.name,
          difficulty: input.difficulty,
          slug: makeSlug(input.name),
          steps: {
            create: removeEmptyObjectsFromArray(input.steps, [
              'description',
              'title'
            ])
          },
          servings: input.servings,
          userId: ctx.session?.user.id
        }
      })
      return recipe
    }),

  list: publicProcedure
    .input(
      z
        .object({
          take: z.number().default(10).optional(),
          skip: z.number().default(5).optional()
        })
        .optional()
    )
    .query(async (req) => {
      const recipes = await req.ctx.prisma.recipe.findMany({
        include: { categories: true }
      })
      return recipes
    })
})
