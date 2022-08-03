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
                  bgcolor='#e0e0e0'
                  pt={12}
                  textAlign='left'
                  border={0}
                  boxShadow='4px 1px 8px #7a7a7a'
                  >
                  <Button
                  size='small'
                  variant='outlined'
                  >Home</Button>

                  <Button
                  variant='outlined'
                  size='small'
                  >Mi Cuenta</Button>
                  </Box>
                  <Box>
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

          <Box 
          bgcolor='pink'
          textAlign='left'
          p={5}
          border={1}
          borderColor='black'
          >
            {/* <UserAddressForm/> */}

              {/* <ModalCreateInfoUser size='small' style={{ overflow: 'true'}}>  */}
              <Box my={2} align='center'>
              <Link to="/formpage" size='small' className='link'>
                <Button> Datos para el envio </Button>
              </Link>
              </Box>
              {/* </ModalCreateInfoUser>  */}
          </Box>
          

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