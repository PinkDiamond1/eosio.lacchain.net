---
id: gobernanza-red
title: Herramientas de Gobernanza.
sidebar_label: Gobernanza de Red
---

## EOSIO Privileged Account
The `eosio` account  represents the permitting committee that represents the highest authority of the network. This account has unlimited access to CPU, NET, and RAM resources.

You can create specific permissions for each privileged action and also you can use a multi-signature contract (or "multisig") with variable parameters that will require the consent of the majority of the actors in the table.

## System Contracts

LACChain EOSIO permissioning contracts are implemented as [System Contracts](https://developers.eos.io/manuals/eosio.contracts/latest/index). These contracts have access to [privileged functions](../recursos/funciones-importantes) that encapsulate the base functionality for the LACChain governance framework.

[LACChain EOSOIO Systems Contracts](https://github.com/LatamLink/eosio.contracts/tree/master/contracts/lacchain.system)

## Graphic Interface for Permisioning Committee
This tool is to manage the permitting and the governance of LACChain EOSIO through Smart Contract.

[GUI tool to facilitate network management by the permitting committee](https://lacchain.eosio.online/management)

Some of the available functions are:

### Validator Node Registration

![Validator node registration](/img/tutorials/gobernanzaRed/registro-nodos-validadores.png)

### Entity Registration

![Entity registration](/img/tutorials/gobernanzaRed/registro-entidades.png)

### Delete Network Group

![Delete network group](/img/tutorials/gobernanzaRed/eliminar-grupo-red.png)

### Active Node Changes

![Active node changes](/img/tutorials/gobernanzaRed/cambio-nodos-activos.png)

### Allocation of Resources to Accounts

![Allocation of resources to accounts](/img/tutorials/gobernanzaRed/asignacion-recursos-cuentas.png)

### Remover Entidad

![Remover entidad](/img/tutorials/gobernanzaRed/remove-entity.png)


### Account Blacklisting
Accounts can be added to a blacklist that must be implemented by all validator nodes to effectively block access to an account.

### System contracts update
The updating of the system contracts can only be carried out by the account `eosio` which represents the permitting committee.

:::note Work in Progress
We are still working on this aspect of the documentation, if you want to improve the content you can learn [how to contribute](../guias/contribuir). See the [Project Roadmap](../roadmap).
:::