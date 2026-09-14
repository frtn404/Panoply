-- AlterTable
ALTER TABLE `servicerequest` ADD COLUMN `customerOtp` VARCHAR(191) NULL,
    ADD COLUMN `otpExpiresAt` DATETIME(3) NULL,
    ADD COLUMN `otpVerifiedAt` DATETIME(3) NULL,
    ADD COLUMN `providerOtp` VARCHAR(191) NULL;
