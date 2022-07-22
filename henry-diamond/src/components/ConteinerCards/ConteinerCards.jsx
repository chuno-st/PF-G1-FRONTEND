import { useEffect } from "react";
import {useDispatch, useSelector} from "react-redux";
import {getAllItems} from "../../actions/actions";
import BasicCard from "../Card/Card";
import { Grid,Box,Button } from "@mui/material";
// import { margin } from "@mui/system";
import { useState } from "react";
// import Paginate from '../Paginate/Paginate.jsx'


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
   
     <Button onClick={handleClick2} disabled={desde<=0}>Anterior</Button>
     <Button onClick={handleClick} disabled={products.length!==12}>Siguiente</Button> 
    
     
      <Box 
        
        sx={{ 
        hight:'100%',
        width:'100%',
        marginRight: 5,
        marginLeft: 5,
        marginTop: 5,
        marginBottom: 10,
      }} 
      >
      <Grid container spacing={3} >
        {items.length ? (

          products.map(item => (    //map para recorrer el array de items
            <Grid item 
            xs={12} spacing={3}
            sm={6} spacing={3}
            md={4} spacing={3}
            lg={2} spacing={3}
            >
              <BasicCard key={item.id} item={item} /> 
      </Grid>))
        ):(
          <Box sx={{
            hight: 'auto',
            // minWidth: '100%',
            marginTop: '17%',
            marginBottom: '17%',
          }}>
            
            <h1>Cargando...</h1>
          </Box>
        )
        }
      </Grid>
      </Box>
    </div>
)

}
