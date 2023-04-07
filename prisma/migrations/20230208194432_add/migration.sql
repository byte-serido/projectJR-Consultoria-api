/*
  Warnings:

  - You are about to drop the `commentsAux` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "commentsAux" DROP CONSTRAINT "commentsAux_posts_fkey";

-- DropTable
DROP TABLE "commentsAux";

-- CreateTable
CREATE TABLE "comments" (
    "id" TEXT NOT NULL,
    "authorName" TEXT,
    "text" TEXT NOT NULL,
    "data_init" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "data_up" TIMESTAMP(3) NOT NULL,
    "posts" TEXT NOT NULL,

    CONSTRAINT "comments_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "comments_id_key" ON "comments"("id");

-- AddForeignKey
ALTER TABLE "comments" ADD CONSTRAINT "comments_posts_fkey" FOREIGN KEY ("posts") REFERENCES "posts"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
