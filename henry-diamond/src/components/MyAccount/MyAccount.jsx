import React from 'react';
import { Avatar, Grid, Typography } from '@material-ui/core'
import SearchAppBar from "../Nav/Nav";
import Footer from "../Footer/Footer";
import { ThemeProvider } from "@material-ui/core"
import { createTheme } from "@material-ui/core";
import { Link } from 'react-router-dom';
import NavMyAccount from './NavMyAccount';
import { useAuth0 } from "@auth0/auth0-react";
import './MyAccount.css';
import Divider from '@material-ui/core/Divider';
import {Box, CssBaseline, Button} from '@material-ui/core';


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

export default function MyAccount() {
  
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
                  bgcolor='orange'
                  pt={10}
                  textAlign='left'
                  border={1}
                  borderColor='black'
                  >
                  <Button
                  size='small'
                  variant='outlined'
                  >Home</Button>

                  <Button
                  variant='outlined'
                  size='small'
                  >Mi Cuenta</Button>
                  
                          <Typography>Bienvenido,<h3>{user.name}</h3></Typography>
                          <Avatar src={user.picture} variant='square'
                          ></Avatar>
                          <Typography>{user.email}</Typography>

                </Box>
            </Grid>
          <Grid item xs={6}
          justifyContent='flex-start'
          >
          <Box 
          bgcolor='pink'
          textAlign='left'
          p={10}
          border={1}
          borderColor='black'
          >
          <h2>Mis Datos</h2>
          <h5>
              nickName <br/>
              e-mail<br/>
              password
          </h5>
        </Box>
        </Grid>
        <Grid item xs={6}>
          <Box 
          bgcolor='pink'
          p={10}
          border={1}
          borderColor='black'
          >
          <h2>Mi compra</h2>

              <h5>
              Redirección al carrito <br/>
              Detail<br/>
              Acceso de DETAIL
              </h5>

        </Box>
        </Grid>
      </Grid>
      <Grid item xs={12}
      alignItems='flex-start'
      >
          <Box 
          bgcolor='lightBlue'
          p={7}
          border={1}
          borderColor='black'
          textAlign='left'
          >
          Historial de Pedidos
        </Box>
        </Grid>
        <Grid item xs={12}>
            <Footer></Footer>
        </Grid>
               
      </ThemeProvider>
    </React.Fragment>
  );
}
