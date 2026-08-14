-- CreateTable
CREATE TABLE `ProviderProfile` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `userId` INTEGER NOT NULL,
    `category` ENUM('Electrical', 'Plumbing', 'Cleaning', 'AC_Repair', 'Carpentry', 'Generator', 'Solar', 'Painting') NOT NULL,
    `bio` VARCHAR(191) NULL,
    `averageRating` DOUBLE NOT NULL DEFAULT 0,
    `isAvailable` BOOLEAN NOT NULL DEFAULT true,
    `completedJobsCount` INTEGER NOT NULL DEFAULT 0,
    `latitude` DOUBLE NULL,
    `longitude` DOUBLE NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    UNIQUE INDEX `ProviderProfile_userId_key`(`userId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `ProviderProfile` ADD CONSTRAINT `ProviderProfile_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
