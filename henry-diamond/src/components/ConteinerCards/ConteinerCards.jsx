import { useEffect } from "react";
import {useDispatch, useSelector} from "react-redux";
import {getAllItems} from "../../actions/actions";
import BasicCard from "../Card/Card";
import { Grid,Box } from "@mui/material";
// import './ConteinerCards.css'

export default function ContainerCards() {
const items = useSelector(state => state.items);
const dispatch = useDispatch();
useEffect(() => {
  dispatch(getAllItems())}
  , [dispatch])

return (


    <div>
      <Box sx={{ 
        marginRight: 5,
        marginLeft: 5,
        marginTop: 5,
        marginBottom: 10,

      }}>

      
      <Grid container spacing={0.5}>


        {items.length ? (
    
          items.map(item => (    //map para recorrer el array de items
            <Grid item xs={12} sm={6} md={2} key={item.id}>
              <BasicCard key={item.id} item={item} />
            </Grid>
              ))
        ):(
          <h1>Cargando...</h1>
        )
        }
      </Grid>
      </Box>
    </div>
)

}
