import React from 'react';
import { Avatar, Grid, Typography } from '@material-ui/core'
import Footer from "../Footer/Footer";
import { ThemeProvider } from "@material-ui/core"
import { createTheme } from "@material-ui/core";
import NavMyAccount from './NavMyAccount';
import { useAuth0 } from "@auth0/auth0-react";
import {Box, CssBaseline, Button} from '@material-ui/core';
import CrearUserAddres from '../UserInfo/CrearUserAddres';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getAllSales } from '../../actions/actions';
// import CurrentSale from './CurrentSale'
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
          // bgcolor='pink'
          textAlign='left'
          p={10}
          border={1}
          borderColor='lightBlue'
          >
          <h2>Mis Datos</h2>
          <h5>
              nickName <br/>
              e-mail<br/>
              password
          </h5>
          </Box>

          <Box 
          bgcolor='pink'
          textAlign='left'
          p={5}
          border={1}
          borderColor='black'
          >
              <Box my={2} align='center'>
              <Link to="/formpage" size='small' className='link'>
                <Button variant='outlined' color="secondary"> Datos para el envio </Button>
              </Link>
              </Box>
          </Box>
          

        </Grid>
        <Grid item xs={6}>
          <Box 
          // bgcolor='pink'
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
        p={3}
        textAlign='Center'
        boxShadow='4px 1px 8px #7a7a7a'
        >

          <Typography display='display' variant='h5'>Historial de Compras</Typography>
        </Box>
        <Box
        //  bgcolor='lightBlue'
         borderBottom={1}
        >
          <Typography display='display' variant='subtitle1'>
          {
            sales.map(e => (
             <Box
             borderBottom={1}
             borderColor='red'
             boxShadow='4px 1px 8px #7a7a7a'
             >
                <Typography display='display' variant='h6'>Productos:</Typography> 
                    {(e.items).map(i => (
                      <a>{(i.title).toUpperCase()}, </a>
                    ))}
                    
                    {/* <p>Producto: {e.product_id}</p> */}
                    <Typography display='display' variant='h6'>Estado de compra:</Typography><p>{(e.status).toUpperCase()}</p>
                    <Typography display='display' variant='h6'>Fecha de compra:</Typography><p>{e.createdAt}</p>
                    <Typography display='display' variant='h6'>Cuota:</Typography><p>${e.monto} - Total: ${e.montoTotal}</p>
                    {console.log(e.items)}
                
              </Box>
            )
            
            )
          }
          </Typography>
        </Box>
        </Grid>
        <Grid item xs={12}>
            <Footer></Footer>
        </Grid>
               
      </ThemeProvider>
    </ React.Fragment>
  );
}