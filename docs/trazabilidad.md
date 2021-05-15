---
id: trazabilidad
title: Autorizaciones y Trazabilidad 
sidebar_label: Permisos y Trazabilidad
---

## Permisos y trazabilidad en EOSIO

En EOSIO ninguna acción es anónima, todas las transacciones están vinculadas a una cuenta, por ejemplo si se desea llamar a la acción de un contrato, el llamado va a venir acompañado de una cuenta origen que consume esa acción del contrato inteligente.

Como vimos en la sección de [cuentas y permisos EOSIO](cuentas-permisos) cuenta con un sistema nativo para definir autorizaciones que satisfagan permisos que pueden ser definidos para una cuenta en la red.

## Comite Permisionador

Los permisos privilegiados pueden delegarse de forma dinámica a distintas entidades y nodos, por ejemplo a comités legales dentro del comité o a representantes técnicos dentro del comité.

Considerando que el permiso de crear nuevas cuenta podría delegarse exclusivamente a los escritores y de esa manera toda acción sin importar  como ingresa a la red podría quedar vinculada al escritor que creo la cuenta.

## Tipos de Entidades Permisionadas

Las entidades permisionadas pueden ser "partners" de lacchain los cuales pueden desplegar cualquier tipo de nodo. De otra manera las entidades que no sean "partner" solo pueden desplegar nodos escritores y observadores.

| Node Type | Partner | Non-Partner |
|-----------|:-------:|:-----------:|
| **Validator nodes**| ![Yes](/img/yes-icon.svg) |  ![No](/img/no-icon.svg)  |
| **Boot nodes**     | ![Yes](/img/yes-icon.svg) |  ![No](/img/no-icon.svg)  |
| **Writer nodes**   | ![Yes](/img/yes-icon.svg) | ![Yes](/img/yes-icon.svg) |
| **Observer nodes** | ![Yes](/img/yes-icon.svg) | ![Yes](/img/yes-icon.svg) |

#### Permisos y llaves por tipo de nodo

|                 | Account key              | Block Signing Key | Peer Key | Extra Keys            |
|-----------------|:------------------------:|:-----------------:|:--------:|:---------------------:|
| **Entity**      | Active/Owner permissions | ![No](/img/no-icon.svg) | ![No](/img/no-icon.svg) | Optional ([info field](/docs/datos-entidades-nodos#estructura-json-entidades)) |
|  ˫ **validator**| ![No](/img/no-icon.svg)  | ![Yes](/img/yes-icon.svg) | ![Yes](/img/yes-icon.svg) | Optional ([info field](/docs/datos-entidades-nodos#nodo-validador)) |
|  ˫ **boot**     | ![No](/img/no-icon.svg)  | ![No](/img/no-icon.svg) | ![Yes](/img/yes-icon.svg) | Optional ([info field](/docs/datos-entidades-nodos#nodo-boot)) |
|  ˫ **writer**   | NodeName permission      | ![No](/img/no-icon.svg) | ![Yes](/img/yes-icon.svg) | Optional ([info field](/docs/datos-entidades-nodos#nodo-escritor)) |
|  ˪ **observer** | ![No](/img/no-icon.svg)  | ![No](/img/no-icon.svg) | ![Yes](/img/yes-icon.svg) | Optional ([info field](/docs/datos-entidades-nodos#nodo-observador)) |

#### Account key	

Llaves perteneciente a una cuenta registrada, en EOSIO se requieren como mínimo de dos permisos.

```sh
permissions: 
     owner     1:    1 EOS6R46x4P8b82D4zjpU62xZG3ytn6VUxcyuJntSxSwMLXAgLxcU8
        active     1:    1 EOS6R46x4P8b82D4zjpU62xZG3ytn6VUxcyuJntSxSwMLXAgLxcU8
```

#### Block Signing Key

LLaves utilizadas para firma de bloques por parte de los nodos validadores que formen parte del grupo de consenso.

```sh title="parámetros de configuración de nodeos"
  -p [ --producer-name ] arg            ID of producer controlled by this node 
                                        (e.g. inita; may specify multiple 
                                        times)

  --signature-provider arg              Key=Value pairs in the form 
                                        <public-key>=<provider-spec>
```

#### Peer Key

Llaves utilizadas por el protocolo P2P para establecer comunicación entre nodos con firmas validas para las llaves publicas especificas. 

```sh title="parámetros de configuración de nodeos"
  --allowed-connection arg (=any)       Can be 'any' or 'producers' or 
                                        'specified' or 'none'. If 'specified', 
                                        peer-key must be specified at least 
                                        once. If only 'producers', peer-key is 
                                        not required. 'producers' and 
                                        'specified' may be combined.
  --peer-key arg                        Optional public key of peer allowed to 
                                        connect.  May be used multiple times.
  --peer-private-key arg                Tuple of [PublicKey, WIF private key] 
                                        (may specify multiple times)

```

#### Extra Keys

Llaves Adicionales para otros usos que no se utilizan en el consenso o protocolo de red de EOSIO pero que pueden emplearse para otras funciones como criptografía post-quatinca. Esta información se puede incluir dentro de los [datos de las entidad y nodos](./datos-entidades-nodos) almacenados en el contrato de sistema.

### Autoridad Nodos Escritores

Los nodos escritores requieren de autorizaciones especificadas para el permiso `writer` el cual es administrado por el comité permisionador.

![Ejemplo de Autoridad Nodos Escritores](/img/diagramas/writer-authorities.png)

### Autoridad de Usuarios

Proponemos delegar los permisos de crear cuenta a los escritores, este permiso puede ser modificado a su vez por una organización/comité para amoldarse a los requerimientos legales y operativos.

Cada usuario nuevo estará vinculado a un nodo escritor perteneciente a una entidad permisiondada. Cualquier transacción creada por la cuenta de un usuario de debe de ir acompañada de la firma de un nodo escritor para cumplir con el numero de autorizaciones mínimas requeridas (2/2). 

![Ejemplo de Autoridades Usuario](/img/diagramas/user-authorities.png)

La red LACChain requiere rastrear cual nodo escritor generó una transacción, de tal forma que es posible hacerlos legalmente responsables de ella.

Es necesario verificar que en LACChain EOSIO cualquier transacción que sea emitida se propague por un nodo que esté en la lista de cuentas autorizadas por el comité permisionador.

Esta trazabilidad requiere que cada transacción de EOSIO incluya la firma del nodo escritor de tal forma que los  demás nodos sean capaces de reconocer a través de que nodo ha entrado la transacciones a la red. 

### Creación de cuenta
Se plantean los siguientes pasos para la creación de cuentas y uso de los recursos de la red.

1.  Se delega el permiso de crear nuevas cuentas exclusivamente a los escritores/writers.

2. Un escritor `escritorbobb`, crea una cuenta nueva `aliceaccount`.

3. En la tabla de cuentas, `aliceaccount` tiene definido a `escritorbobb` como el escritor que creo la cuenta
4. El escritor decide como distribuirle recursos a Alice en función a los requerimientos definidos por el comité, puede optar por transferir recursos, delegarlos, confirmar transacciones.
5. Alice utiliza los recursos de la red.

## Damage control y liability

En caso de que se estén usando recursos de la red por fuera del scope planteado por el comité, se plantea el siguiente escenario.

1. Se identifica la cuenta abusando de los recursos
2. Se identifica el escritor responsable de la creación de esa cuenta (información publica en la red)
3. Se notifica al escritor
4. El comité puede optar por accionar de distintas formas:

	- Delegar al escritor  la responsabilidad de controlar.
	- Deshabilitar la cuenta abusando.
	- Deshabilitar todas las cuentas generadas por el escritor.
	- No Deshabilitar las cuentas pero desdelegar recursos temporalmente.
	- Ordenar a los validadores que blacklisteen la cuenta.
	- Otras acciones que cumplan con los requerimientos legales y operativos.

5. Una vez controlada la situación queda sujeto al comité como realizar el arbitraje que responda a los requerimientos del comité.
