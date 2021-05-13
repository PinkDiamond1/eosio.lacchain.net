---
id: ambiente-desarrollo
title: Ambiente de desarrollo
sidebar_label: Ambiente de desarrollo
---

Estos pasos muestran el proceso de instalación del ambiente de desarrollo necesario para trabajar sobre la red de LACChain EOSIO (creación de cuentas, manejo de recursos, desplegar contratos, etc.)

## 1. Instalación de software
Primero, debe tener instalado el software [EOSIO](https://developers.eos.io/manuals/eos/latest/install/install-prebuilt-binaries) desarrollado por [Block.one](https://block.one/) para realizar acciones con el protocolo EOS.

Este software se compone de:

- **cleos:** es el command line tool que se conecta con el API expuesto por nodeos y funciona para administrar la billetera, cuenta, llaves, transacciones y contratos inteligentes.
- **nodeos:** funciona como el daemon central que maneja la red EOSIO y puede ser configurado como nodo para producir bloques.
- **keosd:** funciona como billetera para manejar las llaves para EOSIO.

![Cleos](/img/diagramas/cleos.png)

### 1.1 Binarios Pre-Compilados
**Mac:**
```bash
brew tap eosio/eosio
brew install eosio
```
**Linux:**
```bash
wget https://github.com/eosio/eos/releases/download/v2.0.11/eosio_2.0.11-1-ubuntu-18.04_amd64.deb
sudo apt install ./eosio_2.0.11-1-ubuntu-18.04_amd64.deb
```

:::note Nota
En caso de tener error en la instalación en Linux, instale el siguiente paquete e intentelo nuevamente:
```bash
wget http://mirrors.edge.kernel.org/ubuntu/pool/main/i/icu/libicu60_60.2-3ubuntu3.1_amd64.deb
sudo dpkg -i ./libicu60_60.2-3ubuntu3.1_amd64.deb
```
:::

### 1.2 Contract Development Toolkit
Adicionalmente, recomendamos instalar desde antes el Contract Development Toolkit (CDT), para acceder a recursos para crear los contratos este se puede instalar utilizando el comando:

**Mac:**
```bash
brew tap eosio/eosio.cdt
brew install eosio.cdt
``` 

**Linux:**
```bash
wget https://github.com/EOSIO/eosio.cdt/releases/download/v1.7.0/eosio.cdt_1.7.0-1-ubuntu-18.04_amd64.deb
sudo apt install ./eosio.cdt_1.7.0-1-ubuntu-18.04_amd64.deb
``` 

## Desinstalación de software

Para desinstalar los binarios y dependencias instaladas de EOSIO, ejecute:

**Mac:**
```bash
brew remove eosio
``` 

**Linux:**
```bash 
sudo apt remove eosio
``` 



## Obtenga su cuenta en Lacchain

En la red de LACChain EOSIO, existen varios tipos de cuentas. Consulte la guía para crear una cuenta según su rol de usuario: 

- [Usuario final](./crear-cuenta-usuario)
- [Aplicación o contrato](./crear-cuenta-contrato)
- [Non-partner](./crear-cuenta-entidad)
- [Partner](./crear-cuenta-entidad)
