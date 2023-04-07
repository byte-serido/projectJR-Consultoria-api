/*
  Warnings:

  - A unique constraint covering the columns `[nome]` on the table `contacts` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "contacts_nome_key" ON "contacts"("nome");
