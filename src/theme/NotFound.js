import React from "react"
import { useMediaQuery } from 'react-responsive'
import Layout from "@theme/Layout"
import Box from '@material-ui/core/Box'

function NotFound() {
  const isMobile = useMediaQuery( {query:'(max-width: 1100px)'} )
  const isDesktop = useMediaQuery( {query:'(min-width: 1100px)'} )

  return (
    <Layout>
      {isDesktop && 
        <Box className="mainContainer">         
            <Box className="containerSec">
              <Box className="sectionHero">
                <Box className="titleBox">
                  <h1 className="centerText">¡Ups! No pudimos encontrar esta página.</h1>
                  <h1 className="centerText">Por favor, regrese a la <a style={{color:'#1dc961'}} href="/">página de inicio</a> e inténtelo de nuevo.</h1>
                </Box>
                <p className="centerText">Si tiene alguna duda sobre LACChain EOSIO diríjase a <a href="/docs/eosio">nuestra documentación</a>!</p>
              </Box>
            </Box>
        </Box>
      }
      {isMobile && 
        <Box className="mainContainer">
          <Box className="containerSec">
            <Box className="sectionHeroMobile">
              <Box className="section">
                <Box className="titleBox">
                    <h1 style={{paddingLeft: '25px', paddingRight:'25px', fontSize:'30px'}} className="centerText">¡Ups! No pudimos encontrar esta página.</h1>
                    <h2 style={{paddingLeft: '25px', paddingRight:'25px', fontSize:'20px'}} className="centerText">Por favor, regrese a la <a style={{color:'#1dc961'}} href="/">página de inicio</a> e inténtelo de nuevo.</h2>
                  </Box>
                  <p style={{paddingLeft: '25px', paddingRight:'25px',fontSize:'14px'}} className="centerText">Si tiene alguna duda sobre LACChain EOSIO diríjase a <a href="/docs/eosio">nuestra documentación</a>!</p>
                </Box>
              </Box>
            </Box>
        </Box>
      }
    </Layout>
  )
}

export default NotFound