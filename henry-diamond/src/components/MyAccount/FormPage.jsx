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
      <Grid container>
        <Grid item xs={12}>
          <NavMyAccount/>              
        </Grid>
            <Grid item xs={12}>
                  <Box 
                    bgcolor='#e0e0e0'
                    pt={11}
                    pb={1}
                    textAlign='center'
                    border={0}
                    boxShadow='4px 1px 8px #7a7a7a'
                  >
                  
                    <Link to="/myaccount" size='small' className='link'>
                    <Button
                        size='small'
                    > Mi Cuenta</Button>
                    </Link>
                    <Link to="/cart" size='small' className='link'>
                    <Button
                        size='small'
                    > Mi Carrito</Button>
                    </Link>

                  </Box>
                    <Box 
                        bgcolor='#e0e0e0'
                        pt={1}
                        align='center'
                        border={0}
                        boxShadow='4px 1px 8px #7a7a7a'>
                          <Typography><Avatar src={user.picture} variant='square'/> Bienvenid@, {user.name} ({user.email})</Typography>
                            
                    </Box>
            </Grid>
          <Grid item xs={12}
          justifyContent='flex-start'
          >
              <Box my={6} align='center'>
                    <CrearUserAddres/>
              </Box>
        </Grid>
      </Grid>
        <Grid item xs={12}>
            <Footer/>
        </Grid>  
      </ThemeProvider>
    </React.Fragment>
  );
}