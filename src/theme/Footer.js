import React from "react"
import useBaseUrl from "@docusaurus/useBaseUrl"
import { useMediaQuery } from 'react-responsive'
import Box from '@material-ui/core/Box'
import Link from '@material-ui/core/Link'
import Grid from '@material-ui/core/Grid'

const Footer = () => {
  const isMobile = useMediaQuery({query:'(max-width: 769px)'})
  const isDesktop = useMediaQuery({query:'(min-width: 769px)'})

  return (
    <Box>
      <Box className="footer">
        <Box className="footerContent">
          <Grid container justify='center' alignContent='center'>
            { isMobile &&
              <Grid item xs={12} md={4}>
                <Box className="centerBox">
                  <img
                    src={useBaseUrl("img/logos/lacchain-eosio-logo.png")}
                    alt="LACChain EOSIO LOGO"
                    className="footerLogo"
                  />
                </Box>
              </Grid>
            }
            <Grid container xs={12} md={8}>
              <Grid item xs={12} md={6}> 
                <Box className="specialH3Box">
                  <h3 className="h3Footer">About LACChain EOSIO</h3>
                </Box>
                <Box className="specialH3Box">
                  <h3 className="h3Footer" style={{marginBottom:'0'}}>Services</h3>
                  <p style={{textAlign: isMobile ? 'center' : ''}}>
                    <Link
                      className="linkFooter"
                      href="https://lacchain.eosio.online/"
                      target="_blank"
                      style={{color:'white'}}
                    >
                    Network Dashboard
                    </Link>
                  </p>
                  <p style={{textAlign: isMobile ? 'center' : ''}}>
                    <Link
                      className="linkFooter"
                      href="https://explorer.latamlink.io/"
                      target="_blank"
                      style={{color:'white'}}
                    >
                    Block Explorer
                    </Link>
                  </p>
                </Box>
                <Box className="specialH3Box">
                  <h3 className="h3Footer" style={{marginBottom:'0'}}>Documentation</h3>
                </Box>
                <Box className="specialH3Box">
                  <h3 className="h3Footer" style={{marginBottom:'0'}}>Contact US</h3>
                </Box>
              </Grid>
            </Grid>
            { isDesktop &&
              <Grid item xs={12} md={4}>
                <Box className="centerBox">
                  <img
                    src={useBaseUrl("img/logos/lacchain-eosio-logo.png")}
                    alt="LACChain EOSIO LOGO"
                    className="footerLogo"
                  />
                </Box>
              </Grid>
            }
          </Grid>
        </Box>
      </Box>
    </Box>
  )
}

export default Footer