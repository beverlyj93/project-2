CREATE DATABASE IF NOT EXISTS `vf_db`;
USE `vf_db`;
CREATE TABLE IF NOT EXISTS `users` (
    `id` INTEGER PRIMARY KEY AUTO_INCREMENT,
    `email` VARCHAR(36),
    `password` PASSWORD(24),
    `last_login` DATETIME
)