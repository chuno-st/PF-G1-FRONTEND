import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {getProductById, FilterBy, findMatch} from '../../actions/actions';
import NavMyAccount from "../MyAccount/NavMyAccount";
import Footer from "../Footer/Footer";
import { Button } from "@material-ui/core";
import BasicCard from "../Card/Card";
import { ThemeProvider } from "@material-ui/core"
import { createTheme } from "@material-ui/core";



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
        <ThemeProvider theme={theme}>
            <div>
                <NavMyAccount/>
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
    </ThemeProvider>
    
  )
}