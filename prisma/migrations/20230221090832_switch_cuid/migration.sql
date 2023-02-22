/*
  Warnings:

  - The primary key for the `Ingredient` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `IngredientOnRecipe` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `RecipesStep` table will be changed. If it partially fails, the table could be left without primary key constraint.

*/
-- AlterTable
ALTER TABLE "Ingredient" DROP CONSTRAINT "Ingredient_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "Ingredient_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "Ingredient_id_seq";

-- AlterTable
ALTER TABLE "IngredientOnRecipe" DROP CONSTRAINT "IngredientOnRecipe_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "IngredientOnRecipe_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "IngredientOnRecipe_id_seq";

-- AlterTable
ALTER TABLE "RecipesStep" DROP CONSTRAINT "RecipesStep_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "RecipesStep_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "RecipesStep_id_seq";
