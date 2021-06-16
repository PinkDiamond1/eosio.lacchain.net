---
id: obtener-recursos
title: How to obtain network resources
sidebar_label: How to Obtain Resources
---

In the LACChain EOSIO network, users do not have CPU and NET resources, these are deducted from the account of the writer node (partner) when co-signing a transaction. They only have the same RAM that is necessary to [deploy contracts on the network](./desplegar-contrato-inteligente).

To obtain this resource, the user must request it from his [partner](./partners), said request, as well as the quantity and value of this is defined by each partner since they have the autonomy to manage the available resources. You can see more information about resource management on the network [here](../recursos).

### Distribution model

  | | **CPU** | **NET** | **RAM** |
:--------------:|:--------------:|:--------------:|:--------------:|
| **Permitting Committee** | - | - | 32 GB |
| **Entities** | 1/N of total CPU | 1/N of the total NET | Assigned by committee |
| **Writer Nodes** | Uses entity CPU | Uses NET of the entity | n/a |
| **Smart Contracts** | 0 ųs | 0 Bytes | Assigned by entity |
| **End Users** | 0 ųs | 0 Bytes | 0 Bytes |

:::note Work in Progress
We are still working on this aspect of the documentation, if you want to improve the content you can learn [how to contribute](./contribuir). See the [Project Roadmap](../roadmap).
:::