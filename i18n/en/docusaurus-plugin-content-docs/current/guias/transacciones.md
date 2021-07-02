---
id: transacciones
title: Prepare Transactions
sidebar_label: Prepare Transactions
---

To execute actions in a LACChain EOSIO contract it is necessary to prepare and execute transactions, here you can observe some considerations about this process.

## Aspects to consider
- Have the [EOSIO development environment](./ambiente-desarrollo) installed.
- Have compiled the [smart contract](./deploy-smart-contract) on which you are going to work.
- The transaction consists of:
  - The run action to give authorization to the writer node.
  - Other actions required to perform the tasks you want to perform.

**Example**

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