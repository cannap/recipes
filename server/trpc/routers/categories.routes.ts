import { publicProcedure, router } from '../trpc'

import { z } from 'zod'

export const categoriesRouter = router({
  create: publicProcedure
    .input(
      //Todo: this regex is only working for english and german
      z.object({ title: z.string().regex(/^[A-Za-zÄäÖöÜüß]+$/, 'Not Allowed') })
    )
    .mutation(async ({ input, ctx }) => {}),
  list: publicProcedure.query(async (req) => {
    const categories = await req.ctx.prisma.category.findMany({
      orderBy: {
        name: 'asc'
      }
    })
    return categories
  })
})
