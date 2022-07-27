import { useEffect } from "react";
import {useDispatch, useSelector} from "react-redux";
import {getAllItems} from "../../actions/actions";
import BasicCard from "../Card/Card";
import { Grid, Button} from "@mui/material";
import { Box } from "@material-ui/core"
// import { margin } from "@mui/system";
import { useState } from "react";
// import Paginate from '../Paginate/Paginate.jsx';
import {CssBaseline, Typography} from '@material-ui/core';
import {Container} from '@material-ui/core';


export default function ContainerCards() {
const items = useSelector(state => state.items);
const [desde, setdesde] = useState(0); 
const [hasta, sethasta] = useState(12); 
// const dispatch = useDispatch();
// const { desde, hasta} = useSelector(state => state.paginado)

// useEffect(() => {
//   dispatch(getAllItems(desde,hasta))}
//   , [dispatch,desde,hasta]);
const products = items.slice(desde,hasta);

   const handleClick = () => {
    setdesde(desde + 12);
    sethasta(hasta + 12);
   }
  
  const handleClick2 = () => {
   
      setdesde(desde - 12);
      sethasta(hasta - 12);
  } 

  const miStorage = window.localStorage;
  // console.log(miStorage)



return (


    <div >
   <CssBaseline />
      <Grid container 
      xs={{
        maxWidth : 'auto' ,
        maxHeight: '100%',
      }}
      ld={{
        maxWidth: '100%'
      }}
      padding={2}
           >
        <Typography component="div" style={{ backgroundColor: '#bababa' }}>
     
            <Box 
              
              sx={{ 
              hight:'100%',
              width:'100%',
              
            }}
            
            >
                <Grid container spacing={3} 
                position='relative'
              
                >
                  {items.length ? (
                    
                    products.map(item => (    //map para recorrer el array de items
                      <Grid item 
                        xs={7}
                        sm={6} 
                        md={4}
                        lg={3} 
                        xl={2}
                      >
                        <BasicCard key={item.id} item={item} /> 
                </Grid>))
        ):(
                  <Box sx={{
                    hight: 'auto',
                    minWidth: '100%',
                    marginTop: '17%',
                    marginBottom: '17%',
                    marginLeft: 20,
                    marginRight: 20,
                  }}>
                    
                    <h1>Cargando...</h1>
                  </Box>
        )
      }
           </Grid>
          </Box>
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
        </Typography>
      </Grid>
    </div>
)

}
