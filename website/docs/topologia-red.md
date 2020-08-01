---
id: topologia-red
title: Topología de Red
sidebar_label: Topología de Red
---

Presentamos la siguiente propuesta de configuración de red LAC-Chain utilizando nodos EOSIO.

## Criterios de Diseño
* **Trustless**, el funcionamiento correcto y optimo de la red, no debería basarse en confianza entre las entidades que conformen la red.

* **Escalabilidad horizontal**, poder escalar la infraestructura de la red para satisfacer el crecimiento de su demanda de forma sencilla.

* **Permisos de escritura y lectura** Utilizar un sistema de permisos para otorgar permisos de escritura (push tx) o de lectura (consumo de API o bloques por P2P).

* **MVP** La presente topología puede ser la base de un MVP sin modificaciones al protocolo de red nativo de EOSIO.


## Topología Propuesta

<img src="/img/diagramas/topologia-red.png#center" alt="Topologia de Red LatamLink" width="450"/>

- **Capa 1 ([Core](/docs/topologia-red#capa-1---red-core))** Red de validadores y nodos p2p para meshear entre ellos

	- **Capa 2 ([Bridge](/docs/topologia-red#capa-2---bridge))** Distribución p2p entre validators p2p y boots

		- **Capa 3 ([Satellite](/docs/topologia-red#layer-3---satellite))** Layer de consumo para writers y observers


![LatamLink Topology](/img/diagramas/topologia-nodos.png)


## Capa 1 - Red Core
La red core se compone de los productores de bloques quienes han sido agregados al grupo de consenso. La fuente de poder computacional final es derivada de la red core.


### Nodos Productores de Bloques
En una red EOSIO estos nodos son denominados blockproducers, se encargan de generar bloques cada 500ms. Estos nodos deberían estar conectados unicamente a otros nodos manejados por la misma entidad.

###  Validator p2p para otros Validadores
Nodo P2P configurado como parte de la red interna de los validadores.

## Capa 2 - Bridge

### Validator p2p out
Nodo configurado para solo broadcastear bloques por conexiones p2p , los observers p2p out permitidos se conectan a este nodo

### Validator p2p bidir
Nodo configurado para aceptar transacciones por p2p de nodos permitidos y enviarsela al validador

### Boot p2p out
Nodo configurado para aceptar bloques de los validadores p2p y solo reenviarlos a los observers p2p y api, no acepta txs

### Boot p2p bidir
Nodo p2p configurado para actualizar con nuevos bloques a los nodos writer y a su vez aceptar txs para enviar a los validadores

## Layer 3 - Satellite

### Writer p2p
Acepta transacciones por p2p y las envia al layer 1 atravez de un `boot-p2p-bidir`.
> por ejemplo: Una wallet maneja su propia API y se conecta a la red atravez de un writer p2p.

### Writer API
Acepta solicitudes de push transaction por http y las envia al layer 1 atravez de un `boot-p2p-bidir`

### Observer nodes p2p
Un observer node p2p es un nodo que esta consumiendo información del layer 1 atravez de un `boot-p2p-out`, solo puede leer el estado de la blockchain.

### Observer nodes API
Nodo que permite pedir información de la blockchain a travez de un request http, se recomienda el uso de dfuse.


## Arquitectura


### Ciclo de Node Discovery

1. La entidad configura un nuevo nodo
1. La entidad registra un nuevo nodo con el comité incluyendo en su información, tipo de nodo ( `observer-api`,`writer-p2p`,`boot-p2p-bidir`,etc. ) junto con su llave publica para peering
1. El comité actualiza la tabla de nodos en el contrato inteligente con la información de los nodos para agregar esta información
1. Los nodos de la red que lo necesiten actualizan su lista de pares permitidos para agregar el nuevo nodo a los nodos que hagan falta.
1. El nuevo nodo confirma que esta conectado a la red.


### Comunicación de Nodos

Para mas información sobre como funciona la comunicación entre nodos en redes EOSIO se puede consultar su [Developers Portal](https://developers.eos.io/welcome/latest/protocol/network_peer_protocol)

### Transacciones

El ciclo de una transacción es :

1. Un cliente envía  una transacción firmada por https o por p2p a un writer node, ya sea api o p2p.

1. El writer verifica la transacción

1. El writer broadcastea la transacción a los nodos `boot-p2p-bidir`

1. el `boot-p2p-bidir`, broadcastea la transaccion al layer 1(core)

1. El validador que este en schedule verifica la transacción y la ejecuta.

1. El validador broadcastea el nuevo bloque al layer 1 y layer 2

1. los boot de layer 2 verifican el nuevo bloque y lo broadcastean al layer 3


## Optimización de Rutas / Conexiones 
La meta es gestionar la topología de red de forma dinámica usando contratos inteligentes.


## Infraestructura Cloud

Es de interés de LAC-Chain utilizar implementaciones automáticas en varias nubes utilizando herramientas como terraform.
- Aprovechar las herramientas en la nube para mejorar las capacidades de la red.
- Explorar el uso de bóvedas de claves en la nube.
- Trabajar con socios para proporcionar servicios en la nube en LACChain en una base SAAS.
