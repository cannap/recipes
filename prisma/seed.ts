// seed.ts

import { PrismaClient } from '@prisma/client'
import categories from './seeds/categories'
import ingredients from './seeds/ingredients'
import { makeSlug } from '~~/utils'

const prisma = new PrismaClient()

async function main() {
  for (const category of categories) {
    const { subcategories, ...rest } = category
    const createdCategory = await prisma.category.create({
      data: {
        ...rest,
        slug: makeSlug(category.name),
        subcategories: {
          create: subcategories.map((rest) => {
            return { ...rest, slug: makeSlug(rest.name) }
          })
        }
      }
    })
  }

  for (const ingredient of ingredients) {
    const createdCategory = await prisma.ingredient.create({
      data: {
        ...ingredient,
        slug: makeSlug(ingredient.name)
      }
    })
  }
}

main()
  .catch((e) => console.error(e))
  .finally(async () => {
    await prisma.$disconnect()
  })
