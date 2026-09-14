-- AlterTable
ALTER TABLE `servicerequest` ADD COLUMN `quote` DOUBLE NULL,
    ADD COLUMN `quoteAt` DATETIME(3) NULL,
    ADD COLUMN `quoteMessage` VARCHAR(191) NULL,
    MODIFY `status` ENUM('pending', 'assigning', 'quoted', 'accepted', 'in_progress', 'completed', 'cancelled', 'failed') NOT NULL DEFAULT 'pending';
