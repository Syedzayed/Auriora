-- Drop OAuth tables that are no longer needed
DROP TABLE IF EXISTS "Account" CASCADE;
DROP TABLE IF EXISTS "Session" CASCADE;
DROP TABLE IF EXISTS "VerificationToken" CASCADE;

-- Remove old columns from User not needed anymore
ALTER TABLE "User" DROP COLUMN IF EXISTS "emailVerified";
ALTER TABLE "User" DROP COLUMN IF EXISTS "image";

-- Make name NOT NULL (fill existing NULLs first)
UPDATE "User" SET "name" = 'User' WHERE "name" IS NULL;
ALTER TABLE "User" ALTER COLUMN "name" SET NOT NULL;

-- Add new columns
ALTER TABLE "User" ADD COLUMN IF NOT EXISTS "phone" TEXT;
ALTER TABLE "User" ADD COLUMN IF NOT EXISTS "password" TEXT NOT NULL DEFAULT '';

-- Remove the temporary default so new rows must provide a password
ALTER TABLE "User" ALTER COLUMN "password" DROP DEFAULT;
