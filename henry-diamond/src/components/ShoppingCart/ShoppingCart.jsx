import {useState} from "react";
import {useSelector,useDispatch} from "react-redux";
import BasicCard from "../Card/Card";


export default function ShoppingCart(){
   const miStorage = window.localStorage;
    const carrito = useSelector(state => state.shoppingCart);
    console.log(carrito)
    const [carritoStorage, setCarrito] = useState(miStorage)
    let Productos = Object.values(miStorage)
    

    
    return (
    <>
    <h4>usted esta aqui</h4>
    {
        Productos.map(item => <BasicCard  item={JSON.parse(item)}        ></BasicCard>)
    }
    </>
)
}