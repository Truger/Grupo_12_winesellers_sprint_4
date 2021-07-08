SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema WineSellersBD
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema WineSellersBD
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `WineSellersBD` DEFAULT CHARACTER SET utf8 ;
USE `WineSellersBD` ;

-- -----------------------------------------------------
-- Table `WineSellersBD`.`users`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `WineSellersBD`.`users` (
  `id(PK)` INT NOT NULL,
  `first_name` VARCHAR(45) NOT NULL,
  `last_name` VARCHAR(45) NOT NULL,
  `username` VARCHAR(45) NOT NULL,
  `email` VARCHAR(45) NOT NULL,
  `password` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id(PK)`),
  UNIQUE INDEX `username_UNIQUE` (`username` ASC),
  UNIQUE INDEX `email_UNIQUE` (`email` ASC))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `WineSellersBD`.`brands`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `WineSellersBD`.`brands` (
  `id(PK)` INT NOT NULL,
  `name` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id(PK)`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `WineSellersBD`.`categories`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `WineSellersBD`.`categories` (
  `id(PK)` INT NOT NULL,
  `name` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id(PK)`))
ENGINE = InnoDB;





-- -----------------------------------------------------
-- Table `WineSellersBD`.`sizes`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `WineSellersBD`.`sizes` (
  `id(PK)` INT NOT NULL,
  `description` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id(PK)`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `WineSellersBD`.`orderStatus`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `WineSellersBD`.`orderStatus` (
  `id(Pk)` INT NOT NULL,
  `name` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id(Pk)`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `WineSellersBD`.`payments`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `WineSellersBD`.`payments` (
  `id(PK)` INT NOT NULL,
  `name` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id(PK)`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `WineSellersBD`.`orders`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `WineSellersBD`.`orders` (
  `id(PK)` INT NOT NULL,
  `number` INT NOT NULL,
  `date` DATE NOT NULL,
  `total` DECIMAL NOT NULL,
  `users_id(PK)` INT NOT NULL,
  `orderStatus_id(Pk)` INT NOT NULL,
  `payments_id(PK)` INT NOT NULL,
  PRIMARY KEY (`id(PK)`, `users_id(PK)`, `orderStatus_id(Pk)`, `payments_id(PK)`),
  INDEX `fk_orders_users1_idx` (`users_id(PK)` ASC),
  INDEX `fk_orders_orderStatus1_idx` (`orderStatus_id(Pk)` ASC),
  INDEX `fk_orders_payments1_idx` (`payments_id(PK)` ASC),
  CONSTRAINT `fk_orders_users1`
    FOREIGN KEY (`users_id(PK)`)
    REFERENCES `WineSellersBD`.`users` (`id(PK)`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_orders_orderStatus1`
    FOREIGN KEY (`orderStatus_id(Pk)`)
    REFERENCES `WineSellersBD`.`orderStatus` (`id(Pk)`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_orders_payments1`
    FOREIGN KEY (`payments_id(PK)`)
    REFERENCES `WineSellersBD`.`payments` (`id(PK)`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `WineSellersBD`.`orderDetails`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `WineSellersBD`.`orderDetails` (
  `id` INT NOT NULL,
  `quantitiy` INT NOT NULL,
  `subtotal` DECIMAL NOT NULL,
  `products_id(FK)` INT NOT NULL,
  `orders_id(PK)` INT NOT NULL,
  PRIMARY KEY (`id`, `orders_id(PK)`),
  INDEX `fk_orderDetails_orders1_idx` (`orders_id(PK)` ASC),
  CONSTRAINT `fk_orderDetails_orders1`
    FOREIGN KEY (`orders_id(PK)`)
    REFERENCES `WineSellersBD`.`orders` (`id(PK)`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `WineSellersBD`.`products`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `WineSellersBD`.`products` (
  `id(PK)` INT NOT NULL,
  `name` VARCHAR(45) NOT NULL,
  `description` VARCHAR(1000) NOT NULL,
  `price` DECIMAL NOT NULL,
  `brands_id(PK)` INT NOT NULL,
  `categories_id(PK)` INT NOT NULL,
  `sizes_id(PK)` INT NOT NULL,
  `quantity` INT NOT NULL,
  PRIMARY KEY (`id(PK)`, `brands_id(PK)`, `categories_id(PK)`, `sizes_id(PK)`, 'quantity(PK)'),
  INDEX `fk_products_brands_idx` (`brands_id(PK)` ASC),
  INDEX `fk_products_categories1_idx` (`categories_id(PK)` ASC),
  INDEX `fk_products_stock1_idx` (`stock_id(PK)` ASC),
  INDEX `fk_products_sizes1_idx` (`sizes_id(PK)` ASC),
  CONSTRAINT `fk_products_brands`
    FOREIGN KEY (`brands_id(PK)`)
    REFERENCES `WineSellersBD`.`brands` (`id(PK)`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_products_categories1`
    FOREIGN KEY (`categories_id(PK)`)
    REFERENCES `WineSellersBD`.`categories` (`id(PK)`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_products_stock1`
    FOREIGN KEY (`stock_id(PK)`)
    REFERENCES `WineSellersBD`.`stock` (`id(PK)`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_products_sizes1`
    FOREIGN KEY (`sizes_id(PK)`)
    REFERENCES `WineSellersBD`.`sizes` (`id(PK)`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `WineSellersBD`.`images`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `WineSellersBD`.`images` (
  `id(PK)` INT NOT NULL,
  `name` VARCHAR(45) NOT NULL,
  `products_id(PK)` INT NOT NULL,
  PRIMARY KEY (`id(PK)`, `products_id(PK)`),
  INDEX `fk_images_products1_idx` (`products_id(PK)` ASC),
  CONSTRAINT `fk_images_products1`
    FOREIGN KEY (`products_id(PK)`)
    REFERENCES `WineSellersBD`.`products` (`id(PK)`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
