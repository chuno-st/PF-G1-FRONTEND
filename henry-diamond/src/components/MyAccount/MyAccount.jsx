import React from 'react';
import { Avatar, Grid, IconButton, Typography } from '@material-ui/core'
import Footer from "../Footer/Footer";
import { ThemeProvider } from "@material-ui/core"
import { createTheme } from "@material-ui/core";
import NavMyAccount from './NavMyAccount';
import { useAuth0 } from "@auth0/auth0-react";
import {Box, CssBaseline, Button} from '@material-ui/core';
import CrearUserAddres from '../UserInfo/CrearUserAddres';

import NavTwo from '../Nav/NavTwo'
// import UserAddressForm from '../UserInfo/UserAddressForm';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getAllSales } from '../../actions/actions';

import { Link  } from 'react-router-dom';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import LocalShippingIcon from '@material-ui/icons/LocalShipping';



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

 
  useEffect(() => {
    dispatch(getAllSales(user.sub))
  }, [])


return (
 <React.Fragment>
  <ThemeProvider theme={theme}>
    <CssBaseline />
      <Grid container>
        <Grid item xs={12}>
          <NavTwo/>              
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
          <Typography display='display' variant='h5'>Mis Datos</Typography>

          <Typography display='display' variant='subtitle2'>
            {user.nickname} 
            </Typography>
            <Typography display='display' variant='subtitle2'>
            {user.email} 
            </Typography>
           


          <Grid container xs={12} direction='row-reverse'>
              <Box 
              textAlign='center'
              border={1}
              borderColor='lightBlue'
              >
              <Link to="/formpage" size='small' className='link'>
                <Button variant='outlined' 
                startIcon = {<LocalShippingIcon />}
                > Datos Envío </Button>
              </Link>
              </Box>
          </Grid>
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

          <Typography display='display' variant='h5'>Seguir Comprando?</Typography> 
          <Box p={7}>
          <Link to="/cart" size='small' className='link'>
                    
                    <Button
                        size='small'
                        variant='outlined'
                        startIcon= {<ShoppingCartIcon />}
                    > Mi Carrito</Button>
        </Link>
        </Box>
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
                    {/* <Typography display='display' variant='h6'>Cantidad: </Typography><p>{e.quantity[0]}</p> */}
                    <Typography display='display' variant='h6'>Cuota:</Typography><p>${e.monto} - Total: ${e.montoTotal}</p>
                    {console.log(e.items, 'obj item')}
                
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