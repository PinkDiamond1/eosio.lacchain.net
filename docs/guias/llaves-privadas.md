---
id: llaves-privadas
title: Manejo de Llaves Privadas
sidebar_label: Manejo de Llaves Privadas
---

## 1. Generar llaves privadas

Las llaves, son requisito para crear una cuenta en una blockchain. En la mayoría de las billeteras se puede generar llaves nuevas para EOSIO.

Para generarlas ejecutaremos el siguiente comando en la terminal.

```bash
cleos create key
```

Este comando nos va a generar llaves privadas y públicas (podemos crear la cantidad de llaves que queramos). Las cuentas cleos, por defecto, vienen en pares: una `active key` y una `owner key` (para recuperar cuenta en caso de perder la active key).

## 2. Crear una cuenta

En la red de LACChain EOSIO, existen varios tipos de cuentas. Consulte la guía para crear una cuenta según su rol de usuario: 

- [Usuario final](./crear-cuenta-usuario)
- [Aplicación o contrato](./crear-cuenta-contrato)
- [Non-partner](./crear-cuenta-entidad)
- [Partner](./crear-cuenta-entidad)

## 3. Administrar la billetera con cleos

Una vez creada la cuenta, debemos generar la billetera e identificarla con el nombre de la cuenta, que en este ejemplo es `holacontrato`, mediante el siguiente comando.

```
cleos wallet create -n holacontrato --to-console
```

:::note Nota
Si desea configurar su wallet para utilizarla por medio de autenticadores externos como Anchor Wallet, consulte [aquí](./configurar-wallet)
:::

En este momento, las llaves están guardadas únicamente en la consola, por lo que es necesario crear la billetera que contendrá las llaves. De esta manera, se podrá acceder a estas llaves con una única contraseña. Hay que importar las llaves en la billetera una a la vez, siguiendo el comando.

```
cleos wallet import -n holacontrato
```` 

### 3.1 Cambiar clave privada

En caso de que se desee cambiar la clave privada de su cuenta en LACChain EOSIO debe seguir los siguientes pasos:

#### Paso 1: Crear nuevas llaves

Cree dos nuevos pares de claves usando 

```
cleos create key --to-console
```

#### Paso 2: Importar claves

Importar nuevas claves a su billetera 

```
cleos wallet import -n holacontrato
```

#### Paso 3: Establecer permisos

Establecer el permiso de la cuenta del **owner** 

```
cleos -u https://lacchain.eosio.cr set account permission account_name owner EOS_public_key_of_new_owner -p account_name@owner
```

Establecer el permiso de la cuenta del **active** 

```
cleos -u https://lacchain.eosio.cr set account permission account_name active EOS_private_key_of_new_active -p account_name@active
```

:::note Nota
Debe tener la clave de propietario actual en su billetera para autorizar esta transacción.
:::
