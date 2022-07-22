import { React, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";



export default function Productos() {
//    const dispatch = useDispatch;
   const productos = useSelector((state)=> state.items)

//    useEffect(()=>{
//     dispatch(getAllItems())
//    }, [dispatch])

   console.log( productos)
       return (
       <h1>Aca van los productos</h1>
       );
}
