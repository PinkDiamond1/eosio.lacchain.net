---
id: crear-cuenta-contrato
title: Obtener una cuenta para un contrato
sidebar_label: Registrarse como App
---

Las cuentas de aplicación o contrato inteligente, son utilizadas para el desarrollo de aplicaciones como su nombre lo indica, este tipo de cuentas principalmente son las que poseen las acciones del sistema, permitiendo a los usuarios finales interactuar con ellas y el blockchain. 

### 1. Generar llaves públicas y privadas

Las llaves, son requisito para crear una cuenta en una blockchain. Consulte el siguiente tutorial para crear [llaves privadas](./llaves-privadas). Una vez que obtiene su par de llaves, publica y privada, **solo es necesario compartir sus llaves publicas** al solicitar crear una cuenta nueva en LACChain EOSIO.

###  2. Solicitar una cuenta a una entidad

Para poder crear una cuenta en LACChain EOSIO, es necesario establecer la comunicación con un `Partner`, los cuales son los encargados de crear las cuentas.  

Para ver la lista de partner que forman parte de la red diríjase [aquí](./partners).

> **El nombre de la cuenta debe cumplir con ciertos requisitos:**
 - No estar previamente registrada
 - Componerse de caracteres de la A a la Z en minúscula y números del 1 al 5 
 - Por ejemplo podemos crear una cuenta: `holacontrato`.


:::note Trabajo en progreso
Aun estamos trabajando en este aspecto de la documentación, si desea mejorar el contenido puede aprender [cómo contribuir](./contribuir). Consulte el [Roadmap del proyecto](../roadmap).
:::