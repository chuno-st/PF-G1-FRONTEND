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



export default function Footer (){
    return(
        <footer >
              <Box bgcolor='ActiveBorder' color='white'>
                <Container>
                    <Grid container spacing={5}>
                        <Grid item xs={12} sm={4}>
                            <Box borderBottom={1}>About</Box>
                            <Box paddingTop={1}>
                                <Link to="/About" size='small'>Dev Team</Link>
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
                                <Link to="/" size='small' color='white'>Whatsapp</Link>
                                <InstagramIcon/>
                            </Box>

                            <Box>
                             
                                <Link to="/" size='small'>Instagram</Link>
                            </Box>

                          
                        </Grid>


                                
                          

                    </Grid>
                    <Box  textAlign='center' sx={{ width: 'auto' }} pt={{xs: 5, sm: 1}} pb={{sm:1}}  /* pb={{xs:3, sm:3}} */ bgcolor='black' className='rights'>
                        Henry Diamond -
                        All rights reserved &reg; {new Date().getFullYear()}
                    </Box>
                </Container>
            </Box>

        </footer>
          
        
)}