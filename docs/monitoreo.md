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

## Divulgación voluntaria de información de nodo

Permite a los operadores de nodos anunciar públicamente su propiedad de una cuenta de LAC-Chain y compartir información sobre ellos mismos.

Piense en un WHOIS para cuentas de LAC-Chain que se verifiquen mediante una firma de blockchain. Todos estos campos requieren un inicio de sesión único que se autentica a través de blockchain y, por lo tanto, no puede estar equivocado. Solo el BP con la clave correcta puede editar estos campos utilizando la interfaz de usuario.


### Fase 1
#### 1. Interfaz de usuario básica completa
#### 2. Lista autogenerada de todos los productores de bloques extraídos de la cadena de bloques.
 - Nombre de la cuenta del nodo
 - Tipo de entidad de nodo
 - Clave pública de nodo
 - Código de ubicación (ISO 3166-1 numérico)

#### 3. Información voluntaria proporcionada por cada entidad
 - Nombre legal
 - Número de identificación
 - Nombre de contacto técnico
 - Nombre de contacto negocios
 - Dirección
 - Sitio web
 - Email
 - Redes sociales
 - Marca / Logotipo
 - Código de Conducta
 
#### Nodos EOSIO
- Ubicaciones de nodos
- Puntos finales API y P2P
- Validadores
- Nodos de escritor
- Nodos History API
- Nodos API
- Nodos Boot
- Nodos Observadores
 
### Fase II
#### Rendimiento
 - Bloques perdidos en X período de tiempo *Involuntario*
 - Rondas perdidas en X período de tiempo *Involuntario*
 - Número total de bloques producidos *Involuntario*
 - Posición media en la lista de BP *Involuntario*
 - Calificación de rendimiento promedio *Involuntario*
 - Tiempo de inactividad total
 - Interrupciones
 - Pruebas de estrés
 - Gestión de parches
 - Capacidad Recuperación de Desastres
 - Pruebas de intrusión

#### Infraestructura
- Física / Nube pública / Compartida
	- Sitio primario
	- Sitio secundario
- Diagrama Infraestructura
- Protección DDoS
- Firewalls
- Balanceadores de carga
- VPN 
- Planes futuros

### Fase III

#### Estructura de soporte
 - Número de empleados técnicos.
 - Soporte 24/7
 - Herramientas de monitoreo
 - Plan de comunicación con otros BP

#### Estructura de propiedad
 - Descripción de la estructura comercial
 - Número de empleados
 - Titulares de intereses individuales
 - Accionistas de entidades comerciales
 - Entidades afiliadas

### Monitoreo en la Nube

Además de aprovechar los servicios en la nube existentes para el monitoreo.

 - Prometheus
 - Grafana 

Adicionalmente se explorarán herramientas de Blockchain Analytics y Data Science.


## Monitor de Red

Se proponer crear un [monitor de red](monitor.md) nativo como herramienta para lograr este objetivo. 
 