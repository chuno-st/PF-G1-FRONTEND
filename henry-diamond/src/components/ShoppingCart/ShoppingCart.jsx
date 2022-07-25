import {useState} from "react";
import {useSelector,useDispatch} from "react-redux";
import { useEffect } from "react";
import CardCart from "../CardCart/CardCart";
import NavMyAccount from '../MyAccount/NavMyAccount'
import { ThemeProvider } from "@material-ui/core"
import { createTheme } from "@material-ui/core";
import { Grid, Button} from "@mui/material";
import Footer from "../Footer/Footer";


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
   const miStorage = window.localStorage;
    let Productos = Object.values(miStorage)
    let objetos = Productos.map(producto => {return JSON.parse(producto)})

    return (
    <>
    <ThemeProvider theme={theme}>
        <NavMyAccount/>
        <Grid container xs={12} sm={8} md={6} lg={4}>
        {
        objetos.map(producto => {
            if (producto.hasOwnProperty('product_id')){
                console.log(producto)
                return <CardCart key={producto.product_id} item={producto}/>
            }else return
        })
        }
        </Grid>
        <Footer />
    </ThemeProvider>

    </>
)
}