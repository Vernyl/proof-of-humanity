-- CreateTable
CREATE TABLE `User` (
    `user_id` INTEGER NOT NULL AUTO_INCREMENT,
    `join_time` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `score` INTEGER NOT NULL DEFAULT 0,
    `max_members` INTEGER NOT NULL DEFAULT 0,
    `oldest_message` INTEGER NOT NULL DEFAULT 0,
    `phone_number` VARCHAR(16) NULL,
    `vouched_for` INTEGER NOT NULL DEFAULT 0,
    `external_id` VARCHAR(191) NULL,

    UNIQUE INDEX `User_external_id_key`(`external_id`),
    PRIMARY KEY (`user_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Channel` (
    `channel_id` INTEGER NOT NULL AUTO_INCREMENT,
    `user_id` INTEGER NOT NULL,
    `members` INTEGER NOT NULL,
    `association_time` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`channel_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Vouching` (
    `voucher` INTEGER NOT NULL,
    `vouched_for` INTEGER NOT NULL,
    `status` VARCHAR(191) NOT NULL DEFAULT 'V',
    `vouching_time` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`voucher`, `vouched_for`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Api` (
    `token` VARCHAR(191) NOT NULL,
    `quota` INTEGER NOT NULL DEFAULT -1,

    PRIMARY KEY (`token`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Channel` ADD CONSTRAINT `Channel_user_id_fkey` FOREIGN KEY (`user_id`) REFERENCES `User`(`user_id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Vouching` ADD CONSTRAINT `Vouching_voucher_fkey` FOREIGN KEY (`voucher`) REFERENCES `User`(`user_id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Vouching` ADD CONSTRAINT `Vouching_vouched_for_fkey` FOREIGN KEY (`vouched_for`) REFERENCES `User`(`user_id`) ON DELETE RESTRICT ON UPDATE CASCADE;
