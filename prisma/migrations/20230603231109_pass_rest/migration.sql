-- CreateTable
CREATE TABLE "users" (
    "id" TEXT NOT NULL,
    "username" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "mod" TEXT NOT NULL,
    "password_token" TEXT NOT NULL,
    "password_expires" TIMESTAMP(3) NOT NULL,
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

-- CreateTable
CREATE TABLE "contacts" (
    "id" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "nome" TEXT NOT NULL,
    "empresa" TEXT NOT NULL,
    "numero" TEXT NOT NULL,
    "data_init" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "data_up" TIMESTAMP(3) NOT NULL,
    "proposta" TEXT NOT NULL,

    CONSTRAINT "contacts_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "posts" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "autor" TEXT NOT NULL,
    "imgUrl" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "posts_pkey" PRIMARY KEY ("id")
);

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

-- CreateTable
CREATE TABLE "depositions" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "testimony" TEXT NOT NULL,
    "office" TEXT NOT NULL,
    "company" TEXT NOT NULL,
    "imgUrl" TEXT NOT NULL,

    CONSTRAINT "depositions_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "users_id_key" ON "users"("id");

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

-- CreateIndex
CREATE UNIQUE INDEX "contacts_email_key" ON "contacts"("email");

-- CreateIndex
CREATE UNIQUE INDEX "posts_id_key" ON "posts"("id");

-- CreateIndex
CREATE UNIQUE INDEX "posts_title_key" ON "posts"("title");

-- CreateIndex
CREATE UNIQUE INDEX "comments_id_key" ON "comments"("id");

-- CreateIndex
CREATE UNIQUE INDEX "depositions_id_key" ON "depositions"("id");

-- AddForeignKey
ALTER TABLE "comments" ADD CONSTRAINT "comments_posts_fkey" FOREIGN KEY ("posts") REFERENCES "posts"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
