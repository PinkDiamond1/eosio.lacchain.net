import React, { useState } from "react"
import clsx from "clsx"
import Layout from "@theme/Layout"
import Box from '@material-ui/core/Box'
import Grid from '@material-ui/core/Grid'
import InputBase from '@material-ui/core/InputBase'
import Snackbar from '@material-ui/core/Snackbar'
import Alert from '@material-ui/lab/Alert'
import { withStyles } from '@material-ui/core/styles'
import { useMediaQuery } from 'react-responsive'
import ReCAPTCHA from "react-google-recaptcha"
import CircularProgress from '@material-ui/core/CircularProgress'
import Translate, {translate} from '@docusaurus/Translate'

const MetaData={
  title:"LACChain: Contáctenos",
  description:"Pregúntenos sobre la red LACChain EOSIO.",
  img:"img/logos/lacchain-eosio-logo.png",
  hrefLangPath: ""
}

const GenericInput = withStyles({
  root: {
      width: '100%',
      padding:'10px',
      border: 'solid 1px gray',
  },
  input:{
      fontFamily: 'Lato',
      fontSize: 19,
      fontWeight: 'normal',
      '&:-webkit-autofill': {
          transitionDelay: '9999s',
          transitionProperty: 'background-color, color',
      },
  },
  focused:{
      border: 'solid 1px #5484b3'
  }
})((props) => <InputBase {...props} />)

const ContactForms = () => {
  const isMobile = useMediaQuery( {query:'(max-width: 960px)'} )
  const isDesktop = useMediaQuery( {query:'(min-width: 960px)'} )
  const [resultsSection, setResultsSection] = useState(false)
  const ContactForm = () =>{
    const [errorMessage, setErrorMessage] = useState(false)
    const [recaptchaValue, setRecaptchaValue] = useState(false)
    const [submitLoading, setSubmitLoading] = useState(false)
    const [contactForm, setContactForm] = useState({
      email: '',
      firstName: '',
      lastName: '',
      companyName: '',
      reason: '',
      additionalComments: ''
    })

    const handleSetField = (field, value) => {
      setContactForm({...contactForm, [field]: value })
    }

    const handleCloseErrorMessage = () =>{
      setErrorMessage(false)
    }

    const validateEmail = (email) => {
      const regex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
      return regex.test(email)
    }

    return(
      <Box>
        <form noValidate> 
          <Grid container spacing={2}> 
            <Grid item xs={12} md={6}>
              <label htmlFor="firstName_contact">
                <Translate id="contact.name">
                  Nombre
                </Translate>{' *'}
              </label>
              <Box className="inputFormBox">
                <GenericInput 
                  id="firstName_contact" 
                  value={contactForm.firstName || ''}  
                  onChange={(event) => handleSetField('firstName', event.target.value)} 
                  required
                />
              </Box>
            </Grid>
            <Grid item xs={12} md={6}>
              <label htmlFor="lastName_contact">
                <Translate id="contact.lastName">
                  Apellido
                </Translate>{' *'}
                </label>
              <Box className="inputFormBox">
                <GenericInput 
                  id="lastName_contact" 
                  value={contactForm.lastName || ''}  
                  onChange={(event) => handleSetField('lastName', event.target.value)} 
                  required
                />
              </Box>
            </Grid>
            <Grid item xs={12} md={6}>
              <label htmlFor="email_contact">
                Email *
              </label>
              <Box className="inputFormBox">
                <GenericInput 
                  id="email_contact" 
                  value={contactForm.email || ''}  
                  onChange={(event) => handleSetField('email', event.target.value)} 
                  required
                />
              </Box>
            </Grid>
            <Grid item xs={12} md={6}>
              <label htmlFor="companyName_contact">
                <Translate id="contact.companyName">
                  Organización o compañía
                </Translate>
              </label>
              <Box className="inputFormBox">
                  <GenericInput 
                    id="companyName_contact" 
                    value={contactForm.companyName || ''}  
                    onChange={(event) => handleSetField('companyName', event.target.value)} 
                    required
                  />
              </Box>
            </Grid>
            <Grid item xs={12} md={6}>
              <label htmlFor="additionalComments_contact">
                <Translate id="contact.reason">
                  ¿Por qué nos está contactando?
                </Translate>
              </label>
              <Box className="inputFormBox">
                <select
                  style={{width:'100%', height:'60px', fontSize:'16px'}}
                  name="reason"
                  onChange={(event) => handleSetField('reason', event.target.value)}
                >
                  <option 
                    value={translate({
                      id: 'contact.wantAccount',
                      message: 'Quiero crear una cuenta'
                    })}
                  >
                    {translate({
                      id: 'contact.wantAccount',
                      message: 'Quiero crear una cuenta'
                    })}
                  </option>
                  <option
                    value={translate({
                      id: 'contact.haveQuestions',
                      message: 'Tengo preguntas sobre LACChain EOSIO'
                    })}
                  >
                    {translate({
                      id: 'contact.haveQuestions',
                      message: 'Tengo preguntas sobre LACChain EOSIO'
                    })}
                  </option>
                  <option 
                    value={translate({
                      id: 'contact.wantContribute',
                      message: 'Quiero contribuir'
                    })}
                    selected
                  >
                    {translate({
                      id: 'contact.wantContribute',
                      message: 'Quiero contribuir'
                    })}
                  </option>
                </select>
              </Box>
            </Grid>
            <Grid item xs={12} md={6}>
              <label htmlFor="additionalComments_contact">
                <Translate id="contact.additionalComments">
                  Comentarios adicionales
                </Translate>
              </label>
              <Box className="inputFormBox">
                <GenericInput 
                  id="additionalComments_contact" 
                  value={contactForm.additionalComments || ''}  
                  onChange={(event) => handleSetField('additionalComments', event.target.value)}
                  multiline
                  rows={2}
                />
              </Box>
            </Grid>
            <Grid item xs={12} md={12}>
              <p>
                <Translate id="contact.useInformation">
                  Respetamos su privacidad. No compartiremos ninguna
                  información de contacto y solo la usaremos para
                  comunicarnos con usted acerca de nuestros servicios.
                  Puede darse de baja de estas comunicaciones en cualquier momento.
                </Translate>
              </p>
            </Grid>
            <Grid item xs={12} md={12}>
              <ReCAPTCHA
                sitekey={'dsdsdsd'}
                onChange={(value) => setRecaptchaValue(value)}
              />
            </Grid>
            <Grid item xs={12} md={12}>
              <Box className={isMobile ? "centerBox" : ""}>
                {submitLoading && 
                  <CircularProgress style={{color:'#5484B3'}}/>
                }
                {!submitLoading && 
                  <input
                    type="submit"
                    className="buttonPrimary"
                    value={
                      translate({
                        id: 'contact.submit',
                        message: 'Enviar'
                      })}
                    disabled={
                      !contactForm.firstName ||
                      !contactForm.lastName ||
                      !contactForm.email ||
                      !recaptchaValue ||
                      !validateEmail(contactForm.email)
                    }
                  />
                }
              </Box>
            </Grid>
            <Snackbar open={errorMessage} autoHideDuration={4000} onClose={handleCloseErrorMessage}>
              <Alert severity="error">¡Algo pasó! Inténtalo de nuevo</Alert>
            </Snackbar>
          </Grid>
        </form>
      </Box>
    )
  }

  return(
    <Layout
      title={MetaData.title}
      description={MetaData.description}
      image={MetaData.img}
      hrefLangPath={MetaData.hrefLangPath}
    >
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
            {!resultsSection && 
              <Box className="contactFormBox">
                <Box className="spacingBox">
                  <p>
                    <Translate id="contact.text">
                      ¿Tiene preguntas o ya tiene todo listo para crear su cuenta y comenzar a usar LACChain EOSIO?
                    </Translate>
                  </p>
                </Box>
                <ContactForm />
              </Box>
            }
            {resultsSection && 
              <Box className="contactFormBox" style={{height:'120px'}}>
                <p>
                  <Translate id="contact.resultText">
                    Gracias por contactar a LACChain EOSIO. Te responderemos a la brevedad
                  </Translate>
                </p>
              </Box>
            }
          </Box>
        </Box>
      }
      {isMobile && 
        <Box className="sectionHeroMobile">
          <Box className="h3Box">
            <h1>Contáctenos</h1>
          </Box>
          {!resultsSection && 
            <Box className="contactFormBox">
              <Box className="spacingBox">
                <p style={{padding:0}}>
                  <Translate id="contact.text">
                    ¿Tiene preguntas o ya tiene todo listo para crear su cuenta y comenzar a usar LACChain EOSIO?
                  </Translate>
                </p>
              </Box>
              <ContactForm />
            </Box>
          }
          {resultsSection && 
            <Box className="contactFormBox">
              <p style={{padding:0}}>
                <Translate id="contact.resultText">
                  Gracias por contactar a LACChain EOSIO. Te responderemos a la brevedad
                </Translate>
              </p>
            </Box>
          }
        </Box>
      }
    </Layout>
  )
}

export default ContactForms