---
id: privacidad
title: Privacy on EOSIO Blockchains
sidebar_label: Blockchain Privacy
---

Blockchain technology provides the necessary tools to decentralize the information securely and unwaveringly. The introduction of Bitcoin made possible that thousand of nodes from around the world share and hold the same information. However, in the majority of the Blockchains, the central idea is to hold this information public for everyone accesses to it and verify it, without the necessity of a central authority. Therefore public blockchains are defined as *trustless*(no need to trust). However, a lot of companies and private entities that want to use the blockchain technology encounter with a very important question: how maintain the information private and at the same time keep the security and transparency of a public blockchain?

## Technology Review of Blockchain Data Privacy Solutions
[This report](https://arxiv.org/pdf/2105.01316) reviews existing enterprise blockchain technologies - EOSIO powered systems, Hyperledger Fabric and Besu, Consensus Quorum, R3 Corda and Ernst and Young's Nightfall - that provide data privacy while leveraging the data integrity benefits of blockchain. By reviewing and comparing how and how well these technologies achieve data privacy, a snapshot is captured of the industry's current best practices and data privacy models. Major enterprise technologies are contrasted in parallel to EOSIO to better understand how EOSIO can evolve to meet the trends seen in enterprise blockchain privacy. The following strategies and trends were generally observed in these technologies:

**Cryptography:** the hashing algorithm was found to be the most used cryptographic primitive in enterprise or changeover privacy solutions. 

**Coordination via on-chain contracts:** a common strategy was to use a shared public ledger to coordinate data privacy groups and more generally managed identities and access control.

**Transaction and contract code sharing:** there was a variety of different levels of privacy around the business logic (smart contract code) visibility. Some solutions only allowed authorised peers to view code while others made this accessible to everybody that was a member of the shared ledger.

**Data migrations for data privacy applications:** significant challenges exist when using cryptographically stored data in terms of being able to run system upgrades.

**Multiple blockchain ledgers for data privacy:** solutions attempted to create a new private blockchain for every private data relationship which was eventually abandoned in favour of one shared ledger with private data collections/transactions that were anchored to the ledger with a hash in order to improve scaling.

[**View EOSIO Privacy Report**](https://arxiv.org/pdf/2105.01316)

## Privacy on EOSIO

EOSIO version 2.2 has a native [Private Access Control or Security Group feature](https://developers.eos.io/manuals/eos/v2.2/nodeos/features/private_chain_access/index) which provides a two-layer security solution designed for blockchain administrators to control which participants can access and use a private EOSIO network. The first security layer is designed to enforce TLS connections in the peer-to-peer network protocol; so only those participants with a properly signed certificate are able to establish a TLS connection and communicate securely with other peers. The second security layer, which is optional, is designed to bring the concept of a privacy group or security group; so that if enabled, only those participants in the group are allowed to access data from the private network. Therefore, the first layer controls “connection” access while the second layer manages “data” access. Participants are considered logical entities with a designated EOSIO name and may host multiple nodes.

### Private Access Control Tutorial 
This [EOSIO private access tutorial](https://developers.eos.io/manuals/eos/v2.2/nodeos/features/private_chain_access/tutorial) demonstrates how to use the `SECURITY_GROUP` feature to launch a private EOSIO network with TLS connections, create a security group and add/remove participants for data access control. 

:::note Work in Progress
We are still working on this aspect of the documentation, if you want to improve the content you can learn [how to contribute](./guias/contribuir). See the [Project Roadmap](./roadmap).
:::