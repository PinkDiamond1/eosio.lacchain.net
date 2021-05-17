---
id: rendimiento
title: Rendimiendo y Seguridad de la Red
sidebar_label: Rendimiento y Seguridad
---

Es esencial conocer los límites de la infraestructura desde una perspectiva de ciberseguridad y rendimiento.

LACChain EOSIO realizará periódicamente análisis y evaluaciones de ciberseguridad en la infraestructura. Así como coordinar pruebas de estrés periódicas.

## Transacciones por Segundo (TPS)
EOSIO 2 presenta mejoras de rendimiento para el procesamiento de contratos inteligentes, lo que coloca a EOSIO entre los protocolos blockchain más eficaces que existen.

[Jungle Testnet ha registrado **9,656** transacciones por segundo](https://www.eosgo.io/news/eosio-reaches-new-transaction-per-second-record) realizando pruebas de estrés y la red mainnet de EOS ha registrado **3.996** TPS máximo en un entorno de producción.

Los desarrolladores core de EOSIO mejoran constantemente el rendimiento y afirman que, según el uso, EOSIO tiene la capacidad de ** más de 10,000 transacciones por segundo ** usando EOSIO v2.0.

## Pruebas de estrés LACChain EOSIO
Se han desarrollado una serie de scripts para enviar una gran cantidad de transacciones simultáneamente a la red con el fin de medir la capacidad y el rendimiento de la red. Estos scripts están destinados a ser ejecutados simultáneamente por un grupo de participantes con el fin de alcanzar el volumen de transacciones previsto. Las pruebas de estrés deben ser coordinadas por socios y programadas periódicamente.

### Prueba de Transferencia de Valor

Esta prueba es una simple transferencia de token como la transacción generada por el siguiente comando cleos:

```
cleos push action eosio.token transfer '["stresstest.a", "stresstest.b", "0.0001 TEST", "memo"]' -p stresstest.a@active
```

Tenga en cuenta que hay un símbolo de token específico `TEST` emitido estrictamente con fines de prueba.

LACChain requiere dos acciones para cada transacción, una acción debe ser firmada por el nodo escritor, este script prepara las transacciones con ambas acciones requeridas para cumplir con el protocolo LACChain.

Se debe proporcionar una cuenta de nodo de escritor en la configuración de cualquier prueba.

#### Stress Test funciona en dos pasos.

1. Prepara transacciones y las almacena en archivos.
2. Envía todas las transacciones al mismo tiempo.

#### Scripts de prueba de estrés

Los scripts de la prueba de rendimiento se guardan en un repositorio privado, si está interesado en participar en una prueba de esfuerzo, comuníquese con el equipo técnico de LACChain EOSIO.

## Recursos de rendimiento de EOSIO

- [Como mejorar el rendimiento del nodo](https://github.com/atticlab/eos-bp-performance)
- [Contrato para pruebas de rendimiento](https://github.com/CryptoLions/TxShooterContract)
- [EOS Blaster](https://github.com/michaeljyeates/eos-blaster)

## Criptografía post-cuántica
 
 El BID tiene interés en comenzar a explorar cómo avanzar hacia una nueva generación de tecnología blockchain segura cuántica. Hay un interés en  probar las capacidades cuánticas en la red LACChain para hacerlo resistente a las computadoras cuánticas. 

 >  Este tema se abordó en [esta publicación del BID](https://publications.iadb.org/es/tecnologias-cuanticas-una-oportunidad-transversal-e-interdisciplinar-para-la-transformacion-digital)

LACChain EOSIO explorará la forma generar certificados siguiendo el estándar de credenciales verificables [VC](https://www.w3.org/TR/vc-data-model/) para todos los nodos en la red que tendrán como mecanismo de autenticación un par de llaves pública-privada generados con un algoritmo cuántico seguro.

Con el objetivo de :

- Usar estas llaves para encapsular el proceso de [comunicación entre nodos a través de TCP / RPLx](https://github.com/lacchain/besu-network/blob/master/TOPOLOGY_AND_ARCHITECTURE.md)
-  Usar las llaves cuánticas para firmar las transacciones emitidas por los nodos escritor, de modo que puede ser verificado por los nodos validadores

:::note Trabajo en progreso
Aun estamos trabajando en este aspecto de la documentación, si desea mejorar el contenido puede aprender [como contribuir](guias/contribuir). Consulte el [Roadmap del proyecto](./roadmap).
:::