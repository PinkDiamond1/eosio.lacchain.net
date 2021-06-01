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
import Translate from '@docusaurus/Translate'
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
    photo:"img/team/edgar.jpg",
    name:"Marcos Allende",
    org:"LACChain",
    position:"Consejero"
  },
  {
      photo:"img/team/edgar.jpg",
      name:"Edgar Fernández",
      org:"EOS Costa Rica",
      position:"Desarrollo de negocios"
  },
  {
    photo:"img/team/xavier.jpg",
    name:"Xavier Fernández",
    org:"EOS Costa Rica",
    position:"Líder técnico"
  },
  {
    photo:"img/team/andres.jpg",
    name:"Jesús Chitty",
    org:"EOS Argentina",
    position:"Líder técnico"
  },
  {
    photo:"img/team/andres.jpg",
    name:"Andrés Gómez",
    org:"EOS Costa Rica",
    position:"DevOps"
  },
  {
    photo:"img/team/luisDiego.jpg",
    name:"Matías Romero",
    org:"EOS Argentina",
    position:"Desarrollador EOS"
  },
  {
    photo:"img/team/jorge.jpg",
    name:"Jorge Murillo",
    org:"EOS Costa Rica",
    position:"Diseñador UX"
  },
  {
    photo:"img/team/luisDiego.jpg",
    name:"Luis Diego Rojas",
    org:"EOS Costa Rica",
    position:"Comunicaciones"
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
                    <h3>
                      <Translate id="about.purposeTitle">
                        El propósito de LACChain EOSIO
                      </Translate>
                    </h3>
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
                  <h3>
                    <Translate id="about.whyWorkTitle">
                      ¿Por qué trabajar con LACChain EOSIO?
                    </Translate>
                  </h3>
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
                  <img style={{width:'800px'}} src="https://raw.githubusercontent.com/LatamLink/eosio.lacchain.net/master/static/images/map-content-home.png" alt="" />
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
                    <h3 style={{textAlign:'center'}}>
                      <Translate id="about.followUs">
                        Síganos para estar al tanto:
                      </Translate>
                    </h3>
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
                        <h3>
                          <Translate id="about.followUs">
                            Socios fundadores
                          </Translate>
                        </h3>
                        <br/>
                    </Box>
                    <Box>
                        <Grid container justify='center' spacing={10}>
                            <Grid item xs={12} md={4}>
                                <Box className="imgBoxTheCompany">
                                    <img
                                        className="sizeImageTheCompany"
                                        alt="LACChain"
                                        src="https://www.lacchain.net/assets/images/logo-lacchain-footer.png"
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
                                        src="https://raw.githubusercontent.com/eoscostarica/eoscostarica.io/master/static/img/logos/eoscr-logo.png"
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
                                        src="https://www.eosargentina.io/assets/img/navigation-logo.png"
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
                                        src="https://res.cloudinary.com/crunchbase-production/image/upload/c_lpad,f_auto,q_auto:eco/mkiu15vsjtl2pgpoptsq"
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
                                        src="data:image/png;base64,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"
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
            <h3 style={{textAlign:'center'}}>
              <Translate id="about.whoBehind">
                ¿Quiénes están detrás de LACChain EOSIO?
              </Translate>
            </h3>
          </Box>
          <Box className="spacingBox">
            <Grid container spacing={8}>
              {team.map((person) => (
                <Grid item xs={12} md={3}>
                  <Box className="imgBoxTheCompany">
                    <img
                      className="teamSizeImage"
                      alt="Block One"
                      src={person.photo}
                    />
                  </Box>
                  <h4 style={{textAlign:'center', lineHeight:0}}>
                      {person.name}
                  </h4>
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
                <h3 className="bannerStyle">
                  <Translate id="about.haveQuestionsTitle">
                    ¿Tiene preguntas acerca de LACChain EOSIO? 
                  </Translate>
                </h3>
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
              <h3>
                <Translate id="about.questions">
                  Preguntas frecuentes
                </Translate>
              </h3>
            </Box>
            <Grid justify="center" container spacing={2}>
              <Grid item xs={10} md={10}>
                <Accordion 
                  square
                  expanded={expanded === 'what_LACChainEOSIO'} 
                  onChange={handleChange('what_LACChainEOSIO')} 
                  className="accordion"
                  style={{boxShadow:'none'}} >
                  <AccordionSummary style={{padding:1}} expandIcon={<ExpandMoreIcon style={{color:'#5484B3'}}/>}>
                    <h4 style={{margin:'2px', padding: 0}}>
                      <Translate id="about.WhatsLACChain">
                        ¿Qué es LACChain EOSIO?
                      </Translate>
                    </h4>
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
                  <AccordionSummary style={{padding:1}} expandIcon={<ExpandMoreIcon style={{color:'#5484B3'}}/>}>
                    <h4 style={{margin:'2px', padding: 0}}>
                      <Translate id="about.WhatsLACChain2">
                        ¿Qué es LACChain?
                      </Translate>
                    </h4>
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
                  <AccordionSummary style={{padding:1}} expandIcon={<ExpandMoreIcon style={{color:'#5484B3'}}/>}>
                    <h4 style={{margin:'2px', padding: 0}}>
                      <Translate id="about.whatEOSIO">
                        ¿Qué es EOSIO?
                      </Translate>
                    </h4>
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
                  <AccordionSummary style={{padding:1}} expandIcon={<ExpandMoreIcon style={{color:'#5484B3'}}/>}>
                    <h4 style={{margin:'2px', padding: 0}}>
                      <Translate id="about.whoBehind">
                        ¿Quién está detrás de LACChain EOSIO?
                      </Translate>
                    </h4>
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
                  <AccordionSummary style={{padding:1}} expandIcon={<ExpandMoreIcon style={{color:'#5484B3'}}/>}>
                    <h4 style={{margin:'2px', padding: 0}}>
                      <Translate id="about.howStarted">
                        ¿Cómo iniciar en LACChain EOSIO?
                      </Translate>
                    </h4>
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
                  <AccordionSummary style={{padding:1}} expandIcon={<ExpandMoreIcon style={{color:'#5484B3'}}/>}>
                    <h4 style={{margin:'2px', padding: 0}}>
                      <Translate id="about.howContributeTitle">
                        ¿Cómo contribuir con LACChain EOSIO?
                      </Translate>
                    </h4>
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
                <h3 className="bannerStyle">
                  <Translate id="about.createStartBanner">
                    Cree su cuenta de LACChain EOSIO y empiece a desarrollar
                  </Translate>
                </h3>
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
    </Layout>
  )
}

export default About
