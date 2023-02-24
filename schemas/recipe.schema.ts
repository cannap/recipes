import { Difficulty } from '@prisma/client'
import { z } from 'zod'

export const recipeSchema = z.object({
  name: z.string(),
  description: z.string(),
  servings: z.number().default(1),
  difficulty: z.nativeEnum(Difficulty),
  steps: z.array(
    z.object({
      title: z.string(),
      id: z.string().optional(),
      description: z.string()
    })
  ),

  ingredients: z
    .object({
      name: z.string(),
      id: z.string()
    })
    .array()
    .optional()
})

export type RecipeSchema = z.infer<typeof recipeSchema>
