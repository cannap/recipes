/*
  Warnings:

  - The primary key for the `CategoriesOnRecipes` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `Recipe` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `id` column on the `Recipe` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - Changed the type of `recipeId` on the `CategoriesOnRecipes` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `recipeId` on the `RecipesStep` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- DropForeignKey
ALTER TABLE "CategoriesOnRecipes" DROP CONSTRAINT "CategoriesOnRecipes_recipeId_fkey";

-- DropForeignKey
ALTER TABLE "RecipesStep" DROP CONSTRAINT "RecipesStep_recipeId_fkey";

-- AlterTable
ALTER TABLE "CategoriesOnRecipes" DROP CONSTRAINT "CategoriesOnRecipes_pkey",
DROP COLUMN "recipeId",
ADD COLUMN     "recipeId" INTEGER NOT NULL,
ADD CONSTRAINT "CategoriesOnRecipes_pkey" PRIMARY KEY ("recipeId", "categoryId");

-- AlterTable
ALTER TABLE "Recipe" DROP CONSTRAINT "Recipe_pkey",
DROP COLUMN "id",
ADD COLUMN     "id" SERIAL NOT NULL,
ADD CONSTRAINT "Recipe_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "RecipesStep" DROP COLUMN "recipeId",
ADD COLUMN     "recipeId" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "RecipesStep" ADD CONSTRAINT "RecipesStep_recipeId_fkey" FOREIGN KEY ("recipeId") REFERENCES "Recipe"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CategoriesOnRecipes" ADD CONSTRAINT "CategoriesOnRecipes_recipeId_fkey" FOREIGN KEY ("recipeId") REFERENCES "Recipe"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
