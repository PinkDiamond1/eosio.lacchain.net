---
id: privacidad
title: Privacidad en Redes Blockchain
sidebar_label: Privacidad en Blockchain
---

La tecnología Blockchain proporciona las herramientas necesarias para descentralizar la información de forma segura e inquebrantable. La introducción de Bitcoin hizo posible que miles de nodos de todo el mundo compartan y mantengan la misma información. Sin embargo, en la mayoría de las Blockchains, la idea central es hacer pública esta información para que todos accedan a ella y verificarla, sin la necesidad de una autoridad central. Por lo tanto, las cadenas de bloques públicas se definen como * sin confianza * (no es necesario confiar). Sin embargo, muchas empresas y entidades privadas que desean usar la tecnología blockchain se encuentran con una pregunta muy importante: ¿cómo mantener la información privada y al mismo tiempo mantener la seguridad y la transparencia de una blockchain pública?


## Soluciones de Privacidad de Datos en Blockchain

[Este informe](https://arxiv.org/pdf/2105.01316) estudia las tecnologías de blockchain empresarial existentes: sistemas impulsados ​​por EOSIO, Hyperledger Fabric y Besu, Consensus Quorum, R3 Corda y Ernst and Young's Nightfall, que brindan privacidad de datos al mismo tiempo que aprovechan los beneficios de la integridad de datos de blockchain. Al revisar y comparar cómo y qué tan bien estas tecnologías logran la privacidad de los datos, se logra capturar una noción de las mejores prácticas y modelos de privacidad de datos actuales de la industria. Las principales tecnologías empresariales se comparan con EOSIO para comprender mejor cómo EOSIO puede evolucionar para cumplir con las tendencias observadas en la privacidad de la cadena de bloques empresarial. En general, se observaron las siguientes estrategias y tendencias en estas tecnologías:

**Criptografía:** Se descubrió que el algoritmo hash es la primitiva criptográfica más utilizada en las soluciones de privacidad empresarial. 

**Coordinación a través de contratos inteligentes:** Una estrategia común es utilizar un blockchain público compartido para coordinar los grupos de privacidad de datos y, en general, las identidades administradas y el control de acceso.

**Uso compartido de códigos de transacciones y contratos:** Hay una variedad de diferentes niveles de privacidad en torno a la visibilidad de la lógica empresarial (código de contrato inteligente). Algunas soluciones solo permitían a los pares autorizados ver el código, mientras que otras lo hacían accesible a todos los miembros del blockchain compartido.

**Migraciones de datos para aplicaciones de privacidad de datos:** Existen desafíos importantes cuando se utilizan datos almacenados criptográficamente en términos de poder ejecutar actualizaciones del sistema.

**Varias cadenas de bloques para la privacidad de los datos:** las soluciones intentaron crear una nueva cadena de bloques privada para cada relación de datos privados que finalmente se abandonó a favor de un blockchain compartido con colecciones / transacciones de datos privados que estaban ancladas en el blockchain con un hash en para mejorar la escalabilidad.

[**Ver Informe de Privacidad en EOSIO**](https://arxiv.org/pdf/2105.01316)

## Privacidad en EOSIO

La versión 2.2 de EOSIO tiene una [función de grupo de seguridad o control de acceso privado](https://developers.eos.io/manuals/eos/v2.2/nodeos/features/private_chain_access/index) nativa que proporciona una solución de seguridad de dos capas diseñado para que los administradores de blockchain controlen qué participantes pueden acceder y utilizar una red EOSIO privada. La primera capa de seguridad está diseñada para hacer cumplir las conexiones TLS en el protocolo de red peer-to-peer; por lo que solo aquellos participantes con un certificado debidamente firmado pueden establecer una conexión TLS y comunicarse de forma segura con otros pares. La segunda capa de seguridad, que es opcional, está diseñada para incorporar el concepto de grupo de privacidad o grupo de seguridad; de modo que, si está habilitado, solo los participantes del grupo pueden acceder a los datos de la red privada. Por lo tanto, la primera capa controla el acceso a la "conexión" mientras que la segunda capa administra el acceso a los "datos". Los participantes se consideran entidades lógicas con un nombre EOSIO designado y pueden albergar varios nodos.

### Tutorial de control de acceso privado
Este [tutorial de acceso privado a EOSIO](https://developers.eos.io/manuals/eos/v2.2/nodeos/features/private_chain_access/tutorial) demuestra cómo usar la función `SECURITY_GROUP` para lanzar una red EOSIO privada con conexiones TLS, crear un grupo de seguridad y agregar / eliminar participantes para el control de acceso a los datos.

:::note Trabajo en progreso
Aun estamos trabajando en este aspecto de la documentación, si desea mejorar el contenido puede aprender [cómo contribuir](guias/contribuir). Consulte el [Roadmap del proyecto](./roadmap).
:::