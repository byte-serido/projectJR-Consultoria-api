/*
  Warnings:

  - A unique constraint covering the columns `[id]` on the table `contacts` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateTable
CREATE TABLE "users" (
    "id" TEXT NOT NULL,
    "username" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "mod" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "solutions" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "imgUrl" TEXT NOT NULL,

    CONSTRAINT "solutions_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "member" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "registration" TEXT NOT NULL,
    "number" TEXT NOT NULL,
    "role" TEXT NOT NULL,
    "data_init" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "data_up" TIMESTAMP(3) NOT NULL,
    "description" TEXT NOT NULL,
    "imgUrl" TEXT NOT NULL,

    CONSTRAINT "member_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "users_username_key" ON "users"("username");

-- CreateIndex
CREATE UNIQUE INDEX "users_email_key" ON "users"("email");

-- CreateIndex
CREATE UNIQUE INDEX "solutions_id_key" ON "solutions"("id");

-- CreateIndex
CREATE UNIQUE INDEX "solutions_name_key" ON "solutions"("name");

-- CreateIndex
CREATE UNIQUE INDEX "member_id_key" ON "member"("id");

-- CreateIndex
CREATE UNIQUE INDEX "member_registration_key" ON "member"("registration");

-- CreateIndex
CREATE UNIQUE INDEX "contacts_id_key" ON "contacts"("id");
