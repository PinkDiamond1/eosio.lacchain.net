---
id: recursos
title: Uso de Recursos
sidebar_label: Uso de Recursos
---

LACChain no tiene y no tendrá tarifas de transacción. Sin embargo, para limitar el uso de la red a sus límites técnicos y evitar ataques de denegación de servicio, es necesario establecer un mecanismo para solicitar y asignar recursos de red.

## Recursos Computacionales

Las cuentas podrán utilizar los siguientes recursos en la red:

### CPU
El recurso de CPU, en una cadena de bloques basada en EOSIO, representa el tiempo de procesamiento de una acción y se mide en microsegundos (μs). 

Se refiere a este recurso como `CPU bandwith`  el resultado del comando `cleos get account` se indica la cantidad de tiempo de procesamiento que una cuenta tiene a su disposición al enviar acciones a un contrato. 

Puede encontrar más detalles sobre la CPU como recurso del sistema [aquí](https://developers.eos.io/manuals/eosio.contracts/latest/key-concepts/cpu).

### RAM
En una cadena de bloques basada en EOSIO, RAM es uno de los recursos del sistema importantes que consumen las cuentas y los contratos inteligentes. RAM actúa como un almacenamiento permanente y se utiliza para almacenar nombres de cuenta, permisos, saldo de token y otros datos para un acceso rápido a los datos en cadena. La RAM debe asignarse, ya que es un recurso persistente limitado, medido en KiloBytes.

Puede encontrar más detalles sobre RAM como recurso del sistema [aquí](https://developers.eos.io/manuals/eosio.contracts/latest/key-concepts/ram).

### Network (NET)

Además de CPU y RAM, NET también es un recurso muy importante en las cadenas de bloques basadas en EOSIO. NET es el ancho de banda de la red, medido en bytes, de transacciones y se denomina `net bandwidth` en el comando `cleos get account`. Igual que CPU NET es también un recurso de sistema transitorio.

Puede encontrar más detalles sobre NET como recurso del sistema [aquí](https://developers.eos.io/manuals/eosio.contracts/latest/key-concepts/net).

