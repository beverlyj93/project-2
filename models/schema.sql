USE `x3wgrqcvk6vwptyo`;
CREATE TABLE IF NOT EXISTS `users` (
    `id` INTEGER PRIMARY KEY AUTO_INCREMENT,
    `email` VARCHAR(36),
    `password` PASSWORD(24),
    `last_login` DATETIME
)