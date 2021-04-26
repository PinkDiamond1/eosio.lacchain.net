---
id: privacidad
title: Privacidad
sidebar_label: Privacidad
---

:::note Trabajo en progreso
Aun estamos trabajando en este aspecto de la red. Por favor referirse a la [Ruta del Proyecto](./roadmap).
:::

La tecnología Blockchain proporciona las herramientas necesarias para descentralizar la información de forma segura e inquebrantable. La introducción de Bitcoin hizo posible que miles de nodos de todo el mundo compartan y mantengan la misma información. Sin embargo, en la mayoría de las Blockchains, la idea central es hacer pública esta información para que todos accedan a ella y verificarla, sin la necesidad de una autoridad central. Por lo tanto, las cadenas de bloques públicas se definen como * sin confianza * (no es necesario confiar). Sin embargo, muchas empresas y entidades privadas que desean usar la tecnología blockchain se encuentran con una pregunta muy importante: ¿cómo mantener la información privada y al mismo tiempo mantener la seguridad y la transparencia de una blockchain pública?

La privacidad en LatamLink se centra en hacer que los datos solo estén disponibles para una lista específica de participantes. Para lograr esto, se debe implementar un mecanismo que garantice que las transacciones se distribuyan solo a una lista de participantes que pueden enviar transacciones privadas entre ellos.

Esto trae unas cuantas de preguntas:

- ¿Qué cuentas pueden ver la transacción?
- ¿Qué nodos pueden ver la transacción?
- ¿Qué nodos pueden ver el contrato inteligente?
- ¿Quién maneja la lista de actores permitidos? (en cadena vs. fuera de cadena)

## LatamLink ZPK

Las pruebas o protocolos de conocimiento cero, también conocidos como ZKP, son uno de los métodos alternativos explorados en LatamLink para resolver el desafío de la privacidad en blockchain. ZPK es el método por el cual los operadores de nodos pueden demostrar que una transacción es válida sin la necesidad de revelar los valores de la transacción. El hecho de que este valor agregado de privacidad se pueda obtener a través de la criptografía es útil para las personas y entidades privadas que se benefician del uso de la tecnología blockchain sin temor a compartir información confidencial.

LatamLink tiene como objetivo integrar nuevas primitivas (intrínsecas) para la verificación de ZKP disponible de forma nativa para Smart Contracts (Dapps) para la construcción de aplicaciones con requisitos de privacidad y al mismo tiempo puede validarse para los mismos agentes en la red (BPs + Full Nodos), sin la necesidad de agregar nuevos agentes a la red.

### Administrador de transacciones de privacidad

Un Privacy Transaction Manager (PTM) es un mecanismo utilizado en varias tecnologías de blockchain para distribuir transacciones privadas por un canal lateral de punto a punto, donde solo los participantes involucrados en la transacción reciben la carga privada. Se registra un puntero o hash de la transacción en la cadena de bloques de publica, para que los participantes puedan verificar la integridad y el orden de las transacciones privadas.

Por ejemplo **Hyperledger Besu**, otra tecnología blockchain utilizada en LACChain, utiliza un PTM llamado Orion. Besu proporciona una extensión de contrato pre-compilada del cliente ethereum que usa claves de Orion para canalizar transacciones privadas a través de nodos de Orion para evitar que los datos sean visibles en la red pública.

### Soluciones existentes de privacidad de datos en EOSIO
https://github.com/EOSIO/eosjs-ecc/issues/19#issuecomment-392941963

https://github.com/GetScatter/ScatterDesktop/issues/43
