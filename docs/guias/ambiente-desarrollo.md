---
id: ambiente-desarrollo
title: Ambiente de desarrollo
sidebar_label: Ambiente de Desarrollo
---

En este documento se muestra el proceso de instalación del ambiente de desarrollo necesario para trabajar sobre la red de LACChain EOSIO (creación de cuentas, manejo de recursos, desplegar contratos, etc.)

## 1. Instalación de software
Primero, debe instalar varios binarios que hacen parte del software de [EOSIO](https://developers.eos.io/manuals/eos/latest/install/install-prebuilt-binaries) desarrollado por [Block.one](https://block.one/) para realizar acciones con el protocolo EOS.

Este software se compone principalmente de:

- **cleos:** es el command line tool que se conecta con el API expuesto por nodeos y funciona para administrar la billetera, cuenta, llaves, transacciones y contratos inteligentes.
- **nodeos:** es el daemon principal que maneja cualquier red usando EOSIO (incluyendo LACChain) y puede ser configurado como nodo para producir bloques.
- **keosd:** funciona como billetera para manejar las llaves la red desplegada con EOSIO.

![Cleos](/img/diagramas/cleos.png)

A continuación se detalla cómo instalar los binarios desde la línea de comandos de diferentes sistemas operativos: 

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
sudo apt-get update
sudo apt-get install libicu60
```
:::

### 1.2 Contract Development Toolkit
Adicionalmente, recomendamos instalar el Contract Development Toolkit (CDT), para acceder a recursos para crear contratos inteligentes. Este CDT se puede instalar utilizando el comando:

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

## 2. Ambiente de desarrollo local para LACChain EOSIO

Para realizar pruebas mientras construye sus contratos puede generar un ambiente de desarrollo local sobre la red de LACChain EOSIO, esto le dara una serie de beneficios que puede consultar [aquí](../herramientas/lacchain-eosio-local)

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

## Obtenga su cuenta en LACChain

En la red LACChain EOSIO, existen varios tipos de cuentas. Consulte la guía para crear una cuenta de acuerdo con su rol de usuario:

- [Usuario final](./crear-cuenta-usuario)
- [Aplicación o contrato](./crear-cuenta-contrato)
- [Non-partner](./crear-cuenta-entidad)
- [Partner](./crear-cuenta-entidad)
