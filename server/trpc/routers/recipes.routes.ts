import { publicProcedure, protectedProcedure, router } from '../trpc'
import slugify from 'slugify'
import { Difficulty } from '@prisma/client'
import { z } from 'zod'
import { recipeSchema } from '~~/schemas/recipe.schema'
export const recipeRouter = router({
  create: protectedProcedure
    .input(recipeSchema)

    .mutation(async ({ input, ctx }) => {
      const recipe = await ctx.prisma.recipe.create({
        data: {
          description: input.description,
          name: input.name,
          difficulty: input.difficulty,
          slug: slugify(input.name, { lower: true }),
          steps: { create: input.steps },
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
