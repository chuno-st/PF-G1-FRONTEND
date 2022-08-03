import * as React from 'react'
import Container from '@mui/material/Container'
import styles from './Footer.css' //! no sacar le da estilo a los <Link/>
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid'
import { Link  } from 'react-router-dom';
import InstagramIcon from '@mui/icons-material/Instagram';
import LogoMercadopago from '../LogoMercadoPago/LogoMercadoPago'
import CodeIcon from '@mui/icons-material/Code';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import { Typography } from '@material-ui/core';



export default function Footer (){
    return(
    <Box bgcolor='ActiveBorder' color='white' className='container' sx={{
        margin:0,
        hight: "100%",
        display: 'flex',
        borderBottom: 0,
        position: 'relative',
        color: 'white',
        textDecoration: 'inherit'
    }}>
        <Container className='container'>
            <Grid container spacing={5} mt={0}>
                        <Grid item xs={12} sm={4} >
                            <Box borderBottom={1}>Sobre Nosotros</Box>
                            <Box paddingTop={1} /* className='itemColumn' */ sx={{
                                justifyContent: 'space-between',
                                display: 'flex'
                            }}>
                                <Link to="/About" size='small' className='link'>Equipo de desarrollo</Link>
                                <CodeIcon fontSize='small' sx={{
                                    flex: 'display',
                                    flexDirection:'row-reverse'
                                }}/>
                            </Box>

                            
                        </Grid>

                        <Grid item xs={12} sm={4}>
                            <Box borderBottom={1}>Medios de pago</Box>

                                <Button href='https://www.mercadopago.com.ar/ayuda/medios-de-pago-vendedores_221' target='_blank'>
                                    <Box  >
                                        <LogoMercadopago/>  
                                    </Box>
                                </Button>
                        </Grid>


                        <Grid item xs={12} sm={4}>
                            <Box borderBottom={1} >Contactanos</Box>
                            <Box paddingTop={1} sx={{
                                justifyContent: 'space-between',
                                display: 'flex'
                            }}>
                                <a href='mailto:henrydiamons@gmail.com?' className='link'>E-mail</a>

                                <a href='mailto:henrydiamons@gmail.com?' className='link'>
                                    <MailOutlineIcon fontSize='small'/>
                                </a>
                            </Box>

                            <Box className='itemColumn'sx={{
                                justifyContent: 'space-between',
                                display: 'flex'
                            }}>
                             
                                <Link to="/" size='small' className='link'>Instagram</Link>
                                <InstagramIcon fontSize="small" className='icon' />
                            </Box>

                          
                        </Grid>


                                
                          

                    </Grid>
                    <Box  className='rights' sx={{
                        mb:0,
                        display:'flex',
                        justifyContent: 'center'
                        
                    }}>
                        <p className='diamond'>Henry Diamond </p> 
                        <p className='reserved'> - Marca Registrada &reg; {new Date().getFullYear()}</p>
                    </Box>
                </Container>
            </Box>

        
        
)}