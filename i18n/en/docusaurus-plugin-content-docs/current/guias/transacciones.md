---
id: transacciones
title: Prepare Transactions
sidebar_label: Prepare Transactions
---

To execute a transaction on LACChain EOSIO it is necessary to include at least two actions for each transaction.

Each transaction must include at least the smart contract action you would like to execute and an additional writer::run action which includes the authorization of the writer node who will allow the transaction by providing the necessary network resources for the execute transaction to execute.

Here is an example transaction:

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