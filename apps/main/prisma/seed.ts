import { PrismaClient, Prisma } from '@prisma/client'
import slugify from 'slugify'
const prisma = new PrismaClient()

const categoryData: Prisma.CategoryCreateInput[] = [

  { name: 'Test', slug: slugify('Test') }
]
async function main() {
  for (const c of categoryData) {
    const category = await prisma.category.create({
      data: c
    })

    console.log('Create Category ' + category.id)
  }
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async () => {
    await prisma.$disconnect()
    process.exit(1)
  })
