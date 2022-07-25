import {useState} from "react";
import {useSelector,useDispatch} from "react-redux";
import { useEffect } from "react";
import CardCart from "../CardCart/CardCart";
import { Button } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import { postCart } from "../../actions/actions";
import { useAuth0 } from "@auth0/auth0-react";
import { useNavigate, Redirect } from "react-router-dom";


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
    <>
    <h4>usted esta aqui</h4>
    {
        productos.map(producto => {return <CardCart item={producto}/> })
    } 
    <Typography variant="h6" gutterBottom> Total: {subTotal.reduce( (acc,producto) =>acc+producto,0)}</Typography>
    <Button variant="contained" color="primary" onClick={handlerSubmit} >  Comprar</Button>
    { link.length && window.location === link }
    </>
)
}