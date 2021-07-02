---
id: transacciones
title: Preparar transacciones
sidebar_label: Preparar transacciones
---

Para ejecutar una transacción en LACChain EOSIO es necesario incluir al menos dos acciones para cada transacción.

Cada transacción debe incluir al menos la acción de contrato inteligente que le gustaría ejecutar y una acción de **writer::run** adicional que incluye la autorización del nodo de escritura que permitirá a la transacción proporcionar los recursos de red necesarios para que sea ejecutada.

Aquí hay una transacción de ejemplo:

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
            authorization: [
                {
                    actor: contractName,
                    permission: 'active'
                }
            ],
            account: contractName,
            name: action,
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