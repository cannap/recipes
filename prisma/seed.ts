// seed.ts

import { PrismaClient } from '@prisma/client'
import slugify from 'slugify'
import categories from './seeds/categories'
import ingredients from './seeds/ingredients'
//import './utils'
const prisma = new PrismaClient()

async function main() {
  for (const category of categories) {
    const { subcategories, ...rest } = category
    const createdCategory = await prisma.category.create({
      data: {
        ...rest,
        slug: slugify(category.name, { lower: true }),
        subcategories: {
          create: subcategories.map((rest) => {
            return { ...rest, slug: slugify(rest.name, { lower: true }) }
          })
        }
      }
    })
  }

  for (const ingredient of ingredients) {
    const createdCategory = await prisma.ingredient.create({
      data: {
        ...ingredient,
        slug: slugify(ingredient.name, { lower: true })
      }
    })
  }
}

main()
  .catch((e) => console.error(e))
  .finally(async () => {
    await prisma.$disconnect()
  })
