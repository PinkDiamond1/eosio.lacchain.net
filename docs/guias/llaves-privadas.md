---
id: llaves-privadas
title: Manejo de Llaves Privadas
sidebar_label: Manejo de Llaves Privadas
---

## 1. Generar llaves privadas

Las llaves, son requisito para crear una cuenta en una blockchain. En la mayoría de las billeteras se puede generar llaves nuevas para EOSIO.

Para poder generar ejecutaremos el siguiente comando en la terminal.

```bash
cleos create key
```

Este comando nos va a generar llaves privadas y públicas (podemos crear la cantidad de llaves que queramos). Las cuentas cleos, por defecto, vienen en pares: una `active key` y una `owner key` (para recuperar cuenta en caso de perder la active key).

## 2. Crear una cuenta

En la red de LACChain EOSIO, existen varios tipos de cuentas. Consulte la guía para crear una cuenta según su rol de usuario: 

- [Usuario final](./crear-cuenta-final)
- [Aplicación o contrato](./crear-cuenta-contrato)
- [Non-partner](./crear-cuenta-non-partner)
- [Partner](./crear-cuenta-partner)


## 3. Administrar la billetera con cleos

Una vez creada la cuenta, debemos generar la billetera e identificarla con el nombre de la cuenta, que en este ejemplo es `holacontrato`, mediante el siguiente comando.

```
cleos wallet create -n holacontrato --to-console
```

En este momento, las llaves están guardadas únicamente en la consola, por lo que es necesario crear la billetera que contendrá las llaves. De esta manera, se podrá acceder a estas llaves con una única contraseña. Hay que importar las llaves en la billetera una a la vez, siguiendo el comando.

```
cleos wallet import -n holacontrato
```` 

### 3.1. Autenticadores Externos (Wallets)

La última actualización importante para EOSJS incluyó soporte incorporado para proveedores de firmas intercambiables; eliminando la carga de manejar la gestión segura de claves de su alcance y mejorando la interoperabilidad. Lo que es más importante, esta es una mejora importante de seguridad que limita la exposición de las claves de un usuario en muchas aplicaciones a un único proveedor de firmas confiable que mitiga los riesgos potenciales que pueden surgir de un código malicioso o un error del usuario al usar aplicaciones blockchain.
