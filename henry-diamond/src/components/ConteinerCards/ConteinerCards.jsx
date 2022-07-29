import { useEffect } from "react";
import {useDispatch, useSelector} from "react-redux";
import {getAllItems} from "../../actions/actions";
import BasicCard from "../Card/Card";
import { Grid, Button} from "@mui/material";
import { Box } from "@material-ui/core"
import { useState } from "react";
import {CssBaseline, Typography} from '@material-ui/core';
import {Container} from '@material-ui/core';
import LinearIndeterminate from '../Loading/Loading2'


export default function ContainerCards() {
const items = useSelector(state => state.items);
const [desde, setdesde] = useState(0); 
const [hasta, sethasta] = useState(12); 
const products = items.slice(desde,hasta);

   const handleClick = () => {
    setdesde(desde + 12);
    sethasta(hasta + 12);
   }
  
  const handleClick2 = () => {
   
      setdesde(desde - 12);
      sethasta(hasta - 12);
  } 

  



return (


    <div >
   <CssBaseline />
      <Grid container 
      padding={2}
           >
            
                <Grid container spacing={5} 
                position='relative'
              
                >
                  {items.length ? (
                    
                    products.map(item => (    //map para recorrer el array de items
                      <Grid item 
                        key={item.id}
                        xs={12}
                        sm={6} 
                        md={4}
                        lg={3} 
                        xl={3}
                      >
<<<<<<< HEAD
                        <BasicCard item={item} /> 
=======
                   
                        <BasicCard key={item.id} item={item} /> 
                 

>>>>>>> 4d3e32c1b6662bfb7e531f0a40a05729580390e0
                </Grid>))
        ):(
                <Container
                maxWidth="xl"
                >
                <Box
                pb={100}
                >
                    <LinearIndeterminate />
                </Box>
                </Container>
        )
      }
           </Grid>
          
          <Grid item xs={12} sm={12} md={12} 
          container
          direction="row"
          justifyContent="right"
          alignItems="right"
          padding= "20px"
          
          >
            <Grid 
            alignItems="center"
            direction="column"
           
            >
                <Button onClick={handleClick2} disabled={desde<=0}  variant='outlined' color='inherit'>Anterior</Button>
            </Grid>
            <Grid  
            alignItems="center" 
            direction="column"
            
            >
                <Button onClick={handleClick} disabled={products.length!==12} variant='outlined' color='inherit'>Siguiente</Button> 
            </Grid>
          </Grid>
      </Grid>
    </div>
)

}
