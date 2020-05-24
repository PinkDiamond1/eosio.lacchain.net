---
id: instalacion-nodos
title: Instalación de Nodos
sidebar_label: Instalación de Nodos
---

## Configuraciones relevantes nodeos

Esta no es una lista de configuraciones que pueden usarse out of the box, mas bien una lista de opciones importantes para cada tipo de nodo.

### Validador

```

producer-name=<validator_name>

signature-provider =EOS6MRyAjQq8ud7hVNYcfnVPJqcVpscN5So8BhtHuGYqET5GDW5CV=KEY:5KQwrPbwdL6PhXujxW37FSSQZ1JiwsST4cqQzDeyXtP79zkvFD3

peer-key =
peer-private-key=

eosio::producer_plugin

```

### Validador p2p layer 1
```
peer-key =
peer-private-key=
p2p-listen-endpoint=
p2p-server-address=
p2p-peer-address=
p2p-max-nodes-per-host=
max-clients=
net-threads=

eosio::net_plugin
```

### Validador p2p out
```
p2p-accept-transactions = false
api-accept-transactions = false

peer-key =
peer-private-key=
p2p-listen-endpoint=
p2p-server-address=
p2p-peer-address=
p2p-max-nodes-per-host=
max-clients=
net-threads=

eosio::net_plugin
```
### Validador p2p bidir
```
peer-key =
peer-private-key=
p2p-listen-endpoint=
p2p-server-address=
p2p-peer-address=
p2p-max-nodes-per-host=
max-clients=
net-threads=

eosio::net_plugin
```

### boot p2p out
```
p2p-accept-transactions = false
api-accept-transactions = false

peer-key =
peer-private-key=
p2p-listen-endpoint=
p2p-server-address=
p2p-peer-address=
p2p-max-nodes-per-host=
max-clients=
net-threads=

eosio::net_plugin
```

### boot p2p bidir
```
peer-key =
peer-private-key=
p2p-listen-endpoint=
p2p-server-address=
p2p-peer-address=
p2p-max-nodes-per-host=
max-clients=
net-threads=

eosio::net_plugin
```

### writer p2p
```
peer-key =
peer-private-key=
p2p-listen-endpoint=
p2p-server-address=
p2p-peer-address=
p2p-max-nodes-per-host=
max-clients=
net-threads=

eosio::net_plugin
```
### writer api
Hacer referencia a la documentacion de [dfuse](https://www.dfuse.io/en)

### observer api
Hacer referencia a la documentacion de [dfuse](https://www.dfuse.io/en)

### observer p2p

```
p2p-accept-transactions = false
api-accept-transactions = false

peer-key =
peer-private-key=
p2p-listen-endpoint=
p2p-server-address=
p2p-peer-address=
p2p-max-nodes-per-host=
max-clients=
net-threads=

eosio::net_plugin
```
