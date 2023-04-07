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
