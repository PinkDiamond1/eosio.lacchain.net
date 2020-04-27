---
id: monitoreo
title: Monitoreo de Red
sidebar_label: Monitoreo de Red
---
El monitoreo de lo que sucede en la red es esencial para mejorarlo y medir el impacto social de sus soluciones. El principal objetivo de las herramientas de monitoreo es producir información descentralizada y confiable sobre cada nodo y la actividad de la red.

## Monitoreo on-chain

Existe una colección de [contratos inteligentes y utilidades para EOSIO](https://eosmechanics.com/)  que se pueden emplear en LatamLink.

Las métricas son generadas por contratos inteligentes ubicados bajo la cuenta `eosmechanics`. Son ejecutados durante el `schedule` de cada productor de bloques y registra los tiempos de ejecución utilizando el campo `cpu_usage_us` incluido en todas las transacciones de la red. Los datos estarán públicamente disponibles para su análisis y lo alentamos a hacerlo para ayudar a identificar problemas y mejorar el rendimiento de los productores de bloques.


Ejemplos de herramientas que utilizan estos datos: 

- [EOS Block Producer Benchmarks](https://www.alohaeos.com/tools/benchmarks) 
- [Block Producer Performance](https://labs.eostitan.com/#/block-producer-performance) 


### CPU Benchmark

Esta métrica de velocidad de CPU utiliza como punto de referencia el tiempo de CPU consumido calculando los números primos de Mersenne. El cálculo de primos es un estándar de la industria para medir el rendimiento de CPU y utiliza operaciones de código que son comunes en el desarrollo de software.

### RAM Benchmark

Esta métrica consiste en escribir y leer rápidamente a una tabla RAM y de forma muy similar a la métrica de CPU pretende medir el rendimiento de los recursos ofrecidos por lo distintos productores de bloques. 


## Monitoreo off-chain

- oracle distribuido que provee datos de performance a smart contract
- datos podrían venir de validadores (todo tienen el mismo peso )
- el comité permisionador se reserva el derecho discrecional de eliminar un productor.

### Información sobre nodos
- a que entidad pertenece 
- ubicación de nodos
- metricas de rendimiento y disponibilidad del nodo
- datos públicos
	

### Monitoreo en la Nube

Además de aprovechar los servicios en la nube existentes para el monitoreo.

 - prometheus
 - grafana 

Adicionalmente se explorarán herramientas de Blockchain Analytics y Data Science.


## Monitor de Red

Se proponer crear un [monitor de red](monitor.md) nativo como herramienta para lograr este objetivo. 
 




