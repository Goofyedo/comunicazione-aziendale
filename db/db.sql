CREATE TABLE admins(
    id INT PRIMARY KEY AUTO_INCREMENT,
    email VARCHAR(255) UNIQUE,
    password VARCHAR(255) NOT NULL,
    name VARCHAR(255) NOT NULL,
    lastName VARCHAR(255) NOT NULL,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE roles(
    roleId INT PRIMARY KEY AUTO_INCREMENT,
    adminId INT,
    role TINYINT
);

CREATE TABLE medias(
    uuid VARCHAR(255) PRIMARY KEY,
    name VARCHAR(255) NOT NULL
);

CREATE TABLE posts(
    id INT PRIMARY KEY AUTO_INCREMENT,
    imageURL VARCHAR(255) NOT NULL,
    title VARCHAR(255) NOT NULL,
    description TEXT NOT NULL,
    actualDate DATE NOT NULL,
    startDate DATE NOT NULL,
    endDate DATE NOT NULL,
    creatorId INT,
    lastModificatorId INT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (creatorID) REFERENCES admins(id),
    FOREIGN KEY (lastModificatorID) REFERENCES admins(id)
);

CREATE TABLE categories(
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(255) UNIQUE,
    description TEXT,
    colour VARCHAR(255)
);

CREATE TABLE post_targets(
    id INT PRIMARY KEY AUTO_INCREMENT,
    eventId INT,
    categoryId INT,
    FOREIGN KEY (eventId) REFERENCES events(id),
    FOREIGN KEY (categoryId) REFERENCES categories(id)
);

CREATE TABLE audiences(
    id INT PRIMARY KEY AUTO_INCREMENT,
    email VARCHAR(255) UNIQUE,
    categoryId INT,
    FOREIGN KEY (categoryId) REFERENCES categories(id)
);

--- demo users:
INSERT INTO `admins` (`id`, `email`, `password`, `name`, `lastName`, `created_at`) VALUES
(1, 'paolo@example.com', '$2b$10$.lMw1x2XJayuU.xlAhDmt.VljtKVDhR2fFs0OYPvMetjEsb1hMGPi', 'Paolo', 'Bianchessi', '2023-12-05 15:08:39');
INSERT INTO `roles` (`adminId`, `role`) VALUES (1, 1);
INSERT INTO `admins` (`id`,`email`, `password`, `name`, `lastName`) VALUES
(2, 'edo@example.com', '$2b$10$.lMw1x2XJayuU.xlAhDmt.VljtKVDhR2fFs0OYPvMetjEsb1hMGPi', 'Edoardo', 'Barlassina');
INSERT INTO `roles` (`adminId`, `role`) VALUES (2, 0);

INSERT INTO `admins` (`id`,`email`, `password`, `name`, `lastName`) VALUES
(3, 'alexis@example.com', '$2b$10$.lMw1x2XJayuU.xlAhDmt.VljtKVDhR2fFs0OYPvMetjEsb1hMGPi', 'Alexis', 'Rossi');

INSERT INTO `roles` (`adminId`, `role`) VALUES (3, 1);

INSERT INTO `admins` (`id`,`email`, `password`, `name`, `lastName`) VALUES
(4, 'andrea@example.com', '$2b$10$.lMw1x2XJayuU.xlAhDmt.VljtKVDhR2fFs0OYPvMetjEsb1hMGPi', 'Andrea', 'Polli');

INSERT INTO `roles` (`adminId`, `role`) VALUES (4, 0);