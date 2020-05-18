# **1 Acciones privilegiadas**

## set_resource_limits
Actualiza los limites derecursos asociados a una cuenta
Utiliza como parametros:
```
account: la cuenta destino
ram_bytes: el limite de ram en bytes
net_weight: el weight para determinar su capacidad de net
cpu_weight: el weight para determinar su capacidad de computo
```

## set_prods
Establece una nueva lista de productores(validadores) activos.
Una vez que el bloque con la propuesta se vuelve irreversible los nuevos productores se vuelven activos.
Parametros:
```
schedule: json con lista de productores y sus signing keys
```


## set_params
Modifica uno o varios parametros de la blockchain.

Parametros:

* **max_block_net_usage**   la cantidad maxima de uso de net en un bloque

* **target_block_net_usage_pct**    El porcentaje de uso maximo de net, pasado este limite la red entra en modo congestion.

* **max_transaction_net_usage**  El uso maximo de net que la chain va a permitir, mas alla de los limites de la cuenta.

* **base_per_transaction_net_usage**  the base amount of net usage billed for a transaction to cover incidentals
* **net_usage_leeway**

* **context_free_discount_net_usage_num** ///< the numerator for the discount on net usage of context-free data

* **context_free_discount_net_usage_den**  the denominator for the discount on net usage of context-free data

* **max_block_cpu_usage** ///< the maxiumum billable cpu usage (in microseconds) for a block

* **target_block_cpu_usage_pct**//< the target percent (1% == 100, 100%= 10,000) of maximum cpu usage; exceeding this triggers congestion handling

* **max_transaction_cpu_usage**///< the maximum billable cpu usage (in microseconds) that the chain will allow regardless of account limits

* **min_transaction_cpu_usage** ///< the minimum billable cpu usage (in microseconds) that the chain requires

* **max_transaction_lifetime** ///< the maximum number of seconds that an input transaction's expiration can be ahead of the time of the block in which it is first included

* **deferred_trx_expiration_window;**///< the number of seconds after the time a deferred transaction can first execute until it expires

* **max_transaction_delay;** ///< the maximum number of seconds that can be imposed as a delay requirement by authorization checks

* **max_inline_action_size;** ///< maximum allowed size (in bytes) of an inline action

* **max_inline_action_depth** ///< recursion depth limit on sending inline actions

* **max_authority_depth** ///< recursion depth limit for checking if an authority is satisfied

## set_privileged
Permite establecer como privilegiada a una cuenta.
Parametros:
```
account: la cuenta que se quiere setear como privilegiada
is_priv:  0 para falso, mayor a 0 para verdadero
```

# **2 Otras Acciones**


## new_account
Crea una cuenta nueva.
Utiliza como parametros:
```
creator: Nombre de la cuenta que crea la cuenta nueva
name: nombre de la cuenta nueva
owner:  owner public key
active: active public key
```
## set code
Set code establecer o actualizar un contrato inteligente en una cuenta
Utiliza como parametros:
```
account - la cuenta a la que se desea setear un contrato.
code - el codigo en forma de blob binario.
```

## set abi
Permite establecer o actualizar el abi para el contrato inteligente, se identifica por account_name.
Utiliza como parametros:
```
account: El nombre de la cuenta destino
abi:  El abi
```

## updateauth
actualiza los permisos de una cuenta.
Utiliza como parametros:
```
account:  la cuenta que se desea modificar.
pemission:  el nombre del nuevo permiso
parem: el permiso padre del nuevo permiso
aut: el json definiendo la autorizacion de permisos
```
## deleteauth
elimina la autorizacion de permisos de una cuenta .
Utiliza como parametros:
```
account: la cuenta destino
permission: el nombre del permiso que se desea eliminar
```

## linkauth
Asigna una accion especifica de un contrato a un permiso especifico, cinco acciones no pueden ser linkeadas updateauth,deleteauth,linkauth,unlikauth,canceldelay
Parametros utilizados:
```

account: cuenta destino
code: cuenta owner de la accion que se desea linkear
type: la accion que se desea linkear
requirement: el permiso a linkear.
```

## unlinkauth
Es la reversa de linkauth
Parametros:
```
account: cuenta destino
code: cuenta owner de la accion que se desea deslinkear
type: la accion que se desea deslinkear
```

## canceldelay
Cancela una transaccion deferred
Parametros:
```
canceling_auth: El permiso que autoriza esta accion
trx_id: el id de la transaccion deferred
```


# **3 TOKEN**

## create
Le permite a una cuenta ***issuer*** crear un token.
Utiliza como parametros:
```
issuer: La cuenta que crea el token
maximum_supply: la cantidad maxima junto al simbolo del token.
```

## issue
Esta accion distribuye a una cuenta una cantidad de tokens determinada.
Utiliza como Parametros:
```
to: Cuenta a la que se distribuyen los tokens
quantity: La cantidad de tokens a distribuir
memo: memo que acompaña la distribucion inicial de tokens
```

## retire
El opoesto a crear un token.
Parametros:
```
quantity: La cantidad de tokens a retirar
memo : El memo que acompaña la transaccion.
```

## transfer
Transfiere de una cuenta origen a una cuenta destino una cantidad n de tokens
Parametros:
```
from: cuenta origen desde donde se debitan los tokens
to: cuenta destino a la que acreditar los tokens
quantity: La cantidad de tokens
memo: Memo que acompaña la transaccion
```
