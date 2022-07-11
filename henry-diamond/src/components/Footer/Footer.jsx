import * as React from 'react'

import Container from '@mui/material/Container'
import styles from './Footer.css'
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid'
import { Link  } from 'react-router-dom';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import InstagramIcon from '@mui/icons-material/Instagram';
//import Link from '@mui/material/Link';
import CodeIcon from '@mui/icons-material/Code';



export default function Footer (){
    return(
        <footer className='footer' width={"100%"}>
              <Box bgcolor='ActiveBorder' color='white' className='container'>
                <Container className='container'>
                    <Grid container spacing={5}>
                        <Grid item xs={12} sm={4}>
                            <Box borderBottom={1}>About</Box>
                            <Box paddingTop={1} className='itemColumn'>
                                <Link to="/About" size='small' className='link'>Dev Team</Link>
                                <CodeIcon fontSize='small'/>
                            </Box>

                            <Box className='itemColumn'>
                                <Link to="/" className='link'>Contact us</Link>
                            </Box>
                        </Grid>

                        <Grid item xs={12} sm={4}>
                            <Box borderBottom={1}>Services</Box>
                            <Box paddingTop={1} className='itemColumn'>
                                <Link to="/" size='small' className='link'>Custom Products</Link>
                                
                                
                            </Box>
                          
                        </Grid>


                        <Grid item xs={12} sm={4}>
                            <Box borderBottom={1} >Follow Us</Box>
                            <Box paddingTop={1} className='itemColumn'>
                                <Link to="/" className='link'>Whatsapp</Link>
                                <WhatsAppIcon fontSize='small'/>
                            </Box>

                            <Box className='itemColumn'>
                             
                                <Link to="/" size='small' className='link'>Instagram</Link>
                                <InstagramIcon fontSize="small" className='icon' />
                            </Box>

                          
                        </Grid>


                                
                          

                    </Grid>
                    <Box  className='rights' /* pt={{xs: 5, sm: 1}} pb={{sm:1}} */ /* bgcolor='black' */ >
                        <p className='diamond'>Henry Diamond </p> 
                        <p className='reserved'> - All rights reserved &reg; {new Date().getFullYear()}</p>
                    </Box>
                </Container>
            </Box>

        </footer>
          
        
)}