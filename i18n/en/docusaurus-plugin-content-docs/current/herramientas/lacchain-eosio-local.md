---
id: lacchain-eosio-local
title: Tool for Local Development
sidebar_label: Local Development
---

This project builds the LACChain network in a local environment so that testing can be done before being published on the public network. Due to the technology that Blockchain contains, when being published or private, any change in the network creates an immutable record of the action and everything that is modified can affect both positively and negatively the users within it, it is for this reason that It is essential to have a local environment where functionality tests, performance tests, stress tests, among others, can be carried out without causing any failure that affects users.

You can check the repository of this project [here](https://github.com/eoscostarica/lacchain-eosio-local)

### Contracts

The LACChain EOSIO image needs contracts for its initial setup:

1. **eosio.bios**: Provides the actions that are absolutely critical to starting a chain.
2. **lacchain.system**: It provides the governance rules established in the LACChain EOSIO network. Consult [this link](../eosio/) for more detail.
3. **eosio.token**: Defines the structures and actions that allow users to create, issue, and manage tokens for EOSIO-based blockchains.
4. **eosio.msig**: Allows the creation of proposed transactions that require authorization from a list of accounts.

### Configuration key

The preconfigured key is the eosio key that allows you to carry out the initial network configuration. You can consult it [here](https://github.com/eoscostarica/lacchain-eosio-local/blob/main/Dockerfile#L43).
```
EOSIO_PRIVATE_KEY: 5KQwrPbwdL6PhXujxW37FSSQZ1JiwsST4cqQzDeyXtP79zkvFD3
EOSIO_PUBLIC_KEY:  EOS6MRyAjQq8ud7hVNYcfnVPJqcVpscN5So8BhtHuGYqET5GDW5CV
```

### Prerequisites

- [Git](https://git-scm.com/)
- [Node.js](https://nodejs.org/en/)
- [Docker](https://www.docker.com/)

## Quick start

- Download the Docker image `docker pull eoscostarica506/lacchain-eosio-local`
- Run the Docker image `docker run -dp 8888:8888 eoscostarica506/lacchain-eosio-local`
- Run the command `cleos get info` or check the link in the browser `http://127.0.0.1:8888/v1/chain/get_info`

If you run the command `cleos get info` or access `http://127.0.0.1:8888/v1/chain/get_info` and you get information like the following is because you already have the environment ready to work.

```
{"server_version":"e57a1eab","chain_id":"981453d176ddca32aa278ff7b8af9bf4632de00ab49db273db03115705d90c5a","head_block_num":7,"last_irreversible_block_num":6,"last_irreversible_block_id":"00000006ce0e04cb174e797d1f910945d1ba1c82d925c0f0e3721e392e72e37d","head_block_id":"0000000728b21e87b801d17207477c9cc057e1ff7535ce4c4bae5c38d779f531","head_block_time":"2021-07-06T20:42:24.000","head_block_producer":"eosio","virtual_block_cpu_limit":201202,"virtual_block_net_limit":1054885,"block_cpu_limit":199900,"block_net_limit":1048576,"server_version_string":"v2.0.12","fork_db_head_block_num":7,"fork_db_head_block_id":"0000000728b21e87b801d17207477c9cc057e1ff7535ce4c4bae5c38d779f531","server_full_version_string":"v2.0.12-e57a1eab619edffc25afa7eceb05a01ab575c34a"}
```

## Let us begin

To create the Docker image locally, you must run the following commands:

- Clone the local LACChain EOSIO repository `https://github.com/eoscostarica/lacchain-eosio-local.git`
- Enter the cloned repository folder `cd <path/lacchain-eosio-local>`
- Build the Dockerfile image `docker build -t lacchain-eosio-local .`
- Run the Dockerfile image `docker run -dp 8888:8888 lacchain-eosio-local`
- Run the command `cleos get info` or check the link in the browser `http://127.0.0.1:8888/v1/chain/get_info`

By this point, you already have the LACChain EOSIO network image running locally.

