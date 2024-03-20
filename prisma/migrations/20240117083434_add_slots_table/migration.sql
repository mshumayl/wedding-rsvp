-- CreateTable
CREATE TABLE "Slots" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "displayName" TEXT NOT NULL,
    "remainingQty" INTEGER NOT NULL,

    CONSTRAINT "Slots_pkey" PRIMARY KEY ("id")
);
