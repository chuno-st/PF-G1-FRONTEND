import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {getProductById, FilterBy, findMatch} from '../../actions/actions';
import NavMyAccount from "../MyAccount/NavMyAccount";
import Footer from "../Footer/Footer";
import { Card , CardHeader, Avatar, IconButton, CardMedia, CardActions, Box } from "@material-ui/core";
import MoreVertIcon from '@material-ui/icons/MoreVert';
import BasicCard from "../Card/Card";
import FavoriteIcon from '@material-ui/icons/Favorite';
import { useNavigate } from 'react-router-dom';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import AddIcon from '@material-ui/icons/Add';
import {CssBaseline} from '@material-ui/core';

import Button from '@material-ui/core/Button'
import { makeStyles, createTheme, ThemeProvider } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: theme.spacing(4)
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
//   paper: {
//     padding: theme.spacing(2),
//     textAlign: 'center',
//     color: theme.palette.text.secondary,
//   },
//   palette:{
//     backgroundColor: 'blueGrey'
//   },
//   media: {
//     height: 0,
//     paddingTop: '56.25%', // 16:9
//   },
//   expand: {
//     transform: 'rotate(0deg)',
//     marginLeft: 'auto',
//     transition: theme.transitions.create('transform', {
//       duration: theme.transitions.duration.shortest,
//     }),
//   },
//   expandOpen: {
//     transform: 'rotate(180deg)',
//   },
//   avatar: {
//     backgroundColor: '#4fc3f7',
//   },

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
    const classes = useStyles()
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
      <div className={classes.root}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
          <NavMyAccount/>
          <Grid item xs={12}
            container
            direction="colum"
            justifyContent="center"
            alignItems="center">

            <Grid item xs={6}
            container
            direction="row"
            justifyContent="center"
            alignItems="center"
            >
                    <h2>{product.name}</h2>
                    <img src={product.image}></img>
                    <h1> ${product.price}</h1>
           </Grid> 
          
          
           <Grid item xs={6}
           container
           direction="row"
           justifyContent="center"
           alignItems="center"
           >
                    <p>{product.description}</p>
            </Grid>
          
          <Grid item xs={12}
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
          > 
            <Button variant= 'contained' onClick={handleclick}>Ver productos similares</Button>
            { matches.map( i => {
              if(i.name === product.name) {return}
              return <BasicCard key={i.id} item={i}></BasicCard>
              })
            } 
          </Grid> 
    </Grid>
    <Footer />
    </ThemeProvider>
    </div>
    
  )
}