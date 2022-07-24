import {useState} from "react";
import {useSelector,useDispatch} from "react-redux";
import { useEffect } from "react";
import CardCart from "../CardCart/CardCart";


export default function ShoppingCart(){
   const miStorage = window.localStorage;
    let Productos = Object.values(miStorage)
    let objetos = Productos.map(producto => {return JSON.parse(producto)})

    return (
    <>
    <h4>usted esta aqui</h4>
    {
        objetos.map(producto => {
            if (producto.hasOwnProperty('product_id')){
                console.log(producto)
                return <CardCart item={producto}/>
            }else return
        })
}
    </>
)
}