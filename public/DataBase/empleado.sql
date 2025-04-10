/*==============================================================*/
/* DBMS name:      MySQL 5.0                                    */
/* Created on:    10/4/2025 10:18:37                            */
/*==============================================================*/

drop table if exists Empleado;


/*==============================================================*/
/* Table: Empleado                                              */
/*==============================================================*/
create or replace table Empleado
(
   idEmpleado            int not null auto_increment,
   nombreEmpleado        varchar(30) not null,
   apellidoEmpleado      varchar(50) not null,
   ciEmpleado            varchar(12) not null,
   celEmpleado           varchar(10) not null,
   cargoEmpleado         varchar(25) not null,
   sueldoEmpleado        decimal(10,2) not null,
   
   primary key (idEmpleado)
);
