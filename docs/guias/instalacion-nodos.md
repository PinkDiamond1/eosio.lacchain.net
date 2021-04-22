---
id: instalacion-nodos
title: Instalación de Nodos
sidebar_label: Instalación de Nodos
---

## Nodos EOSIO

**Nodeos** es el software central de una cadena de bloques EOSIO. Es un deamon que realiza todas las funciones de un nodo de blockchain, tales como sincronización con otros nodos a través del **protocolo p2p**, proporciona una **API HTTP** para el software del cliente y, opcionalmente, **firma bloques** si se configura con la cuenta de un validador.

Nodeos está disponible en código fuente y paquetes binarios en el [repositorio GitHub](https://github.com/EOSIO/eos/releases).  Las plataformas compatibles son Ubuntu 16.04 y 18.04, RHEL7 y MacOS. 

Cuando planifique la instalación de un servidor, tiene varias opciones para seleccionar. A menudo, la selección está determinada por los hábitos y preferencias existentes del administrador del sistema.

### Requerimientos de Hardware

Las características de un servidor dependen mucho de los requisitos de la red. Las redes de alto tráfico como el mainnet de EOS requieren un servidor dedicado con SSD o NVMe conectados directamente, al menos para los archivos de estado de los nodos. Algunos proveedores de hosting permiten una combinación de HDD y SSD en el mismo servidor físico, y bloquea el registro y el archivo de historial de estado que se pueden almacenar en discos duros. 

> Un servidor típico en producción tendría al menos 500 GB de almacenamiento SSD, 32 GB de RAM y una CPU de 3.5 Ghz o más rápido.

Las redes de bajo tráfico y las redes de prueba estarían funcionando bien en servidores virtuales VPS. Por lo general, 8 GB de RAM y un par de núcleos de CPU son suficientes. 


### Almacenamiento

El registro de bloques y el historial de estado pueden requerir un espacio de almacenamiento significativo.

En cuanto a rendimiento, nodeos requiere acceso a su estado de memoria compartida con el mínimo retraso posible. Por lo tanto, el directorio que contenga los datos del estado debe residir en almacenamiento SSD o NVMe. Otros directorios, como los bloques y el historial de estado, son bastante bajos en cuanto a los requisitos de rendimiento, y los discos duros funcionan bien para este trabajo. 

### Sistema de archivos

ZFS es un sistema de archivos desarrollado por Sun Microsystems y utilizado en su sistema operativo Solaris. El sistema de archivos ha sido portado al kernel de Linux y está disponible de forma inmediata en Ubuntu 18.04

Otros sistemas de archivos de elección serían ext4 y XFS. Son estables y funcionan bien, aunque ZFS ofrece una serie de características únicas para beneficiarse de:

- Respaldos rápidos y costo-eficientes. Se necesita una fracción de segundo para crear un nuevo respaldo de un sistema de archivos ZFS, y los respaldos son más ligeros en tamaño ya que solo se agregan los cambios a los datos del nodo. El contenido del respaldo se puede copiar más tarde en algún otro medio o ubicación remota sin interrumpir el servicio.

 - Compresión rápida lz4. Incluso en NVMe, la compresión no agrega ningún retraso visible al funcionamiento del disco, y permite ahorrar hasta un 30% en el archivo de registro de bloques y hasta un 50% en el archivo de estado. También reduce el tráfico de E / S de almacenamiento, lo que permite aumentar el rendimiento.

 - Creación fácil de tantos sistemas de archivos como sea necesario, y cada sistema de archivos tendría su propio punto de montaje, tamaño de registro, política de almacenamiento en caché y configuraciones de compresión. Esto permite ajustar el almacenamiento según las necesidades de aplicación.

LVM puede o no usarse, y depende del administrador del sistema definir la política estándar. Además, algunos proveedores de alojamiento, como IONOS, están pre-configurando los servidores con LVM, por lo que es más fácil usarlo que eliminarlo.


### Contenedores y Virtualización
Por lo general, un servidor ejecutaría múltiples procesos de nodo para diferentes propósitos y posiblemente hasta para diferentes redes. Cada administrador del sistema debe seleccionar una estrategia para colocar procesos de nodo en un servidor. A continuación incluimos un resumen de las principales estrategias utilizadas.

#### Sin contenedores
Los nodos se ejecutarán directamente en el espacio principal del host. El beneficio es un mantenimiento más fácil y, en algunos casos, un mejor rendimiento. El inconveniente es que el paquete binario EOSIO instala los archivos binarios en una ubicación común, y si se ejecutan varios procesos de nodo en el servidor, todos deben actualizarse simultáneamente.

#### Contenedores LXC
La mayoría de las distribuciones de Linux ofrecen la funcionalidad de contenedores LXC. Debian supone que usted sabe cómo configurar una red para los contenedores, mientras que Ubuntu preconfigura un puente interno con direcciones en el rango 10.0.3.0/24 y un servicio DHCP en él. El direccionamiento es fácil de cambiar, y también el servicio DHCP se puede configurar con asignaciones de direcciones estáticas para sus contenedores. Cuando se crea, un contenedor es un sistema operativo Linux mínimo y necesita instalar paquetes adicionales según sea necesario (incluso syslog y ping no están presentes desde el principio). Los contenedores son fáciles de mantener y uno de los beneficios es que puede seleccionar una distribución o versión de Linux diferente a la que ejecuta el host.

#### Virtualización KVM, Xen, VmWare
Hay una cierta sobrecarga en la operación de la CPU, y normalmente la virtualización completa no se usa en el entorno EOSIO. Sin embargo, podría ser utilizable, especialmente si ya forma parte de los procesos estándar de TI.

#### Contenedores Docker 
Utilizan la misma tecnología subyacente que LXC, pero hay una serie de características adicionales, como la implementación automática. Por esta razón se ha decidido implementar los servicios como contenedores docker.

### Redes
El diseño y la seguridad de la red deben planificarse cuidadosamente. Considerando 

En la mayoría de los entornos de proveedores de alojamiento, las máquinas físicas se enfrentan directamente a Internet público sin ningún firewall frente a ellas. Algunos proveedores ofrecen un firewall frente a un servidor, opcional u obligatorio.

Un proceso de nodeos generalmente se escucha en 2 o 3 puertos TCP: el punto final p2p, la API HTTP y, opcionalmente, el websocket del complemento de historial de estado.

Además, nodeos suele establecer conexiones TCP salientes a sus pares p2p como se especifica en su configuración.


#### Balanceadores de carga
Algunos proveedores de alojamiento ofrecen equilibradores de carga frente a los servidores. Un equilibrador de carga generalmente supervisa la conectividad a los servidores de fondo y deja de enviar solicitudes a un servidor que deja de responder, o se cumple alguna condición de supervisión personalizada. Normalmente también le permiten pausar el tráfico a uno de los servidores y dejarlo fuera de servicio para mantenimiento y actualizaciones. 


## TestNet EOSIO LAC-Chain 

Versión EOSIO : `v2.0.5` 

Chain ID: `2c1f36d2e3774cba3e47804b6463c207544ac24183194e0b96ffad31e8f4acd5`

Archivo Génesis : [`genesis.json`](https://raw.githubusercontent.com/LatamLink/eosio-testnet/master/genesis.json)

### Instalación desde binarios pre-compilados

Descargue la última versión de EOSIO para su sistema operativo desde:  https://github.com/EOSIO/eos/releases/tag/v2.0.4   

Por ejemplo, para ubuntu 18.04 necesitas descargar `eosio_2.0.5-1-ubuntu-18.04_amd64.deb`  

Puedes usar apt para instalarlo:  
```bash
wget https://github.com/eosio/eos/releases/download/v2.0.5/eosio_2.0.5-1-ubuntu-18.04_amd64.deb
sudo apt install ./eosio_2.0.5-1-ubuntu-18.04_amd64.deb   
```
Descargará todas las dependencias e instalará EOSIO a `/usr/opt/eosio/v2.0.5`  

### Desinstalar
Para desinstalar los binarios y dependencias instaladas de EOSIO, ejecute:

```bash 
./scripts/eosio_uninstall.sh
```

### Configuración de un nodo para el Testnet EOSIO

```bash
mkdir ~/LatamLink-testnet
cd ~/LatamLink-testnet
git clone https://github.com/LatamLink/testnet.git ./
```

- Edite `config.ini`   
  - Ingrese la dirección IP externa de su servidor: `p2p-server-address = YOUR_DOMAIN_OR_IP:9876` 

- Abrir puertos TCP  (8888, 9876) en su firewall / enrutador

**Especifique un archivo genesis.json la primera vez que ejecute nodeos**  
```bash
./start.sh --delete-all-blocks --genesis-json genesis.json
```  
Siga los logs para verificar que su nodo esté funcionando bien.

```bash
tail -f stderr.txt
```

Compruebe si puede acceder a su nodo mediante el enlace `http://**YOUR_SERVER**/v1/chain/get_info` 

Aquí hay un <a href="https://latamlink.eosio.cr/v1/chain/get_info" target="_blank">Ejemplo de API</a>  

#### Iniciar y detener nodeos

- `./start.sh` Inicia y reinicia el servicio Nodeos.

- `./stop.sh` Realiza el apagado correcto del servicio Nodeos.

## Ejemplos de Configuraciones

Esta no es una lista de configuraciones que pueden usarse "out of the box", mas bien una lista de opciones importantes para cada tipo de nodo.

### Validador

```bash title="config.ini"

producer-name = <validator_name>

signature-provider = EOS6MRyAjQq8ud7hVNYcfnVPJqcVpscN5So8BhtHuGYqET5GDW5CV=KEY:5KQwrPbwdL6PhXujxW37FSSQZ1JiwsST4cqQzDeyXtP79zkvFD3

peer-key =
peer-private-key =

eosio::producer_plugin

```

### Validador p2p layer 1
```bash title="config.ini"
peer-key =
peer-private-key =
p2p-listen-endpoint =
p2p-server-address =
p2p-peer-address =
p2p-max-nodes-per-host =
max-clients =
net-threads =

eosio::net_plugin
```

### Validador p2p out
```bash title="config.ini"
p2p-accept-transactions = false
api-accept-transactions = false

peer-key =
peer-private-key = 
p2p-listen-endpoint =
p2p-server-address =
p2p-peer-address =
p2p-max-nodes-per-host =
max-clients =
net-threads =

eosio::net_plugin
```
### Validador p2p bidir
```bash title="config.ini"
peer-key =
peer-private-key =
p2p-listen-endpoint =
p2p-server-address =
p2p-peer-address =
p2p-max-nodes-per-host =
max-clients =
net-threads =

eosio::net_plugin
```

### boot p2p out
```bash title="config.ini"
p2p-accept-transactions = false
api-accept-transactions = false

peer-key =
peer-private-key =
p2p-listen-endpoint =
p2p-server-address =
p2p-peer-address =
p2p-max-nodes-per-host =
max-clients =
net-threads =

eosio::net_plugin
```

### boot p2p bidir
```bash title="config.ini"
peer-key =
peer-private-key =
p2p-listen-endpoint =
p2p-server-address =
p2p-peer-address =
p2p-max-nodes-per-host =
max-clients =
net-threads =

eosio::net_plugin
```

### writer p2p
```bash title="config.ini"
peer-key =
peer-private-key =
p2p-listen-endpoint =
p2p-server-address =
p2p-peer-address =
p2p-max-nodes-per-host =
max-clients =
net-threads =

eosio::net_plugin
```
### writer api
Hacer referencia a la documentacion de [dfuse](https://www.dfuse.io/en)

### observer api
Hacer referencia a la documentacion de [dfuse](https://www.dfuse.io/en)

### observer p2p

```bash title="config.ini"
p2p-accept-transactions = false
api-accept-transactions = false

peer-key =
peer-private-key =
p2p-listen-endpoint =
p2p-server-address =
p2p-peer-address =
p2p-max-nodes-per-host =
max-clients =
net-threads =

eosio::net_plugin
```
