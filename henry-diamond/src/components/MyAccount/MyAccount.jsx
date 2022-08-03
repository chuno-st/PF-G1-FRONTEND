import React from 'react';
import { Avatar, Grid, Typography } from '@material-ui/core'
import Footer from "../Footer/Footer";
import { ThemeProvider } from "@material-ui/core"
import { createTheme } from "@material-ui/core";
import NavMyAccount from './NavMyAccount';
import { useAuth0 } from "@auth0/auth0-react";
import {Box, CssBaseline, Button} from '@material-ui/core';
// import UserAddressForm from '../UserInfo/UserAddressForm';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getAllSales } from '../../actions/actions';
// import CurrentSale from './CurrentSale'
// import CrearUserAddres from '../UserInfo/CrearUserAddres';
// import ModalCreateInfoUser from '../MyAccount/ModalCreateInfoUser'
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
  const dispatch = useDispatch();
  const { user, isAuthenticated, isLoading } = useAuth0();
  const sales = useSelector(state => state.salesProduct)

  useEffect(() => {
    dispatch(getAllSales(user.sub))
  }, [])


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
                  pt={12}
                  pb={2}
                  textAlign='center'
                  boxShadow='4px 1px 8px #7a7a7a'
                  >
                  <Typography display='display' variant='h5'>Mi Cuenta</Typography>
                  </Box>
                  <Box
                  textAlign='center'
                  py={2}
                  >
                          <Typography><h3>¡ Hola ! {(user.name).toUpperCase()}</h3></Typography>
                          <Box
                          // paddingX={80}
                          textAlign='center'
                          >
                          <Button>
                          <Avatar src={user.picture} 
                          variant='circle'
                          ></Avatar>
                          </Button>
                          </Box>
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
          <Grid container xs={12} direction='row-reverse'>
          <Box 
         
          my={2} 
          align='right'>
              <Link to="/formpage" size='small' className='link'>
                <Button variant='outlined' color="secondary"> Datos para el envio </Button>
              </Link>
              </Box>
          </Grid>
          </Box>
         
           {/* <UserAddressForm/> */}

        </Grid>
        <Grid item xs={6}>
          <Box 
          // bgcolor='pink'
          p={10}
          textAlign='Center'
          >
          <Typography display='display' variant='h5'>Mi Compra</Typography>

              {/* <CurrentSale /> */}

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