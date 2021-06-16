import React, { useRef } from "react"
import { useHistory } from 'react-router-dom'
import { useMediaQuery } from 'react-responsive'
import Box from '@material-ui/core/Box'
import Grid from '@material-ui/core/Grid'
import useBaseUrl from "@docusaurus/useBaseUrl"
import clsx from "clsx"
import Layout from "@theme/Layout"
import LinkedInIcon from '@material-ui/icons/LinkedIn'
import TelegramIcon from '@material-ui/icons/Telegram'
import TwitterIcon from '@material-ui/icons/Twitter'
import GitHubIcon from '@material-ui/icons/GitHub'
import Translate from '@docusaurus/Translate'

import bg from '../../static/img/bgHomePage.jpg'

const MetaData={
  title:"LACChain EOSIO Testnet",
  description:"LACChain EOSIO",
  img:"img/logos/lacchain-eosio-logo.png",
  hrefLangPath: ""
}

const Home = () => {
  const isMobile = useMediaQuery( {query:'(max-width: 960px)'} )
  const isDesktop = useMediaQuery( {query:'(min-width: 960px)'} )
  const history = useHistory()

  const refProjects = useRef(null)

  const handleScrollProjects = () => refProjects.current.scrollIntoView({behavior:'smooth', block:'start', inline:'nearest'})

  const HeroSection = () => {
    return (
      <Box className="generalContainer" 
        style={{ 
          backgroundRepeat: 'no-repeat',
          backgroundSize: '89%',
          backgroundPosition: '280px 120px',
          backgroundImage: `url(${bg})`,
          backgroundColor: '#F9F9F9'
        }}
      >
        <Box className="containerSec" style={{backgroundColor:'rgb(255, 255, 255, 0)'}}>
          {isDesktop && 
            <Box className="sectionHero">
            <Box className="titleBox">
              <h1 style={{textAlign:'center'}}>
                <Translate id="homepage.titule1">La red de blockchain EOSIO para </Translate>
                <br/>
                <Translate id="homepage.titule2"> Latinoamérica y el Caribe</Translate>
              </h1>
            </Box>
            <p style={{textAlign:'center', fontSize:'24px'}}>
              <Translate id="homepage.headerText1">
                LACChain EOSIO permite a organizaciones y desarrolladores crear
              </Translate>
              <br/>
              <Translate id="homepage.headerText2">
                aplicaciones en la red de LACChain impulsada por tecnología EOSIO.
              </Translate>
            </p>
            <Box className="buttonBox" style={{justifyContent:'space-around', display:'flex'}}>
              <button className="buttonSecondary" onClick={() => history.push("/contact-us")} >
                <Translate id="homepage.headerButton1">Únase a la red</Translate>
              </button>
              <button className="buttonPrimary" onClick={() => history.push("/docs/eosio")} >
                <Translate id="homepage.headerButton2">Aprenda más</Translate>
              </button>
            </Box>
          </Box>
          }
          {isMobile && 
            <Box className="sectionHeroMobile">
              <Box className="titleBox">
                <h1>
                  <Translate id="homepage.titule1">La red de blockchain EOSIO para </Translate>
                  {" "}
                  <Translate id="homepage.titule2"> Latinoamérica y el Caribe</Translate>
                </h1>
              </Box>
              <p>
                <Translate id="homepage.headerText">
                  LACChain EOSIO permite a organizaciones y desarrolladores crear
                  aplicaciones en la red de LACChain impulsada por tecnología EOSIO.
                </Translate>
              </p>
              <Box className="buttonBoxMobile" style={{display:'grid'}}>
                <button className="buttonPrimary" onClick={() => history.push("/")} >
                  <Translate id="homepage.headerButton1">Únase a la red</Translate>
                </button>
                <br/>
                <button className="buttonPrimary" onClick={() => history.push("/")} >
                  <Translate id="homepage.headerButton2">Aprenda más</Translate>
                </button>
              </Box>
            </Box>
          }
        </Box>
      </Box>
    )
  }

  const IconSection = () => {
    return (
      <Box className="generalContainer">
        <Box className="containerSec">
          <Box className="sectionPadding">
            <Grid container spacing={10}>
              <Grid item xs={12} md={4}>
                <Box className="centerBox" style={{marginBottom:'10px'}}>
                  <img 
                    src={useBaseUrl("img/icons/list.png")}
                    style={{width:'80px', height:'80px'}}
                    alt="Icono de lista"
                  />
                </Box>
                <p style={{textAlign:'center'}}>
                  <Translate id="homepage.iconBuildText">Ponga a prueba sus aplicaciones e infraestructura blockchain.</Translate>
                </p>
              </Grid>
              <Grid item xs={12} md={4}>
                <Box className="centerBox" style={{marginBottom:'10px'}}>
                  <img
                    src={useBaseUrl("img/icons/book-shelf.png")}
                    style={{width:'80px', height:'80px'}}
                    alt="Icono de libros"
                  />
                </Box>
                <p style={{textAlign:'center'}}>
                  <Translate id="homepage.iconBlockchainText">Aprenda sobre blockchain con nuestra guía de recursos.</Translate>
                </p>
              </Grid>
              <Grid item xs={12} md={4}>
                <Box className="centerBox" style={{marginBottom:'10px'}}>
                  <img
                    src={useBaseUrl("img/icons/blockchain-technology.png")}
                    style={{width:'80px', height:'80px'}}
                    alt="Icono de bloques"
                  />
                </Box>
                <p style={{textAlign:'center'}}>
                  <Translate id="homepage.iconNetworkText">Visualice datos en la red usando nuestro dashboard.</Translate>
                </p>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Box>
    )
  }

  const DiscoverPowerful = () => {
    return (
      <Box className="generalContainer">
        <Box className="containerSec">
          <Box className={clsx("section",{["sectionPadding"]: isMobile})}>
            <Grid container spacing={5}>
              <Grid item xs={12} md={6}>
                <Box className="titleBox">
                  <h2>
                    <Translate id="homepage.porwerFulTitle">
                      Descubra la poderosa combinación del rendimiento de EOSIO y el marco de LACChain
                    </Translate>
                  </h2>
                </Box>
                <p>
                  <Translate id="homepage.porwerFulText1">
                    LACChain EOSIO utiliza una versión público permisionada de
                  </Translate> {" "}
                  <a href="https://eos.io/" target="_blank"> EOSIO</a> {" "}
                  <Translate id="homepage.porwerFulText2">
                    , tecnología blockchain de código abierto que permite a 
                    desarrolladores y organizaciones poner a prueba y
                    crear aplicaciones descentralizadas e infraestructura.
                  </Translate>
                </p>
                <Box className={clsx('centerBox','buttonBox')}>
                  <button className='buttonPrimary' onClick={handleScrollProjects} >
                    <Translate id="homepage.seeProjects">Ver proyectos</Translate>
                  </button>
                </Box>
              </Grid>
              {isDesktop && 
                <Grid container md={6}>
                  <Grid item md={3} />
                  <Grid item md={3}>
                    <Box style={{marginTop:'70px'}}>
                      <img src={useBaseUrl('img/logos/lacchain-a.svg')} alt="LACChain logo" />
                    </Box>
                  </Grid>
                  <Grid item md={3}>
                      <h1 style={{textAlign:'center', marginTop:'110px', fontWeight:'300'}}> + </h1>
                  </Grid>
                  <Grid item md={3}>
                    <Box style={{marginTop:'75px'}}>
                      <img style={{width:'95px'}} src={useBaseUrl('img/logos/eosio-logo.svg')} alt="EOSIO logo" />
                    </Box>
                  </Grid>
                </Grid>
              }
            </Grid>
          </Box>
        </Box>
      </Box>
    )
  }
  
  const AnEcosystem = () => {
    return (
      <Box className="generalContainer">
        <Box className="containerSec">
          <Box className={clsx("section",{["sectionPadding"]: isMobile})}>
            <Grid container spacing={5}>
              {isDesktop && 
                  <Grid item md={6}>
                    <Box className='centerBox' style={{marginTop:'-10px'}} >
                      <img style={{width:'250px'}}
                        src={useBaseUrl('images/america.svg')}
                        alt="Mapa America"
                      />
                    </Box>  
                  </Grid>
                }
              <Grid item xs={12} md={6}>
                <Box className="titleBox">
                  <h2>
                    <Translate id="homepage.ecosystemTitle">Un ecosistema de aliados clave</Translate>
                  </h2>
                </Box>
                <p>
                  <Translate id="homepage.ecosystemText1">LACChain EOSIO cuenta con el apoyo de</Translate> {" "}
                  <a href="https://www.lacchain.net/" target="_blank">LACChain </a> {" "}
                  <Translate id="homepage.ecosystemText2">
                    , un programa del BID Lab (parte del Banco Interamericano de Desarrollo) y que
                    incorpora un comité permisionador para garantizar transparencia y descentralización.
                  </Translate>
                </p>
                <Box className="buttonBox" style={{display:'flex'}}>
                  <Grid item xs={12} style={{flexBasis:'0'}} md={3}>
                    <Box className={isMobile ? "centerBox": "boxFlexEnd"}>
                      <a className={clsx("noMarginsTop","socialMediaAnimation")} href="https://twitter.com/EOSCostaRica" target="_blank">
                        <TwitterIcon style={{width:'45px', height:'45px', cursor:'pointer', color:'#159547'}}/>
                      </a>
                      <a className={clsx("noMarginsTop","socialMediaAnimation")} href="https://www.instagram.com/eoscostarica/" target="_blank">
                        <TelegramIcon style={{width:'45px', height:'45px', cursor:'pointer', color:'#159547'}}/>
                      </a>
                    </Box>
                  </Grid>
                  <Grid item xs={12} style={{flexBasis:'0'}} md={3}>
                    <Box className="centerBox">
                      <a className={clsx("noMarginsTop","socialMediaAnimation")} href="https://www.linkedin.com/company/lacchaineosio/" target="_blank">
                        <LinkedInIcon style={{width:'45px', height:'45px', cursor:'pointer', color:'#159547'}}/>
                      </a>
                      <a className={clsx("noMarginsTop","socialMediaAnimation")} href="https://github.com/lacchain/eosio.lacchain.net" target="_blank">
                        <GitHubIcon style={{width:'40px', height:'40px', cursor:'pointer', color:'#159547'}}/>
                      </a>
                    </Box>
                  </Grid>
                </Box>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Box>
    )
  }

  const FoundingPartners  = () => {
    return (
      <Box className="generalContainer">
        <Box className="containerSec">
          <Box className="section">
            <Box className="h3Box">
              <h2>
                <Translate id="homepage.foundingTitle">
                  Socios fundadores
                </Translate>
              </h2>
            </Box>
            <Box>
              <Grid container justify='center' alignItems="center">
                <Grid style={{marginRight: isDesktop ? '25px' : '0', paddingTop:'10px'}} item xs={12} md={2}>
                  <Box className="imgBoxLogos">
                    <a target="_blank" href="http://latamlink.io/">
                      <img
                        style={{width:'200px'}}
                        className="oneGroupLogo"
                        alt="BID Lab logo"
                        src={useBaseUrl('img/logos/bid-lab-logo.svg')}
                      />
                    </a>
                  </Box>
                </Grid>
                <Grid style={{marginRight: isDesktop ? '15px' : '0'}} item xs={12} md={2}>
                  <Box className="imgBoxLogos">
                    <a target="_blank" href="https://www.edenia.com/">
                      <img
                        className="oneGroupLogo"
                        style={{width:'150px'}}
                        alt="EOS Costa Rica"
                        src={useBaseUrl('img/logos/eoscr.svg')}
                      />
                    </a>
                  </Box>
                </Grid>
                <Grid style={{marginRight: isDesktop ? '15px' : '0'}} item xs={12} md={2}>
                  <Box className="imgBoxLogos">
                    <a target="_blank" href="https://eosurf.com/">
                      <img
                        style={{width: isDesktop ? '170px': '200px'}}
                        className="oneGroupLogo"
                        alt="EOS Argentina"
                        src={useBaseUrl('img/logos/eosarg.svg')}
                      />
                    </a>
                  </Box>
                </Grid>
                <Grid style={{marginLeft: isDesktop ? '15px' : '0', marginRight: isDesktop ? '15px' : '0'}} item xs={12} md={2}>
                  <Box className="imgBoxLogos">
                      <a target="_blank" href="https://ticoblockchain.cr/">
                        <img
                          style={{width:'170px'}}
                          className="oneGroupLogo"
                          alt="Block One"
                          src={useBaseUrl('img/logos/block-one.png')}
                        />
                      </a>
                  </Box>
                </Grid>
                <Grid style={{marginLeft: isDesktop ? '20px' : '0', marginRight: isDesktop ? '15px' : '0'}} item xs={12} md={2}>
                  <Box className="imgBoxLogos">
                    <a target="_blank" href="https://ticoblockchain.cr/">
                      <img
                        style={{width: '210px'}}
                        className="oneGroupLogo"
                        alt="EOS Venezuela"
                        src={useBaseUrl('img/logos/eosven.svg')}
                      />
                    </a>
                  </Box>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Box>
      </Box>
    )
  }

  const WhatLACChainEOSIO = () => {
    return (
      <Box className="generalContainer">
        <Box className="containerSec">
          <Box className="sectionPaddingTop">
            <Box className="h3Box">
              <h2>
                <Translate id="homepage.whatLACChain">
                  ¿Qué hay en LACChain EOSIO?
                </Translate>
              </h2>
            </Box>
            <Box className="spacingBox">
              <Grid container spacing={10}>
                <Grid item xs={12} md={4}>
                  <Box className="h3Box">
                    <h3>
                      <Translate id="homepage.layaredNetworkTitle">
                        Red con múltiples capas
                      </Translate>
                    </h3>
                  </Box>
                  <p>
                    <Translate id="homepage.layaredNetworkText">
                      LACChain EOSIO es una red formada por tres capas. La red
                      central incluye nodos validadores e interconectores p2p, mientras 
                      que los nodos validadores p2p out, boot, escritores y 
                      observadores se encuentran en las capas externas.
                    </Translate>{" "}
                    <a href={useBaseUrl("/docs/topologia-red")} target="_blank">
                      <Translate id="homepage.layaredNetworkLink">
                        Aprenda más sobre la topología de la red aquí
                      </Translate>
                    </a>.
                  </p>
                </Grid>
                <Grid item xs={12} md={4}>
                  <Box className="h3Box">
                    <h3>
                      <Translate id="homepage.configAccountTitle">
                        Cuentas configurables
                      </Translate>
                    </h3>
                  </Box>
                  <p>
                    <Translate id="homepage.configAccountText">
                      LACChain EOSIO le permite crear fácilmente una cuenta
                      como usuario final, socio, no socio o desarrollador de app o
                      contracto. Como usuario de LACChain EOSIO, podrá
                      administrar su cuenta y llaves privadas.
                    </Translate>{" "}
                    <a href={useBaseUrl("/docs/guias/llaves-privadas")} target="_blank">
                      <Translate id="homepage.configAccountLink">
                        Lea más sobre cuentas en LACChain EOSIO
                      </Translate>
                    </a>.
                  </p>
                </Grid>
                <Grid item xs={12} md={4}>
                  <Box className="h3Box">
                    <h3>
                      <Translate id="homepage.resourceModelTitle">
                        Modelo de distribución de recursos
                      </Translate>
                    </h3>
                  </Box>
                  <p>
                    <Translate id="homepage.resourceModelText">
                      LACChain EOSIO brinda acceso a usuarios a la distribución de}
                      recursos para co-firmar transacciones y a un ambiente
                      de prueba flexible. Además, el apoyo del equipo de LACChain
                      es crucial para mantener la red activa.
                    </Translate>{" "}
                    <a href={useBaseUrl("/docs/guias/obtener-recursos")} target="_blank">
                      <Translate id="homepage.resourceModelLink">
                        Lea más sobre recursos de red
                      </Translate>
                    </a>.
                  </p>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Box>
      </Box>
    )
  }

  const AreYouReady = () => {
    return (
      <Box className="generalContainer" 
        style={{ 
          backgroundRepeat: 'no-repeat',
          backgroundSize: '89%',
          backgroundPosition: '280px 0',
          backgroundImage: `url(${bg})`,
          backgroundColor: '#F9F9F9'
        }}
      >
        <Box className="containerSec" style={{backgroundColor:'rgb(255, 255, 255, 0)'}}>
          <Box className="sectionPadding">
            <Grid  justify="center" alignItems="center" container spacing={5}>
              <Grid item xs={12} md={8}>
                <Box className="boxFlexEnd">
                  <h2 className="bannerStyle">
                    <Translate id="homepage.readyText">
                      ¿Todo listo para empezar a usar LACChain EOSIO?
                    </Translate>
                  </h2>
                </Box>
              </Grid>
              <Grid item xs={12} md={3}>
                  <Box className="centerBox">
                    <button 
                      className="buttonPrimary" 
                      onClick={() => history.push("/contac-us")}
                    >
                      <Translate id="homepage.startNow">
                        Comience ahora
                      </Translate>
                    </button>
                  </Box>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Box>
    )
  }

  const Tools = () => {
    return (
      <Box className="generalContainer">
        <Box className="containerSec">
          <Box className="sectionPaddingTop">
            <Box >
              <Box className="titleBox">
                <h2>
                  <Translate id="homepage.toolsFeaturesTitle">
                    Herramientas de LACChain EOSIO
                  </Translate>
                </h2>
              </Box>
              <Grid justify="center" container spacing={isDesktop ? 2 : 0}>
                <Grid item xs={12} md={1}>
                  <Box className={isDesktop ? "boxFlexEnd" : "centerBox"}>
                    <img
                      src={useBaseUrl("img/icons/bar-chart.png")}
                      className="socialMediaIcons"
                      alt="Icono de barras"
                    />
                  </Box>
                </Grid>
                <Grid item xs={12} md={4}>
                  <Box className="specialH3Box">
                    <h3>
                      <Translate id="homepage.networkMonitorTitle">
                        Monitor de red
                      </Translate>
                    </h3>
                  </Box>
                  <p className="h3Box">
                    <Translate id="homepage.networkMonitorText">
                      Usted puede acceder al monitor de red de LACChain EOSIO para
                      visualizar métricas y datos de red “on-chain” y “off-chain.”
                    </Translate>{" "}
                    <a href="https://monitor.latamlink.io" target="_blank">
                      <Translate id="homepage.networkMonitorLink">
                        Visite el Monitor de Red
                      </Translate>
                    </a>.
                  </p>
                </Grid>
                <Grid item md={1}/>
                <Grid item xs={12} md={1}>
                  <Box className={isDesktop ? "boxFlexEnd" : "centerBox"}>
                    <img
                      src={useBaseUrl("img/icons/computers-connecting.png")}
                      className="socialMediaIcons"
                      alt="Icono de conexion"
                    />
                  </Box>
                </Grid>
                <Grid item xs={12} md={4}>
                  <Box className="specialH3Box">
                    <h3>
                      <Translate id="homepage.apiIntegrationsTitle">
                        Integraciones API
                      </Translate>
                    </h3>
                  </Box>
                  <p className="h3Box">
                    <Translate id="homepage.apiIntegrationsText1">
                      Usamos
                    </Translate>{' '}
                    <a href="https://dfuse.io/en/home/" target="_blank"> dfuse </a>{' '}
                    <Translate id="homepage.apiIntegrationsText2">
                      un API de blockchain robusto que permite un flujo en
                      tiempo real de actualizaciones,búsquedas rápidas y
                      garantía de transacciones irreversibles.
                    </Translate>
                  </p>
                </Grid>
                <Grid item md={1}/>
                <Grid item xs={12} md={1}>
                  <Box className={isDesktop ? "boxFlexEnd" : "centerBox"}>
                    <img
                      src={useBaseUrl("img/icons/search.png")}
                      className="socialMediaIcons"
                      alt="Icono de busqueda"
                    />
                  </Box>
                </Grid>
                <Grid item xs={12} md={4}>
                  <Box className="specialH3Box">
                    <h3>
                      <Translate id="homepage.blockExplorerTitle">
                        Explorador de bloques
                      </Translate>
                    </h3>
                  </Box>
                  <p className="h3Box">
                    <Translate id="homepage.blockExplorerText1">
                      Instalamos
                    </Translate>{' '}
                    <a href="https://eos.eosq.eosnation.io/" target="_blank"> eosq</a>{' '}
                    <Translate id="homepage.blockExplorerText2">
                      , un explorador de bloques que brinda acceso a datos
                      precisos, detallados y procesables sobre cuentas,
                      acciones, nodos validadores y más.
                    </Translate>{' '}
                    <a href="http://explorer.testnet.latamlink.io/" target="_blank">
                      <Translate id="homepage.blockExplorerLink">
                        Pruebe el explorador de bloques
                      </Translate>
                    </a>.
                  </p>
                </Grid>
                <Grid item md={1}/>
                <Grid item xs={12} md={1}>
                  <Box className={isDesktop ? "boxFlexEnd" : "centerBox"}>
                    <img
                      src={useBaseUrl("img/icons/connect.png")}
                      className="socialMediaIcons"
                      alt="Icono de conectar"
                    />
                  </Box>
                </Grid>
                <Grid item xs={12} md={4}>
                  <Box className="specialH3Box">
                    <h3>
                      <Translate id="homepage.nodesGenerationTitle">
                        Rápida generación de nodos
                      </Translate>
                    </h3>
                  </Box>
                  <p className="h3Box">
                    <Translate id="homepage.nodesGenerationText">
                      LACChain EOSIO ofrece una interfaz de línea
                      de comando que interactúa entre nodos y
                      snapshots para generar nodos sin necesidad
                      de sincronización desde el génesis.
                    </Translate>{" "}
                    <a href={useBaseUrl("/docs/guias/instalacion-nodos")} target="_blank">
                      <Translate id="homepage.nodesGenerationLink">
                        Lea más sobre instalación de nodos
                      </Translate>
                    </a>.
                  </p>
                </Grid>
                <Grid item md={1}/>
                <Grid item xs={12} md={1}>
                  <Box className={isDesktop ? "boxFlexEnd" : "centerBox"}>
                    <img
                      src={useBaseUrl("img/icons/puzzle.png")}
                      className="socialMediaIcons"
                      alt="Icono de puzzle"
                    />
                  </Box>
                </Grid>
                <Grid item xs={12} md={4}>
                  <Box className="specialH3Box">
                    <h3>
                      <Translate id="homepage.dappsResourcesTitle">
                        Recursos para dapps
                      </Translate>
                    </h3>
                  </Box>
                  <p className="h3Box">
                    <Translate id="homepage.dappsResourcesText">
                      LACChain EOSIO ofrece un faucet para obtener recursos y 
                      poder probar dapps (apps descentralizadas) en nuestro
                      testnet, así como un boilerplate para que desarrolladores puedan
                      crear dapps en un ambiente local.
                    </Translate>{" "}
                    <a href={useBaseUrl("/docs/guias/obtener-recursos")} target="_blank">
                      <Translate id="homepage.dappsResourcesLink">
                        Encuentre aquí cómo obtener recursos de red
                      </Translate>
                    </a>.
                  </p>
                </Grid>
                <Grid item md={1}/>
                <Grid item xs={12} md={1}>
                  <Box className={isDesktop ? "boxFlexEnd" : "centerBox"}>
                    <img
                      src={useBaseUrl("img/icons/learning.png")}
                      className="socialMediaIcons"
                      alt="Icono de aprender"
                    />
                  </Box>
                </Grid>
                <Grid item xs={12} md={4}>
                  <Box className="specialH3Box">
                    <h3>
                      <Translate id="homepage.learningResourcesTitle">
                        Recursos de aprendizaje
                      </Translate>
                    </h3>
                  </Box>
                  <p className="h3Box">
                    <Translate id="homepage.learningResourcesText">
                      Ofrecemos una librería creciente de recursos para aprender sobre
                      tecnología blockchain, guías para comenzar a usar LACChain
                      EOSIO y tutoriales para integrar wallets.
                    </Translate>{" "}
                    <a href={useBaseUrl("/docs/eosio")} target="_blank">
                      <Translate id="homepage.learningResourcesLink">
                        Lea la documentación
                      </Translate>
                    </a>.
                  </p>
                </Grid>
                <Grid item md={1}/>
              </Grid>
            </Box>
          </Box>
        </Box>
      </Box>
    )
  }

  const Projects  = () => {
    return (
      <Box ref={refProjects} className="generalContainer">
        <Box className="containerSec">
          <Box className="sectionPadding">
            <Box className="titleBox">
              <h2>
                <Translate id="homepage.projectsTitle">
                  Proyectos en LACChain EOSIO
                </Translate>
              </h2>
            </Box>
            <Box className="spacingBox">
              <Grid container spacing={10}>
                <Grid item xs={12} md={4}>
                  <Box className="imgBoxLogos">
                    <a target="_blank" href="http://lifebank.io/">
                      <img
                        className="oneGroupLogo"
                        alt="Lifebank"
                        src={useBaseUrl("img/logos/lifebank-logo.svg")}
                      />
                    </a>
                  </Box>
                </Grid>
                <Grid item xs={12} md={4}>
                  <Box className="imgBoxLogos">
                    <a target="_blank" href="https://inmutrust.com/">
                      <img
                        className="oneGroupLogo"
                        alt="InmuTrust"
                        src={useBaseUrl("img/logos/inmuTrust-logo.svg")}
                      />
                    </a>
                  </Box>
                </Grid>
                <Grid item xs={12} md={4}>
                  <Box className="imgBoxLogos">
                    <a target="_blank" href="https://smartgate.tech/">
                      <img
                        className="oneGroupLogo"
                        alt="Smartgate"
                        src={useBaseUrl("img/logos/smartgate-logo.svg")}
                      />
                    </a>
                  </Box>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Box>
      </Box>
    )
  }

  const CreateAccount = () => {
    return (
      <Box className="generalContainer" 
        style={{ 
          backgroundRepeat: 'no-repeat',
          backgroundSize: '89%',
          backgroundPosition: '280px 0',
          backgroundImage: `url(${bg})`,
          backgroundColor: '#F9F9F9'
        }}
      >
        <Box className="containerSec" style={{backgroundColor:'rgb(255, 255, 255, 0)'}}>
          <Box className="sectionPadding">
            <Grid justify="center" alignItems="center" container spacing={5}>
              <Grid item xs={12} md={9}>
                <Box className="boxFlexEnd">
                  <h2 className="bannerStyle">
                    <Translate id="homepage.createAccountBanner">
                      Cree su cuenta y empiece a usar LACChain EOSIO. 
                    </Translate>
                  </h2>
                </Box>
              </Grid>
              <Grid item xs={12} md={3}>
                  <Box className="centerBox">
                    <button 
                      className="buttonPrimary" 
                      onClick={() => history.push("/contact-us")}
                    >
                      <Translate id="homepage.startNow">
                        Comience ahora
                      </Translate>
                    </button>
                  </Box>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Box>
    )
  }

  return (
    <Layout
      title={MetaData.title}
      description={MetaData.description}
      image={MetaData.img}
      hrefLangPath={MetaData.hrefLangPath}
    > 
      {isDesktop && 
        <Box className="mainContainer">
          <HeroSection/>
          <IconSection/>
          <DiscoverPowerful/>
          <AnEcosystem/>
          <FoundingPartners/>
          <CreateAccount/>
          <WhatLACChainEOSIO/>
          <AreYouReady/>
          <Tools/>
          <Projects/>
        </Box>
      }
      {isMobile && 
        <Box className="mainContainer">
          <Box className="paddingBox">
            <HeroSection/>
            <IconSection/>
            <DiscoverPowerful/>
            <AnEcosystem/>
            <FoundingPartners/>
            <CreateAccount/>
            <WhatLACChainEOSIO/>
            <AreYouReady/>
            <Tools/>
            <Projects/>
          </Box>
        </Box>
      }
    </Layout>
  )
}

export default Home
