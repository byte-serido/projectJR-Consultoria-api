/*
  Warnings:

  - You are about to drop the column `password_expires` on the `users` table. All the data in the column will be lost.
  - You are about to drop the column `password_token` on the `users` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "users" DROP COLUMN "password_expires",
DROP COLUMN "password_token";
