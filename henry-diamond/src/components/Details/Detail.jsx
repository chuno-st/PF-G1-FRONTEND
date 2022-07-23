import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {getProductById, FilterBy, findMatch} from '../../actions/actions';
import NavPelado from "../MyAccount/Navpelado";
import Footer from "../Footer/Footer";
import { Button } from "@material-ui/core";
import BasicCard from "../Card/Card";


export default function Detail () {

    const matches = useSelector(state => state.matches)
    const { id } = useParams()
    const dispatch = useDispatch()
    const product = useSelector(state => state.product)

    useEffect(() => {
        dispatch(getProductById(id))
        
    },[id])
    
    const handleclick = () => {
        dispatch(findMatch(product.subCategory_id))    
    }
    
   
    return (
        
        <div>
        <NavPelado/>
        <h2>{product.name}</h2>
        <img src={product.image}></img>
        <h3>{product.price}</h3>
        <p>{product.description}</p>
        <div>
        
       <Button onClick={handleclick}>Ver productos similares</Button>
       { matches.map( i => {
        if(i.name === product.name) {return}
       return <BasicCard key={i.id} item={i}></BasicCard>
    })
        } 
    </div>
    
        <Footer></Footer>
    </div>
    
  )
}