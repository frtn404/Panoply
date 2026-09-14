-- CreateTable
CREATE TABLE `Payment` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `jobId` INTEGER NOT NULL,
    `amount` DOUBLE NOT NULL,
    `reference` VARCHAR(191) NOT NULL,
    `status` ENUM('pending', 'held', 'released', 'refunded', 'failed') NOT NULL DEFAULT 'pending',
    `paidBy` INTEGER NOT NULL,
    `paidTo` INTEGER NULL,
    `releasedAt` DATETIME(3) NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    UNIQUE INDEX `Payment_reference_key`(`reference`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Payment` ADD CONSTRAINT `Payment_jobId_fkey` FOREIGN KEY (`jobId`) REFERENCES `ServiceRequest`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Payment` ADD CONSTRAINT `Payment_paidBy_fkey` FOREIGN KEY (`paidBy`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Payment` ADD CONSTRAINT `Payment_paidTo_fkey` FOREIGN KEY (`paidTo`) REFERENCES `User`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
