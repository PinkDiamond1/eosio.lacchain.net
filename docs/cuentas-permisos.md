---
id: cuentas-permisos
title: Cuentas y Autorizaciones
sidebar_label: Cuentas y Autorizaciones
---

## Cuentas

Una **cuenta** en EOSIO es un nombre legible para humanos que se almacena en la cadena de bloques. Puede ser propiedad de un individuo o grupo de individuos dependiendo de la configuración de los permisos. Se requiere una cuenta para transferir o enviar cualquier transacción válida a la cadena de bloques.

El nombre de la cuenta debe cumplir con ciertos requisitos: caracteres de la a `a` la `z` en minúscula, números del `1` al `5` y tener una longitud de 12 caracteres. Por ejemplo : `lacchaineos1`.

En la red de LACChain EOSIO, existen varios tipos de cuentas. Consulte la guía para crear una cuenta según su rol de usuario: 

- [Usuario final](guias/crear-cuenta-usuario)
- [Aplicación o contrato](guias/crear-cuenta-contrato)
- [Non-partner](guias/crear-cuenta-entidad)
- [Partner](guias/crear-cuenta-entidad)


## Permisos

EOSIO permite crear permisos jerárquicos personalizados que se derivan del permiso `owner`. Un permiso personalizado es básicamente una llave que solo puede realizar las acciones que se le permite realizar.

Cada cuenta posee dos permisos base `owner` y `active` siendo `owner` una llave de recuperación que se utiliza solo en caso de querer cambiar la clave `active`. Aparte de estos dos permisos iniciales se pueden configurar permisos a la medida.

 >  **Por ejemplo:** Cualquier cuenta puede crear un permiso personalizado con su par de llaves únicas para interactuar únicamente con un contrato.

De esta manera, EOSIO ofrece capacidades de permisos de última generación con una gran flexibilidad para configurar un protocolo simple o complejo integrado en el protocolo base.

Los permisos de la cuenta también fortalecen la seguridad en caso de que alguien que no esté autorizado obtenga una llave privada, lo único que puede hacer son las acciones que la clave se ha limitado a ejecutar.


## Autorizaciones

Una cuenta puede definir una asignación entre cualquiera de sus permisos nombrados y un contrato inteligente o acción dentro de ese contrato. Esto permite un control más preciso sobre las autorizaciones de acción, lo que facilita mucho que las cuentas que pertenecen a actores con diferentes roles dentro de una organización reflejen la estructura organizativa en la cadena de bloques.

En otras palabras, el permiso de cada cuenta se puede vincular a una tabla de autoridad utilizada para determinar si se puede satisfacer una autorización de acción determinada.

Para obtener más información sobre estos conceptos, consulte [documentación de cuentas y permisos](https://developers.eos.io/welcome/latest/protocol/accounts_and_permissions).
