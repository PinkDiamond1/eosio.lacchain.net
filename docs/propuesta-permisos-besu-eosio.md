# 1 Permisos y trazabilidad en EOSIO
En eosio todas las transacciones estan vinculadas a una cuenta, por ejemplo si se desea llamar a la accion de un contrato, el llamado va a venir acompañado de una cuenta origen que consume esa accion del contrato inteligente.

A diferencia de otras blockchains ninguna accion es anonima, considerando que el permiso de crear nuevas cuenta podria delegarse exclusivamente a los escritores en la topologia besu, toda accion sin importar  como ingresa a la red podria quedar vinculada al escritor que creo la cuenta.

# 2 Propuesta de creacion de cuentas y trazabilidad de acciones

Los permisos privilegiados pueden delegarse de forma dinamica a distintas entidades y subentidades, por ejemplo a comites legales dentro del comite o a representantes tecnicos dentro del comite.

Proponemos delegar los permisos de crear cuenta a los escritores, este permiso puede ser modificado a su vez por una organizacion/comite para amoldarse a los requerimientos legales y operativos.

## Creacion de cuenta
Se plantean los siguientes pasos para la creacion de cuentas y uso de los recursos de la chain.

1.  Se delega el permiso de crear nuevas cuentas exclusivamente a los escritores/writers.

2. Un escritor escritorbobb, crea una cuenta nueva aliceaccount.

3. En la tabla de cuentas, aliceaccount tiene definido a escritorbobb como el escritor que creo la cuenta
4. El escritor decide como distribuirle recursos a alice en funcion a los requerimientos definidos por el comite, puede optar por transferir recursos, delegarlos, cofirmar transacciones.
5. alice utiliza los recursos de la chain.

## Trazabilidad, damage control y liability

En caso de que se esten usando recursos de la chain por fuera del scope planteado por el comite, se plantea el siguiente escenario.

1. Se identifica la cuenta abusando de los recursos
2. Se identifica el escritor responsable de la creacion de esa cuenta (informacion publica en la chain)
3. Se notifica al escritor
4. El comite puede optar por accionar de distintas formas:

  ```
  * Delegar al escritor  la responsabilidad de controlar
  * Deshabilitar la cuenta abusando
  * Deshabilitar todas las cuentas generadas por el escritor
  * No Deshabilitar las cuentas pero desdelegar recursos temporalmente
  * Ordenar a los validadores que blacklisteen la cuenta
  * Otras acciones que cumplan con los requerimientos legales y operativos
  ```
5. Una vez controlada la situacion queda sujeto al comite como realizar el arbitraje que responda a los requerimientos del comite.
