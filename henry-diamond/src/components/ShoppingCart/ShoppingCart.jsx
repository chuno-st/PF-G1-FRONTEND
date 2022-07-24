import {useState} from "react";
import {useSelector,useDispatch} from "react-redux";
import { useEffect } from "react";
import CardCart from "../CardCart/CardCart";
import { Button } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";

export default function ShoppingCart(){
   const miStorage = window.localStorage;
    let Productos = Object.values(miStorage)
    let objetos = Productos.map(producto => {return JSON.parse(producto)})
    let productos = objetos.filter(producto => producto.hasOwnProperty('product_id'))
    console.log(productos.reduce( (acc,producto) =>acc+producto.cantidad,0))
    const priceTotal= productos.reduce( (acc,producto) =>acc+producto.price,0)
    const subTotal = productos.map((producto)=>producto.price*producto.cantidad)
    

    return (
    <>
    <h4>usted esta aqui</h4>
    {
        productos.map(producto => {return <CardCart item={producto}/> })
} 
    <Typography variant="h6" gutterBottom> Total: {subTotal.reduce( (acc,producto) =>acc+producto,0)}</Typography>
    <Button variant="contained" color="primary">  Comprar</Button>
    </>
)
}