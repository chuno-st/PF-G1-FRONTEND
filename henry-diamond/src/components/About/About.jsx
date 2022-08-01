import React from "react";
import NavMyAccount from "../MyAccount/NavMyAccount";
import Footer from "../Footer/Footer";
import { Box, Button } from "@material-ui/core";
import {CssBaseline} from '@material-ui/core';
import { makeStyles, createTheme, ThemeProvider } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import Avatar from '@material-ui/core/Avatar';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';



const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: "2 rem",
  },
}));


const theme = createTheme({
    palette: {
      primary:{
        main: '#e0e0e0'
      },
      
    },
    typography: {
        fontFamily: 'Roboto',
        fontWeightLight: 400,
        fontWeightRegular: 500,
        fontWeightMedium: 600,
        fontWeightBold: 700
    }
  })
export default function About () {
    
   
  return (
    <React.Fragment>
        <ThemeProvider theme={theme}>
          <CssBaseline />
            <Grid container>
                <Grid item xs={12}>
                  <NavMyAccount/>              
                </Grid>

                <Grid item xs={12}>
                  <Box bgcolor='#bdbdbd' boxShadow='4px 1px 8px #7a7a7a' mt={15} mb={3} mx={10} py={2} px={10}>
                    <Button>
                      <Avatar alt="Lautaro Ferreyra" src="https://ca.slack-edge.com/TPRS7H4PN-U02LGD01DR6-c716d884def6-512" />
                    </Button>
                    Lautaro Ferreyra:
                    <Button href={'https://github.com/FerreyraLautaro'} target='_blank'>
                      <GitHubIcon/>
                    </Button>      
                    <Button href={'https://www.linkedin.com/in/lautaro-ferreyra-6713201ba/'} target='_blank'>
                      <LinkedInIcon/>
                    </Button>    
                    <Button href={'https://wa.me/+543513348627'} target='_blank'>
                      <WhatsAppIcon/>
                    </Button>                  
                  </Box>
                </Grid>


                <Grid item xs={12}>
                  <Box bgcolor='#bdbdbd' boxShadow='4px 1px 8px #7a7a7a' my={2} mx={10} py={2} px={10}>
                    <Button>
                      <Avatar alt="Bruno Ismael Stauber" src="https://ca.slack-edge.com/TPRS7H4PN-U02M252TKTP-6c7093a77c96-512" />
                    </Button>
                    Bruno Ismael Stauber:
                    <Button href={'https://github.com/chuno-st'} target='_blank'>
                      <GitHubIcon/>
                    </Button>      
                    <Button href={'https://www.linkedin.com/in/brunostauber/'} target='_blank'>
                      <LinkedInIcon/>
                    </Button>
                    <Button href={'https://wa.me/+541127557410'} target='_blank'>
                      <WhatsAppIcon/>
                    </Button>     
                  </Box>
                </Grid>  

                <Grid item xs={12}>
                  <Box bgcolor='#bdbdbd' boxShadow='4px 1px 8px #7a7a7a' my={2} mx={10} py={2} px={10}>
                    <Button>
                      <Avatar alt="Sebastián David Engelstajn" src="https://ca.slack-edge.com/TPRS7H4PN-U02MUQM6N1E-294459a055c9-512" />
                    </Button>
                    Sebastián David Engelstajn:
                    <Button href={'https://github.com/lordW1lly'} target='_blank'>
                      <GitHubIcon/>
                    </Button>      
                    <Button href={'https://www.linkedin.com/in/sebasti%C3%A1n-d-engelstajn-4356271aa/'} target='_blank'>
                      <LinkedInIcon/>
                    </Button>
                    <Button href={'https://wa.me/+542616937264'} target='_blank'>
                      <WhatsAppIcon/>
                    </Button>     
                  </Box>             
                </Grid>

                <Grid item xs={12}>
                  <Box bgcolor='#bdbdbd' boxShadow='4px 1px 8px #7a7a7a' my={2} mx={10} py={2} px={10}>
                    <Button>
                      <Avatar alt="Ariel Agustin Lescano Gonzalez" src="https://ca.slack-edge.com/TPRS7H4PN-U02KC2PBUA3-99b2598e5c67-72" />
                    </Button>
                    Ariel Agustin Lescano Gonzalez:
                    <Button href={'https://github.com/Agustlescano'} target='_blank'>
                      <GitHubIcon/>
                    </Button>      
                    <Button href={'https://www.linkedin.com/in/agust%C3%ADn-lescano-199484223/'} target='_blank'>
                      <LinkedInIcon/>
                    </Button>
                    <Button href={'https://wa.me/+542216141010'} target='_blank'>
                      <WhatsAppIcon/>
                    </Button>     
                  </Box>             
                </Grid>

                <Grid item xs={12}>
                  <Box bgcolor='#bdbdbd' boxShadow='4px 1px 8px #7a7a7a' my={2} mx={10} py={2} px={10}>
                    <Button>
                      <Avatar alt="Carolina Castillo Andrada" src="https://ca.slack-edge.com/TPRS7H4PN-U02NESMFADV-cbd78582ff66-72" />
                    </Button>
                    Carolina Castillo Andrada:
                    <Button href={'https://github.com/Ccarit0'} target='_blank'>
                      <GitHubIcon/>
                    </Button>      
                    <Button href={'https://www.linkedin.com/in/carolina-castillo-andrada-088244238/'} target='_blank'>
                      <LinkedInIcon/>
                    </Button>
                    <Button href={'https://wa.me/+543804207268'} target='_blank'>
                      <WhatsAppIcon/>
                    </Button>     
                  </Box>             
                </Grid>

                <Grid item xs={12}>
                  <Box bgcolor='#bdbdbd' boxShadow='4px 1px 8px #7a7a7a' my={2} mx={10} py={2} px={10}>
                    <Button>
                      <Avatar alt="María Soledad Petrino" src="https://ca.slack-edge.com/TPRS7H4PN-U02MPR7RM88-f4e196896112-48" />
                    </Button>
                    María Soledad Petrino: 
                    <Button href={'https://github.com/soledadpetrino'} target='_blank'>
                      <GitHubIcon/>
                    </Button>      
                    <Button href={'https://www.linkedin.com/in/soledad-petrino/'} target='_blank'>
                      <LinkedInIcon/>
                    </Button>
                    <Button href={'https://wa.me/+543814018653'} target='_blank'>
                      <WhatsAppIcon/>
                    </Button>         
                  </Box>             
                </Grid>

                <Grid item xs={12}>
                  <Box bgcolor='#bdbdbd' boxShadow='4px 1px 8px #7a7a7a' my={2} mx={10} py={2} px={10}>
                    <Button>
                      <Avatar alt="Francisco Gabriel Siri" src="https://ca.slack-edge.com/TPRS7H4PN-U02KUUVAJE8-d1cbcb9974aa-512" />
                    </Button>
                    Francisco Gabriel Siri:
                    <Button href={'https://github.com/fransiri7'} target='_blank'>
                      <GitHubIcon/>
                    </Button>      
                    <Button href={''}>
                      <LinkedInIcon/>
                    </Button>
                    <Button href={'https://wa.me/+543446582613'} target='_blank'>
                      <WhatsAppIcon/>
                    </Button>     
                  </Box>             
                </Grid>

                




                <Grid item xs={12}>
                  <Footer></Footer>
                </Grid>




            </Grid>
        </ThemeProvider>
    </React.Fragment>


            
      
    );
  };
















