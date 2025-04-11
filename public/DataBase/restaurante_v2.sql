/*==============================================================*/
/* DBMS name:      MySQL 5.0                                    */
/* Created on:     11/4/2025 08:44:36                           */
/*==============================================================*/

DROP TABLE IF EXISTS Cliente;
DROP TABLE IF EXISTS Detalle_pedido;
DROP TABLE IF EXISTS Empleado;
DROP TABLE IF EXISTS Gerente;
DROP TABLE IF EXISTS Pago;
DROP TABLE IF EXISTS Pedido;
DROP TABLE IF EXISTS Plato;


/* Eliminación de tablas para poder eliminar de forma directa
SET FOREIGN_KEY_CHECKS = 0;
SET FOREIGN_KEY_CHECKS = 1; */


/*==============================================================*/
/* Table: Cliente                                               */
/*==============================================================*/
CREATE TABLE Cliente (
   idCliente            INT NOT NULL AUTO_INCREMENT,
   nombreCliente        VARCHAR(30) NOT NULL,
   apellidoCliente      VARCHAR(50) NOT NULL,
   ubicacionCliente     VARCHAR(64) NOT NULL,
   emailCliente         VARCHAR(64) NOT NULL,
   telCliente           VARCHAR(10) NOT NULL,
   PRIMARY KEY (idcliente)
);

/*==============================================================*/
/* Table: Detalle_pedido                                        */
/*==============================================================*/
CREATE TABLE Detalle_pedido (
   idDetalle            INT NOT NULL AUTO_INCREMENT,
   idPedido             INT,
   idPlato              INT,
   cantidad             INT NOT NULL,
   precioUnitario       DECIMAL(10,2) NOT NULL,
   total         DECIMAL(10,2) NOT NULL,
   PRIMARY KEY (idDetalle)
);

/*==============================================================*/
/* Table: Empleado                                              */
/*==============================================================*/
CREATE TABLE Empleado (
   idEmpleado           INT NOT NULL AUTO_INCREMENT,
   idGerente            INT,
   nombreEmpleado       VARCHAR(30) NOT NULL,
   apellidoEmpleado     VARCHAR(50) NOT NULL,
   ciEmpleado           VARCHAR(12) NOT NULL,
   celEmpleado          VARCHAR(10) NOT NULL,
   cargoEmpleado        VARCHAR(25) NOT NULL,
   sueldoEmpleado       DECIMAL(10,2) NOT NULL,
   PRIMARY KEY (idEmpleado)
);

/*==============================================================*/
/* Table: Gerente                                               */
/*==============================================================*/
CREATE TABLE Gerente (
   idGerente            INT NOT NULL AUTO_INCREMENT,
   usuario              VARCHAR(10) NOT NULL,
   password             VARCHAR(10) NOT NULL,
   PRIMARY KEY (idGerente)
);

/*==============================================================*/
/* Table: Pago                                                  */
/*==============================================================*/
CREATE TABLE Pago (
   idPago               INT NOT NULL AUTO_INCREMENT,
   idPedido             INT,
   montoPago            DECIMAL(10,2) NOT NULL,
   fechapago            TIMESTAMP NOT NULL,
   metodopago           VARCHAR(20) NOT NULL,
   PRIMARY KEY (idPago)
);

/*==============================================================*/
/* Table: Pedido                                                */
/*==============================================================*/
CREATE TABLE Pedido (
   idPedido             INT NOT NULL AUTO_INCREMENT,
   idCliente            INT,
   idPago               INT,
   fechaPedido          TIMESTAMP,
   estadopedido         VARCHAR(20) NOT NULL,
   PRIMARY KEY (idPedido)
);

/*==============================================================*/
/* Table: Plato                                                 */
/*==============================================================*/
CREATE TABLE Plato (
   idPlato              INT NOT NULL AUTO_INCREMENT,
   idGerente            INT,
   nombrePlato          CHAR(50) NOT NULL,
   descripcionPlato     CHAR(255) NOT NULL,
   precioPlato          DECIMAL(10,2) NOT NULL,
   disponiblePlato      BOOL NOT NULL,
   PRIMARY KEY (idPlato)
);

/*==============================================================*/
/* Foreign Keys                                                 */
/*==============================================================*/
ALTER TABLE Detalle_pedido ADD CONSTRAINT FK_Rel_2 FOREIGN KEY (idPedido)
      REFERENCES Pedido (idPedido) ON DELETE RESTRICT ON UPDATE RESTRICT;

ALTER TABLE Detalle_pedido ADD CONSTRAINT FK_Rel_3 FOREIGN KEY (idPlato)
      REFERENCES Plato (idPlato) ON DELETE RESTRICT ON UPDATE RESTRICT;

ALTER TABLE Empleado ADD CONSTRAINT FK_Rel_5 FOREIGN KEY (idGerente)
      REFERENCES Gerente (idGerente) ON DELETE RESTRICT ON UPDATE RESTRICT;

ALTER TABLE Pago ADD CONSTRAINT FK_Rel_7 FOREIGN KEY (idPedido)
      REFERENCES Pedido (idPedido) ON DELETE RESTRICT ON UPDATE RESTRICT;

ALTER TABLE Pedido ADD CONSTRAINT FK_Rel_1 FOREIGN KEY (idCliente)
      REFERENCES Cliente (idCliente) ON DELETE RESTRICT ON UPDATE RESTRICT;

ALTER TABLE Pedido ADD CONSTRAINT FK_Rel_4 FOREIGN KEY (idPago)
      REFERENCES Pago (idPago) ON DELETE RESTRICT ON UPDATE RESTRICT;

ALTER TABLE Plato ADD CONSTRAINT FK_Rel_6 FOREIGN KEY (idGerente)
      REFERENCES Gerente (idGerente) ON DELETE RESTRICT ON UPDATE RESTRICT;
