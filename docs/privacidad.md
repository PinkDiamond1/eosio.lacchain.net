---
id: privacidad
title: Privacidad en Redes Blockchain
sidebar_label: Privacidad en Blockchain
---

La tecnología Blockchain proporciona las herramientas necesarias para descentralizar la información de forma segura e inquebrantable. La introducción de Bitcoin hizo posible que miles de nodos de todo el mundo compartan y mantengan la misma información. Sin embargo, en la mayoría de las Blockchains, la idea central es hacer pública esta información para que todos accedan a ella y verificarla, sin la necesidad de una autoridad central. Por lo tanto, las cadenas de bloques públicas se definen como * sin confianza * (no es necesario confiar). Sin embargo, muchas empresas y entidades privadas que desean usar la tecnología blockchain se encuentran con una pregunta muy importante: ¿cómo mantener la información privada y al mismo tiempo mantener la seguridad y la transparencia de una blockchain pública?

La privacidad en LACChain EOSIO se centra en hacer que los datos solo estén disponibles para una lista específica de participantes. Para lograr esto, se debe implementar un mecanismo que garantice que las transacciones se distribuyan solo a una lista de participantes que pueden enviar transacciones privadas entre ellos.

Esto trae unas cuantas de preguntas:

- ¿Qué cuentas pueden ver la transacción?
- ¿Qué nodos pueden ver la transacción?
- ¿Qué nodos pueden ver el contrato inteligente?
- ¿Quién maneja la lista de actores permitidos? (en cadena vs. fuera de cadena)


## Revisión tecnológica de las soluciones de privacidad de datos de Blockchain

[Este informe](https://arxiv.org/pdf/2105.01316) estudia las tecnologías de blockchain empresarial existentes: sistemas impulsados ​​por EOSIO, Hyperledger Fabric y Besu, Consensus Quorum, R3 Corda y Ernst and Young's Nightfall, que brindan privacidad de datos al mismo tiempo que aprovechan los beneficios de la integridad de datos de blockchain. Al revisar y comparar cómo y qué tan bien estas tecnologías logran la privacidad de los datos, se logra capturar una noción de las mejores prácticas y modelos de privacidad de datos actuales de la industria. Las principales tecnologías empresariales se contrastan en paralelo con EOSIO para comprender mejor cómo EOSIO puede evolucionar para cumplir con las tendencias observadas en la privacidad de la cadena de bloques empresarial. En general, se observaron las siguientes estrategias y tendencias en estas tecnologías:

**Criptografía:** Se descubrió que el algoritmo hash es la primitiva criptográfica más utilizada en las soluciones de privacidad empresarial. 

**Coordinación a través de contratos inteligentes:** Una estrategia común es utilizar un blockchain público compartido para coordinar los grupos de privacidad de datos y, en general, las identidades administradas y el control de acceso.

**Uso compartido de códigos de transacciones y contratos:** Hay una variedad de diferentes niveles de privacidad en torno a la visibilidad de la lógica empresarial (código de contrato inteligente). Algunas soluciones solo permitían a los pares autorizados ver el código, mientras que otras lo hacían accesible a todos los miembros del blockchain compartido.

**Migraciones de datos para aplicaciones de privacidad de datos:** Existen desafíos importantes cuando se utilizan datos almacenados criptográficamente en términos de poder ejecutar actualizaciones del sistema.

**Varias cadenas de bloques para la privacidad de los datos:** las soluciones intentaron crear una nueva cadena de bloques privada para cada relación de datos privados que finalmente se abandonó a favor de un blockchain compartido con colecciones / transacciones de datos privados que estaban ancladas en el blockchain con un hash en para mejorar la escalabilidad.

[**Ver Informe de Privacidad en EOSIO**](https://arxiv.org/pdf/2105.01316)

## Privacidad en EOSIO

### LACChain EOSIO ZPK

Las pruebas o protocolos de conocimiento cero, también conocidos como ZKP, son uno de los métodos alternativos explorados en LACChain EOSIO para resolver el desafío de la privacidad en blockchain. ZPK es el método por el cual los operadores de nodos pueden demostrar que una transacción es válida sin la necesidad de revelar los valores de la transacción. El hecho de que este valor agregado de privacidad se pueda obtener a través de la criptografía es útil para las personas y entidades privadas que se benefician del uso de la tecnología blockchain sin temor a compartir información confidencial.

LACChain EOSIO tiene como objetivo integrar nuevas primitivas (intrínsecas) para la verificación de ZKP disponible de forma nativa para Smart Contracts (Dapps) para la construcción de aplicaciones con requisitos de privacidad y al mismo tiempo puede validarse para los mismos agentes en la red (BPs + Full Nodos), sin la necesidad de agregar nuevos agentes a la red.

### Administrador de transacciones de privacidad

Un Privacy Transaction Manager (PTM) es un mecanismo utilizado en varias tecnologías de blockchain para distribuir transacciones privadas por un canal lateral de punto a punto, donde solo los participantes involucrados en la transacción reciben la carga privada. Se registra un puntero o hash de la transacción en la cadena de bloques de publica, para que los participantes puedan verificar la integridad y el orden de las transacciones privadas.

Por ejemplo **Hyperledger Besu**, otra tecnología blockchain utilizada en LACChain, utiliza un PTM llamado Orion. Besu proporciona una extensión de contrato pre-compilada del cliente ethereum que usa claves de Orion para canalizar transacciones privadas a través de nodos de Orion para evitar que los datos sean visibles en la red pública.

### Soluciones existentes de privacidad de datos en EOSIO
https://github.com/EOSIO/eosjs-ecc/issues/19#issuecomment-392941963

https://github.com/GetScatter/ScatterDesktop/issues/43

:::note Trabajo en progreso
Aun estamos trabajando en este aspecto de la documentación, si desea mejorar el contenido puede aprender [como contribuir](guias/contribuir). Consulte el [Roadmap del proyecto](./roadmap).
:::