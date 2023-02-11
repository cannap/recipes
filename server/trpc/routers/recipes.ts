import { publicProcedure, protectedProcedure, router } from "../trpc";

import { Difficulty, } from '@prisma/client'
import { z } from "zod";

export const recipeRouter = router({
  create: protectedProcedure.input(z.object({
    title: z.string().min(4),
    difficulty: z.nativeEnum(Difficulty),
    slug: z.string().min(4),
    description: z.string().min(10),
    published: z.boolean()

  })).mutation(async ({ input, ctx }) => {

    const recipe = await ctx.prisma.recipe.create({
      data:
      {
        description: input.description,
        userId: 'lol',
        published: input.published,
        title: input.title,
        difficulty: input.difficulty,
        slug: input.slug
      }
    })
    return recipe
  }),

  list: publicProcedure.input(z.object({
    take: z.number().default(10).optional(),
    skip: z.number().default(5).optional()
  }).optional()).query(async (req) => {

    const recipes = await req.ctx.prisma.recipe.findMany({ include: { 'categories': true } })
    return recipes

  })


})
