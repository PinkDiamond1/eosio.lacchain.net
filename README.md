<p align="center">
	<a href="https://eosio.lacchain.net">
		<img src="https://raw.githubusercontent.com/lacchain/eosio.lacchain.net/master/static/img/logos/lacchain-eosio-logo.png"
		width="400px" >
	</a>
</p>

<p align="center">
	<a href="https://git.io/col">
		<img src="https://img.shields.io/badge/%E2%9C%93-collaborative_etiquette-brightgreen.svg" alt="Collaborative Etiquette">
	</a>
	<a href="#">
		<img src="https://img.shields.io/dub/l/vibe-d.svg" alt="MIT">
	</a>
</p>

## Descripción 
Documentación técnica para el testnet LACChain EOSIO [eosio.lacchain.net](https://eosio.lacchain.net)

Este sitio web es creado usando [https://docusaurus.io/](Docusaurus), una herramienta para mantener documentación técnica de proyectos de código libre. 

## Contribuciones 

Utilizamos un tablero de estilo Kanban para priorizar el trabajo. [Ir al tablero del proyecto](https://github.com/lacchain/eosio.lacchain.net/projects/1).

Los principales canales de comunicación son [github issues](https://github.com/lacchain/eosio.lacchain.net/issues) y el [canal de Telegram](https://t.me/lacchaineosio). Siéntase libre mandar todas las preguntas que pueda tener.

[Pautas para contribuyentes](https://eosio.lacchain.net/docs/guias/contribuir).

Informe cualquier idea o error [abriendo un "issue"](https://github.com/lacchain/eosio.lacchain.net/issues).

### Editar Contenido
La documentación se genera a partir de archivos en formato markdown ubicados dentro de la sub-carpeta `/docs`. Ver mas información [aquí](https://github.com/lacchain/eosio.lacchain.net/tree/master).

## Guía rápida

### Estructura de archivos

```sh
eosio.lacchain.net
├── .github
│ ├── workflows
│ | ├── nodejs.yml
│ └─└── services
├── docs
├── src
│ ├── css
│ | ├── custom.css
│ | └── homepage.css
│ └── pages
│ 	├── styles.module.css
│   └── index.js
├── static
│ ├── img
│ ├── imgages
│ ├── scripts
│ ├── js
│ ├── other
│ ├── favicon.ico
│ └── CNAME
├── .gitignore
├── babel.config.js
├── docusaurus.config.js
├── sidebars.js
├── package.json
├── yarn.lock
└── README.md
```

### Resumen de la estructura del proyecto

- `/docs/` - Contiene los archivos de Markdown para los documentos. Personaliza el orden de la barra lateral de documentos en  `sidebars.js`. Se pueden encontrar más detalles en la [guía de documentos](https://v2.docusaurus.io/docs/markdown-features).
- `/src/` - Archivos que no son de documentación como páginas o componentes personalizados de React. No tiene que colocar estrictamente sus archivos que no son de documentación aquí, pero colocarlos en un directorio centralizado facilita la especificación en caso de que necesite hacer algún tipo de procesamiento.
- `/src/pages` - Cualquier archivo dentro de este directorio se convertirá en una página de sitio web. Se pueden encontrar más detalles en la [guía de páginas](https://v2.docusaurus.io/docs/creating-pages).
- `/static/` - Directorio estático. Cualquier contenido dentro de aquí se copiará en la raíz del directorio de compilación final `build`.
- `/docusaurus.config.js` - El archivo de configuración para el sitio. Este es el equivalente de siteConfig.js en Docusaurus 1.
- `/package.json` - Un sitio web de Docusaurus es una aplicación de React. Puede instalar y usar cualquier paquete npm que desee en ellos.
- `/sidebar.js` - Utilizado por la documentación para especificar el orden de los documentos en la navegación lateral.

### Antes de empezar
Es necesario contar con: 
* git
* node.js

### Instrucciones para ejecutar el proyecto de forma local en Windows 10

1. Clone el repositorio

```bash
$ git clone https://github.com/lacchain/eosio.lacchain.net.git
```

2. Ubíquese al directorio apropiado

```bash
$ cd eosio.lacchain.net
```

3. Instale las dependencias:
```bash
$ yarn install 
```

4. Compile el proyecto:
```bash		
$ yarn build 
```

5. Ejecute el servidor local:
```bash		
$ yarn serve 
```

### Publicar
[eosio.lacchain.net](https://eosio.lacchain.net) esta alojado en GitHub y se publica mediante el siguientes comandos:

```bash		
$ yarn build 
```

```bash		
$ GIT_USER=eosio.lacchain.net CURRENT_BRANCH=master USE_SSH=true npm run publish-gh-pages
```

## Licencia

MIT © [LACChain EOSIO Testnet](https://eosio.lacchain.net)  
