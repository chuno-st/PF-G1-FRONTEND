import * as React from 'react'

import Container from '@mui/material/Container'
import styles from './Footer.css' //! no sacar le da estilo a los <Link/>
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid'
import { Link  } from 'react-router-dom';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import InstagramIcon from '@mui/icons-material/Instagram';

import CodeIcon from '@mui/icons-material/Code';




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

                            <Box className='itemColumn'>
                                <Link to="/" className='link'>Nuestro Contacto</Link>
                            </Box>
                        </Grid>

                        <Grid item xs={12} sm={4}>
                            <Box borderBottom={1}>Servicios</Box>
                            <Box paddingTop={1} className='itemColumn'>
                                <Link to="/" size='small' className='link'>Productos</Link>
                                               
                            </Box>
                          
                        </Grid>


                        <Grid item xs={12} sm={4}>
                            <Box borderBottom={1} >Seguinos</Box>
                            <Box paddingTop={1} sx={{
                                justifyContent: 'space-between',
                                display: 'flex'
                            }}>
                                <Link to="/" className='link'>Whatsapp</Link>
                                <WhatsAppIcon fontSize='small'/>
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