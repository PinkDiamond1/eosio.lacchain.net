---
id: crear-cuenta-usuario
title: Obtener una cuenta en LACChain
sidebar_label: Registrarse como Usuario
---

:::note Trabajo en progreso
Todavía estamos trabajando en este aspecto de la red. Consulte el [Roadmap del proyecto ](../roadmap).
:::

Existen varias formas de obtener una cuenta en LACChain EOSIO , las mas comunes son mediante una aplicación o mediante una entidad permisionada en LACChain.


## Crear cuenta mediante una aplicación

En la red LACChain EOSIO, las cuentes de los usuarios finales, pueden ser creadas mediante las aplicaciones desplegadas en la red o atraves de un partner o non-partner.

A continuación una lista de proyectos en las cuales registran cuentas en LACChain EOSIO para sus usuarios:

- [LifeBank](https://lifebank.io/)
- [Inmutrust](https://inmutrust.com/)


## Crear cuenta mediante una entidad permisionada

### 1. Generar llaves públicas y privadas

Las llaves, son requisito para crear una cuenta en una blockchain. Consulte el siguiente tutorial para crear [llaves privadas](./llaves-privadas). Una vez que obtiene su par de llaves, publica y privada, **solo es necesario compartitr sus llaves publicas** al solicitar crear una cuenta nueva en LACChain EOSIO.

###  2. Solicitar una cuenta a una entidad permisionada

Para poder crear una cuenta en LACChain EOSIO, es necesario establecer la comunicación con un a entidad permisionada en la cadena como `partner` o `non-partner`, los cuales pueden crear cuentas nuevas y permisionar acceso por sus nodos escritores.

Para ver la lista de partner que forman parte de la red diríjase [aquí](./partners).

> **El nombre de la cuenta debe cumplir con ciertos requisitos:**
 - No estar previamente registrada
 - Componerse de caracteres de la A a la Z en minúscula y números del 1 al 5 
 - Por ejemplo podemos crear una cuenta: `holacontrato`.