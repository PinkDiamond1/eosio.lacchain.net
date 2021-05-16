---
id: identidad-digital
title: Autenticado y Firmas Digitales
sidebar_label: Identidad y Firma Digital
---

Las billeteras son clientes que almacenan llaves privadas asociadas con los permisos de una o más cuentas. Idealmente, una billetera tiene un estado bloqueado (encriptado) y desbloqueado (sin encriptar) que está protegido por una contraseña de alta entropía.

### Capa de acceso Transit Wallet Access Layer
Esta biblioteca es una pequeña capa de abstracción sobre `eosjs` que tiene como objetivo ayudar a los desarrolladores de EOS dApp (aplicación descentralizada) con la comunicación de billetera (verificación y aceptación de firma) al proporcionar una API simple e intuitiva.

En lugar de centrarse en admitir proveedores de firmas específicos uno por uno, los desarrolladores pueden admitir a todos los que han creado un complemento de Transit, lo que permite al usuario utilizar su proveedor de firmas de elección. De esta manera, gana el mejor UX para proveedores de firmas y los desarrolladores pueden centrarse en construir su dApp en lugar de configurar conexiones 'eosjs' y de billetera.

Consulte la "Guía de inicio rápido" y la guía completa en los documentos del paquete [`eos-transit`](https://github.com/eosnewyork/eos-transit)

### Biblioteca de Autenticación universal
Existe una biblioteca que permite a las aplicaciones usar fácilmente diferentes proveedores de autenticación. Los desarrolladores de aplicaciones deben admitir muchos proveedores de autenticación (billeteras) para maximizar el alcance del usuario y permitir la elección del usuario.

La librería [Universal Authenticator Library (UAL)](https://github.com/EOSIO/universal-authenticator-library) logra este objetivo al abstraer la lógica comercial interna de muchos proveedores de autenticación y exponer una única API universal.

#### Autenticadores disponibles:
 - [UAL for Scatter](https://github.com/EOSIO/ual-scatter)
 - [UAL for Lynx](https://github.com/EOSIO/ual-lynx)
 - [UAL for Ledger](https://github.com/EOSIO/ual-ledger)
 - [UAL for Token Pocket](https://github.com/EOSIO/ual-token-pocket)
 - [UAL for MEET.ONE](https://github.com/meet-one/ual-meetone)
 - [UAL for Anchor](https://github.com/greymass/ual-anchor)

### KEOSD
En la distribución de EOSIO viene incluido un cliente CLI llamado [`cleos`](https://developers.eos.io/manuals/eos/latest/cleos/index) que interactúa con un cliente llamado [`keosd`](https://developers.eos.io/manuals/eos/latest/keosd/index) que proporciona un servicio de billetera seguro y un punto final API para aplicaciones que requieren integración de back-end con un proveedor de firmas digitales.

## Identidad Digital

La criptografía de clave pública ha estado en uso durante varias décadas y ha evolucionado a un conjunto de estándares para firmas digitales. Muchos gobiernos han adoptado estándares de firma digital para que individuos o empresas puedan obtener certificados de identidad y usarlos para firmar documentos legales.

 > LACChain EOSIO aspira a integrar una identidad auto soberana para los usuarios finales que sea compatible con las identidades digitales nacionales y las firmas digitales comúnmente utilizadas por los usuarios de grandes empresas.

La integración de la identidad digital a las redes blockchain abre nuevas oportunidades, por ejemplo:

- La integración de la identidad digital con blockchain reducirá la necesidad de KYC.

- Integración perfecta con las soluciones informáticas existentes.

- Eliminar la compleja mecánica de la clave privada de la experiencia del usuario.


## LAC Chain ID Mailbox

LACChain Mailbox permite una mensajería similar a un correo electrónico para credenciales verificables (VC) emitidas por terceros. Al utilizar un servidor seguro y controlado para almacenar VC cifrado, LACChain Mailbox ofrece una experiencia de mensajería simple y segura para enviar y recibir credenciales verificables con total privacidad.

LACChain Mailbox también proporciona una solución API para usar la funcionalidad de resolución DID, enviando y recibiendo VC cifrado desde cualquier aplicación.

[Lea más sobre LACChain ID Mailbox](https://github.com/lacchain/id-mailbox)

## certificados de cliente X.509

Los certificados emitidos por una Autoridad de Certificación (CA) responsable de validar la identidad del usuario se usan comúnmente para la Identidad Digital. Estos certificados se pueden usar para generar claves privadas de blockchain. Lea este artículo sobre [Uso de certificados PKI X.509 como identidad de cadena de bloques EOSIO](https://github.com/cc32d9/cc32d9_ideas_for_EOSIO/blob/master/X509_Certificates_as_EOSIO_id.md)


## Marco tecnolegal

### Marco de confianza
- Trusted lists (TLs)
- Identity providers (IDs) and Certificate Authorities (CA)
- Levels of Assurance (LOAs)

### Políticas Regulatorias
- Electronic Signature, DLTs, DIDs, VCs

### Tecnologías
- Decentralized Idetifiers (DIDs)
- Verifiable Credentials (VC)
- Verifiable Presentations (VPs)
- Key Storage Recovery
- Credentials Storage and Recovery
- Authentication 
- Sign On 

:::note Trabajo en progreso
Aun estamos trabajando en este aspecto de la documentación, si desea mejorar el contenido puede aprender [como contribuir](guias/contribuir). Consulte el [Roadmap del proyecto](./roadmap).
:::