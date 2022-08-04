import React, {useState} from "react";
import {useSelector,useDispatch} from "react-redux";
import { useEffect } from "react";
import CardCart from "../CardCart/CardCart";
import { Button } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import { postCart } from "../../actions/actions";
import { addCart, getUser } from "../../actions/actions";
import {Box} from '@material-ui/core';

import { useAuth0 } from "@auth0/auth0-react";
import NavMyAccount from '../MyAccount/NavMyAccount';
import { ThemeProvider } from "@material-ui/core"
import { createTheme } from "@material-ui/core";
import { Grid } from "@mui/material";
import Footer from "../Footer/Footer";
import { useNavigate, Redirect } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles'
import swal from 'sweetalert'
import NavTwo from '../Nav/NavTwo'



const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: "2 rem",
  },
}));


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


export default function ShoppingCart(){

 

    const { user,isAuthenticated } = useAuth0();
    const dispatch = useDispatch()
    const link = useSelector(state => state.Cart)
    const Navigate = useNavigate()
    const productos = useSelector(state => state.shoppingCart)
    // const subTotal = productos[0].map((producto)=>producto.price*producto.cantidad)
    const info = useSelector(state => state.userInfo)
    console.log(info)


    if(link.length>0) {
        console.log(link)
        window.location = `${link}` 
    }
    console.log(productos[0])
    const handlerSubmit = () =>{
      if (isAuthenticated && info.calle){
        dispatch(postCart(productos, user.sub))
        .then(()=>productos[0].map((producto)=>{ return localStorage.removeItem(producto.product_id)}))
      } else if (isAuthenticated && !info.calle ) {
        Navigate('/formpage')

      }else{
        swal({
          title: "Error",
          text: "Por favor inicia sesión para poder realizar la compra",
          icon: "error",
          button: "Aceptar",
        });
    }
  }
    useEffect(() => {
      dispatch(addCart())
      if(isAuthenticated ){
        dispatch(getUser(user.sub))
      }
      
    }, [dispatch]);


    
    const handlesubtotal=()=>{
      if(productos.length){
       let subTotal = productos[0].map((producto)=>producto.price*producto.cantidad)
      return subTotal.reduce( (acc,producto) =>acc+producto,0)
      }else return 0
    }

    return (
    <div>
      <ThemeProvider theme={theme}>
        <Grid container spacing={10}>
        <Grid item xs={12} sm={12} xl={12}>
          <NavTwo/>              
        </Grid>
        <Grid item xs={12}>
            <Typography align="center" gutterBottom variant='h4'>
              Mi Carrito de compras
            </Typography>
        </Grid>

        <Grid item xs={12} sm={8} md={9} container spacing={2}>

             {
             productos[0]?.map(producto => (
              <Grid item xs={12} sm={8} md={6} lg={4}>
                  <CardCart key={producto.id} item={producto}/> 
              </Grid>
              ))
            } 
  
        </Grid>
        <Grid item xs={12} sm={4} md={3} gutterBottom variant='h4'>
        <Typography align="center" gutterBottom variant='h4'>
            Mi Carrito:
          </Typography>
          
          <Typography align='center' gutterBottom variant='h5'> 
              Total de la compra: ${handlesubtotal()}
          </Typography>

          <Typography align='center' gutterBottom variant='h5'> 
            <Button variant="contained" color="primary" onClick={handlerSubmit} >Comprar</Button>
          </Typography>
        </Grid>
        </Grid>
        <Grid item xs={12}>
        <Box pt={20}>
            <Footer/>
        </Box>
        </Grid>
      </ThemeProvider>    
</div>)}

