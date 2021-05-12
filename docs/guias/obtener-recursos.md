---
id: obtener-recursos
title: ¿Como obtener recursos en la red?
sidebar_label: Obtener recursos en la red
---

En la red LACChain EOSIO los usuarios no poseen recursos de CPU y NET, estos son descontados de la cuenta del nodo escritor (partner) a la hora de co-firmar una transacción. Estos solo poseen RAM misma que es necesaria para [desplegar contratos en la red](./desplegar-contrato-inteligente).

Para obtener este recurso el usuario debe solicitárselo a su [partner](./partners), dicha solicitud, así como la cantidad y el valor de esta es definido por cada partner ya que ellos cuentan con la autonomía de administrar los recursos disponibles. Puede ver más información sobre el manejo de recursos en la red [aquí](../testnet/recursos).

### Modelo de distribución

 | | **CPU** | **NET** | **RAM** |
:--------------:|:--------------:|:--------------:|:--------------:|
| Comité Permisionador | - | - | 32 GB |
| Entidades | 1/N del CPU total | 1/N del NET total | Asignado por comité |
| Nodos Escritores | Utiliza CPUde la entidad | Utiliza NET de la entidad | n/a |
| Contratos Inteligentes | 0 ųs | 0 Bytes | Asignado por entidad |
| Usuarios Finales | 0 ųs | 0 Bytes | 0 Bytes |

:::note Trabajo en progreso
Aun estamos trabajando en este aspecto de la documentación, si desea mejorar el contenido puede aprender [como contribuir](./contribuir). Consulte el [Roadmap del proyecto](../testnet/roadmap).
:::