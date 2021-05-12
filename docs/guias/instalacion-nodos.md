---
id: instalacion-nodos
title: Instalación de Nodos LACChain
sidebar_label: Instalación de Nodos
---

## Testnet LACChain EOSIO 

<table>
<tr>
    <td>Versión EOSIO</td>
    <td>
        <a href="https://github.com/lacchain/eosio-network" target="_blank" rel="noopener noreferrer">
            <code>LACChain EOSIO</code>
        </a>
    </td>
</tr>
<tr>
    <td>Chain ID</td>
    <td><code>2c1f36d2e3774cba3e47804b6463c207544ac24183194e0b96ffad31e8f4acd5</code></td>
</tr>
<tr>
    <td>Archivo Génesis</td>
    <td>
      <a href="https://raw.githubusercontent.com/LatamLink/eosio-testnet/master/genesis.json" target="_blank" rel="noopener noreferrer"><code>genesis.json</code></a>
    </td>
</tr>
</table>

Consulte nuestro [repositorio en GitHub](https://github.com/lacchain/eosio-network) para obtener mas información sobre los nodos en LACChain EOSIO.

## 1. Crear una cuenta

Para poder desplegar nodos en la red de LACChain EOSIO, es importante tener una cuenta registrada como `Partner` o `Non-Partner`. 
 
Consulte la guía para crear una cuenta según su rol de usuario: 

- [Non-partner](./crear-cuenta-entidad)
- [Partner](./crear-cuenta-entidad)


## 2. Autenticarse en el Dashboard

La red de LACChain EOSIO cuenta con un [dashboard](https://dashboard.latamlink.io/), el cual permite a los usuarios realizar gestiones dentro de la red, incluida la opción de desplegar varios tipos de nodos.  

Accede con su cuenta de tipo `Partner` o `Non-Partner`. Consulte nuestro tutorial de como administrar las [llaves privadas](./llaves-privadas#31-autenticadores-externos-wallets)


## 3. Desplegar un nodo 

Una vez autenticados con nuestra cuenta, seleccione la opción de `administración` dentro de las herramientas del dashboard. En esta sección se le mostrara los tipos de nodos que puede desplegar según sea su tipo de cuenta. 

Para poder crear el nodo, simplemente completamos los datos solicitados en el formulario y ejecutamos la transacción. 

![Sección de administración](/img/docs/dashboard_02.png)


### Ejemplos de configuración

El dashboard también cuenta con una sección en la cual podemos descargar un ejemplo de la configuración de los diferentes tipos de nodo, solamente tenemos que acceder a la opción de [`configuración de nodo`](https://dashboard.latamlink.io/node-config) dentro de las herramientas. 

![Sección de configuración](/img/docs/dashboard_01.png)

## 4. Eliminar un nodo 

Dentro del dashboard, también existe una opción para poder eliminar los nodos, simplemente escribiendo el nombre del nodo que deseamos eliminar. 

![Eliminación de nodos](/img/docs/dashboard_03.png)