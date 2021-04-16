---
id: como-iniciar
title: Como Iniciar
sidebar_label: Como Iniciar
---

## 1. Instalación de software
Primero, debe tener instalado el software [EOSIO](https://developers.eos.io/manuals/eos/latest/install/install-prebuilt-binaries) desarrollado por [Block.one](https://block.one/) para realizar acciones con el protocolo EOS.

Este software se compone de:

- **cleos:** es el command line tool que se conecta con el API expuesto por nodeos y funciona para administrar la billetera, cuenta, llaves, transacciones y contratos inteligentes.
- **nodeos:** funciona como el daemon central que maneja la red EOSIO y puede ser configurado como nodo para producir bloques.
- **keosd:** funciona como billetera para manejar las llaves para EOSIO.

![Cleos](/img/diagramas/cleos.png)

### 1.1 Prebuilt Binaries 
**Mac:**
```
brew tap eosio/eosio
brew install eosio
```
**Linux:**
```
wget https://github.com/eosio/eos/releases/download/v2.0.11/eosio_2.0.11-1-ubuntu-18.04_amd64.deb
sudo apt install ./eosio_2.0.11-1-ubuntu-18.04_amd64.deb
```

:::note Nota
En caso de tener error en la instalación en Linux, instale el siguiente paquete e intentelo nuevamente:
```
wget http://mirrors.edge.kernel.org/ubuntu/pool/main/i/icu/libicu60_60.2-3ubuntu3.1_amd64.deb
sudo dpkg -i ./libicu60_60.2-3ubuntu3.1_amd64.deb
```
:::


### 1.2 Contract Development Toolkit
Adicionalmente, recomendamos instalar desde antes el Contract Development Toolkit (CDT), para acceder a recursos para crear los contratos este se puede instalar utilizando el comando:

**Mac:**
```
brew tap eosio.cdt
brew install eosio.cdt
``` 

**Linux:**
```
wget https://github.com/EOSIO/eosio.cdt/releases/download/v1.7.0/eosio.cdt_1.7.0-1-ubuntu-18.04_amd64.deb
sudo apt install ./eosio.cdt_1.7.0-1-ubuntu-18.04_amd64.deb
``` 

## Obtenga su cuenta en Lacchain

Mas información [sobre la creacion de cuentas.](llaves-privadas.md)  
