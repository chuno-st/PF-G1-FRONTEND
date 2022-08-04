import React from 'react';
import { Avatar, Grid, Typography } from '@material-ui/core'
import Footer from "../Footer/Footer";
import { ThemeProvider } from "@material-ui/core"
import { createTheme } from "@material-ui/core";
import NavMyAccount from './NavMyAccount';
import { useAuth0 } from "@auth0/auth0-react";
import {Box, CssBaseline, Button} from '@material-ui/core';
import CrearUserAddres from '../UserInfo/CrearUserAddres';
import ModalCreateInfoUser from '../MyAccount/ModalCreateInfoUser'
import { Link  } from 'react-router-dom';
import NavTwo from '../Nav/NavTwo'





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

export default function FormPage() {
  
  const { user, isAuthenticated, isLoading } = useAuth0();




return (
 <React.Fragment>
  <ThemeProvider theme={theme}>
    <CssBaseline />
      <Grid container direction='column'>
        <Grid item xs={12}>
          <NavTwo/>              
        </Grid>
            <Grid item>
                  <Box 
                    pt={15}
                    pb={1}
                    align='left'
                    p={10}
                  >
                  
                    <Link to="/myaccount" size='small' className='link'>
                      
                        <Button
                            size='small'
                            variant='outlined' 
                            color="secondary"
                            padding={2}
                          
                        > Mi Cuenta</Button>
                    
                    </Link>
                  
                    <Link to="/cart" size='small' className='link'>
                    
                    <Button
                        size='small'
                        variant='outlined' 
                        color="secondary"
                        
                    > Mi Carrito</Button>
                   
                    </Link>
                 
                  </Box>
                    <Box   
                      px={10}
                      align='left'
                      border={0}
                      >
                        <Box align='left' py={2} >
                            <Avatar src={user.picture} variant='square'/>
                        </Box> 
                    <Typography display='display' variant='h5'>
                      ¡Hola, {user.name}! 
                      </Typography>
                      <Typography display='display' variant='subtitle2'>
                        ({user.email})
                      </Typography>
                    </Box>
            </Grid>
          <Grid item xs={6}
          justifyContent='center'
          >
              <Box my={2} >
                    <CrearUserAddres/>
              </Box>
        </Grid>
      </Grid>
      </ThemeProvider>
        <Grid item xs={12}>
            <Footer/>
        </Grid>  
    </React.Fragment>
  );
}