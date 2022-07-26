import React, {useState} from "react";
import {useSelector,useDispatch} from "react-redux";
import { useEffect } from "react";
import CardCart from "../CardCart/CardCart";
import { Button } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import { postCart } from "../../actions/actions";
import { useAuth0 } from "@auth0/auth0-react";
import NavMyAccount from '../MyAccount/NavMyAccount';
import { ThemeProvider } from "@material-ui/core"
import { createTheme } from "@material-ui/core";
import { Grid } from "@mui/material";
import Footer from "../Footer/Footer";
import { useNavigate, Redirect } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles'



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

  function FormRow() {
    return (
      <React.Fragment>
        
            {productos.map(producto => (
              <Grid item xs={12} sm={8} md={6} lg={4}>
                  <CardCart key={producto.id} item={producto}/> 
              </Grid>
              ))} 
      </React.Fragment>
    );
  }

    const { user } = useAuth0();

    const dispatch = useDispatch()
    const miStorage = window.localStorage;
    let Productos = Object.values(miStorage)
    let objetos = Productos.map(producto => {return JSON.parse(producto)})
    let productos = objetos.filter(producto => producto.hasOwnProperty('product_id'))
    const priceTotal= productos.reduce( (acc,producto) =>acc+producto.price)
    const subTotal = productos.map((producto)=>producto.price*producto.cantidad)
    const link = useSelector(state => state.Cart)
    const Navigate = useNavigate()

    if(link.length>0) {
        console.log(link)
        window.location = `${link}` 
    }

    const handlerSubmit = () =>{
      dispatch(postCart(productos, user.sub))
    }

    return (
    <div>
      <ThemeProvider theme={theme}>
        <Grid container spacing={3}>
        <Grid item xs={12} sm={12} xl={12}>
          <NavMyAccount/>              
        </Grid>
        <Grid item xs={12}>
          <Typography align="center" gutterBottom variant='h4'>
            Mi Carrito de compras
          </Typography>
        </Grid>
        <Grid item xs={12} sm={8} md={9} container spacing={2}>
          <FormRow />
        </Grid>
        <Grid item xs={12} sm={4} md={3} gutterBottom variant='h4'>
          <Typography align='center' gutterBottom variant='h5'> 
              Total de la compra: {subTotal.reduce( (acc,producto) =>acc+producto)}
          </Typography>

          <Typography align='center' gutterBottom variant='h5'> 
            <Button variant="contained" color="primary" onClick={handlerSubmit} >Comprar</Button>
          </Typography>
        </Grid>
        </Grid>
          <Footer />
      </ThemeProvider>    
</div>)}
   