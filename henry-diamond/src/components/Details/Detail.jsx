import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {getProductById, FilterBy, findMatch} from '../../actions/actions';
import NavMyAccount from "../MyAccount/NavMyAccount";
import Footer from "../Footer/Footer";
import { Box } from "@material-ui/core";
import BasicCard from "../Card/Card";
import {CssBaseline} from '@material-ui/core';
import Typography from "@material-ui/core/Typography";
import Button from '@material-ui/core/Button'
import { makeStyles, createTheme, ThemeProvider } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: "2 rem",
  },
}));


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
    // const nameUpper = product.name.toUpperCase()

    useEffect(() => {
        dispatch(getProductById(id))
        
    },[id])
    
    const handleclick = () => {
        dispatch(findMatch(product.subCategory_id))    
    }
    
   
    return (
      <div>
      <ThemeProvider theme={theme}>
        <Grid container >
          <Grid item xs={12} sm={12} xl={12}>
            <NavMyAccount/>              
          </Grid>

          <Grid 
            xs={12} sm={12} lg={12} xl={12} 
            container
            direction="colum"
            justifyContent="center"
            alignItems="center">
          
                    <Box 
                      padding={15}
                      alignContent='center'
                      alignItems='center'
                      direction = 'column'
                    >
                    <img src={product.image}/>
                    </Box>

                    <Box 
                      padding={15}
                      alignContent='center'
                      alignItems='center'
                      direction = 'column'
                    >
                    
                    <Typography align='center' gutterBottom variant='h5'> 
                      <h2>Producto: {(product.name)}</h2>
                    </Typography>
                    <h1> Precio: ${product.price}</h1>
                    </Box>
          
         


          <Grid item xs={12}
           container
           direction="row"
           justifyContent="center"
           alignItems="center"
           >
          <Typography align='center' gutterBottom variant='h5'> 
            <h2>{product.description}</h2>
          </Typography>
            </Grid>

            <Grid item xs={12} sm={12} lg={12} xl={12} >
              <Typography align='center' gutterBottom variant='h5'> 
                <Button variant= 'contained' onClick={handleclick}>Ver productos similares</Button>          
              </Typography>
            </Grid>

           

        <Grid item xs={12} sm={8} md={9} container spacing={20}>
            { matches.map( i => {
              if(i.name === product.name) {return}
              return (

                <Grid  xs={12} sm={12} md={4} lg={3} xl={3} container > 
                  <BasicCard key={i.id} item={i}></BasicCard>
                </Grid> 
            )
              
              })
            } 
        </Grid> 
      

    </Grid>
    </Grid>


    <Footer />

    </ThemeProvider>
    </div>
    
  )
}