---
id: transacciones
title: Prepare Transactions
sidebar_label: Prepare Transactions
---

To execute a transaction on LACChain EOSIO it is necessary to include at least two actions for each transaction.

Each transaction must include at least the smart contract action you would like to execute and an additional **writer::run** action which includes the authorization of the writer node who will allow the transaction by providing the necessary network resources for the execute transaction to execute.

Here is an example transaction whit shell script:

```bash title="holacontrato.sh"
holacontrato_lacchain() {
  echo 'Ejecutar holacontrato'
  mkdir -p ./stdout/holacontrato
  TEMP_DIR=./stdout/holacontrato

  cleos -u https://lacchain.edenia.cloud push action -j -d -s writer run '{}' -p costarica@writer >$TEMP_DIR/tx1.json
  cleos -u https://lacchain.edenia.cloud push action -j -d -s holacontrato hola '{"user": "lachaineosio"}' -p holacontrato@active >$TEMP_DIR/tx2.json
  jq -s '[.[].actions[]]' $TEMP_DIR/tx1.json $TEMP_DIR/tx2.json >$TEMP_DIR/tx3.json
  jq '.actions = input' $TEMP_DIR/tx1.json $TEMP_DIR/tx3.json >$TEMP_DIR/tx4.json
  cleos -u https://lacchain.edenia.cloud push transaction $TEMP_DIR/tx4.json -p costarica@writer -p holacontrato@active
}

holacontrato_lacchain
```

Here is an example transaction whit eosJs:

:::note Note
You must have previously installed the eosJs package, see [here](https://www.npmjs.com/package/eosjs)
:::

```javaScript title="holacontrato.js"

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