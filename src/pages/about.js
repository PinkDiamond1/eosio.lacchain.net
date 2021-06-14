import React, { useState, useEffect } from "react"
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
import Translate, {translate} from '@docusaurus/Translate'
import Accordion from '@material-ui/core/Accordion'
import AccordionDetails from '@material-ui/core/AccordionDetails'
import AccordionSummary from '@material-ui/core/AccordionSummary'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'

const MetaData={
  title:"LACChain EOSIO Testnet",
  description:"LACChain EOSIO",
  img:"img/logos/lacchain-eosio-logo.png",
  hrefLangPath: ""
}

const team = [
  {
    photo:"img/team/marcos.jpg",
    name:"Marcos Allende",
    org:"LACChain",
    position:
      translate({
        id: 'about.advisor',
        message: 'Consejero'
      })
  },
  {
    photo:"img/team/diego.jpg",
    name:"Diego Lopez",
    org:"LACChain",
    position:
      translate({
        id: 'about.advisor',
        message: 'Consejero'
      })
  },
  {
      photo:"img/team/edgar.jpg",
      name:"Edgar Fernández",
      org:"EOS Costa Rica",
      position:
        translate({
          id: 'about.businessDevelopment',
          message: 'Desarrollo de negocios'
        })
  },
  {
    photo:"img/team/xavier.jpg",
    name:"Xavier Fernández",
    org:"EOS Costa Rica",
    position:
      translate({
        id: 'about.techLead',
        message: 'Líder técnico'
      })
  },
  {
    photo:"img/team/gris.jpg",
    name:"Jesús Chitty",
    org:"EOS Argentina",
    position:
      translate({
        id: 'about.techLead',
        message: 'Líder técnico'
      })
  },
  {
    photo:"img/team/andres.jpg",
    name:"Andrés Gómez",
    org:"EOS Costa Rica",
    position:"DevOps"
  },
  {
    photo:"img/team/gris.jpg",
    name:"Matías Romero",
    org:"EOS Argentina",
    position:
      translate({
        id: 'about.EOSDeveloper',
        message: 'Desarrollador EOS'
      })
  },
  {
    photo:"img/team/jorge.jpg",
    name:"Jorge Murillo",
    org:"EOS Costa Rica",
    position:
      translate({
        id: 'about.UXDesigner',
        message: 'Diseñador UX'
      })
  },
  {
    photo:"img/team/luisDiego.jpg",
    name:"Luis Diego Rojas",
    org:"EOS Costa Rica",
    position:
      translate({
        id: 'about.communications',
        message: 'Comunicaciones'
      })
  },
  {
    photo:"img/team/gris.jpg",
    name:"Adriel Díaz",
    org:"EOS Costa Rica",
    position:
      translate({
        id: 'about.fullStack',
        message: 'Desarrollador Full-stack'
      })
  },
  {
    photo:"img/team/angelo.jpg",
    name:"Angelo Castro",
    org:"EOS Costa Rica",
    position:"Front-end"
  }
]

const About = () => {
  const isMobile = useMediaQuery( {query:'(max-width: 960px)'} )
  const isDesktop = useMediaQuery( {query:'(min-width: 960px)'} )
  const [expanded, setExpanded] = useState('')
  const history = useHistory()

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded? panel: false)
  }

  const HeroSection = () => {
    return (
      <Box className="containerSec">
        {isDesktop && 
          <Box className="sectionLittleHero">
            <Box className="titleBox">
              <h1>
                <Translate id="about.titule1">Sobre LACChain EOSIO</Translate>
              </h1>
            </Box>
            <p>
              <Translate id="about.headerText">
                Aprenda más sobre lo que hacemos y qué puedeencontrar en LACChain EOSIO.
              </Translate>
            </p>
          </Box>
        }
        {isMobile && 
          <Box className="sectionHeroMobile">
            <Box className="titleBox">
              <h1>
                <Translate id="about.titule1">Sobre LACChain EOSIO </Translate>
              </h1>
            </Box>
            <p>
              <Translate id="about.headerText">
                Aprenda más sobre lo que hacemos y qué puedeencontrar en LACChain EOSIO.
              </Translate>
            </p>
          </Box>
        }
      </Box>
    )
  }

  const Purpose = () => {
    return (
      <Box className="containerSec">
        <Box className={clsx("section",{["sectionPadding"]: isMobile})}>
          <Grid container spacing={5}>
            <Grid item xs={12} md={6}>
              <Grid item xs={12} md={12}>
                  <Box className="titleBox">
                    <h2>
                      <Translate id="about.purposeTitle">
                        El propósito de LACChain EOSIO
                      </Translate>
                    </h2>
                  </Box>
                  <p>
                    <Translate id="about.purposeText">
                      LACChain EOSIO aspira a ofrecer una red de alto nivel
                      para que desarrolladores y organizaciones en Latinoamérica
                      y el Caribe puedan explorar, aprender y poner a prueba sus
                      apps descentralizadas en un ambiente seguro y local antes
                      de iniciar las etapas de producción.
                    </Translate>
                  </p>
              </Grid>
              <Grid style={{marginTop:'70px'}} item xs={12} md={12}>
                <Box className="titleBox">
                  <h2>
                    <Translate id="about.whyWorkTitle">
                      ¿Por qué trabajar con LACChain EOSIO?
                    </Translate>
                  </h2>
                </Box>
                <p>
                  <Translate id="about.whyWorkText">
                    El equipo de LACChain EOSIO ha desarrollado una
                    infraestructura y recursos de red para ayudarle a
                    iniciar en solo minutos. Además, con el apoyo de
                    nuestros socios y organizaciones aliadas, hemos
                    armado un conjunto único de recursos y herramientas
                    que le ayudan a explorar la tecnología blockchain EOSIO.
                  </Translate>
                </p>
              </Grid>
            </Grid>
            {isDesktop && 
              <Grid item md={6}>
                <Box style={{paddingLeft:'80px'}}>
                  <img style={{width:'380px'}} src={useBaseUrl('images/america.svg')} alt="Mapa America" />
                </Box>  
              </Grid>
            }
          </Grid>
        </Box>
      </Box>
    )
  }
  
  const FollowUsBanner = () => {
    return (
      <Box className="containerSec">
        <Box className={clsx("section",{["sectionPadding"]: isMobile})}>
          <Grid container justify='center' alignItems="center" spacing={2}>
            <Grid item xs={12} md={12}>
                <Box className="h3Box">
                    <h2 style={{textAlign:'center'}}>
                      <Translate id="about.followUs">
                        Síganos para estar al tanto:
                      </Translate>
                    </h2>
                </Box>
            </Grid>
            <Grid item xs={5} md={2}>
              <Box className="centerBox" style={{justifyContent:'space-around', marginLeft:'20px'}}>
                <a className={clsx("noMarginsTop","socialMediaAnimation")} href="https://twitter.com/EOSCostaRica" target="_blank">
                    <TwitterIcon style={{width:'45px', height:'45px', cursor:'pointer', color:'#159547'}}/>
                </a>
                <a className={clsx("noMarginsTop","socialMediaAnimation")} href="https://www.instagram.com/eoscostarica/" target="_blank">
                    <TelegramIcon style={{width:'45px', height:'45px', cursor:'pointer', color:'#159547'}}/>
                </a>
              </Box>
            </Grid>
            <Grid item xs={5} md={2}>
              <Box className="centerBox" style={{justifyContent:'space-around'}}>
                <a className={clsx("noMarginsTop","socialMediaAnimation")} href="https://t.me/eoscr" target="_blank">
                  <LinkedInIcon style={{width:'45px', height:'45px', cursor:'pointer', color:'#159547'}}/>
                </a>
                <a className={clsx("noMarginsTop","socialMediaAnimation")} href="https://github.com/eoscostarica" target="_blank">
                  <GitHubIcon style={{width:'40px', height:'40px', cursor:'pointer', color:'#159547'}}/>
                </a>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Box>
    )
  }

  const FoundingPartners  = () => {
    return ( 
        <Box className="containerSec"> 
            <Box className="section">
                <Box className="buttonBox">
                    <h2>
                      <Translate id="about.followUs">
                        Socios fundadores
                      </Translate>
                    </h2>
                    <br/>
                </Box>
                <Box>
                    <Grid container justify='center' spacing={10}>
                        <Grid item xs={12} md={4}>
                            <Box className="imgBoxTheCompany">
                                <img
                                    className="sizeImageTheCompany"
                                    alt="LACChain"
                                    src={useBaseUrl('img/logos/lacchain.svg')}
                                />
                            </Box>
                            <p>
                                <a href="(https://www.lacchain.net/" target="_blank">LACChain</a>{' '}
                                <Translate id="about.LACChain">
                                  es la Alianza Global para el desarrollo del
                                  ecosistema blockchain en América Latina y el
                                  Caribe, una iniciativa liderara por BID Lab
                                  (Laboratorio de Innovación del grupo Banco
                                  Interamericano de Desarrollo).
                                </Translate>
                            </p>
                        </Grid>
                        <Grid item xs={12} md={4}>
                            <Box className="imgBoxTheCompany">
                                <img
                                    className="sizeImageTheCompany"
                                    alt="EOS Costa Rica"
                                    src={useBaseUrl('img/logos/eoscr.svg')}
                                />
                            </Box>
                            <p>
                                <a href="(https://eoscostarica.io/" target="_blank">EOS Costa Rica</a>{' '}
                                <Translate id="about.EOSCR">
                                  desarrolla soluciones empresariales basadas en
                                  blockchain usando el protocolo EOSIO. La compañía
                                  también ofrece infraestructura blockchain y
                                  recursos educativos para ejecutivos y desarrolladores.
                                </Translate>
                            </p>
                        </Grid>
                        <Grid item xs={12} md={4}>
                            <Box className="imgBoxTheCompany">
                                <img
                                    className="sizeImageTheCompany"
                                    alt="EOS Argentina"
                                    src={useBaseUrl('img/logos/eosarg.svg')}
                                />
                            </Box>
                            <p>
                                <a href="https://www.eosargentina.io/" target="_blank">EOS Argentina</a>{' '}
                                <Translate id="about.EOSArgentina">
                                    cuenta con extensa experiencia en redes DPOS y
                                    proyectos blockchain, ofrece infraestructura y
                                    promueve la tecnología. La compañía es productora
                                    de bloques en la red EOS.
                                </Translate>
                            </p>
                        </Grid>
                        <Grid item xs={12} md={4}>
                            <Box className="imgBoxTheCompany">
                                <img
                                    className="sizeImageTheCompany"
                                    alt="Block One"
                                    src={useBaseUrl('img/logos/block-one.svg')}
                                />
                            </Box>
                            <p>
                                <a href="https://block.one/" target="_blank">Block.one</a>{' '}
                                <Translate id="about.blockOne">
                                    es la compañía líder que lanzó el protocolo
                                    blockchain EOSIO en 2018. Ofrece tecnología y
                                    productos que permiten confianza en transacciones,
                                    transparencia en sistemas y eficiencia en cómo el
                                    mundo funciona.
                                </Translate>
                            </p>
                        </Grid>
                        <Grid item xs={12} md={4}>
                            <Box className="imgBoxTheCompany">
                                <img
                                    className="sizeImageTheCompany"
                                    alt="EOS Venezuela"
                                    src={useBaseUrl('img/logos/eosven.svg')}
                                />
                            </Box>
                            <p>
                                <a href="https://eosvenezuela.io/" target="_blank">EOS Venezuela</a>{' '}
                                <Translate id="about.EOSVenezuela">
                                    ofrece infraestructura blockchain en sistemas
                                    POS y DPOS. Son pioneros en el uso de criptomonedas
                                    y blockchain para impacto social y promueven
                                    blockchain en Latinoamérica.
                                </Translate>
                            </p>
                        </Grid>
                    </Grid>
                </Box>
            </Box>
        </Box>
    )
  }

  const Team = () => {
    return (
      <Box className="containerSec">
        <Box className="sectionPaddingTop">
          <Box className="h3Box">
            <h2 style={{textAlign:'center'}}>
              <Translate id="about.whoBehind">
                ¿Quiénes están detrás de LACChain EOSIO?
              </Translate>
            </h2>
          </Box>
          <Box className="spacingBox">
            <Grid container spacing={8}>
              {team.map((person) => (
                <Grid item xs={12} md={3}>
                  <Box className="imgBoxTheCompany">
                    <img
                      className="teamSizeImage"
                      alt="Block One"
                      src={useBaseUrl(person.photo)}
                    />
                  </Box>
                  <h3 style={{textAlign:'center', lineHeight:0}}>
                    {person.name}
                  </h3>
                  <p style={{textAlign:'center'}}>
                    {person.org}
                  </p>
                  <p style={{textAlign:'center'}}>
                    {person.position}
                  </p>
                </Grid>
              ))}
            </Grid>
          </Box>
        </Box>
      </Box>
    )
  }

  const HaveQuestions = () => {
    return (
      <Box className="containerSec">
        <Box className="sectionPaddingTop">
          <Grid  justify="center" alignItems="center" container spacing={5}>
            <Grid item xs={12} md={8}>
              <Box style={{justifyContent: 'flex-end'}} className="boxFlexEnd">
                <h2 className="bannerStyle">
                  <Translate id="about.haveQuestionsTitle">
                    ¿Tiene preguntas acerca de LACChain EOSIO? 
                  </Translate>
                </h2>
              </Box>
            </Grid>
            <Grid item xs={12} md={4}>
                <Box className="centerBox">
                  <button 
                    className="buttonPrimary" 
                    onClick={() => history.push("/contactenos")}
                  >
                    <Translate id="about.haveQuestionsButton">
                      Únase a la conversación
                    </Translate>
                  </button>
                </Box>
            </Grid>
          </Grid>
        </Box>
      </Box>
    )
  }

  const Questions = () => {
    return (
      <Box className="containerSec">
        <Box className="sectionPaddingTop">
          <Box >
            <Box className="titleBox">
              <h2>
                <Translate id="about.questions">
                  Preguntas frecuentes
                </Translate>
              </h2>
            </Box>
            <Grid justify="center" container spacing={2}>
              <Grid item xs={10} md={10}>
                <Accordion 
                  square
                  expanded={expanded === 'what_LACChainEOSIO'} 
                  onChange={handleChange('what_LACChainEOSIO')} 
                  className="accordion"
                  style={{boxShadow:'none'}} >
                  <AccordionSummary style={{padding:1}} expandIcon={<ExpandMoreIcon style={{color:'#000000'}}/>}>
                    <h3 style={{margin:'2px', padding: 0}}>
                      <Translate id="about.WhatsLACChain">
                        ¿Qué es LACChain EOSIO?
                      </Translate>
                    </h3>
                  </AccordionSummary>
                  <AccordionDetails style={{padding:1, marginTop:'-15px'}}>
                    <p style={{padding: 0}}>
                      <Translate id="about.WhatsLACChainText">
                        LACChain EOSIO ofrece una testnet de blockchain que se integra en la red de
                        LACChain. Liderada por compañías tecnológicas de Latinoamérica, LACChain
                        EOSIO utiliza una versión público permisionada de la tecnología blockchain
                        EOSIO para permitir a desarrolladores y organizaciones crear y poner a prueba
                        sus aplicaciones descentralizadas e infraestructura de un ambiente local. La
                        red de LACChain EOSIO incorpora un comité permisionador que autoriza los
                        nodos que escriben y validan los nuevos bloques en la blockchain. La red usa
                        un sistema de contratos basado en el mecanismo de consenso Proof-of-Authority (POA)
                        y garantiza y acuerdo estándar entre nodos.
                      </Translate>
                    </p>
                  </AccordionDetails>
                </Accordion>
              </Grid>
              <Grid item xs={10} md={10}>
                <Accordion 
                  square
                  expanded={expanded === 'what_LACChain'} 
                  onChange={handleChange('what_LACChain')} 
                  className="accordion"
                  style={{boxShadow:'none'}} >
                  <AccordionSummary style={{padding:1}} expandIcon={<ExpandMoreIcon style={{color:'#000000'}}/>}>
                    <h3 style={{margin:'2px', padding: 0}}>
                      <Translate id="about.WhatsLACChain2">
                        ¿Qué es LACChain?
                      </Translate>
                    </h3>
                  </AccordionSummary>
                  <AccordionDetails style={{padding:1, marginTop:'-15px'}}>
                    <p style={{padding: 0}}>
                      <Translate id="about.WhatsLACChainText2">
                        LACChain es la Alianza Global para el desarrollo del ecosistema blockchain en
                        América Latina y el Caribe, una iniciativa liderara por BID Lab (Laboratorio de
                        Innovación del grupo Banco Interamericano de Desarrollo). Su objetivo es
                        acelerar la habilitación y la adopción de la tecnología blockchain para el
                        fomento de la innovación, la reducción de las desigualdades y el impacto en
                        inclusión. Para ello, LACChain se enfoca en dos grandes pilares: comunidad e
                        infraestructura. Además, busca desarrollar y promover interoperabilidad de redes,
                        así como desplegar y mantener infraestructuras blockchain interoperables.
                        LACChain Blockchain Networks, utiliza tecnologías Hyperledger Besu y EOSIO.
                      </Translate>
                    </p>
                  </AccordionDetails>
                </Accordion>
              </Grid>
              <Grid item xs={10} md={10}>
                <Accordion 
                  square
                  expanded={expanded === 'what_EOSIO'} 
                  onChange={handleChange('what_EOSIO')} 
                  className="accordion"
                  style={{boxShadow:'none'}} >
                  <AccordionSummary style={{padding:1}} expandIcon={<ExpandMoreIcon style={{color:'#000000'}}/>}>
                    <h3 style={{margin:'2px', padding: 0}}>
                      <Translate id="about.whatEOSIO">
                        ¿Qué es EOSIO?
                      </Translate>
                    </h3>
                  </AccordionSummary>
                  <AccordionDetails style={{padding:1, marginTop:'-15px'}}>
                    <p style={{padding: 0}}>
                      <Translate id="about.whatEOSIOText1">
                        EOSIO es una tecnología blockchain de nueva generación lanzada en 2018
                        por Block.one, empresa de tecnología líder que provee soluciones en
                        blockchain de alto rendimiento. EOSIO ofrece:
                      </Translate>
                      <br/>
                      <Translate id="about.whatEOSIOText2">
                        - Alta escalabilidad: EOSIO permite rapidez líder en la industria con más de
                        4.000 transacciones por segundo, baja latencia (0.5 segundos) y tolerancia a
                        fallas bizantinas.
                      </Translate>
                      <br/>
                      <Translate id="about.whatEOSIOText3">
                        - Flexibilidad: EOSIO permite desplegar contratos inteligentes programables y 
                        adaptables a cualquier negocio o aplicación con gobernanza y lógica personalizada
                        y transacciones gratuitas con límites de consumo.
                      </Translate>
                      <br/>
                      <Translate id="about.whatEOSIOText4">
                        - Rápida adaptabilidad: La comunidad EOSIO pone a disposición un creciente conjunto
                        de recursos y herramientas para desarrolladores. Además, los contratos inteligentes
                        en EOSIO pueden ser programados con C++.
                      </Translate>
                      <br/>
                      <Translate id="about.whatEOSIOText5">
                        - Seguridad mejorada: EOSIO utiliza lo último en estándares de verificación web y
                        blockchain con autenticación de extremo a extremo.
                      </Translate>
                    </p>
                  </AccordionDetails>
                </Accordion>
              </Grid>
              <Grid item xs={10} md={10}>
                <Accordion 
                  square
                  expanded={expanded === 'founders'} 
                  onChange={handleChange('founders')} 
                  className="accordion"
                  style={{boxShadow:'none'}} >
                  <AccordionSummary style={{padding:1}} expandIcon={<ExpandMoreIcon style={{color:'#000000'}}/>}>
                    <h3 style={{margin:'2px', padding: 0}}>
                      <Translate id="about.whoBehind">
                        ¿Quién está detrás de LACChain EOSIO?
                      </Translate>
                    </h3>
                  </AccordionSummary>
                  <AccordionDetails style={{padding:1, marginTop:'-15px'}}>
                    <p style={{padding: 0}}>
                      <Translate id="about.whoBehindText">
                        LACChain EOSIO fue inicialmente desarrollada por los equipos de EOS Costa Rica
                        y EOS Argentina, con el apoyo de LACChain, un programa del BID Lab (parte del
                        Banco Interamericano de Desarrollo). LACChain EOSIO utiliza una versión público
                        permisionada de EOSIO. El equipo se comprende principalmente por miembros de
                        EOS Costa Rica, EOS Argentina y el apoyo de LACChain, con algunos esfuerzos
                        por parte de organizaciones como EOS Venezuela, Block.one, dfuse y EOS Detroit.
                      </Translate>
                    </p>
                  </AccordionDetails>
                </Accordion>
              </Grid>
              <Grid item xs={10} md={10}>
                <Accordion 
                  square
                  expanded={expanded === 'how_start'} 
                  onChange={handleChange('how_start')} 
                  className="accordion"
                  style={{boxShadow:'none'}} >
                  <AccordionSummary style={{padding:1}} expandIcon={<ExpandMoreIcon style={{color:'#000000'}}/>}>
                    <h3 style={{margin:'2px', padding: 0}}>
                      <Translate id="about.howStarted">
                        ¿Cómo iniciar en LACChain EOSIO?
                      </Translate>
                    </h3>
                  </AccordionSummary>
                  <AccordionDetails style={{padding:1, marginTop:'-15px'}}>
                    <p style={{padding: 0}}>
                      <Translate id="about.howStartedText">
                        Para crear su cuenta, primero debe contactar al equipo a través del formulario de
                        contacto. Le responderemos tan pronto nos sea posible y le guiaremos por todos los pasos necesarios.
                        Para aprender más acerca de LACChain EOSIO,
                      </Translate>
                      {' '}
                      <a href={useBaseUrl('/docs/eosio')} target="_blank">
                        <Translate id="about.howStartedLink">
                          visite nuestra documentación
                        </Translate>
                      </a>
                    </p>
                  </AccordionDetails>
                </Accordion>
              </Grid>
              <Grid item xs={10} md={10}>
                <Accordion 
                  square
                  expanded={expanded === 'how_contribute'} 
                  onChange={handleChange('how_contribute')} 
                  className="accordion"
                  style={{boxShadow:'none'}} >
                  <AccordionSummary style={{padding:1}} expandIcon={<ExpandMoreIcon style={{color:'#000000'}}/>}>
                    <h3 style={{margin:'2px', padding: 0}}>
                      <Translate id="about.howContributeTitle">
                        ¿Cómo contribuir con LACChain EOSIO?
                      </Translate>
                    </h3>
                  </AccordionSummary>
                  <AccordionDetails style={{padding:1, marginTop:'-15px'}}>
                    <p style={{padding: 0}}>
                      <Translate id="about.howContributeText1">
                        Puede ayudarnos con documentación, recursos y herramientas para desarrolladores.¿Cómo contribuir con LACChain EOSIO?
                      </Translate>{' '}
                      <a href={useBaseUrl('/docs/guias/contribuir')} target="_blank">
                        <Translate id="about.howContributeLink">
                          Encuentre aquí cómo contribuir
                        </Translate>
                      </a> {' '}
                      <Translate id="about.howContributeText2">
                        Además, estamos abiertos a tener más organizaciones y miembros trabajando con nosotros. Contáctenos
                      </Translate>
                    </p>
                  </AccordionDetails>
                </Accordion>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Box>
    )
  }

  const CreateAccount = () => {
    return (
      <Box className="containerSec">
        <Box className="sectionPadding">
          <Grid  justify="center" alignItems="center" container spacing={5}>
            <Grid item xs={12} md={9}>
              <Box className="boxFlexEnd">
                <h2 className="bannerStyle">
                  <Translate id="about.createStartBanner">
                    Cree su cuenta de LACChain EOSIO y empiece a desarrollar
                  </Translate>
                </h2>
              </Box>
            </Grid>
            <Grid item xs={12} md={3}>
                <Box className="centerBox">
                  <button 
                    className="buttonPrimary" 
                    onClick={() => history.push("/contactenos")}
                  >
                    <Translate id="homepage.startNow">
                      Comience aquí
                    </Translate>
                  </button>
                </Box>
            </Grid>
          </Grid>
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
          <Purpose/>
          <FollowUsBanner/>
          <FoundingPartners/>
          <Team/>
          <HaveQuestions/>
          <Questions/>
          <CreateAccount/>
        </Box>
      }
      {isMobile && 
        <Box className="mainContainer">
          <Box className="paddingBox">
            <HeroSection/>
            <Purpose/>
            <FollowUsBanner/>
            <FoundingPartners/>
            <Team/>
            <HaveQuestions/>
            <Questions/>
            <CreateAccount/>
          </Box>
        </Box>
      }
    </Layout>
  )
}

export default About
