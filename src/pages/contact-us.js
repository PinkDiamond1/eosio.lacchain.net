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

const MetaData={
    title:"LACChain: Contáctenos",
    description:"Pregúntenos sobre la red LACChain EOSIO.",
    img:"img/logos/lacchain-eosio-logo.png",
    hrefLangPath: ""
}

const ContactUS = () => {
  const isMobile = useMediaQuery( {query:'(max-width: 960px)'} )
  const isDesktop = useMediaQuery( {query:'(min-width: 960px)'} )
  const history = useHistory()
  
  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded? panel: false)
  }
  
  useEffect(() => {
    handleChange('panel_SoftDev')
  }, [])

  const HeroSection = () => {
    return (
        <>
        {isDesktop && 
            <Box className="containerSec">
              <Box className={clsx("sectionPaddingTop",{["sectionPadding"]: isMobile})}>
                <Box className="h3Box">
                  <h1>
                    <Translate id="contact.title">
                      Contacte a LACChain EOSIO
                    </Translate>
                  </h1>
                </Box>
                  <Box className="contactFormBox">
                    <Box className="spacingBox">
                      <p>
                        <Translate id="contact.text">
                          ¿Tiene preguntas o ya tiene todo listo para crear su cuenta y comenzar a usar LACChain EOSIO?
                        </Translate>
                      </p>
                    </Box>
                  </Box>
              </Box>
            </Box>
          }
          {isMobile && 
            <Box className="sectionHeroMobile">
              <Box className="h3Box">
                <Translate id="contact.title">
                  Contacte a LACChain EOSIO
                </Translate>
              </Box>
              <Box className="contactFormBox">
                <Box className="spacingBox">
                  <p>
                    <Translate id="contact.text">
                      ¿Tiene preguntas o ya tiene todo listo para crear su cuenta y comenzar a usar LACChain EOSIO?
                    </Translate>
                  </p>
                </Box>
              </Box>
            </Box>
        }
        </>
    )
  } 

  const IconSection = () => {
    return (
      <Box className="containerSec">
        <Box className={clsx("section",{["sectionPadding"]: isMobile})}>
          <Grid container spacing={isDesktop ? 8 : 3}>
            <Grid item xs={12} md={9}>
              <Box className="titleBox">
                <h3>
                  <Translate id="contact.bodyTitle">
                    Elija la opción más cercana a lo que está buscando
                  </Translate>
                </h3>
              </Box>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box className="titleBox">
                <h4>
                  <Translate id="contact.haveQuestions">
                    Tengo preguntas sobre LACChain EOSIO.
                  </Translate>
                </h4>
              </Box>
              <p>
                <Translate id="contact.haveQuestionsText">
                  Conecte con nosotros por Telegram y obtenga ayuda de personas en la comunidad.
                </Translate>
              </p>
            </Grid>
            <Grid item xs={12} md={3} alignItems='center' alignContent='center' justify='center'>
              <Box className="specialButtonBox">
                <Box className={clsx("boxIconButton", "centerBox", "buttonPrimary")}>
                  <TelegramIcon style={{width:'50px', height:'50px'}}/>
                  <Box className="marginLeft">
                      Telegram
                  </Box>
                </Box>
              </Box>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box className="titleBox">
                <h4>
                  <Translate id="contact.wantContribute">
                    Quiero contribuir.
                  </Translate>
                </h4>
              </Box>
              <p>
                <Translate id="contact.wantContributeText">
                  Únase a nuestro Github y contribuya. ¡Buscamos colaboración en todo momento!
                </Translate>{' '}
                <a href={useBaseUrl("/docs/guias/contribuir")} target="_blank">
                  <Translate id="contact.wantContributekLink">
                    Aprenda más sobre cómo contribuir
                  </Translate>
                </a>.
              </p>
            </Grid>
            <Grid item xs={12} md={3}>
              <Box className="specialButtonBox">
                <Box className={clsx("boxIconButton", "centerBox", "buttonPrimary")}>
                  <GitHubIcon style={{width:'50px', height:'50px'}}/>
                  <Box className="marginLeft">
                    Github
                  </Box>
                </Box>
              </Box>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box className="titleBox">
                <h4>
                  <Translate id="contact.wantAccount">
                    Quiero crear una cuenta.
                  </Translate>
                </h4>
              </Box>
              <p>
                <Translate id="contact.wantAccountText">
                  Contacte alguno de los socios de LACChain EOSIO y con gusto le guiaremos con el proceso.
                </Translate>
              </p>
            </Grid>
            <Grid item xs={12} md={3}>
              <Box className="buttonBox">
                <button
                  className="buttonPrimary" 
                  onClick={() => history.push("/contactenos")}
                >
                  EOS Costa Rica
                </button>
              </Box>
            </Grid>
            <Grid item xs={12} md={3}>
              <Box className="buttonBox">
                <button
                  className="buttonPrimary" 
                  onClick={() => history.push("/contactenos")}
                >
                  EOS Argentina
                </button>
              </Box>
            </Grid>
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
                      <Translate id="contact.followUs1">
                        ¡Síganos en nuestras redes sociales para
                      </Translate>
                      <br/>
                      <Translate id="contact.followUs2">
                        recibir actualizaciones sobre LACChain EOSIO!
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
          <FollowUsBanner/>
        </Box>
      }
      {isMobile && 
        <Box className="mainContainer">
          <HeroSection/>
          <IconSection/>
          <FollowUsBanner/>
        </Box>
      }
    </Layout>
  )
}

export default ContactUS