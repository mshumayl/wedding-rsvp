-- CreateTable
CREATE TABLE "RsvpResponse" (
    "id" TEXT NOT NULL,
    "isAttending" BOOLEAN NOT NULL,
    "name" TEXT NOT NULL,
    "phoneNumber" TEXT,
    "attendanceCt" INTEGER,
    "timeSlot" TEXT,
    "wishes" TEXT,

    CONSTRAINT "RsvpResponse_pkey" PRIMARY KEY ("id")
);
