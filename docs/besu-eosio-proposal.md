# LACCHAIN TOPOLOGIA Y ARQUITECTURA PARA NODOS EOSIO NODES

Tomando como referencia la topologia de red de la red besu presentamos una propuesta de configuracion utilizando nodos EOSIO.

## 1 Criterios
* **Trustless**, el funcionamiento correcto y optimo de la red, no deberia basarse en confianza entre las entidades que conformen la red.

* **Escalabilidad horizontal**, poder escalar la infraestructura de la red para satisfacer el crecimiento de su demanda de forma sencilla.

* **Permisos de escritura y lectura** Utilizar un sistema de permisos para otorgar permisos de escritura (push tx) o de lectura (consumo de api o bloques por p2p).

* **MVP** La presente topologia puede ser la base de un mvp sin modificaciones custom.

## 2 Topology

![LatamLink Topology](topologia-nodos.png)

### Layers
* **Layer 1 (Core)** Red de validadores y nodos p2p para meshear entre ellos

* **Layer 2 (Bridge)** Distribucion p2p entre validators p2p y boots

* **Layer 3 (Satellite)** Layer de consumo para writers y observers

### Layer 1 (Core)

*  **Validator node**
    En una red EOSIO estos nodos son denominados blockproducers, se encargan de generar bloques cada 500ms. Estos nodos deberian estar conectados unicamente a otros nodos manejados por la misma entidad.
*  **Validator p2p para otros Validadores**
    Nodo configurado para ser parte de la red interna de validadores.

### Layer 2 (Bridge)
*  **Validator p2p out**
    Nodo configurado para solo broadcastear bloques por conexiones p2p , los observers p2p out permitidos se conectan a este nodo

*  **Validator p2p bidir**
    Nodo configurado para aceptar transacciones por p2p de nodos permitidos y enviarsela al validador

* **Boot p2p out**
    Nodo configurado para aceptar bloques de los validadores p2p y solo reenviarlos a los observers p2p y api, no acepta txs
* **Boot p2p bidir**
    Nodo p2p configurado para actualizar con nuevos bloques a los nodos writer y a su vez aceptar txs para enviar a los validadores


### Layer 3 (Satellite)

*  **Writer p2p**
    Acepta transacciones por p2p y las envia al layer 1 atravez de un  boot-p2p-bidir.
    ex: Una wallet maneja su propia API y se conecta a la red atravez de un writer p2p.

*  **Writer api**
    Acepta solicitudes de push transaction por http y las envia al layer 1 atravez de un boot-p2p-bidir

* **Observer nodes p2p**
    Un observer node p2p es un nodo que esta consumiendo informacion del layer 1 atravez de un boot-p2p-out, solo puede leer el estado de la blockchain.

* **Observer nodes api**
    Nodo que permite pedir informacion de la blockchain a travez de un request http, se recomienda el uso de dfuse.



## 3 Architecture


### Node Discovery

Ciclo de Node Discovery

* La entidad configura un nuevo nodo
* La entidad registra un nuevo nodo con el comite incluyendo en su informacion, tipo de nodo(observer-api,writer-p2p,boot-p2p-bidir,etc) junto con su llave publica para peering
* El comite actualiza la tabla de nodos en el smart contract con la informacion de los nodos para agregar esta informacion
* Los nodos de la red que lo necesiten actualizan su lista de pares permitidos para agregar el nuevo nodo a los nodos que hagan falta.
* El nuevo nodo confirma que esta conectado a la red.


### Node Communication

Para mas informacion sobre como funciona la comunicacion entre nodos en redes EOSIO se puede consultar su [Developers Portal](https://developers.eos.io/welcome/latest/protocol/network_peer_protocol)

### Transactions

El ciclo de una transaccion es:

* Un cliente envia  una transaccion firmada por https o por p2p a un writer node, ya sea api o p2p.

* El writer verifica la transaccion

* El writer broadcastea la transaccion a los nodos boot-p2p-bidir

* el boot-p2p-bidir, broadcastea la transaccion al layer 1(core)

* El validador que este en schedule verifica la transaccion y la ejecuta.

* El validador broadcastea el nuevo bloque al layer 1 y layer 2

* los boot de layer 2 verifican el nuevo bloque y lo broadcastean al layer 3


## 4 Configuraciones relevantes nodeos

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
