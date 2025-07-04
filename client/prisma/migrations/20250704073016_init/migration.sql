-- CreateTable
CREATE TABLE "posts" (
    "id" SERIAL NOT NULL,
    "date" TIMESTAMP(3),
    "paragraph" TEXT,
    "location" TEXT,
    "image" JSONB,

    CONSTRAINT "posts_pkey" PRIMARY KEY ("id")
);
