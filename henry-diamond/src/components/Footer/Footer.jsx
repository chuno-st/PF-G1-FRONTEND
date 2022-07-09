import React from 'react'

import Container from '@mui/material/Container'

import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid'
import { Link } from 'react-router-dom';
import './Footer.css'



export default function Footer (){
    return(
        <footer>
              <Box bgcolor='ActiveBorder' color='white'>
                <Container>
                    <Grid container spacing={5}>
                        <Grid item xs={12} sm={4}>
                            <Box borderBottom={1}>Dev Team</Box>
                            <Box>
                                <Button variant='outlined'>
                                <Link to="/About" size='small'></Link>
                                About
                                </Button>
                            </Box>

                            <Box>
                                <Button variant='outlined' size='small'>
                                    <Link to="/"></Link>
                                Contact
                                </Button>
                            </Box>
                        </Grid>

                        <Grid item xs={12} sm={4}>
                            <Box borderBottom={1}>Account</Box>
                            <Box>
                                <Button variant='outlined'>
                                <Link to="/About" size='small'></Link>
                                Register
                                </Button>
                            </Box>

                            <Box>
                                <Button variant='outlined' size='small' className="Button">
                                    <Link to="/"></Link>
                                Log-in
                                </Button>
                            </Box>
                        </Grid>


                                
                          

                    </Grid>
                    <Box  textAlign='center' pt={{xs: 5, sm: 10}} pb={{xs:5, sm:0}}>
                        Henry Diamond &reg; {new Date().getFullYear()}
                    </Box>
                </Container>
            </Box>

        </footer>
          
        
)}