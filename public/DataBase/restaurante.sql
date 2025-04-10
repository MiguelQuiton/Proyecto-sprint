/*==============================================================*/
/* DBMS name:      MySQL 5.0                                    */
/* Created on:     9/4/2025 10:19:37                            */
/*==============================================================*/

drop table if exists Cliente;

drop table if exists Detalle_pedido;

drop table if exists Pago;

drop table if exists Pedido;

drop table if exists Plato;

/*==============================================================*/
/* Table: Cliente                                               */
/*==============================================================*/
create table Cliente
(
   idCliente            int not null auto_increment,
   nombreCliente        varchar(30) not null,
   apellidoCliente      varchar(50) not null,
   ubicacionCliente     varchar(64) not null,
   emailCliente         varchar(64) not null,
   telCliente           varchar(10) not null,
   primary key (idCliente)
);

/*==============================================================*/
/* Table: Detalle_pedido                                        */
/*==============================================================*/
create table Detalle_pedido
(
   idDetalle            int not null auto_increment,
   idPedido             int,
   idPlato              int,
   cantidad             int not null,
   preciounitario       decimal(10,2) not null,
   Total                decimal(10,2) not null,
   primary key (idDetalle)
);

/*==============================================================*/
/* Table: Pago                                                  */
/*==============================================================*/
create table Pago
(
   idPago               int not null auto_increment,
   idPedido             int,
   montoPago            decimal(10,2) not null,
   fechaPago            timestamp not null,
   metodoPago           varchar(20) not null,
   primary key (idPago)
);

/*==============================================================*/
/* Table: Pedido                                                */
/*==============================================================*/
create table Pedido
(
   idPedido             int not null auto_increment,
   idCliente            int,
   idPago               int,
   fechaPedido     timestamp,
   estadoPedido         varchar(20) not null,
   primary key (idPedido)
);

/*==============================================================*/
/* Table: Plato                                                 */
/*==============================================================*/
create table Plato
(
   idPlato              int not null auto_increment,
   nombrePlato          varchar(50) not null,
   descripcionPlato     varchar(256) not null,
   precioPlato          decimal(10,2) not null,
   disponiblePlato      bool not null,
   primary key (idPlato)
);

alter table Detalle_pedido add constraint FK_relationship_2 foreign key (idPedido)
      references Pedido (idPedido) on delete restrict on update restrict;

alter table Detalle_pedido add constraint FK_relationship_3 foreign key (idPlato)
      references Plato (idPlato) on delete restrict on update restrict;

alter table Pago add constraint FK_relationship_5 foreign key (idPedido)
      references Pedido (idPedido) on delete restrict on update restrict;

alter table Pedido add constraint FK_relationship_1 foreign key (idCliente)
      references Cliente (idCliente) on delete restrict on update restrict;

alter table Pedido add constraint FK_relationship_4 foreign key (idPago)
      references Pago (idPago) on delete restrict on update restrict;
