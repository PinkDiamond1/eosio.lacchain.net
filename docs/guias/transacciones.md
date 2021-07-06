---
id: transacciones
title: Preparar transacciones
sidebar_label: Preparar transacciones
---

Para ejecutar una transacción en LACChain EOSIO es necesario incluir al menos dos acciones para cada transacción.

Cada transacción debe incluir al menos la acción de contrato inteligente que le gustaría ejecutar y una acción de **writer::run** adicional que incluye la autorización del **nodo escritor** que permitirá a la transacción proporcionar los recursos de red necesarios para que sea ejecutada.

Aquí hay un ejemplo de transacción con shell script:

```bash title="holacontrato.sh"
holacontrato_lacchain() {
  echo 'Ejecutar holacontrato'
  mkdir -p ./stdout/holacontrato
  TEMP_DIR=./stdout/holacontrato

  cleos -u https://lacchain.eosio.cr push action -j -d -s writer run '{}' -p costarica@writer >$TEMP_DIR/tx1.json
  cleos -u https://lacchain.eosio.cr push action -j -d -s holacontrato hola '{"user": "lachaineosio"}' -p holacontrato@active >$TEMP_DIR/tx2.json
  jq -s '[.[].actions[]]' $TEMP_DIR/tx1.json $TEMP_DIR/tx2.json >$TEMP_DIR/tx3.json
  jq '.actions = input' $TEMP_DIR/tx1.json $TEMP_DIR/tx3.json >$TEMP_DIR/tx4.json
  cleos -u https://lacchain.eosio.cr push transaction $TEMP_DIR/tx4.json -p costarica@writer -p holacontrato@active
}

holacontrato_lacchain
```

Aquí hay un ejemplo de transacción con eosJs:

:::note Nota
Debe tener previamente instalado el paquete de eosJs, consulte [aquí](https://www.npmjs.com/package/eosjs)
:::

```javaScript title="holacontrato.js"

const { eosioConfig } = require('config')

const holacontrato_lacchain = ({
  contractName = 'holacontrato',
  action = 'hola',
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
  holacontrato_lacchain
}

```
