import {useState} from "react";
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

    const { user } = useAuth0();

    const dispatch = useDispatch()
    const miStorage = window.localStorage;
    let Productos = Object.values(miStorage)
    let objetos = Productos.map(producto => {return JSON.parse(producto)})
    let productos = objetos.filter(producto => producto.hasOwnProperty('product_id'))
    console.log(productos.reduce( (acc,producto) =>acc+producto.cantidad,0))
    const priceTotal= productos.reduce( (acc,producto) =>acc+producto.price,0)
    const subTotal = productos.map((producto)=>producto.price*producto.cantidad)

    const handlerSubmit = () =>{
        dispatch(postCart(productos, user.sub))
    }

    return (
    <>
    <ThemeProvider theme={theme}>

    <NavMyAccount />
        <Grid container 

            padding={12}
            direction="row"
            item
            sx={{ 
            maxWidth: 'auto',



              }}
            sm={6} 
            md={4}
            lg={3} 
            xl={2}
        >

                <Grid 
                    direction="column"
                >
        {
            productos.map(producto => {return <CardCart item={producto}/> })
        } 
                </Grid>

                <Grid
                    direction="row"
                >
                    <Typography variant="h6" gutterBottom> Total: {subTotal.reduce( (acc,producto) =>acc+producto,0)}</Typography>
                    <Button variant="contained" color="primary" onClick={handlerSubmit} >Comprar</Button>
                </Grid>
        </Grid>
    

    </ThemeProvider>
    <Footer />

    </>
)
}