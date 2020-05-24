---
id: trazabilidad
title: Trazabilidad de Acciones 
sidebar_label: Trazabilidad
---

## Permisos y trazabilidad en EOSIO
En EOSIO todas las transacciones están vinculadas a una cuenta, por ejemplo si se desea llamar a la acción de un contrato, el llamado va a venir acompañado de una cuenta origen que consume esa acción del contrato inteligente.

A diferencia de otras blockchains ninguna acción es anónima, considerando que el permiso de crear nuevas cuenta podría delegarse exclusivamente a los escritores en la topología BESU, toda acción sin importar  como ingresa a la red podría quedar vinculada al escritor que creo la cuenta.

## Trazabilidad de acciones LACChain

En esta propuesta preliminar, los permisos privilegiados pueden delegarse de forma dinámica a distintas entidades y sub-entidades, por ejemplo a comités legales dentro del comité o a representantes técnicos dentro del comité.

Proponemos delegar los permisos de crear cuenta a los escritores, este permiso puede ser modificado a su vez por una organización/comité para amoldarse a los requerimientos legales y operativos.

### Creación de cuenta
Se plantean los siguientes pasos para la creación de cuentas y uso de los recursos de la chain.

1.  Se delega el permiso de crear nuevas cuentas exclusivamente a los escritores/writers.

2. Un escritor `escritorbobb`, crea una cuenta nueva `aliceaccount`.

3. En la tabla de cuentas, `aliceaccount` tiene definido a `escritorbobb` como el escritor que creo la cuenta
4. El escritor decide como distribuirle recursos a alice en función a los requerimientos definidos por el comite, puede optar por transferir recursos, delegarlos, cofirmar transacciones.
5. alice utiliza los recursos de la red.

### Trazabilidad, damage control y liability

En caso de que se estén usando recursos de la chain por fuera del scope planteado por el comité, se plantea el siguiente escenario.

1. Se identifica la cuenta abusando de los recursos
2. Se identifica el escritor responsable de la creación de esa cuenta (información publica en la chain)
3. Se notifica al escritor
4. El comité puede optar por accionar de distintas formas:

	- Delegar al escritor  la responsabilidad de controlar.
	- Deshabilitar la cuenta abusando.
	- Deshabilitar todas las cuentas generadas por el escritor.
	- No Deshabilitar las cuentas pero desdelegar recursos temporalmente.
	- Ordenar a los validadores que blacklisteen la cuenta.
	- Otras acciones que cumplan con los requerimientos legales y operativos.

5. Una vez controlada la situación queda sujeto al comité como realizar el arbitraje que responda a los requerimientos del comité.
