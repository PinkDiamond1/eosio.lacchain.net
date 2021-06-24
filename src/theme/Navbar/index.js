import React, { useLayoutEffect, useState } from "react"
import clsx from "clsx"
import useBaseUrl from "@docusaurus/useBaseUrl"
import PropTypes from 'prop-types'
import useScrollTrigger from '@material-ui/core/useScrollTrigger'
import Box from '@material-ui/core/Box'
import Link from '@material-ui/core/Link'
import Drawer from '@material-ui/core/Drawer'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
import List from '@material-ui/core/List'
import { useLocation } from 'react-router-dom'
import Translate, {translate} from '@docusaurus/Translate'
import SearchBar from '@theme/SearchBar'

import CustomListItem from '../../pages/components/CustomListItem'
import global from '../../../static/img/icons/navbar/global.png'

const PATHS = [
  {
    dropDown:false,
    path: "/",
    espPath: "/",
    label: 
      translate({
        id: 'navbar.home',
        message: 'Inicio'
      }),
    target: '_self',
    icon: 'img/icons/navbar/home.png'
  },
  {
    dropDown:false,
    path: "/about",
    espPath: "/about",
    label: 
      translate({
        id: 'navbar.about',
        message: 'LACChain EOSIO'
      }),
    target: '_self',
    icon: 'img/icons/navbar/about.png'
  },
  {
    dropDown:true,
    path: "/",
    espPath: "/",
    label: 
      translate({
        id: 'navbar.tools',
        message: 'Herramientas'
      }),
    target: '_self',
    markerSize: "210px",
    subPaths: 
    [
      {
        path: "https://eosio-explorer.lacchain.net/",
        espPath: "https://eosio-explorer.lacchain.net/",
        label: 
          translate({
            id: 'homepage.blockExplorerTitle',
            message: 'Explorador de bloques'
          }),
        target: '_blank',
        icon: 'img/icons/navbar/block-explorer.png'
      },
      {
        path: "https://lacchain.eosio.online/",
        espPath: "https://lacchain.eosio.online/",
        label: 
          translate({
            id: 'footer.networkDashboard',
            message: 'Monitor de red'
          }),
        target: '_blank',
        icon: 'img/icons/navbar/network-dashboard.png'
      }
    ]
  },
  {
    dropDown:false,
    path: "/docs/eosio",
    espPath: "/docs/eosio",
    label: 
      translate({
        id: 'footer.documentation',
        message: 'Documentación'
      }),
    target: '_self',
    icon: 'img/icons/navbar/learning.png'
  },
  {
    dropDown:false,
    path: "/contact-us",
    espPath: "/contact-us",
    label: 
      translate({
        id: 'footer.contactUs',
        message: 'Contáctenos'
      }),
    target: '_self',
    icon: 'img/icons/navbar/contact.png'
  }
]

const Navbar = ({isMobile, isDesktop}) => {
  const [isOpen, setIsOpen] = useState(false)
  const location = useLocation()
  const [pathname, setPathname] = useState("")
  const trigger = useScrollTrigger({disableHysteresis:true})
  
  useLayoutEffect(() => {
    const pathname = window.location.pathname
    setPathname(pathname)
  }, [])

  const handlerDrawer = () =>{
    setIsOpen(!isOpen)
  }

  const isCurrentPath = (subPaths) =>{
    let res = false
    subPaths.map((item) => {
      if(pathname === item.path) res=true
    })
    return res
  }

  const translateSite = () => {
    var currentURL = window.location.href

    if(currentURL.includes('/en/'))
      window.open(`https://${window.location.hostname}${pathname.substring(3,)}`,'_self')
    else 
      window.open(`https://${window.location.hostname}/en${pathname}`,'_self')
  }

  const LanguagueSelector = () => {
    const [langMenuHandler, seLangMenuHandler] = useState(false)

    const handleClickMenuLang = () => {
      seLangMenuHandler(true)
    }
  
    const handleCloseMenuLang = () => {
      seLangMenuHandler(false)
    }

    const handleChangeLang = () => {
      seLangMenuHandler(false)
      translateSite()
    }

    const LangItem = ({label, handleClick, classN}) =>{
      return (
        <Box className="langItemBox" onClick={handleClick}>
          <span className={classN} style={{fontSize: '15px'}}>{label}</span>
        </Box>
      )
    }

    return (
      <>
        <Box
          style={{padding:'0', marginTop:'-6px'}}
        >
          <img src={global} style={{width:'40px'}}/>
        </Box>
        {true && (
          <Box className="boxLanguagesSelector" onMouseLeave={handleCloseMenuLang}>
            <LangItem
              label="EN"
              handleClick={handleChangeLang}
              classN={ window.location.href.includes('/en/') ? "langItemActive" : "langItem"}
            />
            <span style={{fontSize: '15px', padding: '5px'}}>|</span>
            <LangItem 
              label="ES"
              handleClick={handleChangeLang}
              classN={ window.location.href.includes('/en/') ? "langItem" : "langItemActive"}
            />
          </Box>
        )}
      </>
    )
  }

  return (
    <Box className={clsx("navBar",{["navBarScroll"]: (trigger || isMobile)})} >
      <Box className="menuWrapper">
        {isMobile && 
          <>
            <Box className="imgLogoBoxMobile">
              <a href={useBaseUrl("/")}>
                <img
                  className="imgLogoScroll"
                  src={useBaseUrl("img/logos/lacchain-eosio-logo.png")}
                  alt="LACChain EOSIO LOGO"
                />
              </a>
            </Box>
            <Box  className="btnDrawer">
              <IconButton onClick={handlerDrawer}>
                <MenuIcon  fontSize="large"/>
              </IconButton>
            </Box>
            <Drawer anchor={'right'} open={isOpen} onClose={handlerDrawer} >
              <Box className="drawerContent">
                <List>
                  <Box className="linkGruopBox">
                    <CustomListItem href={useBaseUrl(PATHS[0].path)} target={PATHS[0].target} label={PATHS[0].label} icon={PATHS[0].icon} isSelected={pathname===PATHS[0].path}/>
                    <CustomListItem href={useBaseUrl(PATHS[1].path)} target={PATHS[1].target} label={PATHS[1].label} icon={PATHS[1].icon} isSelected={pathname===PATHS[1].path}/>
                  </Box>
                  <Box className="linkGruopBox">
                    <span className="linkGruopLabel">
                      <Translate id='footer.devTools'>
                        HERRAMIENTAS
                      </Translate>
                    </span>
                    <CustomListItem href={useBaseUrl(PATHS[2].subPaths[0].path)} target={PATHS[2].subPaths[0].target} label={PATHS[2].subPaths[0].label} icon={PATHS[2].subPaths[0].icon} isSelected={pathname===PATHS[2].subPaths[0].path}/>
                    <CustomListItem href={useBaseUrl(PATHS[2].subPaths[1].path)} target={PATHS[2].subPaths[1].target} label={PATHS[2].subPaths[1].label} icon={PATHS[2].subPaths[1].icon} isSelected={pathname===PATHS[2].subPaths[1].path}/>
                  </Box>
                  <Box className="linkGruopBox">
                    <span className="linkGruopLabel">
                      <Translate id='footer.learning'>
                        APRENDER
                      </Translate>
                    </span>
                    <CustomListItem href={useBaseUrl(PATHS[3].path)} target={PATHS[3].target} label={PATHS[3].label} icon={PATHS[3].icon} isSelected={pathname===PATHS[3].path}/>
                  </Box>
                  <Box className="linkGruopBox">
                    <span className="linkGruopLabel">
                      <Translate id='navbar.contact'>
                        CONTACTO
                      </Translate>
                    </span>
                    <CustomListItem href={useBaseUrl(PATHS[4].path)} target={PATHS[4].target} label={PATHS[4].label} icon={PATHS[4].icon} isSelected={pathname===PATHS[4].path}/>
                  </Box>
                  <Box className="linkGruopBox">
                    <span className="linkGruopLabel">
                      <Translate id='navbar.options'>
                        OPCIONES
                      </Translate>
                    </span>
                    <CustomListItem
                      onClick={translateSite}
                      label={
                        translate({
                          id: 'translate.language',
                          message: 'English website'
                        })}
                      icon={'img/icons/navbar/global.png'}
                      isSelected={false}/>
                  </Box>
                </List>
              </Box>
            </Drawer>
          </>}
        {isDesktop && 
          <>
            <Box className="boxLeft">
              <Box  className="imgLogoBox">
                <a href={useBaseUrl("/")}>
                  <img
                    className={clsx("imgLogo",{["imgLogoScroll"]: trigger})}
                    src={useBaseUrl("img/logos/lacchain-eosio-logo.png")}
                    alt="LACChain EOSIO LOGO"
                  />
                </a>
              </Box>
            </Box>
            <Box className="boxRight"> 
              <Box className={"boxLanguages"}>
                <LanguagueSelector style={{zIndex: '100px'}}/>
              </Box>
              <Box className="boxMenuItems" id="boxMenuItems">
                {PATHS.map((item) => (
                  <Box key={item.label}>
                    {!item.dropDown && 
                      <Link className="navBarItemTab" href={useBaseUrl(item.path)} target={item.target} key={item.label} style={{textDecoration:'none'}}>
                        <Box className="menuItem">  
                          <h5 className={clsx("link",{["linkActive"]: pathname === item.path})}>{item.label}</h5>                  
                        </Box>
                      </Link>
                    }
                    {item.dropDown && 
                      <Box tabIndex="0" className={clsx("menuItem","navBarItemTab")} >  
                          <h5 className={clsx("link",{["linkActive"]: isCurrentPath(item.subPaths)})}>{item.label}</h5>
                        <Box className={clsx("dropDownMenu",{["dropDownMenuActive"]: isCurrentPath(item.subPaths)})} style={{width:item.markerSize}}>
                            {item.subPaths.map((subItem) => (
                              <Link className="navBarItemTab" href={useBaseUrl(subItem.path)} target={subItem.target} key={subItem.label} style={{textDecoration:'none'}}>
                                <Box>  
                                  <h5 className={clsx("menuItemDrop",{["menuItemDropActive"]: pathname === subItem.path})}>{subItem.label}</h5>                  
                                </Box>
                              </Link>
                            ))}
                        </Box>                    
                      </Box>
                    }
                  </Box>
                ))}
                <Box style={{height:'60px', marginTop: '45px'}}>
                  <SearchBar/>
                </Box>
              </Box>
            </Box>
          </>
        }
      </Box>
    </Box> 
  )
}

Navbar.propTypes = {
  isDesktop:PropTypes.bool,
  isMobile:PropTypes.bool
}

export default Navbar
