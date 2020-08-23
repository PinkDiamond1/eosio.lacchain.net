---
id: datos-entidades-nodos
title: Información sobre Entidades y Nodos
sidebar_label: Datos de Entidades y Nodos
---
## Divulgación voluntaria de datos

Los contratos de sistema de permiten a las entidades que sean operadores de nodos anunciar públicamente las cuentas de sus nodos y compartir información sobre ellos mismos.

Piense en un WHOIS para cuentas de LAC-Chain que se verifiquen mediante una firma de blockchain. Todos estos campos requieren un inicio de sesión único que se autentica a través de blockchain. Solo la entidad con las claves correctas pueden editar estos campos , ya sea mediante linea de comando p utilizando la interfaz de usuario.


## Herramienta Para Actualizar Datos

Con el propósito de facilitar la actualización de datos de las entidades hemos desarrollado una herramienta para entidades permisionadas.  Para acceder a la interfaz de usuario para actualizar datos seleccione la opción "Update Node Info" en el [Monitor de red](https://dashboard.latamlink.io).

## Información de Entidades

`eosio::action`
`setentinfo(entity, info)`

Ejecutar esta acción requiere de la autorización de la cuenta permisionada o del comité permisionador.

| Parámetro | Tipo | Notas |
|---|---|---|
| `entity` | *name* | Cuenta de la entidad permisionada |
| `info` | *string* | JSON según estructura de entidades |


### Estructura JSON Entidades  

```json
{
	"account_name": "eoscostarica",
	"org": {
		"organization_name": "EOS Costa Rica",
		"organization_id": "3-101-090127",
		"technical_contact": "Xavier Fernandez",
		"business_contact": "Edgar Fernandez",
		"email": "bp@eosio.cr",
		"website": "https://eoscostarica.io",
		"code_of_conduct": "https://eoscostarica.io/en/transparency/#code_of_conduct",
		"ownership_disclosure": "https://eoscostarica.io/en/transparency/#ownership_disclosure",
		"branding": {
			"logo_256": "https://eoscostarica.io/assets/eos-CostaRica-256x256.png",
			"logo_1024": "https://eoscostarica.io/assets/eos-CostaRica-1024x1024.png",
			"logo_svg": "https://eoscostarica.io/assets/eos-CostaRica-vectors.svg"
		},
		"location": {
			"name": "San Jose",
			"country": "CR",
			"latitude": 9.936377,
			"longitude": -84.078155
		},
		"social": {
			"steemit": "eos-costarica",
			"twitter": "EOSCostaRica",
			"youtube": "channel/UCvYinCH3O1iKpi-_dNfQAGQ",
			"facebook": "costaricaeos",
			"github": "eoscostarica",
			"reddit": "eoscostarica",
			"keybase": "eoscostarica",
			"telegram": "eoscr",
			"wechat": ""
		}
	}
}
```

## Información de Nodos

`eosio::action`
`setnodeinfo(node, info)`

Ejecutar esta acción requiere de la autorización de la cuenta permisionada o del comité permisionador.

| Parámetro | Tipo | Notas |
|---|---|---|
| `node` | *name* | Nombre del nodo asociada a la entidad |
| `info` | *string* | JSON según tipo de Nodo |


### Nodo Escritor
```json
{
	"writer_keys":{
		"peer_key": "EOS...",
		"account_key": "EOS..."
	},
	"writer_endpoints":{
		"writer_api": "http://lacchain.eosio.cr",
		"writer_ssl": "https://lacchain.eosio.cr",
		"writer_p2p": "lacchain.eosio.cr:9876"
	},
	"writer_location": {
		"name": "San Jose",
		"country": "CR",
		"latitude": 9.936377,
		"longitude": -84.078155
	}
}
```

### Nodo Validador

```json
{
	"validator_keys":{
		"peer_key": "EOS...",
		"block_signing_key": "EOS..."
	},
	"validator_endpoints":{
		"validator_p2p_out": "lacchain.eosio.cr:9876",
		"validator_p2p_bidir": "lacchain.eosio.cr:9876"
	},
	"validator_location": {
		"name": "San Jose",
		"country": "CR",
		"latitude": 9.936377,
		"longitude": -84.078155
	}
}
```

### Nodo Boot
```json
{
	"boot_keys":{
		"peer_key": "EOS..."
	},
	"boot_endpoints":{
		"boot_p2p_out": "",
		"boot_p2p_bidir": "lacchain.eosio.cr:9876",
	},
	"boot_location": {
		"name": "San Jose",
		"country": "CR",
		"latitude": 9.936377,
		"longitude": -84.078155
	}
}
```

### Nodo Observador
```json
{
	"observer_keys":{
		"peer_key": "EOS..."
	},
	"observer_endpoints":{
		"observer_api": "http://lacchain.eosio.cr",
		"observer_ssl": "https://lacchain.eosio.cr",
		"observer_p2p": "lacchain.eosio.cr:9876"
	},
	"observer_location": {
		"name": "San Jose",
		"country": "CR",
		"latitude": 9.936377,
		"longitude": -84.078155
	}
}
```


## Fases de Implementación 

### Fase I
#### Lista autogenerada de todos los nodos validadores extraídos de la cadena de bloques.
 - Nombre de la cuenta del nodo
 - Tipo de entidad de nodo
 - Clave pública de nodo
 - Código de ubicación (ISO 3166-1 numérico)

#### Información voluntaria proporcionada por cada entidad
 - Nombre legal
 - Número de identificación
 - Nombre de contacto técnico
 - Nombre de contacto negocios
 - Dirección
 - Sitio web
 - Correo Electrónico
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
 - Bloques perdidos en X período de tiempo *- Involuntario*
 - Rondas perdidas en X período de tiempo *- Involuntario*
 - Número total de bloques producidos *- Involuntario*
 - Posición media en la lista de BP *- Involuntario*
 - Calificación de rendimiento promedio *- Involuntario*
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
 - Plan de comunicación con otros nodos Validadores

#### Estructura de propiedad
 - Descripción de la estructura comercial
 - Número de empleados
 - Titulares de intereses individuales
 - Accionistas de entidades comerciales
 - Entidades afiliadas