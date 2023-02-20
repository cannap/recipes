/*
  Warnings:

  - The primary key for the `CategoriesOnRecipes` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `Recipe` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - A unique constraint covering the columns `[name]` on the table `Ingredient` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `description` to the `Ingredient` table without a default value. This is not possible if the table is not empty.
  - Added the required column `name` to the `Ingredient` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "CategoriesOnRecipes" DROP CONSTRAINT "CategoriesOnRecipes_recipeId_fkey";

-- DropIndex
DROP INDEX "Category_name_key";

-- DropIndex
DROP INDEX "Category_slug_key";

-- DropIndex
DROP INDEX "Recipe_slug_key";

-- DropIndex
DROP INDEX "SubCategory_name_key";

-- DropIndex
DROP INDEX "SubCategory_slug_key";

-- AlterTable
ALTER TABLE "CategoriesOnRecipes" DROP CONSTRAINT "CategoriesOnRecipes_pkey",
ALTER COLUMN "recipeId" SET DATA TYPE TEXT,
ADD CONSTRAINT "CategoriesOnRecipes_pkey" PRIMARY KEY ("recipeId", "categoryId");

-- AlterTable
ALTER TABLE "Category" ADD COLUMN     "description" TEXT;

-- AlterTable
ALTER TABLE "Ingredient" ADD COLUMN     "country" TEXT,
ADD COLUMN     "description" TEXT NOT NULL,
ADD COLUMN     "name" TEXT NOT NULL,
ADD COLUMN     "slug" TEXT,
ALTER COLUMN "amount" DROP NOT NULL;

-- AlterTable
ALTER TABLE "Recipe" DROP CONSTRAINT "Recipe_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ALTER COLUMN "servings" DROP NOT NULL,
ALTER COLUMN "servings" SET DEFAULT 1,
ADD CONSTRAINT "Recipe_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "Recipe_id_seq";

-- AlterTable
ALTER TABLE "SubCategory" ADD COLUMN     "description" TEXT;

-- CreateTable
CREATE TABLE "RecipesStep" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "recipeId" TEXT NOT NULL,

    CONSTRAINT "RecipesStep_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Ingredient_name_key" ON "Ingredient"("name");

-- AddForeignKey
ALTER TABLE "RecipesStep" ADD CONSTRAINT "RecipesStep_recipeId_fkey" FOREIGN KEY ("recipeId") REFERENCES "Recipe"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SubCategory" ADD CONSTRAINT "SubCategory_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "Category"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CategoriesOnRecipes" ADD CONSTRAINT "CategoriesOnRecipes_recipeId_fkey" FOREIGN KEY ("recipeId") REFERENCES "Recipe"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
