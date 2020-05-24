---
id: funciones-importantes
title: Funciones Importantes en EOSIO
sidebar_label: Funciones Importantes
---

## Cuenta Privilegiada EOSIO

Esta cuenta posee acceso ilimitado a los recursos CPU, NET, y RAM.  Se fijará una cuenta compuesta por el comité permisionador que representa la autoridad máxima de la red. 

Se pueden crear permisos especificaos para cada acción privilegiada y ademas se podrá utilizar un contrato multifirma (o “multisig”) con parámetros variables que requerirá el consentimiento de la mayoría de los actores en la tabla. Esta cuenta privilegiada se denominará la cuenta `eosio`.

## Funciones Privilegiadas EOSIO

Los contratos inteligentes de EOSIO son simples archivos de WebAssembly. El formato WebAssembly permite definir importaciones, funciones que no se declaran en WASM en sí pero en el entorno en el que se ejecuta el código de WebAssembly. EOSIO utiliza estas funciones integradas (intrínsecas) para intercambiar datos entre el código de contrato de WebAssembly y el nodo EOSIO `nodeos`. Cada vez que la máquina virtual EOS (EOSVM), que ejecuta el código de WebAssembly, llega a un nivel intrínseco, el control del programa se transfiere al código del controlador de nodo para resolverlo. Una lista completa de funciones intrínsecas para EOSIO 2.0.X se puede encontrar [aquí](https://github.com/EOSIO/eosio.cdt/blob/a6b8d3fc289d46f4612588cdd7223a3d549238f6/libraries/native/native/eosio/intrinsics_def.hpp#L42-L160).

### `set_resource_limits`
Actualiza los limites de recursos asociados a una cuenta
Utiliza como parámetros:
``` yaml
account:  La cuenta destino
ram_bytes:  El limite de RAM en bytes
net_weight:  El weight para determinar su capacidad de NET
cpu_weight:  El weight para determinar su capacidad de CPU
```

### `set_prods`
Establece una nueva lista de productores(validadores) activos.
Una vez que el bloque con la propuesta se vuelve irreversible los nuevos productores se vuelven activos.
Parámetros:
```yaml
schedule: JSON con lista de productores y sus signing keys
```


### `set_params`
Modifica uno o varios parámetros de la blockchain.

Parámetros:

* **`max_block_net_usage`**   La cantidad maxima de uso de net en un bloque

* **`target_block_net_usage_pct`**    El porcentaje de uso maximo de net, pasado este limite la red entra en modo congestion.

* **`max_transaction_net_usage`**  El uso maximo de net que la chain va a permitir, mas alla de los limites de la cuenta.

* **`base_per_transaction_net_usage`**  The base amount of net usage billed for a transaction to cover incidentals
* **`net_usage_leeway`**

* **`context_free_discount_net_usage_num`**  The numerator for the discount on net usage of context-free data

* **`context_free_discount_net_usage_den`**  The denominator for the discount on net usage of context-free data

* **`max_block_cpu_usage`** The maxiumum billable cpu usage (in microseconds) for a block

* **`target_block_cpu_usage_pct`** The target percent (1% == 100, 100%= 10,000) of maximum cpu usage; exceeding this triggers congestion handling

* **`max_transaction_cpu_usage`** The maximum billable cpu usage (in microseconds) that the chain will allow regardless of account limits

* **`min_transaction_cpu_usage`** The minimum billable cpu usage (in microseconds) that the chain requires

* **`max_transaction_lifetime`** The maximum number of seconds that an input transaction's expiration can be ahead of the time of the block in which it is first included

* **`deferred_trx_expiration_window`** The number of seconds after the time a deferred transaction can first execute until it expires

* **`max_transaction_delay`** The maximum number of seconds that can be imposed as a delay requirement by authorization checks

* **`max_inline_action_size`** Maximum allowed size (in bytes) of an inline action

* **`max_inline_action_depth`** Recursion depth limit on sending inline actions

* **`max_authority_depth`** Recursion depth limit for checking if an authority is satisfied

### `set_privileged`
Permite establecer como privilegiada a una cuenta.
Parámetros:
```yaml
account: La cuenta que se quiere setear como privilegiada
is_priv:  0 para falso, mayor a 0 para verdadero
```

## Acciones de Sistema

Estas acciones no requieren ser ejecutadas por una cuenta privilegiada.

### `new_account`
Crea una cuenta nueva.
Utiliza como parámetros:
```yaml
creator: Nombre de la cuenta que crea la cuenta nueva
name: Nombre de la cuenta nueva
owner: Owner public key
active: Active public key
```
### `set code`
Set code establecer o actualizar un contrato inteligente en una cuenta
Utiliza como parámetros:
```yaml
account: La cuenta a la que se desea publicar un contrato
code: El código en forma de BLOB binario
```

### `set abi`
Permite establecer o actualizar el abi para el contrato inteligente, se identifica por account_name.
Utiliza como parámetros:
```yaml
account: El nombre de la cuenta destino
abi:  El abi
```

### `updateauth`
actualiza los permisos de una cuenta.
Utiliza como parámetros:
```yaml
account:  La cuenta que se desea modificar.
pemission:  El nombre del nuevo permiso
parent: El permiso padre del nuevo permiso
auth: El json definiendo la autorización de permisos
```
### `deleteauth`
elimina la autorización de permisos de una cuenta .
Utiliza como parámetros:
```yaml
account: La cuenta destino
permission: El nombre del permiso que se desea eliminar
```

### `linkauth`
Asigna una acción especifica de un contrato a un permiso especifico, cinco acciones no pueden ser linkeadas updateauth,deleteauth,linkauth,unlikauth,canceldelay
Parámetros utilizados:
```yaml
account: Cuenta destino
code: Cuenta owner de la acción que se desea linkear
type: La accion que se desea linkear
requirement: El permiso a linkear.
```

### `unlinkauth`
Es la reversa de linkauth
Parámetros:
```yaml
account: Cuenta destino
code: Cuenta owner de la accion que se desea deslinkear
type: La acción que se desea deslinkear
```

## Contrato Nativo eosio.token

Estas acciones pueden ser ejecutadas por cualquier cuenta con el fin de emitir un token propio.

### `create`
Le permite a una cuenta ***issuer*** crear un token.
Utiliza como parametros:
```yaml
issuer: La cuenta que crea el token
maximum_supply: La cantidad maxima junto al simbolo del token.
```

### `issue`
Esta acción distribuye a una cuenta una cantidad de tokens determinada.
Utiliza como Parámetros:
```yaml
to: Cuenta a la que se distribuyen los tokens
quantity: La cantidad de tokens a distribuir
memo: memo que acompaña la distribución inicial de tokens
```

### `retire`
El opuesto a crear un token.
Parámetros:
```yaml
quantity: La cantidad de tokens a retirar
memo : El memo que acompaña la transacción.
```

### `transfer`
Transfiere de una cuenta origen a una cuenta destino una cantidad "n" de tokens
Parámetros:
```yaml
from: Cuenta origen desde donde se debitan los tokens
to: Cuenta destino a la que acreditar los tokens
quantity: La cantidad de tokens
memo: Memo que acompaña la transacción
```
