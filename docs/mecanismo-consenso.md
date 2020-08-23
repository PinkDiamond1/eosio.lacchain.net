---
id: mecanismo-consenso
title: Mecanismo de Consenso
sidebar_label: Mecanismo de Consenso
---

El mecanismo de consenso asegura que cada nuevo bloque que se agrega al Blockchain sea la única versión de la verdad acordada por todos los nodos en la red. Por lo tanto, un algoritmo de consenso tiene como objetivo encontrar un acuerdo común que sea una aceptado por toda la red.

En el caso de LatamLink existe un grupo de nodos que poseen la autoridad de validar transacciones y escribir estas transacciones dentro de bloques nuevos. A estos nodos los denominaremos **Validadores**. 

## Comite Permisionador LACChain

LACChain es una red pública / permisionada, de tal manera que se requiere de una autoridad central que gobierna la actividad de la red, esto con el objetivo de obtener una red legalmente supervisada.

LACChain se diseña bajo el principio de que el comité permisionador sea transparente y tenga la menor intervención posible. 

La autoridad del comite permisionador podrá ser derivada de un conjunto de actores mediante aprobaciones multifirmas [`multisig`]( https://developers.eos.io/manuals/eosjs/v21.0/how-to-guides/how-to-propose-a-multisig-transaction/#gatsby-focus-wrapper) te tal manera que se requieran de la aprobación del grupo mediante la firma de la mayoría simple, es decir, que se junten las firmas de la mitad de los actores más uno adicional como mínimo.

Dentro de la principales funciones del comité permisionador esta evaluar las entidades que quieran registrarse y desplegar nodos validadores.

### Grupo de Consenso

El grupo de nodos validadores activos poseen la autoridad de escribir a la cadena de bloques porque fueron otorgados este privilegio por parte de la  autoridad superior, el **comité permisionador**, quien sera la máxima autoridad y quien determina cuales entidades serán responsables de operar los nodos validadores. 

>  Cualquier entidad que cumpla con un mínimo de requisitos técnicos y legales puede aplicar para ser validador de bloques en LatamLink. Consulte nuestra sección sobre el [proceso de permisionado](proceso-permisionado.md) para obtener más información.

Eventualmemte habrá un vehículo legal, quien verifica identidad y firma contratos con entidades que operan los nodos validadores. 


## Nodos Validadores Activos

Los nodos validadores autorizados como nodos nodos validadores activos pertenecen a un grupo que comparte la responsabilidad de validar y escribir todas las acciones en la red.

Son capaces de reconocer las firmas de los nodos escritores y verificar que las transacciones hayan sido transmitidas a la red por nodos autorizados mediante listas blancas en contratos inteligentes. 

Una red EOSIO esta configurada por defecto para utilizar 21 validadores activos y una serie validadores de reserva para una operación estable.

>  EOSIO permite hasta **125 productores de bloque activos**, especificado mediante  `max_producers` en [config.hpp](https://github.com/EOSIO/eos/blob/master/libraries/chain/include/eosio/chain/config.hpp#L106) 


### Cronograma de producción 
En redes EOSIO, los nodos validadores activos se enumeran en un cronograma, llamado `schedule`

La lista de nodos validadores en el `schedule` se ordena alfabéticamente y así se define la secuencia en que deben firmar bloques. 

Cada validador recibe una ventana de 12 bloques para firmar antes de que el siguiente validador inicie su ventana. Los bloques nuevos son producidos por el primer nodo en la lista durante un periodo de 6 segundos (12 bloques) y luego pasa el siguiente nodo a producir los siguientes 12 bloques y así sucesivamente. 

Si un nodo validador no está listo o no está disponible, no hay nadie para producir los 12 bloques, por lo que todas las transacciones especulativas se retrasan hasta que el próximo validador comience a firmar.

### Tolerancia a fallas bizantinas
Los bloques no se consideran irreversibles en la cadena hasta que hayan sido validados por 2/3 +1 de los validadores activos. De tal manera que si un validador del grupo inserta un bloque invalido los nodos siguientes lo rechazaran y las transacciones y no serán incluidas sin que 2/3 +1 hayan validado ese bloque. 

> **Ejemplo:** Una red de 21 validadores activos requiere validación de 15 nodos (2/3 +1), lo cual toma en promedio 90 segundos para obtener irreversibilidad de un bloque nuevo.


### Tolerancia a fallas en nodos
Una vez que se firma un bloque, otros productores lo validan en el cronograma y pasa a un estado irreversible después de que 2/3 + 1 productores lo hayan validado. Entonces, si 1/3 o más de todos los productores están fuera de línea, el último número de bloque irreversible, conocido como "Last Irreversible Block" o LIB, no aumentaría y la cadena de bloques se detendrá.

Los servidores a veces fallan, y a veces deben ser retirados de operación para actualizaciones de software y mantenimiento del sistema, lo que es importante considerar en redes EOSIO pequeñas.

Con solo 5 validadores, la red tolerará que 1 validadores se desconecte. Si más de uno está fuera de línea, el número del **último bloque irreversible (LIB)** dejará de moverse y la red se detendrá. Con 4 nodos, la interrupción de un nodo interrumpirá la operación. Con 9 validadores, dos nodos pueden desconectarse sin romper la red.

Es importante que las llaves privadas de producción estén respaldadas correctamente. Si se pierden llaves de nodos validadores debido a un desastre del sistema, existe la posibilidad de que la red deje de funcionar para siempre.

## Nodos Validadores de Reserva

Las redes EOSIO manejan un grupo de validadores registrados que pueden asumir el rol de producir bloques con solo ser agregado al `schedule` de nodos validadores activos por el comite permisionador.

### Rotación de nodos activos

La rotación periódica de nodos nodos validadores activos favorece la descentralización. Por esta razón el comité permisionador contará con una [herramineta de gestión de red](gobernanza-red.md) que permita seleccionar los nodos validadores que desea incluir o excluir en el `schedule`. 

> **Por ejemplo**: Se puede definir una política de rotación de nodos activos semanalmente.  

Mas adelante se habilitrá la rotación periódica y automática basada en contratos inteligentes. De tal forma que sea imposible predecir quienes sean los nodos validadores activos seleccionados. (entropía externa)


### Sustitución de un Productor de Bloques activo 
En caso de que algún nodo del grupo principal dejará de responder. El comité permisionador podrá reemplazar manualmente los nodos validadores que presenten problemas de rendimiento o seguridad.

Eventualmente se podrá implementar un contrato inteligente que sustituya una cuenta en el `schedule` de forma automática basado en métricas objetivas de rendimiento.

**Aun se requiere definir numero optimo de nodos validadores de respaldo para LACChain.**


## Contratos de sistema EOSIO a la medida

LACChain utilizará contratos de sistema hechos a la medida. Para esto nos basaremos en los contratos de sistema nativos de EOSIO, donde el principal cambio es sustituir el mecanismo nativo **Delegated Proof of Stake (dPOS)** por el estándar definido por **LAC-Chain**.

Este cambio implica deshabilitar el uso de tokens y de votos característicos del protocolo DPOS. Es decir, al momento de girar recursos, no será necesario disponer de ningún token. 

### Funciones dPOS deshabilitadas:

 - Token de Sistema
 - Votos por nodos productores de bloques
 - Pago de nodos productores de bloquess
 - "Staking" para recursos
 - Delegación de Recursos
 - Namebiding
 - Rex

Esta funcionalidad no necesariamente se eliminará, sino que se utilizará una función de “assert false” para deshabilitar las funciones ya que la plataforma no soporta estas funciones.

En esencia la los contratos de sistema de LAC Chain definen un mecanismo para registrar los nodos validadores así como asignar **recursos de sistema** requeridos por las cuentas de nodos escritores de la red para ejecutar sus contratos inteligentes.


