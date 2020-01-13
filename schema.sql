CREATE TABLE "posts" (
    "id" serial NOT NULL,
    "image_url" TEXT NOT NULL,
    "image_medium_url" TEXT NOT NULL,
    "lazy_url" TEXT NOT NULL,
    "aspect_ratio" TEXT NOT NULL,
    CONSTRAINT "images_pk" PRIMARY KEY ("id")
);

CREATE TABLE "profiles" (
    "id" serial NOT NULL,
    "name" TEXT NOT NULL,
    "tag" TEXT NOT NULL,
    "image_url" TEXT NOT NULL,
    "lazy_url" TEXT NOT NULL,
    "followers" INTEGER NOT NULL DEFAULT 0,
    "following" INTEGER NOT NULL DEFAULT 0
);