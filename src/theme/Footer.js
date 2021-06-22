import React from "react"
import useBaseUrl from "@docusaurus/useBaseUrl"
import { useMediaQuery } from 'react-responsive'
import Box from '@material-ui/core/Box'
import Link from '@material-ui/core/Link'
import Grid from '@material-ui/core/Grid'
import clsx from "clsx"
import EmailIcon from '@material-ui/icons/Email';
import LinkedInIcon from '@material-ui/icons/LinkedIn'
import TwitterIcon from '@material-ui/icons/Twitter'
import TelegramIcon from '@material-ui/icons/Telegram';
import GitHubIcon from '@material-ui/icons/GitHub'
import Translate, {translate} from '@docusaurus/Translate';

const Footer = () => {
  const isMobile = useMediaQuery({query:'(max-width: 769px)'})
  const isDesktop = useMediaQuery({query:'(min-width: 769px)'})

  return (
    <Box>
      <Box className="footer">
        <Box className="footerContent">
          <Grid container justify='center' alignContent='center' spacing={4}>
            <Grid item xs={12} md={3}>
              <Box className="centerBox">
                <img
                  src={useBaseUrl("img/logos/lacchain-eosio-logo-white.png")}
                  alt="LACChain EOSIO LOGO"
                  className="footerLogo"
                />
              </Box>
            </Grid>
            <Grid item xs={12} md={1}/>
            <Grid container xs={12} md={8}>
              <Grid item xs={12} md={1}/>
              <Grid item xs={12} md={3}>
                <Box className="specialH3Box">
                  <h3 className="h3Footer" style={{marginBottom:'0'}}>                    
                    <Translate id="footer.overview">
                      GENERAL
                    </Translate>
                  </h3>
                </Box>
                <p style={{textAlign: isMobile ? 'center' : ''}}>
                  <Link
                    className="linkFooter"
                    href={useBaseUrl("/")}
                    target="_blank"
                    style={{color:'white'}}
                  >
                  <Translate id="footer.homePage">
                    Inicio
                  </Translate>
                  </Link>
                </p>
                <p style={{textAlign: isMobile ? 'center' : ''}}>
                  <Link
                    className="linkFooter"
                    href={useBaseUrl("/about")}
                    target="_blank"
                    style={{color:'white'}}
                  >
                  <Translate id="footer.about">
                    LACChain EOSIO
                  </Translate>
                  </Link>
                </p>
                <p style={{textAlign: isMobile ? 'center' : ''}}>
                  <Link
                    className="linkFooter"
                    href={useBaseUrl("/docs/eosio")}
                    target="_blank"
                    style={{color:'white'}}
                  >
                  <Translate id="footer.documentation">
                    Documentación
                  </Translate>
                  </Link>
                </p>
                <p style={{textAlign: isMobile ? 'center' : ''}}>
                  <Link
                    className="linkFooter"
                    href={useBaseUrl("/contact-us")}
                    target="_blank"
                    style={{color:'white'}}
                  >
                  <Translate id="footer.contactUs">
                    Contáctenos
                  </Translate>
                  </Link>
                </p>
              </Grid>
              <Grid item xs={12} md={4}>
                <Box className="specialH3Box">
                  <h3 className="h3Footer" style={{marginBottom:'0'}}>
                    <Translate id="footer.devTools">
                      HERRAMIENTAS
                    </Translate>
                  </h3>
                </Box>
                <p style={{textAlign: isMobile ? 'center' : ''}}>
                  <Link
                    className="linkFooter"
                    href="https://lacchain.eosio.online/"
                    target="_blank"
                    style={{color:'white'}}
                  >
                  <Translate id="footer.networkDashboard">
                    Monitor de red
                  </Translate>
                  </Link>
                </p>
                <p style={{textAlign: isMobile ? 'center' : ''}}>
                  <Link
                    className="linkFooter"
                    href="https://eosio-explorer.lacchain.net/"
                    target="_blank"
                    style={{color:'white'}}
                  >
                  <Translate id="homepage.blockExplorerTitle">
                    Explorador de bloques
                  </Translate>
                  </Link>
                </p>
              </Grid>
              <Grid item xs={12} md={4}>
                <Box className="specialH3Box">
                  <h3 className="h3Footer" style={{marginBottom:'0'}}>
                    <Translate id="footer.contactPartners">
                      CONTACTO SOCIOS
                    </Translate>
                  </h3>
                </Box>
                <p style={{textAlign: isMobile ? 'center' : ''}}>
                  <Link
                    className="linkFooter"
                    href="https://www.lacchain.net/home"
                    target="_blank"
                    style={{color:'white'}}
                  >
                    LACChain
                  </Link>
                </p>
                <p style={{textAlign: isMobile ? 'center' : ''}}>
                  <Link
                    className="linkFooter"
                    href="https://eoscostarica.io/"
                    target="_blank"
                    style={{color:'white'}}
                  >
                    EOS Costa Rica
                  </Link>
                </p>
                <p style={{textAlign: isMobile ? 'center' : ''}}>
                  <Link
                    className="linkFooter"
                    href="https://www.eosargentina.io/"
                    target="_blank"
                    style={{color:'white'}}
                  >
                    EOS Argentina
                  </Link>
                </p>
              </Grid>
            </Grid>
            { isDesktop && 
              <Grid item md={6}>
                <p style={{color:'#ffffff', fontSize: '16px', marginLeft:'18px', marginTop:'2px'}}>
                  LACChain 2021 - Open Source
                </p>
            </Grid>
            }
            <Grid container md={6}>
              <Grid item md={5}/>
              <Grid item xs={12} md={4}>
                <Grid item xs={12}>
                  <Box style={{marginTop: isMobile ? '40px' : ''}} className={isMobile ? "centerBox" : "leftBox"}>
                    <a className={clsx("marginIconsFooter","socialMediaAnimation")} href="https://twitter.com/LACChain_EOSIO" target="_blank">
                      <TwitterIcon 
                        style={{
                          width: isDesktop ? '35px' : '45px',
                          height: isDesktop ? '35px' : '45px',
                          cursor:'pointer', color:'#ffffff'
                        }}/>
                    </a>
                    <a className={clsx("marginIconsFooter","socialMediaAnimation")} href="https://www.linkedin.com/company/lacchaineosio/" target="_blank">
                      <LinkedInIcon
                        style={{
                          width: isDesktop ? '35px' : '45px',
                          height: isDesktop ? '35px' : '45px',
                          cursor:'pointer', color:'#ffffff'
                        }}/>
                    </a>
                    <a className={clsx("marginIconsFooter", "socialMediaAnimation")} href="https://t.me/lacchaineosio" target="_blank">
                      <TelegramIcon 
                        style={{
                          width: isDesktop ? '42px' : '45px',
                          height: isDesktop ? '42px' : '45px',
                          cursor:'pointer',
                          color:'#ffffff'
                        }}/>
                    </a>
                  </Box>
                </Grid>
              </Grid>
              <Grid item xs={12} md={3}>
                <Grid style={{marginLeft: isDesktop ? '-50px' : ''}} item xs={12}>
                  <Box className={isMobile ? "centerBox" : "leftBox"} style={{marginTop:'3px'}}>
                    <a className={clsx("marginIconsFooter", "socialMediaAnimation")} href="https://t.me/lacchaineosio" target="_blank">
                      <EmailIcon
                        style={{
                          width: isDesktop ? '38px' : '45px',
                          height: isDesktop ? '38px' : '45px',
                          cursor:'pointer',
                          color:'#ffffff'
                        }}/>
                    </a>
                    <a className={clsx("marginIconsFooter","socialMediaAnimation")} href="https://github.com/lacchain/eosio.lacchain.net" target="_blank">
                      <GitHubIcon 
                        style={{
                          width: isDesktop ? '35px' : '45px',
                          height: isDesktop ? '35px' : '45px',
                          cursor:'pointer',
                          color:'#ffffff'
                        }}/>
                    </a>
                  </Box>
                </Grid>
              </Grid>
            </Grid>
            { isMobile && 
              <Grid item md={6}>
                <p style={{color:'#ffffff', fontSize: '16px', marginLeft:'18px', marginTop:'20px'}}>
                  LACChain 2021 - Open Source
                </p>
            </Grid>
            }
          </Grid>
        </Box>
      </Box>
    </Box>
  )
}

export default Footer