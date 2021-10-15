/*
  Warnings:

  - Added the required column `category` to the `Item` table without a default value. This is not possible if the table is not empty.
  - Added the required column `image` to the `Item` table without a default value. This is not possible if the table is not empty.
  - Added the required column `posted` to the `Item` table without a default value. This is not possible if the table is not empty.
  - Added the required column `price` to the `Item` table without a default value. This is not possible if the table is not empty.
  - Added the required column `quantity` to the `Item` table without a default value. This is not possible if the table is not empty.
  - Added the required column `sellerId` to the `Item` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Item" ADD COLUMN     "category" TEXT NOT NULL,
ADD COLUMN     "image" TEXT NOT NULL,
ADD COLUMN     "posted" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "price" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "quantity" INTEGER NOT NULL,
ADD COLUMN     "sellerId" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "Item" ADD CONSTRAINT "Item_sellerId_fkey" FOREIGN KEY ("sellerId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
