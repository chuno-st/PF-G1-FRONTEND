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
          <NavMyAccount />
        <CssBaseline />
          <Grid 
            xs={12}
            container
            direction="colum"
            justifyContent="center"
            alignItems="center">

            <Grid item xs={6} 
            direction="column"
            justifyContent="center"
            alignItems="center"
            >
                    <Box 
                    padding={15}
                    alignContent='center'
                    alignItems='center'
                    direction = 'column'
                    >
                    <h1>{(product.name)}</h1>
                    <img src={product.image}
                    ></img>
                    <h1> ${product.price}</h1>
                    </Box>
           </Grid> 
          
         
           <Grid item xs={6} md={6}
           container
           direction="row"
           justifyContent="center"
           alignItems="center"
           >
            <h2>{product.description}</h2>
            </Grid>

            <Typography align='center' gutterBottom variant='h5'> 
              <Button variant= 'contained' onClick={handleclick}>Ver productos similares</Button>          
            </Typography>
            
              
           
          <Grid    
            container
            direction="row"
            alignItems="center"
            justifyContent="space-between"
            // marginBotton='10px'
          > 
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
    <Footer />

    </ThemeProvider>
    </div>
    
  )
}