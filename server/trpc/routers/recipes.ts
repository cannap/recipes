import { publicProcedure, protectedProcedure, router } from '../trpc'
import slugify from 'slugify'
import { Difficulty } from '@prisma/client'
import { z } from 'zod'

export const recipeRouter = router({
  create: protectedProcedure
    .input(
      z.object({
        title: z
          .string()
          .min(4, 'yo')
          .regex(/^[A-Za-zÄäÖöÜüß]+$/, 'MEEEHH'),
        difficulty: z.nativeEnum(Difficulty),
        description: z.string().min(10), //Allow only simple html like strong
        published: z.boolean(),
        servings: z.number()
      })
    )
    .mutation(async ({ input, ctx }) => {
      const recipe = await ctx.prisma.recipe.create({
        data: {
          description: input.description,
          published: input.published,
          title: input.title,
          servings: input.servings,
          difficulty: input.difficulty,
          slug: slugify(input.title),
          userId: ctx.session.user.id
        },
        select: {
          description: true,
          id: true,
          title: true,
          servings: true,
          userId: true,
          published: true
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
