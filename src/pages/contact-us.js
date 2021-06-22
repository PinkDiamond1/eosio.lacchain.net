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

import bg from '../../static/img/bgHomePage.png'

const MetaData={
  title:"LACChain EOSIO: Contáctenos",
  description:"Pregúntenos sobre la red LACChain EOSIO.",
  img:"img/lacchain-eosio-social-media.png",
  hrefLangPath: ""
}

const ContactUS = () => {
  const isMobile = useMediaQuery( {query:'(max-width: 960px)'} )
  const isDesktop = useMediaQuery( {query:'(min-width: 960px)'} )
  
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
                <Box className="h2Box">
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
              <Box className="h2Box">
                <h1>
                  <Translate id="contact.title">
                    Contacte a LACChain EOSIO
                  </Translate>
                </h1>
              </Box>
              <Box className="contactFormBox">
                <p>
                  <Translate id="contact.text">
                    ¿Tiene preguntas o ya tiene todo listo para crear su cuenta y comenzar a usar LACChain EOSIO?
                  </Translate>
                </p>
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
                <h2>
                  <Translate id="contact.bodyTitle">
                    Elija la opción más cercana a lo que está buscando
                  </Translate>
                </h2>
              </Box>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box className="titleBox">
                <h3>
                  <Translate id="contact.haveQuestions">
                    Tengo preguntas sobre LACChain EOSIO.
                  </Translate>
                </h3>
              </Box>
              <p>
                <Translate id="contact.haveQuestionsText">
                  Conecte con nosotros por Telegram y obtenga ayuda de personas en la comunidad.
                </Translate>
              </p>
            </Grid>
            <Grid item xs={12} md={3} alignItems='center' alignContent='center' justify='center'>
              <Box className="buttonBox">
                <button className='buttonPrimary' style={{width:'185px'}} onClick={() => window.open('https://t.me/lacchaineosio')}>
                  Telegram
                </button>
              </Box>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box className="titleBox">
                <h3>
                  <Translate id="contact.wantContribute">
                    Quiero contribuir.
                  </Translate>
                </h3>
              </Box>
              <p>
                <Translate id="contact.wantContributeText">
                  Únase a nuestro Github y contribuya. ¡Buscamos colaboración en todo momento!
                </Translate>{' '}
                <a href={useBaseUrl("/docs/guias/contribuir")} target="_blank">
                  <Translate id="contact.wantContributekLink">
                    Aprenda más sobre cómo contribuir
                  </Translate>
                </a>.{' '}
                <Translate id="contact.wantContributeText2">
                  Si tiene alguna consulta para la comunidad, puede usar nuestro 
                </Translate>{' '}
                <a href='https://github.com/lacchain/eosio.lacchain.net/discussions' target="_blank">
                  <Translate id="contact.wantContributekLink2">
                    GitHub Discussions
                  </Translate>.
                </a>
              </p>
            </Grid>
            <Grid item xs={12} md={3}>
              <Box className="buttonBox">
                <button className='buttonPrimary' style={{width:'185px'}} onClick={() => window.open('https://github.com/lacchain/eosio.lacchain.net')}>
                  GitHub
                </button>
              </Box>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box className="titleBox">
                <h3>
                  <Translate id="contact.wantAccount">
                    Quiero crear una cuenta.
                  </Translate>
                </h3>
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
                  onClick={() => window.open('https://es.eoscostarica.io/lacchain/')}
                >
                  EOS Costa Rica
                </button>
              </Box>
            </Grid>
            <Grid item xs={12} md={3}>
              <Box className="buttonBox">
                <button
                  className="buttonPrimary" 
                  onClick={() => window.open(`mailto:${'info@eosargentina.io'}?subject=${'LACChain EOSIO Contact'}`)}
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
      <Box className="containerSec" style={{backgroundColor:'rgb(255, 255, 255, 0)'}}>
        <Box className="sectionPadding">
          <Grid container justify='center' alignItems="center" spacing={2}>
            <Grid item xs={12} md={12}>
              <Box className="h2Box">
                <h2 style={{textAlign:'center'}}>
                  <Translate id="contact.followUs1">
                    ¡Síganos en nuestras redes sociales para
                  </Translate>
                  <br/>
                  <Translate id="contact.followUs2">
                    recibir actualizaciones sobre LACChain EOSIO!
                  </Translate>
                </h2>
              </Box>
            </Grid>
            <Grid item xs={5} md={2}>
              <Box className="centerBox" style={{justifyContent:'space-around', marginLeft:'20px'}}>
                <a className={clsx("noMarginsTop","socialMediaAnimation")} href="https://twitter.com/LACChain_EOSIO" target="_blank">
                    <TwitterIcon style={{width:'45px', height:'45px', cursor:'pointer', color:'#159547'}}/>
                </a>
                <a className={clsx("noMarginsTop","socialMediaAnimation")} href="https://t.me/lacchaineosio" target="_blank">
                    <TelegramIcon style={{width:'45px', height:'45px', cursor:'pointer', color:'#159547'}}/>
                </a>
              </Box>
            </Grid>
            <Grid item xs={5} md={2}>
              <Box className="centerBox" style={{justifyContent:'space-around'}}>
                <a className={clsx("noMarginsTop","socialMediaAnimation")} href="https://www.linkedin.com/company/lacchaineosio/" target="_blank">
                    <LinkedInIcon style={{width:'45px', height:'45px', cursor:'pointer', color:'#159547'}}/>
                </a>
                <a className={clsx("noMarginsTop","socialMediaAnimation")} href="https://github.com/lacchain/eosio.lacchain.net" target="_blank">
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
          <Box 
            style={{ 
              backgroundRepeat: 'no-repeat',
              backgroundSize: '84%',
              backgroundAttachment: 'fixed',
              backgroundPosition: '270px 120px',
              backgroundImage: `url(${bg})`,
              backgroundColor: '#F9F9F9'
            }}
          >
            <FollowUsBanner/>
          </Box>
        </Box>
      }
      {isMobile && 
        <Box className="mainContainer">
          <Box className="paddingBox">
            <HeroSection/>
            <IconSection/>
            <FollowUsBanner/>
          </Box>
        </Box>
      }
    </Layout>
  )
}

export default ContactUS