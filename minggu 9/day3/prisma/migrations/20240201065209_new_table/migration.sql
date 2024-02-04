/*
  Warnings:

  - You are about to drop the column `authorId` on the `books` table. All the data in the column will be lost.
  - You are about to drop the column `categoryId` on the `books` table. All the data in the column will be lost.
  - You are about to drop the column `category_id` on the `books` table. All the data in the column will be lost.
  - You are about to drop the column `publisherId` on the `books` table. All the data in the column will be lost.
  - You are about to drop the column `synosis` on the `books` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[isbn]` on the table `books` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `updated_at` to the `books` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updated_at` to the `categories` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updated_at` to the `publishers` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `books` DROP FOREIGN KEY `books_authorId_fkey`;

-- DropForeignKey
ALTER TABLE `books` DROP FOREIGN KEY `books_categoryId_fkey`;

-- DropForeignKey
ALTER TABLE `books` DROP FOREIGN KEY `books_publisherId_fkey`;

-- DropIndex
DROP INDEX `author_id` ON `books`;

-- DropIndex
DROP INDEX `category_id` ON `books`;

-- DropIndex
DROP INDEX `publisher_id` ON `books`;

-- AlterTable
ALTER TABLE `books` DROP COLUMN `authorId`,
    DROP COLUMN `categoryId`,
    DROP COLUMN `category_id`,
    DROP COLUMN `publisherId`,
    DROP COLUMN `synosis`,
    ADD COLUMN `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    ADD COLUMN `synopsis` VARCHAR(191) NULL,
    ADD COLUMN `updated_at` DATETIME(3) NOT NULL;

-- AlterTable
ALTER TABLE `categories` ADD COLUMN `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    ADD COLUMN `updated_at` DATETIME(3) NOT NULL;

-- AlterTable
ALTER TABLE `publishers` ADD COLUMN `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    ADD COLUMN `updated_at` DATETIME(3) NOT NULL;

-- CreateTable
CREATE TABLE `book_category` (
    `book_id` INTEGER NOT NULL,
    `category_id` INTEGER NOT NULL,

    PRIMARY KEY (`book_id`, `category_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateIndex
CREATE UNIQUE INDEX `books_isbn_key` ON `books`(`isbn`);

-- AddForeignKey
ALTER TABLE `books` ADD CONSTRAINT `books_author_id_fkey` FOREIGN KEY (`author_id`) REFERENCES `authors`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `books` ADD CONSTRAINT `books_publisher_id_fkey` FOREIGN KEY (`publisher_id`) REFERENCES `publishers`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `book_category` ADD CONSTRAINT `book_category_category_id_fkey` FOREIGN KEY (`category_id`) REFERENCES `categories`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `book_category` ADD CONSTRAINT `book_category_book_id_fkey` FOREIGN KEY (`book_id`) REFERENCES `books`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
