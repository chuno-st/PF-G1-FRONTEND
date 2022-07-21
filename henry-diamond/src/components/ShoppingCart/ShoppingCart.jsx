import {useState} from "react";
import {useSelector,useDispatch} from "react-redux";
import BasicCard from "../Card/Card";
export default function ShoppingCart(){
const carrito = useSelector(state => state.shoppingCart);
console.log(carrito)
return (
    <>
    <h4>usted esta aqui</h4>
    {
        carrito.map(item => <BasicCard  item={item}        ></BasicCard>)
    }
    </>
)
}