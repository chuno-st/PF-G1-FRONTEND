import * as React from 'react'

import Container from '@mui/material/Container'
import styles from './Footer.css'
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid'
import { Link } from 'react-router-dom';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import InstagramIcon from '@mui/icons-material/Instagram';
//import Link from '@mui/material/Link';
import CodeIcon from '@mui/icons-material/Code';



export default function Footer (){
    return(
        <footer className='footer'>
              <Box bgcolor='ActiveBorder' color='white'>
                <Container>
                    <Grid container spacing={5}>
                        <Grid item xs={12} sm={4}>
                            <Box borderBottom={1}>About</Box>
                            <Box paddingTop={1}>
                                <Link to="/About" size='small'>Dev Team</Link>
                                <CodeIcon fontSize='small'/>
                            </Box>

                            <Box>
                                <Link to="/">Contact us</Link>
                            </Box>
                        </Grid>

                        <Grid item xs={12} sm={4}>
                            <Box borderBottom={1}>Services</Box>
                            <Box paddingTop={1}>
                                <Link to="/" size='small'>Custom Products</Link>
                                
                            </Box>
                          
                        </Grid>


                        <Grid item xs={12} sm={4}>
                            <Box borderBottom={1} >Follow Us</Box>
                            <Box paddingTop={1}>
                                <Link to="/">Whatsapp</Link>
                                <WhatsAppIcon fontSize='small'/>
                            </Box>

                            <Box>
                             
                                <Link to="/" size='small'>Instagram</Link>
                                <InstagramIcon fontSize="small" />
                            </Box>

                          
                        </Grid>


                                
                          

                    </Grid>
                    <Box  textAlign='center' sx={{ minWidth: '100%' }} pt={{xs: 5, sm: 1}} pb={{sm:1}}  /* pb={{xs:3, sm:3}} */ bgcolor='black' className='rights'>
                        Henry Diamond -
                        All rights reserved &reg; {new Date().getFullYear()}
                    </Box>
                </Container>
            </Box>

        </footer>
          
        
)}