-- Listar base de datos

SHOW DATABASES;

-- Crear base de datos

CREATE DATABASE ecommerce;

-- Usar base de datos

USE ecommerce;

-- Listar tablas

SHOW TABLES;

-- Crear tabla de productos

CREATE TABLE productos (
  id INT NOT NULL AUTO_INCREMENT,
  name VARCHAR(30),
  price FLOAT DEFAULT 50,
  description VARCHAR(255),
  stock INT,
  PRIMARY KEY (id)
);

-- Detalle de una tabla

DESCRIBE productos;

--Agregar productos

INSERT INTO productos (name, price, description, stock) VALUES ('Coca Cola', 20.15, 'Refresco de cola', 100);
INSERT INTO productos (name, price, description, stock) VALUES ('Agua natural', 15.50, 'Bebida', 200);
INSERT INTO productos (name, price, description, stock) VALUES ('Galletas', 20.20, 'Paquete con 20 galletas', 80);

-- Listar productos

SELECT * FROM productos;

-- Crear tabla de categorias

CREATE TABLE categorias (
  id INT NOT NULL AUTO_INCREMENT,
  name VARCHAR(30),
  PRIMARY KEY (id)
);

-- Modificar la tabla de productos y agregar la llave foranea a categorias

ALTER TABLE productos
ADD COLUMN categoria_id INT NOT NULL DEFAULT 10,
ADD FOREIGN KEY (categoria_id) REFERENCES categorias(id);

-- Insertar varias categorías a la vez

INSERT INTO categorias (name) VALUES ('Bebidas'), ('Snacks');

-- Actualizar productos

UPDATE productos SET categoria_id = 1 WHERE id IN (1, 2);
UPDATE productos SET categoria_id = 2 WHERE name = 'Galletas';

-- Borrar registro

DELETE FROM productos WHERE id = 2;








