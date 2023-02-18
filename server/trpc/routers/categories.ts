import { publicProcedure, protectedProcedure, router } from '../trpc'

import { Difficulty, Prisma } from '@prisma/client'
import { z } from 'zod'

export const categoriesRouter = router({
  create: publicProcedure
    .input(
      z.object({ title: z.string().regex(/^[A-Za-zÄäÖöÜüß]+$/, 'Not Allowed') })
    )
    .mutation(async ({ input, ctx }) => {}),
  list: publicProcedure.query(async (req) => {
    const recipes = await req.ctx.prisma.category.findMany({
      include: {
        subcategories: {
          orderBy: { name: 'asc' }
        }
      },
      orderBy: {
        name: 'asc'
      }
    })
    return recipes
  })
})
