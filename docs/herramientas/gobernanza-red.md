---
id: gobernanza-red
title: Herramientas de Gobernanza.
sidebar_label: Gobernanza de Red
---

## Contratos de Sistema

Los contratos de permisionado de LACChain EOSIO son implementados como [Contratos de Sistema](https://developers.eos.io/manuals/eosio.contracts/latest/index). Estos contratos tiene acceso a [funciones privilegiadas](http://localhost:3000/docs/recursos/funciones-importantes) que encapsulan la funcionalidad base para el marco de gobernanza de LACChain.

[Contratos de Sistemas LACChain EOSOIO ](https://github.com/LatamLink/eosio.contracts/tree/master/contracts/lacchain.system)


## Interfaz Grafica para Comite Permisionador
Esta herramienta es para manejar el permisionamiento y gobernanza de LACChain EOSIO mediante contratos inteligentes.

Herramienta GUI para facilitar la gestión de la red por parte del comité permisionador. 

https://dashboard.latamlink.io/management

Alguna de las funciones disponibles son:

### Registro de nodos validadores

### Cambios de nodos activos

### Asignación de recursos a cuentas

## Blacklisting de cuentas

Las cuentas se pueden agregar a una lista negra que debe de ser implementada por todos los nodos validadores para efectivamente bloquear acceso a una cuenta.

## Actualización de contratos de sistema

La actualización de los contratos de sistema solo se puede realizar por la cuenta `eosio` la cual representa al comité permisionador.

:::note Trabajo en progreso
Aun estamos trabajando en este aspecto de la documentación, si desea mejorar el contenido puede aprender [como contribuir](../guias/contribuir). Consulte el [Roadmap del proyecto](../testnet/roadmap).
:::