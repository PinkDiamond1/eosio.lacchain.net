---
id: crear-cuenta-entidad
title: Obtener una cuenta para una entidad 
sidebar_label: Cuentas para Entidades
---

Como red pública de blockchain, LACChain esta abierta a cualquier entidad en América Latina y el Caribe. Como redes permisionadas, las entidades deben estar autenticadas y comprometerse a cumplir con la ley, las políticas y las reglamentaciones para obtener la autorización.

Las entidades registradas pueden desplegar diferentes tipos de nodos en la red dependiendo de si son "partners" o "non- partners". La siguiente tabla resume los tipos de nodos que puede implementar cada tipo de entidad.

| Tipo de nodo | Partner | Non-Partner |
|-----------|:-------:|:-----------:|
| **Nodos de validación**| ![Yes](/img/yes-icon.svg) |  ![No](/img/no-icon.svg)  |
| **Nodos de arranque**     | ![Yes](/img/yes-icon.svg) |  ![No](/img/no-icon.svg)  |
| **Nodos de escritura**   | ![Yes](/img/yes-icon.svg) | ![Yes](/img/yes-icon.svg) |
| **Nodos observadores** | ![Yes](/img/yes-icon.svg) | ![Yes](/img/yes-icon.svg) |

Para ser parte de la red, se debe completar un formulario de solicitud de registro, el comité de permisos ejecutará una acción `eosio: addentity` con la siguiente información suministrada por la entidad interesada:

- **`entity_name`** (nombre de cuenta de la entidad)
- **`entity_type`** (partner)
- **`pub_key`** (llave publica para la cuenta de la nueva entidad)

Para ver la lista de partners que forman parte del comité permisionador de la red diríjase [aquí](./partners).

## Registro como non-partner
 
Para que una entidad tenga permiso para operar un nodo escritor, debe seguir los siguientes pasos:

1. Lea, comprenda y acepte los [Términos y condiciones para los nodos escritores para LACChain](https://latamlink.io/docs/writer-nodes-terms-conditions) que incluye la Política de privacidad y los Casos de uso prohibido como anexos.
2. Complete el [Acuerdo de nodo](https://latamlink.io/docs/node-agreement) y envíelo firmado a info@lacchain.net (como PDF).
3. Siga las [instrucciones](./instalacion-nodos) para implementar un nodo de escritor y envíenos la información del nodo que obtiene al final del proceso a info@lacchain.net para autorizar su nodo.

Las entidades que "non-partner" pueden registrar nuevas cuentas en la red y permitir que las transacciones ingresen a la red firmando conjuntamente las transacciones con la llave privada del nodo escritor.

Cada nodo escritor tiene autonomía para administrar su parte de los recursos de red de acuerdo con sus preferencias.

## Registro como partner

Para que una entidad tenga permiso para operar un nodo validador, debe seguir los siguientes pasos:

1. Conviértase en socio (partner) de LACChain Alliance.
2. Lea, comprenda y acepte los [Términos y condiciones para nodos validadores LACChain](https://latamlink.io/docs/validator-nodes-terms-conditions) que incluye la Política de privacidad y los Casos de uso prohibido como anexos.
3. Complete el [Acuerdo de nodo](https://latamlink.io/docs/node-agreement) y envíelo firmado a info@lacchain.net (como PDF).
4. Siga las [instrucciones](./instalacion-nodos) para implementar un nodo validador y envíenos la información del nodo que que obtiene al final del proceso a info@lacchain.net para autorizar su nodo.

Los partner de la red LACChain EOSIO son entidades que también pueden formar parte del comité permisionador, que se encarga de regular y administrar la gestión de los recursos y el acceso a la red.

Cada partner tiene la autonomía para administrar su parte de los recursos de la red para sus clientes y afiliados en la red.

:::note Trabajo en progreso
Todavía estamos trabajando en este aspecto de la red. Consulte el [Roadmap del proyecto ](../roadmap).
:::