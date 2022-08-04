import ImageDetail from './ImageDetail'
import React, { useEffect, useState } from "react";
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
import CardRating  from '../CardRating/CardRating';
import {capitalizeLetter} from '../../Utils/utils'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: "2 rem",
  },
}));


const theme = createTheme({
    palette: {
      primary:{
        main: '#e0e0e0',

      },
      
    },
    typography: {
        fontFamily: 'Roboto',
        fontWeightLight: 400,
        fontWeightRegular: 500,
        fontWeightMedium: 600,
        fontWeightBold: 700,

    }
  })
export default function Detail () {
    const matches = useSelector(state => state.matches)
    const { id } = useParams()
    const dispatch = useDispatch()
    const product = useSelector(state => state.product)
    // const nameUpper = product.name.toUpperCase()
    const [showProducts, setShowProducts] = useState(false)
    
    // console.log(prodSimil, 'detaildetail')
    
    useEffect(() => {
      dispatch(getProductById(id))
      
      
    },[id])
    
    
    const handleclick = () => {
      if(product) dispatch(findMatch(product.subCategory_id))
      setShowProducts(!showProducts)    
    }
    
    
   
    return (

      <React.Fragment>
        <ThemeProvider theme={theme}>
          <CssBaseline />
            <Grid container>
                <Grid item xs={12}>
              <NavMyAccount/>            
                </Grid>
          
              <Grid item xs={12} ms={6} md={6} xl={6} lg={6}
              >
                    <Box 
                      //bgcolor='pink'
                      textAlign='left'
                      pt={20}
                      pl={10}
                      m={1}
                      //border={1}
                      //borderColor='black'

                     >
                        <ImageDetail/>

                    </Box>
              </Grid>
              <Grid item xs={12} ms={6} md={6} xl={6} lg={6} >
                    <Box 
                      //bgcolor='pink'
                      py={20}
                      //border={1}
                      //borderColor='black'
                      
                    >
                      <Typography align='center' gutterBottom variant='h2' > 
                        <Box 
                        bgcolor='C8B6FF'
                        boxShadow='4px 1px 8px #7a7a7a'>
                          <div>{capitalizeLetter((product.name))}</div>
                        </Box>
                      </Typography>

                      <Typography align='center' gutterBottom variant='h3'> 
                        <div>${product.price}</div>
                      </Typography>
                        
                      <Typography align='center' gutterBottom variant='h4'> 
                       <div>{product.description}</div>
                      </Typography>
                    </Box>

              </Grid>

              <Grid item xs={12} ms={12} md={12} xl={12} lg={12}
              alignItems='center'
              >
                  <Box 
                    bgcolor='#B8C0FF'
                    p={2}
                    boxShadow='4px 6px 8px #7a7a7a'
                  >
                    <Typography align='center' gutterBottom variant='h5'> 
                        <Button variant= 'contained'  onClick={handleclick}>Ver productos similares</Button>          
                        {/* <Button variant= 'contained' onClick={handleClose}>Ver Menos</Button> */}
                    </Typography>
                    </Box>
              </Grid>

            {
             
             showProducts && <Grid item xs={12} sm={8} md={9} container spacing={50}>


            { matches.map( i => {
              if(i.name === product.name) {return}
              return (

                <Grid  xs={12} sm={12} md={6} lg={3} xl={3} container > 
                  <Box my={10} ml={30}>
                    <BasicCard key={i.id} item={i}></BasicCard>
                  </Box>

                </Grid> 
            )
              
              })
            } 
        </Grid> 
            }

        <Grid item xs={12} ms={12} md={12} xl={12} lg={12}
              alignItems='center'
              >
                  <Box 
                    bgcolor='#B8C0FF'
                    p={2}
                    //border={1}
                    //borderColor='black'
                    boxShadow='4px 6px 8px #7a7a7a'
                  >
                    <Typography align='center' gutterBottom variant='h4'> 
                        Reseñas de Usuarios        
                    </Typography>
                    
                    </Box>
              </Grid>

              <Grid item xs={12} ms={12} md={12} xl={12} lg={12}>
                            <Box 
                                // bgcolor='lavenderBlue'
                                p={5}
                                border={0}
                                borderColor='black'
                                
                                boxShadow='4px 6px 8px #7a7a7a'
                              >
                         
                          <CardRating 
                          product = {product}
                          />
                         


                            </Box>
              </Grid>
              <Grid item xs={12}>
                  <Footer></Footer>
              </Grid>
              </Grid>

      </ThemeProvider>
    </React.Fragment>
    );
}