
import type { H3Event } from 'h3'
export default eventHandler(async (event: H3Event) => {
  const recipes = await event.context.prisma.recipe.findFirst()

  return recipes
})
