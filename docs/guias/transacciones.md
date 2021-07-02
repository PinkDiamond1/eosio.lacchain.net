---
id: transacciones
title: Preparar transacciones
sidebar_label: Preparar transacciones
---

Para ejecutar acciones en un contrato de LACChain EOSIO es necesario preparar y ejecutar transacciones, acá puede observar algunas consideraciones sobre este proceso.

## Aspectos a considerar
- Tener instalado el [ambiente de desarrollo de EOSIO](./ambiente-desarrollo).
- Tener compilado el [contrato inteligente](./desplegar-contrato-inteligente) sobre el que va a trabajar.
- La transacción está compuesta por:
  - La acción run que da la autorización del nodo escritor.
  - Otras acciones necesarias para ejecutar las tareas que desea realizar.

**Ejemplo**

```javaScript title="transacction.js"

const { eosioConfig } = require('config')

const addTransaction = ({
  contractName = eosioConfig.eosioAccount,
  action = 'dispatch',
  eosio,
  ...data
}) =>
  eosio.transact(
    {
      actions: [
        {
            authorization: [
                {
                actor: 'costarica',
                permission: 'writer'
                }
            ],
            account: 'writer',
            name: 'run',
            data: { }
        },
        {
          account: contractName,
          name: action,
          authorization: [
            {
              actor: contractName,
              permission: 'active'
            }
          ],
          data
        }
      ]
    },
    {
      blocksBehind: 3,
      expireSeconds: 30
    }
  )

module.exports = {
  addTransaction
}

```