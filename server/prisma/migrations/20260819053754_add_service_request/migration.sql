-- CreateTable
CREATE TABLE `ServiceRequest` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `customerId` INTEGER NOT NULL,
    `providerId` INTEGER NULL,
    `category` ENUM('Electrical', 'Plumbing', 'Cleaning', 'AC_Repair', 'Carpentry', 'Generator', 'Solar', 'Painting') NOT NULL,
    `description` VARCHAR(191) NOT NULL,
    `address` VARCHAR(191) NOT NULL,
    `latitude` DOUBLE NOT NULL,
    `longitude` DOUBLE NOT NULL,
    `scheduledDate` DATETIME(3) NOT NULL,
    `status` ENUM('pending', 'assigning', 'accepted', 'in_progress', 'completed', 'cancelled', 'failed') NOT NULL DEFAULT 'pending',
    `amount` DOUBLE NULL,
    `cancelReason` VARCHAR(191) NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `ServiceRequest` ADD CONSTRAINT `ServiceRequest_customerId_fkey` FOREIGN KEY (`customerId`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `ServiceRequest` ADD CONSTRAINT `ServiceRequest_providerId_fkey` FOREIGN KEY (`providerId`) REFERENCES `User`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
