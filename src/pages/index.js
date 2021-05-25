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

const MetaData={
  title:"Enterprise Blockchain Solutions | EOSIO",
  description:"EOS Costa Rica develops blockchain solutions. We deploy the EOSIO protocol to improve business efficiency, traceability, and transparency.",
  img:"img/metaImgBlack.png",
  hrefLangPath: "https://es.eoscostarica.io/"
}

const Home = () => {
  const isMobile = useMediaQuery( {query:'(max-width: 960px)'} )
  const isDesktop = useMediaQuery( {query:'(min-width: 960px)'} )
  const [expanded, setExpanded] = useState('panel_SoftDev')
  const history = useHistory()
  
  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded? panel: false)
  }
  
  useEffect(() => {
    handleChange('panel_SoftDev')
  }, [])

  const HeroSection = () => {
    return (
      <Box className="containerSec">
        {isDesktop && 
          <Box className="sectionHero">
          <Box className="titleBox">
            <h1>The EOSIO Blockchain Network for <br/> Latin America and the Caribbean</h1>
          </Box>
          <p>
            LACChain EOSIO enables organizations and developers to build blockchain 
            applications on the LACChain network powered by EOSIO technology.
          </p>
          <Box className="buttonBox" style={{justifyContent:'space-around', display:'flex'}}>
            <button className="buttonPrimary" onClick={() => history.push("/")} >Join the Network</button>
            <button className="buttonPrimary" onClick={() => history.push("/")} >Learn More</button>
          </Box>
        </Box>
        }
        {isMobile && 
          <Box className="sectionHeroMobile">
            <Box className="titleBox">
              <h1>The EOSIO Blockchain Network for <br/> Latin America and the Caribbean</h1>
            </Box>
            <p>
              LACChain EOSIO enables organizations and developers to build blockchain 
              applications on the LACChain network powered by EOSIO technology.
            </p>
            <Box className="buttonBoxMobile" style={{display:'grid'}}>
              <button className="buttonPrimary" onClick={() => history.push("/")} >Join the Network</button>
              <br/>
              <button className="buttonPrimary" onClick={() => history.push("/")} >Learn More</button>
            </Box>
          </Box>
      }
      </Box>
    )
  } 

  const IconSection = () => {
    return (
      <Box className="containerSec">
        <Box className={clsx("section",{["sectionPadding"]: isMobile})}>
          <Grid container spacing={10}>
            <Grid item xs={12} md={4}>
              <Box className="centerBox" style={{marginBottom:'10px'}}>
                <img 
                  src={useBaseUrl("img/icons/list.png")}
                  style={{width:'80px', height:'80px', cursor:'pointer'}}
                  alt="Icono de lista"
                />
              </Box>
              <p>
                Build and test your blockchain applications and infrastructure.
              </p>
            </Grid>
            <Grid item xs={12} md={4}>
              <Box className="centerBox" style={{marginBottom:'10px'}}>
                <img
                  src={useBaseUrl("img/icons/book-shelf.png")}
                  style={{width:'80px', height:'80px', cursor:'pointer'}}
                  alt="Icono de libros"
                />
              </Box>
              <p>
                Learn about blockchain through compelling learning resources.
              </p>
            </Grid>
            <Grid item xs={12} md={4}>
              <Box className="centerBox" style={{marginBottom:'10px'}}>
                <img
                  src={useBaseUrl("img/icons/blockchain-technology.png")}
                  style={{width:'80px', height:'80px', cursor:'pointer'}}
                  alt="Icono de bloques"
                />
              </Box>
              <p>
                Visualize network data using the LACChain EOSIO dashboard
              </p>
            </Grid>
          </Grid>
        </Box>
      </Box>
    )
  }

  const DiscoverPowerful = () => {
    return (
      <Box className="containerSec">
        <Box className={clsx("section",{["sectionPadding"]: isMobile})}>
          <Grid container spacing={5}>
            <Grid item xs={12} md={6}>
              <Box className="titleBox">
                <h3>Discover the powerful combination of EOSIO performance and the LACChain framework</h3>
              </Box>
              <p>
                LACChain EOSIO deploys a public permissioned version of <a href="https://eos.io/" target="_blank"> EOSIO</a>
                , an open-source blockchain technology, that allows developers and organizations to
                test and build their decentralized applications and infrastructure.
              </p>
              <Box className={clsx('centerBox','buttonBox')}>
                <button className='buttonPrimary' onClick={() => history.push("/")} >See Projects</button>
              </Box>
            </Grid>
            {isDesktop && 
              <Grid item md={6}>
                <Box style={{paddingLeft:'120px', marginTop:'-50px'}}>
                  <img src="https://raw.githubusercontent.com/LatamLink/latamlink.io/master/static/images/mobile-previews-fake.png" alt="" />
                </Box>  
              </Grid>
            }
          </Grid>
        </Box>
      </Box>
    )
  }
  
  const AnEcosystem = () => {
    return (
      <Box className="containerSec">
        <Box className={clsx("section",{["sectionPadding"]: isMobile})}>
          <Grid container spacing={5}>
            {isDesktop && 
                <Grid item md={6}>
                  <Box style={{marginTop:'-50px'}} >
                    <img style={{width:'400px'}} src="https://raw.githubusercontent.com/LatamLink/eosio.lacchain.net/master/static/images/map-content-home.png" alt="" />
                  </Box>  
                </Grid>
              }
            <Grid item xs={12} md={6}>
              <Box className="titleBox">
                <h3>An ecosystem of key partners</h3>
              </Box>
              <p>
                LACChain EOSIO is supported by the <a href="https://www.lacchain.net/" target="_blank">LACChain </a>
                program of the IDB Lab (part of the Inter-American Development Bank)
                and incorporates a permissioning committee to ensure proper transparency
                and decentralization. 
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
                    <a className={clsx("noMarginsTop","socialMediaAnimation")} href="https://t.me/eoscr" target="_blank">
                      <LinkedInIcon style={{width:'45px', height:'45px', cursor:'pointer', color:'#159547'}}/>
                    </a>
                    <a className={clsx("noMarginsTop","socialMediaAnimation")} href="https://github.com/eoscostarica" target="_blank">
                      <GitHubIcon style={{width:'40px', height:'40px', cursor:'pointer', color:'#159547'}}/>
                    </a>
                  </Box>
                </Grid>
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
        <Box className="sectionNoPadding">
          <Box className="h3Box">
            <h3>Founding partners</h3>
          </Box>
          <Box>
            <Grid container justify='center' alignItems="center">
              <Grid style={{marginRight: isDesktop ? '25px' : '0', paddingTop:'10px'}} item xs={12} md={2}>
                <Box className="imgBoxLogos">
                  <a target="_blank" href="http://latamlink.io/">
                    <img
                      style={{width: isDesktop ? '480px': '200px'}}
                      className="oneGroupLogo"
                      alt="LACChain"
                      src="https://www.lacchain.net/assets/images/logo-lacchain-footer.png"
                    />
                  </a>
                </Box>
              </Grid>
              <Grid style={{marginRight: isDesktop ? '15px' : '0'}} item xs={12} md={2}>
                <Box className="imgBoxLogos">
                  <a target="_blank" href="https://www.edenia.com/">
                    <img
                      className="oneGroupLogo"
                      style={{width:'160px'}}
                      alt="EOS Costa Rica"
                      src="https://raw.githubusercontent.com/eoscostarica/eoscostarica.io/master/static/img/logos/eoscr-logo.png"
                    />
                  </a>
                </Box>
              </Grid>
              <Grid style={{marginRight: isDesktop ? '15px' : '0'}} item xs={12} md={2}>
                <Box className="imgBoxLogos">
                  <a target="_blank" href="https://eosurf.com/">
                    <img
                      style={{width: isDesktop ? '': '200px'}}
                      className="oneGroupLogo"
                      alt="EOS Argentina"
                      src="https://www.eosargentina.io/assets/img/navigation-logo.png"
                    />
                  </a>
                </Box>
              </Grid>
              <Grid style={{marginLeft: isDesktop ? '15px' : '0', marginRight: isDesktop ? '15px' : '0', paddingTop:'15px'}} item xs={12} md={2}>
                <Box className="imgBoxLogos">
                    <a target="_blank" href="https://ticoblockchain.cr/">
                      <img
                        style={{width:'170px'}}
                        className="oneGroupLogo"
                        alt="Block One"
                        src="https://res.cloudinary.com/crunchbase-production/image/upload/c_lpad,f_auto,q_auto:eco/mkiu15vsjtl2pgpoptsq"
                      />
                    </a>
                </Box>
              </Grid>
              <Grid style={{marginLeft: isDesktop ? '25px' : '0', marginRight: isDesktop ? '15px' : '0'}} item xs={12} md={2}>
                <Box className="imgBoxLogos">
                  <a target="_blank" href="https://ticoblockchain.cr/">
                    <img
                      style={{width: isDesktop ? '290': '210px'}}
                      className="oneGroupLogo"
                      alt="EOS Venezuela"
                      src="data:image/png;base64,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"
                    />
                  </a>
                </Box>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Box>
    );
  };

  const WhatLACChainEOSIO = () => {
    return (
      <Box className="containerSec">
        <Box className="sectionPaddingTop">
          <Box className="h3Box">
              <h3 style={{textAlign:'center'}}>What’s in LACChain EOSIO?</h3>
          </Box>
          <Box className="spacingBox">
            <Grid container spacing={10}>
              <Grid item xs={12} md={4}>
                <Box className="h3Box">
                  <h4>Multi-layered Network </h4>
                </Box>
                <p>
                  LACChain EOSIO is a three-layered network. The core network
                  comprises validator and interconnecting p2p nodes, while
                  validator p2p out, boot nodes, writer, and observer nodes
                  belong to the outer layers of the network.{" "}
                  <a href={useBaseUrl("/docs/topologia-red")} target="_blank">
                    Learn more about our network topology here
                  </a>
                </p>
              </Grid>
              <Grid item xs={12} md={4}>
                <Box className="h3Box">
                  <h4>Configurable Accounts</h4>
                </Box>
                <p>
                  LACChain EOSIO enables you to easily create an account
                  either as an end-user, partner, non-partner,
                  or an app or contract developer. As a LACChain EOSIO
                  user, you will be able to manage your account and private keys.{" "}
                  <a href={useBaseUrl("/docs/guias/llaves-privadas")} target="_blank">
                    Read more about LACChain EOSIO accounts
                  </a>
                </p>
              </Grid>
              <Grid item xs={12} md={4}>
                <Box className="h3Box">
                  <h4>Resource-distributed Model </h4>
                </Box>
                <p>
                  LACChain EOSIO enables users to deploy resources when
                  co-signing a transaction and a distribution model that
                  allows a flexible testing environment for all users.
                  Also, the support of the LACChain team is crucial to
                  maintaining the network running.{" "}
                  <a href={useBaseUrl("/docs/guias/obtener-recursos")} target="_blank">
                    See more about network resources
                  </a>
                </p>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Box>
    );
  };

  const AreYouReady = () => {
    return (
      <Box className="containerSec">
        <Box className="sectionPaddingTop">
          <Grid  justify="center" alignItems="center" container spacing={5}>
            <Grid item xs={12} md={8}>
              <Box className="boxFlexEnd">
                <h3 className="bannerStyle">Are you ready to start using LACChain EOSIO?</h3>
              </Box>
            </Grid>
            <Grid item xs={12} md={3}>
                <Box className="centerBox">
                  <button 
                    className="buttonPrimary" 
                    onClick={() => history.push("/contactenos")}
                  >
                    Start Now!
                  </button>
                </Box>
            </Grid>
          </Grid>
        </Box>
      </Box>
    );
  };

  const Tools = () => {
    return (
      <Box className="containerSec">
        <Box className="sectionPaddingTop">
          <Box >
            <Box className="titleBox">
              <h3>LACChain EOSIO Tools and Features</h3>
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
                  <h4>Network Monitor</h4>
                </Box>
                <p className="h3Box">
                  You can access a LACChain EOSIO network monitor to
                  visualize both "on-chain" and "off-chain" metrics
                  and network data.{" "}
                  <a href="https://monitor.latamlink.io" target="_blank">
                    Visit the Network Monitor
                  </a>
                </p>
              </Grid>
              <Grid md={1}/>
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
                  <h4>API Integrations</h4>
                </Box>
                <p className="h3Box">
                  We deploy <a href="https://dfuse.io/en/home/" target="_blank"> dfuse </a>
                  a robust blockchain API to stream real-time state
                  updates, conduct lightning-fast searches and provide
                  irreversible transaction guarantees. 
                </p>
              </Grid>
              <Grid md={1}/>
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
                  <h4>Block Explorer</h4>
                </Box>
                <p className="h3Box">
                  We installed <a href="https://eos.eosq.eosnation.io/" target="_blank"> eosq</a>, a 
                  block explorer that provides access to detailed, accurate,
                  actionable data about accounts, actions, validator nodes, and 
                  more.<a href="http://explorer.testnet.latamlink.io/" target="_blank"> Use our block explorer</a>.
                </p>
              </Grid>
              <Grid md={1}/>
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
                  <h4>Fast Nodes Generation</h4>
                </Box>
                <p className="h3Box">
                  LACChain EOSIO offers a command-line interface to interact
                  among the nodes and snapshots for nodes generation with
                  no need to sync from the genesis.{" "}
                  <a href={useBaseUrl("/docs/guias/instalacion-nodos")} target="_blank">Read more about nodes installation</a>.
                </p>
              </Grid>
              <Grid md={1}/>
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
                  <h4>Dapps Resources</h4>
                </Box>
                <p className="h3Box">
                  LACChain EOSIO provides a faucet to send resources to test
                  dapps (decentralized apps) in our testnet, and an app
                  developer boilerplate to create dapps within a local
                  environment.{" "}
                  <a href={useBaseUrl("/docs/guias/obtener-recursos")} target="_blank">Find here how to obtain network resources</a>.
                </p>
              </Grid>
              <Grid md={1}/>
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
                  <h4>Learning Resources</h4>
                </Box>
                <p className="h3Box">
                  We provide an ever-growing library of resources to learn about
                  blockchain technology, guides to start using LACChain EOSIO,
                  and tutorials to integrate wallets.{" "}
                  <a href={useBaseUrl("/docs/eosio")} target="_blank">See the documentation</a>.
                </p>
              </Grid>
              <Grid md={1}/>
            </Grid>
          </Box>
        </Box>
      </Box>
    );
  };

  const Roadmap = () => {
    return (
      <Box className="containerSec">
        <Box className="sectionPaddingTop">
          <Box className="titleBox">
            <h3 style={{textAlign:'center'}}>LACChain EOSIO Tools and Features</h3>
          </Box>
          <Box style={{width:'100%'}}>
            <img src={useBaseUrl('images/roadmapTest.png')} alt="" />
          </Box>
        </Box>
      </Box>
    );
  };

  const Projects  = () => {
    return (
      <Box className="containerSec">
        <Box className="sectionPadding">
          <Box className="titleBox">
            <h3>Projects in LACChain EOSIO</h3>
          </Box>
          <Box className="spacingBox">
              <Grid container spacing={10}>
                  <Grid item xs={12} md={3}>
                      <Box className="imgBoxLogos">
                          <a target="_blank" href="https://www.edenia.com/">
                              <img
                                  className="oneGroupLogo"
                                  alt="Edenia"
                                  src="https://raw.githubusercontent.com/eoscostarica/eoscostarica.io/b91c698cf650e5eccccc0b6d343a7df92ca27da1/static/img/logos/lifebank.svg"
                              />
                          </a>
                      </Box>
                  </Grid>
                  <Grid item xs={12} md={3}>
                      <Box className="imgBoxLogos">
                          <a target="_blank" href="https://eosurf.com/">
                              <img
                                  className="oneGroupLogo"
                                  alt="Eossurf"
                                  src="https://raw.githubusercontent.com/eoscostarica/eoscostarica.io/b91c698cf650e5eccccc0b6d343a7df92ca27da1/static/img/logos/lifebank.svg"
                              />
                          </a>
                      </Box>
                  </Grid>
                  <Grid item xs={12} md={3}>
                      <Box className="imgBoxLogos">
                          <a target="_blank" href="http://lifebank.io/">
                              <img
                                  className="oneGroupLogo"
                                  alt="LatamLink"
                                  src="https://raw.githubusercontent.com/eoscostarica/eoscostarica.io/b91c698cf650e5eccccc0b6d343a7df92ca27da1/static/img/logos/lifebank.svg"
                              />
                          </a>
                      </Box>
                  </Grid>
                  <Grid item xs={12} md={3}>
                      <Box className="imgBoxLogos">
                          <a target="_blank" href="https://ticoblockchain.cr/">
                              <img
                                  className="oneGroupLogo"
                                  alt="Ticoblockchain"
                                  src="https://raw.githubusercontent.com/eoscostarica/eoscostarica.io/b91c698cf650e5eccccc0b6d343a7df92ca27da1/static/img/logos/lifebank.svg"
                              />
                          </a>
                      </Box>
                  </Grid>
              </Grid>
            </Box>
        </Box>
      </Box>
    );
  };

  const CreateAccount = () => {
    return (
      <Box className="containerSec">
        <Box className="section">
          <Grid  justify="center" alignItems="center" container spacing={5}>
            <Grid item xs={12} md={9}>
              <Box className="boxFlexEnd">
                <h3 className="bannerStyle">Create your account and start using LACChain EOSIO.</h3>
              </Box>
            </Grid>
            <Grid item xs={12} md={3}>
                <Box className="centerBox">
                  <button 
                    className="buttonPrimary" 
                    onClick={() => history.push("/contactenos")}
                  >
                    Start Now!
                  </button>
                </Box>
            </Grid>
          </Grid>
        </Box>
      </Box>
    );
  };

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
          <WhatLACChainEOSIO/>
          <AreYouReady/>
          <Tools/>
          <Roadmap/>
          <Projects/>
          <CreateAccount/>
        </Box>
      }
      {isMobile && 
        <Box className="mainContainer">
          <HeroSection/>
          <IconSection/>
          <DiscoverPowerful/>
          <AnEcosystem/>
          <FoundingPartners/>
          <AreYouReady/>
          <Tools/>
          <Roadmap/>
          <CreateAccount/>
        </Box>
      }
    </Layout>
  );
};

export default Home;
