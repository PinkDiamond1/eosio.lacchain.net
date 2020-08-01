---
id: instalacion-nodos
title: Instalación de Nodos
sidebar_label: Instalación de Nodos
---


Versión EOSIO : `v2.0.5` 

Chain ID: `2c1f36d2e3774cba3e47804b6463c207544ac24183194e0b96ffad31e8f4acd5`

Archivo Génesis : [`genesis.json`](https://raw.githubusercontent.com/LatamLink/eosio-testnet/master/genesis.json)

## 1. Instale EOSIO desde binarios precompilados

Descargue la última versión de EOSIO para su sistema operativo desde:  https://github.com/EOSIO/eos/releases/tag/v2.0.4   

Por ejemplo, para ubuntu 18.04 necesitas descargar `eosio_2.0.5-1-ubuntu-18.04_amd64.deb`  

Puedes usar apt para instalarlo:  
```bash
wget https://github.com/eosio/eos/releases/download/v2.0.5/eosio_2.0.5-1-ubuntu-18.04_amd64.deb
sudo apt install ./eosio_2.0.5-1-ubuntu-18.04_amd64.deb   
```
Descargará todas las dependencias e instalará EOSIO a `/usr/opt/eosio/v2.0.5`  

### Desinstalar
Para desinstalar los binarios y dependencias instaladas de EOSIO, ejecute:

```bash 
./scripts/eosio_uninstall.sh
```

## 2. Configurar el nodo LatamLink Testnet

```bash
mkdir ~/LatamLink-testnet
cd ~/LatamLink-testnet
git clone https://github.com/LatamLink/testnet.git ./
```

- Edite `config.ini`   
  - Ingrese la dirección IP externa de su servidor: `p2p-server-address = YOUR_DOMAIN_OR_IP:9876` 

- Abrir puertos TCP  (8888, 9876) en su firewall / enrutador

**Especifique un archivo genesis.json la primera vez que ejecute nodeos**  
```bash
./start.sh --delete-all-blocks --genesis-json genesis.json
```  
Siga los logs para verificar que su nodo esté funcionando bien.

```bash
tail -f stderr.txt
```

Compruebe si puede acceder a su nodo mediante el enlace `http://**YOUR_SERVER**/v1/chain/get_info` 

Aquí hay un <a href="https://latamlink.eosio.cr/v1/chain/get_info" target="_blank">Ejemplo de API</a>  

### Iniciar y detener nodeos

- `./start.sh` Inicia y reinicia el servicio Nodeos.

- `./stop.sh` Realiza el apagado correcto del servicio Nodeos.

## Configuraciones relevantes nodeos

Esta no es una lista de configuraciones que pueden usarse out of the box, mas bien una lista de opciones importantes para cada tipo de nodo.

### Validador

```bash

producer-name = <validator_name>

signature-provider = EOS6MRyAjQq8ud7hVNYcfnVPJqcVpscN5So8BhtHuGYqET5GDW5CV=KEY:5KQwrPbwdL6PhXujxW37FSSQZ1JiwsST4cqQzDeyXtP79zkvFD3

peer-key =
peer-private-key =

eosio::producer_plugin

```

### Validador p2p layer 1
```bash
peer-key =
peer-private-key =
p2p-listen-endpoint =
p2p-server-address =
p2p-peer-address =
p2p-max-nodes-per-host =
max-clients =
net-threads =

eosio::net_plugin
```

### Validador p2p out
```bash
p2p-accept-transactions = false
api-accept-transactions = false

peer-key =
peer-private-key = 
p2p-listen-endpoint =
p2p-server-address =
p2p-peer-address =
p2p-max-nodes-per-host =
max-clients =
net-threads =

eosio::net_plugin
```
### Validador p2p bidir
```bash
peer-key =
peer-private-key =
p2p-listen-endpoint =
p2p-server-address =
p2p-peer-address =
p2p-max-nodes-per-host =
max-clients =
net-threads =

eosio::net_plugin
```

### boot p2p out
```bash
p2p-accept-transactions = false
api-accept-transactions = false

peer-key =
peer-private-key =
p2p-listen-endpoint =
p2p-server-address =
p2p-peer-address =
p2p-max-nodes-per-host =
max-clients =
net-threads =

eosio::net_plugin
```

### boot p2p bidir
```bash
peer-key =
peer-private-key =
p2p-listen-endpoint =
p2p-server-address =
p2p-peer-address =
p2p-max-nodes-per-host =
max-clients =
net-threads =

eosio::net_plugin
```

### writer p2p
```bash
peer-key =
peer-private-key =
p2p-listen-endpoint =
p2p-server-address =
p2p-peer-address =
p2p-max-nodes-per-host =
max-clients =
net-threads =

eosio::net_plugin
```
### writer api
Hacer referencia a la documentacion de [dfuse](https://www.dfuse.io/en)

### observer api
Hacer referencia a la documentacion de [dfuse](https://www.dfuse.io/en)

### observer p2p

```bash
p2p-accept-transactions = false
api-accept-transactions = false

peer-key =
peer-private-key =
p2p-listen-endpoint =
p2p-server-address =
p2p-peer-address =
p2p-max-nodes-per-host =
max-clients =
net-threads =

eosio::net_plugin
```
